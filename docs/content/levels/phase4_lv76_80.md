# Phase 4: 함수와 프로그램 모듈화 (Lv 76 - 80) 상세 세트

---

Lv76. Math Module / 수학 모듈
Description: 파이썬 기본 제공 math 라이브러리를 사용하여 정밀하고 다양한 수학 연산을 수행합니다. / Use the built-in math module for advanced and precise mathematical calculations.

1. Ceiling / math.ceil()은 소수점을 올림하여 가장 가까운 큰 정수를 만듭니다.
import math
print(math.ceil(2.1))

2. Floor / math.floor()는 소수점을 내림하여 가장 가까운 작은 정수를 만듭니다.
import math
print(math.floor(2.9))

3. Square Root / math.sqrt()는 숫자의 제곱근(루트) 값을 구합니다.
import math
print(math.sqrt(16))

4. Power Method / math.pow()는 거듭제곱을 계산합니다 (결과는 항상 실수).
import math
print(math.pow(2, 3))

5. Pi Constant / 원주율인 파이(π) 상수를 가져올 수 있습니다.
import math
print(math.pi)

6. GCD (Greatest Common Divisor) / 두 수의 최대공약수를 구해줍니다.
import math
print(math.gcd(12, 18))

7. Factorial / 팩토리얼(5*4*3*2*1)을 계산해 줍니다.
import math
print(math.factorial(5))

8. Float Absolute / math.fabs()는 항상 실수형 절대값을 반환합니다.
import math
print(math.fabs(-10))

9. Truncate / 소수점 아래를 완전히 잘라내고 정수부만 남깁니다.
import math
print(math.trunc(3.9))

10. Specific Imports / 특정 함수와 상수를 골라 가져와 직접 호출할 수 있습니다.
from math import pi, sin
print(sin(pi/2))

11. Logarithm / 로그값을 계산합니다 (기본값 e).
import math
print(math.log(math.e))

12. Degree to Radian / 각도를 라디안으로 바꿉니다.
import math
print(math.radians(180))

13. Remainder / 실수 나머지를 구합니다.
import math
print(math.fmod(10.5, 3))

14. Hypotenuse / 직각삼각형의 빗변 길이를 구합니다.
import math
print(math.hypot(3, 4))

15. Check NaN / 숫자가 아닌 값(Not a Number)인지 확인합니다.
import math
print(math.isnan(math.nan))

16. Exponential / e의 x승을 구합니다.
import math
print(math.exp(1))

17. Sum precision / 여러 실수를 더할 때 정밀도를 유지합니다.
import math
print(math.fsum([0.1]*10))

18. Infinite check / 무한대 값인지 확인합니다.
import math
print(math.isinf(math.inf))

19. LCM (Least Common Multiple) / 최소공배수를 구합니다.
import math
print(math.lcm(4, 6))

20. Final Review / [복습] 반지름 정보를 이용해 원의 넓이를 정밀하게 계산합니다.
import math
r = 5
a = math.pi * math.pow(r, 2)
print(f"Area: {a:.2f}")

---

Lv77. Random Module / 랜덤 모듈
Description: 무작위 숫자를 생성하거나 목록에서 임의로 선택하는 기능 등을 익힙니다. / Use the random module to generate random numbers and make random selections.

1. Random Float / 0.0 이상 1.0 미만 사이의 임의의 실수를 생성합니다.
import random
print(random.random())

2. Random Integer / 1부터 10 사이(양 끝 포함)의 정수를 무작위로 하나 뽑습니다.
import random
print(random.randint(1, 10))

3. Choice from List / 목록(리스트) 중 하나를 임의로 골라줍니다.
import random
items = ["A", "B", "C"]
print(random.choice(items))

4. Shuffle List / 리스트의 순서를 무작위로 섞어버립니다 (원본 변형).
import random
lst = [1, 2, 3]
random.shuffle(lst)
print(lst)

5. Uniform Range / 특정 범위 사이의 임의의 실수를 생성합니다.
import random
print(random.uniform(1.5, 2.5))

6. Random Range / 스텝(2)을 고려하여 범위 내 무작위 수를 뽑습니다.
import random
print(random.randrange(0, 10, 2))

7. Random Sample / 리스트에서 중복 없이 지정한 개수(2개)만큼 무작위로 추출합니다.
import random
n = [1, 2, 3, 4]
print(random.sample(n, 2))

8. Dice Roll Function / 주사위 굴리기 기능을 함수로 만들어 봅니다.
import random
def dice(): return random.randint(1, 6)
print(dice())

9. Random Seed / 시드(Seed)를 고정하면 매번 똑같은 '무작위' 시퀀스가 생성됩니다.
import random
random.seed(42)
print(random.random())

