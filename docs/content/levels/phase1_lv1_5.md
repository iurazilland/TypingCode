# Phase 1: 변수와 입출력 (Lv 1 - 5) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 1: 출력 기초 (Print & Escape)
**설명**: 파이썬의 표준 출력 방식과 줄바꿈, 탭 등의 특수 기호를 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `print("Hello, Python!")\nprint("Welcome to TypingCode.")` | `print()` 함수로 텍스트를 출력합니다. |
| 2 | `print("Line 1\\nLine 2")\nprint("Newline added.")` | `\\n`은 줄을 바꾸는 이스케이프 문자입니다. |
| 3 | `print("ID:\\tuser01")\nprint("Job:\\tCoder")` | `\\t`는 정해진 간격만큼 띄워주는 탭 문자입니다. |
| 4 | `print("A", "B", "C", sep="-")` | `sep`은 문자들 사이의 구분자를 정합니다. |
| 5 | `print("Wait", end="...")\nprint("Done!")` | `end`를 쓰면 다음 출력과 줄바꿈 없이 이어집니다. |
| 6 | `print("He said, \\"Hi\\"")\nprint('Python\\'s cool')` | 따옴표를 출력하려면 앞에 `\\`를 붙이세요. |
| 7 | `print("Path: C:\\\\User\\\\Bin")` | 백슬래시 자체는 `\\\\`로 두 번 써야 출력됩니다. |
| 8 | `print("=" * 15)\nprint("System Ready")` | 문자열과 숫자를 곱하면 그만큼 반복 출력됩니다. |
| 9 | `print("Item", "Price", sep=":\\t")` | `sep`에 탭(`\\t`)을 섞어 사용할 수 있습니다. |
| 10 | `print("One", "Two", "Three", sep="\\n")` | `sep`에 줄바꿈(`\\n`)을 넣어 세로로 출력합니다. |
| 11 | `print("Email", "admin@web.com", sep=": ")` | 실제 데이터 포맷처럼 구분자를 넣어봅니다. |
| 12 | `print("Step 1", end=" -> ")\nprint("Step 2")` | 화살표 모양으로 출력을 이어봅니다. |
| 13 | `print("Loading", "." * 10, sep="")` | 구분자 없이 딱 붙여서 출력하는 방법입니다. |
| 14 | `print("User:", "Alice", "\\t", "Score:", 95)` | 여러 인자를 탭과 함께 자유롭게 섞어봅니다. |
| 15 | `print("""Multi-line\nStrings are\nEasy.""")` | 삼중 따옴표 안에서도 이스케이프 문자는 작동합니다. |
| 16 | `print("--- [ LOG ] ---")\nprint("Ready", "Set", "Go", sep=" | ")` | 로그 헤더와 구분자 조합 연습입니다. |
| 17 | `print("Result:", 10/2, end=" meters\\n")` | 계산 결과 뒤에 단위를 붙여 출력합니다. |
| 18 | `print("Name:\\tGuido", "Skill:\\tC++/Python", sep="\\n")` | 여러 줄 정렬 출력 예시입니다. |
| 19 | `print("Progress:", "[", "#" * 5, " " * 5, "]", sep="")` | 로딩 바 모양을 만들어 봅니다. |
| 20 | `print("Congratulations!", "Level 1 Complete.", sep="\\n" + "-" * 20 + "\\n")` | [복습] sep 안에 줄바꿈과 대시를 넣어 구분선을 만듭니다. |

---

