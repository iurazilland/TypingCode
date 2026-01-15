# Phase 3: 제어문과 프로그램 흐름 (Lv 46 - 50) 상세 세트

---

Lv46. For Loops & range / For 반복문과 range 기초
Description: range() 함수를 사용하여 지정한 횟수만큼 코드를 반복 실행하는 법을 익힙니다. / Learn how to use range() to execute code a specific number of times.

1. Basic Repeat / 3번 반복하여 "Hello"를 출력합니다.
for i in range(3):
    print("Hello")

2. Index Access / range(5)는 0부터 4까지의 숫자를 하나씩 꺼내줍니다.
for i in range(5):
    print(i)

3. Custom Start / 1부터 5까지(1~6 전까지) 범위를 지정해 반복합니다.
for i in range(1, 6):
    print(f"Step {i}")

4. Step range / 0부터 10 전까지 2씩 건너뛰며 출력합니다 (0, 2, 4, 6, 8).
for i in range(0, 10, 2):
    print(i)

5. Countdown / 5부터 1까지 뒤로 하나씩 세는 카운트다운을 구현합니다.
for i in range(5, 0, -1):
    print(i)

6. Blank Variable / 변수 i를 쓰지 않을 때는 언더바(_)를 쓰는 관습이 있습니다.
for _ in range(3):
    print("---")

7. Cumulative Sum / 1부터 10까지의 합계를 반복문으로 구합니다.
total = 0
for i in range(1, 11):
    total += i
print(total)

8. Offset Display / 인덱스 숫자에 1을 더해 회차 정보를 출력합니다.
for i in range(3):
    print("Repeat", i + 1)

9. Multiple check / 0~9 중 3의 배수만 골라 출력합니다.
for i in range(10):
    if i % 3 == 0:
        print(i)

10. Star Multiplier / 별찍기: 줄 번호만큼 별 개수를 늘려가며 출력합니다.
for i in range(1, 4):
    print("*" * i)

11. Range to list / range 결과를 리스트로 바로 변환해 봅니다.
nums = list(range(10, 101, 10))
print(nums)

12. Square numbers / 1부터 5까지의 제곱수를 출력합니다.
for i in range(1, 6):
    print(i ** 2)

13. Decrement step / 10에서 0까지 2씩 줄어들며 반복합니다.
for i in range(10, -1, -2):
    print(f"Val: {i}")

14. Nested string multiplication / 반복문 안에서 문자열을 누적합니다.
s = ""
for i in range(3):
    s += str(i)
print(s)

15. Even index identification / 짝수 인덱스일 때만 메시지를 출력합니다.
for i in range(6):
    if i % 2 == 0:
        print(f"Even: {i}")

16. Loop with limit variable / 변수를 range의 인자로 전달합니다.
end = 4
for i in range(end):
    print("Processing...")

17. Range exclusion / 0부터 5까지 중 특정 숫자(3)만 건너뜁니다.
for i in range(6):
    if i == 3: continue
    print(i)

18. Repeat symbol / 특정 기호를 10번 가로로 출력합니다.
for _ in range(10):
    print("#", end="")

19. Multiplication Table (Fixed) / 5단의 결과를 출력합니다.
for i in range(1, 10):
    print(f"5 * {i} = {5 * i}")

20. Final Review / [복습] 변수로 범위를 정해 인덱스 진행 상황을 출력합니다.
limit = 5
for i in range(limit):
    print(f"Index {i} of {limit-1}")

---

Lv47. Iterating Lists / 리스트 순회
Description: 리스트에 담긴 개별 데이터들을 하나씩 꺼내어 처리하는 법을 익힙니다. / Learn how to extract and process individual items from a list using loops.

1. Simple Iteration / 리스트의 요소를 하나씩 꺼내어 변수 f에 담아 출력합니다.
fruits = ["🍎", "🍊", "🍇"]
for f in fruits:
    print(f)

2. Numeric Iteration / 숫자 리스트를 돌며 점수를 하나씩 확인합니다.
scores = [80, 90, 70]
for s in scores:
    print(f"Value: {s}")

3. Case Conversion / 리스트를 돌며 문자열 데이터를 대문자로 가공해 출력합니다.
names = ["alice", "bob"]
for n in names:
    print(n.upper())

4. Filtered Iteration / 리스트 안에서 짝수만 골라 출력합니다.
nums = [1, 2, 3, 4, 5]
for n in nums:
    if n % 2 == 0:
        print(n)

