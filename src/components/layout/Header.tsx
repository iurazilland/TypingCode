import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import LanguageSelector from '../ui/LanguageSelector';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        Typing<span className={styles.accent}>Code</span>
                    </Link>

                    {/* Navigation */}
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/practice" className={styles.navLink}>Practice</Link>
                        <Link href="/leaderboard" className={styles.navLink}>Leaderboard</Link>
                    </nav>
                </div>

                {/* Auth Buttons */}
                <div className={styles.auth}>
                    <LanguageSelector />
                    <Link href="/login" className={styles.loginBtn}>Sign In</Link>
                    <Link href="/signup" className={styles.signupBtn}>Get Started</Link>
                </div>
            </div>
        </header>
    );
}
