import { create } from 'zustand';
import { CodeSet } from './types';

interface TypingState {
  codeSets: CodeSet[];
  currentSetIndex: number;
  targetCode: string;
  userInput: string;
  startTime: number | null;
  isCompleted: boolean;

  setLevelData: (sets: CodeSet[]) => void;
  nextSet: () => boolean; // returns true if there was a next set
  setUserInput: (input: string) => void;
  reset: () => void;
}

export const useTypingStore = create<TypingState>((set, get) => ({
  codeSets: [],
  currentSetIndex: 0,
  targetCode: '',
  userInput: '',
  startTime: null,
  isCompleted: false,

  setLevelData: (sets) => set({
    codeSets: sets,
    currentSetIndex: 0,
    targetCode: sets[0]?.code || '',
    userInput: '',
    startTime: null,
    isCompleted: false
  }),

  nextSet: () => {
    const { codeSets, currentSetIndex } = get();
    if (currentSetIndex < codeSets.length - 1) {
      const nextIndex = currentSetIndex + 1;
      set({
        currentSetIndex: nextIndex,
        targetCode: codeSets[nextIndex].code,
        userInput: '',
        startTime: null,
        isCompleted: false
      });
      return true;
    }
    return false;
  },

  setUserInput: (input) => set((state) => {
    const isCompleted = input === state.targetCode;
    return {
      userInput: input,
      startTime: state.startTime ?? Date.now(),
      isCompleted
    };
  }),

  reset: () => set({ userInput: '', startTime: null, isCompleted: false }),
}));
