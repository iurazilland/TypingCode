"use client";

import React from 'react';
import styles from './ConsoleOutput.module.css';

interface ConsoleOutputProps {
    output: string[]; // Array of output lines
    isError?: boolean;
    isLoading?: boolean;
    className?: string;
}

export default function ConsoleOutput({ output, isError, isLoading, className }: ConsoleOutputProps) {
    return (
        <div className={`${styles.container} ${className || ''}`}>
            <div className={styles.header}>
                <span className={styles.title}>Terminal / Output</span>
                {isLoading && <span className={styles.loading}>Running...</span>}
            </div>
            <div className={styles.content}>
                {output.length === 0 && !isLoading && (
                    <span className={styles.placeholder}>RUN CODE to see output...</span>
                )}
                {output.length > 0 && (
                    <pre className={`${styles.terminalText} ${isError ? styles.error : ''}`}>
                        {output.join('')}
                    </pre>
                )}
            </div>
        </div>
    );
}
