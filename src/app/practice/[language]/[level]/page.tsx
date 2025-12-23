"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import TypingArea from '@/components/editor/TypingArea';
import ConsoleOutput from '@/components/console/ConsoleOutput';
import VirtualKeyboard from '@/components/ui/VirtualKeyboard';
import { usePyodide } from '@/hooks/usePyodide';
import { useTypingStore } from '@/lib/store';
import { PYTHON_LEVELS } from '@/lib/data/python-levels';
import { useProgressStore } from '@/lib/progress';
import { useLocaleStore } from '@/lib/i18n';
import styles from './TypingPage.module.css';

export default function PracticePage() {
    const { runCode, output, isLoading, isError } = usePyodide();
    const { userInput, isCompleted, setTargetCode } = useTypingStore();
    const { currentLocale } = useLocaleStore();
    const { markLevelComplete } = useProgressStore(); // Hook into progress store

    const params = useParams();
    const router = useRouter();

    // Find Level Data
    const levelId = Number(params.level);
    const levelData = PYTHON_LEVELS.find(l => l.id === levelId);

    // Initialize Level
    useEffect(() => {
        if (levelData) {
            setTargetCode(levelData.code);
        }
    }, [levelData, setTargetCode]);

    // Auto-run when completed (Optional) & Mark Complete
    useEffect(() => {
        if (isCompleted) {
            runCode(userInput);
            if (levelData) {
                markLevelComplete(levelData.id);
            }
        }
    }, [isCompleted, userInput, runCode, levelData, markLevelComplete]);

    // Scale Logic
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            // Calculate available height (viewport - header approx 60px - buffer 20px)
            const availableHeight = window.innerHeight - 100; // Increased buffer for bottom spacing
            const targetHeight = 1100; // Increased target height to force smaller scale

            // If screen is smaller than target, scale down
            const newScale = Math.min(1, availableHeight / targetHeight);
            setScale(newScale);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Error State Layout
    if (!levelData) {
        return (
            <div className={styles.container} style={{ justifyContent: 'center' }}>
                <h1>Level Not Found</h1>
                <Link href="/practice/python" className={styles.navLink}>Return to Level Selection</Link>
            </div>
        );
    }

    // Localized Content
    const title = levelData.translations?.[currentLocale]?.title || levelData.title;
    const description = levelData.translations?.[currentLocale]?.description || levelData.description;

    return (
        <main className={styles.container}>
            <div
                className={styles.scaleWrapper}
                style={{ zoom: scale }}
            >
                {/* Header / Nav */}
                <header className={styles.header}>
                    <div className={styles.titleGroup}>
                        <Link href="/practice/python" className={styles.navLink}>&larr; Levels</Link>
                        <h1>
                            {title} <span className={styles.levelBadge}>#{levelId}</span>
                        </h1>
                        <p className={styles.description}>{description}</p>
                    </div>
                </header>

                <div className={styles.workspace}>
                    {/* Top/Left: Console Output (Execution Engine) */}
                    <section className={styles.section}>
                        <ConsoleOutput output={output} isError={isError} isLoading={isLoading} />
                        {isCompleted && !isLoading && (
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(74, 222, 128, 0.2)',
                                color: '#4ade80',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                ✨ Completed!
                            </div>
                        )}
                    </section>

                    {/* Bottom/Right: Typing Area (Source) */}
                    <section className={styles.section}>
                        <TypingArea />
                    </section>
                </div>

                {/* Bottom: Keyboard with Ghost Hands */}
                <div className={styles.keyboardContainer}>
                    <VirtualKeyboard nextChar={userInput.length < levelData.code.length
                        ? levelData.code[userInput.length]
                        : ''}
                    />
                </div>
            </div>
        </main>
    );
}
