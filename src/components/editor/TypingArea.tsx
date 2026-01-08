"use client";

import React, { useEffect, useRef } from 'react';
import { useTypingStore } from '@/lib/store';
import styles from './TypingArea.module.css';

interface TypingAreaProps {
    className?: string;
    onFinalComplete?: () => void;
}

export default function TypingArea({ className, onFinalComplete }: TypingAreaProps) {
    const { targetCode, userInput, setUserInput, isCompleted, nextSet, codeSets, currentSetIndex } = useTypingStore();
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const isAllSetsCompleted = isCompleted && currentSetIndex === codeSets.length - 1;

    // 1. "Type Anywhere" - Global Focus Strategy
    useEffect(() => {
        // Auto-focus on mount
        const focusInput = () => {
            // Don't steal focus if the user is explicitly in another interactive element
            const activeTag = document.activeElement?.tagName;
            if (['BUTTON', 'A', 'INPUT', 'TEXTAREA'].includes(activeTag || '')) return;
            inputRef.current?.focus();
        };

        focusInput();

        const handleGlobalInteraction = (e: Event) => {
            // For both clicks and key presses, ensure focus is on our input
            const target = e.target as HTMLElement;
            if (['BUTTON', 'A', 'INPUT', 'TEXTAREA'].includes(target.tagName)) return;

            // Short delay to ensure browser doesn't block focus attempt
            setTimeout(() => inputRef.current?.focus(), 0);
        };

        document.addEventListener('click', handleGlobalInteraction);
        window.addEventListener('keydown', handleGlobalInteraction);
        window.addEventListener('focus', focusInput); // Focus when window is refocused

        return () => {
            document.removeEventListener('click', handleGlobalInteraction);
            window.removeEventListener('keydown', handleGlobalInteraction);
            window.removeEventListener('focus', focusInput);
        };
    }, []);

    // 2. Handle Enter to move to next set or next level
    useEffect(() => {
        if (!isCompleted) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent Enter from being typed in the next set

                if (isAllSetsCompleted) {
                    onFinalComplete?.();
                } else {
                    nextSet();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isCompleted, isAllSetsCompleted, nextSet, onFinalComplete]);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isCompleted) return; // Stop input after completion until next set
        setUserInput(e.target.value);
    };

    const renderTypingClubView = () => {
        if (typeof targetCode !== 'string') {
            return <div className={styles.singleCodeBlock}>Error: Invalid code format</div>;
        }

        return (
            <div className={styles.singleCodeBlock}>
                {targetCode.split('').map((char, index) => {
                    const inputChar = userInput[index];
                    const isCurrentCursor = index === userInput.length;

                    let className = styles.char;

                    if (index < userInput.length) {
                        if (inputChar === char) {
                            className = `${styles.char} ${styles.correct}`;
                        } else {
                            className = `${styles.char} ${styles.incorrect}`;
                        }
                    } else {
                        className = `${styles.char} ${styles.pending}`;
                    }

                    return (
                        <span key={index} className={styles.charWrapper}>
                            {isCurrentCursor && <span className={styles.cursor} />}
                            <span className={className}>
                                {char === '\n' ? '↵\n' : char}
                            </span>
                        </span>
                    );
                })}
                {userInput.length === (targetCode?.length || 0) && <span className={styles.cursor} />}
            </div>
        );
    };

    return (
        <div className={`${styles.container} ${className || ''}`} onClick={() => inputRef.current?.focus()}>
            {renderTypingClubView()}

            <textarea
                ref={inputRef}
                className={styles.hiddenInput}
                value={userInput}
                onChange={handleChange}
                spellCheck={false}
                autoComplete="off"
            />

            {isCompleted && (
                <div className={styles.successOverlay}>
                    {isAllSetsCompleted ? (
                        <div className={styles.successContent}>
                            <div className={styles.checkIcon}>🎉</div>
                            <h3 style={{ color: '#fbbf24' }}>Course Completed!</h3>
                            <button className={styles.overlayButton} onClick={() => onFinalComplete?.()}>
                                Next Level ↵
                            </button>
                        </div>
                    ) : (
                        <button className={styles.overlayButton} onClick={() => nextSet()}>
                            Next Set ↵
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
