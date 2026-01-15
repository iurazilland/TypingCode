# Phase 3: 제어문과 프로그램 흐름 (Lv 41 - 45) 상세 세트

---

Lv41. If Statement / If 조건문 기초
Description: 조건의 참/거짓에 따라 코드를 실행하거나 건너뛰는 법을 익힙니다. / Learn how to execute or skip code based on whether a condition is True or False.

1. Basic If / score가 80 이상이면 Success를 출력합니다.
score = 90
if score >= 80:
    print("Success")

2. Numeric Comparison / 나이가 19세 미만일 때 Underage를 출력합니다.
age = 15
if age < 19:
    print("Underage")

3. Boolean Flag / 불리언 변수 자체를 조건으로 사용합니다.
is_rainy = True
if is_rainy:
    print("Take an umbrella")

4. String Equality / 문자열 일치 여부를 판별하는 조건문입니다.
user = "admin"
if user == "admin":
    print("Welcome, Root")

5. List Length Check / 리스트의 길이를 조건으로 활용합니다.
items = ["apple"]
if len(items) > 0:
    print("Cart is not empty")

6. Even Number Logic / 나머지 연산(%)으로 짝수 여부를 판단합니다.
val = 10
if val % 2 == 0:
    print("Even Number")

7. Membership If / 문자열 내 특정 단어가 포함되었는지에 따라 실행합니다.
msg = "Hello World"
if "Hello" in msg:
    print("Greeting found")

8. Threshold Alert / 게임처럼 낮은 수치를 경고하는 로직입니다.
hp = 10
if hp <= 20:
    print("Danger: Low HP")

9. Benefit Check / 멤버십 여부에 따른 혜택 적용 출력입니다.
is_member = True
if is_member:
    print("Discount 10%")

10. Large Number / 두 변수를 비교하여 큰 수 정보를 출력합니다.
x, y = 10, 5
if x > y:
    print(f"{x} is larger than {y}")

11. Negative Check / 음수인지 확인합니다.
n = -5
if n < 0:
    print("Negative")

12. Empty String Check / 문자열이 비어있지 않을 때만 실행합니다.
s = "Hi"
if s:
    print("Not empty")

13. Not Equals / 특정 값이 아닐 때 실행합니다.
status = "error"
if status != "success":
    print("Check system")

14. Character Case Check / 대문자인지 확인합니다.
c = "A"
if c.isupper():
    print("Uppercase")

15. Multiple of 5 / 5의 배수인지 확인합니다.
n = 25
if n % 5 == 0:
    print("Multiple of 5")

16. List element check / 리스트의 첫 번째 요소를 검사합니다.
lst = [10, 20]
if lst[0] == 10:
    print("Match")

17. Dictionary key check / 키가 존재하는지 확인합니다.
d = {"id": 1}
if "id" in d:
    print("ID exists")

18. Float threshold / 소수점 수치가 넘었는지 확인합니다.
temp = 37.5
if temp >= 37.2:
    print("Fever")

19. Multiple variables / 여러 변수를 한 조건에서 활용합니다 (간단히).
a, b = 5, 5
if a == b:
    print("Same")

20. Final Review / [복습] 입력된 문자열을 대문자로 정규화한 뒤 조건을 체크합니다.
user_input = "YES"
if user_input.upper() == "YES":
    print("Action confirmed.")

---

Lv42. Multi-conditions (else, elif) / else와 elif
Description: 참이 아닐 때 처리할 내용(else)과 여러 개의 조건을 차례로 검사하는 법(elif)을 익힙니다. / Use else for fallback and elif for checking multiple alternative conditions.

1. If-Else / else는 조건이 거짓(False)일 때 실행됩니다.
n = 5
if n > 10:
    print("Big")
else:
    print("Small")

2. If-Elif-Else / elif를 사용하면 여러 조건을 단계적으로 확인할 수 있습니다.
score = 75
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")

3. AM/PM Divider / 오전/오후를 구분하는 이분법적 로직입니다.
hour = 14
if hour < 12:
    print("AM")
