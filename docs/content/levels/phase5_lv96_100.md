# Phase 5: 객체지향 및 고급 문법 (Lv 96 - 100) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 96: 제너레이터와 이터레이터 (yield)
**설명**: 방대한 데이터를 한꺼번에 메모리에 올리지 않고, 필요할 때마다 하나씩 생성(yield)하여 사용하는 효율적인 기법을 익립리다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g))\nprint(next(g))` | `yield`를 사용하면 함수가 실행 중에 값을 반환하고 그 자리에 멈춰있다가 다시 호출되면 이어집니다. |
| 2 | `def count_to_3():\n    for i in range(1, 4): yield i\nfor n in count_to_3():\n    print(n)` | 제너레이터 함수는 `for` 문에 넣어 리스트처럼 순회할 수 있습니다. |
| 3 | `g = (i**2 for i in range(3))\nprint(next(g))\nprint(next(g))` | 소괄호`()`를 사용하면 한 줄 요약 형태의 제너레이터 표현식을 만들 수 있습니다. |
| 4 | `def infinite():\n    n = 1\n    while True:\n        yield n\n        n += 1\ng = infinite()\nprint(next(g))` | 제너레이터를 사용하면 무한히 숫자를 만들어내는 수열도 메모리 걱정 없이 구현 가능합니다. |
| 5 | `def msg():\n    yield "Hello"\n    yield "World"\nprint("-".join(msg()))` | 제너레이터의 결과를 `join()`과 같은 함수에 바로 전달할 수 있습니다. |
| 6 | `def even(n):\n    for i in range(n):\n        if i % 2 == 0: yield i\nprint(list(even(10)))` | 특정 조건에 맞는 데이터만 생생하도록 제너레이터를 설계합니다. |
| 7 | `it = iter([1, 2, 3])\nprint(next(it))` | `iter()` 함수로 리스트를 이터레이터 객체로 바꾼 뒤 `next()`를 쓸 수 있습니다. |
| 8 | `def steps():\n    print("S1")\n    yield 1\n    print("S2")\n    yield 2\ng = steps(); next(g)` | `yield` 사이사이에 실행 코드를 넣어 진행 상황을 제어할 수 있습니다. |
| 9 | `def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\nprint(list(fib(5)))` | 피보나치 수열처럼 앞의 계산이 필요한 시퀀스를 제너레이터로 우아하게 만듭니다. |
| 10 | `g = (c.upper() for c in "Py")\nfor s in g: print(s)` | 문자열을 한 글자씩 대문자로 생성하는 제너레이터 표현식입니다. |
| 20 | `def log_gen(lst):\n    for l in lst: yield f"[LOG] {l}"\nfor log in log_gen(["A", "B"]): print(log)` | [복습] 리스트의 내용 앞에 로그 태그를 붙여서 하나씩 내보내는 제너레이터입니다. |
| * | *(세트 11-19 생략, 제너레이터 생성 및 조작 연습)* | ... |

---

## 🟦 Lv 97: 데코레이터 기초 (Decorators)
**설명**: 기존 함수의 코드를 직접 수정하지 않고, 전후에 공통 기능을 덧붙여 기능을 확장하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def deco(fn):\n    def wrap():\n        print("Start")\n        fn()\n    return wrap\n@deco\ndef test(): print("Fn")\ntest()` | `@deco`를 함수 위에 붙이면 `test()` 실행 전후에 추가 작업이 수행됩니다. |
| 2 | `def bold(fn):\n    return lambda: f"**{fn()}**"\n@bold\ndef msg(): return "Hi"\nprint(msg())` | 람다와 결합하여 함수의 반환값에 장식을 입히는 데코레이터 예시입니다. |
| 3 | `def check(fn):\n    def wrap(a, b):\n        print(f"Args: {a}, {b}")\n        return fn(a, b)\n    return wrap\n@check\ndef add(a, b): return a + b\nadd(10, 20)` | 인자가 있는 함수에도 데코레이터를 적용할 수 있습니다. (전달 인자 유지) |
| 4 | `def multi(n):\n    def deco(fn):\n        return lambda: fn() * n\n    return deco\n@multi(3)\ndef get_v(): return 10\nprint(get_v())` | 데코레이터 자체에 인자(`3`)를 전달하여 동작을 조절할 수 있습니다. |
| 5 | `def timer(fn):\n    import time\n    def wrap():\n        t = time.time(); fn(); print(time.time()-t)\n    return wrap\n@timer\ndef run(): pass\nrun()` | 함수의 실행 시간을 측정해주는 아주 대표적인 데코레이터 활용 사례입니다. |
| 6 | `def p_tag(fn):\n    return lambda x: f"<p>{fn(x)}</p>"\n@p_tag\ndef text(s): return s\nprint(text("Hello"))` | 텍스트를 HTML 태그로 감싸주는 기능을 데코레이터로 분리합니다. |
| 7 | `def debug(fn):\n    def wrap(*args, **kwargs):\n        print(f"Call: {fn.__name__}")\n        return fn(*args, **kwargs)\n    return wrap\n@debug\ndef go(x): pass\ngo(1)` | 어떤 함수가 호출되는지 이름을 찍어주는 디버깅용 데코레이터입니다. |
| 8 | `def admin_only(fn):\n    def wrap(user):\n        if user != "admin": return "Deny"\n        return fn(user)\n    return wrap\n@admin_only\ndef secret(u): return "PASS"\nprint(secret("guest"))` | 권한에 따라 함수 실행 여부를 결정하는 필터링 데코레이터입니다. |
| 9 | `def star_deco(fn):\n    def wrap():\n        print("*" * 5)\n        fn()\n    return wrap\n@star_deco\ndef hi(): print("Hi")\nhi()` | 함수가 실행되기 전에 별표 장식을 매번 그려주는 보조 기능입니다. |
| 10 | `def up_deco(fn):\n    return lambda s: fn(s).upper()\n@up_deco\ndef greet(n): return f"hi {n}"\nprint(greet("alice"))` | 함수의 문자열 반환 결과를 강제로 대문자로 바꾸는 변환 데코레이터입니다. |
| 20 | `def log_it(f):\n    def w(*a): print(f"Run {f.__name__}"); return f(*a)\n    return w\n@log_it\ndef add(a, b): return a+b\nprint(add(1,2))` | [복습] 함수가 실행될 때마다 함수 이름을 기록하고 정상적으로 계산 결과를 반환합니다. |
| * | *(세트 11-19 생략, 함수 확장 및 데코레이터 패턴 연습)* | ... |

