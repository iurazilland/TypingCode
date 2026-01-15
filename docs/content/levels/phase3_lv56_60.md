# Phase 3: 제어문과 프로그램 흐름 (Lv 56 - 60) 상세 세트

---

Lv56. List Comprehension Basics / 리스트 컴프리헨션 기초
Description: 코드를 한 줄로 줄여서 새로운 리스트를 생성하는 파이썬의 핵심 문법을 익힙니다. / Learn the pythonic way to create new lists using a single line of code.

1. Range Comprehension / 0부터 4까지 들어있는 리스트를 한 줄로 만듭니다.
nums = [i for i in range(5)]
print(nums)

2. Square Numbers / 1, 2, 3의 제곱수들이 담긴 리스트를 생성합니다.
sq = [i**2 for i in range(1, 4)]
print(sq)

3. Capitalize Strings / 리스트의 모든 문자를 대문자로 바꿔 새 리스트를 만듭니다.
txt = [s.upper() for s in ["a", "b"]]
print(txt)

4. Multiplication Map / 각 숫자에 10을 곱한 결과로 리스트를 채웁니다.
vals = [i * 10 for i in range(1, 4)]
print(vals)

5. String to List / 문자열 "Hi"를 한 글자씩 쪼개 리스트로 변환합니다.
chars = [c for c in "Hi"]
print(chars)

6. List Element Addition / 기존 리스트 값들에 5를 더해 새 리스트를 만듭니다.
nums = [i + 5 for i in [1, 2, 3]]
print(nums)

7. Constant Repeater / 같은 값(10)을 3번 반복해서 채운 리스트 예제입니다.
same = [10 for _ in range(3)]
print(same)

8. Reverse Range / 거꾸로 세는 숫자로 리스트를 채웁니다.
rev = [i for i in range(3, 0, -1)]
print(rev)

9. Type Cast List / 문자열 숫자 리스트를 정수형 리스트로 한 번에 변환합니다.
prices = [int(p) for p in ["10", "20"]]
print(prices)

10. Float Conversion / 정수 연속을 실수형 리스트로 변환하여 생성합니다.
f = [float(i) for i in range(3)]
print(f)

11. Boolean Conversion / 숫자를 불리언 리스트로 바꿉니다.
bools = [bool(i) for i in [0, 1, 0]]
print(bools)

12. List of lengths / 문자열 리스트 각 요소의 길이를 담은 리스트입니다.
words = ["A", "Apple", "AI"]
lens = [len(w) for w in words]
print(lens)

13. List of tuples / 원본과 그 제곱을 튜플로 묶은 리스트를 만듭니다.
data = [(i, i**2) for i in range(3)]
print(data)

14. Character ordinal list / 각 문자의 아스키 코드값을 담습니다.
codes = [ord(c) for c in "abc"]
print(codes)

15. List of zeros / 0으로 가득 찬 리스트를 만듭니다. (컴프리헨션 버전)
zeros = [0 for _ in range(5)]
print(zeros)

16. Adding prefix / 모든 단어에 접두사를 붙입니다.
names = ["Alice", "Bob"]
pre = ["User_" + n for n in names]
print(pre)

17. Range step jump / 5씩 건너뛰는 숫자를 담습니다.
nums = [i for i in range(0, 21, 5)]
print(nums)

18. Dynamic range end / 변수를 사용해 길이를 정합니다.
n = 4
lst = [i for i in range(n)]
print(lst)

19. Substring generation / 단어의 첫 글자만 모읍니다.
words = ["Hi", "Bye"]
first = [w[0] for w in words]
print(first)

20. Final Review / [복습] 1, 2, 3 번호를 활용해 "Rank-1" 등의 이름을 생성해 담습니다.
labels = [f"Rank-{i}" for i in range(1, 4)]
print(labels)

---

Lv57. Comprehension with If / 필터링이 포함된 컴프리헨션
Description: 조건문을 섞어서 원하는 데이터만 골라 리스트로 만드는 법을 익힙니다. / Use if statements within comprehensions to filter items.

1. Even Only / 0~9 중 짝수만 골라 리스트를 생성합니다.
even = [i for i in range(10) if i % 2 == 0]
print(even)

2. Threshold Filter / 리스트에서 30보다 큰 값만 걸러냅니다.
over = [n for n in [10, 50, 40] if n > 30]
print(over)