10. Probabilistic Boolean / 랜덤 확률(50%)을 이용해 동전 던지기 로직을 만듭니다.
import random
if random.random() > 0.5: print("Head")
else: print("Tail")

11. Choose multiple with replacement / 중복을 허용하여 여러 개를 뽑습니다.
import random
items = ["R", "G", "B"]
print(random.choices(items, k=5))

12. Normal distribution / 정규 분포에 따른 난수를 생성합니다 (맛보기).
import random
print(random.gauss(0, 1))

13. Random character from string / 문자열에서 한 글자를 랜덤하게 뽑습니다.
import random
s = "PYTHON"
print(random.choice(s))

14. Random boolean / 참/거짓을 랜덤하게 결정합니다.
import random
print(random.choice([True, False]))

15. Shuffling string / 문자열을 섞으려면 리스트로 바꿔서 섞어야 합니다.
import random
s = list("ABCD")
random.shuffle(s)
print("".join(s))

16. Random item exclusion / 하나를 제외하고 나머지 중 랜덤하게 뽑습니다.
import random
lst = [1, 2, 3]
lst.remove(1)
print(random.choice(lst))

17. Sample with list length / 리스트 전체를 무작위 순서의 새로운 리스트로 뽑습니다.
import random
n = [1, 2, 3]
print(random.sample(n, len(n)))

18. Binary choice weights / 가중치를 주어 확률을 조절합니다 (맛보기).
import random
print(random.choices(["A", "B"], weights=[9, 1]))

19. Clearing seed / 시드 영향을 없애려면 시스템 시간을 다시 사용하도록 재설정됩니다 (기본동작).
import random
# random.seed(None)
print("Seeding affects reproducibility")

20. Final Review / [복습] 유저 목록 중 한 명을 무작위로 추첨하여 발표합니다.
import random
ids = ["u1", "u2", "u3"]
winner = random.choice(ids)
print(f"Winner: {winner.upper()}")

---

Lv78. Datetime Module / 날짜와 시간
Description: 현재 날짜와 시각을 확인하고 원하는 형식으로 출력하는 법을 익힙니다. / Learn how to handle dates and times using the datetime module.

1. Today's Date / 오늘 날짜(년-월-일) 정보만 가져옵니다.
from datetime import date
print(date.today())

2. Current Now / 현재 날짜와 시각을 마이크로초 단위까지 정밀하게 가져옵니다.
from datetime import datetime
print(datetime.now())

3. Date Parts / 년, 월, 일을 각각 숫자로 추출할 수 있습니다.
from datetime import datetime
now = datetime.now()
print(now.year, now.month, now.day)

4. Time Formatting / strftime을 사용해 날짜를 원하는 모양의 문자열로 바꿉니다.
from datetime import datetime
now = datetime.now()
print(now.strftime("%Y/%m/%d"))

5. HMS Format / 시:분:초 형식으로 시각을 포맷팅합니다.
from datetime import datetime
print(datetime.now().strftime("%H:%M:%S"))

6. Time Delta / timedelta를 사용해 하루 뒤 등의 날짜 계산을 수행합니다.
from datetime import datetime, timedelta
tomorrow = datetime.now() + timedelta(days=1)
print(tomorrow.date())

7. Manual Date / 특정 날짜와 시각 객체를 직접 생성합니다.
from datetime import datetime
d = datetime(2026, 1, 1, 12, 0)
print(d)

8. Wait (Sleep) / time.sleep()은 실행을 지정한 초만큼 잠시 멈춥니다.
import time
print("Wait...")
time.sleep(0.1)
print("Done")

9. Date Difference / 날짜 객체끼리 빼서 기간(D-Day)을 구할 수 있습니다.
from datetime import date
d1 = date(2026, 1, 1)
d2 = date(2026, 1, 7)
print(f"Diff: {d2 - d1}")

10. Weekday Index / 요일을 숫자로 알 수 있습니다 (0:월요일, ... 6:일요일).
from datetime import datetime
print(datetime.now().weekday())

11. From Timestamp / 유닉스 타임스탬프를 날짜로 바꿉니다.
from datetime import datetime
print(datetime.fromtimestamp(0))

12. Date to ISO / 표준 ISO 형식 문자열로 바꿉니다.
from datetime import date
print(date.today().isoformat())

13. Comparing Dates / 날짜끼리 크기 비교를 합니다.
from datetime import date
print(date(2026,1,1) < date(2026,1,2))

14. UTC Now / 협정 세계시(UTC) 기준 시간을 가져옵니다.
from datetime import datetime
print(datetime.utcnow())

15. AM/PM conversion / 오전 오후 표시를 포함해 출력합니다.
from datetime import datetime
print(datetime.now().strftime("%p %I시"))

16. Month Name / 월 이름을 영문으로 출력합니다.
from datetime import datetime
print(datetime.now().strftime("%B"))