---

## 🟦 Lv 98: 컨텍스트 매니저 (with)
**설명**: 파일 열기나 데이터베이스 연결처럼 사용 후 반드시 자원을 정리해야 하는 작업을 안전하게 처리하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `with open("test.txt", "w") as f:\n    f.write("Hello")` | `with` 문을 쓰면 블록이 끝날 때 파일이 자동으로 닫혀(close) 안전합니다. |
| 2 | `with open("test.txt", "r") as f:\n    print(f.read())` | 읽기 모드로 파일을 열고 내용을 끝까지 읽어들입니다. |
| 3 | `class Tool:\n    def __enter__(self): print("Start"); return self\n    def __exit__(self, a, b, c): print("End")\nwith Tool() as t: print("Running")` | 클래스에 `__enter__`, `__exit__`을 구현하면 직접 `with`를 쓸 수 있습니다. |
| 4 | `from contextlib import contextmanager\n@contextmanager\ndef temp():\n    print("In"); yield; print("Out")\nwith temp(): print("Work")` | 데코레이터를 이용해 간편하게 나만의 `with` 동작을 설계할 수 있습니다. |
| 5 | `with open("log.txt", "a") as f:\n    f.write("New Log\\n")` | 'a' (append) 모드로 열면 기존 파일 뒤에 내용을 덧붙입니다. |
| 6 | `with open("n.txt", "w") as f:\n    lines = ["A\\n", "B\\n"]\n    f.writelines(lines)` | 리스트에 든 여러 줄의 문장을 파일에 한꺼번에 기록합니다. |
| 7 | `try:\n    with open("none.txt", "r") as f: pass\nexcept:\n    print("Fail")` | `with` 문도 에러가 날 수 있으므로 `try-except`로 감쌀 수 있습니다. |
| 8 | `with open("a.txt", "w") as f1, open("b.txt", "w") as f2:\n    f1.write("A"); f2.write("B")` | 여러 개의 자원(파일)을 한 줄의 `with`에서 동시에 관리할 수 있습니다. |
| 9 | `with open("data.bin", "wb") as f:\n    f.write(b"\\x00\\x01")` | 'wb' (write binary) 모드로 바이너리 데이터를 기록합니다. |
| 10 | `import os\nwith open("t.txt", "w") as f: f.write("O")\nprint(os.path.exists("t.txt"))` | 파일을 생성한 뒤, `os` 모듈로 실제 파일이 존재하는지 확인해 봅니다. |
| 20 | `txt = "Typing Code"\nwith open("msg.txt", "w") as f: f.write(txt)\nwith open("msg.txt", "r") as f: print(f.read())` | [복습] 파일을 생성해 내용을 쓰고, 다시 열어 정상적으로 기록되었는지 확인합니다. |
| * | *(세트 11-19 생략, 자원 할당 및 해제 제어 연습)* | ... |

---

