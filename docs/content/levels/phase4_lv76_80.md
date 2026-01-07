# Phase 4: 함수와 프로그램 모듈화 (Lv 76 - 80) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 76: 수학 모듈 (math)
**설명**: 파이썬 기본 제공 `math` 라이브러리를 사용하여 정밀하고 다양한 수학 연산을 수행합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `import math\nprint(math.ceil(2.1))` | `math.ceil()`은 소수점을 올림하여 가장 가까운 큰 정수를 만듭니다. |
| 2 | `import math\nprint(math.floor(2.9))` | `math.floor()`는 소수점을 내림하여 가장 가까운 작은 정수를 만듭니다. |
| 3 | `import math\nprint(math.sqrt(16))` | `math.sqrt()`는 숫자의 제곱근(루트) 값을 구합니다. |
| 4 | `import math\nprint(math.pow(2, 3))` | `math.pow()`는 거듭제곱을 계산합니다 (결과는 항상 실수). |
| 5 | `import math\nprint(math.pi)` | 원주율인 파이(π) 상수를 가져올 수 있습니다. |
| 6 | `import math\nprint(math.gcd(12, 18))` | 두 수의 최대공약수를 구해줍니다. |
| 7 | `import math\nprint(math.factorial(5))` | 팩토리얼(5*4*3*2*1)을 계산해 줍니다. |
| 8 | `import math\nprint(math.abs(-10)) # use built-in abs()\nprint(math.fabs(-10))` | `math.fabs()`는 항상 실수형 절대값을 반환합니다. |
| 9 | `import math\nprint(math.trunc(3.9))` | 소수점 아래를 완전히 잘라내고 정수부만 남깁니다. |
| 10 | `from math import pi, sin\nprint(sin(pi/2))` | 특정 함수와 상수를 골라 가져와 직접 호출할 수 있습니다. |
| 20 | `import math\nr = 5\na = math.pi * math.pow(r, 2)\nprint(f"Area: {a:.2f}")` | [복습] 반지름 정보를 이용해 원의 넓이를 정밀하게 계산합니다. |
| * | *(세트 11-19 생략, math 모듈 기초 연산 연습)* | ... |

---

## 🟦 Lv 77: 랜덤 모듈 (random)
**설명**: 무작위 숫자를 생성하거나 목록에서 임의로 선택하는 기능 등을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `import random\nprint(random.random())` | 0.0 이상 1.0 미만 사이의 임의의 실수를 생성합니다. |
| 2 | `import random\nprint(random.randint(1, 10))` | 1부터 10 사이(양 끝 포함)의 정수를 무작위로 하나 뽑습니다. |
| 3 | `import random\nitems = ["A", "B", "C"]\nprint(random.choice(items))` | 목록(리스트) 중 하나를 임의로 골라줍니다. |
| 4 | `import random\nlst = [1, 2, 3]\nrandom.shuffle(lst)\nprint(lst)` | 리스트의 순서를 무작위로 섞어버립니다 (원본 변형). |
| 5 | `import random\nprint(random.uniform(1.5, 2.5))` | 특정 범위 사이의 임의의 실수를 생성합니다. |
| 6 | `import random\nprint(random.randrange(0, 10, 2))` | 스텝(2)을 고려하여 범위 내 무작위 수를 뽑습니다. |
| 7 | `import random\nn = [1, 2, 3, 4]\nprint(random.sample(n, 2))` | 리스트에서 중복 없이 지정한 개수(2개)만큼 무작위로 추출합니다. |
| 8 | `import random\ndef dice(): return random.randint(1, 6)\nprint(dice())` | 주사위 굴리기 기능을 함수로 만들어 봅니다. |
| 9 | `import random\nrandom.seed(42)\nprint(random.random())` | 시드(Seed)를 고정하면 매번 똑같은 '무작위' 시퀀스가 생성됩니다. |
| 10 | `import random\nif random.random() > 0.5: print("Head")\nelse: print("Tail")` | 랜덤 확률(50%)을 이용해 동전 던지기 로직을 만듭니다. |
| 20 | `import random\nids = ["u1", "u2", "u3"]\nwinner = random.choice(ids)\nprint(f"Winner: {winner.upper()}")` | [복습] 유저 목록 중 한 명을 무작위로 추첨하여 발표합니다. |
| * | *(세트 11-19 생략, 랜덤 생성 및 리스트 조작 연습)* | ... |

