"use client";

import React from 'react';
import styles from './HandOverlay.module.css';

interface HandOverlayProps {
    targetKey: string; // The character the user needs to type next
}

// Map keys to fingers (L1=Pinky, L2=Ring, L3=Middle, L4=Index, L5=Thumb, R... same)
// Simple mapping for demonstration. Can be expanded.
const FINGER_MAP: Record<string, string> = {
    // Left Hand
    '`': 'L1', '1': 'L1', 'q': 'L1', 'a': 'L1', 'z': 'L1', 'Shift': 'L1',
    '2': 'L2', 'w': 'L2', 's': 'L2', 'x': 'L2',
    '3': 'L3', 'e': 'L3', 'd': 'L3', 'c': 'L3',
    '4': 'L4', '5': 'L4', 'r': 'L4', 't': 'L4', 'f': 'L4', 'g': 'L4', 'v': 'L4', 'b': 'L4',
    ' ': 'L5', // Space can be either, usually thumbs

    // Right Hand
    // ' ': 'R5', // Removed duplicate space mapping. Space is mapped to Left Thumb by default.
    '6': 'R4', '7': 'R4', 'y': 'R4', 'u': 'R4', 'h': 'R4', 'j': 'R4', 'n': 'R4', 'm': 'R4',
    '8': 'R3', 'i': 'R3', 'k': 'R3', ',': 'R3',
    '9': 'R2', 'o': 'R2', 'l': 'R2', '.': 'R2',
    '0': 'R1', '-': 'R1', '=': 'R1', 'p': 'R1', '[': 'R1', ']': 'R1', ';': 'R1', "'": 'R1', '/': 'R1', 'Enter': 'R1', 'Backspace': 'R1'
};

// Map keys to Rows: 0 (Numbers), 1 (Top/QWERTY), 2 (Home/ASDF), 3 (Bottom/ZXCV), 4 (Space)
const ROW_MAP: Record<string, number> = {
    '`': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '0': 0, '-': 0, '=': 0, 'Backspace': 0,
    'Tab': 1, 'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1, '[': 1, ']': 1, '\\': 1,
    'CapsLock': 2, 'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2, ';': 2, "'": 2, 'Enter': 2,
    'Shift': 3, 'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3, ',': 3, '.': 3, '/': 3,
    ' ': 4
};

export default function HandOverlay({ targetKey }: HandOverlayProps) {
    const lowerKey = targetKey.toLowerCase();
    const activeFinger = FINGER_MAP[lowerKey] || FINGER_MAP[targetKey] || '';
    const rowIndex = ROW_MAP[targetKey] ?? ROW_MAP[lowerKey] ?? 2; // Default to Home row

    // Helper to determine active class and reach movement
    const getFingerClass = (fingerId: string) => {
        let className = styles.finger;

        if (activeFinger === fingerId) {
            className += ` ${styles.active}`;

            // Apply Reach Animation
            if (rowIndex <= 1) className += ` ${styles.reachTop}`; // Reach up for Num/Top rows
            if (rowIndex === 3) className += ` ${styles.reachBottom}`; // Reach down for Bottom row
            if (rowIndex === 4) className += ` ${styles.reachSpace}`; // Spacebar
        }

        return className;
    };

    return (
        <div className={styles.container}>
            <svg viewBox="0 0 800 300" className={styles.handsSvg} fill="none" stroke="currentColor" strokeWidth="2">
                {/* Left Hand */}
                <g className={styles.handLeft}>
                    {/* L1: Pinky */}
                    <path d="M100 250 L80 160 Q80 140 90 140 L100 160 L110 250" className={getFingerClass('L1')} />
                    {/* L2: Ring */}
                    <path d="M110 250 L120 120 Q120 100 135 100 L145 120 L150 250" className={getFingerClass('L2')} />
                    {/* L3: Middle */}
                    <path d="M150 250 L160 100 Q160 80 175 80 L190 100 L195 250" className={getFingerClass('L3')} />
                    {/* L4: Index */}
                    <path d="M195 250 L210 120 Q210 100 225 100 L240 120 L245 250" className={getFingerClass('L4')} />
                    {/* L5: Thumb */}
                    <path d="M245 250 L280 220 Q290 210 290 230 L260 270" className={getFingerClass('L5')} />
                    {/* Palm */}
                    <path d="M100 250 Q180 300 260 270" className={styles.palm} />
                </g>

                {/* Right Hand (Mirrored logic typically, simplified paths here) */}
                <g className={styles.handRight} transform="translate(400, 0)">
                    {/* R5: Thumb */}
                    <path d="M155 250 L120 220 Q110 210 110 230 L140 270" className={getFingerClass('R5')} />
                    {/* R4: Index */}
                    <path d="M155 250 L150 120 Q150 100 165 100 L180 120 L195 250" className={getFingerClass('R4')} />
                    {/* R3: Middle */}
                    <path d="M195 250 L200 100 Q200 80 215 80 L230 100 L240 250" className={getFingerClass('R3')} />
                    {/* R2: Ring */}
                    <path d="M240 250 L245 120 Q245 100 260 100 L270 120 L280 250" className={getFingerClass('R2')} />
                    {/* R1: Pinky */}
                    <path d="M280 250 L290 160 Q290 140 300 140 L310 160 L320 250" className={getFingerClass('R1')} />
                    {/* Palm */}
                    <path d="M140 270 Q220 300 320 250" className={styles.palm} />
                </g>
            </svg>
        </div>
    );
}