17. Replace parts / 연도는 그대로 두고 날짜만 바꿉니다.
from datetime import datetime
now = datetime.now()
print(now.replace(day=1))

18. Parse from string / 문자열을 날짜 객체로 읽어옵니다 (맛보기).
from datetime import datetime
dt = datetime.strptime("2026-01-01", "%Y-%m-%d")
print(dt)

19. Seconds elapsed / 타임스탬프 자체를 숫자로 찍습니다.
import time
print(int(time.time()))

20. Final Review / [복습] 오전/오후와 12시간제 형식을 사용하여 로그용 타임스탬프를 만듭니다.
from datetime import datetime
s = datetime.now().strftime("[%p %I:%M]")
print(f"LOG AT {s}")

---

Lv79. JSON Data / JSON 데이터 처리
Description: 텍스트 형식의 JSON 데이터를 파이썬 객체로 바꾸거나 그 반대의 과정을 익힙니다. / Learn how to encode and decode JSON data in Python.

1. Dict to JSON / 딕셔너리를 JSON 형식의 문자열로 변환(Serialize)합니다.
import json
d = {"id": 1, "ok": True}
s = json.dumps(d)
print(s)

2. JSON to Dict / JSON 문자열을 파이썬 딕셔너리로 변환(Deserialize)합니다.
import json
s = '{"name": "Alice", "age": 25}'
d = json.loads(s)
print(d["name"])

3. Pretty Print JSON / indent 옵션을 주면 읽기 편하게 들여쓰기 된 JSON을 만듭니다.
import json
d = {"A": 1, "B": 2}
print(json.dumps(d, indent=4))

4. List to JSON / 리스트 데이터도 JSON 배열 형식으로 변환할 수 있습니다.
import json
lst = [1, 2, "Hi"]
print(json.dumps(lst))

5. Handle Unicode / 한글이 깨지지 않게 하려면 ensure_ascii=False를 써야 합니다.
import json
d = {"title": "안녕하세요"}
print(json.dumps(d, ensure_ascii=False))

6. Access JSON Array / JSON 내부의 배열 데이터를 리스트로 받아 길이를 잽니다.
import json
data = '{"items": ["p1", "p2"]}'
d = json.loads(data)
print(len(d["items"]))

7. Save to File / 데이터를 파일로 직접 저장할 때는 dump() (뒤에 s 없음)를 씁니다.
import json
d = {"id": "ant"}
# with open("data.json", "w") as f: json.dump(d, f)
print("dump() writes to file stream")

8. JSON Decode Error / 잘못된 형식의 JSON은 변환 시 에러가 발생하므로 주의해야 합니다.
import json
# json.loads("{invalid}") # Error
print("Catch errors with try-except when parsing JSON")

9. None to Null / 파이썬의 None은 JSON에서 null로 자동 변환됩니다.
import json
info = {"val": None}
print(json.dumps(info))

10. Bool Conversion / JSON의 소문자 true는 파이썬의 대문자 True로 바뀝니다.
import json
raw = '{"active": true}'
print(json.loads(raw)["active"])

11. Numeric strings / JSON 문자열 내의 숫자도 파이썬 정수로 잘 바뀝니다.
import json
s = '{"v": 100}'
print(json.loads(s)["v"] + 1)

12. Nested JSON objects / 복잡한 중첩 구조 파이싱입니다.
import json
s = '{"u": {"id": 1}}'
print(json.loads(s)["u"]["id"])

13. Keys must be strings / JSON에서 모든 키는 문자열 타입으로 따옴표가 붙습니다.
import json
d = {1: "one"}
print(json.dumps(d)) # "1": "one"

14. Sorting keys / JSON 출력 시 키를 알파벳 순으로 정렬합니다.
import json
d = {"c": 3, "a": 1}
print(json.dumps(d, sort_keys=True))

15. Loading from file / 파일에서 직접 읽어올 때는 load()를 씁니다.
import json
# with open("a.json") as f: d = json.load(f)
print("load() reads from file stream")

16. List of dicts to JSON / 복합 리스트 구조를 변환합니다.
import json
data = [{"id": 1}, {"id": 2}]
print(json.dumps(data))

17. Checking type after load / loads한 결과가 딕셔너리인지 확인합니다.
import json
d = json.loads('{"a": 1}')
print(type(d))

18. Empty JSON / 빈 객체와 빈 배열 처리입니다.
import json
print(json.dumps({}))
print(json.loads('[]'))

19. Multiple JSON lines / 여러 줄로 된 JSON 문자열입니다.
import json
s = """{
  "ok": true
}"""
print(json.loads(s)["ok"])

