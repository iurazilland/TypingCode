import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>&copy; {new Date().getFullYear()} TypingCode. All rights reserved.</p>
                </div>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>Privacy</a>
                    <a href="#" className={styles.link}>Terms</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>
            </div>
        </footer>
    );
}
