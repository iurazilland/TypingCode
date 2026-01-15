# Phase 1: 변수와 입출력 (Lv 1 - 5) 상세 세트

---

Lv1. The First Step / 첫 번째 단계
Description: 파이썬의 표준 출력 방식과 줄바꿈, 탭 등의 특수 기호를 익힙니다. / Mastering standard output, newlines, and escape characters.

1. Print for print() function / print() 함수로 텍스트를 출력합니다.
print("Hello, Python!")
print("Welcome to TypingCode.")

2. '\n' is newline words / '\n'은 줄을 바꾸는 이스케이프 문자입니다.
print("Line 1\nLine 2")
print("Newline added.")

3. '\t' is tab spacing / '\t'는 정해진 간격만큼 띄워주는 탭 문자입니다.
print("ID:\tuser01")
print("Job:\tCoder")

4. 'sep' separator / 'sep'은 문자들 사이의 구분자를 정합니다.
print("A", "B", "C", sep="-")

5. 'end' parameter / 'end'를 쓰면 다음 출력과 줄바꿈 없이 이어집니다.
print("Wait", end="...")
print("Done!")

6. Quotation marks / 따옴표를 출력하려면 앞에 \를 붙이세요.
print("He said, \"Hi\"")
print('Python\'s cool')

7. Backslash / 백슬래시 자체는 \\로 두 번 써야 출력됩니다.
print("Path: C:\\User\\Bin")

8. String multiplication / 문자열과 숫자를 곱하면 그만큼 반복 출력됩니다.
print("=" * 15)
print("System Ready")

9. Sep with Tab / sep에 탭(\t)을 섞어 사용할 수 있습니다.
print("Item", "Price", sep=":\t")

10. Sep with Newline / sep에 줄바꿈(\n)을 넣어 세로로 출력합니다.
print("One", "Two", "Three", sep="\n")

11. Email format / 실제 데이터 포맷처럼 구분자를 넣어봅니다.
print("Email", "admin@web.com", sep=": ")

12. Connected message / 화살표 모양으로 출력을 이어봅니다.
print("Step 1", end=" -> ")
print("Step 2")

13. No separator / 구분자 없이 딱 붙여서 출력하는 방법입니다.
print("Loading", "." * 10, sep="")

14. Multi-arguments / 여러 인자를 탭과 함께 자유롭게 섞어봅니다.
print("User:", "Alice", "\t", "Score:", 95)

15. Multi-line strings / 삼중 따옴표 안에서도 이스케이프 문자는 작동합니다.
print("""Multi-line
Strings are
Easy.""")

16. Log format / 로그 헤더와 구분자 조합 연습입니다.
print("--- [ LOG ] ---")
print("Ready", "Set", "Go", sep=" | ")

17. Math results / 계산 결과 뒤에 단위를 붙여 출력합니다.
print("Result:", 10/2, end=" meters\n")

18. Alignment / 여러 줄 정렬 출력 예시입니다.
print("Name:\tGuido", "Skill:\tC++/Python", sep="\n")

19. Progress bar / 로딩 바 모양을 만들어 봅니다.
print("Progress:", "[", "#" * 5, " " * 5, "]", sep="")

20. Final Review / [복습] sep 안에 줄바꿈과 대시를 넣어 구분선을 만듭니다.
print("Congratulations!", "Level 1 Complete.", sep="\n" + "-" * 20 + "\n")

---

Lv2. Storing Data / 데이터 저장하기
Description: 데이터를 이름을 붙여 저장하고 재사용하는 법을 익힙니다. / Learn how to name, store, and reuse data using variables.

1. Variable Basics / 변수에 텍스트를 저장하고 출력합니다.
user = "Alex"
print("User Name:", user)

2. Numeric Variables / 숫자를 변수에 저장합니다.
age = 25
print("Age:", age)

3. Combining with + / 변수와 텍스트를 +로 합쳐 출력합니다.
msg = "Python"
print(msg + " is fun!")

4. Addition with variables / 두 숫자가 든 변수를 더해 출력합니다.
x = 10
y = 20
print(x + y)

