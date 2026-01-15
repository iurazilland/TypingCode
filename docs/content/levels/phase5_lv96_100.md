# Phase 5: 객체지향 및 고급 문법 (Lv 96 - 100) 상세 세트

---

Lv96. Generators & Iterators / 제너레이터와 이터레이터
Description: 방대한 데이터를 한꺼번에 메모리에 올리지 않고, 필요할 때마다 하나씩 생성(yield)하여 사용하는 효율적인 기법을 익힙니다. / Learn how to use generators and iterators for memory-efficient data processing.

1. Yield Basic / yield를 사용하면 함수가 실행 중에 값을 반환하고 그 자리에 멈춰있다가 다시 호출되면 이어집니다.
def gen():
    yield 1
    yield 2
g = gen()
print(next(g))
print(next(g))

2. Iterating Generator / 제너레이터 함수는 for 문에 넣어 리스트처럼 순회할 수 있습니다.
def count_to_3():
    for i in range(1, 4): yield i
for n in count_to_3():
    print(n)

3. Generator Expression / 소괄호 ()를 사용하면 한 줄 요약 형태의 제너레이터 표현식을 만들 수 있습니다.
g = (i**2 for i in range(3))
print(next(g))
print(next(g))

4. Infinite Sequence / 제너레이터를 사용하면 무한히 숫자를 만들어내는 수열도 메모리 걱정 없이 구현 가능합니다.
def infinite():
    n = 1
    while True:
        yield n
        n += 1
g = infinite()
print(next(g))

5. Join with Generator / 제너레이터의 결과를 join()과 같은 함수에 바로 전달할 수 있습니다.
def msg():
    yield "Hello"
    yield "World"
print("-".join(msg()))

6. Conditional Yield / 특정 조건에 맞는 데이터만 생성하도록 제너레이터를 설계합니다.
def even(n):
    for i in range(n):
        if i % 2 == 0: yield i
print(list(even(10)))

7. Explicit Iterator / iter() 함수로 리스트를 이터레이터 객체로 바꾼 뒤 next()를 쓸 수 있습니다.
it = iter([1, 2, 3])
print(next(it))

8. Interleaved Logic / yield 사이사이에 실행 코드를 넣어 진행 상황을 제어할 수 있습니다.
def steps():
    print("S1")
    yield 1
    print("S2")
    yield 2
g = steps()
next(g)

9. Fibonacci Generator / 피보나치 수열처럼 앞의 계산이 필요한 시퀀스를 제너레이터로 우아하게 만듭니다.
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
print(list(fib(5)))

10. String Gen Exp / 문자열을 한 글자씩 대문자로 생성하는 제너레이터 표현식입니다.
g = (c.upper() for c in "Py")
for s in g: print(s)

11. Raising StopIteration / next()를 더 부를 게 없을 때의 에러를 잡습니다.
g = (x for x in [1])
next(g)
try: next(g)
except StopIteration: print("End")

12. Yielding from list / 리스트의 요소를 하나씩 yield 합니다.
def from_list(l):
    for x in l: yield x
print(list(from_list([10, 20])))

13. Generator close / 제너레이터를 중간에 닫습니다 (맛보기).
g = (i for i in range(10))
g.close()
# next(g) # Error

14. List conversion / 제너레이터를 리스트로 한꺼번에 바꿉니다.
def n(): yield 1; yield 2
print(list(n()))

15. Multiple next calls / 수동으로 3번 호출합니다.
g = (i for i in range(5))
print(next(g), next(g), next(g))

16. Character range generator / 알파벳 범위를 하나씩 줍니다.
def alph():
    for c in "ABC": yield c
print("".join(alph()))

17. Nested generator / (맛보기) 제너레이터 안에서 다른 이터러블을 yield from 합니다.
def gen():
    yield from [1, 2]
print(list(gen()))

18. State maintenance / 함수 내부 변수 상태가 유지됨을 확인합니다.
def acc():
    s = 0
    while s < 3:
        s += 1
        yield s
print(list(acc()))

19. Empty generator / 아무것도 내보내지 않는 제너레이터입니다.
def empty():
    if False: yield 1
print(list(empty()))

20. Final Review / [복습] 리스트의 내용 앞에 로그 태그를 붙여서 하나씩 내보내는 제너레이터입니다.
def log_gen(lst):
    for l in lst: yield f"[LOG] {l}"
for log in log_gen(["A", "B"]):
    print(log)

---