5. Summation Loop / 리스트 요소들의 총합을 반복문으로 계산합니다.
total = 0
for n in [10, 20, 30]:
    total += n
print(total)

6. String Accumulator / 리스트의 문자열들을 하나로 이어붙입니다.
words = ["Py", "thon"]
res = ""
for w in words:
    res += w
print(res)

7. Applied Function / 리스트 안의 숫자를 모두 절대값으로 바꿔 출력합니다.
data = [3, -1, 5, -2]
for d in data:
    print(abs(d))

8. Enumerate Index / enumerate를 쓰면 인덱스 번호와 실제 값을 동시에 가져옵니다.
colors = ["red", "blue"]
for i, c in enumerate(colors):
    print(f"#{i}: {c}")

9. Mapping Logic / 전 품목에 세금을 적용한 가격을 한 번에 보여줍니다.
prices = [100, 200]
for p in prices:
    print(f"With Tax: {p * 1.1}")

10. Tag Cleaner / 태그에서 해시 기호를 제거한 알맹이만 출력합니다.
tags = ["#dev", "#code"]
for t in tags:
    print(t.strip("#"))

11. Length based iteration / 요소의 길이(글자 수)를 출력합니다.
items = ["Apple", "BBQ", "C"]
for i in items:
    print(len(i))

12. Check and Break / 특정 값을 찾으면 반복을 즉시 멈춥니다 (맛보기).
nums = [1, 5, 9, 2]
for n in nums:
    if n > 8:
        print("Found large number")
        break

13. List comparison / 다른 리스트와 비교하며 순회합니다.
l1 = [1, 2, 3]
l2 = [1, 0, 3]
for i in range(len(l1)):
    if l1[i] == l2[i]:
        print(f"Match at {i}")

14. Reversing while looping / 리스트를 거꾸로 돌며 출력합니다.
n = [1, 2, 3]
for i in n[::-1]:
    print(i)

15. Boolean list logic / 불리언 리스트를 돌며 모두 참인지 봅니다.
results = [True, True, False]
for r in results:
    if not r:
        print("Failed found")

16. Character list join / 문자 리스트를 돌며 하나씩 출력합니다 (end 사용).
chars = ['P', 'y', 't', 'h', 'o', 'n']
for c in chars:
    print(c, end="-")

17. Nested list flattening / 중첩된 리스트 내부를 순회합니다. (Lv 49 맛보기)
m = [[1, 2], [3, 4]]
for row in m:
    for val in row:
        print(val)

18. Conditional append / 50 이상인 것만 다른 리스트에 담아 봅니다.
raw = [10, 60, 20, 80]
high = []
for r in raw:
    if r >= 50:
        high.append(r)
print(high)

19. In-place modification / [주의] 순회 중인 리스트를 직접 수정하는 위험한 예제입니다.
nums = [1, 2, 3]
for i in range(len(nums)):
    nums[i] *= 10
print(nums)

20. Final Review / [복습] 예외(test 유저)를 제외한 나머지 사용자만 활성화 메시지를 띄웁니다.
user_list = ["admin", "guest", "test"]
for user in user_list:
    if user != "test":
        print(f"Active: {user}")

---

Lv48. Iterating Dicts / 딕셔너리 순회
Description: 딕셔너리의 키와 값을 반복하여 조회하고 처리하는 법을 익힙니다. / Learn how to iterate through dictionary keys, values, and items.

1. Key Iteration / 기본적으로 for 문을 돌리면 키(Key)값들이 순차적으로 나옵니다.
data = {"A": 1, "B": 2}
for k in data:
    print(k)

2. Value Iteration / .values()를 사용하여 값(Value)들만 반복합니다.
data = {"A": 1, "B": 2}
for v in data.values():
    print(v)

3. Key-Value Pairs / .items()를 사용하면 키와 값을 동시에 꺼내어 쓸 수 있습니다.
data = {"A": 1, "B": 2}
for k, v in data.items():
    print(k, ":", v)

4. Contextual Iteration / 재고가 있는 품목들을 하나씩 호명합니다.
inv = {"Apple": 5, "Milk": 3}
for item in inv:
    print(f"{item} is in stock.")

5. Value Filter / 점수들 중 기준 이상인 경우 격려 문구를 띄웁니다.
scores = {"Math": 90, "Eng": 85}
for s in scores.values():
    if s >= 90:
        print("Excellent!")

