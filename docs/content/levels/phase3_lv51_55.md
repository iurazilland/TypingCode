# Phase 3: 제어문과 프로그램 흐름 (Lv 51 - 55) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 51: While 반복문 기초
**설명**: 조건이 참(`True`)인 동안 코드를 계속 반복 실행하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `i = 0\nwhile i < 3:\n    print(i)\n    i += 1` | `i`가 3보다 작은 동안 반복하며, 매번 1씩 증가킵니다. |
| 2 | `count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Launch!")` | 5부터 1까지 줄어드는 카운트다운을 구현합니다. |
| 3 | `total = 0\nn = 1\nwhile n <= 10:\n    total += n\n    n += 1\nprint(total)` | 1부터 10까지의 합계를 `while` 문으로 구합니다. |
| 4 | `msg = ""\nwhile msg != "###":\n    msg += "#"\n    print(msg)` | 특정 문자열이 완성될 때까지 덧붙여 나갑니다. |
| 5 | `hp = 100\nwhile hp > 0:\n    print(f"HP: {hp}")\n    hp -= 30\nprint("Game Over")` | 체력이 0 이하가 될 때까지 데미지를 입는 시뮬레이션입니다. |
| 6 | `n = 1\nwhile n < 100:\n    print(n)\n    n *= 2` | 1부터 시작해 2배씩 커지며 100 전까지 반복합니다. |
| 7 | `data = [1, 2, 3]\nwhile data:\n    print(data.pop(0))` | 리스트에 내용이 있는 동안 계속 꺼내어 출력합니다. |
| 8 | `i = 1\nwhile i < 10:\n    if i % 2 == 0:\n        print(i)\n    i += 1` | `while` 문 안에서 조건문을 활용해 짝수만 출력합니다. |
| 9 | `a, b = 0, 10\nwhile a < b:\n    print(f"{a} vs {b}")\n    a += 2\n    b -= 1` | 두 변수가 서로 가까워지는 과정을 반복합니다. |
| 10 | `s = "Python"\nidx = 0\nwhile idx < len(s):\n    print(s[idx])\n    idx += 1` | 인덱스 번호를 사용하여 문자열을 한 글자씩 출력합니다. |
| 20 | `limit = 10\nval = 1\nwhile val < limit:\n    print("-" * val)\n    val += 2` | [복습] 변수만큼 장식선을 늘려가며 범위를 체크하며 반복합니다. |
| * | *(세트 11-19 생략, 기본 while 조건 제어 연습)* | ... |

---

## 🟦 Lv 52: 무한 루프와 break
**설명**: 의도적으로 무한정 반복시키거나, 특정 상황에서 즉시 탈출(`break`)하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `i = 1\nwhile True:\n    print(i)\n    if i == 5:\n        break\n    i += 1` | 무한 루프 도중 `i`가 5가 되면 `break`로 강제 종료합니다. |
| 2 | `while True:\n    ans = "stop"\n    print("Checking...")\n    if ans == "stop":\n        break` | 조건이 맞으면 루프를 멈추는 가장 전형적인 패턴입니다. |
| 3 | `for i in range(10):\n    if i > 3:\n        break\n    print(i)` | `for` 문에서도 `break`를 사용하여 조기에 반복을 종료할 수 있습니다. |
| 4 | `nums = [1, 5, 9, 2, 8]\nfor n in nums:\n    if n % 2 == 0:\n        print(f"First even: {n}")\n        break` | 리스트를 돌다 첫 번째 짝수를 발견하면 즉시 멈춥니다. |
| 5 | `password = "1234"\nwhile True:\n    attempt = "1234"\n    if attempt == password:\n        print("Unlock")\n        break` | 암호가 맞을 때까지 반복 시도하는 로직의 기초입니다. |
| 6 | `c = 0\nwhile True:\n    c += 1\n    if c * 2 > 15:\n        print(c)\n        break` | 연산 결과가 일정 수준을 넘어서는 순간 중단합니다. |
| 7 | `data = "A B C STOP D"\nfor char in data.split():\n    if char == "STOP":\n        break\n    print(char)` | 리스트 순회 중 정지 신호(`STOP`)를 만나면 탈출합니다. |
| 8 | `i = 0\nwhile True:\n    prefix = "*" * i\n    print(prefix)\n    if len(prefix) >= 5:\n        break\n    i += 1` | 문자열 길이를 체크하여 무한 루프를 제어합니다. |
| 9 | `v = 100\nwhile True:\n    v -= 7\n    if v < 50:\n        print(f"Stopped at {v}")\n        break` | 수치를 깎아 내려가다 특정 하한선에서 멈춥니다. |
| 10 | `names = ["Alice", "Target", "Bob"]\nfor n in names:\n    print(f"Checking {n}")\n    if n == "Target":\n        print("Found!")\n        break` | 검색 대상을 찾으면 나머지 검색은 생략하고 종료합니다. |
| 20 | `money = 5000\nwhile True:\n    spent = 1200\n    if money < spent:\n        print("No Money Left")\n        break\n    money -= spent\n    print(f"Spent: {spent}, Balance: {money}")` | [복습] 잔액이 부족해질 때까지 지출을 반복하다 탈출합니다. |
| * | *(세트 11-19 생략, 루프 탈출 전략 연습)* | ... |

