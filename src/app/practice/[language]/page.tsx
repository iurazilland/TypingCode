"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './LevelSelection.module.css';
import { PYTHON_LEVELS } from '@/lib/data/python-levels';
import { useLocaleStore } from '@/lib/i18n';
import { useProgressStore } from '@/lib/progress';

const LEVELS_PER_PAGE = 20;

export default function LevelSelectionPage() {
    const params = useParams();
    const language = params.language;
    const { currentLocale, t } = useLocaleStore();
    const { isLevelUnlocked, completedLevels } = useProgressStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // State for infinite scroll
    const [visibleCount, setVisibleCount] = useState(LEVELS_PER_PAGE);

    // Calculate the highest unlocked level to scroll to
    // Make sure we only use client data after mount to avoid hydration mismatch
    const safeCompletedLevels = mounted ? completedLevels : [];
    const latestLevelId = safeCompletedLevels.length > 0 ? Math.max(...safeCompletedLevels) + 1 : 1;

    // Ref for auto-scrolling to current level
    const currentLevelRef = useRef<HTMLAnchorElement>(null);
    const hasScrolledRef = useRef(false);

    // Load more levels
    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 10, PYTHON_LEVELS.length));
    };

    // Infinite scroll observer
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, []);

    // Expand list if current level is deeper than initial view
    useEffect(() => {
        if (mounted && latestLevelId > visibleCount) {
            // Ensure we load enough to see the latest level
            setVisibleCount(Math.ceil(latestLevelId / 10) * 10 + 10);
        }
    }, [latestLevelId, mounted, visibleCount]); // Run when latestLevelId changes -> depends on mounted

    // Auto-scroll to current level
    useEffect(() => {
        if (!hasScrolledRef.current && mounted && currentLevelRef.current) {
            currentLevelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            hasScrolledRef.current = true;
        }
    }, [visibleCount, latestLevelId, mounted]);

    // Handle Hydration: Because localStorage is client-side, initially everything might render based on default state.
    // Zustand persist usually handles this, but there might be a flash. 
    // For now, let's just render.

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumbs}>
                    <Link href="/practice" className={styles.crumbLink}>Languages</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{language}</span>
                </div>
                <h1 className={styles.title}>{t('select_level')}</h1>
                <p className={styles.subtitle}>{t('completed_levels')}: {mounted ? completedLevels.length : 0}</p>
            </header>

            <div className={styles.list}>
                {PYTHON_LEVELS.slice(0, visibleCount).map((level) => {
                    // Use Store Logic - BUT respect hydration
                    const isUnlocked = mounted ? isLevelUnlocked(level.id) : level.id === 1;
                    // Highlight the "next" level to play (first unlocked but not completed, generally)
                    const isNext = level.id === latestLevelId;

                    // Localized Title/Desc
                    const title = level.translations?.[currentLocale]?.title || level.title;
                    const desc = level.translations?.[currentLocale]?.description || level.description;

                    if (isUnlocked) {
                        return (
                            <Link
                                key={level.id}
                                href={`/practice/${language}/${level.id}`}
                                className={`${styles.card} ${level.type === 'challenge' ? styles.challenge : ''} ${isNext ? styles.activeLevel : ''}`}
                                ref={isNext ? currentLevelRef : null}
                            >
                                <div className={styles.cardContent}>
                                    <span className={`${styles.levelNum} ${safeCompletedLevels.includes(level.id) ? styles.completedNum : ''}`}>
                                        {safeCompletedLevels.includes(level.id) ? '✓' : level.id}
                                    </span>
                                    <div className={styles.info}>
                                        <span className={styles.levelTitle}>{title}</span>
                                        <span className={styles.levelDesc}>{desc}</span>
                                    </div>
                                    {level.type === 'challenge' && <span className={styles.challengeLabel}>CHALLENGE</span>}
                                </div>
                            </Link>
                        );
                    } else {
                        return (
                            <div key={level.id} className={`${styles.card} ${styles.locked}`}>
                                <div className={styles.cardContent}>
                                    <span className={styles.levelNum}>{level.id}</span>
                                    <div className={styles.info}>
                                        <span className={styles.levelTitle}>{title}</span>
                                        <span className={styles.levelDesc}>Locked</span>
                                    </div>
                                    <span className={styles.lockIcon}>🔒</span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            {/* Loader Trigger */}
            {visibleCount < PYTHON_LEVELS.length && (
                <div ref={loaderRef} className={styles.loadingTrigger}>
                    Loading more...
                </div>
            )}
        </div>
    );
}
