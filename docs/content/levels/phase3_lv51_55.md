# Phase 3: 제어문과 프로그램 흐름 (Lv 51 - 55) 상세 세트

---

Lv51. While Loops / While 반복문 기초
Description: 조건이 참(True)인 동안 코드를 계속 반복 실행하는 법을 익힙니다. / Learn how to keep executing code as long as a condition remains True.

1. Basic While / i가 3보다 작은 동안 반복하며, 매번 1씩 증가킵니다.
i = 0
while i < 3:
    print(i)
    i += 1

2. Countdown While / 5부터 1까지 줄어드는 카운트다운을 구현합니다.
count = 5
while count > 0:
    print(count)
    count -= 1
print("Launch!")

3. Accumulation While / 1부터 10까지의 합계를 while 문으로 구합니다.
total = 0
n = 1
while n <= 10:
    total += n
    n += 1
print(total)

4. Until String Match / 특정 문자열이 완성될 때까지 덧붙여 나갑니다.
msg = ""
while msg != "###":
    msg += "#"
    print(msg)

5. Health Depletion / 체력이 0 이하가 될 때까지 데미지를 입는 시뮬레이션입니다.
hp = 100
while hp > 0:
    print(f"HP: {hp}")
    hp -= 30
print("Game Over")

6. Exponential Growth / 1부터 시작해 2배씩 커지며 100 전까지 반복합니다.
n = 1
while n < 100:
    print(n)
    n *= 2

7. List Emptying / 리스트에 내용이 있는 동안 계속 꺼내어 출력합니다.
data = [1, 2, 3]
while data:
    print(data.pop(0))

8. While with If / while 문 안에서 조건문을 활용해 짝수만 출력합니다.
i = 1
while i < 10:
    if i % 2 == 0:
        print(i)
    i += 1

9. Meet in Middle / 두 변수가 서로 가까워지는 과정을 반복합니다.
a, b = 0, 10
while a < b:
    print(f"{a} vs {b}")
    a += 2
    b -= 1

10. Index Iteration / 인덱스 번호를 사용하여 문자열을 한 글자씩 출력합니다.
s = "Python"
idx = 0
while idx < len(s):
    print(s[idx])
    idx += 1

11. Infinite safe check / 조건이 확실히 False가 되도록 설계하는 연습입니다.
n = 10
while n >= 0:
    n -= 3
print("Safely stopped")

12. Boolean variable control / 불리언 변수를 사용해 루프를 끕니다.
run = True
cnt = 0
while run:
    cnt += 1
    if cnt == 2: run = False
print("Finish")

13. Multi-condition while / 두 조건이 모두 맞을 때만 실행합니다.
a, b = 0, 0
while a < 3 and b < 5:
    a += 1
    b += 2
print(a, b)

14. Skipping by adding / 보폭을 조절하여 반복 횟수를 줄입니다.
i = 0
while i < 10:
    print(i)
    i += 4

15. Character building / 리스트에서 글자를 하나씩 빼서 문장을 만듭니다.
chars = ["H", "i"]
res = ""
while chars:
    res += chars.pop(0)
print(res)

16. Search until / 리스트에서 5를 찾을 때까지 인덱스를 올립니다.
nums = [1, 3, 5, 7]
idx = 0
while nums[idx] != 5:
    idx += 1
print(f"Index: {idx}")

17. Nested while / (Lv 49와 유사) while 문 내부의 while 문입니다.
i = 0
while i < 2:
    j = 0
    while j < 2:
        print(i, j)
        j += 1
    i += 1

18. Modulo based loop / 홀수만 더하다가 합계가 50을 넘으면 멈춥니다 (논리).
s, n = 0, 1
while s < 50:
    if n % 2 != 0: s += n
    n += 1
print(s)

19. Empty list truthy check / 리스트가 비면 while 조건이 False가 됨을 이용합니다.
l = [10]
while l:
    print("Running")
    l.pop()

20. Final Review / [복습] 변수만큼 장식선을 늘려가며 범위를 체크하며 반복합니다.
limit = 10
val = 1
while val < limit:
    print("-" * val)
    val += 2

---

Lv52. Break Statement / 무한 루프와 break
Description: 의도적으로 무한정 반복시키거나, 특정 상황에서 즉시 탈출(break)하는 법을 익힙니다. / Learn how to use break to exit loops prematurely or handle infinite loops.

