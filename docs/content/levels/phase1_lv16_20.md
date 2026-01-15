# Phase 1: 변수와 입출력 (Lv 16 - 20) 상세 세트

---

Lv16. Comparison Operators / 비교 연산자와 불리언
Description: 두 값을 비교하여 참(True) 또는 거짓(False) 결과를 도출하는 법을 익힙니다. / Learn how to compare two values to get Boolean results.

1. Equality & Inequality / '같다'(==)와 '다르다'(!=) 비교입니다.
a, b = 10, 20
print(a == b)
print(a != b)

2. Greater & Less / '크다'와 '작다' 비교 연산입니다.
a, b = 10, 20
print(a > b)
print(a < b)

3. Greater/Less or Equal / '크거나 같다'와 '작거나 같다' 비교입니다.
a, b = 10, 10
print(a >= b)
print(a <= b)

4. Case Sensitivity / 파이썬은 대소문자를 엄격히 구분하므로 False가 나옵니다.
msg = "Python"
print(msg == "python")

5. Float Equality / 정수 10과 실수 10.0은 논리적으로 같은 값으로 간주됩니다.
print(10 == 10.0)

6. Age Validator / 나이 변수를 기준으로 성인 여부를 판단합니다.
age = 18
print(f"Is Adult? {age >= 19}")

7. Pass Threshold / 성적이 기준 점수를 초과했는지 확인합니다.
score = 85
print(f"Passed: {score > 80}")

8. Password Match / 비밀번호 일치 확인 로직의 기초입니다.
input_pw = "1234"
saved_pw = "1234"
print(input_pw == saved_pw)

9. Alphabetical Order / 문자도 알파벳 순서(ASCII 값)를 기준으로 크기 비교가 가능합니다.
v = "A"
print(v > "B")

10. Chained Comparison / 여러 비교를 한 줄로 이어 쓰는 복합 비교가 가능합니다.
x = 5
print(0 < x < 10)

11. Non-zero truth / 숫자가 0이 아닌지 확인하여 존재 여부를 체크합니다.
val = 5
print(val != 0)

12. Length comparison / 문자열의 길이를 비교합니다.
s1, s2 = "abc", "abcd"
print(len(s1) < len(s2))

13. Empty string check / 문자열이 비어있는지 비교로 확인합니다.
s = ""
print(s == "")

14. Negative comparison / 음수끼리의 크기를 비교합니다.
print(-10 > -20)

15. Boolean direct / 불리언 값 자체를 비교합니다.
print(True == False)

16. Calculation comparison / 연산 결과와 값을 비교합니다.
print(10 + 2 == 12)

17. Type-based comparison (False) / 서로 다른 타입끼리의 비교(문자열 vs 숫자) 결과입니다.
print("10" == 10)

18. Not Equal logic / 특정 값이 아님을 확실히 합니다.
status = "error"
print(status != "success")

19. Multiple variables / 여러 변수를 한꺼번에 비교합니다.
a, b, c = 5, 5, 5
print(a == b == c)

20. Final Review / [복습] 수치가 한계치를 넘었을 때 경고 메시지를 불리언으로 표현합니다.
limit = 100
current = 105
print(f"Warning! [{current > limit}]")

---

Lv17. Logical Operators (and, or, not) / 논리 연산자 (and, or, not)
Description: 여러 개의 조건을 결합하거나 반전시켜 복잡한 판단 기준을 만듭니다. / Combine or invert conditions to create complex decision criteria.

1. AND Logic / and는 양쪽이 모두 참일 때만 True가 됩니다.
print(True and True)
print(True and False)

2. OR Logic / or는 한쪽만 참이어도 True가 됩니다.
print(True or False)
print(False or False)

3. NOT Logic / not은 참을 거짓으로, 거짓을 참으로 뒤집습니다.
print(not True)
print(not False)

4. Combined Criteria / 성인이면서 면허가 있는 가를 동시에 확인합니다.
age = 25
has_license = True
print(age >= 19 and has_license)