3. Length Filter / 글자 수가 5개 이상인 단어만 추출합니다.
words = ["apple", "go", "banana"]
long = [w for w in words if len(w) > 4]
print(long)

4. Keyword Filter / 특정 키워드(ERR)만 포함된 리스트를 만듭니다.
logs = ["ERR", "OK", "ERR"]
err = [l for l in logs if l == "ERR"]
print(err)

5. Less Than Filter / 5 미만의 숫자로만 구성된 새 목록을 뽑습니다.
nums = [1, 2, 3, 4, 10]
sm = [n for n in nums if n < 5]
print(sm)

6. Prefix Filter / 이름의 첫 글자가 'A'인 명단만 생성합니다.
data = ["Alice", "Bob", "Alex"]
a_name = [n for n in data if n[0] == "A"]
print(a_name)

7. Type Filter / 혼합 리스트에서 숫자(int) 타입만 골라냅니다.
mixed = [1, "A", 2, "B"]
nums = [x for x in mixed if type(x) == int]
print(nums)

8. Extension Filter / 확장자가 .py인 파일 목록 전용 리스트를 만듭니다.
files = ["a.py", "b.txt", "c.py"]
py = [f for f in files if f.endswith(".py")]
print(py)

9. Digits only / 문자열에서 숫자 부분만 따로 모아 리스트로 만듭니다.
s = "Py3.12"
digits = [c for c in s if c.isdigit()]
print(digits)

10. Adult Filter / 나이 목록 중 성인 데이터만 필터링합니다.
ages = [15, 20, 25]
adults = [a for a in ages if a >= 19]
print(adults)

11. Non-zero filter / 0을 제외한 데이터만 골라냅니다.
nums = [0, 5, 0, 10]
valid = [n for n in nums if n != 0]
print(valid)

12. Substring membership / "target"이란 단어가 포함된 로그만 추출합니다.
logs = ["system error", "target found", "exit"]
res = [l for l in logs if "target" in l]
print(res)

13. Even index enumerate / enumerate와 결합해 짝수 번째 요소만 뺍니다.
lst = ["A", "B", "C", "D"]
even_idx = [v for i, v in enumerate(lst) if i % 2 == 0]
print(even_idx)

14. Character in set filter / 특정 모음이 포함된 단어만 찾습니다.
words = ["sky", "fly", "see"]
vowel = [w for w in words if "e" in w]
print(vowel)

15. Absolute value filter / 절대값이 5 이상인 수만 모읍니다.
n = [-10, 2, -3, 8]
res = [x for x in n if abs(x) >= 5]
print(res)

16. List of dicts filter / 딕셔너리 리스트 중 특정 값을 가진 것만 뺍니다.
users = [{"id": 1, "ok": True}, {"id": 2, "ok": False}]
active = [u["id"] for u in users if u["ok"]]
print(active)

17. Range with multi-if / 2의 배수이면서 3의 배수인 것을 찾습니다.
res = [i for i in range(1, 20) if i % 2 ==0 if i % 3 == 0]
print(res)

18. Negative number remover / 음수를 뺀 결과물입니다.
data = [1, -5, 2]
res = [d for d in data if d >= 0]
print(res)

19. Boolean list True indices / True인 곳의 위치(인덱스)만 모읍니다.
flags = [True, False, True]
res = [i for i, f in enumerate(flags) if f]
print(res)

20. Final Review / [복습] 1000원 이상 품목에만 10% 할인을 적용한 리스트를 생성합니다.
prices = [1200, 800, 2500]
dc = [p*0.9 for p in prices if p >= 1000]
print(dc)

---

Lv58. Dict Comprehension / 딕셔너리 컴프리헨션
Description: 딕셔너리 또한 컴프리헨션을 사용하여 쉽고 빠르게 생성하는 법을 익힙니다. / Learn how to create dictionaries concisely using comprehensions.

1. Square Key-Value / {1:1, 2:4, 3:9} 와 같이 제곱값을 가진 딕셔너리를 만듭니다.
sq = {i: i**2 for i in range(1, 4)}
print(sq)

2. Case Mapping / 이름을 키로, 대문자 이름을 값으로 하는 딕셔너리를 만듭니다.
names = ["a", "b"]
d = {n: n.upper() for n in names}
print(d)

3. Word Length Mapping / 단어를 키로, 글자 길이를 값으로 저장합니다.
items = ["App", "Web"]
len_d = {i: len(i) for i in items}
print(len_d)