1. While True Break / 무한 루프 도중 i가 5가 되면 break로 강제 종료합니다.
i = 1
while True:
    print(i)
    if i == 5:
        break
    i += 1

2. Input Simulator Break / 조건이 맞으면 루프를 멈추는 가장 전형적인 패턴입니다.
while True:
    ans = "stop" # Simulate input
    if ans == "stop":
        break
print("Loop ended")

3. For Loop Break / for 문에서도 break를 사용하여 조기에 반복을 종료할 수 있습니다.
for i in range(10):
    if i > 3:
        break
    print(i)

4. Find First Even / 리스트를 돌다 첫 번째 짝수를 발견하면 즉시 멈춥니다.
nums = [1, 5, 9, 2, 8]
for n in nums:
    if n % 2 == 0:
        print(f"First even: {n}")
        break

5. Passcode Unlock / 암호가 맞을 때까지 반복 시도하는 로직의 기초입니다.
password = "1234"
while True:
    attempt = "1234"
    if attempt == password:
        print("Unlock")
        break

6. Calculation Threshold / 연산 결과가 일정 수준을 넘어서는 순간 중단합니다.
c = 0
while True:
    c += 1
    if c * 2 > 15:
        print(c)
        break

7. Stop Signal / 리스트 순회 중 정지 신호(STOP)를 만나면 탈출합니다.
data = "A B C STOP D"
for char in data.split():
    if char == "STOP":
        break
    print(char)

8. Length Boundary / 문자열 길이를 체크하여 무한 루프를 제어합니다.
i = 0
while True:
    prefix = "*" * i
    print(prefix)
    if len(prefix) >= 5:
        break
    i += 1

9. Depletion Limit / 수치를 깎아 내려가다 특정 하한선에서 멈춥니다.
v = 100
while True:
    v -= 7
    if v < 50:
        print(f"Stopped at {v}")
        break

10. Target Hunter / 검색 대상을 찾으면 나머지 검색은 생략하고 종료합니다.
names = ["Alice", "Target", "Bob"]
for n in names:
    print(f"Checking {n}")
    if n == "Target":
        print("Found!")
        break

11. Nested loop break / 안쪽 루프만 탈출함을 확인합니다.
for i in range(2):
    for j in range(5):
        if j == 2: break
        print(i, j)

12. Break on None / 리스트 요소 중 None을 만나면 멈춥니다.
lst = [10, 20, None, 40]
for x in lst:
    if x is None: break
    print(x)

13. Power of 2 break / 2의 거듭제곱이 1000을 넘으면 정지합니다.
n = 1
while True:
    n *= 2
    if n > 1000: break
print(n)

14. String search break / 특정 글자가 포함된 단어를 찾으면 멈춥니다.
words = ["ai", "python", "web"]
for w in words:
    if "p" in w:
        print(f"P-word: {w}")
        break

15. Sum limit break / 누적 합계가 100 이상이면 중단합니다.
s = 0
for i in range(1, 20):
    s += i
    if s >= 100: break
print(i, s)

16. Flag update and break / 플래그를 끄고 탈출합니다.
run = True
while run:
    print("Action")
    run = False
    break

17. Break from multiple of 7 / 7의 배수를 찾으면 탈출합니다.
for i in range(1, 50):
    if i % 7 == 0:
        print(i)
        break

18. Emptying with break / 리스트가 비어있지 않은데 특정 이유로 탈출합니다.
l = [1, 2, 3]
while l:
    val = l.pop()
    if val == 2: break
print(l)

19. Index match break / 인덱스와 값이 같은 경우를 찾습니다.
n = [5, 1, 9]
for i, v in enumerate(n):
    if i == v:
        print(f"Match at {i}")
        break

20. Final Review / [복습] 잔액이 부족해질 때까지 지출을 반복하다 탈출합니다.
money = 5000
while True:
    spent = 1200
    if money < spent:
        print("No Money Left")
        break
    money -= spent
    print(f"Spent: {spent}, Balance: {money}")

---

Lv53. Continue Statement / Continue 문
Description: 현재 반복 회차의 남은 코드를 건너뛰고 바로 다음 회차로 넘어가는 법을 익힙니다. / Use continue to skip the rest of the current loop iteration and move to the next.

1. Skip Value / i가 2일 때는 print를 건너뛰고 바로 3으로 넘어갑니다.
for i in range(5):
    if i == 2:
        continue
    print(i)

