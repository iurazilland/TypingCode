# Phase 4: 함수와 프로그램 모듈화 (Lv 71 - 75) 상세 세트

---

Lv71. Lambda Functions / 람다 함수
Description: 이름 없이 간결하게 한 줄로 정의하여 사용하는 '익명 함수' 문법을 익힙니다. / Learn how to define short, one-line anonymous functions using lambda.

1. Basic Lambda / lambda는 def 없이 한 줄로 함수를 정의합니다.
add = lambda a, b: a + b
print(add(10, 20))

2. Single Argument / 인자를 하나 받아 제곱을 계산하는 간단한 람다식입니다.
sq = lambda x: x ** 2
print(sq(5))

3. Predicate Lambda / 짝수 여부를 판단해 결과를 참/거짓으로 돌려주는 람다식입니다.
is_even = lambda n: n % 2 == 0
print(is_even(10))

4. String Mapper / 문자열을 대문자로 변환하는 기능을 람다로 구현합니다.
upper = lambda s: s.upper()
print(upper("python"))

5. f-string Lambda / f-string을 사용한 인사 문구를 생성하는 람다식입니다.
greet = lambda n: f"Hi, {n}"
print(greet("Alice"))

6. Triple Input / 세 개의 인자를 받아 곱한 결과를 리턴합니다.
multi = lambda a, b, c: a * b * c
print(multi(1, 2, 3))

7. Ternary Lambda / 람다식 내부에서 if-else 삼항 연산자를 사용할 수 있습니다.
check = lambda x: "High" if x > 50 else "Low"
print(check(70))

8. Join Lambda / 이름과 성을 합쳐주는 람다 예시입니다.
full_name = lambda f, l: f"{f} {l}"
print(full_name("Guido", "Rossum"))

9. Key Selector / sort 등의 함수에서 정렬 기준(key)을 정할 때 람다가 자주 쓰입니다.
data = [("A", 10), ("B", 5)]
data.sort(key=lambda x: x[1])
print(data)

10. No-args Lambda / 인자가 없는 람다 함수도 정의하여 사용할 수 있습니다.
f = lambda: print("No Args")
f()

11. Numeric multiplier / 고정된 수치를 곱하는 람다입니다.
ten_times = lambda x: x * 10
print(ten_times(3))

12. Substring extraction / 첫 세 글자만 따옵니다.
sub = lambda s: s[:3]
print(sub("Python"))

13. List element access / 리스트의 첫 번째 요소를 가져옵니다.
first = lambda lst: lst[0]
print(first([1, 2, 3]))

14. Dictionary value lookup / 특정 키의 값을 찾는 람다입니다.
val = lambda d, k: d.get(k)
print(val({"a": 1}, "a"))

15. Boolean inversion / 불리언 값을 반전시킵니다.
flip = lambda b: not b
print(flip(True))

16. Character removal / 특정 글자를 지웁니다.
strip_sharp = lambda s: s.strip("#")
print(strip_sharp("#tag"))

17. Multi-line simulated / (맛보기) 괄호를 이용해 복잡한 연산을 한 줄로 짭니다.
calc = lambda x: (x + 1) * 2 / 10
print(calc(4))

18. Type checker / 타입을 판별합니다.
is_str = lambda x: type(x) == str
print(is_str("Hi"))

19. Constant return / 인자와 상관없이 고정값을 돌려주는 특수한 람다입니다.
fixed = lambda x: 0
print(fixed(100))

20. Final Review / [복습] 기본값 매개변수를 가진 람다 함수로 세금을 계산합니다.
tax_fn = lambda x, rate=0.1: x * rate
print(f"Tax: {tax_fn(1000):.0f}")

---

Lv72. Map Function / 맵 함수
Description: 리스트나 튜플의 모든 요소에 특정 함수를 일괄 적용하는 효율적인 기법을 익힙니다. / Use map() to apply a function to every item in an iterable.

1. Lambda with Map / 리스트의 모든 숫자를 2배씩 늘려줍니다.
n = [1, 2, 3]
res = map(lambda x: x * 2, n)
print(list(res))

2. Built-in with Map / 모든 문자열 요소를 한꺼꺼번에 대문자로 변환합니다.
s = ["a", "b", "c"]
res = map(str.upper, s)
print(list(res))

