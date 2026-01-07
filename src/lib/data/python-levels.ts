import { Level, CodeSet } from '../types';

// Helper to generate levels
const createLevel = (
    id: number,
    title_en: string,
    desc_en: string,
    target_code: CodeSet[],
    options: {
        difficulty?: Level['difficulty'],
        level_type?: Level['level_type'],
        pre_code?: string,
        post_code?: string,
        translations?: {
            ko?: { title: string, description: string },
        }
    } = {}
): Level => ({
    id,
    language: 'python',
    course_id: id > 60 ? 'advanced' : 'basic',
    is_premium: id > 60,
    list_order: id,
    title_en,
    title_ko: options.translations?.ko?.title,
    desc_en,
    desc_ko: options.translations?.ko?.description,
    pre_code: options.pre_code,
    target_code,
    post_code: options.post_code,
    difficulty: options.difficulty || 'Basic',
    level_type: options.level_type || 'practice'
});

const BASIC_LEVELS: Level[] = [
    createLevel(1, "The First Step", "Print your first message in Python.",
        [
            { code: `print("Hello, Python!")\nprint("Welcome to TypingCode.")`, guide_ko: "print() 함수로 텍스트를 출력합니다." },
            { code: `print("Line 1\\nLine 2")\nprint("Newline added.")`, guide_ko: "\\n은 줄을 바꾸는 이스케이프 문자입니다." },
            { code: `print("ID:\\tuser01")\nprint("Job:\\tCoder")`, guide_ko: "\\t는 정해진 간격만큼 띄워주는 탭 문자입니다." },
            { code: `print("A", "B", "C", sep="-")`, guide_ko: "sep은 문자들 사이의 구분자를 정합니다." },
            { code: `print("Wait", end="...")\nprint("Done!")`, guide_ko: "end를 쓰면 다음 출력과 줄바꿈 없이 이어집니다." },
            { code: `print("He said, \\"Hi\\"")\nprint('Python\\'s cool')`, guide_ko: "따옴표를 출력하려면 앞에 \\를 붙이세요." },
            { code: `print("Path: C:\\\\User\\\\Bin")`, guide_ko: "백슬래시 자체는 \\\\로 두 번 써야 출력됩니다." },
            { code: `print("=" * 15)\nprint("System Ready")`, guide_ko: "문자열과 숫자를 곱하면 그만큼 반복 출력됩니다." },
            { code: `print("Item", "Price", sep=":\\t")`, guide_ko: "sep에 탭(\\t)을 섞어 사용할 수 있습니다." },
            { code: `print("One", "Two", "Three", sep="\\n")`, guide_ko: "sep에 줄바꿈(\\n)을 넣어 세로로 출력합니다." },
            { code: `print("Email", "admin@web.com", sep=": ")`, guide_ko: "실제 데이터 포맷처럼 구분자를 넣어봅니다." },
            { code: `print("Step 1", end=" -> ")\nprint("Step 2")`, guide_ko: "화살표 모양으로 출력을 이어봅니다." },
            { code: `print("Loading", "." * 10, sep="")`, guide_ko: "구분자 없이 딱 붙여서 출력하는 방법입니다." },
            { code: `print("User:", "Alice", "\\t", "Score:", 95)`, guide_ko: "여러 인자를 탭과 함께 자유롭게 섞어봅니다." },
            { code: `print(\"\"\"Multi-line\nStrings are\nEasy.\"\"\")`, guide_ko: "삼중 따옴표 안에서도 이스케이프 문자는 작동합니다." },
            { code: `print(\"--- [ LOG ] ---\")\nprint(\"Ready\", \"Set\", \"Go\", sep=\" | \")`, guide_ko: "로그 헤더와 구분자 조합 연습입니다." },
            { code: `print(\"Result:\", 10/2, end=\" meters\\n\")`, guide_ko: "계산 결과 뒤에 단위를 붙여 출력합니다." },
            { code: `print(\"Name:\\tGuido\", \"Skill:\\tC++/Python\", sep=\"\\n\")`, guide_ko: "여러 줄 정렬 출력 예시입니다." },
            { code: `print(\"Progress:\", \"[\", \"#\" * 5, \" \" * 5, \"]\", sep=\"\")`, guide_ko: "로딩 바 모양을 만들어 봅니다." },
            { code: `print(\"Congratulations!\", \"Level 1 Complete.\", sep=\"\\n\" + \"-\" * 20 + \"\\n\")`, guide_ko: "[복습] sep 안에 줄바꿈과 대시를 넣어 구분선을 만듭니다." }
        ],
        {
            translations: {
                ko: {
                    title: "첫 번째 단계",
                    description: "파이썬으로 첫 메시지를 출력해보세요."
                }
            }
        }),

    createLevel(2, "Storing Data", "Use a variable to store and print a value.",
        [{ code: `msg = "Level 2"\nprint(msg)`, guide_ko: "변수를 선언하고 그 값을 print()로 확인해보세요." }],
        {
            translations: {
                ko: {
                    title: "데이터 저장하기",
                    description: "변수를 사용하여 값을 저장하고 출력합니다."
                }
            }
        }),

    createLevel(3, "Basic Calculation", "Perform a simple addition.",
        [{ code: `sum = 10 + 20\nprint(sum)`, guide_ko: "+ 연산자를 사용하여 두 숫자를 더해보세요." }],
        {
            translations: {
                ko: {
                    title: "기초 연산",
                    description: "간단한 덧셈 연산을 수행합니다."
                }
            }
        }),

    createLevel(4, "F-String Formatting", "Inject variables into strings easily.",
        [{ code: `name = "Python"\nprint(f"Welcome to {name}")`, guide_ko: "문자열 앞에 f를 붙이고 { } 안에 변수 명을 넣으세요." }],
        {
            translations: {
                ko: {
                    title: "F-문자열 포맷팅",
                    description: "문자열 안에 변수를 쉽게 삽입하는 방법입니다."
                }
            }
        }),

    createLevel(5, "Simple List", "Create a list of items.",
        [{ code: `colors = ["Red", "Green", "Blue"]\nprint(colors[0])`, guide_ko: "대괄호 [ ]를 사용하여 리스트를 만들고 인덱스로 접근합니다." }],
        {
            translations: {
                ko: {
                    title: "간단한 리스트",
                    description: "여러 아이템을 담는 리스트를 생성합니다."
                }
            }
        }),

    createLevel(6, "Calculating with Pre-set Data", "Use pre-defined variables for calculation.",
        [{ code: `total = price * quantity\nprint(total)`, guide_ko: "이미 준비된 price와 quantity 변수를 활용해보세요." }],
        {
            pre_code: `price = 500\nquantity = 3`,
            translations: {
                ko: {
                    title: "데이터 활용 연산",
                    description: "미리 정의된 변수를 사용하여 계산합니다."
                }
            }
        }),

    createLevel(7, "List Length", "Check how many items are in a list.",
        [{ code: `size = len(items)\nprint(f"Count: {size}")`, guide_ko: "len() 함수는 리스트의 길이를 반환합니다." }],
        {
            pre_code: `items = [1, 2, 3, 4, 5]`,
            translations: {
                ko: {
                    title: "리스트 길이 확인",
                    description: "리스트에 담긴 아이템의 개수를 확인합니다."
                }
            }
        }),

    createLevel(8, "Simple Loop", "Iterate through a range of numbers.",
        [{ code: `for i in range(3):\n    print(i)`, guide_ko: "for 문과 range()를 사용하여 숫자를 출력해보세요." }],
        {
            translations: {
                ko: {
                    title: "간단한 반복문",
                    description: "range()를 사용하여 정해진 횟수만큼 반복합니다."
                }
            }
        }),

    createLevel(9, "Conditional Logic", "Use if statements to check conditions.",
        [{ code: `if score >= 80:\n    print("Pass")`, guide_ko: "비교 연산자 >= 를 사용하여 성적을 판별해보세요." }],
        {
            pre_code: `score = 85`,
            translations: {
                ko: {
                    title: "조건부 논리",
                    description: "if 문을 사용하여 조건을 확인합니다."
                }
            }
        }),

    createLevel(10, "Sum and Filter Challenge", "Find high numbers in a list.",
        [{ code: `for n in numbers:\n    if n > 5:\n        print(n)`, guide_ko: "반복문과 조건문을 결합하여 특정 조건만 출력합니다." }],
        {
            pre_code: `numbers = [2, 7, 4, 9, 1]`,
            level_type: 'challenge',
            translations: {
                ko: {
                    title: "합계와 필터링 챌린지",
                    description: "리스트에서 5보다 큰 숫자만 찾아 출력하세요."
                }
            }
        }),
];

// Generate simple placeholders for remaining levels
const PLACEHOLDERS = Array.from({ length: 90 }, (_, i) => {
    const id = i + 11;
    const isAdvanced = id > 60;
    return createLevel(
        id,
        `Concept Level ${id}`,
        `Practice level ${id} focusing on Python syntax.`,
        [{ code: `print("Typing level ${id}")`, guide_ko: `파이썬 문법 연습 레벨 ${id}입니다.` }],
        {
            difficulty: isAdvanced ? 'Advanced' : 'Intermediate',
            level_type: 'practice'
        }
    );
});

export const PYTHON_LEVELS: Level[] = [...BASIC_LEVELS, ...PLACEHOLDERS];
