"use client";

import { useState, useEffect, useCallback } from 'react';

// Define types for Pyodide
interface PyodideInterface {
    runPython: (code: string) => any;
    runPythonAsync: (code: string) => Promise<any>;
    setStdout: (options: { batched: (msg: string) => void }) => void;
    setStderr: (options: { batched: (msg: string) => void }) => void;
    loadPackage: (packages: string[]) => Promise<void>;
    loadPackagesFromImports: (code: string) => Promise<void>;
    globals: any;
}

declare global {
    interface Window {
        loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInterface>;
    }
}

export function usePyodide() {
    const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isPackagesLoading, setIsPackagesLoading] = useState(false);
    const [output, setOutput] = useState<string[]>([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let mounted = true;

        const initPyodide = async () => {
            if (pyodide || !mounted) return;

            try {
                if (!window.loadPyodide) {
                    if (!document.getElementById('pyodide-script')) {
                        const script = document.createElement('script');
                        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
                        script.id = 'pyodide-script';
                        document.body.appendChild(script);
                    }
                    await new Promise<void>((resolve) => {
                        const check = () => {
                            if (window.loadPyodide) resolve();
                            else setTimeout(check, 100);
                        };
                        check();
                    });
                }

                if (!pyodide && window.loadPyodide) {
                    const py = await window.loadPyodide({
                        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
                    });

                    // Raw output redirection to avoid buffering issues
                    py.runPython(`
                        import sys
                        from pyodide.ffi import create_proxy

                        class WebOutput:
                            def __init__(self, callback):
                                self.callback = callback
                            def write(self, s):
                                self.callback(s)
                            def flush(self):
                                pass

                        def setup_stdout(cb):
                            sys.stdout = WebOutput(create_proxy(cb))
                            sys.stderr = WebOutput(create_proxy(cb))
                    `);

                    const outputCallback = (msg: string) => {
                        if (mounted) setOutput((prev) => [...prev, msg]);
                    };

                    py.globals.get("setup_stdout")(outputCallback);

                    if (mounted) {
                        setPyodide(py);
                        setIsLoading(false);
                    }
                }
            } catch (err) {
                if (mounted) {
                    console.error("Pyodide init failed:", err);
                    setIsLoading(false);
                }
            }
        };

        initPyodide();

        return () => { mounted = false; };
    }, []);

    const runCode = useCallback(async (code: string) => {
        if (!pyodide) return;

        setOutput([]);
        setIsError(false);

        try {
            // Check for imports and load required packages automatically
            setIsPackagesLoading(true);
            await pyodide.loadPackagesFromImports(code);
            setIsPackagesLoading(false);

            // Execute the code
            await pyodide.runPythonAsync(code);

            // Explicitly flush to handle any remaining output
            pyodide.runPython('import sys; sys.stdout.flush()');
        } catch (err: any) {
            setIsPackagesLoading(false);
            setIsError(true);
            setOutput((prev) => [...prev, String(err)]);
        }
    }, [pyodide]);

    const clearOutput = useCallback(() => {
        setOutput([]);
        setIsError(false);
    }, []);

    return { runCode, clearOutput, output, isLoading, isPackagesLoading, isError };
}
