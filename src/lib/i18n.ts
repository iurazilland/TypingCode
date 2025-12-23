export type Locale = 'en' | 'ko' | 'ja' | 'es' | 'fr';

export const SUPPORTED_LOCALES: { code: Locale; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ko', name: '한국어' },
    { code: 'ja', name: '日本語' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
];

export const DICTIONARY: Record<Locale, Record<string, string>> = {
    en: {
        'app.title': 'TypingCode',
        'nav.practice': 'Practice',
        'nav.leaderboard': 'Leaderboard',
        'nav.signin': 'Sign In',
        'nav.getstarted': 'Get Started',
        'landing.title': 'Master Coding',
        'landing.subtitle': 'Boost your coding speed and accuracy with our interactive typing practice platform.',
        'practice.select_language': 'Select Language',
        'practice.select_level': 'Select Level',
        'practice.locked': 'Complete previous levels to unlock',
        'level.hello_world': 'Hello World',
        'level.variables': 'Variables',
        'level.desc.hello_world': 'Learn the print function, the most basic output command.',
        'level.desc.variables': 'Storing data in variables.',
        // Add more translations...
    },
    ko: {
        'app.title': 'TypingCode',
        'nav.practice': '연습',
        'nav.leaderboard': '랭킹',
        'nav.signin': '로그인',
        'nav.getstarted': '시작하기',
        'landing.title': '코딩 마스터',
        'landing.subtitle': '인터랙티브한 연습 플랫폼으로 코딩 속도와 정확도를 높이세요.',
        'practice.select_language': '언어 선택',
        'practice.select_level': '레벨 선택',
        'practice.locked': '이전 레벨을 완료하여 잠금 해제',
        'level.hello_world': '헬로 월드',
        'level.variables': '변수',
        'level.desc.hello_world': '가장 기본적인 출력 명령어인 print 함수를 배웁니다.',
        'level.desc.variables': '데이터를 변수에 저장하는 법을 배웁니다.',
    },
    ja: {
        'app.title': 'TypingCode',
        'nav.practice': '練習',
        'nav.leaderboard': 'ランキング',
        'nav.signin': 'ログイン',
        'nav.getstarted': '始める',
        'landing.title': 'コーディングマスター',
        'landing.subtitle': 'インタラクティブな練習プラットフォームでコーディングの速度と精度を向上させましょう。',
        'practice.select_language': '言語選択',
        'practice.select_level': 'レベル選択',
        'practice.locked': '前のレベルを完了してロック解除',
        'level.hello_world': 'Hello World',
        'level.variables': '変数',
        'level.desc.hello_world': '最も基本的な出力コマンドであるprint関数を学びます。',
        'level.desc.variables': 'データを変数に保存する方法を学びます。',
    },
    es: {
        'app.title': 'TypingCode',
        'nav.practice': 'Práctica',
        'nav.leaderboard': 'Clasificación',
        'nav.signin': 'Iniciar sesión',
        'nav.getstarted': 'Empezar',
        'landing.title': 'Maestro de Codificación',
        'landing.subtitle': 'Mejora tu velocidad y precisión de codificación con nuestra plataforma interactiva.',
        'practice.select_language': 'Seleccionar Idioma',
        'practice.select_level': 'Seleccionar Nivel',
        'practice.locked': 'Completa niveles anteriores para desbloquear',
        'level.hello_world': 'Hola Mundo',
        'level.variables': 'Variables',
        'level.desc.hello_world': 'Aprende la función print, el comando de salida más básico.',
        'level.desc.variables': 'Almacenando datos en variables.',
    },
    fr: {
        'app.title': 'TypingCode',
        'nav.practice': 'Pratique',
        'nav.leaderboard': 'Classement',
        'nav.signin': 'Se connecter',
        'nav.getstarted': 'Commencer',
        'landing.title': 'Maître du Code',
        'landing.subtitle': 'Améliorez votre vitesse et votre précision de codage avec notre plateforme interactive.',
        'practice.select_language': 'Choisir la Langue',
        'practice.select_level': 'Choisir le Niveau',
        'practice.locked': 'Terminez les niveaux précédents pour débloquer',
        'level.hello_world': 'Bonjour le Monde',
        'level.variables': 'Variables',
        'level.desc.hello_world': 'Apprenez la fonction print, la commande de sortie la plus basique.',
        'level.desc.variables': 'Stockage de données dans des variables.',
    }
};

// Simple global state for current locale (in a real app, use Context or a library like next-intl)
import { create } from 'zustand';

interface LocaleStore {
    currentLocale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

export const useLocaleStore = create<LocaleStore>((set, get) => ({
    currentLocale: 'en', // Default
    setLocale: (locale) => set({ currentLocale: locale }),
    t: (key) => {
        const locale = get().currentLocale;
        return DICTIONARY[locale][key] || DICTIONARY['en'][key] || key;
    },
}));