---

## 🟦 Lv 53: Continue 문
**설명**: 현재 반복 회차의 남은 코드를 건너뛰고 바로 다음 회차로 넘어가는 법을 익깁니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `for i in range(5):\n    if i == 2:\n        continue\n    print(i)` | `i`가 2일 때는 `print`를 건너뛰고 바로 3으로 넘어갑니다. |
| 2 | `for i in range(1, 11):\n    if i % 2 != 0:\n        continue\n    print(f"Even: {i}")` | 홀수인 경우에는 건너뛰어 결과적으로 짝수만 출력하게 합니다. |
| 3 | `data = [10, -5, 20, -1]\nfor d in data:\n    if d < 0:\n        continue\n    print(d)` | 음수 데이터를 제외하고 양수만 처리할 때 유용합니다. |
| 4 | `words = ["apple", "", "banana"]\nfor w in words:\n    if not w:\n        continue\n    print(w)` | 빈 문자열인 경우 처리를 생략하고 다음 단어로 넘어갑니다. |
| 5 | `i = 0\nwhile i < 5:\n    i += 1\n    if i % 2 == 0:\n        continue\n    print(i)` | `while` 문에서 `continue`를 쓰기 전 증감식 위치에 주의하며 홀수만 출력합니다. |
| 6 | `nums = [1, 2, 3, 101, 4]\nfor n in nums:\n    if n > 100:\n        print("Skip too large")\n        continue\n    print(n)` | 비정상적으로 큰 값은 무시하고 계속 진행합니다. |
| 7 | `scores = {"A": 90, "B": 50, "C": 80}\nfor k, v in scores.items():\n    if v < 60:\n        continue\n    print(f"{k} passed")` | 낙제점은 건너뛰고 합격자 명단만 뽑습니다. |
| 8 | `for char in "Python":\n    if char in "aeiou":\n        continue\n    print(char, end="")` | 모음(aeiou)을 건너뛰어 자음만 출력합니다. |
| 9 | `for i in range(5):\n    if i < 3:\n        continue\n    print(f"Phase {i}")` | 앞 단계는 생략하고 3단계부터 출력을 시작합니다. |
| 10 | `items = ["OK", "IGNORE", "DONE"]\nfor it in items:\n    if it == "IGNORE":\n        continue\n    print(f"Processing {it}")` | 특정 키워드를 무시하고 나머지 작업을 수행합니다. |
| 20 | `user_ids = ["admin", "test", "manager"]\nfor uid in user_ids:\n    if "test" in uid:\n        continue\n    print(f"Valid User: {uid}")` | [복습] 'test'가 포함된 아이디는 제외하고 유효한 유저만 출력합니다. |
| * | *(세트 11-19 생략, 필터링 및 건너뛰기 연습)* | ... |

---

## 🟦 Lv 54: 상태 플래그 활용 (Control Flags)
**설명**: 변수의 상태(True/False)를 신호등처럼 사용하여 반복문을 제어하는 법을 익깁니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `active = True\nc = 0\nwhile active:\n    c += 1\n    print(c)\n    if c >= 3:\n        active = False` | `active` 변수를 `False`로 바꿔 루프를 자연스럽게 멈춥니다. |
| 2 | `found = False\nfor n in [1, 2, 3]:\n    if n == 2:\n        found = True\n        break\nprint(f"Found 2? {found}")` | 검색 성공 여부를 플래그 변수에 저장해 루프 밖에서 사용합니다. |
| 3 | `has_error = False\nlogs = ["OK", "ERR"]\nfor l in logs:\n    if l == "ERR":\n         has_error = True\nprint(f"Status: {'FAIL' if has_error else 'PASS'}")` | 에러 발견 여부를 체크하는 플래그 패턴입니다. |
| 4 | `is_ready = False\nretry = 0\nwhile not is_ready:\n    retry += 1\n    print(f"Retry {retry}")\n    if retry == 3:\n        is_ready = True` | 준비가 될 때까지 반복하다가 신호를 바꾸어 멈춥니다. |
| 5 | `should_stop = False\nfor i in range(10):\n    print(i)\n    if i == 2: should_stop = True\n    if should_stop: break` | 플래그 세팅과 탈출을 결합한 유연한 제어 방식입니다. |
| 6 | `keep_running = True\ncount = 0\nwhile keep_running:\n    count += 1\n    if count > 5: keep_running = False\n    print("Running...")` | 프로그램의 메인 루프에서 흔히 쓰는 제어 방식입니다. |
| 7 | `all_passed = True\nscores = [100, 50, 90]\nfor s in scores:\n    if s < 60:\n        all_passed = False\nprint(all_passed)` | 전체가 조건을 만족하는지(All) 판별할 때 플래그를 씁니다. |
| 8 | `any_gold = False\nplayers = ["Silver", "Gold"]\nfor p in players:\n    if p == "Gold":\n        any_gold = True\nprint(any_gold)` | 하나라도 조건을 만족하는지(Any) 판별할 때 플래그를 씁니다. |
| 9 | `finished = False\nwhile not finished:\n    print("Step")\n    finished = True` | 한 번만 실행되기를 보장하는 구조로 응용할 수 있습니다. |
| 10 | `logged_in = False\nuser = {"id": "a", "pw": "1"}\nif user["id"] == "a":\n    logged_in = True\nprint(f"Login: {logged_in}")` | 단순 조건문에서도 결과 상태를 플래그로 관리합니다. |
| 20 | `is_valid = True\ndata = [10, 20, 30]\nfor d in data:\n    if d > 25: is_valid = False\nprint(f"Valid Check: {is_valid}")` | [복습] 데이터 중 범위를 넘는 것이 하나라도 있으면 유효성 플래그를 꺾습니다. |
| * | *(세트 11-19 생략, 플래그 기반 상태 제어 연습)* | ... |

