export interface Level {
    id: number;
    title: string;
    description: string;
    code: string; // The target code to type
    difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Master';
    type: 'practice' | 'challenge';
    translations?: {
        [key: string]: {
            title?: string;
            description?: string;
        };
    };
}

export type LanguageId = 'python' | 'javascript' | 'cpp';
