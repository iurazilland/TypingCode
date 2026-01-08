"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './CourseSelection.module.css';
import { useLocaleStore } from '@/lib/i18n';

export default function CourseSelectionPage() {
    const params = useParams();
    const { currentLocale } = useLocaleStore();

    // Ensure we don't use literal placeholder strings during hydration
    let language = (params.language as string) || 'python';
    if (language === '[language]') language = 'python';

    const courses = [
        {
            id: 'basic',
            title_en: 'Python Fundamentals',
            title_ko: '파이썬 기초 문법',
            desc_en: 'Master the basics with 100 progressive typing lessons. Variables, Loops, Functions and more.',
            desc_ko: '100단계의 체계적인 연습을 통해 파이썬 기초를 마스터하세요. 변수, 반복문, 함수 등을 배웁니다.',
            icon: '🐍',
            isPremium: false,
            levels: 100,
            difficulty: 'Beginner'
        },
        {
            id: 'data',
            title_en: 'Data Science & Plotting',
            title_ko: '데이터 분석 및 시각화',
            desc_en: 'Learn professional libraries like Pandas and Matplotlib. Includes real-time graph rendering.',
            desc_ko: 'Pandas와 Matplotlib 같은 실무 라이브러리를 배웁니다. 실시간 그래프 출력 기능을 제공합니다.',
            icon: '📊',
            isPremium: true,
            levels: 50,
            difficulty: 'Advanced'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumbs}>
                    <Link href="/practice" className={styles.crumbLink}>Languages</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{language.toUpperCase()}</span>
                </div>
                <h1 className={styles.title}>
                    {currentLocale === 'ko' ? '학습 코스 선택' : 'Select Your Course'}
                </h1>
                <p className={styles.subtitle}>
                    {currentLocale === 'ko'
                        ? '원하는 학습 경로를 선택하여 타이핑 연습을 시작하세요.'
                        : 'Choose a learning path to begin your typing journey'}
                </p>
            </header>

            <div className={styles.courseGrid}>
                {courses.map((course) => {
                    const title = currentLocale === 'ko' ? course.title_ko : course.title_en;
                    const desc = currentLocale === 'ko' ? course.desc_ko : course.desc_en;

                    return (
                        <Link
                            key={course.id}
                            href={`/practice/${language}/${course.id}`}
                            className={styles.courseCard}
                        >
                            {course.isPremium && <div className={styles.premiumBadge}>PREMIUM</div>}

                            <div>
                                <span className={styles.cardIcon}>{course.icon}</span>
                                <span className={styles.cardTitle}>{title}</span>
                                <p className={styles.cardDesc}>{desc}</p>
                            </div>

                            <div className={styles.cardStats}>
                                <div className={styles.statItem}>
                                    <span>{currentLocale === 'ko' ? '레벨 수:' : 'Levels:'}</span>
                                    <span className={styles.statValue}>{course.levels}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{currentLocale === 'ko' ? '난이도:' : 'Level:'}</span>
                                    <span className={styles.statValue}>{course.difficulty}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