20. Final Review / [복습] 객체를 JSON으로 보냈다가 다시 받아와서 내부 데이터를 조회합니다.
import json
user = {"id": 101, "tags": ["py", "dev"]}
s = json.dumps(user)
new_u = json.loads(s)
print(f"ID: {new_u['id']}, TAG: {new_u['tags'][0]}")

---

Lv80. [Challenge] Toolkit / [챌린지] 유틸리티 툴킷
Description: [챌린지] 지금까지 배운 math, random, datetime, json 모듈을 결합하여 복합 기능을 구현합니다. / Integrating standard library modules for a versatile utility toolkit.

1. Random Floor / 랜덤 실수를 생성한 뒤 소수점 제어와 내림 연산을 수행합니다.
import random, math
val = random.uniform(1, 10)
print(f"Val: {val:.2f}, Floor: {math.floor(val)}")

2. Timed Selection / 무작위 추첨 결과 앞에 현재 시각 타임스탬프를 붙입니다.
from datetime import datetime
import random
ids = ["A", "B"]
print(f"[{datetime.now().strftime('%H:%M')}] Pick: {random.choice(ids)}")

3. JSON Geometry / JSON으로 받은 반지름 정보를 수치화하여 원의 넓이를 구합니다.
import json, math
data = '{"radius": 10}'
r = json.loads(data)["radius"]
print(f"Area: {math.pi * r**2:.1f}")

4. Lotto Generator / 1~45 중 6개를 무작위로 뽑아 정렬해 보여주는 로또 번호 생성기입니다.
import random
lotto = random.sample(range(1, 46), 6)
print(f"Lotto: {sorted(lotto)}")

5. Benchmark Sleep / 작업 시간을 측정하고 올림 처리하여 초 단위로 보여줍니다.
import time, math
start = time.time()
time.sleep(0.1)
diff = time.time() - start
print(f"Elapsed: {math.ceil(diff)}s")

6. Pretty Config / 유저 접속 정보를 들여쓰기 된 JSON 텍스트로 예쁘게 출력합니다.
import json
user = {"name": "Admin", "login": "2026-01-07"}
s = json.dumps(user, indent=2)
print("Saving...\n" + s)

7. Word Shuffler / 문자열의 철자 순서를 무작위로 뒤섞는(Anagram) 로직입니다.
import random
msg = "PYTHON"
lst = list(msg)
random.shuffle(lst)
print("".join(lst))

8. Casted Sqrt / 제곱근을 구한 뒤 정수형으로 깔끔하게 보여줍니다.
import math
print(f"Sqrt of 100 is {int(math.sqrt(100))}")

9. Monthly Progress / 현재 월 정보를 이용해 연간 진행률을 간단히 표시합니다.
from datetime import datetime
dt = datetime.now()
print(f"Yearly Progress: {dt.month}/12")

10. Quick Dice / 주사위를 굴려 나오는 숫자를 무작위로 출력합니다.
import random
print(f"Rolling... {random.randint(1, 6)}")

11. Unique visitor count sim / 랜덤 로그를 셋에 담아 중복을 제거합니다.
import random
logs = [random.randint(1, 5) for _ in range(10)]
print(f"Unique Visitors: {len(set(logs))}")

12. JSON timestamp injection / 딕셔너리에 시간 정보를 넣고 JSON화 합니다.
import json, time
d = {"msg": "OK", "at": int(time.time())}
print(json.dumps(d))

13. Hypot and round / 빗변을 구하고 반올림합니다.
import math
print(round(math.hypot(3, 3), 2))

14. Days until year end / 올해가 며칠 남았는지 계산합니다 (맛보기).
from datetime import date
rem = date(2026, 12, 31) - date.today()
print(f"Days left: {rem.days}")

15. Sample from JSON list / JSON에서 리스트를 꺼내 샘플링합니다.
import json, random
s = '{"ids": [1, 2, 3, 4, 5]}'
d = json.loads(s)
print(random.sample(d["ids"], 3))

16. Exponential log / 지수값을 구하고 다시 로그를 씌웁니다.
import math
v = math.exp(2)
print(math.log(v))

17. Wait notification / 일정 시간 대기 후 메시지를 보냅니다.
import time
time.sleep(0.01)
print("Session Synced")

18. Random hex color / 랜덤한 색상 코드 하나를 생성합니다 (맛보기).
import random
c = "".join(random.choices("ABCDEF0123456789", k=6))
print(f"#{c}")

19. Factorial and formatting / 큰 숫자를 콤마 구분해서 출력합니다.
import math
v = math.factorial(10)
print(f"{v:,}")

20. Final Review / [종합] JSON 데이터 리스트 중 하나를 임의로 골라 반올림 처리하여 출력합니다.
import json, random
items = '{"data": [10.5, 20.7, 30.1]}'
vals = json.loads(items)["data"]
v = random.choice(vals)
print(f"Choice: {v} -> Round: {round(v)}")