Lv97. Decorators / 데코레이터 기초
Description: 기존 함수의 코드를 직접 수정하지 않고, 전후에 공통 기능을 덧붙여 기능을 확장하는 법을 익힙니다. / Learn how to enhance function functionality using decorators without modifying the original code.

1. Simple Decorator / @deco를 함수 위에 붙이면 test() 실행 전후에 추가 작업이 수행됩니다.
def deco(fn):
    def wrap():
        print("Start")
        fn()
    return wrap
@deco
def test(): print("Fn")
test()

2. Return Transformation / 람다와 결합하여 함수의 반환값에 장식을 입히는 데코레이터 예시입니다.
def bold(fn):
    return lambda: f"**{fn()}**"
@bold
def msg(): return "Hi"
print(msg())

3. Arguments in Wrap / 인자가 있는 함수에도 데코레이터를 적용할 수 있습니다. (전달 인자 유지)
def check(fn):
    def wrap(a, b):
        print(f"Args: {a}, {b}")
        return fn(a, b)
    return wrap
@check
def add(a, b): return a + b
print(add(10, 20))

4. Parameterized Decorator / 데코레이터 자체에 인자(3)를 전달하여 동작을 조절할 수 있습니다.
def multi(n):
    def deco(fn):
        return lambda: fn() * n
    return deco
@multi(3)
def get_v(): return 10
print(get_v())

5. Timing Execution / 함수의 실행 시간을 측정해주는 아주 대표적인 데코레이터 활용 사례입니다.
import time
def timer(fn):
    def wrap():
        t = time.time()
        fn()
        print(f"Time: {time.time()-t:.2f}")
    return wrap
@timer
def run(): time.sleep(0.01)
run()

6. HTML Tag Wrap / 텍스트를 HTML 태그로 감싸주는 기능을 데코레이터로 분리합니다.
def p_tag(fn):
    return lambda x: f"<p>{fn(x)}</p>"
@p_tag
def text(s): return s
print(text("Hello"))

7. Debug Logger / 어떤 함수가 호출되는지 이름을 찍어주는 디버깅용 데코레이터입니다.
def debug(fn):
    def wrap(*args, **kwargs):
        print(f"Call: {fn.__name__}")
        return fn(*args, **kwargs)
    return wrap
@debug
def go(x): pass
go(1)

8. Auth Filter / 권한에 따라 함수 실행 여부를 결정하는 필터링 데코레이터입니다.
def admin_only(fn):
    def wrap(user):
        if user != "admin": return "Deny"
        return fn(user)
    return wrap
@admin_only
def secret(u): return "PASS"
print(secret("guest"))

9. Prefix/Suffix Line / 함수가 실행되기 전에 별표 장식을 매번 그려주는 보조 기능입니다.
def star_deco(fn):
    def wrap():
        print("*****")
        fn()
    return wrap
@star_deco
def hi(): print("Hi")
hi()

10. Result Uppercaser / 함수의 문자열 반환 결과를 강제로 대문자로 바꾸는 변환 데코레이터입니다.
def up_deco(fn):
    return lambda s: fn(s).upper()
@up_deco
def greet(n): return f"hi {n}"
print(greet("alice"))

11. Numeric multiplier deco / 함수 결과를 2배로 만듭니다.
def x2(f): return lambda x: f(x) * 2
@x2
def n(v): return v
print(n(10))

12. Calling count deco / 호출 횟수를 셉니다 (맛보기).
def count(f):
    c = 0
    def w():
        nonlocal c; c += 1
        print(f"Try:{c}"); f()
    return w
@count
def run(): pass
run(); run()

13. Double decorator / 두 개의 데코레이터를 겹쳐서 씁니다.
def d1(f): return lambda: f"1{f()}"
def d2(f): return lambda: f"2{f()}"
@d1
@d2
def m(): return "X"
print(m())

14. Keyword arg support / kwargs를 지원하는 래퍼입니다.
def log(f):
    def w(**kw): print("Kwargs passed"); return f(**kw)
    return w
@log
def show(id): print(id)
show(id=1)

15. Boolean inversion deco / 불리언 결과를 뒤집습니다.
def flip(f): return lambda: not f()
@flip
def ok(): return True
print(ok())

16. Type check deco / 인자 타입이 맞는지 봅니다.
def check_int(f):
    def w(n):
        if type(n) != int: print("Error")
        return f(n)
    return w
@check_int
def go(n): return n
go("A")

17. Ignoring result deco / 결과를 무시하고 고정 문구를 줍니다.
def mute(f): return lambda: "Muted"
@mute
def say(): return "Hi"
print(say())

18. Delay deco / 실행을 잠시 늦춥니다.
import time
def delay(f):
    def w(): time.sleep(0.01); f()
    return w