2. Filter Evens / 홀수인 경우에는 건너뛰어 결과적으로 짝수만 출력하게 합니다.
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(f"Even: {i}")

3. Skip Negatives / 음수 데이터를 제외하고 양수만 처리할 때 유용합니다.
data = [10, -5, 20, -1]
for d in data:
    if d < 0:
        continue
    print(d)

4. Skip Nulls/Empty / 빈 문자열인 경우 처리를 생략하고 다음 단어로 넘어갑니다.
words = ["apple", "", "banana"]
for w in words:
    if not w:
        continue
    print(w)

5. While Continue / while 문에서 continue를 쓰기 전 증감식 위치에 주의하며 홀수만 출력합니다.
i = 0
while i < 5:
    i += 1
    if i % 2 == 0:
        continue
    print(i)

6. Outlier Filter / 비정상적으로 큰 값은 무시하고 계속 진행합니다.
nums = [1, 2, 3, 101, 4]
for n in nums:
    if n > 100:
        print("Skip large")
        continue
    print(n)

7. Passing Grade Only / 낙제점은 건너뛰고 합격자 명단만 뽑습니다.
scores = {"A": 90, "B": 50, "C": 80}
for k, v in scores.items():
    if v < 60:
        continue
    print(f"{k} passed")

8. Vowel Stripper / 모음(aeiou)을 건너뛰어 자음만 출력합니다.
for char in "Python":
    if char.lower() in "aeiou":
        continue
    print(char, end="")

9. Start Delay / 앞 단계는 생략하고 3단계부터 출력을 시작합니다.
for i in range(5):
    if i < 3:
        continue
    print(f"Phase {i}")

10. Action Scoper / 특정 키워드를 무시하고 나머지 작업을 수행합니다.
items = ["OK", "IGNORE", "DONE"]
for it in items:
    if it == "IGNORE":
        continue
    print(f"Processing {it}")

11. Multiple continue conditions / 여러 대상을 제외합니다.
for i in range(1, 6):
    if i == 1 or i == 5:
        continue
    print(i)

12. Dict key filter / 특정 키만 제외하고 출력합니다.
d = {"id": "A", "pw": "1", "temp": "X"}
for k in d:
    if k == "pw": continue
    print(k)

13. Length short skip / 3글자 미만인 단어는 무시합니다.
wds = ["hi", "python", "ok", "cool"]
for w in wds:
    if len(w) < 3: continue
    print(w)

14. Skip divisor of 3 / 3의 배수를 뺀 나머지를 구합니다.
for i in range(1, 10):
    if i % 3 == 0: continue
    print(i)

