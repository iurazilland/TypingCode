"use client";

import React, { useEffect, useRef } from 'react';
import { useTypingStore } from '@/lib/store';
import { useLocaleStore } from '@/lib/i18n';
import styles from './TypingArea.module.css';

interface TypingAreaProps {
    className?: string;
    isError?: boolean;
    onFinalComplete?: () => void;
}

export default function TypingArea({ className, isError, onFinalComplete }: TypingAreaProps) {
    const { targetCode, userInput, setUserInput, isCompleted, nextSet, codeSets, currentSetIndex } = useTypingStore();
    const { currentLocale, t } = useLocaleStore();
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isOverlaySuppressed, setIsOverlaySuppressed] = React.useState(false);

    const isAtEnd = userInput.length >= targetCode.length;
    const isAllSetsCompleted = isCompleted && currentSetIndex === codeSets.length - 1;

    // Can proceed if perfectly matched OR if reached end and NO python error
    // IMPORTANT: Treat isError as false if it's explicitly false, not just undefined
    const canProceed = isCompleted || (isAtEnd && isError === false);
    // Show error inducement if reached end but HAS python error AND not suppressed
    const hasErrorAtEnd = isAtEnd && isError === true && !isOverlaySuppressed;

    // Reset suppression when user typing or changing sets
    useEffect(() => {
        setIsOverlaySuppressed(false);
    }, [userInput, currentSetIndex]);

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

    // 2. Handle Enter/Backspace to move to next set or next level or dismiss error
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                if (canProceed) {
                    e.preventDefault();
                    if (isAllSetsCompleted) {
                        onFinalComplete?.();
                    } else {
                        nextSet();
                    }
                }
            } else if (e.key === 'Backspace' || e.key === 'Escape') {
                if (hasErrorAtEnd) {
                    setIsOverlaySuppressed(true);
                    inputRef.current?.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [canProceed, isAllSetsCompleted, nextSet, onFinalComplete, hasErrorAtEnd]);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (canProceed) return;

        const newValue = e.target.value;

        // Prevent adding a newline if it would be "extra" at the very end
        if (newValue.endsWith('\n') && !targetCode.includes('\n', userInput.length)) {
            if (isAtEnd) return;
        }

        setUserInput(newValue);
    };

    const renderTypingClubView = () => {
        if (typeof targetCode !== 'string') {
            return <div className={styles.singleCodeBlock}>Error: Invalid code format</div>;
        }

        const targetLines = targetCode.split('\n');
        const userLines = userInput.split('\n');

        // Active line is where the user is currently typing
        const activeLineIdx = userLines.length - 1;
        const activeColIdx = userLines[activeLineIdx].length;

        return (
            <div className={styles.singleCodeBlock}>
                {targetLines.map((targetLine, lineIdx) => {
                    const typedLine = userLines[lineIdx] || "";
                    const isLastLine = lineIdx === targetLines.length - 1;
                    const isActive = lineIdx === activeLineIdx;

                    const lineLength = Math.max(targetLine.length, typedLine.length);
                    const spans = [];

                    for (let i = 0; i < lineLength; i++) {
                        const targetChar = targetLine[i];
                        const typedChar = typedLine[i];
                        const isCursorHere = isActive && i === activeColIdx;

                        let className = styles.char;
                        let displayChar = targetChar || "";

                        if (i < typedLine.length) {
                            displayChar = typedChar;
                            if (i < targetLine.length && typedChar === targetChar) {
                                className = `${styles.char} ${styles.correct}`;
                            } else {
                                className = `${styles.char} ${styles.incorrect}`;
                            }
                        } else {
                            className = `${styles.char} ${styles.pending}`;
                        }

                        spans.push(
                            <span key={i} className={styles.charWrapper}>
                                {isCursorHere && <span className={styles.cursor} />}
                                <span className={className}>{displayChar}</span>
                            </span>
                        );
                    }

                    // Cursor at the very end of this line (after all chars including extra ones)
                    const isCursorAtEOL = isActive && activeColIdx >= lineLength;

                    return (
                        <div key={lineIdx} className={styles.line}>
                            {spans}
                            {!isLastLine && (
                                <span className={styles.charWrapper}>
                                    {isCursorAtEOL && <span className={styles.cursor} />}
                                    <span className={`${styles.char} ${userLines[lineIdx + 1] !== undefined ? styles.correct : styles.pending}`}>
                                        ↵
                                    </span>
                                </span>
                            )}
                            {isLastLine && isCursorAtEOL && <span className={styles.cursor} />}
                        </div>
                    );
                })}
            </div>
        );
    };

    const t_checkCode = currentLocale === 'ko' ? '코드를 확인해 주세요!' : 'Check your code!';
    const t_errorDesc = currentLocale === 'ko' ? '터미널에 오류가 발생했습니다. 수정이 필요합니다.' : 'There is an error in your terminal. Please fix it.';
    const t_fixBtn = currentLocale === 'ko' ? '코드 수정하기' : 'Fix Code';
    const t_nextSet = currentLocale === 'ko' ? '다음 세트 ↵' : 'Next Set ↵';
    const t_nextLevel = currentLocale === 'ko' ? '다음 단계 ↵' : 'Next Level ↵';
    const t_completed = currentLocale === 'ko' ? '과정 완료! 🎉' : 'Course Completed! 🎉';

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

            {canProceed && (
                <div className={styles.successOverlay}>
                    {isAllSetsCompleted ? (
                        <div className={styles.successContent}>
                            <div className={styles.checkIcon}>🎉</div>
                            <h3 style={{ color: '#fbbf24' }}>{t_completed}</h3>
                            <button className={styles.overlayButton} onClick={() => onFinalComplete?.()}>
                                {t_nextLevel}
                            </button>
                        </div>
                    ) : (
                        <button className={styles.overlayButton} onClick={() => nextSet()}>
                            {t_nextSet}
                        </button>
                    )}
                </div>
            )}

            {hasErrorAtEnd && (
                <div className={`${styles.successOverlay} ${styles.errorOverlay}`}>
                    <div className={styles.successContent}>
                        <div className={styles.checkIcon}>⚠️</div>
                        <h3 style={{ color: '#ef4444' }}>{t_checkCode}</h3>
                        <p>{t_errorDesc}</p>
                        <button className={styles.secondaryButton} onClick={() => {
                            setIsOverlaySuppressed(true);
                            inputRef.current?.focus();
                        }}>
                            {t_fixBtn}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
