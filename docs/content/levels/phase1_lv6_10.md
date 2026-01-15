# Phase 1: 변수와 입출력 (Lv 6 - 10) 상세 세트

---

Lv6. String Methods 1 (Splitting) / 문자열 메서드 1 (쪼개기)
Description: 하나의 긴 문자열을 공백이나 특정 기호를 기준으로 쪼개는 법을 익힙니다. / Learn how to split strings using whitespace or specific delimiters.

1. Split by Space / split()은 공백을 기준으로 문자열을 리스트로 나눕니다.
data = "Apple Banana Cherry"
items = data.split()
print(items)

2. Split by Comma / 괄호 안에 구분자(,)를 넣으면 해당 문자를 기준으로 나눕니다.
csv = "ID,Name,Email"
fields = csv.split(",")
print(fields)

3. Path Splitting / 슬래시(/)를 기준으로 경로를 분해해 봅니다.
path = "/usr/local/bin"
parts = path.split("/")
print(parts)

4. Unpacking Split / 나눈 결과를 각각의 변수에 한 번에 담을 수 있습니다.
date = "2026-01-07"
y, m, d = date.split("-")
print(y, m, d)

5. Colon Delimiter / 콜론(:) 구분자 연습입니다.
txt = "one:two:three"
print(txt.split(":"))

6. Maxsplit usage / maxsplit을 쓰면 앞에서부터 지정한 횟수만큼만 쪼갭니다.
s = "a b c d e"
print(s.split(maxsplit=2))

7. Indexing Split Result / 나눈 결과 중 첫 번째 요소(인덱스 0)만 추출합니다.
data = "root:x:0:0:root"
user_info = data.split(":")
print(user_info[0])

8. Pipe Delimiter / 파이프(|) 기호 구분자 연습입니다.
colors = "red|blue|green"
print(colors.split("|"))

