"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
// Reuse Header styles or create simple local ones? 
// Let's use inline styles for the dropdown for simplicity or reuse header styles class if possible.
import styles from './Header.module.css';

interface UserMenuProps {
    user: any; // Type accurately if possible, but 'any' is safe for now to avoid deep type deps
}

export default function UserMenu({ user }: UserMenuProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setIsOpen(false);
    };

    const avatarUrl = user.user_metadata?.avatar_url;
    const userName = user.user_metadata?.user_name || user.email?.split('@')[0];

    return (
        <div className={styles.userMenu}>
            <button
                className={styles.userTrigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="User menu"
            >
                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt={userName}
                        width={32}
                        height={32}
                        className={styles.avatar}
                    />
                ) : (
                    <div className={styles.avatarPlaceholder}>
                        {userName?.[0]?.toUpperCase() || 'U'}
                    </div>
                )}
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>{userName}</p>
                        <p className={styles.userEmail}>{user.email}</p>
                    </div>
                    <div className={styles.divider} />
                    <Link href="/profile" className={styles.menuItem} onClick={() => setIsOpen(false)}>
                        Profile (Beta)
                    </Link>
                    <button onClick={handleSignOut} className={`${styles.menuItem} ${styles.signOut}`}>
                        Sign Out
                    </button>
                </div>
            )}

            {/* Backdrop to close menu */}
            {isOpen && (
                <div
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
