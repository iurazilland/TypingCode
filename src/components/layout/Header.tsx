import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import LanguageSelector from '../ui/LanguageSelector';
import { createClient } from '@/lib/supabase/server';
import UserMenu from './UserMenu';

export default async function Header() {
    const supabase = await createClient(); // Await createClient itself
    const { data: { user } } = await supabase.auth.getUser();

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
                    {user ? (
                        <UserMenu user={user} />
                    ) : (
                        <>
                            <Link href="/login" className={styles.loginBtn}>Sign In</Link>
                            <Link href="/signup" className={styles.signupBtn}>Get Started</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