## 🟦 Lv 2: 변수와 데이터 저장 (Variables)
**설명**: 데이터를 이름을 붙여 저장하고 재사용하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `user = "Alex"\nprint("User Name:", user)` | 변수에 텍스트를 저장하고 출력합니다. |
| 2 | `age = 25\nprint("Age:", age)` | 숫자를 변수에 저장합니다. |
| 3 | `msg = "Python"\nprint(msg + " is fun!")` | 변수와 텍스트를 `+`로 합쳐 출력합니다. |
| 4 | `x = 10\ny = 20\nprint(x + y)` | 두 숫자가 든 변수를 더해 출력합니다. |
| 5 | `first = "Happy"\nlast = "Coding"\nprint(first, last)` | 두 변수를 콤마로 구분해 한 줄에 출력합니다. |
| 6 | `score = 0\nscore = 100\nprint(score)` | 변수의 값은 언제든 새로 덮어쓸 수 있습니다. |
| 7 | `a = "Data"\nb = a\nprint(b)` | 변수의 값을 다른 변수에 복사할 수 있습니다. |
| 8 | `item = "Coffee"\nprice = 4500\nprint(item, ":", price)` | 서로 다른 타입의 변수를 섞어서 출력합니다. |
| 9 | `v1, v2 = 1, 2\nprint(v1, v2)` | 한 번에 여러 변수를 선언(다중 할당)할 수 있습니다. |
| 10 | `msg = "Type faster!"\nprint(msg * 2)` | 변수가 담고 있는 문자열을 반복 출력합니다. |
| 11 | `n1 = "10"\nn2 = "20"\nprint(n1 + n2)` | 따옴표 안의 숫자는 문자열로 결합됩니다. |
| 12 | `count = 1\ncount = count + 1\nprint(count)` | 자기 자신에 값을 더해 업데이트합니다. |
| 13 | `title = "Menu"\nprint("-" * 10, title, "-" * 10)` | 변수를 가운데 두고 양옆에 장식을 넣습니다. |
| 14 | `flag = True\nprint("Is Active?", flag)` | 참/거짓 값을 변수에 담아 출력합니다. |
| 15 | `empty = None\nprint("Value:", empty)` | '값이 없음'을 뜻하는 `None`을 익힙니다. |
| 16 | `long_txt = "A" * 50\nprint(long_txt)` | 문자열 변수에 긴 텍스트를 생성해 담습니다. |
| 17 | `nick = "Typist"\nprint(f"Hello, {nick}")` | f-string 기초: 중괄호 안에 변수를 넣습니다. |
| 18 | `greeting = "Hi"\nprint(greeting, greeting, sep="! ")` | 변수를 여러 번 써서 느낌표로 구분합니다. |
| 19 | `r, g, b = 255, 0, 0\nprint("RGB:", r, g, b)` | 색상 값처럼 여러 데이터를 한 번에 관리합니다. |
| 20 | `user_id = "dev_01"\nstatus = "online"\nprint(f"[{user_id}] Status: {status}")` | [복습] ID와 상태를 조합해 프로필 문구를 만듭니다. |

---

## 🟦 Lv 3: 기본 연산 (Arithmetic)
**설명**: 파이썬을 계산기처럼 사용하여 수치 데이터를 처리합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `print(10 + 20)\nprint(50 - 15)` | 더하기와 빼기 기본 연산입니다. |
| 2 | `print(5 * 8)\nprint(100 / 4)` | 곱하기와 나누기입니다. |
| 3 | `print(10 // 3)` | `//` 연산자는 나누기 결과의 '몫'만 구합니다. |
| 4 | `print(10 % 3)` | `%` 연산자는 나눈 후의 '나머지'를 구합니다. |
| 5 | `print(2 ** 10)` | `**` 연산자는 거듭제곱(2의 10승)을 계산합니다. |
| 6 | `a = 5\nb = 3\nprint(a ** b)` | 변수끼리의 거듭제곱 연산입니다. |
| 7 | `print(1 + 2 * 3)` | 곱셈과 나눗셈은 덧셈보다 먼저 수행됩니다. |
| 8 | `print((1 + 2) * 3)` | 괄호를 사용하면 덧셈을 먼저 수행하게 강제합니다. |
| 9 | `num = 10\nnum += 5\nprint(num)` | `+=`는 원래 값에 더해서 저정하는 축약형입니다. |
| 10 | `count = 10\ncount -= 3\nprint(count)` | `-=`는 원래 값에서 빼서 저장합니다. |
| 11 | `val = 10\nval *= 2\nprint(val)` | `*=`는 원래 값에 곱해서 저장합니다. |
| 12 | `even = 10 % 2\nodd = 11 % 2\nprint(even, odd)` | 나머지가 0이면 짝수, 1이면 홀수임을 알 수 있습니다. |
| 13 | `total = 12345\nprint("Group:", total // 1000)` | 큰 숫자를 백/천 단위로 그룹화할 때 몫을 씁니다. |
| 14 | `coins = 570\nprint("500 Won:", coins // 500)` | 잔돈 계산 시 몫 연산 활용 예시입니다. |
| 15 | `coins = 570\nprint("Rest:", coins % 500)` | 잔돈 계산 시 나머지 연산 활용 예시입니다. |
| 16 | `print(3 * (2 + 4) / 2)` | 복합 연계 연산과 우선순위 연습입니다. |
| 17 | `pi = 3.14159\nr = 10\nprint(pi * r * r)` | 원의 넓이를 구하는 수학 공식 연습입니다. |
| 18 | `x = 2\nx = x ** 3\nprint(x)` | 자기 자신을 제곱하여 업데이트합니다. |
| 19 | `print(10 / 3)\nprint(10 // 3)` | 실수 나누기(`float`)와 정수 나누기(`int`) 비교입니다. |
| 20 | `a, b = 15, 4\nprint(f"Share: {a//b}, Rest: {a%b}")` | [복습] 두 변수의 몫과 나머지를 f-string으로 출력합니다. |

