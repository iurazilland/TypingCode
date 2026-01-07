# 파이썬 커리큘럼 Phase 1 상세 코드 (Lv 1-20) - 고도화 버전

이 문서는 Phase 1: **변수와 입출력 기초** 단계의 구체적인 실습 코드를 정의합니다. 모든 코드는 **멀티라인(Multi-line)** 구조를 가지며, `print()`의 특수 매개변수(`sep`, `end`) 및 문자열 기능(`split`, `join`) 등을 포함하여 세부적으로 구성되었습니다.

---

## [Lv 1-5: 출력과 인자 마스터]
단순 출력을 넘어 출력의 형태를 제어하는 법을 익힙니다.

### Lv 1: 표준 출력과 이스케이프 문자
- **주제**: 여러 줄 출력과 `\n`, `\t` 활용
- **코드**:
```python
print("Project: TypingCode")
print("Phase:\\t1")
print("Lesson:\\tBasic Print\\n")
print("Let's build a solid foundation.")
```

### Lv 2: print의 sep 매개변수
- **주제**: 여러 인자 사이의 구분자 지정
- **코드**:
```python
year = 2026
month = 1
day = 7

print("DATE", year, month, day, sep="-")
print("TIME", 17, 30, 00, sep=":")
```

### Lv 3: print의 end 매개변수
- **주제**: 줄바꿈 없이 출력 이어붙이기
- **코드**:
```python
print("Downloading", end="... ")
print("100%", end=" ")
print("[COMPLETE]")

print("System", "is", "ready", sep="_", end="!")
```

### Lv 4: 변수 대입과 동적 출력
- **주제**: 데이터 저장 및 결합 출력
- **코드**:
```python
app = "Python"
task = "Practice"
msg = app + " " + task

print("Current Task:", msg)
print("-" * 20)
print("Keep focus on the screen.")
```

### Lv 5: [Challenge] 하드웨어 상태 대시보드
- **주제**: sep, end, 변수 결합 총정리
- **코드**:
```python
cpu = 45
ram = 72
disk = 30

print("--- SYSTEM STATUS ---")
print("CPU", cpu, "RAM", ram, "DISK", disk, sep=" | ", end=" %\\n")
print("Status", "Stable", sep=": ", end=".")
```

---

## [Lv 6-10: 문자열 분해와 가공]
데이터를 쪼개고(split) 합치는(join) 핵심 기법을 익힙니다.

### Lv 6: String split() 메서드 기초
- **주제**: 공백이나 문자를 기준으로 문자열 분해
- **코드**:
```python
raw_data = "Apple Banana Cherry"
fruits = raw_data.split()

print("Raw:", raw_data)
print("First:", fruits[0])
print("Total:", len(fruits), "items")
```

### Lv 7: 구분자가 있는 split()
- **주제**: 콤마(,)나 대시(-) 등 특정 문자 기준 분해
- **코드**:
```python
csv_line = "user_01,Seoul,Python"
info = csv_line.split(",")

print("User ID:", info[0])
print("Location:", info[1])
print("Skill:", info[2])
```

### Lv 8: String join() 메서드
- **주제**: 리스트 요소를 하나의 문자열로 결합
- **코드**:
```python
tags = ["coding", "python", "typing"]
hashtag = " #".join(tags)

print("Path:", "usr", "local", "bin", sep="/")
print("Hashtags: #" + hashtag)
```

### Lv 9: 멀티라인 텍스트와 strip()
- **주제**: 삼중 따옴표와 공백 제거
- **코드**:
```python
doc = """
    Clean Code 
    Better Life    
"""
print("Original:", doc)
print("Cleaned:", doc.strip())
```

### Lv 10: [Challenge] 로그 데이터 파서(Parser)
- **주제**: split과 변수 할당을 이용한 데이터 추출
- **코드**:
```python
log = "2026-01-07 17:50:00 [ERROR] Out of Memory"
parts = log.split(" ")

date_time = parts[0] + " " + parts[1]
level = parts[2].strip("[]")
message = " ".join(parts[3:])

print(f"Time: {date_time}")
print(f"Level: {level}")
print(f"Message: {message}")
```