5. Holiday Check / 주말이거나 공휴일이면 쉴 수 있음을 나타내는 or 조건입니다.
is_weekend = True
is_holiday = False
print(is_weekend or is_holiday)

6. Negative membership / 멤버가 아니면 혜택 제외 등 '부정(Negative)' 판단에 씁니다.
is_member = False
print(not is_member)

7. Range Check / 점수가 90점대(90 이상 100 이하)인지 확인합니다.
score = 95
print(90 <= score <= 100)

8. Multi-condition / 짝수이면서 5보다 큰 조건입니다.
v = 10
print(v % 2 == 0 and v > 5)

9. Auth Logic / 아이디와 암호를 동시에 검수하는 기본 원리입니다.
user = "admin"
pw = "ok"
print(user == "admin" and pw == "ok")

10. Unlucky situation / 비는 오는데 우산은 없는 난처한 상황을 표현합니다.
is_rainy = True
has_umbrella = False
print(is_rainy and not has_umbrella)

11. Short-circuit AND / 앞이 거짓이면 뒤는 보지 않는 and의 특성입니다.
print(False and "Anything")

12. Short-circuit OR / 앞이 참이면 뒤는 보지 않는 or의 특성입니다.
print(True or "Anything")

13. Triple logic / 세 개의 조건을 and로 묶어 봅니다.
a, b, c = 1, 1, 1
print(a == 1 and b == 1 and c == 1)

14. Nested NOT / not을 두 번 써서 원래 값으로 돌립니다.
val = True
print(not not val)

15. Complex OR / 여러 대안 중 하나라도 충족되는지 봅니다.
role = "guest"
print(role == "admin" or role == "user" or role == "guest")

16. Filter logic / 특정 범위 밖의 숫자인지 확인합니다.
n = 15
print(n < 10 or n > 20)

17. Type check & value / 타입이 문자열이면서 내용이 비어있지 않은지 봅니다.
s = "Hello"
print(type(s) == str and s != "")

18. Not in range / 특정 구간에 포함되지 않는지 not을 써서 확인합니다.
x = 5
print(not (10 <= x <= 20))

19. Multiple negative / 둘 다 아닌 조건입니다.
a, b = 0, 0
print(not a and not b)

20. Final Review / [복습] 연산자 우선순위(not > and > or)를 숙지하며 결과값을 판별합니다.
v1, v2, v3 = 10, 20, 30
print(v1 < v2 or v2 > v3 and v1 == 10)

---

Lv18. Membership (in, not in) / 멤버십과 포함 여부 (in)
Description: 문자열이나 목록 안에 특정 데이터가 들어있는지 확인하는 법을 익힙니다. / Check if specific data exists within strings or lists.

1. Char in String / 대소문자를 구분하여 특정 글자가 포함되었는지 확인합니다.
s = "Python"
print("P" in s)
print("p" in s)

2. Whitespace check / 문자열 내에 공백이 포함되어 있는지 확인합니다.
msg = "Hello World"
print(" " in msg)

3. List membership / 금지어 목록(리스트)에 특정 단어가 있는지 확인합니다.
ban_words = ["bad", "hate"]
word = "bad"
print(word in ban_words)

4. Ends with / in 대신 전용 함수인 endswith()로 끝 문자를 확인합니다.
ext = ".py"
file = "main.py"
print(file.endswith(ext))

5. Not in usage / not in은 포함되어 있지 않을 때 True가 됩니다.
target = "A"
source = "ABC"
print(target not in source)

6. Keyword detection / 로그 데이터에 에러 키워드가 있는지 검사합니다.
log = "[ERROR] out of memory"
print("ERROR" in log)

7. Date string search / 날짜 문자열에 특정 월(01월)이 포함되었는지 확인합니다.
data = "2026-01-07"
print("01" in data)

8. Substring test / 불연속하거나 존재하지 않는 문자열 테스트입니다.
alphabet = "abcdefg"
print("hij" in alphabet)

9. Format check / 코드 형식에 하이픈 구분자가 들어있는지 체크합니다.
code = "DEV-001"
print("-" in code)

10. Unique check / 신규 사용자가 기존 목록에 없는지 확인할 때 씁니다.
users = ["alice", "bob"]
print("charlie" not in users)

