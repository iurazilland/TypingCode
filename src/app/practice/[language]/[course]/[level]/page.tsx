"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import TypingArea from '@/components/editor/TypingArea';
import ConsoleOutput from '@/components/console/ConsoleOutput';
import VirtualKeyboard from '@/components/ui/VirtualKeyboard';
import { usePyodide } from '@/hooks/usePyodide';
import { useTypingStore } from '@/lib/store';
import { useProgressStore } from '@/lib/progress';
import { useLocaleStore } from '@/lib/i18n';
import { createClient } from '@/lib/supabase/client';
import { Level } from '@/lib/types';
import styles from './TypingPage.module.css';

export default function PracticePage() {
    const { runCode, clearOutput, output, isLoading, isPackagesLoading, isError } = usePyodide();
    const { userInput, isCompleted, targetCode, setLevelData, currentSetIndex, codeSets, nextSet } = useTypingStore();
    const { currentLocale } = useLocaleStore();
    const { markLevelComplete } = useProgressStore();

    const params = useParams();
    const router = useRouter();
    const supabase = createClient();

    const [levelData, setLevelDataState] = useState<Level | null>(null);
    const [isDataLoading, setIsDataLoading] = useState(true);

    const language = (params.language as string) || 'python';
    const courseId = (params.course as string) || 'basic';
    const levelId = Number(params.level);

    useEffect(() => {
        const fetchLevel = async () => {
            setIsDataLoading(true);

            const { data, error } = await supabase
                .from('levels')
                .select('*')
                .eq('language', language)
                .eq('course_id', courseId)
                .eq('list_order', levelId)
                .single();

            if (data) {
                setLevelDataState(data);
                setLevelData(data.target_code);
            }
            setIsDataLoading(false);
        };
        fetchLevel();
    }, [language, courseId, levelId, setLevelData]);

    const handleRunCode = useCallback(async (code: string) => {
        let preppedCode = code;
        if (code.includes('matplotlib')) {
            preppedCode = `
import matplotlib
matplotlib.use('module://matplotlib.backends.html5_canvas_backend')
import matplotlib.pyplot as plt
from js import document

plt.figure()
${code}
`;
        }
        await runCode(preppedCode);
    }, [runCode]);

    // Track last executed code content to prevent redundant runs
    const lastExecCodeRef = useRef<string>("");

    // Real-time execution: Run code only when a line is finished or set is completed
    useEffect(() => {
        if (!levelData) return;

        const completedLines = (userInput.match(/\n/g) || []).length;
        const isFullyDone = isCompleted || userInput.length >= targetCode.length;

        // Trigger only if newline entered or finished
        if (userInput.endsWith('\n') || isFullyDone) {
            const inputLines = userInput.split('\n');
            const linesToRun = isFullyDone ? inputLines : inputLines.slice(0, completedLines);

            const currentCodeToRun = [
                levelData.pre_code || '',
                linesToRun.join('\n'),
                isFullyDone ? (levelData.post_code || '') : ''
            ].join('\n').trim();

            // Only run if the code content has actually changed since last execution
            if (lastExecCodeRef.current !== currentCodeToRun) {
                if (linesToRun.length > 0 || isFullyDone) {
                    handleRunCode(currentCodeToRun);
                    lastExecCodeRef.current = currentCodeToRun;
                }
            }

            if (isFullyDone && currentSetIndex === codeSets.length - 1 && isCompleted) {
                markLevelComplete(levelData.list_order);
            }
        }
    }, [userInput, levelData, handleRunCode, isCompleted, currentSetIndex, codeSets.length, markLevelComplete, targetCode.length]);

    // Reset line count and terminal when set index changes
    useEffect(() => {
        clearOutput();
    }, [currentSetIndex, clearOutput]);

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const availableHeight = window.innerHeight - 100;
            const targetHeight = 1100;
            const newScale = Math.min(1, availableHeight / targetHeight);
            setScale(newScale);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isDataLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (!levelData) {
        return (
            <div className={styles.container} style={{ justifyContent: 'center' }}>
                <h1>Level Not Found</h1>
                <Link href={`/practice/${language}/${courseId}`} className={styles.navLink}>Return to Level Selection</Link>
            </div>
        );
    }

    const title = currentLocale === 'ko' ? (levelData.title_ko || levelData.title_en) : levelData.title_en;
    const description = currentLocale === 'ko' ? (levelData.desc_ko || levelData.desc_en) : levelData.desc_en;

    // Get guide for the CURRENT set
    const currentSet = codeSets[currentSetIndex];
    const guide = currentLocale === 'ko'
        ? (currentSet?.guide_ko || currentSet?.guide_en)
        : (currentSet?.guide_en || currentSet?.guide_ko);

    const isAllSetsCompleted = isCompleted && currentSetIndex === codeSets.length - 1;

    return (
        <main className={styles.container}>
            {isPackagesLoading && (
                <div className={styles.packageLoader}>
                    <div className={styles.loaderSpinner}></div>
                    <p>Installing Python Packages...</p>
                    <span>This might take a moment on the first run.</span>
                </div>
            )}

            <div className={styles.scaleWrapper} style={{ zoom: scale }}>
                <header className={styles.header}>
                    <div className={styles.titleGroup}>
                        <Link href={`/practice/${language}/${courseId}`} className={styles.navLink}>&larr; Levels</Link>
                        <h1>
                            {title} <span className={styles.levelBadge}>#{levelId}</span>
                            <span className={styles.setCounter}>Set {currentSetIndex + 1} / {codeSets.length}</span>
                        </h1>
                    </div>
                </header>

                <div className={styles.workspace}>
                    <div className={styles.topRow}>
                        <section className={styles.section}>
                            <ConsoleOutput
                                output={output}
                                isError={isError}
                                isLoading={isLoading}
                                className="console-output"
                            />
                        </section>

                        <section className={`${styles.section} ${styles.viewerSection}`}>
                            <div className={styles.viewerHeader}>
                                <span>{courseId === 'basic' ? 'Guide / Instruction' : 'Visualization / Viewer'}</span>
                            </div>
                            <div className={styles.viewerContent}>
                                {(courseId !== 'basic' && (typeof targetCode === 'string' && targetCode.includes('plt.') || levelData.pre_code?.includes('plt.'))) ? (
                                    <div id="plot-target" className={styles.plotTarget}>
                                        {!output.length && <div className={styles.plotPlaceholder}>Graph will appear here</div>}
                                    </div>
                                ) : (
                                    <div className={styles.instructionBox}>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        {guide && (
                                            <div className={styles.levelGuide}>
                                                <strong>💡 Tip:</strong> {guide}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                    <section className={`${styles.section} ${styles.bottomRow}`}>
                        <TypingArea
                            className="typing-area"
                            isError={isError}
                            onFinalComplete={() => {
                                if (levelId < 100) {
                                    router.push(`/practice/${language}/${courseId}/${levelId + 1}`);
                                } else {
                                    router.push(`/practice/${language}/${courseId}`);
                                }
                            }}
                        />
                    </section>
                </div>

                <div className={styles.keyboardContainer}>
                    <VirtualKeyboard nextChar={userInput.length < targetCode.length
                        ? targetCode[userInput.length]
                        : ''}
                    />
                </div>
            </div>
        </main>
    );
}