9. Hashtag splitting / 해시태그(#) 기호 구분자 연습입니다.
tag = "python#coding#dev"
print(tag.split("#"))

10. Word Count / 쪼갠 단어의 총 개수를 출력해 봅니다.
msg = "Hello World From Python"
words = msg.split()
print(f"Total: {len(words)}")

11. Domain parsing / 점(.)을 기준으로 도메인 주소를 분해합니다.
url = "www.google.com"
domain = url.split(".")
print(domain)

12. Multiple whitespace / 공백이 여러 개인 에러 로그 분해 예시입니다.
logs = "ER-01 ER-02 ER-03"
list_log = logs.split()
print(list_log)

13. Extracting Last Name / 성과 이름을 나누고 마지막 요소(성)만 출력합니다.
name = "Guido van Rossum"
n = name.split()
print(n[-1])

14. Splitting Numbers / 문자열 형태의 숫자들을 쪼개 봅니다.
vals = "10 20 30"
print(vals.split())

15. Comma + Space / 콤마와 공백(, )을 통째로 구분자로 씁니다.
text = "apple, orange, grape"
print(text.split(", "))

16. Whitespace inclusive / split()은 탭이나 줄바꿈도 공백으로 간주해 쪼갭니다.
line = "tab\tspace\nnewline"
print(line.split())

17. Specific Part / 점으로 나눈 것 중 연도(두 번째 요소)만 가져옵니다.
code = "PY.2026.01"
parts = code.split(".")
print(parts[1])

18. Consecutive delimiters / 연속된 구분자가 있을 때의 결과(빈 문자열)를 확인합니다.
raw = ":::admin:::"
print(raw.split(":"))

19. Split with limit / 첫 번째 슬래시에서만 한 번 쪼갭니다.
info = "KR/Seoul/IT"
print(info.split("/", 1))

20. Final Review / [복습] 나눈 데이터를 f-string과 결합해 문장을 만듭니다.
user = "id:pw:name:age"
fields = user.split(":")
print(f"User {fields[2]} is {fields[3]} years old.")

---

Lv7. String Methods 2 (Join & Strip) / 문자열 메서드 2 (합치기 & 지우기)
Description: 쪼개진 글자들을 하나로 합치거나 불필요한 공백을 제거하는 법을 익힙니다. / Learn to join list elements into a string or remove unwanted characters/whitespace.

1. Join by Space / 리스트 요소들을 공백으로 연결해 하나의 문자열을 만듭니다.
words = ["Python", "is", "cool"]
msg = " ".join(words)
print(msg)

2. Tag Combining / 해시태그 리스트를 #으로 연결하여 출력합니다.
tags = ["dev", "python", "code"]
result = "#".join(tags)
print("#" + result)

3. Path Joining / 폴더 이름을 슬래시로 합쳐 경로를 만듭니다.
path = ["usr", "local", "bin"]
print("/".join(path))

4. Basic Strip / strip()은 문자열 양쪽의 공백을 말끔히 제거합니다.
txt = "   hello   "
print(txt.strip())

5. Strip specific char / 괄호 안에 특정 문자를 넣으면 그 문자만 제거합니다.
txt = "---Title---"
print(txt.strip("-"))

6. Solid Join / 빈 문자열("")로 join하면 모든 글자가 딱 붙어서 합쳐집니다.
chars = ["A", "B", "C"]
print("".join(chars))

7. Strip Newline / strip()은 줄바꿈 문자(\n)도 함께 지워줍니다.
data = "   data\n"
print(data.strip())

8. Date Joining / 날짜 리스트를 - 기호로 묶습니다.
date = ["2026", "01", "07"]
print("-".join(date))

9. Left Strip / lstrip()은 왼쪽(Left)에 있는 문자만 지웁니다.
msg = "///system///"
print(msg.lstrip("/"))

10. Right Strip / rstrip()은 오른쪽(Right)에 있는 문자만 지웁니다.
msg = "///system///"
print(msg.rstrip("/"))

11. Pipe Join / 숫자 문자열 리스트를 파이프로 연결합니다.
nums = ["1", "2", "3"]
print("|".join(nums))

12. Chain Stripping / 공백을 지운 뒤 대괄호까지 연속해서 지웁니다.
raw = "  [INFO]  "
print(raw.strip().strip("[]"))

13. Multi-line Join / 줄바꿈 문자(\n)로 join하면 여러 줄 텍스트가 됩니다.
lines = ["Line 1", "Line 2", "Line 3"]
print("\n".join(lines))

14. Clean & Convert / 공백을 제거하고 바로 대문자로 바꿉니다.
raw_id = "   user_123   "
print(raw_id.strip().upper())

15. Comma Join / 콤마와 공백으로 사용자 등급을 나열합니다.
lst = ["Admin", "PowerUser"]
print(", ".join(lst))

16. Exclamation Strip / 양 끝의 느낌표만 골라 지워봅니다.
txt = "!!!Danger!!!"
print(txt.strip("!"))

17. In-fstring Strip / f-string 안에서 strip 결과를 바로 보여줍니다.
color = "  BLUE  "
print(f"Color: [{color.strip()}]")

18. Genetic Sequence / DNA 염기쌍처럼 문자를 하이픈으로 잇습니다.
seq = ["T", "G", "C"]
print("-".join(seq))

19. Mixed Cleanup / 탭과 줄바꿈이 섞인 문자열을 청소합니다.
raw = "\tcontent\n"
print(raw.strip())

20. Final Review / [복습] 유저 목록을 합친 뒤 전체 대문자로 출력합니다.
user_list = ["alice", "bob", "charlie"]
final = ", ".join(user_list)
print(f"Online: {final.upper()}")

---

Lv8. Triple Quotes (Multi-line) / 삼중 따옴표 (여러 줄 문자열)
Description: 여러 줄의 텍스트를 변수에 담고 그대로 출력하는 법을 익힙니다. / Learn how to handle multi-line strings using triple quotes.

1. Multi-line Basic / 따옴표 세 개(""")를 쓰면 여러 줄 입력을 시작합니다.
doc = """Line 1
Line 2
Line 3"""
print(doc)

2. Leading/Trailing Spaces / 양 끝에 빈 줄이 포함된 멀티라인 텍스트입니다.
intro = """
Hello, Python.
How are you?
"""
print(intro)

3. ASCII Art / 간단한 별 모양 아트(ASCII Art)를 변수에 담습니다.
art = """
  *
 ***
*****
"""
print(art)

4. SQL Query / SQL 쿼리 문을 정의할 때 매우 유용합니다.
sql = """
SELECT *
FROM users
WHERE id = 1
"""
print(sql)

5. Error Logs / 여러 줄의 에러 로그를 한 번에 저장합니다.
log = """[ERR] System Crash
[ERR] Memory Leak
"""
print(log)

6. Story Blocks / 이야기의 단락을 나눌 때 사용합니다.
story = """Once upon
a time..."""
print(story)

7. Program Menu / 프로그램의 메뉴를 정의하는 예시입니다.
menu = """
1. Start
2. Option
3. Exit
"""
print(menu)

8. Quotes Inside / 삼중 따옴표 안에서는 따옴표를 이스케이프 없이 쓸 수 있습니다.
txt = """Hello "Alice"
It's yours."""
print(txt)

9. Text Box / 텍스트로 만든 박스 모양 예제입니다.
box = """
+-----+
| LOG |
+-----+
"""
print(box)

10. Embedded Code / 파이썬 코드 자체를 문자열로 담아 봅니다.
code = """
def hello():
    print("Hi")
"""
print(code)

11. Report Header / 리포트의 헤더 정보를 저장합니다.
header = """
--- HEADER ---
AUTHOR: DEV
--------------
"""
print(header)

12. Markdown Table / 간단한 마크다운 테이블을 문자열로 정의합니다.
table = """
| ID | Val |
|----|-----|
| 01 | 100 |
"""
print(table)

13. Raw HTML / HTML 태그들을 파이썬 문자열로 관리합니다.
html = """
<div>
  <h1>Title</h1>
</div>
"""
print(html)

14. Warning Sign / 주의사항을 강조하는 경고판 디자인입니다.
warn = """
################
#   WARNING!   #
################
"""
print(warn)

15. Song Lyrics / 노래 가사처럼 긴 텍스트를 담아 봅니다.
lyrics = """Twinkle twinkle
little star"""
print(lyrics)

16. Indented Block / 들여쓰기가 포함된 블록 텍스트입니다.
block = """
    Tabbed
    Content
"""
print(block)

17. Data Frame Info / 데이터프레임 구조를 텍스트로 표현합니다.
info = """
Column  Non-Null  Count
Age     50        int64
"""
print(info)

18. System Spec / 시스템 사양 정보를 멀티라인으로 적습니다.
spec = """
CPU: Core i9
RAM: 32GB
OS: Linux
"""
print(spec)

19. Vertical Banner / 세로형 배너를 만들어 봅니다.
banner = """
P
Y
T
H
O
N
"""
print(banner)

20. Final Review / [복습] 삼중 따옴표 배너를 만들고 양 끝 공백을 지워 출력합니다.
banner = """
****************
* WELCOME TO   *
* PYTHON TYPING *
****************
"""
print(banner.strip())

---

Lv9. String Slicing / 문자열 슬라이싱
Description: 문자열의 인덱스를 번호로 지정하여 원하는 부분만 잘라냅니다. / Extract specific parts of a string using index-based slicing.

1. Index Access / [0]은 첫 번째 글자, [1]은 두 번째 글자를 의미합니다.
s = "Hello"
print(s[0], s[1])

2. Basic Slicing / [0:2]는 인덱스 0번부터 2번 '전'까지(0, 1) 자릅니다.
s = "Python"
print(s[0:2])

3. Slice to End / [2:]는 2번 인덱스부터 끝까지 모두 가져옵니다.
s = "Python"
print(s[2:])

4. Slice from Start / [:2]는 처음부터 2번 전까지 가져옵니다.
s = "Python"
print(s[:2])

5. Last Character / [-1]은 문자열의 가장 마지막 글자를 가져옵니다.
s = "Python"
print(s[-1])

6. Slice from End / [-2:]는 뒤에서 두 번째 글자부터 끝까지 가져옵니다.
s = "12345"
print(s[-2:])

7. Step Slicing / [::2]는 2칸씩 띄어가며 글자를 가져옵니다.
s = "A-B-C-D"
print(s[::2])

8. Reversing String / [::-1]은 문자열을 거꾸로 뒤집습니다.
s = "Hello"
print(s[::-1])

9. Date Parsing / 연, 월, 일을 슬라이싱으로 각각 분리합니다.
id = "20260107"
print(id[:4], id[4:6], id[6:])

10. Slicing with F-string / 앞 글자 3개만 추출해 f-string으로 보여줍니다.
txt = "Programming"
print(f"Start: {txt[:3]}")

11. Middle Extraction / 문자열의 중간 부분 3글자만 뽑아 봅니다.
s = "abcdef"
print(s[2:5])

12. Reverse Part / 문자열의 일부를 거꾸로 출력해 봅니다.
s = "123456"
print(s[3:0:-1])

13. Every 3rd / 3칸 간격으로 글자를 가져옵니다.
s = "ABCDEFGHI"
print(s[::3])

14. Dynamic Length / 끝을 제외한 나머지를 가져오기 위해 음수를 씁니다.
s = "Pythonic"
print(s[:-2])

15. Last 3 chars / 마지막 3글자만 정확히 추출합니다.
s = "Levelup"
print(s[-3:])

16. Mirroring / 원본과 거꾸로 된 버전을 합쳐 봅니다.
s = "AB"
print(s + s[::-1])

17. Domain Extension / 파일 확장자 부분만 슬라이싱으로 잘라 봅니다.
file = "test.py"
print(file[-2:])

18. Skipping First / 첫 글자만 빼고 출력합니다.
s = "Typing"
print(s[1:])

19. Double reverse / 거꾸로 뒤집은 것의 앞부분을 가져옵니다.
s = "Forward"
rev = s[::-1]
print(rev[:3])

20. Final Review / [복습] split으로 나눈 것 중 중간 번호의 뒷부분만 슬라이싱합니다.
p = "PY-12345-LOG"
code, mid, tail = p.split("-")
print(mid[2:])

---

Lv10. [Challenge] Log Parser / [챌린지] 로그 데이터 파서
Description: 지금까지 배운 split, join, strip, slicing을 복합적으로 사용합니다. / Integrating split, join, strip, and slicing to parse real log data.

1. Colon Separation / 콜론으로 나눈 뒤 날짜 부분만 가져옵니다.
log = "TIMESTAMP:2026-01-07:INFO:INIT"
parts = log.split(":")
print(parts[1])

2. Strip & Split / 공백을 지우고 명령 경로 부분만 변수에 담습니다.
raw = "  CMD:/run/app  "
cmd = raw.strip().split(":")[1]
print(cmd)

3. Format Change / 콤마 구분을 파이프 구분으로 변환합니다.
info = "KR,Seoul,20C"
items = info.split(",")
print(" | ".join(items))

4. Part Extraction / ID에서 번호 부분(8801)만 잘라냅니다.
user = "ID_8801:Active"
id_part = user.split(":")[0]
print(id_part[3:])

5. Multiple Strip / 공백과 대괄호를 한꺼번에 지워 알맹이만 남깁니다.
msg = "  [SYSTEM UPDATING]  "
print(msg.strip(" []"))

6. Path File Extraction / 경로에서 마지막 파일 이름만 뽑아냅니다.
path = "/home/user/code/main.py"
filename = path.split("/")[-1]
print(filename)

7. Masking Social / 중간 번호를 별표로 가리는 마스킹 예제입니다.
data = "010-1234-5678"
parts = data.split("-")
print("****".join([parts[0], parts[2]]))

8. Name Capitalization / 이름을 쪼개서 각 단어의 첫 글자만 대문자로 만듭니다.
name = "GUIdo VAN rossum"
words = name.split()
print(words[0].capitalize(), words[2].capitalize())

9. Version Slicing / 버전 문자열에서 주 버전과 부 버전을 분리합니다.
ver = "v2.5.12"
print(f"Major: {ver[1:2]}, Minor: {ver[3:]}")

10. Partial Masking / 첫 글자 빼고 나머지를 별표 처리하는 기초 로직입니다.
raw = "    Python  "
clean = raw.strip()
print(clean[0] + "*" * (len(clean)-1))

11. User ID Masking / @ 앞부분을 일부 가려 봅니다.
email = "typing@test.com"
id = email.split("@")[0]
print(id[:2] + "***")

12. Date ISO Reformat / 2026/01/07을 2026-01-07로 바꿉니다.
d = "2026/01/07"
print("-".join(d.split("/")))

13. Tag Extractor / [TAG] 형식에서 태그명만 뽑아 대문자로 만듭니다.
raw = "  [urgent]  "
print(raw.strip(" []").upper())

14. Log Level Detection / 로그의 첫 단어가 ERROR인지 확인합니다.
line = "ERROR: Connection failed"
print(line.split(":")[0])

15. Value Sum / "10,20,30"을 나눠서 첫 정수로 바꿔 더해 봅니다.
s = "10,20,30"
v = s.split(",")
print(int(v[0]) + int(v[1]))

16. Reversed Path / 디렉토리 구조를 거꾸로 뒤집어 봅니다.
path = "usr/local/bin"
items = path.split("/")
print("/".join(items[::-1]))

17. File Extension Logic / 파일명에서 확장자를 소문자로 통일합니다.
f = "IMAGE.JPG"
ext = f.split(".")[-1]
print(ext.lower())

18. Simple CSV Row / 한 줄 데이터를 나열된 형식으로 뽑습니다.
row = "Alice,25,Seoul"
print(" | ".join(row.split(",")))

19. URL Protocol / URL에서 http 또는 https 부분만 가져옵니다.
url = "https://typingcode.com"
print(url.split("://")[0])

20. Final Review / [종합] 로그 라인을 분해하여 다시 포맷팅된 문장으로 재구성합니다.
logLine = "2026-01-07 | ERROR | Low Memory!"
parts = logLine.split(" | ")
print(f"[{parts[1]}] At {parts[0]}: {parts[2].upper()}")