15. Character check / 특수 기호(#)가 포함된 문자열은 건너뜁니다.
lst = ["data", "#ref", "user"]
for x in lst:
    if "#" in x: continue
    print(x)

16. Index parity skip / 홀수 번째 인덱스 요소를 건너뜁니다.
lst = ["A", "B", "C", "D"]
for i, v in enumerate(lst):
    if i % 2 != 0: continue
    print(v)

17. Nested continue / 안쪽 루프에서만 건너뛰기가 적용됨을 봅니다.
for i in range(2):
    for j in range(2):
        if j == 0: continue
        print(i, j)

18. Float skip / 정수만 출력하고 실수는 건너뜁니다.
lst = [1, 2.5, 3]
for x in lst:
    if type(x) == float: continue
    print(x)

19. Successful retry simulation / 실패한 경우만 다시 시도하는 느낌의 건너뛰기입니다.
tasks = ["OK", "ERR", "OK"]
for t in tasks:
    if t == "OK": continue
    print("Fixing error...")

20. Final Review / [복습] 'test'가 포함된 아이디는 제외하고 유효한 유저만 출력합니다.
user_ids = ["admin", "test", "manager"]
for uid in user_ids:
    if "test" in uid:
        continue
    print(f"Valid User: {uid}")

---

Lv54. Control Flags / 상태 플래그 활용
Description: 변수의 상태(True/False)를 신호등처럼 사용하여 반복문을 제어하는 법을 익힙니다. / Use Boolean flags to control loop execution and state.

1. Simple Flag / active 변수를 False로 바꿔 루프를 자연스럽게 멈춥니다.
active = True
c = 0
while active:
    c += 1
    print(c)
    if c >= 3:
        active = False

2. Found Flag / 검색 성공 여부를 플래그 변수에 저장해 루프 밖에서 사용합니다.
found = False
for n in [1, 2, 3]:
    if n == 2:
        found = True
        break
print(f"Found 2? {found}")

3. Error Flag / 에러 발견 여부를 체크하는 플래그 패턴입니다.
has_error = False
logs = ["OK", "ERR"]
for l in logs:
    if l == "ERR":
        has_error = True
print(f"Status: {'FAIL' if has_error else 'PASS'}")

4. Waiting Flag / 준비가 될 때까지 반복하다가 신호를 바꾸어 멈춥니다.
is_ready = False
retry = 0
while not is_ready:
    retry += 1
    print(f"Retry {retry}")
    if retry == 3:
        is_ready = True

5. Stop Request Flag / 플래그 세팅과 탈출을 결합한 유연한 제어 방식입니다.
should_stop = False
for i in range(10):
    print(i)
    if i == 2: should_stop = True
    if should_stop: break

6. Keep Running / 프로그램의 메인 루프에서 흔히 쓰는 제어 방식입니다.
keep_running = True
count = 0
while keep_running:
    count += 1
    if count > 2: keep_running = False
    print("Running...")

7. All Passed Check / 전체가 조건을 만족하는지(All) 판별할 때 플래그를 씁니다.
all_passed = True
scores = [100, 50, 90]
for s in scores:
    if s < 60:
        all_passed = False
print(all_passed)

8. Any Found Check / 하나라도 조건을 만족하는지(Any) 판별할 때 플래그를 씁니다.
any_gold = False
players = ["Silver", "Gold"]
for p in players:
    if p == "Gold":
        any_gold = True
print(any_gold)

9. One-shot Flag / 한 번만 실행되기를 보장하는 구조로 응용할 수 있습니다.
finished = False
while not finished:
    print("Step")
    finished = True

10. Boolean Auth Result / 단순 조건문에서도 결과 상태를 플래그로 관리합니다.
logged_in = False
user = {"id": "a", "pw": "1"}
if user["id"] == "a":
    logged_in = True
print(f"Login: {logged_in}")

11. Toggle flag / True와 False를 반복해서 바꿉니다.
state = True
for _ in range(3):
    state = not state
    print(state)

12. Multi-flag logic / 두 플래그가 모두 참이어야 하는 경우입니다.
f1, f2 = False, True
if not f1 and f2:
    print("Partial Match")

13. List check to flag / 리스트가 특정 요소를 포함하는지 플래그로 기록합니다.
tags = ["ai", "web"]
has_py = False
for t in tags:
    if t == "python": has_py = True
print(has_py)

14. Count until flag / 플래그가 뜰 때까지 숫자를 셉니다.
n = 0
stop = False
while not stop:
    n += 1
    if n == 5: stop = True
print(n)

15. Resetting flag / 루프마다 플래그를 초기화하고 사용합니다.
m = [[1], [0], [1]]
for row in m:
    valid = False
    if row[0] == 1: valid = True
    print(valid)

16. Flag with string name / "ON", "OFF" 문자열을 플래그처럼 씁니다.
power = "OFF"
if power == "OFF": power = "ON"
print(power)

17. Integer as flag (0/1) / 0과 1을 플래그로 사용하는 고전적 방식입니다.
success = 0
if 1: success = 1
print(bool(success))

18. Nested loop multi-break flag / 안쪽 루프에서 바깥쪽까지 다 멈춰야 할 때 씁니다.
stop_all = False
for i in range(5):
    for j in range(5):
        if i + j > 5:
            stop_all = True
            break
    if stop_all: break
print(i, j)

19. Verification complete flag / 모든 단계 통과 확인용입니다.
step1, step2 = True, True
ok = step1 and step2
print(f"Ready? {ok}")

20. Final Review / [복습] 데이터 중 범위를 넘는 것이 하나라도 있으면 유효성 플래그를 꺾습니다.
is_valid = True
data = [10, 20, 30]
for d in data:
    if d > 25: is_valid = False
print(f"Valid Check: {is_valid}")

---

Lv55. [Challenge] Guessing Game Engine / [챌린지] 숫자 맞추기 로직
Description: [챌린지] 무한 루프, 조건문, 변수 업데이트를 총동원하여 업다운 게임 로직을 구현합니다. / Integrating loops, conditionals, and updates for a guessing game simulation.

1. Logic Core / 정답과 비교하여 힌트를 주는 기본 조건문입니다.
target, guess = 50, 40
if guess < target:
    print("UP")
elif guess > target:
    print("DOWN")

2. Loop until Success / 정답을 맞출 때까지 시도 횟수를 늘리며 반복하는 루프입니다.
ans, try_cnt = 7, 0
while True:
    try_cnt += 1
    user = 7 # Simulated
    if user == ans:
        print(f"Correct in {try_cnt} tries!")
        break

3. Inline Hint / 힌트 메시지를 변수에 담아 동적으로 출력하는 방식입니다.
target = 30
while True:
    guess = 35
    if guess == target: break
    hint = "Up" if guess < target else "Down"
    print(f"Hint: {hint}")
    break # Test

4. Limited Lives / 기회가 3번뿐인 제한된 시도 횟수 루프입니다.
ans = 10
for i in range(1, 4):
    user = 5
    if user == ans:
        print("Win")
        break
    else:
        print(f"Life: {3 - i}")

5. Index Searcher / 목록을 검색해 타겟의 위치를 찾아내고 즉시 종료합니다.
items, target = [10, 20, 30], 20
for i, val in enumerate(items):
    if val == target:
        print(f"Found at index {i}")
        break

6. Fixed Limit / 정해진 횟수만큼 시보를 울리듯 반복합니다.
limit, count = 5, 0
while count < limit:
    count += 1
    print(f"Attempt: {count}")

7. Life Drain / 생명력(HP)을 하나씩 차감하며 소진 시까지 반복합니다.
hp = 3
while hp > 0:
    print(f"Try! HP: {hp}")
    hp -= 1
print("No more lives.")

8. Step Countdown / 특정 간격으로 줄여나가다 음수가 되기 직전에 멈춥니다.
val = 15
while val > 0:
    val -= 4
    if val < 0: break
    print(f"Current: {val}")

9. Win-State Flag / 복합 조건을 플래그에 담아 최종 결과를 판별합니다.
is_win = False
for i in range(3):
    if 7 == 7: # Success
        is_win = True
        break
print(f"Result: {is_win}")

10. Parity filter chance / 홀수는 기회를 날리고 짝수일 때만 동작을 수행합니다.
n = 0
while n < 10:
    n += 1
    if n % 2 != 0: continue
    print(f"Even chance: {n}")

11. Distance based hint / 정답과 얼마나 가까운지 출력합니다.
ans, g = 10, 12
diff = abs(ans - g)
if diff < 5: print("Close!")

12. Sequential target match / 리스트의 순서대로 값을 맞춰야 하는 루프입니다.
targets = [1, 2, 3]
while targets:
    t = targets.pop(0)
    print(f"Cleared {t}")

13. Break on out of range / 추측값이 범위를 벗어나면 경고하고 루프를 지킵니다.
while True:
    g = 105
    if not (1 <= g <= 100):
        print("Invalid")
        break

14. Average of guesses / 시도한 값들의 평균을 냅니다.
history = [10, 50, 30]
print(f"Avg Guess: {sum(history)/len(history)}")

15. Warm/Cold logic / 이전 시도보다 가까워졌는지 확인합니다 (맛보기).
prev, curr, ans = 50, 40, 30
if abs(curr - ans) < abs(prev - ans):
    print("Warmer")

16. Automatic solver / 2분 탐색법처럼 중간값을 계속 추측합니다 (맛보기).
lo, hi = 1, 100
mid = (lo + hi) // 2
print(f"Bot guess: {mid}")

17. Score deduction / 시도할 때마다 점수가 깎입니다.
score, tries = 1000, 5
print(f"Final Score: {score - tries * 10}")

18. Check list for duplicates / 이미 추측한 숫자인지 확인합니다.
history = [10, 20]
g = 10
if g in history: print("Already tried")

19. Multiple target hit / 셋 중 하나만 맞춤 성공입니다.
targets = {10, 20, 30}
g = 20
if g in targets: print("Hit!")

20. Final Review / [종합] 최대 시도 제한이 있는 정답 맞추기 최종 시뮬레이션입니다.
target, attempts = 77, 0
while True:
    attempts += 1
    # User input 77
    if attempts > 5:
        print("Failed to match.")
        break
    if 77 == target:
        print(f"Matched in {attempts}!")
        break
    break # Safety