3. Type Casting Map / 문자열 숫자 리스트를 정수형으로 일괄 변환하여 합계를 구합니다.
prices = ["100", "200"]
nums = map(int, prices)
print(sum(nums))

4. Rounding Map / 모든 실수를 반올림하여 정수 리스트로 만듭니다.
n = [1.2, 5.7, 3.1]
res = map(round, n)
print(list(res))

5. Length Extraction / 리스트 내 각 단어의 글자 수를 리스트로 뽑아냅니다.
words = ["Py", "Code"]
res = map(len, words)
print(list(res))

6. User Function Map / 직접 정의한 사용자 함수를 map에 적용할 수 있습니다.
def deco(s): return f"#{s}"
tags = ["dev", "py"]
print(list(map(deco, tags)))

7. Parallel Mapping / 두 개의 리스트를 동시에 받아 각각의 요소를 더해줍니다.
r1, r2 = [1, 2, 3], [10, 20, 30]
res = map(lambda x, y: x + y, r1, r2)
print(list(res))

8. Absolute Transformation / 모든 리스트 요소를 절대값으로 변환합니다.
v = [-10, 5, -2]
res = map(abs, v)
print(list(res))

9. String Explosion / 문자열을 map에 넣으면 글자 하나하나를 숫자로 쪼개줍니다.
s = "12345"
res = map(int, s)
print(list(res))

10. Multi-strip / 여러 문자열의 양쪽 공백을 한꺼번에 제거합니다.
data = [" apple ", " banana "]
res = map(str.strip, data)
print(list(res))

11. Boolean Mapping / 리스트의 값들이 5보다 큰지 여부를 매핑합니다.
n = [2, 8, 4]
res = map(lambda x: x > 5, n)
print(list(res))

12. Formatted String Map / 숫자를 "$가격" 문자열로 바꿉니다.
p = [10, 20]
res = map(lambda x: f"${x}", p)
print(list(res))

13. Nested list map / 내부 리스트의 합계를 구합니다.
m = [[1, 2], [3, 4]]
res = map(sum, m)
print(list(res))

14. Character ordinal map / 아스키 코드값으로 일괄 변경합니다.
s = "abc"
res = map(ord, s)
print(list(res))

15. Mapping over dict keys / 딕셔너리 키들을 대문자로 바꿉니다.
d = {"id": 1}
res = map(str.upper, d.keys())
print(list(res))

16. List to bool map / 비어있지 않은지 검사합니다.
l = ["", "Hi", ""]
res = map(bool, l)
print(list(res))

17. Range multiplier / range 결과를 일괄 변형합니다.
res = map(lambda i: i * 5, range(3))
print(list(res))

18. Substring map / 단어의 첫 글자만 따옵니다.
w = ["Kim", "Lee"]
res = map(lambda x: x[0], w)
print(list(res))

19. Multiple list concatenation / 두 문자열 리스트를 합칩 =니다.
l1, l2 = ["A", "B"], ["1", "2"]
res = map(lambda x, y: x + y, l1, l2)
print(list(res))

20. Final Review / [복습] 가격 리스트의 모든 품목에 10% 할인을 적용한 뒤 정수로 변환합니다.
prices = [1000, 2000, 3000]
final = map(lambda p: int(p * 0.9), prices)
print(f"DC Prices: {list(final)}")

---

Lv73. Filter Function / 필터 함수
Description: 리스트에서 특정 조건에 부합하는 데이터만 쏙쏙 골라내는 법을 익힙니다. / Use filter() to extract items from an iterable based on a condition.

1. Even Filter / 리스트에서 짝수만 걸러내어 새로운 목록을 만듭니다.
n = [1, 2, 3, 4, 5, 6]
res = filter(lambda x: x % 2 == 0, n)
print(list(res))

2. Threshold Filter / 50보다 큰 숫자들만 필터링합니다.
data = [10, 55, 30, 80, 20]
res = filter(lambda x: x > 50, data)
print(list(res))

3. Startswith Filter / 이름이 'A'로 시작하는 사람만 추출합니다.
names = ["Alice", "Bob", "Alex"]
res = filter(lambda n: n.startswith("A"), names)
print(list(res))

4. Type Identity Filter / 리스트에서 특정 타입(정수)인 데이터만 골라냅니다.
mix = [1, "A", 2, "B"]
res = filter(lambda x: type(x) == int, mix)
print(list(res))