---

## 🟦 Lv 4: 문자열 포맷팅 (F-Strings)
**설명**: 텍스트와 변수를 깔끔하게 조합하는 현대적인 방법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `name = "Alice"\nprint(f"Hello, {name}")` | f-string의 가장 기본 사용법입니다. |
| 2 | `age = 20\nprint(f"I am {age} years old.")` | 숫자를 문자열 안에 자연스럽게 넣습니다. |
| 3 | `a, b = 10, 20\nprint(f"{a} + {b} = {a+b}")` | 중괄호 안에서 직접 연산도 가능합니다. |
| 4 | `price = 12345\nprint(f"Price: {price:,}")` | `:,`를 붙이면 천 단위 콤마가 자동으로 생성됩니다. |
| 5 | `pi = 3.141592\nprint(f"Pi is {pi:.2f}")` | `:.2f`는 소수점 두 번째 자리까지만 보여줍니다. |
| 6 | `user = "kim"\nprint(f"User: {user.upper()}")` | 중괄호 안에서 문자열 메서드도 호출 가능합니다. |
| 7 | `score = 0.85\nprint(f"Accuracy: {score:.1%}")` | `:.1%`는 숫자를 퍼센트 형식으로 바꿔줍니다. |
| 8 | `item = "Apple"\nqty = 5\nprint(f"{item} x {qty}")` | 변수 여러 개를 조합해 상품 정보를 만듭니다. |
| 9 | `day = 7\nprint(f"Day {day:02d}")` | `:02d`는 두 자리를 채우고 남은 앞부분을 0으로 채웁니다. |
| 10 | `tag = "Python"\nprint(f"#{tag} " * 3)` | f-string 결과를 반복해서 출력해 봅니다. |
| 11 | `name = "Bob"\nprint(f"|{name:10}|")` | `:10`은 10개 글자만큼의 공간을 확보(왼쪽 정렬)합니다. |
| 12 | `name = "Bob"\nprint(f"|{name:>10}|")` | `:>10`은 10칸 공간에서 오른쪽 정렬을 수행합니다. |
| 13 | `name = "Bob"\nprint(f"|{name:^10}|")` | `:^10`은 10칸 공간에서 중앙 정렬을 수행합니다. |
| 14 | `val = 255\nprint(f"Hex: {val:x}, Oct: {val:o}")` | 정수를 16진수나 8진수로 변환해 출력합니다. |
| 15 | `msg = "DONE"\nprint(f"--- {msg:=^20} ---")` | 중앙 정렬과 동시에 빈 공간을 `=`로 채웁니다. |
| 16 | `print(f"Braces: {{key}}")` | f-string에서 중괄호 자체를 출력하려면 두 번 씁니다. |
| 17 | `usd = 10\nkrw = usd * 1350\nprint(f"${usd} = {krw:,} Won")` | 환율 계산 결과를 포맷팅하여 출력합니다. |
| 18 | `first, last = "Guido", "Rossum"\nprint(f"Author: {first[0]}. {last}")` | 성은 다 쓰고 이름은 첫 글자만 뽑아 출력합니다. |
| 19 | `log = "ERROR"\nprint(f"[{log:!^10}]")` | 강조 표시가 포함된 로그 헤더를 만듭니다. |
| 20 | `h, m, s = 9, 5, 1\nprint(f"Time: {h:02}:{m:02}:{s:02}")` | [복습] 시:분:초를 00:00:00 형식으로 정렬하여 출력합니다. |

