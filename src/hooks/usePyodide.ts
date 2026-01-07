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

                    py.setStdout({
                        batched: (msg: string) => {
                            if (mounted) setOutput((prev) => [...prev, msg]);
                        }
                    });

                    py.setStderr({
                        batched: (msg: string) => {
                            if (mounted) {
                                setIsError(true);
                                setOutput((prev) => [...prev, msg]);
                            }
                        }
                    });

                    if (mounted) {
                        setPyodide(py);
                        setIsLoading(false);
                    }
                }
            } catch (err) {
                if (mounted) console.error("Pyodide init failed:", err);
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

            await pyodide.runPythonAsync(code);
        } catch (err: any) {
            setIsPackagesLoading(false);
            setIsError(true);
            setOutput((prev) => [...prev, String(err)]);
        }
    }, [pyodide]);

    return { runCode, output, isLoading, isPackagesLoading, isError };
}