5. Length Constraint / 글자 수가 3개를 초과하는 단어만 필터링합니다.
words = ["cat", "dog", "elephant"]
res = filter(lambda w: len(w) > 3, words)
print(list(res))

6. Truthy Filter / filter에 None을 주면 값이 참(Truthy)인 것들만 남깁니다.
vals = [0, 1, False, True, ""]
res = filter(None, vals)
print(list(res))

7. Keyword Filter / 에러 키워드가 포함된 로그만 걸러냅니다.
logs = ["ERR01", "OK", "ERR02"]
res = filter(lambda l: "ERR" in l, logs)
print(list(res))

8. Score Filter / 과락 점수를 제외한 합격한 점수들의 개수를 구합니다.
scores = [85, 40, 92, 55]
res = filter(lambda s: s >= 60, scores)
print(f"Pass count: {len(list(res))}")

9. Extension Filter / 파이썬 확장자 파일만 골라내는 로직입니다.
files = ["a.py", "b.txt", "c.py"]
res = filter(lambda f: f.endswith(".py"), files)
print(list(res))

10. Age Bracket / 성인들만 골라낸 뒤 그중 가장 어린 나이를 찾습니다.
ages = [15, 20, 25]
adults = filter(lambda a: a >= 19, ages)
print(f"Min Adult: {min(adults)}")

11. Numeric String Filter / 문자열 리스트 중 숫자 형태만 남깁니다.
lst = ["10", "A", "20"]
res = filter(lambda s: s.isdigit(), lst)
print(list(res))

12. Unique but not filter / 특정 요소를 제외합니다.
bans = ["bad", "hate"]
words = ["good", "bad", "nice"]
res = filter(lambda w: w not in bans, words)
print(list(res))

13. List of dicts value filter / 활성 유저만 뽑습니다.
users = [{"id": "a", "on": True}, {"id": "b", "on": False}]
on = filter(lambda u: u["on"], users)
print(list(on))

14. Filter out spaces / 공백만 있는 문자열을 버립니다.
s = ["A", " ", "B"]
res = filter(str.strip, s)
print(list(res))

15. Multiple of 3 and 5 / 두 배수 조건을 모두 만족하는 필터입니다.
n = range(1, 40)
res = filter(lambda x: x % 3 == 0 and x % 5 == 0, n)
print(list(res))

16. Character exclusion / 특정 철자가 포함 안 된 단어를 찾습니다.
w = ["apple", "banana", "kiwi"]
res = filter(lambda x: "a" not in x, w)
print(list(res))

17. Float vs Int filter / 정수만 골라냅니다.
l = [1, 2.5, 3]
res = filter(lambda x: isinstance(x, int), l)
print(list(res))

18. Empty collection filter / 비어있지 않은 리스트만 남깁니다.
m = [[1], [], [2]]
res = filter(lambda x: len(x) > 0, m)
print(list(res))

19. Case sensitive filter / 대문자 단어만 찾습니다.
w = ["Py", "py", "TEXT"]
res = filter(str.isupper, w)
print(list(res))

20. Final Review / [복습] 아이디 길이가 5자 이상인 유효한 사용자 목록만 필터링합니다.
user_ids = ["admin", "root", "dev_01"]
valid = filter(lambda u: len(u) >= 5, user_ids)
print(f"Valid IDs: {list(valid)}")

---

Lv74. Zip Function / 짚 함수
Description: 여러 개의 리스트를 병렬로 묶어 동시에 하나씩 꺼내어 사용하는 법을 익힙니다. / Use zip() to pair up elements from multiple iterables.

1. Pairing / 두 리스트의 같은 위치 아이템을 튜플로 묶어줍니다.
keys = ["ID", "PW"]
vals = ["admin", "123"]
res = zip(keys, vals)
print(list(res))

2. Parallel Loop / zip을 for 문과 함께 쓰면 두 데이터를 동시에 순회하기 편리합니다.
names = ["Alice", "Bob"]
ages = [25, 30]
for n, a in zip(names, ages):
    print(f"{n} is {a}")

3. Dict Generator / zip 결과를 dict()로 감싸면 즉시 딕셔너리로 변환됩니다.
ids = [1, 2]
nms = ["A", "B"]
d = dict(zip(ids, nms))
print(d)

