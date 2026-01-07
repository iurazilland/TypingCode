"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './LoginPage.module.css';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleGitHubLogin = async () => {
        setIsLoading(true);
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error('Login failed:', error);
            setIsLoading(false);
            alert('Login failed: ' + error.message);
        }
        // If success, Supabase will redirect to GitHub
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to continue your typing journey</p>

                <div className={styles.socialButtons}>
                    <button
                        className={styles.githubBtn}
                        onClick={handleGitHubLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connecting...' : 'Continue with GitHub'}
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>OR</span>
                </div>

                <form className={styles.form}>
                    {/* Form placeholder - We are focusing on GitHub first */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" disabled />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" disabled />
                    </div>
                    <button type="button" className={styles.submitBtn} disabled>
                        Sign In (Coming Soon)
                    </button>
                </form>

                <p className={styles.footer}>
                    Don't have an account? <Link href="/login">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