6. Record Display / 유저와 해당 상태를 매칭하여 깔끔하게 문장으로 출력합니다.
db = {"u1": "OK", "u2": "FAIL"}
for u, s in db.items():
    print(f"User {u} state is {s}")

7. Aggregate Values / 딕셔너리에 담긴 가격들의 총합을 구합니다.
cart = {"P1": 1200, "P2": 800}
total = 0
for p in cart.values():
    total += p
print(total)

8. Key Access Loop / 키를 이용해 변수 인덱싱 방식으로 값을 조회하며 반복합니다.
colors = {"red": "#F00", "blue": "#00F"}
for c in colors:
    print(f"Color {c} hex: {colors[c]}")

9. Transform Dict / 기존 데이터를 가공하여 새로운 딕셔너리를 만드는 반복문입니다.
data = {"x": 10, "y": 20}
res = {}
for k, v in data.items():
    res[k] = v * 2
print(res)

10. Field formatting / 저장된 속성(필드)들의 이름을 대문자로 확인합니다.
p = {"name": "Bob", "role": "User"}
for k in p:
    print(f"Field: {k.upper()}")

11. Checking existence while looping / 특정 키 가 있을 때만 로직을 수행합니다.
d = {"a": 1, "status": "ok"}
for k in d:
    if k == "status":
        print("System OK")

12. Iterating in reverse / [파이썬 3.7+] 딕셔너리도 삽입 순서를 유지하므로 뒤집어 순회 가능합니다.
d = {"1": "A", "2": "B"}
for k in reversed(list(d.keys())):
    print(k)

13. Concatenating values / 문자열 값들을 모두 합칩니다.
d = {"h": "Hello", "w": "World"}
msg = ""
for v in d.values():
    msg += v + " "
print(msg.strip())

14. Values max check / 값들 중 최댓값을 찾습니다.
prices = {"A": 100, "B": 300, "C": 200}
top = 0
for v in prices.values():
    if v > top: top = v
print(top)

15. Dictionary to list of tuples / items() 결과를 리스트로 직렬화합니다.
d = {"id": 1}
lst = []
for item in d.items():
    lst.append(item)
print(lst)

16. Safe deletion awareness / [주의] 순회 중 딕셔너리 키를 삭제하면 에러가 납니다.
d = {"a": 1, "b": 2}
# for k in d: del d[k] # Error!
print("Don't delete keys while iterating over dict")

17. Multi-value dict iteration / 값이 리스트인 경우 내부 리스트를 순회합니다.
d = {"nums": [1, 2, 3]}
for v in d["nums"]:
    print(v)

18. Key character count / 키 이름의 평균 길이를 잽니다.
d = {"apple": 1, "kiwi": 2}
total = 0
for k in d:
    total += len(k)
print(total / len(d))

19. Formatting key-value pairs / 모든 정보를 ":"로 연결한 리스트를 만듭니다.
d = {"id": "neo", "age": 20}
res = []
for k, v in d.items():
    res.append(f"{k}:{v}")
print(res)

20. Final Review / [복습] 과목명과 점수를 받아 합격 여부를 판별해 출력합니다.
user = {"Math": 95, "Eng": 80}
for sub, score in user.items():
    status = "Pass" if score >= 90 else "Fail"
    print(f"{sub}: {status}")

---

Lv49. Nested Loops / 중첩 반복문 기초
Description: 반복문 안에 또 다른 반복문이 들어있는 구조를 익힙니다. (구구단, 격자무늬 등) / Learn how loops inside loops work for grids and nested logic.

1. Double Range / 바깥쪽 반복 한 번에 안쪽 반복이 전체 실행되는 것을 확인합니다.
for i in range(2):
    for j in range(2):
        print(f"i:{i}, j:{j}")

2. List Combination / 숫자와 문자를 조합하여 가능한 쌍을 모두 출력합니다.
for i in [1, 2]:
    for char in ["A", "B"]:
        print(i, char)

3. Mini Multiplication / 2단까지만 출력하는 아주 작은 구구단 예제입니다.
for i in range(1, 3):
    for j in range(1, 3):
        print(f"{i} * {j} = {i*j}")

4. Matrix Traversal / 2차원 리스트(표)를 순회하며 내용을 정렬해 출력합니다.
matrix = [[1, 2], [3, 4]]
for row in matrix:
    for val in row:
        print(val, end=" ")
    print()