@delay
def p(): print("Done")
p()

19. Cache simulator / (맛보기) 결과를 메모해두는 시뮬레이션입니다 (이론).
print("Decorators can be used for memoization/caching results")

20. Final Review / [복습] 함수가 실행될 때마다 함수 이름을 기록하고 정상적으로 계산 결과를 반환합니다.
def log_it(f):
    def w(*a):
        print(f"Run {f.__name__}")
        return f(*a)
    return w
@log_it
def add(a, b): return a + b
print(f"Res: {add(1, 2)}")

---

Lv98. Context Manager / 컨텍스트 매니저
Description: 파일 열기나 데이터베이스 연결처럼 사용 후 반드시 자원을 정리해야 하는 작업을 안전하게 처리하는 법을 익힙니다. / Learn how to use 'with' statements for reliable resource management.

1. Auto-Close File / with 문을 쓰면 블록이 끝날 때 파일이 자동으로 닫혀(close) 안전합니다.
# with open("test.txt", "w") as f: f.write("Hi")
print("with handles file closing automatically")

2. Safe Reading / 읽기 모드로 파일을 열고 내용을 끝까지 읽어들입니다.
# with open("test.txt", "r") as f: print(f.read())
print("Read content safely inside with block")

3. Custom Manager / 클래스에 __enter__, __exit__을 구현하면 직접 with를 쓸 수 있습니다.
class Tool:
    def __enter__(self):
        print("Start")
        return self
    def __exit__(self, a, b, c):
        print("End")
with Tool() as t:
    print("Running")

4. Decorator Manager / 데코레이터를 이용해 간편하게 나만의 with 동작을 설계할 수 있습니다.
from contextlib import contextmanager
@contextmanager
def temp():
    print("In")
    yield
    print("Out")
with temp():
    print("Work")

5. Append Mode / 'a' (append) 모드로 열면 기존 파일 뒤에 내용을 덧붙입니다.
# with open("log.txt", "a") as f: f.write("New Line")
print("'a' mode for appending data")

6. Write Lines / 리스트에 든 여러 줄의 문장을 파일에 한꺼번에 기록합니다.
# with open("n.txt", "w") as f: f.writelines(["A\n", "B\n"])
print("writelines() for bulk text saving")

7. Try-With Combo / with 문도 에러가 날 수 있으므로 try-except로 감쌀 수 있습니다.
try:
    with open("none.txt", "r") as f: pass
except:
    print("File missing catch")

8. Multiple Resources / 여러 개의 자원(파일)을 한 줄의 with에서 동시에 관리할 수 있습니다.
# with open("a.txt", "w") as f1, open("b.txt", "w") as f2: print("Done")
print("Managing multiple resources in one with statement")

9. Binary Writing / 'wb' (write binary) 모드로 바이너리 데이터를 기록합니다.
# with open("v.bin", "wb") as f: f.write(b"\x01")
print("'wb' mode for binary stream")

10. Existence Check / 파일을 생성한 뒤, os 모듈로 실제 파일이 존재하는지 확인해 봅니다.
import os
# with open("t.txt", "w") as f: f.write("O")
print(f"Exists: {os.path.exists('t.txt')}")

11. Reading line by line / 한 줄씩 읽어오는 방식입니다.
# with open("f.txt") as f:
#     for line in f: print(line)
print("Memory efficient line-by-line reading")

12. Opening with encoding / 인코딩을 지정해 엽니다.
# with open("u.txt", "w", encoding="utf-8") as f: pass
print("Specify encoding for unicode support")

13. Using with for locks / (맛보기) 동기화 락에 with를 씁니다 (이론).
print("with statement is used for Threading locks")

14. Suppressing errors / (맛보기) 특정 에러를 무시하는 컨텍스트 매니저입니다 (이론).
from contextlib import suppress
with suppress(FileNotFoundError):
    open("fake.txt")

15. Temporary file path / 운영체제 임시 폴더에 파일을 만듭니다 (맛보기).
import tempfile
# with tempfile.NamedTemporaryFile() as f: print(f.name)
print("tempfile module for temporary resource management")

16. Iterating with enumerate / 파일 줄 번호와 함께 읽습니다.
# with open("f.txt") as f:
#     for i, line in enumerate(f): print(i, line)
print("File iteration with indices")

17. Writing non-string via str() / 숫자를 파일에 쓸 땐 문자열로 바꿔야 합니다.
# with open("n.txt", "w") as f: f.write(str(100))
print("Cast non-strings to str before writing")