4. Uneven Lengths / 대상 리스트들의 길이가 다를 경우 가장 짧은 것 기준으로 멈춥니다.
a, b = [1, 2, 3], [10, 20]
print(list(zip(a, b)))

5. Multi-list Zip / 3개 이상의 리스트도 한꺼번에 묶어서 계산할 수 있습니다.
items = ["Phone", "Pad"]
prices = [1000, 2000]
qtys = [5, 2]
for i, p, q in zip(items, prices, qtys):
    print(f"{i}: {p * q}")

6. Iterables Mix / 문자열과 리스트도 묶음 처리가 가능합니다.
chars = "ABC"
nums = [1, 2, 3]
print(list(zip(chars, nums)))

7. Unzip / zip(*) 형식을 사용하면 묶여있던 튜플 리스트를 다시 분리(Unzip)합니다.
pairs = [(1, "A"), (2, "B")]
a, b = zip(*pairs)
print(a, b)

8. Dictionary-style Build / 영단어와 한글 의미를 짝지어 단어장 데이터를 만듭니다.
eng = ["one", "two"]
kor = ["하나", "둘"]
print(list(zip(eng, kor)))

9. Element-wise Diff / 두 리스트 요소 간의 차이를 구할 때 컴프리헨션과 결합합니다.
s1, s2 = [10, 20], [5, 15]
res = [a - b for a, b in zip(s1, s2)]
print(res)

10. Header-Data Map / 표의 헤더와 데이터 열을 묶어 정보를 구조화합니다.
head = ["Name", "Job"]
body = ["Alice", "Dev"]
print(dict(zip(head, body)))

11. Index mapping with range / 0, 1, 2 인덱스와 값을 묶습니다.
l = ["A", "B", "C"]
res = zip(range(len(l)), l)
print(list(res))

12. Swapping via zip unzip / 키와 값을 맞바꾸는 고급 기법입니다.
d = {"a": 1, "b": 2}
k, v = zip(*d.items())
rev = dict(zip(v, k))
print(rev)

13. Checking equality parallel / 두 리스트가 같은지 하나씩 봅니다.
l1, l2 = [1, 2], [1, 0]
res = [x == y for x, y in zip(l1, l2)]
print(res)

14. Character repetition combo / 글자와 숫자를 묶어 기호를 만듭니다.
c = ["*", "#"]
n = [3, 2]
for char, cnt in zip(c, n):
    print(char * cnt)

15. Sorting by pair / 한 리스트 기준으로 다른 리스트도 같이 정렬합니다 (맛보기).
s = [90, 80]
n = ["A", "B"]
res = sorted(zip(s, n))
print(res)

16. String and index pairing / 글자마다 번호를 붙입니다.
s = "Hi"
print(list(zip(range(1, 3), s)))

17. Cumulative zip / 자기 자신과 슬라이싱한 버전을 묶어 '현재, 다음' 쌍을 만듭니다.
n = [1, 2, 3]
print(list(zip(n, n[1:])))

18. Boolean matching / 결과와 정답을 묶어 정확도를 봅니다.
ans = [True, False]
user = [True, True]
print(list(zip(ans, user)))

19. Multiple string prefix / 머리말과 꼬리말을 묶습니다.
h = ["Mr.", "Ms."]
b = ["Ken", "Ann"]
res = [x+y for x, y in zip(h, b)]
print(res)

20. Final Review / [복습] 시, 분, 초 리스트를 묶어 정제된 시간 포맷으로 여러 줄 출력합니다.
h, m, s = [9, 10], [5, 12], [2, 7]
for t in zip(h, m, s):
    print(f"Time - {t[0]:02d}:{t[1]:02d}:{t[2]:02d}")

---

Lv75. [Challenge] Data Pipeline / [챌린지] 데이터 파이프라인
Description: [챌린지] map, filter, lambda, zip을 결합하여 복잡한 데이터를 가공하는 파이프라인을 만듭니다. / Building data processing pipelines by combining functional programming tools.

1. Filter then Map / 짝수만 골라내어(filter) 각각을 제곱(map)하는 연속 작업입니다.
data = [1, 2, 3, 4, 5]
res = map(lambda x: x**2, filter(lambda x: x % 2 == 0, data))
print(list(res))