11. Numeric in list / 리스트에 숫자가 들어있는지 확인합니다.
nums = [1, 2, 3, 4, 5]
print(3 in nums)

12. Case insensitive hack / 소문자로 바꿔서 포함 여부를 확인합니다.
s = "PYTHON"
print("py" in s.lower())

13. Starts with / 문자열이 특정 단어로 시작하는지 확인합니다.
s = "System start"
print(s.startswith("System"))

14. Multi-char in string / 여러 글자가 연속해서 포함되어 있는지 봅니다.
s = "Antigravity"
print("gravity" in s)

15. Boolean in list / 불리언 값이 리스트에 있는지 봅니다.
flags = [True, False, True]
print(False in flags)

16. String in numeric list (False) / 타입이 다르면 포함되지 않은 것으로 간주됩니다.
lst = [10, 20]
print("10" in lst)

17. None in list / None이 포함되어 있는지 확인합니다.
lst = [1, None, 3]
print(None in lst)

18. Check vowels / 특정 글자가 모음 목록에 있는지 확인합니다.
vowels = "aeiou"
char = "e"
print(char in vowels)

19. Multiple not in / 여러 개가 동시에 포함되지 않았는지 봅니다.
s = "abc"
print("x" not in s and "y" not in s)

20. Final Review / [복습] 검색어 포함 여부를 f-string으로 결과를 보여줍니다.
search = "PY"
raw = "PYTHON3"
print(f"Found {search}: {search in raw}")

---

Lv19. Characters & Codes / 문자 코드와 변환
Description: 문자와 숫자(ASCII/Unicode) 간의 관계를 이해하고 변환해 봅니다. / Understand the mapping between characters and their numeric codes (ASCII/Unicode).

1. ord() Function / ord()는 문자를 해당 숫자로 변환합니다 (A=65).
print(ord("A"))
print(ord("B"))

2. chr() Function / chr()은 숫자를 다시 문자로 변환합니다.
print(chr(65))
print(chr(66))

3. Arithmetic with code / 소문자 'a' 다음 문자인 'b'를 숫자로 계산해 출력합니다.
code = ord("a")
print(chr(code + 1))

4. Unicode Support / 한글과 같은 유니코드 문자도 처리가 가능합니다.
print(ord("가"))
print(chr(44032))

5. Space Code / 공백(Space) 문자의 코드값은 32입니다.
s = " "
print(ord(s))

6. Alpha Distance / 두 알파벳 사이의 거리를 계산해 봅니다.
v = ord("Z") - ord("A")
print(f"Alpha Range: {v}")

7. Numeric Chars / 숫자 모양 문자("1")의 실제 코드값은 49입니다.
print(ord("1"), ord("2"))

8. Emoji Codes / 우주선 이모지(🚀) 같은 특수 기호도 코드로 출력할 수 있습니다.
print(chr(128640))

9. Offset mapping / 0~9 숫자를 대응하는 숫자로 문자화하는 기법입니다.
val = 10
print(f"Code for {val}: {chr(val + 48)}")

10. Substring character / 문자열의 첫 글자 코드값만 추출해 봅니다.
s = "PYTHON"
print(ord(s[0]))

11. Lower to Upper / 소문자 'a'를 대문자 'A'로 숫자를 이용해 바꿉니다. (차이=32)
low = "g"
print(chr(ord(low) - 32))

12. Symbol range / 느낌표부터 물음표까지의 코드 간격을 봅니다.
print(ord("?") - ord("!"))

13. Backslash code / 백슬래시(\)의 실제 코드값을 확인합니다.
print(ord("\\"))

14. Newline code / 줄바꿈(\n)의 실제 코드값을 확인합니다. (10)
print(ord("\n"))

15. Special arrow / 화살표 특수 문자를 코드로 출력합니다.
print(chr(8594))

16. Character looping logic / 특정 범위를 한 칸씩 옮겨 봅니다.
c = "1"
next_c = chr(ord(c) + 1)
print(next_c)