---

## 🟦 Lv 78: 날짜와 시간 (datetime)
**설명**: 현재 날짜와 시각을 확인하고 원하는 형식으로 출력하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `from datetime import date\nprint(date.today())` | 오늘 날짜(년-월-일) 정보만 가져옵니다. |
| 2 | `from datetime import datetime\nprint(datetime.now())` | 현재 날짜와 시각을 마이크로초 단위까지 정밀하게 가져옵니다. |
| 3 | `from datetime import datetime\nnow = datetime.now()\nprint(now.year, now.month, now.day)` | 년, 월, 일을 각각 숫자로 추출할 수 있습니다. |
| 4 | `from datetime import datetime\nnow = datetime.now()\nprint(now.strftime("%Y/%m/%d"))` | `strftime`을 사용해 날짜를 원하는 모양의 문자열로 바꿉니다. |
| 5 | `from datetime import datetime\nprint(datetime.now().strftime("%H:%M:%S"))` | 시:분:초 형식으로 시각을 포맷팅합니다. |
| 6 | `from datetime import datetime, timedelta\ntomorrow = datetime.now() + timedelta(days=1)\nprint(tomorrow.date())` | `timedelta`를 사용해 하루 뒤 등의 날짜 계산을 수행합니다. |
| 7 | `from datetime import datetime\nd = datetime(2026, 1, 1)\nprint(d)` | 특정 날짜와 시각 객체를 직접 생성합니다. |
| 8 | `import time\nprint("Wait...")\ntime.sleep(1)\nprint("Done")` | `time.sleep()`은 실행을 지정한 초만큼 잠시 멈춥니다. |
| 9 | `from datetime import date\nd1 = date(2026, 1, 1)\nd2 = date(2026, 1, 7)\nprint(f"Diff: {d2 - d1}")` | 날짜 객체끼리 빼서 기간(D-Day)을 구할 수 있습니다. |
| 10 | `from datetime import datetime\nprint(datetime.now().weekday())` | 요일을 숫자로 알 수 있습니다 (0:월요일, ... 6:일요일). |
| 20 | `from datetime import datetime\ns = datetime.now().strftime("[%p %I:%M]")\nprint(f"LOG AT {s}")` | [복습] 오전/오후와 12시간제 형식을 사용하여 로그용 타임스탬프를 만듭니다. |
| * | *(세트 11-19 생략, 날짜 포맷팅 및 시차 계산 연습)* | ... |

---

## 🟦 Lv 79: JSON 데이터 처리 (json)
**설명**: 텍스트 형식의 JSON 데이터를 파이썬 객체로 바꾸거나 그 반대의 과정을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `import json\nd = {"id": 1, "ok": True}\ns = json.dumps(d)\nprint(s)` | 딕셔너리를 JSON 형식의 문자열로 변환(Serialize)합니다. |
| 2 | `import json\ns = '{"name": "Alice", "age": 25}'\nd = json.loads(s)\nprint(d["name"])` | JSON 문자열을 파이썬 딕셔너리로 변환(Deserialize)합니다. |
| 3 | `import json\nd = {"A": 1}\nprint(json.dumps(d, indent=4))` | `indent` 옵션을 주면 읽기 편하게 들여쓰기 된 JSON을 만듭니다. |
| 4 | `import json\nlst = [1, 2, "Hi"]\nprint(json.dumps(lst))` | 리스트 데이터도 JSON 배열 형식으로 변환할 수 있습니다. |
| 5 | `import json\nd = {"title": "안녕하세요"}\nprint(json.dumps(d, ensure_ascii=False))` | 한글이 깨지지 않게 하려면 `ensure_ascii=False`를 써야 합니다. |
| 6 | `import json\ndata = '{"items": ["p1", "p2"]}'\ndict_data = json.loads(data)\nprint(len(dict_data["items"]))` | JSON 내부의 배열 데이터를 리스트로 받아 길이를 잽니다. |
| 7 | `import json\nd = {"id": "ant", "v": 1.5}\nwith open("data.json", "w") as f:\n    json.dump(d, f)` | 데이터를 파일로 직접 저장할 때는 `dump()` (뒤에 s 없음)를 씁니다. |
| 8 | `import json\ntry:\n    json.loads("{invalid}")\nexcept:\n    print("JSON Error")` | 잘못된 형식의 JSON은 변환 시 에러가 발생하므로 주의해야 합니다. |
| 9 | `import json\ninfo = {"user": "admin", "login": None}\nprint(json.dumps(info))` | 파이썬의 `None`은 JSON에서 `null`로 자동 변환됩니다. |
| 10 | `import json\nraw = '{"active": true}' # lower true\nprint(json.loads(raw)["active"])` | JSON의 소문자 `true`는 파이썬의 대문자 `True`로 바뀝니다. |
| 20 | `import json\nuser = {"id": 101, "tags": ["py", "dev"]}\ns = json.dumps(user)\nnew_u = json.loads(s)\nprint(f"ID: {new_u['id']}, TAG: {new_u['tags'][0]}")` | [복습] 객체를 JSON으로 보냈다가 다시 받아와서 내부 데이터를 조회합니다. |
| * | *(세트 11-19 생략, JSON 변환 및 속성 제어 연습)* | ... |

