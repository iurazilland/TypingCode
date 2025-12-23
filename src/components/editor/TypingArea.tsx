"use client";

import React, { useEffect, useRef } from 'react';
import { useTypingStore } from '@/lib/store';
import styles from './TypingArea.module.css';

export default function TypingArea() {
    const { targetCode, userInput, setUserInput, isCompleted } = useTypingStore();
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // 1. "Type Anywhere" - Global Focus Strategy
    // We attach a click listener to the document. If the target isn't a specific interactive element,
    // we focus our hidden textarea. This allows users to type without explicitly clicking the box.
    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            // Allow interaction with buttons/inputs (e.g. Virtual Keyboard) without stealing focus immediately
            // But for general page clicks, focus the textarea.
            const target = e.target as HTMLElement;
            if (['BUTTON', 'A', 'INPUT'].includes(target.tagName)) return;

            // Prevent focus stealing if user is selecting text? 
            // For now, prioritize "always type" as requested.
            inputRef.current?.focus();
        };

        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, []);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    // Typing Club Style: Single view where the code changes color as you type.

    const renderTypingClubView = () => {
        return (
            <div className={styles.singleCodeBlock}>
                {targetCode.split('').map((char, index) => {
                    const inputChar = userInput[index];
                    const isCurrentCursor = index === userInput.length;

                    let className = styles.char;

                    if (index < userInput.length) {
                        // Past characters (Validated)
                        if (inputChar === char) {
                            className = `${styles.char} ${styles.correct}`;
                        } else {
                            className = `${styles.char} ${styles.incorrect}`;
                        }
                    } else {
                        // Future characters (Pending)
                        className = `${styles.char} ${styles.pending}`;
                    }

                    return (
                        <span key={index} className={styles.charWrapper}>
                            {/* Cursor rendering: If this is the current position, show cursor before char */}
                            {isCurrentCursor && <span className={styles.cursor} />}
                            <span className={className}>
                                {char === '\n' ? '↵\n' : char}
                            </span>
                        </span>
                    );
                })}
                {/* If cursor is at the very end of text */}
                {userInput.length === targetCode.length && <span className={styles.cursor} />}
            </div>
        );
    };

    return (
        <div className={styles.container} onClick={() => inputRef.current?.focus()}>
            {renderTypingClubView()}

            <textarea
                ref={inputRef}
                className={styles.hiddenInput}
                value={userInput}
                onChange={handleChange}
                spellCheck={false}
                autoComplete="off"
            />
            {isCompleted && <div className={styles.successMessage}>Completed!</div>}
        </div>
    );
}