else:
    print("PM")

4. Language Classifier / 프로그래밍 언어별 다른 메시지를 출력합니다.
lang = "Python"
if lang == "Python":
    print("Easy")
elif lang == "C++":
    print("Fast")
else:
    print("Unknown")

5. Signum Logic / 양수, 음수, 영(0)을 구분하는 3단 조건문입니다.
num = 0
if num > 0:
    print("Pos")
elif num < 0:
    print("Neg")
else:
    print("Zero")

6. Grade Discount / 회원 등급별 할인율을 결정하는 예시입니다.
user_grade = "Gold"
if user_grade == "Diamond":
    print("30% Off")
elif user_grade == "Gold":
    print("20% Off")
else:
    print("10% Off")

7. Open/Closed State / 문이 열렸는지에 따른 상태 메시지를 출력합니다.
is_open = False
if is_open:
    print("Welcome")
else:
    print("Closed")

8. Multiple of 3 or 5 / 배수 판별 로직입니다. 3의 배수인지 먼저 확인합니다.
val = 15
if val % 3 == 0:
    print("BY 3")
elif val % 5 == 0:
    print("BY 5")
else:
    print("NONE")

9. Falsy fallback / 값이 비어있는지(Falsy) 여부를 if와 else로 판단합니다.
msg = ""
if msg:
    print("Has text")
else:
    print("Empty")

10. Age Classifier / 나이대별 호칭을 정하는 로직입니다.
age = 20
if age < 13:
    print("Child")
elif age < 20:
    print("Teen")
else:
    print("Adult")

11. Weekend check / 평일과 주말을 구분합니다.
day = "Sat"
if day in ["Sat", "Sun"]:
    print("Weekend")
else:
    print("Weekday")

12. Temperature check / 날씨 상황을 세 단계로 나눕니다.
t = 28
if t >= 30:
    print("Hot")
elif t >= 15:
    print("Mild")
else:
    print("Cold")

13. Result pass/fail / 과락 기준(40점)과 합격 기준(60점)을 동시에 봅니다.
s = 45
if s >= 60:
    print("Pass")
elif s >= 40:
    print("Retry")
else:
    print("Fail")

14. Character type / 숫자형 문자인지 알파벳인지 구분합니다.
c = "7"
if c.isdigit():
    print("Num")
elif c.isalpha():
    print("Alpha")
else:
    print("Other")

15. Path search / 확장자에 따라 처리 방식을 정합니다.
ext = ".py"
if ext == ".py":
    print("Python file")
elif ext == ".js":
    print("JS file")
else:
    print("Static")

16. Boolean comparison / 불리언 조차도 else를 씁니다.
ready = True
if not ready:
    print("Wait")
else:
    print("Start")

17. Dict value mapping / 특정 키의 값에 따라 액션을 정합니다.
d = {"mode": "auto"}
m = d.get("mode")
if m == "auto":
    print("Auto-run")
else:
    print("Manual")

18. Multi-level scale / 수치를 네 단계로 상세히 분류합니다.
v = 85
if v > 90: print("Top")
elif v > 70: print("Mid")
elif v > 50: print("Low")
else: print("Poor")

19. Equality chain / 여러 대안과 하나씩 비교합니다.
cmd = "save"
if cmd == "open": print("O")
elif cmd == "save": print("S")
else: print("Q")

20. Final Review / [복습] HTTP 상태 코드에 따른 다른 설명을 출력합니다.
status = 404
if status == 200:
    print("OK")
elif status == 404:
    print("NOT FOUND")
else:
    print("SERVER ERROR")

---

Lv43. Nested If / 중첩 조건문
Description: 조건문 안에 또 다른 조건문을 넣어 더 세밀한 조건 필터링을 수행합니다. / Use nested if statements for fine-grained conditional logic.

1. Double Verification / 성인인지 먼저 확인하고, 신분증이 있는지 한 번 더 확인합니다.
age = 25
has_id = True
if age >= 19:
    if has_id:
        print("Entry Permitted")