17. Multi-byte check / 아주 큰 코드번호의 문자를 확인합니다.
print(chr(55203))

18. Tab code / 탭(\t)의 실제 코드값을 확인합니다. (9)
print(ord("\t"))

19. Compare by code / 문자의 크기 비교는 사실 코드값 비교입니다.
print(ord("a") > ord("A"))

20. Final Review / [복습] 알파벳 대문자의 숫자 범위를 출력합니다.
start = ord("A")
end = ord("Z")
print(f"Range: {start} ~ {end}")

---

Lv20. [Challenge] Basic Report Card / [챌린지] 기초 성적표 제작
Description: [챌린지] Phase 1을 마무리하며 복합적인 판단과 출력을 수행합니다. / Synthesizing Phase 1 concepts for complex logic and formatted output.

1. AVG Calc / 두 과목의 평균을 구해 출력합니다.
math, eng = 85, 92
avg = (math + eng) / 2
print(f"AVG: {avg}")

2. Pass Evaluation / 합격 기준(85점)에 도달했는지 확인합니다.
score = 88.5
is_pass = score >= 85
print(f"Pass? {is_pass}")

3. Centered Title / 중앙 정렬 제목을 만듭니다.
title = "FINAL REPORT"
print(f"{title:=^30}")

4. Rank decoration / 랭킹 숫자를 문자화하여 장식과 결합합니다.
rank = 1
print(f"Rank: {'#' + str(rank)}")

5. Perfect Score Check / 한 과목이라도 100점인지 확인합니다 (or).
math, eng = 100, 92
is_perfect = (math == 100 or eng == 100)
print(f"Perfect? {is_perfect}")

6. Stable Range / 특정 과목 점수가 안정권인지 범위를 확인합니다.
math = 85
is_stable = (80 <= math <= 100)
print(f"Stable? {is_stable}")

7. Grade Highlight / 등급을 강조 표시하여 출력합니다.
grade = "PASS"
print(f"[{grade:!^10}]")

8. Bonus Score / 기존 점수에 보너스를 더해 봅니다.
math = 85
math_up = math + 5 # Bonus
print(f"New Math: {math_up}")

9. Message Append / 문자열 변수에 상태를 덧붙여 최종 메시지를 만듭니다.
msg = "Result: "
msg += "Approved"
print(msg)

10. String Sum / 문자열 형식의 점수를 숫자로 바꿔 합산합니다.
s1, s2 = "80", "90"
print(f"Total: {int(s1) + int(s2)}")

11. Subject list check / 특정 과목이 포함되어 있는지 확인합니다.
subjects = ["Math", "Eng", "Science"]
print("Math" in subjects)

12. Failure Detector / 점수 중 0점이 있는지 bitwise OR 느낌으로 확인합니다.
s1, s2 = 0, 90
print(s1 == 0 or s2 == 0)

13. Name Clean & Caps / 이름을 정리하고 대문자로 출력합니다.
raw_name = "  john doe  "
print(raw_name.strip().upper())

14. ID masking / 유저 ID의 뒷자리를 가려 봅니다.
id = "user1234"
print(id[:4] + "****")

15. Progress with codes / 성적 처리 진행 상황을 특수 문자로 보여줍니다.
print("Loading", chr(9654) * 3)

16. Rounding average / 평균 성적을 정수로 반올림합니다.
avg = 87.6
print(f"Grade (Int): {round(avg)}")

17. Multi-line summary / 최종 결과를 삼중 따옴표로 요약합니다.
summary = """
Status: Finished
Evaluator: AI
"""
print(summary.strip())

18. Honor check / 평균 95점 이상이고 멤버십이 있는지 봅니다.
avg = 96
is_member = True
print(avg >= 95 and is_member)

19. Score Difference / 최고점과 최저점의 차이를 구합니다.
hi, lo = 95, 78
print(f"Gap: {abs(hi - lo)}")

20. Final Review / [종합] 콤마로 구분된 헤더를 분해한 뒤 대시로 다시 합쳐 출력합니다.
h = "REPORT,2026,ADMIN"
parts = h.split(",")
print(" - ".join(parts))