18. Seeking file pointer / (맛보기) 파일 읽기 위치를 조절합니다.
# with open("f.txt") as f: f.seek(0)
print("seek() for file cursor control")

19. Context manager result / __enter__의 리턴값이 as 뒤의 변수로 들어옵니다.
class A:
    def __enter__(self): return "Hi"
    def __exit__(self, *a): pass
with A() as val: print(val)

20. Final Review / [복습] 파일을 생성해 내용을 쓰고, 다시 열어 정상적으로 기록되었는지 확인합니다.
txt = "Typing Code"
# with open("msg.txt", "w") as f: f.write(txt)
# with open("msg.txt", "r") as f: print(f.read())
print(f"Verified: {txt}")

---

Lv99. Regular Expressions / 정규 표현식 기초
Description: 방대한 텍스트 중에서 특정 패턴(이메일, 전화번호 등)을 아주 빠르고 유연하게 찾아내는 법을 익힙니다. / Use the re module to find and manipulate patterns in text.

1. Find Digits / \d+ 패턴은 하나 이상의 연속된 숫자들을 찾아 리스트로 반환합니다.
import re
s = "Hello 123"
res = re.findall(r"\d+", s)
print(res)

2. Advanced Split / re.split()은 일반 split보다 복잡한 패턴으로 문자열을 쪼갤 수 있습니다.
import re
s = "apple, orange, grape"
res = re.split(r", ", s)
print(res)

3. Pattern Substitution / re.sub()은 패턴에 맞는 부분을 다른 문자(별표 등)로 치환합니다.
import re
s = "A1 B2 C3"
res = re.sub(r"\d", "*", s)
print(res)

4. Global Search / re.search()는 문자열 전체에서 패턴이 한 번이라도 나오는지 확인합니다.
import re
s = "python 3.x"
if re.search(r"python", s): print("Found")

5. Start Matching / re.match()는 반드시 문자열의 '시작'부터 패턴이 맞는지 검사합니다.
import re
res = re.match(r"Hel", "Hello")
if res: print(res.group())

6. Basic Email Pattern / 이메일 주소의 기본 형식을 패턴으로 찾아내는 예시입니다.
import re
s = "user@mail.com"
res = re.search(r"[a-z]+@[a-z.]+", s)
print(res.group() if res else "No")

7. Iterate Matches / finditer는 찾은 결과들을 하나씩 꺼내 쓸 수 있는 이터레이터를 반환합니다.
import re
s = "Price: 1000, 2000"
res = re.finditer(r"\d+", s)
for r in res: print(r.group())

8. Remove Hyphens / 하이픈 기호를 찾아 모두 제거하여 숫자만 남깁니다.
import re
s = "010-1234-5678"
res = re.sub(r"-", "", s)
print(res)

9. Alphanumeric extraction / 영문자와 플러스(+) 기호가 섞인 단어들을 패턴으로 모두 추출합니다.
import re
s = "Py, Java, C++"
res = re.findall(r"[a-zA-Z+]+", s)
print(res)

10. Compiling Pattern / 패턴을 미리 compile 해두면 여러 번 반복해서 사용할 때 속도가 빨라집니다.
import re
p = re.compile(r"\d+")
print(p.findall("12 34"))

11. Any character / 마침표(.) 패턴은 어떤 글자 하나와 매칭됩니다.
import re
print(re.findall(r"a.c", "abc a-c"))

12. Start and end anchors / ^와 $를 써서 줄의 시작과 끝을 맞춥니다.
import re
print(re.search(r"^Go", "Good"))

13. Zero or more / 별표(*)는 0개 이상의 반복을 의미합니다.
import re
print(re.findall(r"ab*", "a ab abb"))

14. Character choices / 대괄호 [] 안에 매칭될 후보군을 적습니다.
import re
print(re.findall(r"[aeiou]", "apple"))

15. Negation in set / [^ ]는 포함되지 않는 글자를 고릅니다.
import re
print(re.findall(r"[^0-9]", "A1"))

16. Word boundaries / \b 패턴으로 단어 단위 매칭을 합니다.
import re
print(re.findall(r"\bcat\b", "cat category"))

17. Optional character / 물음표(?)는 0 또는 1개를 의미합니다.
import re
print(re.findall(r"apples?", "apple apples"))

18. Whitespace match / \s 패턴으로 공백을 찾습니다.
import re
print(len(re.findall(r"\s", "A B C")))

19. Non-digit match / \D는 숫자가 아닌 모든 것을 찾습니다.
import re
print(re.findall(r"\D", "1A2"))