2. Priority Case / 90점 이상인 경우 중에서 100점인 특별 케이스를 분리합니다.
score = 95
if score >= 90:
    if score == 100:
        print("Perfect!")
    else:
        print("Excellent")

3. Account Guard / 계정이 활성 상태일 때만 비밀번호를 체크합니다.
is_active = True
pw = "123"
if is_active:
    if pw == "123":
        print("Login Success")
    else:
        print("PW Error")

4. Even/Odd in Range / 양수 중에서도 짝수와 홀수를 구분하여 판별합니다.
num = 15
if num > 0:
    if num % 2 == 0:
        print("Pos Even")
    else:
        print("Pos Odd")

5. Category & Title / 성별을 먼저 확인한 후 연령대에 따라 호칭을 달리합니다.
gender = "M"
age = 20
if gender == "M":
    if age >= 20:
        print("Man")
    else:
        print("Boy")

6. Gear Check / 날씨와 도구 소지 여부를 중첩해서 판단합니다.
weather = "Rain"
has_umbrella = False
if weather == "Rain":
    if has_umbrella:
        print("Safe")
    else:
        print("Get Wet")

7. Nested Validation / 문자인지 먼저 확인하고 대문자인지를 검사합니다.
char = "A"
if char.isalpha():
    if char.isupper():
        print("Upper Alpha")

8. Range Sub-divide / 특정 수치 범위(50 초과 200 미만)를 중첩으로 표현한 예입니다.
val = 100
if val < 200:
    if val > 50:
        print("Mid Range")

9. Member Point check / 회원일 때만 포인트를 사용할 수 있도록 제어합니다.
is_member = True
point = 500
if is_member:
    if point >= 100:
        print("Point Used")

10. Complex Input check / 대답이 존재하고 첫 글자가 Y 형태인지 세밀하게 봅니다.
ans = "Yes"
if ans:
    if "Y" in ans.upper():
        print("Affirmative")

11. Inner list length / 리스트가 들어있을 때 그 안의 길이를 봅니다.
data = [[1, 2]]
if len(data) > 0:
    if len(data[0]) >= 2:
        print("Sublist OK")

12. Nesting else / 안쪽 조건문에도 else를 사용하여 촘촘하게 짭니다.
n = 10
if n > 0:
    if n > 100: print("huge")
    else: print("normal")

13. Dictionary double access / 키가 있고, 그 값이 특정 조건인지 봅니다.
u = {"id": "admin"}
if "id" in u:
    if u["id"] == "admin":
        print("Root")

14. String Start/End / 시작과 끝을 각각 중첩 단계로 확인합니다.
s = "Python!"
if s.startswith("P"):
    if s.endswith("!"):
        print("Match")

15. Zero Guard / 나눗셈 전 분모가 0이 아닌지 체크합니다.
a, b = 10, 2
if b != 0:
    if a // b > 3:
        print("High Ratio")

16. Nested Membership / 셋에 단어가 있고, 그 길이가 3 이상인지 봅니다.
s = {"cat", "dog"}
w = "cat"
if w in s:
    if len(w) >= 3:
        print(w.upper())

17. Nested Boolean / 참인 경우 중에서도 특정 서브 플래그가 켜졌는지 봅니다.
engine = True
oil = True
if engine:
    if oil:
        print("Drive")

18. Type and value check / 타입이 같고 값이 일치하는지 봅니다.
v = 10
if type(v) == int:
    if v > 0:
        print("Positive Int")

19. Multiple layers / 3단계까지 들여써 봅니다.
a, b, c = 1, 1, 1
if a == 1:
    if b == 1:
        if c == 1:
            print("All One")

20. Final Review / [복습] 딕셔너리에 키가 존재하는지 확인 후 값을 검사합니다.
p = {"v": 10, "s": "ok"}
if "v" in p:
    if p["v"] > 0:
        print(f"Valid value: {p['v']}")

---

Lv44. Logic with If / 조건문과 논리 연산자
Description: 중첩 조건문을 and, or 등을 사용하여 한 줄로 간결하게 표현하는 법을 익힙니다. / Simplify nested logic using logical operators like and and or.

