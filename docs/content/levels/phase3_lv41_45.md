# Phase 3: 제어문과 프로그램 흐름 (Lv 41 - 45) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 41: If 조건문 기초 (The If Statement)
**설명**: 조건의 참/거짓에 따라 코드를 실행하거나 건너뛰는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `score = 90\nif score >= 80:\n    print("Success")` | 조건이 참(`True`)일 때만 들여쓰기 된 줄을 실행합니다. |
| 2 | `age = 15\nif age < 19:\n    print("Underage")` | 특정 수치보다 작을 때 실행되는 조건문입니다. |
| 3 | `is_rainy = True\nif is_rainy:\n    print("Take an umbrella")` | 불리언 변수 자체를 조건으로 사용합니다. |
| 4 | `user = "admin"\nif user == "admin":\n    print("Welcome, Root")` | 문자열 일치 여부를 판별하는 조건문입니다. |
| 5 | `items = ["apple"]\nif len(items) > 0:\n    print("Cart is not empty")` | 리스트의 길이를 조건으로 활용합니다. |
| 6 | `val = 10\nif val % 2 == 0:\n    print("Even Number")` | 나머지 연산(`%`)으로 짝수 여부를 판단합니다. |
| 7 | `msg = "Hello World"\nif "Hello" in msg:\n    print("Greeting found")` | 문자열 내 특정 단어가 포함되었는지에 따라 실행합니다. |
| 8 | `hp = 10\nif hp <= 20:\n    print("Danger: Low HP")` | 게임처럼 낮은 수치를 경고하는 로직입니다. |
| 9 | `is_member = True\nif is_member:\n    print("Discount 10%")` | 멤버십 여부에 따른 혜택 적용 출력입니다. |
| 10 | `x, y = 10, 5\nif x > y:\n    print(f"{x} is larger than {y}")` | 두 변수를 비교하여 큰 수 정보를 출력합니다. |
| 20 | `user_input = "YES"\nif user_input.upper() == "YES":\n    print("Action confirmed.")` | [복습] 입력된 문자열을 대문자로 정규화한 뒤 조건을 체크합니다. |
| * | *(세트 11-19 생략, 기본 IF 구조 연습)* | ... |

---

## 🟦 Lv 42: else와 elif (Multi-conditions)
**설명**: 참이 아닐 때 처리할 내용(`else`)과 여러 개의 조건을 차례로 검사하는 법(`elif`)을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `n = 5\nif n > 10:\n    print("Big")\nelse:\n    print("Small")` | `else`는 조건이 거짓(`False`)일 때 실행됩니다. |
| 2 | `score = 75\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")` | `elif`를 사용하면 여러 조건을 단계적으로 확인할 수 있습니다. |
| 3 | `hour = 14\nif hour < 12:\n    print("AM")\nelse:\n    print("PM")` | 오전/오후를 구분하는 이분법적 로직입니다. |
| 4 | `lang = "Python"\nif lang == "Python":\n    print("Easy")\nelif lang == "C++":\n    print("Fast")\nelse:\n    print("Unknown")` | 프로그래밍 언어별 다른 메시지를 출력합니다. |
| 5 | `num = 0\nif num > 0:\n    print("Pos")\nelif num < 0:\n    print("Neg")\nelse:\n    print("Zero")` | 양수, 음수, 영(0)을 구분하는 3단 조건문입니다. |
| 6 | `user_grade = "Gold"\nif user_grade == "Diamond":\n    print("30% Off")\nelif user_grade == "Gold":\n    print("20% Off")\nelse:\n    print("10% Off")` | 회원 등급별 할인율을 결정하는 예시입니다. |
| 7 | `is_open = False\nif is_open:\n    print("Welcome")\nelse:\n    print("Closed")` | 문이 열렸는지에 따른 상태 메시지를 출력합니다. |
| 8 | `val = 15\nif val % 3 == 0:\n    print("BY 3")\nelif val % 5 == 0:\n    print("BY 5")\nelse:\n    print("NONE")` | 배수 판별 로직입니다. 3의 배수인지 먼저 확인합니다. |
| 9 | `msg = ""\nif msg:\n    print("Has text")\nelse:\n    print("Empty")` | 값이 비어있는지(Falsy) 여부를 `if`와 `else`로 판단합니다. |
| 10 | `age = 20\nif age < 13:\n    print("Child")\nelif age < 20:\n    print("Teen")\nelse:\n    print("Adult")` | 나이대별 호칭을 정하는 로직입니다. |
| 20 | `status = 404\nif status == 200:\n    print("OK")\nelif status == 404:\n    print("NOT FOUND")\nelse:\n    print("SERVER ERROR")` | [복습] HTTP 상태 코드에 따른 다른 설명을 출력합니다. |
| * | *(세트 11-19 생략, 다중 조건 처리 연습)* | ... |

