"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '../LevelSelection.module.css'; // Reuse existing CSS
import { useLocaleStore } from '@/lib/i18n';
import { useProgressStore } from '@/lib/progress';
import { createClient } from '@/lib/supabase/client';
import { Level } from '@/lib/types';

const LEVELS_PER_PAGE = 20;

export default function LevelSelectionPage() {
    const params = useParams();
    const language = (params.language as string) || 'python';
    const courseId = (params.course as string) || 'basic';
    const { currentLocale, t } = useLocaleStore();
    const { isLevelUnlocked, completedLevels } = useProgressStore();

    const [mounted, setMounted] = useState(false);
    const [levels, setLevels] = useState<Level[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const supabase = createClient();

    useEffect(() => {
        setMounted(true);
        fetchLevels();
    }, [language, courseId]);

    const fetchLevels = async () => {
        setIsLoading(true);

        // Constructaggregated language name for DB query (e.g. python_basic)
        const dbLanguageId = `${language}_${courseId}`;

        const { data, error } = await supabase
            .from('levels')
            .select('*')
            .eq('language', dbLanguageId)
            .order('list_order', { ascending: true });

        if (data) {
            setLevels(data);
        }
        setIsLoading(false);
    };

    const [visibleCount, setVisibleCount] = useState(LEVELS_PER_PAGE);

    // Filter progress by course if needed, but for now we list all.
    const safeCompletedLevels = mounted ? completedLevels : [];
    const latestLevelId = safeCompletedLevels.length > 0 ? Math.max(...safeCompletedLevels) + 1 : 1;

    const currentLevelRef = useRef<HTMLAnchorElement>(null);
    const hasScrolledRef = useRef(false);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 10, levels.length));
    };

    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [loaderRef.current, levels.length]);

    useEffect(() => {
        if (mounted && latestLevelId > visibleCount) {
            setVisibleCount(Math.ceil(latestLevelId / 10) * 10 + 10);
        }
    }, [latestLevelId, mounted, visibleCount]);

    useEffect(() => {
        if (!hasScrolledRef.current && mounted && currentLevelRef.current && !isLoading) {
            currentLevelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            hasScrolledRef.current = true;
        }
    }, [visibleCount, latestLevelId, mounted, isLoading]);

    if (isLoading && levels.length === 0) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumbs}>
                    <Link href="/practice" className={styles.crumbLink}>Languages</Link>
                    <span className={styles.separator}>/</span>
                    <Link href={`/practice/${language}`} className={styles.crumbLink}>{language.toUpperCase()}</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{courseId.toUpperCase()}</span>
                </div>
                <h1 className={styles.title}>{courseId === 'basic' ? 'Basic Training' : 'Advanced Course'}</h1>
                <p className={styles.subtitle}>{t('completed_levels')}: {mounted ? completedLevels.length : 0}</p>
            </header>

            <div className={styles.list}>
                {levels.slice(0, visibleCount).map((level) => {
                    // Logic for unlocking could be more complex (per course), but for now simple
                    const isUnlocked = mounted ? isLevelUnlocked(level.list_order) : level.list_order === 1;
                    const isNext = level.list_order === latestLevelId;

                    const title = currentLocale === 'ko' ? (level.title_ko || level.title_en) : level.title_en;
                    const desc = currentLocale === 'ko' ? (level.desc_ko || level.desc_en) : level.desc_en;

                    if (isUnlocked || level.is_premium) { // Show premium as locked or differently
                        return (
                            <Link
                                key={level.id}
                                href={`/practice/${language}/${courseId}/${level.list_order}`}
                                className={`${styles.card} ${level.level_type === 'challenge' ? styles.challenge : ''} ${isNext ? styles.activeLevel : ''} ${level.is_premium ? styles.premium : ''}`}
                                ref={isNext ? currentLevelRef : null}
                            >
                                <div className={styles.cardContent}>
                                    <span className={`${styles.levelNum} ${safeCompletedLevels.includes(level.list_order) ? styles.completedNum : ''}`}>
                                        {safeCompletedLevels.includes(level.list_order) ? '✓' : level.list_order}
                                    </span>
                                    <div className={styles.info}>
                                        <span className={styles.levelTitle}>{title}</span>
                                        <span className={styles.levelDesc}>{desc}</span>
                                    </div>
                                    {level.is_premium && <span className={styles.premiumLabel}>PREMIUM</span>}
                                    {level.level_type === 'challenge' && <span className={styles.challengeLabel}>CHALLENGE</span>}
                                </div>
                            </Link>
                        );
                    } else {
                        return (
                            <div key={level.id} className={`${styles.card} ${styles.locked}`}>
                                <div className={styles.cardContent}>
                                    <span className={styles.levelNum}>{level.list_order}</span>
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

            {visibleCount < levels.length && (
                <div ref={loaderRef} className={styles.loadingTrigger}>
                    Loading more...
                </div>
            )}
        </div>
    );
}