1. AND Operator / 두 조건을 모두 만족할 때만(and) 실행하는 간결한 표현입니다.
age = 25
has_id = True
if age >= 19 and has_id:
    print("Entry Permitted")

2. OR Operator / 두 조건 중 하나만 참이어도(or) 실행합니다.
is_weekend = True
is_holiday = False
if is_weekend or is_holiday:
    print("Day Off")

3. Range Outlier / 정상 범위를 벗어난 비정상 데이터를 필터링할 때 or를 씁니다.
score = 120
if score < 0 or score > 100:
    print("Invalid Score")

4. Logged Admin / 로그인 상태와 관리자 여부를 동시에 체크합니다.
user = "admin"
is_logged_in = True
if is_logged_in and user == "admin":
    print("Admin Area")

5. List & Value / 리스트 길이 확인과 특정 요소 검사를 한 줄로 처리합니다.
items = ["A", "B"]
if len(items) >= 2 and items[0] == "A":
    print("Correct Start")

6. Common Multiple / 두 숫자의 공배수인지 확인하는 로직입니다.
n = 15
if n % 3 == 0 and n % 5 == 0:
    print("Multiple of 15")

7. Multi-char Match / 두 개 이상의 철자가 포함되어 있는지 한꺼번에 확인합니다.
word = "Python"
if "P" in word and "y" in word:
    print("Matches pattern")

8. NOT Operator / not을 써서 성인이 아닌 경우를 반대로 체크합니다.
age = 10
if not (age >= 19):
    print("Not an Adult")

9. Chained Comparisons / 파이썬 특유의 a <= x <= b 문법으로 범위를 확인합니다.
val = 50
if 0 <= val <= 100:
    print("Safe Area")

10. Either Access / 문이 열려있거나 열쇠가 있으면 접근 가능하다는 뜻입니다.
is_open = True
has_key = False
if is_open or has_key:
    print("Can Access")

11. Multiple and / 세 개를 동시에 묶습니다.
a, b, c = 1, 1, 1
if a == 1 and b == 1 and c == 1:
    print("All match")

12. Mixed Logic / and와 or를 섞어 씁니다 (괄호 권장).
u, p = "A", "1"
if (u == "A") and (p == "1" or p == "2"):
    print("Login")

13. Not Empty and Found / 비어있지 않고 특정 단어가 들었는지 봅니다.
s = "Alert"
if s and "A" in s:
    print("Detected")

14. Exclusion with and not / 하나는 참이고 다른 하나는 거짓이어야 하는 경우입니다.
is_run = True
is_error = False
if is_run and not is_error:
    print("Healthy")

15. Either case / 대문자 혹은 소문자 하나라도 맞으면 통과입니다.
c = "y"
if c == "y" or c == "Y":
    print("Confirmed")

16. List element check with type / 리스트 요소가 있고 타입이 정수인지 봅니다.
l = [10]
if l and type(l[0]) == int:
    print("Int list")

17. Negative Logic (neither) / 둘 다 아닌 경우입니다.
a, b = 0, 0
if not a and not b:
    print("Both Zero")

18. Not in list check / 여러 금지어 중 하나라도 포함 안 되어야 합니다 (맛보기).
w = "good"
if w not in ["bad", "hate"]:
    print("Pass")

19. Multiple Ors / 여러 대안 중 하나라도 맞는지 봅니다.
color = "red"
if color == "red" or color == "blue" or color == "green":
    print("Primary")

20. Final Review / [복습] 딕셔너리의 여러 상태값을 and로 묶어 로직을 완성합니다.
user = {"rank": "Vip", "active": True}
if user["rank"] == "Vip" and user["active"]:
    print("Special Benefit Applied")

---

Lv45. [Challenge] Vending Machine / [챌린지] 자판기 관리 로직
Description: [챌린지] 조건문을 복합적으로 사용하여 거스름돈이나 재고 상태를 판단합니다. / Complex conditional logic for inventory and transaction management.

