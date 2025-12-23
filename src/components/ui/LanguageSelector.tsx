"use client";

import { useLocaleStore, SUPPORTED_LOCALES } from '@/lib/i18n';
import styles from './LanguageSelector.module.css';
import { useState } from 'react';

export default function LanguageSelector() {
    const { currentLocale, setLocale } = useLocaleStore();
    const [isOpen, setIsOpen] = useState(false);

    // Helper to get locale name
    const currentName = SUPPORTED_LOCALES.find(l => l.code === currentLocale)?.name || 'English';

    return (
        <div className={styles.container}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
                title={currentName}
            >
                <span className={styles.icon}>🌐</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {SUPPORTED_LOCALES.map((locale) => (
                        <button
                            key={locale.code}
                            className={`${styles.option} ${currentLocale === locale.code ? styles.active : ''}`}
                            onClick={() => {
                                setLocale(locale.code);
                                setIsOpen(false);
                            }}
                        >
                            {locale.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