5. Star Pyramid / 바깥쪽 인덱스 i를 안쪽 반복의 범위로 활용해 별을 늘려갑니다.
for i in range(3):
    for j in range(i + 1):
        print("*", end="")
    print()

6. Group Hierarchical / 그룹별 멤버 리스트를 계층적으로 출력합니다.
groups = [["A", "B"], ["C", "D"]]
for g in groups:
    print("Group Start")
    for m in g:
        print("-", m)

7. Line Builder / 안쪽 반복에서 문자열을 완성한 뒤 바깥쪽에서 출력해 봅니다.
for i in range(2):
    line = ""
    for j in range(3):
        line += "#"
    print(line)

8. Jagged List Loop / 내부 리스트의 크기가 달라도 문제없이 모두 순회합니다.
data = [[10], [20, 30]]
for sub in data:
    for v in sub:
        print(v)

9. Coordinate Match / 중첩 반복 도중 조건이 맞을 때만 특별한 액션을 수행합니다.
for x in range(2):
    for y in range(2):
        if x == y:
            print(f"Match: {x}")

10. ID Generator / "A1 A2 B1 B2" 와 같이 코드 이름을 생성하는 로직입니다.
codes = ["A", "B"]
nums = [1, 2]
for c in codes:
    for n in nums:
        print(c + str(n), end=" ")

11. Character grid / X와 O로 구성된 격자를 만듭니다.
for r in range(2):
    for c in range(3):
        print("X", end="")
    print()

12. Sum of all matrix / 2차원 리스트의 모든 요소를 하나씩 더합니다.
m = [[1, 1], [1, 1]]
s = 0
for row in m:
    for v in row:
        s += v
print(s)

13. List of lists search / 특정 값이 들어있는 서브 리스트를 찾습니다.
m = [["ok"], ["err", "fix"]]
for sub in m:
    for val in sub:
        if val == "err":
            print("Error found in nested")

14. Dynamic star width / 홀수 번째 줄에만 더 많은 기호를 출력합니다.
for i in range(1, 4):
    for j in range(i):
        char = "+" if i % 2 == 0 else "#"
        print(char, end="")
    print()

15. Triple nested (Warning) / 3중 반복문은 성능에 주의해야 합니다 (맛보기).
for i in range(2):
    for j in range(2):
        for k in range(2):
            print(i, j, k)

16. Flattening to unique / 중첩된 곳에서 중복 없이 유일한 값만 리스트에 담습니다.
m = [[1, 2], [2, 3]]
unique = []
for row in m:
    for v in row:
        if v not in unique: unique.append(v)
print(unique)

17. Row numbering / 각 리스트 순회 시 행 번호를 붙입니다.
m = [["A"], ["B"]]
for i, row in enumerate(m):
    print(f"Row {i}:", end=" ")
    for v in row: print(v)

18. Skipping inner / 안쪽 루프 중 특정 조건에서 탈출합니다 (break).
for i in range(2):
    for j in range(5):
        if j == 2: break
        print(i, j)

19. Multiplication boundary / 특정 구역까지만 구구단을 찍습니다.
for i in range(2, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end=" ")
    print()

20. Final Review / [복습] 층과 호수로 구성된 건물 구조를 중첩 반복으로 출력합니다.
for i in range(3):
    print(f"Floor {i}:", end=" ")
    for j in range(2):
        print(f"Room {j}", end=" ")
    print()

---

Lv50. [Challenge] Aggregator / [챌린지] 데이터 집계기
Description: [챌린지] 반복문과 조건을 결합하여 복잡한 데이터를 수집하고 결과를 요약합니다. / Collecting and summarizing data using loops and conditionals.

1. Even Counter / 리스트를 돌며 짝수가 몇 개인지 카운트합니다.
nums = [1, 2, 3, 4, 5, 6]
even_count = 0
for n in nums:
    if n % 2 == 0:
        even_count += 1
print(f"Evens: {even_count}")

2. Premium Filter / 500원 이상의 비싼 물건들의 합계만 따로 구합니다.
prices = [100, 500, 200, 800]
total = 0
for p in prices:
    if p >= 500:
        total += p
print(f"Premium Total: {total}")

3. Name Start Index / 이름이 'a'로 시작하는 사람의 수를 집계합니다.
users = ["alice", "bob", "alex", "john"]
a_cnt = 0
for u in users:
    if u.startswith("a"):
        a_cnt += 1
print(f"A-Names: {a_cnt}")