1. Funds Check / 돈이 충분하면 물건을 주고, 아니면 부족한 금액을 알려줍니다.
money, price = 1500, 1000
if money >= price:
    print("Item Dispensed")
else:
    print(f"Need {price - money} more")

2. Stock Guard / 재고가 있는지 확인하여 판매 가능 여부를 출력합니다.
stock, item = 5, "Coke"
if stock > 0:
    print(f"{item} is available")
else:
    print("Sold Out")

3. Age Filter / 성인 전용 물품인 경우 구매자의 나이를 필터링합니다.
age, item_type = 15, "Alcohol"
if item_type == "Alcohol" and age < 19:
    print("Restricted")
else:
    print("Proceed")

4. Change Calculator / 거스름돈이 발생했을 때만 그 액수를 출력합니다.
money, price = 2000, 1200
change = money - price
if change > 0:
    print(f"Change: {change} Won")

5. Coin Acceptor / 리스트를 활용해 수락 가능한 동전 권종인지 확인합니다.
input_coin, valid_coins = 500, [100, 500]
if input_coin in valid_coins:
    print("Accepted")
else:
    print("Invalid")

6. Temp Monitor / 자판기 내부 온도를 체크하는 3단계 조건문입니다.
temp = 85.5
if temp >= 90:
    print("Overheat")
elif temp >= 80:
    print("Hot")
else:
    print("Normal")

7. Fund Level / 투입된 동전 개수에 따라 안내 멘트를 달리합니다.
coins = 5
if coins == 0:
    print("Insert Coins")
elif coins < 3:
    print("Low funds")
else:
    print("Ready")

8. User Profile check / 유저 딕셔너리에서 나이 정보를 안전하게 검증합니다.
user = {"name": "Bot", "age": 20}
if "age" in user:
    if user["age"] >= 19:
        print("Adult verified")

9. Selection trigger / 버튼 값이 입력되었을 때만 동작을 수행합니다.
btn = "B2"
if btn:
    print(f"Selecting {btn}...")

10. Member Discount / 회원 할인 혜택을 조건부로 계산하여 출력합니다.
is_member, price = True, 1000
if is_member:
    final = price * 0.9
    print(f"Member Price: {final:.0f}")

11. Exact coin check / 거스름돈이 부족한 상황을 시뮬레이션합니다.
change_req, machine_balance = 800, 500
if change_req > machine_balance:
    print("Exact coins only")

12. Power status / 기기 전원이 켜져 있고 에러가 없는지 봅니다.
power, err = True, False
if power and not err:
    print("Operational")

13. Multi-item selection / 여러 물건 중 하나를 골랐을 때 가격을 매칭합니다.
sel = "Water"
if sel == "Water": p = 500
elif sel == "Coke": p = 1000
else: p = 0
print(f"Price: {p}")

14. Timer check / 결제 대기 시간이 초과되었는지 봅니다.
wait = 35
if wait > 30:
    print("Timeout")

15. Currency conversion hint / 엔화 투입 시 환율을 적용할지 봅니다.
coin_type = "JPY"
if coin_type != "KRW":
    print("Auto-converting...")

16. Maintenance mode / 점검 버튼이 눌렸는지 확인합니다.
m_btn = True
if m_btn:
    print("Maintenance Mode")

17. Error code lookup / 로그에 특정 에러가 포함되면 즉시 정지합니다.
log = "ERR_01: Power Low"
if "ERR" in log:
    print("Emergency Stop")

18. Consecutive fail count / 비밀번호 틀린 횟수가 5회면 잠급니다.
fails = 5
if fails >= 5:
    print("Locked")

19. Successful exit / 모든 조건 통과 후 종료 메시지입니다.
if True:
    print("Have a nice day!")

20. Final Review / [종합] 잔액 확인과 재고 확인을 동시에 수행하는 자판기 최종 로직입니다.
m, p, s = 5000, 3200, 0
if m >= p:
    if s > 0:
        print("Purchase OK")
    else:
        print("Item Empty")
else:
    print("Insufficient Funds")