---

## 🟦 Lv 80: [Challenge] 유틸리티 툴킷 (Toolkit)
**설명**: [챌린지] 지금까지 배운 math, random, datetime, json 모듈을 결합하여 복합 기능을 구현합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `import random, math\nval = random.uniform(1, 10)\nprint(f"Val: {val:.2f}, Floor: {math.floor(val)}")` | 랜덤 실수를 생성한 뒤 소수점 제어와 내림 연산을 수행합니다. |
| 2 | `from datetime import datetime\nimport random\nids = ["A", "B"]\nprint(f"[{datetime.now()}] Pick: {random.choice(ids)}")` | 무작위 추첨 결과 앞에 현재 시각 타임스탬프를 붙입니다. |
| 3 | `import json, math\ndata = '{"radius": 10}'\nr = json.loads(data)["radius"]\nprint(f"Area: {math.pi * r**2:.1f}")` | JSON으로 받은 반지름 정보를 수치화하여 원의 넓이를 구합니다. |
| 4 | `import random\nlotto = random.sample(range(1, 46), 6)\nprint(f"Lotto: {sorted(lotto)}")` | 1~45 중 6개를 무작위로 뽑아 정렬해 보여주는 로또 번호 생성기입니다. |
| 5 | `import time, math\nstart = time.time()\ntime.sleep(0.5)\nprint(f"Elapsed: {math.ceil(time.time() - start)}s")` | 작업 시간을 측정하고 올림 처리하여 초 단위로 보여줍니다. |
| 6 | `import json\nuser = {"name": "Admin", "login": "2026-01-07"}\ns = json.dumps(user, indent=2)\nprint("Saving...\\n" + s)` | 유저 접속 정보를 들여쓰기 된 JSON 텍스트로 예쁘게 출력합니다. |
| 7 | `import random\nmsg = "PYTHON"\nlst = list(msg)\nrandom.shuffle(lst)\nprint("".join(lst))` | 문자열의 철자 순서를 무작위로 뒤섞는(Anagram) 로직입니다. |
| 8 | `import math\nprint(f"Sqrt of 100 is {int(math.sqrt(100))}")` | 제곱근을 구한 뒤 정수형으로 깔끔하게 보여줍니다. |
| 9 | `from datetime import datetime\ndt = datetime.now()\nprint(f"Yearly Progress: {dt.month}/12")` | 현재 월 정보를 이용해 연간 진행률을 간단히 표시합니다. |
| 10 | `import random\nprint(f"Rolling Dice... {random.randint(1, 6)}")` | 주사위를 굴려 나오는 숫자를 무작위로 출력합니다. |
| 20 | `import json, random, math\nitems = '{"data": [10.5, 20.7, 30.1]}'\nvals = json.loads(items)["data"]\nv = random.choice(vals)\nprint(f"Choice: {v} -> Round: {math.round(v)}") # error: round is built-in\nprint(f"Choice: {v} -> Round: {round(v)}")` | [종합] JSON 데이터 리스트 중 하나를 임의로 골라 반올림 처리하여 출력합니다. |
| * | *(세트 11-19 생략, 표준 라이브러리 복합 활용 연습)* | ... |