4. High/Low List Maker / 원본 데이터를 조건에 따라 "High/Low" 문구로 변환하여 새 리스트에 담습니다.
data = [10, 55, 30, 80]
res = []
for d in data:
    if d > 40: res.append("High")
    else: res.append("Low")
print(res)

5. Out of Stock Alert / 재고가 0인 품목만 골라내어 보충 알림을 띄웁니다.
inv = {"Apple": 10, "Milk": 0, "Eggs": 5}
for item, qty in inv.items():
    if qty == 0:
        print(f"REFILL: {item}")

6. Find Max Manually / max() 함수 없이 반복문으로 가장 큰 수를 찾는 알고리즘 연습입니다.
nums = [1, 5, 2, 8, 3]
max_v = nums[0]
for n in nums:
    if n > max_v: max_v = n
print(f"Search Max: {max_v}")

7. Total Letter Count / 리스트 안의 모든 단어의 글자 수를 합산합니다.
words = ["python", "is", "awesome"]
total = 0
for w in words:
    total += len(w)
print(f"Total Chars: {total}")

8. Find Error Indices / 에러가 발생한 지점의 번호(인덱스)들만 모아서 출력합니다.
logs = ["INFO", "ERROR", "INFO"]
err_list = []
for i, msg in enumerate(logs):
    if msg == "ERROR": err_list.append(i)
print(f"Error Indexes: {err_list}")

9. Deep Flatten Sum / 중첩 리스트의 모든 숫자를 합산하는 최적화 로직입니다.
matrix = [[1, 2, 3], [4, 5, 6]]
total = 0
for row in matrix:
    total += sum(row)
print(f"All Sum: {total}")

10. Frequency Map / 이름의 출현 빈도를 딕셔너리로 깔끔하게 집계하여 출력합니다.
names = ["Alice", "Bob", "Alice"]
d = {}
for n in names:
    d[n] = d.get(n, 0) + 1
print(f"Count Report: {d}")

11. Minimum search / 반복문으로 최솟값을 찾습니다.
n = [10, 5, 30, 2]
min_v = n[0]
for x in n:
    if x < min_v: min_v = x
print(min_v)

12. Average with Condition / 0점을 제외한 점수만 평균을 냅니다.
s = [80, 0, 90, 0, 100]
valid = []
for x in s:
    if x > 0: valid.append(x)
print(sum(valid)/len(valid))

13. List matching count / 두 리스트 중 같은 위치의 같은 값이 몇 개인지 셉니다.
a = [1, 2, 3]
b = [1, 0, 3]
match = 0
for i in range(len(a)):
    if a[i] == b[i]: match += 1
print(match)

14. Unique Collector / 중복이 있는 리스트에서 유일한 값만 뽑습니다 (Set 없이 루프만 사용).
raw = [1, 2, 1, 3, 2]
res = []
for x in raw:
    if x not in res: res.append(x)
print(res)

15. Category summary / 점수대를 10단위로 묶어 몇 개씩 있는지 봅니다.
scores = [85, 82, 91]
report = {}
for s in scores:
    key = (s // 10) * 10
    report[key] = report.get(key, 0) + 1
print(report)

16. Batch string replace / 여러 단어 중 금지어를 별표로 바꿉니다.
sent = ["I", "hate", "python"]
clean = []
for w in sent:
    if w == "hate": clean.append("****")
    else: clean.append(w)
print(" ".join(clean))

17. Dictionary key existence / 여러 키가 딕셔너리에 모두 있는 지 확인합니다.
d = {"id": 1, "pw": 1}
keys = ["id", "pw", "role"]
for k in keys:
    if k not in d: print(f"Missing: {k}")

18. Accumulate until condition / 합계가 100이 넘는 순간 멈춥니다.
nums = [40, 50, 20, 30]
s = 0
for x in nums:
    s += x
    if s >= 100: break
print(f"Stopped at {s}")

19. Multiple lists zip iteration / 인덱스를 이용해 세 리스트를 한꺼번에 읽습니다.
names = ["A", "B"]
ages = [20, 25]
cities = ["NY", "SF"]
for i in range(len(names)):
    print(f"{names[i]} ({ages[i]}) in {cities[i]}")

20. Final Review / [종합] 유저 명단을 순회하며 이름의 출현 빈도를 집계하여 보고서를 만듭니다.
names = ["Alice", "Bob", "Alice"]
d = {}
for n in names:
    d[n] = d.get(n, 0) + 1
print(f"Report: {d}")
