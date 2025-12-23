import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProgressState {
    completedLevels: number[];
    markLevelComplete: (levelId: number) => void;
    isLevelUnlocked: (levelId: number) => boolean;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({
            completedLevels: [],

            markLevelComplete: (levelId) => set((state) => {
                if (state.completedLevels.includes(levelId)) return state;
                return { completedLevels: [...state.completedLevels, levelId] };
            }),

            isLevelUnlocked: (levelId) => {
                // Level 1 is always unlocked
                if (levelId === 1) return true;
                // Other levels require the previous one to be completed
                const { completedLevels } = get();
                return completedLevels.includes(levelId - 1);
            }
        }),
        {
            name: 'typing-progress',
            storage: createJSONStorage(() => localStorage),
            // Only client-side, avoid hydration mismatch by default? 
            // Actually Zustand persist handles this well usually, but we should be careful using it in render.
            // We'll use skipHydration: true? No, default is fine for simple usage usually.
        }
    )
);