5. Multi-variables / 두 변수를 콤마로 구분해 한 줄에 출력합니다.
first = "Happy"
last = "Coding"
print(first, last)

6. Overwriting variables / 변수의 값은 언제든 새로 덮어쓸 수 있습니다.
score = 0
score = 100
print(score)

7. Copying variables / 변수의 값을 다른 변수에 복사할 수 있습니다.
a = "Data"
b = a
print(b)

8. Mixed types / 서로 다른 타입의 변수를 섞어서 출력합니다.
item = "Coffee"
price = 4500
print(item, ":", price)

9. Multiple assignment / 한 번에 여러 변수를 선언(다중 할당)할 수 있습니다.
v1, v2 = 1, 2
print(v1, v2)

10. String multiplication / 변수가 담고 있는 문자열을 반복 출력합니다.
msg = "Type faster!"
print(msg * 2)

11. Numbers as strings / 따옴표 안의 숫자는 문자열로 결합됩니다.
n1 = "10"
n2 = "20"
print(n1 + n2)

12. Updating self / 자기 자신에 값을 더해 업데이트합니다.
count = 1
count = count + 1
print(count)

13. Formatting decorations / 변수를 가운데 두고 양옆에 장식을 넣습니다.
title = "Menu"
print("-" * 10, title, "-" * 10)

14. Boolean flags / 참/거짓 값을 변수에 담아 출력합니다.
flag = True
print("Is Active?", flag)

15. None type / '값이 없음'을 뜻하는 None을 익힙니다.
empty = None
print("Value:", empty)

16. Long strings / 문자열 변수에 긴 텍스트를 생성해 담습니다.
long_txt = "A" * 50
print(long_txt)

17. f-string basics / f-string 기초: 중괄호 안에 변수를 넣습니다.
nick = "Typist"
print(f"Hello, {nick}")

18. Repeat variable / 변수를 여러 번 써서 느낌표로 구분합니다.
greeting = "Hi"
print(greeting, greeting, sep="! ")

19. Multiple values / 색상 값처럼 여러 데이터를 한 번에 관리합니다.
r, g, b = 255, 0, 0
print("RGB:", r, g, b)

20. Profile combining / [복습] ID와 상태를 조합해 프로필 문구를 만듭니다.
user_id = "dev_01"
status = "online"
print(f"[{user_id}] Status: {status}")

Lv3. Basic Arithmetic / 기본 연산
Description: 파이썬을 계산기처럼 사용하여 수치 데이터를 처리합니다. / Use Python as a calculator to process numerical data.

1. Add & Sub / 더하기와 빼기 기본 연산입니다.
print(10 + 20)
print(50 - 15)

2. Mul & Div / 곱하기와 나누기입니다.
print(5 * 8)
print(100 / 4)

