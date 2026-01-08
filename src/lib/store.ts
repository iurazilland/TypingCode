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

  setLevelData: (sets) => {
    // 1. Normalize 'sets' into an array of CodeSet objects
    let normalizedSets: CodeSet[] = [];
    if (Array.isArray(sets)) {
      normalizedSets = sets;
    } else if (sets && typeof sets === 'object') {
      normalizedSets = [sets as any];
    }

    // 2. Extract the first code string safely (IMPORTANT: Access the .code property)
    const firstSet = normalizedSets[0];
    let codeStr = '';
    if (firstSet) {
      if (typeof firstSet === 'string') {
        codeStr = firstSet;
      } else if (typeof firstSet === 'object' && 'code' in firstSet) {
        codeStr = (firstSet as any).code || '';
      }
    }

    set({
      codeSets: normalizedSets,
      currentSetIndex: 0,
      targetCode: String(codeStr), // Force string
      userInput: '',
      startTime: null,
      isCompleted: false
    });
  },

  nextSet: () => {
    const { codeSets, currentSetIndex } = get();
    if (currentSetIndex < codeSets.length - 1) {
      const nextIndex = currentSetIndex + 1;
      const nextSetData = codeSets[nextIndex];

      let nextCode = '';
      if (nextSetData) {
        if (typeof nextSetData === 'string') {
          nextCode = nextSetData;
        } else if (typeof nextSetData === 'object' && 'code' in nextSetData) {
          nextCode = (nextSetData as any).code || '';
        }
      }

      set({
        currentSetIndex: nextIndex,
        targetCode: String(nextCode),
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
