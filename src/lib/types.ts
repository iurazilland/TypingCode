export interface Level {
    id: number;
    language: string;
    course_id: string; // e.g., 'basic', 'advanced'
    is_premium: boolean;
    list_order: number;
    title_en: string;
    title_ko?: string;
    desc_en?: string;
    desc_ko?: string;
    guide_en?: string;
    guide_ko?: string;
    pre_code?: string;
    target_code: string;
    post_code?: string;
    difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Master';
    level_type: 'practice' | 'challenge';
}

export type LanguageId = 'python' | 'javascript' | 'cpp';