---

## 🟦 Lv 55: [Challenge] 숫자 맞추기 로직 (Simulated Engine)
**설명**: [챌린지] 무한 루프, 조건문, 변수 업데이트를 총동원하여 업다운 게임 로직을 구현합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `target = 50\nguess = 40\nif guess < target:\n    print("UP")\nelif guess > target:\n    print("DOWN")` | 정답과 비교하여 힌트를 주는 기본 조건문입니다. |
| 2 | `ans = 7\ntry_cnt = 0\nwhile True:\n    try_cnt += 1\n    user = 7 # Simulated\n    if user == ans:\n        print(f"Correct in {try_cnt} tries!")\n        break` | 정답을 맞출 때까지 시도 횟수를 늘리며 반복하는 루프입니다. |
| 3 | `target = 30\nwhile True:\n    guess = 35\n    if guess == target: break\n    hint = "Up" if guess < target else "Down"\n    print(f"Hint: {hint}")\n    break # Single loop test` | 힌트 메시지를 변수에 담아 동적으로 출력하는 방식입니다. |
| 4 | `ans = 10\nfor i in range(1, 4):\n    user = 5 # Simulated\n    if user == ans:\n        print("Win")\n        break\n    else:\n        print(f"Life: {3 - i}")` | 기회가 3번뿐인 제한된 시도 횟수 루프입니다. |
| 5 | `items = [10, 20, 30]\ntarget = 20\nfor i, val in enumerate(items):\n    if val == target:\n        print(f"Found at index {i}")\n        break` | 목록을 검색해 타겟의 위치를 찾아내고 즉시 종료합니다. |
| 6 | `limit = 5\ncount = 0\nwhile count < limit:\n    count += 1\n    print(f"Attempt: {count}")\nprint("Game Over")` | 정해진 횟수만큼 시보를 울리듯 반복합니다. |
| 7 | `hp = 3\nwhile hp > 0:\n    print(f"Try! HP: {hp}")\n    hp -= 1\nprint("No more lives.")` | 생명력(HP)을 하나씩 차감하며 소진 시까지 반복합니다. |
| 8 | `val = 15\nwhile val > 0:\n    val -= 4\n    if val < 0:\n        print("Final stop.")\n        break\n    print(f"Current: {val}")` | 특정 간격으로 줄여나가다 음수가 되기 직전에 멈춥니다. |
| 9 | `is_win = False\nfor i in range(3):\n    if 7 == 7: # Win condition\n        is_win = True\n        break\nprint(f"Result: {is_win}")` | 복합 조건을 플래그에 담아 최종 결과를 판별합니다. |
| 10 | `n = 0\nwhile n < 10:\n    n += 1\n    if n % 2 != 0: continue\n    print(f"Even chance: {n}")` | 홀수는 기회를 날리고 짝수일 때만 동작을 수행합니다. |
| 20 | `target = 77\nattempts = 0\nwhile True:\n    attempts += 1\n    # Manual input logic here\n    if attempts > 5: \n        print("Failed to match.")\n        break\n    if 77 == target: # Success\n        print(f"Matched in {attempts}!")\n        break` | [종합] 최대 시도 제한이 있는 정답 맞추기 최종 시뮬레이션입니다. |
| * | *(세트 11-19 생략, 게임/시뮬레이션 로직 연습)* | ... |