4. Constant Initialization / 모든 키에 동일한 문자열 값을 할당해 딕셔너리를 초기화합니다.
nums = [1, 2, 3]
d = {n: "Num" for n in nums}
print(d)

5. Scale Value / 기존 딕셔너리 값들에 가중치를 더해 새 딕셔너리를 만듭니다.
scores = {"A": 90, "B": 80}
up = {k: v+5 for k, v in scores.items()}
print(up)

6. Key-Value Swap / 데이터 값을 키로, 해당 위치(인덱스)를 값으로 뒤집어 저장합니다.
data = [10, 20, 30]
idx_d = {v: i for i, v in enumerate(data)}
print(idx_d)

7. Conditional Dict / 80점 이상의 과목 정보만 필터링한 새 딕셔너리를 만듭니다.
scores = {"Math": 90, "Eng": 50}
passed = {k: v for k, v in scores.items() if v >= 80}
print(passed)

8. Char Extraction Mapping / 색상 이름과 첫 글자를 매핑합니다.
colors = ["red", "blue"]
d = {c: c[0] for c in colors}
print(d)

9. Combine Two Lists / 두 리스트를 인덱스로 참조하여 하나의 딕셔너리로 결합합니다.
keys = ["ID", "PW"]
vals = ["admin", "123"]
d = {keys[i]: vals[i] for i in range(len(keys))}

10. ASCII Code Mapping / 문자를 키로, 아스키 코드값을 값으로 저장합니다.
s = "abc"
d = {c: ord(c) for c in s}
print(d)

11. Flipping keys and values / 키와 값을 맞바꿉니다 (고유값 가정).
d = {"A": 1, "B": 2}
rev = {v: k for k, v in d.items()}
print(rev)

12. Even keys only / 짝수 키만 유지합니다.
d = {1: "A", 2: "B", 3: "C", 4: "D"}
res = {k: v for k, v in d.items() if k % 2 == 0}
print(res)

13. String repetition / 각 키의 값을 글자 수만큼 반복한 문자열로 채웁니다.
d = {"A": "!", "B": "?"}
res = {k: v * 3 for k, v in d.items()}
print(res)

14. List inside dict mapping / 딕셔너리 값(리스트)의 평균을 구해 새 딕셔너리를 만듭니다 (맛보기).
data = {"p1": [10, 20], "p2": [30, 40]}
res = {k: sum(v)/len(v) for k, v in data.items()}
print(res)

15. Boolean filter / True인 값만 남깁니다.
flags = {"A": True, "B": False}
active = {k: v for k, v in flags.items() if v}
print(active)

16. Character frequency hint / (Lv 50 복습) 한 줄로 빈도수를 셉니다 (맛보기).
s = "banana"
d = {c: s.count(c) for c in s}
print(d)

17. Map digits to numeric / 문자를 정수로 바꿔 맵핑합니다.
s = "123"
d = {c: int(c) for c in s}
print(d)

18. Range based mapping / 0-2 인덱스를 키로, 해당 range 제곱을 값으로 넣습니다.
d = {i: i**2 for i in range(3)}
print(d)

19. Multiple conditional filter / 값의 크기와 키의 존재 여부를 같이 봅니다.
d = {"a": 10, "b": 2}
res = {k: v for k, v in d.items() if v > 5 if k != "c"}
print(res)

20. Final Review / [복습] 기존 유저 데이터 중 양수 수치만 남기고 딕셔너리를 정제합니다.
user = {"A": 10, "B": -5, "C": 20}
clean = {k: v for k, v in user.items() if v > 0}
print(clean)

---

Lv59. Ternary & Nested / 복합 조건 컴프리헨션
Description: if-else 구조를 컴프리헨션 안에 넣어 데이터를 변형하거나 필터링하는 고급 기법을 익힙니다. / Learn ternary logic and nested loops within comprehensions.

1. Ternary result / if-else를 앞에 써서 짝수/홀수 판별 결과를 리스트에 담습니다.
n = [1, 2, 3, 4]
res = ["Even" if i % 2 == 0 else "Odd" for i in n]
print(res)

2. Grading result / 점수 리스트를 합격/불합격 여부 리스트로 변환합니다.
scores = [90, 50, 80]
res = ["Pass" if s >= 80 else "Fail" for s in scores]
print(res)

3. Nullification / 음수 데이터는 모두 0으로 치환하여 리스트를 만듭니다.
v = [1, -5, 10, -2]
res = [i if i > 0 else 0 for i in v]
print(res)