3. Quotient (//) / // 연산자는 나누기 결과의 '몫'만 구합니다.
print(10 // 3)

4. Remainder (%) / % 연산자는 나눈 후의 '나머지'를 구합니다.
print(10 % 3)

5. Power (**) / ** 연산자는 거듭제곱(2의 10승)을 계산합니다.
print(2 ** 10)

6. Variable Exponent / 변수끼리의 거듭제곱 연산입니다.
a = 5
b = 3
print(a ** b)

7. Operator Priority / 곱셈과 나눗셈은 덧셈보다 먼저 수행됩니다.
print(1 + 2 * 3)

8. Using Parentheses / 괄호를 사용하면 덧셈을 먼저 수행하게 강제합니다.
print((1 + 2) * 3)

9. Plus Assignment / +=는 원래 값에 더해서 저장하는 축약형입니다.
num = 10
num += 5
print(num)

10. Minus Assignment / -=는 원래 값에서 빼서 저장합니다.
count = 10
count -= 3
print(count)

11. Mul Assignment / *=는 원래 값에 곱해서 저장합니다.
val = 10
val *= 2
print(val)

12. Even or Odd / 나머지가 0이면 짝수, 1이면 홀수임을 알 수 있습니다.
even = 10 % 2
odd = 11 % 2
print(even, odd)

13. Unit Grouping / 큰 숫자를 백/천 단위로 그룹화할 때 몫을 씁니다.
total = 12345
print("Group:", total // 1000)

14. Change Calculation (Quot) / 잔돈 계산 시 몫 연산 활용 예시입니다.
coins = 570
print("500 Won:", coins // 500)

15. Change Calculation (Rem) / 잔돈 계산 시 나머지 연산 활용 예시입니다.
coins = 570
print("Rest:", coins % 500)

16. Complex Priority / 복합 연계 연산과 우선순위 연습입니다.
print(3 * (2 + 4) / 2)

17. Circle Area / 원의 넓이를 구하는 수학 공식 연습입니다.
pi = 3.14159
r = 10
print(pi * r * r)

18. Self Power / 자기 자신을 제곱하여 업데이트합니다.
x = 2
x = x ** 3
print(x)

19. Float vs Int / 실수 나누기(float)와 정수 나누기(int) 비교입니다.
print(10 / 3)
print(10 // 3)

20. Formatting Result / [복습] 두 변수의 몫과 나머지를 f-string으로 출력합니다.
a, b = 15, 4
print(f"Share: {a//b}, Rest: {a%b}")

---

Lv4. String Formatting / 문자열 포맷팅
Description: 텍스트와 변수를 깔끔하게 조합하는 현대적인 방법을 익힙니다. / Learn modern ways to combine text and variables cleanly.

1. Basic f-string / f-string의 가장 기본 사용법입니다.
name = "Alice"
print(f"Hello, {name}")

2. Numbers in f-string / 숫자를 문자열 안에 자연스럽게 넣습니다.
age = 20
print(f"I am {age} years old.")

3. Math in braces / 중괄호 안에서 직접 연산도 가능합니다.
a, b = 10, 20
print(f"{a} + {b} = {a+b}")

4. Thousand Comma / :,를 붙이면 천 단위 콤마가 자동으로 생성됩니다.
price = 12345
print(f"Price: {price:,}")

5. Float Precision / :.2f는 소수점 두 번째 자리까지만 보여줍니다.
pi = 3.141592
print(f"Pi is {pi:.2f}")

6. Methods in f-string / 중괄호 안에서 문자열 메서드도 호출 가능합니다.
user = "kim"
print(f"User: {user.upper()}")

7. Percentage format / :.1%는 숫자를 퍼센트 형식으로 바꿔줍니다.
score = 0.85
print(f"Accuracy: {score:.1%}")

8. Combination / 변수 여러 개를 조합해 상품 정보를 만듭니다.
item = "Apple"
qty = 5
print(f"{item} x {qty}")

9. Padding Zeros / :02d는 두 자리를 채우고 남은 앞부분을 0으로 채웁니다.
day = 7
print(f"Day {day:02d}")

10. Repeating F-string / f-string 결과를 반복해서 출력해 봅니다.
tag = "Python"
print(f"#{tag} " * 3)

11. Left Align / :10은 10개 글자만큼의 공간을 확보(왼쪽 정렬)합니다.
name = "Bob"
print(f"|{name:10}|")

12. Right Align / :>10은 10칸 공간에서 오른쪽 정렬을 수행합니다.
name = "Bob"
print(f"|{name:>10}|")

13. Center Align / :^10은 10칸 공간에서 중앙 정렬을 수행합니다.
name = "Bob"
print(f"|{name:^10}|")

14. Hex & Oct / 정수를 16진수나 8진수로 변환해 출력합니다.
val = 255
print(f"Hex: {val:x}, Oct: {val:o}")

15. Center with Padding / 중앙 정렬과 동시에 빈 공간을 =로 채웁니다.
msg = "DONE"
print(f"--- {msg:=^20} ---")

16. Escaping Braces / f-string에서 중괄호 자체를 출력하려면 두 번 씁니다.
print(f"Braces: {{key}}")

17. Currency Calc / 환율 계산 결과를 포맷팅하여 출력합니다.
usd = 10
krw = usd * 1350
print(f"${usd} = {krw:,} Won")

18. Slicing in f-string / 성은 다 쓰고 이름은 첫 글자만 뽑아 출력합니다.
first, last = "Guido", "Rossum"
print(f"Author: {first[0]}. {last}")

19. Log Highlight / 강조 표시가 포함된 로그 헤더를 만듭니다.
log = "ERROR"
print(f"[{log:!^10}]")

20. Time Format / [복습] 시:분:초를 00:00:00 형식으로 정렬하여 출력합니다.
h, m, s = 9, 5, 1
print(f"Time: {h:02}:{m:02}:{s:02}")

---

Lv5. [Challenge] System Logs / 시스템 초기화 로그
Description: 지금까지 배운 출력, 변수, 연산, 포맷팅을 모두 동원합니다. / Unleash output, variables, math, and formatting skills.

1. App Init / 앱 이름 변수를 활용한 시작 메시지입니다.
app = "CodeSystem"
print(f"Initializing {app}...")

2. Version Combo / 버전 정보를 조합하여 출력합니다.
v_maj, v_min = 1, 0
print(f"Version: {v_maj}.{v_min}")

3. Manual Progress Bar / 로딩 바를 수동으로 그려 봅니다.
bar = "#" * 5 + "-" * 5
print(f"Load: [{bar}] 50%")

4. CPU Perc / CPU 사용량을 퍼센트로 포맷팅합니다.
cpu = 0.42
print(f"CPU usage: {cpu:.1%}")

5. RAM Calc / 단위 변환 연산 후 콤마와 함께 출력합니다.
ram_gb = 16
ram_mb = ram_gb * 1024
print(f"RAM: {ram_mb:,} MB")

6. Section Divider / 구분선을 그려 가독성을 높입니다.
print("-" * 30)
print("System check started.")

7. Node Connection / 특정 노드 이름을 포함한 연결 메시지입니다.
node = "East-01"
print(f"Connecting to Node: {node}")

8. Latency Log / 딜레이 정보 뒤에 OK를 붙여서 출력합니다.
delay = 15.5
print(f"Latency: {delay}ms", end=" (OK)\n")

9. Pipe Separated / 여러 상태 값을 수평으로 정렬해 보여줍니다.
print("DB_STATUS", "ONLINE", "STABLE", sep=" | ")

10. Sequence Header / 중앙 정렬과 하이픈 장식으로 제목을 만듭니다.
header = "BOOT SEQUENCE"
print(f"{header:-^30}")

11. Error Counter / 에러 개수를 변수로 출력합니다.
err_count = 0
print(f"Total Errors Found: {err_count}")

12. Auth User / 대문자 유저명을 단어 첫 글자만 대문자로 바꿉니다.
user = "ANTIGRAVITY"
print(f"Authorized by {user.title()}")

13. Start Time / 시작 시간 텍스트를 출력합니다.
start_time = "09:00"
print(f"System Start At: {start_time}")

14. Res Scale / 해상도 값을 입력받은 듯이 출력합니다.
x, y = 1024, 768
print(f"Resolution: {x} x {y}")

15. Storage Calc / 전체 용량에서 사용량을 뺀 결과를 바로 출력합니다.
storage = 512
used = 120
print(f"Free: {storage - used} GB")

16. Zero Padding ID / ID 번호를 5자리 숫자로(앞을 0으로 채워) 출력합니다.
id = 777
print(f"Device-ID: {id:05d}")

17. Multi-line Warn / 줄바꿈 문자를 활용한 경고 문구입니다.
print("Warning:\nPotential high temp detected!")

18. Float Precision / 소수점 단위를 제한한 온도 신호입니다.
temp = 28.567
print(f"Core Temp: {temp:.2f} 'C")

19. Final Dot / 점 세 개가 딱 붙어 출력되는 마무리 메시지입니다.
print("Finalizing", "." * 3, sep="")

20. Completion Box / [종합] 모든 과정이 끝났음을 알리는 최종 성공 박스입니다.
print("=" * 30)
print("  BOOTUP SUCCESSFUL  ")
print("=" * 30)
