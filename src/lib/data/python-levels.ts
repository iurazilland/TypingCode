import { Level } from '../types';

// Helper to generate levels with optional pre/post code
const createLevel = (
    id: number,
    title_en: string,
    desc_en: string,
    target_code: string,
    options: {
        difficulty?: Level['difficulty'],
        level_type?: Level['level_type'],
        pre_code?: string,
        post_code?: string,
        translations?: {
            ko?: { title: string, description: string, guide?: string },
            en?: { guide?: string }
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
    guide_en: options.translations?.en?.guide,
    guide_ko: options.translations?.ko?.guide,
    pre_code: options.pre_code,
    target_code: target_code.trim(),
    post_code: options.post_code,
    difficulty: options.difficulty || 'Basic',
    level_type: options.level_type || 'practice'
});

const BASIC_LEVELS: Level[] = [
    createLevel(1, "The First Step", "Print your first message in Python.",
        `print("Hello, Python!")`,
        {
            translations: {
                ko: {
                    title: "첫 번째 단계",
                    description: "파이썬으로 첫 메시지를 출력해보세요.",
                    guide: "print() 함수를 사용하여 괄호 안의 문자열을 출력합니다."
                },
                en: { guide: "Use the print() function to output the string inside the parentheses." }
            }
        }),

    createLevel(2, "Storing Data", "Use a variable to store and print a value.",
        `msg = "Level 2"
print(msg)`,
        {
            translations: {
                ko: {
                    title: "데이터 저장하기",
                    description: "변수를 사용하여 값을 저장하고 출력합니다.",
                    guide: "변수를 선언하고 그 값을 print()로 확인해보세요."
                },
                en: { guide: "Declare a variable and check its value with print()." }
            }
        }),

    createLevel(3, "Basic Calculation", "Perform a simple addition.",
        `sum = 10 + 20
print(sum)`,
        {
            translations: {
                ko: {
                    title: "기초 연산",
                    description: "간단한 덧셈 연산을 수행합니다.",
                    guide: "+ 연산자를 사용하여 두 숫자를 더해보세요."
                },
                en: { guide: "Use the + operator to add two numbers." }
            }
        }),

    createLevel(4, "F-String Formatting", "Inject variables into strings easily.",
        `name = "Python"
print(f"Welcome to {name}")`,
        {
            translations: {
                ko: {
                    title: "F-문자열 포맷팅",
                    description: "문자열 안에 변수를 쉽게 삽입하는 방법입니다.",
                    guide: "문자열 앞에 f를 붙이고 { } 안에 변수 명을 넣으세요."
                },
                en: { guide: "Prefix the string with 'f' and place variable names inside { }." }
            }
        }),

    createLevel(5, "Simple List", "Create a list of items.",
        `colors = ["Red", "Green", "Blue"]
print(colors[0])`,
        {
            translations: {
                ko: {
                    title: "간단한 리스트",
                    description: "여러 아이템을 담는 리스트를 생성합니다.",
                    guide: "대괄호 [ ]를 사용하여 리스트를 만들고 인덱스로 접근합니다."
                },
                en: { guide: "Use [ ] to create a list and access it by index." }
            }
        }),

    createLevel(6, "Calculating with Pre-set Data", "Use pre-defined variables for calculation.",
        `total = price * quantity
print(total)`,
        {
            pre_code: `price = 500\nquantity = 3`,
            translations: {
                ko: {
                    title: "데이터 활용 연산",
                    description: "미리 정의된 변수를 사용하여 계산합니다.",
                    guide: "이미 준비된 price와 quantity 변수를 활용해보세요."
                },
                en: { guide: "Use the pre-defined 'price' and 'quantity' variables." }
            }
        }),

    createLevel(7, "List Length", "Check how many items are in a list.",
        `size = len(items)
print(f"Count: {size}")`,
        {
            pre_code: `items = [1, 2, 3, 4, 5]`,
            translations: {
                ko: {
                    title: "리스트 길이 확인",
                    description: "리스트에 담긴 아이템의 개수를 확인합니다.",
                    guide: "len() 함수는 리스트의 길이를 반환합니다."
                },
                en: { guide: "The len() function returns the number of items in a list." }
            }
        }),

    createLevel(8, "Simple Loop", "Iterate through a range of numbers.",
        `for i in range(3):
    print(i)`,
        {
            translations: {
                ko: {
                    title: "간단한 반복문",
                    description: "range()를 사용하여 정해진 횟수만큼 반복합니다.",
                    guide: "for 문과 range()를 사용하여 숫자를 출력해보세요."
                },
                en: { guide: "Use 'for' and 'range()' to print numbers." }
            }
        }),

    createLevel(9, "Conditional Logic", "Use if statements to check conditions.",
        `if score >= 80:
    print("Pass")`,
        {
            pre_code: `score = 85`,
            translations: {
                ko: {
                    title: "조건부 논리",
                    description: "if 문을 사용하여 조건을 확인합니다.",
                    guide: "비교 연산자 >= 를 사용하여 성적을 판별해보세요."
                },
                en: { guide: "Check the score using the >= comparison operator." }
            }
        }),

    createLevel(10, "Sum and Filter Challenge", "Find high numbers in a list.",
        `for n in numbers:
    if n > 5:
        print(n)`,
        {
            pre_code: `numbers = [2, 7, 4, 9, 1]`,
            level_type: 'challenge',
            translations: {
                ko: {
                    title: "합계와 필터링 챌린지",
                    description: "리스트에서 5보다 큰 숫자만 찾아 출력하세요.",
                    guide: "반복문과 조건문을 결합하여 특정 조건만 출력합니다."
                },
                en: { guide: "Combine loops and conditions to print only specific values." }
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
        `print("Typing level ${id}")`,
        {
            difficulty: isAdvanced ? 'Advanced' : 'Intermediate',
            level_type: 'practice'
        }
    );
});

export const PYTHON_LEVELS: Level[] = [...BASIC_LEVELS, ...PLACEHOLDERS];