4. Clipping Strings / 짧은 단어는 "Short"로 표시하는 규칙을 적용합니다.
txt = ["hi", "python", "go"]
res = [s if len(s) > 2 else "Short" for s in txt]
print(res)

5. Flatten Matrix / 이중 반복문을 한 줄로 써서 2차원 리스트를 1차원으로 평평하게 폅니다.
m = [[1, 2], [3, 4]]
flat = [v for row in m for v in row]
print(flat)

6. Coordinate Pairs / (x, y) 형태의 좌표쌍들을 리스트 컴프리헨션으로 생성합니다.
coords = [(x, y) for x in range(2) for y in range(2)]
print(coords)

7. Multiple If Conditions / if 조건을 연속해서 써서 2보다 크면서 짝수인 값만 걸러냅니다.
n = [1, 2, 3, 4, 10]
res = [i for i in n if i > 2 if i % 2 == 0]
print(res)

8. Dict Ternary / 딕셔너리 값들을 대/소 구분에 따라 문구로 변환합니다.
data = {"a": 15, "b": 5}
res = {k: ("High" if v >= 10 else "Low") for k, v in data.items()}
print(res)

9. Combinatorial Strings / 수평/수직 조합을 생성하여 명단(A1, A2, B1, B2)을 만듭니다.
words = ["A", "B"]
combined = [c + str(i) for c in words for i in range(1, 3)]
print(combined)

10. Nested Wrapping / 숫자를 [원본, 제곱] 형태의 리스트들로 감싸 중첩 리스트를 만듭니다.
nums = [1, 2, 3]
res = [[i, i**2] for i in nums]
print(res)

11. Ternary mapping with index / 짝수 인덱스만 값을 유지하고 홀수는 0으로 바꿉니다.
lst = [10, 20, 30, 40]
res = [v if i % 2 == 0 else 0 for i, v in enumerate(lst)]
print(res)

12. List of list conditional / 내부 리스트 중 크기가 1인 것만 골라 폅니다.
m = [[1], [2, 3], [4]]
flat_s = [v for row in m if len(row) == 1 for v in row]
print(flat_s)

13. Ternary string manipulation / 대문자는 소문자로, 소문자는 대문자로 바꿉니다 (맛보기).
s = "Py"
res = [c.lower() if c.isupper() else c.upper() for c in s]
print("".join(res))

14. Multi-level ternary / 90점 초과는 A, 80점 초과는 B, 나머지는 F입니다 (맛보기).
s = [95, 82, 70]
res = ["A" if x > 90 else "B" if x > 80 else "F" for x in s]
print(res)

15. Flattening with filter / 중첩 리스트에서 짝수만 뽑아 한 줄로 만듭니다.
m = [[1, 2], [3, 4]]
evens = [v for row in m for v in row if v % 2 == 0]
print(evens)

16. Dict nested loop / 두 딕셔너리의 키 조합을 만듭니다.
d1, d2 = {"A": 1}, {"B": 2}
res = {k1+k2: v1+v2 for k1, v1 in d1.items() for k2, v2 in d2.items()}
print(res)

17. Range filtered triple / 0~10 중 2의 배수도 3의 배수도 아닌 것만 모읍니다.
res = [i for i in range(11) if not (i % 2 == 0 or i % 3 == 0)]
print(res)

18. Boolean to emotion / True는 "Happy", False는 "Sad"로 바꿉니다.
flags = [True, False]
emo = ["Happy" if f else "Sad" for f in flags]
print(emo)

19. Double nested list / 3x3 행렬을 중첩 리스트로 생성합니다.
grid = [[(r, c) for c in range(3)] for r in range(3)]
print(grid[0])

20. Final Review / [복습] 점수에 따라 승인 메시지나 재시험 메시지를 조건부로 생성합니다.
user = [95, 45, 80]
final = [f"OK({s})" if s >= 80 else f"RE({s})" for s in user]
print(final)

---

Lv60. [Challenge] Data Transformer / [챌린지] 데이터 변환 마스터
Description: [챌린지] 지금까지 배운 제어문과 컴프리헨션을 총동원하여 복잡한 원본 데이터를 가공합니다. / Mastering data processing using control flow and comprehensions.