---

## 🟦 Lv 5: [Challenge] 시스템 초기화 로그
**설명**: 지금까지 배운 출력, 변수, 연산, 포맷팅을 모두 동원합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `app = "CodeSystem"\nprint(f"Initializing {app}...")` | 앱 이름 변수를 활용한 시작 메시지입니다. |
| 2 | `v_maj, v_min = 1, 0\nprint(f"Version: {v_maj}.{v_min}")` | 버전 정보를 조합하여 출력합니다. |
| 3 | `bar = "#" * 5 + "-" * 5\nprint(f"Load: [{bar}] 50%")` | 로딩 바를 수동으로 그려 봅니다. |
| 4 | `cpu = 0.42\nprint(f"CPU usage: {cpu:.1%}")` | CPU 사용량을 퍼센트로 포맷팅합니다. |
| 5 | `ram_gb = 16\nram_mb = ram_gb * 1024\nprint(f"RAM: {ram_mb:,} MB")` | 단위 변환 연산 후 콤마와 함께 출력합니다. |
| 6 | `print("-" * 30)\nprint("System check started.")` | 구분선을 그려 가독성을 높입니다. |
| 7 | `node = "East-01"\nprint(f"Connecting to Node: {node}")` | 특정 노드 이름을 포함한 연결 메시지입니다. |
| 8 | `delay = 15.5\nprint(f"Latency: {delay}ms", end=" (OK)\\n")` | 딜레이 정보 뒤에 OK를 붙여서 출력합니다. |
| 9 | `print("DB_STATUS", "ONLINE", "STABLE", sep=" | ")` | 여러 상태 값을 수평으로 정렬해 보여줍니다. |
| 10 | `header = "BOOT SEQUENCE"\nprint(f"{header:-^30}")` | 중앙 정렬과 하이픈 장식으로 제목을 만듭니다. |
| 11 | `err_count = 0\nprint(f"Total Errors Found: {err_count}")` | 에러 개수를 변수로 출력합니다. |
| 12 | `user = "ANTIGRAVITY"\nprint(f"Authorized by {user.title()}")` | 대문자 유저명을 단어 첫 글자만 대문자로 바꿉니다. |
| 13 | `start_time = "09:00"\nprint(f"System Start At: {start_time}")` | 시작 시간 텍스트를 출력합니다. |
| 14 | `x, y = 1024, 768\nprint(f"Resolution: {x} x {y}")` | 해상도 값을 입력받은 듯이 출력합니다. |
| 15 | `storage = 512\nused = 120\nprint(f"Free: {storage - used} GB")` | 전체 용량에서 사용량을 뺀 결과를 바로 출력합니다. |
| 16 | `id = 777\nprint(f"Device-ID: {id:05d}")` | ID 번호를 5자리 숫자로(앞을 0으로 채워) 출력합니다. |
| 17 | `print("Warning:\\nPotential high temp detected!")` | 줄바꿈 문자를 활용한 경고 문구입니다. |
| 18 | `temp = 28.567\nprint(f"Core Temp: {temp:.2f} 'C")` | 소수점 단위를 제한한 온도 신호입니다. |
| 19 | `print("Finalizing", "." * 3, sep="")` | 점 세 개가 딱 붙어 출력되는 마무리 메시지입니다. |
| 20 | `print("=" * 30)\nprint("  BOOTUP SUCCESSFUL  ")\nprint("=" * 30)` | [종합] 모든 과정이 끝났음을 알리는 최종 성공 박스입니다. |