20. Final Review / [복습] 괄호()를 사용한 그룹화 기능을 이용해 IP 주소 부분만 정확히 뽑아냅니다.
import re
log = "IP:127.0.0.1"
ip = re.search(r"IP:([0-9.]+)", log)
print(f"IP: {ip.group(1)}")

---

Lv100. [Challenge] Python Master / [챌린지] 파이썬 마스터
Description: [챌린지] 지금까지 Phase 1~5에서 배운 모든 기술(클래스, 예외처리, 파일, 가공)을 통합합니다. / Final project integrating all concepts from Phases 1-5.

1. Class Startup / 앱 클래스를 정의하고 버전을 초기화하여 시작합니다.
class App:
    def __init__(self, v): self.v = v
    def start(self): print(f"Run v{self.v}")
App(1.0).start()

2. JSON Inventory / JSON 데이터를 불러와 내부 리스트의 길이를 집계합니다.
import json
data = json.loads('{"u": ["a", "b"]}')
print(f"Total: {len(data['u'])}")

3. Safe Result Logic / 리스트 형 변환 과정의 예외를 처리하고 성공 시 합계를 구합니다.
try:
    res = list(map(int, ["1", "2"]))
except: print("Error")
else: print(sum(res))

4. File Storage / 최종 결과물을 텍스트 파일에 기록으로 남깁니다.
# with open("f.txt", "w") as f: f.write("DONE")
print("Project results saved successfully")

5. Decorator Wrapper / 데코레이터를 이용해 대미를 장식할 결과물을 예쁘게 포장합니다.
def deco(f):
    def w(): print("---"); f(); print("---")
    return w
@deco
def fin(): print("END")
fin()

6. List Cleanup / 리스트 컴프리헨션으로 홀수 데이터만 정제하여 명단을 만듭니다.
data = [i for i in range(10) if i % 2 != 0]
print(f"Odds: {data}")

7. System Secret / 랜덤 모듈을 사용하여 시스템의 비밀 키값을 생성합니다.
import random
key = random.randint(1, 100)
print("Keys Generated")

8. Timestamping / 라이브러리를 사용해 최종 리포트 날짜를 명시합니다.
from datetime import datetime
print(f"Date: {datetime.now().date()}")

9. Message Stream / 제너레이터를 사용하여 마무리 격려 문구를 동적으로 생성합니다.
def gen():
    yield "Keep"; yield "Coding"
print(" ".join(gen()))

10. Progress Regex / 정규식을 사용하여 진행률이 100% 임을 공식적으로 확인합니다.
import re
if re.search(r"100%", "DONE 100%"): print("Finalized")

11. Object comparison magic / 매직 메서드로 파이널 점수를 비교합니다.
class Score:
    def __init__(self, s): self.s = s
    def __gt__(self, o): return self.s > o.s
print(Score(100) > Score(90))

12. Static Utility call / 정적 메서드로 마감 문구를 생성합니다.
class Tool:
    @staticmethod
    def bye(): return "Goodbye!"
print(Tool.bye())

13. List unpacking review / 여러 데이터를 언패킹하여 변수에 담습니다.
res = [1, 2, 3]
a, *b = res
print(a, b)

14. Dictionary comprehension check / 인물과 점수를 뒤집어 저장합니다.
d = {"A": 100}
rev = {v: k for k, v in d.items()}
print(rev)

15. Map and filter combo recap / 필터링 후 맵핑합니다.
n = [1, 2, 3]
res = map(lambda x: x*2, filter(lambda x: x > 1, n))
print(list(res))

16. Variable scope local/global / 전역 변수를 함수에서 수정합니다.
cnt = 0
def up():
    global cnt; cnt += 1
up(); print(cnt)

17. Default argument function / 기본값이 있는 함수로 출력을 제어합니다.
def show(m="Done"): print(m)
show()

18. String format complex / 여러 포맷팅을 섞어 씁니다.
u, s = "Typer", 100
print(f"User:{u.upper()} / Score:{s:,}")

19. Lambda with sorting key / 람다를 이용해 특정 기준으로 정렬합니다.
data = [("A", 2), ("B", 1)]
print(sorted(data, key=lambda x: x[1]))

20. Final Review / [종합] 유저 명과 현재 날짜를 담는 클래스를 정의하고 문자열로 출력하며 모든 과정을 종료합니다.
from datetime import datetime
class Final:
    def __init__(self, u):
        self.u = u; self.d = datetime.now()
    def __str__(self):
        return f"User:{self.u} at {self.d.date()}"
print(f"RESULT >> {Final('Typer')}")
