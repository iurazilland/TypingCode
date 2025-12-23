import Link from 'next/link';
import styles from './Practice.module.css';

const LANGUAGES = [
    {
        id: 'python',
        name: 'Python',
        description: 'Master the syntax of the most popular language for data science and AI.',
        color: '#38bdf8', // Sky Blue
        active: true,
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        description: 'The language of the web. Practice DOM manipulation and modern ES6+ syntax.',
        color: '#facc15', // Yellow
        active: false,
        comingSoon: true,
    },
    {
        id: 'cpp',
        name: 'C++',
        description: 'High-performance coding. Master pointers, memory management, and OOP.',
        color: '#f87171', // Red
        active: false,
        comingSoon: true,
    },
];

export default function PracticeSelectionPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Select Language</h1>
                <p className={styles.subtitle}>Choose your path to mastery.</p>
            </header>

            <div className={styles.grid}>
                {LANGUAGES.map((lang) => (
                    lang.active ? (
                        <Link key={lang.id} href={`/practice/${lang.id}`} className={styles.card} style={{ borderColor: lang.color }}>
                            <div className={styles.cardHeader}>
                                <h2 style={{ color: lang.color }}>{lang.name}</h2>
                            </div>
                            <p className={styles.description}>{lang.description}</p>
                            <div className={styles.footer}>
                                <span className={styles.btn} style={{ backgroundColor: lang.color, color: '#0f172a' }}>Start</span>
                            </div>
                        </Link>
                    ) : (
                        <div key={lang.id} className={`${styles.card} ${styles.disabled}`}>
                            <div className={styles.cardHeader}>
                                <h2 style={{ color: lang.color }}>{lang.name}</h2>
                                {lang.comingSoon && <span className={styles.badge}>Coming Soon</span>}
                            </div>
                            <p className={styles.description}>{lang.description}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
