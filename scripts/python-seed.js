const SEED_DATA = [
    // --- Lv 1: Print & Escape (20 Sets) ---
    {
        id: 1,
        language: 'python_basic',
        course_id: 'basic',
        is_premium: false,
        list_order: 1,
        title_en: "The First Step",
        title_ko: "첫 번째 단계",
        desc_en: "Print your first message in Python.",
        desc_ko: "파이썬으로 첫 메시지를 출력해보세요.",
        target_code: [
            { "code": "print(\"Hello, Python!\")\nprint(\"Welcome to TypingCode.\")", "guide_ko": "print() 함수로 텍스트를 출력합니다." },
            { "code": "print(\"Line 1\\nLine 2\")\nprint(\"Newline added.\")", "guide_ko": "\\n은 줄을 바꾸는 이스케이프 문자입니다." },
            { "code": "print(\"ID:\\tuser01\")\nprint(\"Job:\\tCoder\")", "guide_ko": "\\t는 정해진 간격만큼 띄워주는 탭 문자입니다." },
            { "code": "print(\"A\", \"B\", \"C\", sep=\"-\")", "guide_ko": "sep은 문자들 사이의 구분자를 정합니다." },
            { "code": "print(\"Wait\", end=\"...\")\nprint(\"Done!\")", "guide_ko": "end를 쓰면 다음 출력과 줄바꿈 없이 이어집니다." },
            { "code": "print(\"He said, \\\"Hi\\\"\")\nprint('Python\\'s cool')", "guide_ko": "따옴표를 출력하려면 앞에 \\를 붙이세요." },
            { "code": "print(\"Path: C:\\\\User\\\\Bin\")", "guide_ko": "백슬래시 자체는 \\\\로 두 번 써야 출력됩니다." },
            { "code": "print(\"=\" * 15)\nprint(\"System Ready\")", "guide_ko": "문자열과 숫자를 곱하면 그만큼 반복 출력됩니다." },
            { "code": "print(\"Item\", \"Price\", sep=\":\\t\")", "guide_ko": "sep에 탭(\\t)을 섞어 사용할 수 있습니다." },
            { "code": "print(\"One\", \"Two\", \"Three\", sep=\"\\n\")", "guide_ko": "sep에 줄바꿈(\\n)을 넣어 세로로 출력합니다." },
            { "code": "print(\"Email\", \"admin@web.com\", sep=\": \")", "guide_ko": "실제 데이터 포맷처럼 구분자를 넣어봅니다." },
            { "code": "print(\"Step 1\", end=\" -> \")\nprint(\"Step 2\")", "guide_ko": "화살표 모양으로 출력을 이어봅니다." },
            { "code": "print(\"Loading\", \".\" * 10, sep=\"\")", "guide_ko": "구분자 없이 딱 붙여서 출력하는 방법입니다." },
            { "code": "print(\"User:\", \"Alice\", \"\\t\", \"Score:\", 95)", "guide_ko": "여러 인자를 탭과 함께 자유롭게 섞어봅니다." },
            { "code": "print(\"\"\"Multi-line\nStrings are\nEasy.\"\"\")", "guide_ko": "삼중 따옴표 안에서도 이스케이프 문자는 작동합니다." },
            { "code": "print(\"--- [ LOG ] ---\")\nprint(\"Ready\", \"Set\", \"Go\", sep=\" | \")", "guide_ko": "로그 헤더와 구분자 조합 연습입니다." },
            { "code": "print(\"Result:\", 10/2, end=\" meters\\n\")", "guide_ko": "계산 결과 뒤에 단위를 붙여 출력합니다." },
            { "code": "print(\"Name:\\tGuido\", \"Skill:\\tC++/Python\", sep=\"\\n\")", "guide_ko": "여러 줄 정렬 출력 예시입니다." },
            { "code": "print(\"Progress:\", \"[\", \"#\" * 5, \" \" * 5, \"]\", sep=\"\")", "guide_ko": "로딩 바 모양을 만들어 봅니다." },
            { "code": "print(\"Congratulations!\", \"Level 1 Complete.\", sep=\"\\n\" + \"-\" * 20 + \"\\n\")", "guide_ko": "[복습] sep 안에 줄바꿈과 대시를 넣어 구분선을 만듭니다." }
        ],
        difficulty: 'Basic',
        level_type: 'practice'
    },
    // --- Lv 2-10 Placeholder (Will be replaced later) ---
    {
        id: 2,
        language: 'python_basic',
        course_id: 'basic',
        is_premium: false,
        list_order: 2,
        title_en: "Storing Data",
        title_ko: "데이터 저장하기",
        desc_en: "Use a variable to store and print a value.",
        desc_ko: "변수를 사용하여 값을 저장하고 출력합니다.",
        target_code: [{ code: "msg = \"Learning Python\"\nprint(msg)", guide_ko: "변수를 선언하고 그 값을 print()로 확인해보세요." }],
        difficulty: 'Basic',
        level_type: 'practice'
    }
];

// Add placeholders for 3-100 to maintain schema consistency
for (let i = 3; i <= 100; i++) {
    const isChallenge = i % 5 === 0;
    SEED_DATA.push({
        id: i,
        language: 'python_basic',
        course_id: 'basic',
        is_premium: false,
        list_order: i,
        title_en: isChallenge ? `Challenge Phase ${Math.ceil(i / 5)}` : `Concept Level ${i}`,
        title_ko: isChallenge ? `챌린지: 단계 ${i}` : `파이썬 기초: ${i}`,
        desc_en: `Mastering Python concepts at Level ${i}.`,
        desc_ko: `${i}단계 개념을 익히고 실습합니다.`,
        target_code: [{ code: `print("Python Skill Level: ${i}")`, guide_ko: `${i}단계 연습 코드를 작성해 보세요.` }],
        difficulty: i > 80 ? 'Advanced' : i > 40 ? 'Intermediate' : 'Basic',
        level_type: isChallenge ? 'challenge' : 'practice'
    });
}

// --- Python Data Science course (python_data) ---
for (let i = 1; i <= 50; i++) {
    SEED_DATA.push({
        id: 1000 + i, // Distinct ID range
        language: 'python_data',
        course_id: 'data',
        is_premium: true,
        list_order: i,
        title_en: `Data Science Level ${i}`,
        title_ko: `데이터 분석: ${i}단계`,
        desc_en: `Professional data manipulation with Pandas & Matplotlib.`,
        desc_ko: `Pandas와 Matplotlib을 활용한 데이터 분석 실습입니다.`,
        target_code: [{ code: `import pandas as pd\nprint("Data analysis ${i}")`, guide_ko: `데이터 분석 ${i}단계 연습입니다.` }],
        difficulty: 'Advanced',
        level_type: 'practice'
    });
}

module.exports = { SEED_DATA };
