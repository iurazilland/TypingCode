import { Level } from '../types';

// Helper to generate levels
const createLevel = (id: number, title: string, desc: string, code: string, diff: Level['difficulty'] = 'Basic', type: Level['type'] = 'practice', translations: Level['translations'] = {}): Level => ({
    id, title, description: desc, code: code.trim(), difficulty: diff, type, translations
});

const BASIC_LEVELS: Level[] = [
    createLevel(1, "Hello World", "Learn the print function, the most basic output command.", 'print("Hello, World!")', 'Basic', 'practice', {
        ko: { title: "헬로 월드", description: "가장 기본적인 출력 명령어인 print 함수를 배웁니다." },
        ja: { title: "Hello World", description: "最も基本的な出力コマンドであるprint関数を学びます。" },
        fr: { title: "Bonjour le Monde", description: "Apprenez la fonction print, la commande de sortie la plus basique." }
    }),
    createLevel(2, "Variables", "Storing data in variables.", 'message = "Python is fun"\nprint(message)', 'Basic', 'practice', {
        ko: { title: "변수", description: "데이터를 변수에 저장하는 법을 배웁니다." }
    }),
    createLevel(3, "Arithmetic Operations", "Basic addition and multiplication.", 'a = 10\nb = 5\nprint(a + b * 2)', 'Basic', 'practice', {
        ko: { title: "산술 연산", description: "기본적인 더하기와 곱하기 연산입니다." }
    }),
    createLevel(4, "String Concatenation", "Joining strings together.", 'first = "Coding"\nsecond = "Skills"\nprint(first + " " + second)', 'Basic', 'practice', {
        ko: { title: "문자열 연결", description: "문자열을 서로 이어 붙이는 방법입니다." }
    }),
    createLevel(5, "F-Strings", "Modern way to format strings.", 'name = "Alice"\nprint(f"Hello, {name}!")', 'Basic', 'practice', {
        ko: { title: "F-Strings", description: "문자열을 포맷팅하는 현대적이고 편리한 방법입니다." }
    }),
    createLevel(6, "Comments", "Writing code explanation.", '# This is a comment\nprint("Comments are ignored")'),
    createLevel(7, "Integer vs String", "Understanding data types.", 'x = "10"\ny = 10\n# different types!'),
    createLevel(8, "Boolean Values", "True and False values.", 'is_active = True\nis_admin = False\nprint(is_active)'),
    createLevel(9, "Lists Basic", "Creating a simple list.", 'fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])'),
    createLevel(10, "Challenge: Basic Output", "Test your knowledge of print and strings.", 'print("I am ready to learn!")\nscore = 100\nprint(f"Score: {score}")', 'Basic', 'challenge'),

    createLevel(11, "If Statements", "Making decisions in code.", 'age = 18\nif age >= 18:\n    print("Adult")'),
    createLevel(12, "Else Blocks", "Handling the alternative case.", 'score = 50\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")'),
    createLevel(13, "Elif Keywork", "Multiple conditions.", 'x = 0\nif x > 0:\n    print("Positive")\nelif x < 0:\n    print("Negative")'),
    createLevel(14, "Logical AND", "Multiple conditions must be true.", 'is_verified = True\nis_active = True\nif is_verified and is_active:\n    print("Access Granted")'),
    createLevel(15, "Logical OR", "At least one condition true.", 'day = "Saturday"\nif day == "Saturday" or day == "Sunday":\n    print("Weekend!")'),

    createLevel(16, "For Loops Basic", "Iterating over a range.", 'for i in range(5):\n    print(i)'),
    createLevel(17, "Looping Lists", "Iterating over items in a list.", 'colors = ["red", "blue", "green"]\nfor color in colors:\n    print(color)'),
    createLevel(18, "While Loops", "Looping while a condition is true.", 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1'),
    createLevel(19, "Break Statement", "Exiting a loop early.", 'for i in range(10):\n    if i == 5:\n        break\n    print(i)'),
    createLevel(20, "Challenge: Control Flow", "Combine Ifs and Loops.", 'for num in range(10):\n    if num % 2 == 0:\n        print(f"{num} is even")', 'Intermediate', 'challenge'),
];

// Generate placeholder levels 21-100 to fill the requested 100 levels
const PLACEHOLDERS = Array.from({ length: 80 }, (_, i) => {
    const id = i + 21;
    const isChallenge = id % 10 === 0;
    const isAdvanced = id > 60;

    return createLevel(
        id,
        isChallenge ? `Challenge Phase ${Math.ceil(id / 10)}` : `Concept Level ${id}`,
        `Practice level ${id} focusing on ${isAdvanced ? 'advanced algorithms' : 'intermediate syntax'}.`,
        `# Placeholder code for level ${id}\ndef practice_level_${id}():\n    return "Practice makes perfect"`,
        isAdvanced ? 'Advanced' : 'Intermediate',
        isChallenge ? 'challenge' : 'practice'
    );
});

export const PYTHON_LEVELS: Level[] = [...BASIC_LEVELS, ...PLACEHOLDERS];
