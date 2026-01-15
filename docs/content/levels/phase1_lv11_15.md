# Phase 1: 변수와 입출력 (Lv 11 - 15) 상세 세트

---

Lv11. Advanced Division (//, %) / 나눗셈의 심화 (//, %)
Description: 몫만 구하거나 나머지만 구하는 연산자를 실제 상황에 응용해 봅니다. / Apply quotient and remainder operators to real-world scenarios.

1. Basic Quotient & Remainder / 기본 몫(//)과 나머지(%) 연산입니다.
print(10 // 3)
print(10 % 3)

2. Time Conversion / 초를 분과 초로 변환하는 기본 로직입니다.
total = 3661
minutes = total // 60
seconds = total % 60
print(minutes, seconds)

3. Box Count / 전체 개수를 상자 크기로 나누어 가득 찬 상자 수를 구합니다.
total = 125
box_size = 10
print("Full boxes:", total // box_size)

4. Leftover Items / 상자에 담고 남은 나머지 아이템 수를 구합니다.
total = 125
box_size = 10
print("Left items:", total % box_size)

5. ID Slicing with Math / 앞의 두 자리 숫자(년도)만 추출해 봅니다.
id = 980715
year = id // 10000
print("Birth Year:", year)

6. Even/Odd Logic / 2로 나눈 나머지가 0인지 확인하여 짝수 판별을 합니다.
n = 42
print("Is Even?", n % 2 == 0)

7. Page Calculation / 마지막 페이지에 표시될 파일 개수를 구합니다.
files = 103
page_limit = 10
print("Last page count:", files % page_limit)

8. Coin Counter / 특정 동전의 개수를 몫으로 구합니다.
money = 5400
print("500 Won count:", money // 500)

9. Grouping ID / 10단위로 그룹을 지어 ID를 부여할 때 씁니다.
step = 15
print("Group ID:", step // 10)

10. Circular Index / 순환하는 인덱스(0, 1, 2, 3, 4)를 만들 수 있습니다.
cycle = 5
print("Index:", 7 % cycle)

11. Battery Percentage / 배터리 잔량을 5칸 단위로 표현하는 몫 계산입니다.
battery = 87
print("Bars:", battery // 20)

12. Day of Week / 7일 주기로 오늘의 요일을 구하는 나머지 연산입니다.
day = 10 # 10th day
print("Weekday ID:", day % 7)

13. Hundreds Place / 숫자의 백의 자리만 추출해 봅니다.
val = 1234
print((val // 100) % 10)

14. Group Unpacking / 나열된 데이터를 일정 개수씩 묶었을 때 몇 그룹인지 구합니다.
total = 57
per_group = 5
print("Groups:", total // per_group)

15. Leftover People / 버스 정원에 태우고 남은 인원을 구합니다.
people = 45
bus_cap = 20
print("Waiting:", people % bus_cap)

16. Pixel to Grid / 픽셀 좌표를 그리드 셀 좌표로 변환합니다.
px = 128
grid = 32
print("Grid Pos:", px // grid)

17. Century Calculation / 연도를 세기로 변환합니다.
year = 2026
print("Century:", (year - 1) // 100 + 1)

18. Angle Normalization / 360도를 넘어가는 각도를 0-359도로 보정합니다.
angle = 450
print("Real Angle:", angle % 360)

19. Color Rounding / 0-255 값을 특정 단계로 뭉뚱그릴 때 사용합니다.
color = 123
step = 50
print("Rounded Color:", (color // step) * step)

20. Final Review / [복습] 초를 시, 분, 초로 정교하게 나누어 출력합니다.
seconds = 10000
h = seconds // 3600
m = (seconds % 3600) // 60
s = seconds % 60
print(f"{h}h {m}m {s}s")

---

Lv12. Math Basics / 거듭제곱과 수학 함수
Description: 제곱(**), 반올림(round), 절대값(abs) 등 숫자 처리 기본 함수를 익힙니다. / Learn basic numeric functions like power, round, and absolute value.

1. Power Operator / 2의 10승(1024)을 계산합니다.
print(2 ** 10)

2. Round with Precision / 소수점 두 번째 자리까지 반올림합니다.
pi = 3.14159
print(round(pi, 2))

3. Absolute Value / 음수를 양수로 바꾸는 절대값 함수입니다.
diff = -15
print(abs(diff))

4. Integer Casting / 소수점을 버리고 정수 부분만 남깁니다.
num = 123.456
print(int(num))

5. Square Area / 정사각형의 넓이 공식 연습입니다.
side = 5
area = side ** 2
print(f"Square: {area}")

6. Circle Area with ** / 원의 넓이 계산 시 거듭제곱을 활용합니다.
radius = 7
area = 3.14 * (radius ** 2)
print(area)

7. Round to Int / 괄호에 숫자만 넣으면 가장 가까운 정수로 반올림합니다.
val = 15.67
print(round(val))

8. Rounding Tie / 파이썬의 반올림은 '가까운 짝수'로 가는 특성이 있으니 주의하세요.
print(round(2.5))
print(round(3.5))

9. Max & Min / 두 수 중 큰 쪽과 작은 쪽을 찾아주는 함수입니다.
a, b = 10, -30
print(max(a, b), min(a, b))

10. Pow Function / ** 연산자 대신 pow() 함수를 쓸 수도 있습니다.
print(pow(3, 4))

11. Negative Power / 음수 지수를 사용하여 소수점 이하 값을 구합니다.
print(2 ** -2)

12. List Max / 여러 값 중 최대값을 구합니다.
print(max(1, 5, 2, 9, 3))

13. List Min / 여러 값 중 최소값을 구합니다.
print(min(10, 20, 5, 40))

14. Rounding Down / 버림 효과를 보려면 int()를 씁니다.
val = 5.99
print(int(val))

15. Sum Function / 여러 숫자의 합을 한 번에 구합니다.
print(sum([1, 2, 3, 4, 5]))

16. Divide & Remainder Divmod / 몫과 나머지를 한 번에 튜플로 반환합니다.
q, r = divmod(10, 3)
print(q, r)

17. Cube Volume / 정육면체의 부피를 구합니다.
edge = 3
print(edge ** 3)

18. Delta calculation / 두 수의 차이를 무조건 양수로 구합니다.
a, b = 5, 12
print(abs(a - b))

19. Precision Rounding / 아주 작은 숫자를 반올림해 봅니다.
val = 0.000789
print(round(val, 4))

20. Final Review / [복습] 두 점 사이의 거리를 계산할 때 절대값을 사용합니다.
x1, x2 = 10, 25
distance = abs(x1 - x2)
print(f"Distance: {distance}")

---

Lv13. Augmented Assignment / 복합 대입 연산자
Description: 변수의 현재 값을 활용하여 짧고 명확하게 값을 업데이트하는 법을 익힙니다. / Learn concise ways to update variable values relative to their current state.

1. Plus Equals / score = score + 5의 단축형인 +=입니다.
score = 10
score += 5
print(score)

2. Minus Equals / 데미지를 입었을 때 값을 차감하는 -=입니다.
hp = 100
hp -= 20
print(hp)

3. Times Equals / 기존 값에 곱하는 *=입니다.
val = 2
val *= 8
print(val)

4. Divide Equals / 기존 값을 나누는 /=입니다. (결과는 실수)
total = 100
total /= 4
print(total)

5. Floor Div Equals / 몫만 남기고 업데이트하는 //=입니다.
num = 10
num //= 3
print(num)

6. Modulo Equals / 나머지만 남기고 업데이트하는 %=입니다.
n = 10
n %= 3
print(n)

7. Power Equals / 거듭제곱으로 업데이트하는 **=입니다.
p = 2
p **= 3
print(p)

8. String concatenation / 문자열 변수에도 +=를 써서 글자를 이어붙일 수 있습니다.
txt = "A"
txt += "B"
print(txt)

9. String Repeat Equals / 문자열에 *=를 쓰면 글자가 반복 저장됩니다.
msg = "Ha"
msg *= 3
print(msg)

10. Basic Counter / 카운터를 올리는 가장 전형적인 표현입니다.
count = 0
count += 1
count += 1
print(count)

11. Inventory Update / 재고 수량을 더해 봅니다.
stock = 50
stock += 12
print(stock)

12. Discount Apply / 할인율을 곱해서 가격을 갱신합니다.
price = 100
price *= 0.9
print(price)

13. Level Up / 경험치를 누적하여 업데이트합니다.
exp = 1500
exp += 300
print(exp)

14. Multi-step math / 연속해서 수치를 업데이트합니다.
val = 10
val += 2
val *= 5
print(val)

15. Path Extension / 파일 경로 문자열을 뒤에 덧붙입니다.
path = "/usr"
path += "/bin"
print(path)

16. Bitwise count (Bonus) / 비트 이동 연산자 단축형도 가능합니다. (맛보기)
x = 1
x <<= 3
print(x)

17. Reducing half / 값을 매번 절반으로 줄여 나갑니다.
n = 100
n /= 2
n /= 2
print(n)

18. Appending symbols / 문자열 끝에 기호를 붙입니다.
tag = "Python"
tag += "!"
print(tag)

19. Subtraction loop / 값을 0이 될 때까지 빼 봅니다.
v = 10
v -= 5
v -= 5
print(v)

20. Final Review / [복습] 이자와 수수료를 반영하여 잔액을 업데이트합니다.
bal = 1000
bal *= 1.1 # Interest
bal -= 50  # Fee
print(f"Final: {bal:.0f}")

---

Lv14. Casting (Type conversion) / 데이터 타입 변환
Description: 문자열을 숫자로, 숫자를 문자열로 상황에 맞게 강제 변환합니다. / Convert between different data types like string to int or vice versa.

1. String to Int / 문자열 "100"을 계산 가능한 정수형으로 바꿉니다.
s = "100"
n = int(s)
print(n + 50)

2. Int to String / 숫자를 텍스트 결합을 위해 문자열형으로 바꿉니다.
n = 42
s = str(n)
print("Age is " + s)

3. String to Float / 소수점이 포함된 문자열을 실수형으로 바꿉니다.
f = float("3.14")
print(f * 2)

4. Float to Int / 실수를 정수로 바꾸면 소수점 이하는 버려집니다.
n = int(9.9)
print(n)

5. Result to String / 계산된 결과를 문자열로 바꿔서 반복 출력해 봅니다.
val = str(1 + 2)
print(val * 3)

6. Type Check / type() 함수로 현재 변수의 자료형을 확인합니다.
print(type(10), type("10"))

7. Strip then Cast / 공백을 먼저 지우고 숫자로 변환하는 습관이 필요합니다.
s = "  50  "
print(int(s.strip()))

8. Truthy Check / 숫자 1은 논리형으로 변환하면 True가 됩니다.
b = bool(1)
print(b)

9. Falsy Check (Zero) / 숫자 0은 논리형으로 변환하면 False가 됩니다.
b = bool(0)
print(b)

10. Falsy Check (Empty) / 빈 문자열은 False, 글자가 하나라도 있으면 True입니다.
b = bool("")
print(b)

11. Numeric String check / 문자열이 숫자로만 되어 있는지 확인합니다.
s = "123"
print(s.isdigit())

12. Scientific notation / 지수 표기법 문자열을 실수로 변환합니다.
s = "1e3"
print(float(s))

13. List to String (Limited) / 리스트 자체를 문자열로 바꿔 봅니다.
lst = [1, 2]
print(str(lst))

14. Hex to Int / 16진수 문자열을 10진수 정수로 변환합니다.
h = "0xff"
print(int(h, 16))

15. Binary to Int / 2진수 문자열을 10진수 정수로 변환합니다.
b = "1010"
print(int(b, 2))

16. Float to String / 소수점을 문자열로 바꿔 출력합니다.
p = 3.14
print("Value: " + str(p))

17. Integer safety / 소수점 문자열은 바로 int()가 안 되니 float -> int 순서를 거칩니다.
s = "3.9"
print(int(float(s)))

18. None to Bool / None은 논리형으로 바꾸면 False입니다.
n = None
print(bool(n))

19. Multiple casts / 여러 단계를 거쳐 타입을 바꿉니다.
v = 10
print(type(str(float(v))))

20. Final Review / [복습] 입력받은 년도를 숫자로 바꿔 미래 년도를 계산합니다.
user_in = "2026"
cur_year = int(user_in)
print(f"In 10 years: {cur_year + 10}")

---

Lv15. [Challenge] Financial Calculator / [챌린지] 금융 계산기
Description: [챌린지] 복합 연산자와 타입 변환을 사용하여 세금이나 환율을 계산합니다. / Financial calculation scenarios using operators and type casting.

1. VAT Calculation / 기본 부가세 계산 로직입니다.
price = 1000
tax = price * 0.1
print(f"Total: {price + tax}")

2. Currency Exchange / USD 문자열을 받아 원화로 환전(콤마 포맷 포함)합니다.
usd = "50"
rate = 1350.5
krw = float(usd) * rate
print(f"Won: {krw:,.0f}")

3. Annual Salary / 월급으로 연봉을 계산해 봅니다.
salary = 5000000
sal_1yr = salary * 12
print(f"Yearly: {sal_1yr:,}")

4. Compounding Interest / 연 복리 이자 5%를 두 번 적용해 봅니다.
val = 1000000
val *= 1.05
val *= 1.05
print(f"After 2 years: {val:,.0f}")

5. Dutch Pay / 사람 수로 나누어 떨어지는 몫만큼 더치페이 금액을 정합니다.
total = 45500
people = 4
print(f"Dutch Pay: {total // people}")

6. Box Requirement / 상자당 담는 개수를 계산하여 필요한 최소 상자 수를 구합니다.
item_cnt = 32
box_limit = 10
print(f"Need Boxes: {(item_cnt // box_limit) + 1}")

7. Dinner with Tip / 팁을 포함한 음식값을 구하고 반올림 처리합니다.
bill = 89.95
tip = bill * 0.15
print(f"With Tip: {round(bill + tip, 2)}")

8. Net Income / 수입(문자열)과 지출(숫자)을 계산합니다.
raw_income = "2500.5"
exp = 1200
net = float(raw_income) - exp
print(f"Net Income: {net}")

9. Discount Store / 할인율을 적용한 최종 가격을 구합니다.
p1 = 15000
p2 = p1 * 0.8 # 20% DC
print(f"Discounted: {p2}")

10. Installment / 총액을 할부 개월 수로 나눕니다.
bill = 1200000
months = 12
print(f"Per Month: {bill // months:,}")

11. Profit percentage / 이익금을 백분율로 구합니다.
buy = 1000
sell = 1200
profit = sell - buy
print(f"Profit: {profit/buy:.1%}")

12. Fuel Efficiency / 주행 거리와 연료 소모량으로 연비를 구합니다.
km = 450
fuel = 30
print(f"Efficiency: {km/fuel} km/l")

13. Unit conversion (KB to MB) / 킬로바이트를 메가바이트로 변환합니다.
kb = 2048
mb = kb // 1024
print(f"{mb} MB")

14. Stock market delta / 주가 변동폭을 절대값으로 출력합니다.
yesterday = 52000
today = 51500
print(f"Change: {abs(today - yesterday)}")

15. Average score / 세 과목의 평균 점수를 구합니다.
k, e, m = 90, 85, 95
avg = (k + e + m) / 3
print(f"Avg: {avg:.2f}")

16. Savings Goal / 목표 금액까지 남은 저축액을 계산합니다.
goal = 1000000
saved = 450000
print(f"Remains: {goal - saved:,}")

17. Price with Discount Code / 고정 할인 코드를 적용합니다.
price = 20000
code_dc = 3000
print(f"Final: {price - code_dc}")

18. Simple interest / 원금에 기간과 이율을 곱해 단리를 계산합니다.
principal = 10000
rate = 0.03
years = 5
print(f"Interest: {principal * rate * years}")

19. Split even decimals / 정확히 반으로 나눈 소수점 결과입니다.
val = 7
print(f"Half: {val / 2}")

20. Final Review / [종합] 현재 진행률을 계산해 그래픽 바와 퍼센트로 표현합니다.
target = 100
current = 42
pct = current / target
print(f"Progress: [{'#' * (current//10):<10}] {pct:.1%}")
