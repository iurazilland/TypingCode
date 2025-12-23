import { create } from 'zustand';

interface TypingState {
  targetCode: string;
  userInput: string;
  startTime: number | null;
  isCompleted: boolean;
  
  setTargetCode: (code: string) => void;
  setUserInput: (input: string) => void;
  reset: () => void;
}

export const useTypingStore = create<TypingState>((set) => ({
  targetCode: 'print("Hello, World!")', // Default for testing
  userInput: '',
  startTime: null,
  isCompleted: false,

  setTargetCode: (code) => set({ targetCode: code, userInput: '', startTime: null, isCompleted: false }),
  
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