---

## 🟦 Lv 43: 중첩 조건문 (Nested If)
**설명**: 조건문 안에 또 다른 조건문을 넣어 더 세밀한 조건 필터링을 수행합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `age = 25\nhas_id = True\nif age >= 19:\n    if has_id:\n        print("Entry Permitted")` | 성인인지 먼저 확인하고, 신분증이 있는지 한 번 더 확인합니다. |
| 2 | `score = 95\nif score >= 90:\n    if score == 100:\n        print("Perfect!")\n    else:\n        print("Excellent")` | 90점 이상인 경우 중에서 100점인 특별 케이스를 분리합니다. |
| 3 | `is_active = True\npw = "123"\nif is_active:\n    if pw == "123":\n        print("Login Success")\n    else:\n        print("PW Error")` | 계정이 활성 상태일 때만 비밀번호를 체크합니다. |
| 4 | `num = 15\nif num > 0:\n    if num % 2 == 0:\n        print("Pos Even")\n    else:\n        print("Pos Odd")` | 양수 중에서도 짝수와 홀수를 구분하여 판별합니다. |
| 5 | `gender = "M"\nage = 20\nif gender == "M":\n    if age >= 20:\n        print("Man")\n    else:\n        print("Boy")` | 성별을 먼저 확인한 후 연령대에 따라 호칭을 달리합니다. |
| 6 | `weather = "Rain"\nhas_umbrella = False\nif weather == "Rain":\n    if has_umbrella:\n        print("Safe")\n    else:\n        print("Get Wet")` | 날씨와 도구 소지 여부를 중첩해서 판단합니다. |
| 7 | `char = "A"\nif char.isalpha():\n    if char.isupper():\n        print("Upper Alpha")` | 문자인지 먼저 확인하고 대문자인지를 검사합니다. |
| 8 | `val = 100\nif val < 200:\n    if val > 50:\n        print("Mid Range")` | 특정 수치 범위(50 초과 200 미만)를 중첩으로 표현한 예입니다. |
| 9 | `is_member = True\npoint = 500\nif is_member:\n    if point >= 100:\n        print("Point Used")` | 회원일 때만 포인트를 사용할 수 있도록 제어합니다. |
| 10 | `ans = "Yes"\nif ans:\n    if "Y" in ans.upper():\n        print("Affirmative")` | 대답이 존재하고 첫 글자가 Y 형태인지 세밀하게 봅니다. |
| 20 | `p = {"v": 10, "s": "ok"}\nif "v" in p:\n    if p["v"] > 0:\n        print(f"Valid value: {p['v']}")` | [복습] 딕셔너리에 키가 존재하는지 확인 후 값을 검사합니다. |
| * | *(세트 11-19 생략, 복합 중첩 구조 연습)* | ... |

---