---

## [Lv 11-15: 연산자와 데이터 캐스팅]
수학적 연산과 데이터 타입의 명시적 변환을 익힙니다.

### Lv 11: 몫(//)과 나머지(%)의 실전 활용
- **주제**: 숫자 그룹화 및 나머지 연산
- **코드**:
```python
id_num = 12345
group = id_num // 1000
rem = id_num % 1000

print("ID:", id_num)
print("Group Section:", group)
print("Sub-ID:", rem)
```

### Lv 12: 거듭제곱(**)과 연산 우선순위
- **주제**: 수학 기법과 괄호 활용
- **코드**:
```python
side = 5
area = side ** 2
volume = side ** 3

print("Side Length:", side)
print("Square Area:", area)
print("Cube Volume:", volume)
```

### Lv 13: 복합 대입 연산자 활용
- **주제**: 기존 값에 연산 누적
- **코드**:
```python
score = 0
score += 10 # Correct
score += 20 # Bonus
score -= 5  # Penalty

print("Step 1: +10")
print("Step 2: +20")
print("Final Score:", score)
```

### Lv 14: 데이터 캐스팅 (Type Casting)
- **주제**: str, int, float 간의 강제 변환
- **코드**:
```python
input_age = "25"
age_next_year = int(input_age) + 1

price = 19.99
msg = "Price is $" + str(price)

print("Age next year:", age_next_year)
print(msg)
```

### Lv 15: [Challenge] 환율 계산기
- **주제**: 타입 변환과 소수점 정렬 출력
- **코드**:
```python
usd = "50"
rate = 1320.5
krw = float(usd) * rate

print(f"USD Amount: ${usd}")
print(f"Exchange Rate: {rate}")
print(f"Converted KRW: {krw:,.0f} Won")
```

---

## [Lv 16-20: 논리와 조건의 기초]
참/거짓 판별과 논리 연산자를 익힙니다.

### Lv 16: 비교 연산자와 결과값
- **주제**: ==, !=, >, < 연산 이해
- **코드**:
```python
limit = 100
current = 120

is_over = current > limit
is_same = current == limit

print("Limit:", limit, "/ Current:", current)
print("Over Limit?", is_over)
print("Is Equal?", is_same)
```

### Lv 17: 논리 연산 (and, or)
- **주제**: 여러 조건의 조합
- **코드**:
```python
is_admin = True
has_permission = False

can_access = is_admin or has_permission
must_check = is_admin and not has_permission

print("Can Access:", can_access)
print("Must Check Info:", must_check)
```

### Lv 18: 문자 코드 변환 (ord, chr)
- **주제**: 문자와 숫자의 관계 이해
- **코드**:
```python
char = "A"
code = ord(char)
next_char = chr(code + 1)

print("Character:", char)
print("ASCII Code:", code)
print("Next Alpha:", next_char)
```

### Lv 19: 문자열 포함 여부 (in)
- **주제**: 특정 키워드 검색 기초
- **코드**:
```python
source = "I love Python programming"
check_word = "Python"
result = check_word in source

print("Source:", source)
print("Find 'Python'?", result)
```

### Lv 20: [Challenge] 최종 기초 성적표 시스템
- **주제**: Phase 1의 모든 요소를 결합한 리포트
- **코드**:
```python
header = "REPORT,2026,FINAL"
h_items = header.split(",")

math, eng = 90, 85
avg = (math + eng) / 2
is_pass = avg >= 80

print("-" * 30)
print(h_items[0], h_items[1], h_items[2], sep=" | ")
print("-" * 30)
print(f"Math: {math}\\nEnglish: {eng}")
print(f"AVERAGE: {avg} / PASS: {is_pass}")
print("-" * 30)
```