## 🟦 Lv 99: 정규 표현식 기초 (re module)
**설명**: 방대한 텍스트 중에서 특정 패턴(이메일, 전화번호 등)을 아주 빠르고 유연하게 찾아내는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `import re\ns = "Hello 123"\nres = re.findall("\\\\d+", s)\nprint(res)` | `\\d+` 패턴은 하나 이상의 연속된 숫자들을 찾아 리스트로 반환합니다. |
| 2 | `import re\ns = "apple, orange, grape"\nres = re.split(", ", s)\nprint(res)` | `re.split()`은 일반 `split`보다 복잡한 패턴으로 문자열을 쪼갤 수 있습니다. |
| 3 | `import re\ns = "A1 B2 C3"\nres = re.sub("\\\\d", "*", s)\nprint(res)` | `re.sub()`은 패턴에 맞는 부분을 다른 문자(별표 등)로 치환합니다. |
| 4 | `import re\ns = "python 3.x"\nif re.search("python", s): print("Found")` | `re.search()`는 문자열 전체에서 패턴이 한 번이라도 나오는지 확인합니다. |
| 5 | `import re\nres = re.match("Hel", "Hello")\nif res: print(res.group())` | `re.match()`는 반드시 문자열의 '시작'부터 패턴이 맞는지 검사합니다. |
| 6 | `import re\ns = "user@mail.com"\nres = re.search("[a-z]+@[a-z.]+", s)\nprint(res.group())` | 이메일 주소의 기본 형식을 패턴으로 찾아내는 예시입니다. |
| 7 | `import re\ns = "Price: 1000, 2000"\nres = re.finditer("\\\\d+", s)\nfor r in res: print(r.group())` | `finditer`는 찾은 결과들을 하나씩 꺼내 쓸 수 있는 이터레이터를 반환합니다. |
| 8 | `import re\ns = "Phone: 010-1234-5678"\nres = re.sub("-", "", s)\nprint(res)` | 하이픈 기호를 찾아 모두 제거하여 숫자만 남깁니다. |
| 9 | `import re\ns = "Py, Java, C++"\nres = re.findall("[a-zA-Z+]+", s)\nprint(res)` | 영문자와 플러스(+) 기호가 섞인 단어들을 패턴으로 모두 추출합니다. |
| 10 | `import re\np = re.compile("\\\\d+")\nprint(p.findall("12 34"))` | 패턴을 미리 `compile` 해두면 여러 번 반복해서 사용할 때 속도가 빨라집니다. |
| 20 | `import re\nlog = "ID:admin, IP:127.0.0.1"\nip = re.search("IP:([0-9.]+)", log)\nprint(f"Server IP: {ip.group(1)}")` | [복습] 괄호`()`를 사용한 그룹화 기능을 이용해 IP 주소 부분만 정확히 뽑아냅니다. |
| * | *(세트 11-19 생략, 정규식 패턴 분석 및 추출 연습)* | ... |

---

## 🟦 Lv 100: [Challenge] 파이썬 마스터 최종 프로젝트
**설명**: [챌린지] 지금까지 Phase 1~5에서 배운 모든 기술(클래스, 예외처리, 파일, 가공)을 통합합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class App:\n    def __init__(self, v): self.v = v\n    def start(self): print(f"Run v{self.v}")\nApp(1.0).start()` | 앱 클래스를 정의하고 버전을 초기화하여 시작합니다. |
| 2 | `import json\nraw = '{"users": ["a", "b"]}'\ndata = json.loads(raw)\nprint(f"Total: {len(data['users'])}")` | JSON 데이터를 불러와 내부 리스트의 길이를 집계합니다. |
| 3 | `try:\n    res = list(map(int, ["1", "2"]))\nexcept Exception as e: print(e)\nelse: print(sum(res))` | 리스트 형 변환 과정의 예외를 처리하고 성공 시 합계를 구합니다. |
| 4 | `with open("final.txt", "w") as f:\n    f.write("Python Master Completed")\nprint("File Saved")` | 최종 결과물을 텍스트 파일에 기록으로 남깁니다. |
| 5 | `def deco(fn):\n    def w(): print("---"); fn(); print("---")\n    return w\n@deco\ndef fin(): print("END")\nfin()` | 데코레이터를 이용해 대미를 장식할 결과물을 예쁘게 포장합니다. |
| 6 | `data = [i for i in range(10) if i % 2 != 0]\nprint(f"Odds: {data}")` | 리스트 컴프리헨션으로 홀수 데이터만 정제하여 명단을 만듭니다. |
| 7 | `import random\nans = random.randint(1, 100)\nprint(f"Secret Num Generated")` | 랜덤 모듈을 사용하여 시스템의 비밀 키값을 생성합니다. |
| 8 | `from datetime import datetime\nnow = datetime.now().strftime("%Y-%m-%d")\nprint(f"Date: {now}")` | 라이브러리를 사용해 최종 리포트 날짜를 명시합니다. |
| 9 | `def gen_msg():\n    yield "Keep"\n    yield "Coding"\nprint(" ".join(gen_msg()))` | 제너레이터를 사용하여 마무리 격려 문구를 동적으로 생성합니다. |
| 10 | `import re\nraw = "DONE 100%"\nif re.search("100%", raw): print("Completed")` | 정규식을 사용하여 진행률이 100% 임을 공식적으로 확인합니다. |
| 20 | `class Final:\n    def __init__(self, u):\n        self.u = u; self.d = datetime.now()\n    def __str__(self):\n        return f"User:{self.u} at {self.d.date()}"\nprint(f"RESULT >> {Final('Typer')}")` | [종합] 유저 명과 현재 날짜를 담는 클래스를 정의하고 문자열로 출력하며 모든 과정을 종료합니다. |
| * | *(세트 11-19 생략, 파이썬 전체 문법 총괄 실습)* | ... |
