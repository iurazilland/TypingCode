"use client";

import React, { useEffect, useState } from 'react';
import styles from './VirtualKeyboard.module.css';

const ROWS = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Space']
];

interface VirtualKeyboardProps {
    nextChar?: string;
}

export default function VirtualKeyboard({ nextChar = '' }: VirtualKeyboardProps) {
    const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
    const [isCapsLock, setIsCapsLock] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setActiveKeys((prev) => new Set(prev).add(e.key.toLowerCase()));

            // Check CapsLock state
            if (e.getModifierState) {
                setIsCapsLock(e.getModifierState('CapsLock'));
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            setActiveKeys((prev) => {
                const newSet = new Set(prev);
                newSet.delete(e.key.toLowerCase());
                return newSet;
            });

            // Update on Up as well (could be toggled)
            if (e.getModifierState) {
                setIsCapsLock(e.getModifierState('CapsLock'));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const getKeyClass = (key: string) => {
        let baseClass = styles.key;
        const lowerKey = key.toLowerCase();

        // Active (Pressed)
        if (activeKeys.has(lowerKey)) {
            baseClass += ` ${styles.active}`;
        }

        // CapsLock indication
        if (key === 'CapsLock' && isCapsLock) {
            baseClass += ` ${styles.locked}`;
        }

        // Guide (Target) - If this key matches nextChar
        if (nextChar && typeof nextChar === 'string' && lowerKey === nextChar.toLowerCase()) {
            baseClass += ` ${styles.guide}`;
        }
        // Handle special mappings (Space vs ' ')
        if (nextChar === ' ' && key === 'Space') {
            baseClass += ` ${styles.guide}`;
        }

        // Special styling for wide keys
        if (['Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift'].includes(key)) {
            baseClass += ` ${styles.wide}`;
        }
        if (key === 'Space') {
            baseClass += ` ${styles.space}`;
        }
        return baseClass;
    };

    return (
        <div className={styles.keyboard}>
            {ROWS.map((row, rowIdx) => (
                <div key={rowIdx} className={styles.row}>
                    {row.map((key, keyIdx) => (
                        <div key={`${key}-${rowIdx}-${keyIdx}`} className={getKeyClass(key)}>
                            {key === 'Space' ? '' : key}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