## 🟦 Lv 44: 조건문과 논리 연산자 (Logic with If)
**설명**: 중첩 조건문을 `and`, `or` 등을 사용하여 한 줄로 간결하게 표현하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `age = 25\nhas_id = True\nif age >= 19 and has_id:\n    print("Entry Permitted")` | 두 조건을 모두 만족할 때만(`and`) 실행하는 간결한 표현입니다. |
| 2 | `is_weekend = True\nis_holiday = False\nif is_weekend or is_holiday:\n    print("Day Off")` | 두 조건 중 하나만 참이어도(`or`) 실행합니다. |
| 3 | `score = 120\nif score < 0 or score > 100:\n    print("Invalid Score")` | 정상 범위를 벗어난 비정상 데이터를 필터링할 때 `or`를 씁니다. |
| 4 | `user = "admin"\nis_logged_in = True\nif is_logged_in and user == "admin":\n    print("Admin Area")` | 로그인 상태와 관리자 여부를 동시에 체크합니다. |
| 5 | `items = ["A", "B"]\nif len(items) >= 2 and items[0] == "A":\n    print("Correct Start")` | 리스트 길이 확인과 특정 요소 검사를 한 줄로 처리합니다. |
| 6 | `n = 15\nif n % 3 == 0 and n % 5 == 0:\n    print("Multiple of 15")` | 두 숫자의 공배수인지 확인하는 로직입니다. |
| 7 | `word = "Python"\nif "P" in word and "y" in word:\n    print("Matches pattern")` | 두 개 이상의 철자가 포함되어 있는지 한꺼번에 확인합니다. |
| 8 | `age = 10\nif not (age >= 19):\n    print("Not an Adult")` | `not`을 써서 성인이 아닌 경우를 반대로 체크합니다. |
| 9 | `val = 50\nif 0 <= val <= 100:\n    print("Safe Area")` | 파이썬 특유의 `a <= x <= b` 문법으로 범위를 확인합니다. |
| 10 | `is_open = True\nhas_key = False\nif is_open or has_key:\n    print("Can Access")` | 문이 열려있거나 열쇠가 있으면 접근 가능하다는 뜻입니다. |
| 20 | `user = {"rank": "Vip", "active": True}\nif user["rank"] == "Vip" and user["active"]:\n    print("Special Benefit Applied")` | [복습] 딕셔너리의 여러 상태값을 `and`로 묶어 로직을 완성합니다. |
| * | *(세트 11-19 생략, 논리 연산 조합 연습)* | ... |

---

## 🟦 Lv 45: [Challenge] 자판기 관리 로직 (Vending Machine)
**설명**: [챌린지] 조건문을 복합적으로 사용하여 거스름돈이나 재고 상태를 판단합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `money = 1500\nprice = 1000\nif money >= price:\n    print("Item Dispensed")\nelse:\n    print(f"Need {price - money} more")` | 돈이 충분하면 물건을 주고, 아니면 부족한 금액을 알려줍니다. |
| 2 | `stock = 5\nitem = "Coke"\nif stock > 0:\n    print(f"{item} is available")\nelse:\n    print("Sold Out")` | 재고가 있는지 확인하여 판매 가능 여부를 출력합니다. |
| 3 | `age = 15\nitem_type = "Alcohol"\nif item_type == "Alcohol" and age < 19:\n    print("Restricted Item")\nelse:\n    print("Proceed to Checkout")` | 성인 전용 물품인 경우 구매자의 나이를 필터링합니다. |
| 4 | `money = 2000\nprice = 1200\nchange = money - price\nif change > 0:\n    print(f"Change: {change} Won")` | 거스름돈이 발생했을 때만 그 액수를 출력합니다. |
| 5 | `input_coin = 500\nvalid_coins = [100, 500]\nif input_coin in valid_coins:\n    print("Coin Accepted")\nelse:\n    print("Invalid Coin")` | 리스트를 활용해 수락 가능한 동전 권종인지 확인합니다. |
| 6 | `temp = 85.5\nif temp >= 90:\n    print("Warning: Overheat")\nelif temp >= 80:\n    print("Status: Hot")\nelse:\n    print("Status: Normal")` | 자판기 내부 온도를 체크하는 3단계 조건문입니다. |
| 7 | `coins = 5\nif coins == 0:\n    print("Insert Coins")\nelif coins < 3:\n    print("Low funds")\nelse:\n    print("Selection ready")` | 투입된 동전 개수에 따라 안내 멘트를 달리합니다. |
| 8 | `user = {"name": "Bot", "age": 20}\nif "age" in user:\n    if user["age"] >= 19:\n        print("Adult verified")` | 유저 딕셔너리에서 나이 정보를 안전하게 검증합니다. |
| 9 | `btn_pressed = "B2"\nif btn_pressed:\n    print(f"Selecting item {btn_pressed}...")` | 버튼 값이 입력되었을 때만 동작을 수행합니다. |
| 10 | `is_member = True\nprice = 1000\nif is_member:\n    final = price * 0.9\n    print(f"Member Price: {final:.0f}")` | 회원 할인 혜택을 조건부로 계산하여 출력합니다. |
| 20 | `m = 5000\np = 3200\ns = 0\nif m >= p:\n    if s > 0:\n        print("Purchase OK")\n    else:\n        print("Item Empty")\nelse:\n    print("Insufficient Funds")` | [종합] 잔액 확인과 재고 확인을 동시에 수행하는 자판기 최종 로직입니다. |
| * | *(세트 11-19 생략, 복합 시나리오 조건 연습)* | ... |