2. Two-step Map / 공백을 지우고 다시 숫자로 바꾸는 2단계 변환 파이프라인입니다.
raw = [" 10 ", " 20 ", " -5 "]
res = map(int, map(str.strip, raw))
print(list(res))

3. Zip then Filter / 정보를 묶은(zip) 뒤 특정 조건(점수)으로 걸러냅니다(filter).
ids, scores = ["a", "b"], [90, 45]
valid = filter(lambda x: x[1] >= 80, zip(ids, scores))
print(list(valid))

4. Map then Filter / 모두 대문자로 바꾼 뒤 'H'가 포함된 단어만 남깁니다.
txt = ["Hi", "Hello", "Bye"]
res = filter(lambda s: "H" in s, map(str.upper, txt))
print(list(res))

5. DC with Filter / 세금을 포함한 가격을 구한 뒤 그중 비싼 물건만 추출합니다.
prices = [1200, 800, 5000]
final = filter(lambda x: x >= 1000, map(lambda p: p * 1.1, prices))
print(list(final))

6. Acronym via Map / 이름들의 첫 글자만 모아서 한 단어로 합칩니다.
names = ["Alice", "Bob"]
res = "".join(map(lambda n: n[0], names))
print(res)

7. Conditional Sum / 1~10 중 3의 배수들의 총합을 함수 조합으로 구합니다.
data = range(1, 11)
res = sum(filter(lambda x: x % 3 == 0, data))
print(res)

8. Batch Suffix / 아이디 뒤에 상태 표시를 일괄적으로 덧붙입니다.
u = ["a", "b", "c"]
checked = map(lambda x: x + "@ok", u)
print(list(checked))

9. Dict with Map Zip / 원본 수와 그 숫자의 제곱수로 된 딕셔너리를 효율적으로 만듭니다.
v = [1, 2, 3]
res = zip(v, map(lambda x: x**2, v))
print(dict(res))

10. Multi-stage Clean / 모든 수를 양수로 바꾸고 0은 제외하는 정제 로직입니다.
nums = [-2, 0, 5, -8]
clean = filter(lambda x: x != 0, map(abs, nums))
print(list(clean))

11. Unique extension count / 파일에서 확장자만 따서 유일한 것만 필터링합니다.
f = ["a.py", "b.py", "c.js"]
ext = set(map(lambda x: x.split(".")[-1], f))
print(len(ext))

12. Boolean score list / 점수 리스트를 Pass/Fail 불리언으로 전환합니다.
s = [90, 50, 80]
res = map(lambda x: x >= 60, s)
print(list(res))

13. Tagging with Map / HTML 태그로 감싸는 맵핑입니다.
tags = ["p", "b"]
res = map(lambda t: f"<{t}>", tags)
print(list(res))

14. List of names to sorted unique / 중복 제거 후 정렬된 리스트를 만듭니다 (맛보기).
n = ["B", "A", "B"]
res = sorted(list(set(n)))
print(res)

15. Valid email domain check / 특정 도메인만 필터링합니다.
e = ["a@g.com", "b@n.com"]
res = filter(lambda x: x.endswith("@g.com"), e)
print(list(res))

16. Parallel sum zip map / 두 리스트의 합을 맵으로 구합니다.
l1, l2 = [1, 2], [3, 4]
res = map(lambda p: p[0] + p[1], zip(l1, l2))
print(list(res))

17. Character map with join / 문자열의 각 글자를 띄어쓰기로 벌립니다.
s = "CODE"
res = " ".join(map(str, s))
print(res)

18. Nested list element map / 내부 튜플의 첫 부분만 맵핑합니다.
data = [("A", 1), ("B", 2)]
res = map(lambda x: x[0], data)
print(list(res))

19. Number to star map / 숫자만큼 별을 찍습니다.
n = [1, 2, 3]
res = map(lambda x: "*" * x, n)
print(list(res))

20. Final Review / [종합] 유저와 점수를 묶고, 90점 이상만 걸러낸 뒤, 이름을 대문자로 포맷팅합니다.
user, score = ["kim", "lee"], [95, 80]
passed = filter(lambda x: x[1] >= 90, zip(user, score))
fmt = map(lambda x: f"USER:{x[0].upper()}", passed)
print(list(fmt))