1. Filter & Mean / 양수만 뽑아내어 그 평균을 구하는 컴프리헨션 활용 예제입니다.
data = [12, -5, 30, -1, 15]
clean = [d for d in data if d > 0]
print(f"AVG: {sum(clean)/len(clean)}")

2. User Sanitize / 특정 그룹(guest)을 제외한 유저 명단을 정제합니다.
ids = ["user-1", "user-2", "guest-1"]
users = [i for i in ids if "guest" not in i]
print(users)

3. Bulk Discount / 1000원 이상에만 일괄 10% 할인을 적용한 최종 가격 목록입니다.
prices = [1000, 2000, 500]
final = [p * 0.9 if p >= 1000 else p for p in prices]
print(final)

4. Title Case & Length / 이름을 첫 글자만 대문자로 바꾸고 이름 길이를 저장하는 딕셔너리입니다.
names = ["alice", "bob", "charlie"]
d = {n.capitalize(): len(n) for n in names}
print(d)

5. CSV Split & Strip / 콤마 구분 로그를 분해한 뒤 각 요소의 공백까지 말끔히 제거합니다.
log = "2026-01-07, 100, True, Admin"
clean = [x.strip() for x in log.split(",")]
print(clean)

6. Count Odd Filter / 홀수만 골라낸 뒤 그 개수를 집계합니다.
nums = [1, 2, 3, 4, 5]
res = [i for i in nums if i % 2 != 0]
print(f"Odds Count: {len(res)}")

7. Grid Generation / 리스트 컴프리헨션 안에 컴프리헨션을 넣어 3x3 격자를 생성합니다.
grid = [[i for i in range(3)] for _ in range(3)]
print(grid[0])

8. Gauge Monitoring / 기준치를 넘는 항목만 추출하여 경고(ALRT) 메시지로 변환합니다.
source = {"cpu": 0.5, "ram": 0.8}
check = {k: "ALRT" for k, v in source.items() if v >= 0.7}
print(check)

9. Acronym Maker / 문장의 각 단어 첫 글자만 따서 약어(Acronym)를 만듭니다.
txt = "Hello World From Python"
res = [w[0] for w in txt.split()]
print("".join(res))

10. Null Value Removal / 문자열 형태 등으로 섞여 들어온 결측치를 제거하고 합계를 구합니다.
data = [1, "None", 2, "None", 3]
clean = [x for x in data if type(x) == int]
print(sum(clean))

11. File extension extraction / 확장자들만 모아 중복을 제거합니다 (Set + List).
files = ["a.py", "b.jpg", "c.py"]
exts = sorted(list({f.split(".")[-1] for f in files}))
print(exts)

12. Price formatting / 숫자를 "$가격" 형태의 문자열 리스트로 바꿉니다.
p = [10, 20, 30]
res = [f"${x}" for x in p]
print(res)

13. List difference / 두 리스트의 차집합을 컴프리헨션으로 구합니다.
l1, l2 = [1, 2, 3], [2]
diff = [x for x in l1 if x not in l2]
print(diff)

14. Character mapping result / 문자를 키로, 그 문자의 출현 횟수를 값으로 담습니다.
s = "apple"
res = {c: s.count(c) for c in set(s)}
print(res)

15. Boolean inversion / 불리언 리스트를 전체 반전시킵니다.
flags = [True, False, True]
inv = [not f for f in flags]
print(inv)

16. Flat map and filter / 중첩 리스트를 펴면서 0을 제외합니다.
m = [[0, 1], [2, 0]]
res = [x for row in m for x in row if x != 0]
print(res)

17. Dictionary key to uppercase / 딕셔너리의 키만 모두 대문자로 바꿉니다.
d = {"id": "neo", "pw": "123"}
res = {k.upper(): v for k, v in d.items()}
print(res)

18. Range with ternary logic / 3의 배수는 "X", 아니면 숫자를 담습니다.
res = ["X" if i % 3 == 0 else i for i in range(1, 11)]
print(res)

19. Multiple list alignment / 두 리스트에서 인덱스가 같은 것끼리 튜플로 묶습니다.
l1, l2 = [1, 2], ["A", "B"]
res = [(l1[i], l2[i]) for i in range(len(l1))]
print(res)

20. Final Review / [종합] 특정 수치 범위에 포함된 값들만 추출한 뒤 합계를 계산합니다.
raw = [10, 20, 30, 40, 50]
mid_fix = [d for d in raw if 15 < d < 45]
print(f"Target: {mid_fix} Sum: {sum(mid_fix)}")
