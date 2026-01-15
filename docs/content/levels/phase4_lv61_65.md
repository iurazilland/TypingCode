# Phase 4: 함수와 프로그램 모듈화 (Lv 61 - 65) 상세 세트

---

Lv61. Functions / 함수 정의와 호출 기초
Description: 반복되는 코드를 이름 붙여 묶어두고(def), 필요할 때 불러서(call) 사용하는 법을 익힙니다. / Learn how to define and call functions to make your code reusable and organized.

1. Simple Definition / def 키워드로 함수를 정의하고, 이름 뒤에 괄호를 붙여 호출합니다.
def hello():
    print("Hello, Python!")
hello()

2. Multi-line Function / 함수 안에 여러 줄의 코드를 넣어 한꺼번에 실행할 수 있습니다.
def greet():
    print("Welcome to TypingCode")
    print("Happy Coding!")
greet()

3. Content Wrapper / 구분선을 그리는 기능을 함수화하여 재사용성을 높인 예제입니다.
def draw_line():
    print("-" * 20)
draw_line()
print("Content")
draw_line()

4. Repeated Calls / 필요할 때마다 함수를 여러 번 호출할 수 있습니다.
def start_sys():
    print("System Booting...")
start_sys()
start_sys()

5. Definition Only / 함수는 정의만 해두고 호출하지 않으면 실행되지 않습니다.
def alert():
    print("!!! WARNING !!!")
# alert() 
print("No alert yet")

6. Local Variable / 함수 내부에서 변수를 선언하고 사용할 수 있습니다.
def say_hi():
    msg = "Hi"
    print(msg)
say_hi()

7. F-string in Function / f-string을 활용한 메시지 출력기 함수입니다.
def show_ver():
    v = 1.2
    print(f"Version: {v}")
show_ver()

8. Pass Keyword / pass는 함수 본문을 나중에 작성하고 싶을 때 쓰는 자리 채우기용입니다.
def run():
    pass
run()

9. Line Spacing / 빈 줄을 여러 번 출력하는 유틸리티 함수입니다.
def enter():
    print("\n" * 2)
print("A")
enter()
print("B")

10. Logging Start / 로그 기록 시작을 알리는 알림 함수입니다.
def log_start():
    print("[LOG] Process Started")
log_start()

11. Numeric operation function / 상수를 더하는 단순 함수입니다.
def add_ten():
    print(10 + 10)
add_ten()

12. Global reference / 함수 밖의 변수를 읽어옵니다 (맛보기).
name = "Bot"
def ping():
    print(f"Ping {name}")
ping()

13. Conditional in function / 함수 내부에 if 문을 포함시킵니다.
def status():
    ok = True
    if ok: print("System OK")
status()

14. List loop function / 리스트를 순회하는 함수입니다.
def show_list():
    for i in [1, 2]: print(i)
show_list()

15. Function calling function / 함수가 다른 함수를 호출합니다.
def a(): print("A")
def b(): a(); print("B")
b()

16. Character art function / 간단한 기호를 출력합니다.
def icon(): print("(^o^)")
icon()

17. Type check function / 타입 정보를 출력합니다.
def show_type():
    print(type(10))
show_type()

18. Boolean function / 불리언 상태를 출력합니다.
def is_ready():
    print("Ready: True")
is_ready()

19. Multiple constants / 여러 고정값을 출력합니다.
def info():
    print("ID: 001")
    print("Role: Admin")
info()

20. Final Review / [복습] 프로그램 종료 시 일정한 박스 모양을 출력하는 마무리 함수입니다.
def end_program():
    print("=" * 10)
    print("FINISHED")
    print("=" * 10)
end_program()

---

Lv62. Parameters / 매개변수와 인자
Description: 함수 외부에서 데이터를 전달받아 처리하는 유연한 함수를 만드는 법을 익힙니다. / Learn how to pass arguments into functions to create flexible logic.

1. Single Parameter / name은 외부 값을 받아오는 '매개변수'입니다.
def greet(name):
    print(f"Hi, {name}")
greet("Alice")

2. Multiple Parameters / 여러 개의 데이터를 콤마로 구분하여 전달받을 수 있습니다.
def add(a, b):
    print(f"Sum: {a + b}")
add(10, 20)

3. Dynamic Repeat / 메시지와 반복 횟수를 받아 동적으로 출력합니다.
def repeat_msg(msg, cnt):
    print(msg * cnt)
repeat_msg("Go! ", 3)

4. Diverse Types / 서로 다른 타입의 데이터들을 인자로 받아 처리합니다.
def show_info(id, ver):
    print(f"ID:{id}, Ver:{ver}")
show_info("admin", 2.0)

5. Decorator Function / 장식 문자와 길이를 받아 출력을 제어하는 함수입니다.
def multi_print(char, size):
    print(char * size)
multi_print("#", 5)

6. Area Calculator / 가로와 세로 길이를 받아 넓이를 계산하는 함수입니다.
def area(w, h):
    print(f"Area: {w * h}")
area(5, 4)

7. Conditional Parameter / 입력받은 값에 따라 조건문을 실행하는 함수입니다.
def check_score(s):
    if s >= 80:
        print("Pass")
    else:
        print("Fail")
check_score(85)

8. Text Transform / 입력받은 문자열을 가공하여 출력하는 함수입니다.
def welcome(u):
    print(f"Welcome, {u.title()}")
welcome("antigravity")

9. Power Function / 숫자를 받아 제곱값을 출력합니다.
def power(n):
    print(n ** 2)
power(10)

10. Multi-info Join / 두 가지 정보를 조합하여 문장을 구성하는 함수입니다.
def introduce(name, age):
    print(f"{name} is {age} years old.")
introduce("Bob", 20)

11. Numeric Range Parameter / 시작과 끝 값을 받아 range를 돌립니다.
def count_to(start, end):
    for i in range(start, end + 1):
        print(i, end=" ")
count_to(1, 3)

12. Boolean Filter / 참/거짓 값을 받아 다른 메시지를 냅니다.
def set_active(status):
    print(f"System active? {status}")
set_active(True)

13. List as Parameter / 리스트를 받아 그 길이를 출력합니다.
def list_size(items):
    print(f"Items: {len(items)}")
list_size([1, 2, 3])

14. Dictionary values sum / 딕셔너리를 받아 합계를 냅니다.
def sum_dict(d):
    print(sum(d.values()))
sum_dict({"a": 10, "b": 20})

15. Char case helper / 글자와 목표 케이스를 받아 변환합니다.
def transform(c, upper):
    print(c.upper() if upper else c.lower())
transform("a", True)

16. Math sequence / 세 숫자를 받아 연산합니다.
def calc(a, b, c):
    print(a + b * c)
calc(1, 2, 3)

17. Prefix appender / 접두사와 단어를 받아 합칩니다.
def add_tag(tag, word):
    print(f"<{tag}>{word}</{tag}>")
add_tag("b", "Hello")

18. Nested call param / 함수 인자로 다른 함수 호출 결과를 넣습니다. (맛보기)
def double(n): return n * 2
def show(v): print(v)
show(double(5))

19. Multiple string repeat / 두 문자열을 각각 반복해 합칩니다.
def combo(s1, c1, s2, c2):
    print(s1 * c1 + s2 * c2)
combo("A", 2, "B", 1)

20. Final Review / [복습] 가격과 세율을 받아 세액을 계산한 뒤 정수형으로 보여주는 함수입니다.
def calc_tax(p, rate):
    print(f"Tax: {p * rate:.0f}")
calc_tax(5000, 0.1)

---

Lv63. Return Statement / 반환값
Description: 함수의 처리 결과를 밖으로 돌려보내어 대입하거나 재사용하는 법을 익힙니다. / Learn how to use return to pass values back to the caller.

1. Basic Return / return은 결과를 함수 밖으로 던져주어 변수에 저장할 수 있게 합니다.
def get_sum(a, b):
    return a + b
res = get_sum(10, 5)
print(res)

2. Math Expression / 반환된 값을 다른 연산과 즉시 결합할 수도 있습니다.
def square(n):
    return n * n
print(square(5) + 10)

3. Predicate Function / 판단의 결과(불리언)를 반환하는 함수입니다.
def is_adult(age):
    return age >= 19
print(is_adult(20))

4. String Return / 가공된 문자열을 반환하여 외부에서 활용합니다.
def get_greeting(n):
    return f"Hello, {n}"
msg = get_greeting("Dev")
print(msg)

5. Multi-Return (Tuple) / 콤마로 여러 값을 나열하면 튜플(Tuple) 형태로 여러 값을 반환합니다.
def calc(a, b):
    return a+b, a-b
sum_v, diff_v = calc(10, 5)
print(sum_v, diff_v)

6. Conditional Return / 조건에 따른 결과값을 선택해서 반환하는 예시입니다.
def find_max(a, b):
    return a if a > b else b
print(find_max(10, 20))

7. Object Access / 리스트를 인자로 받아 첫 번째 요소를 반환합니다.
def get_first(lst):
    return lst[0]
print(get_first([9, 8, 7]))

8. Early Exit / 중간에 return이 실행되면 함수는 즉시 그곳에서 종료됩니다.
def check_empty(val):
    if not val:
        return "Empty"
    return "Exist"
print(check_empty(""))

9. Dict Mapping Return / 딕셔너리를 활용해 결과 문구를 매칭하여 반환합니다.
def get_status(code):
    d = {200: "OK", 404: "X"}
    return d.get(code, "?")
print(get_status(404))

10. Logic Result / 문자열을 반복 시켜 그 결과를 돌려받습니다.
def repeat(n, c):
    return n * c
print(repeat("!", 5))

11. None Return (Implicit) / return이 없으면 None이 반환됩니다.
def no_ret(): pass
print(no_ret() is None)

12. List Comprehension Return / 컴프리헨션 결과를 통째로 보냅니다.
def get_evens(n):
    return [i for i in range(n) if i % 2 == 0]
print(get_evens(5))

13. Concatenation Return / 단어 두 개를 합쳐 반환합니다.
def join_w(a, b):
    return a + " " + b
print(join_w("A", "B"))

14. Max of list / 리스트의 최댓값을 반환합니다.
def top(l):
    return max(l)
print(top([1, 5, 2]))

15. Boolean inversion return / 반대값을 돌려줍니다.
def flip(b):
    return not b
print(flip(True))

16. Typed return / 특정 타입으로 변환 후 돌려줍니다.
def to_str(n):
    return str(n)
print(type(to_str(10)))

17. Nested return logic / if-elif-else로 촘촘하게 반환합니다.
def sign(n):
    if n > 0: return "P"
    if n < 0: return "N"
    return "Z"
print(sign(0))

18. Range as list / 리스트로 바꾼 숫자를 돌려줍니다.
def seq(n):
    return list(range(n))
print(seq(3))

19. Dictionary key list / 키들만 리스트로 보냅니다.
def keys_of(d):
    return list(d.keys())
print(keys_of({"a": 1}))

20. Final Review / [복습] 세 숫자의 평균을 구하고 소수점 제한을 걸어 출력합니다.
def avg3(a, b, c):
    return (a + b + c) / 3
print(f"Result: {avg3(10, 20, 30):.1f}")

---

Lv64. Default Arguments / 기본값 매개변수
Description: 인자를 생략했을 때 사용될 기본값을 미리 설정하는 법을 익힙니다. / Learn how to set default values for function parameters.

1. Fallback String / greet() 처럼 인자 없이 부르면 기본값 "User"가 사용됩니다.
def greet(name="User"):
    print(f"Hello, {name}")
greet()
greet("Alice")

2. Numeric Default / 거듭제곱 지수의 기본값을 2로 설정합니다. 필요시에만 다른 값을 넣습니다.
def power(n, p=2):
    print(n ** p)
power(10)
power(2, 10)

3. Logging Config / 로그 레벨의 기본값을 "INFO"로 설정한 예제입니다.
def log(msg, level="INFO"):
    print(f"[{level}] {msg}")
log("Start")

4. Multi-defaults / 여러 매개변수에 모두 기본값을 줄 수 있습니다.
def box(w=10, h=5, char="*"):
    print(f"{char}" * w)
box(h=3)

5. Mandatory and Optional / 필수 인자(q)는 앞에, 기본값 인자들은 뒤에 배치해야 합니다.
def ask(q, retries=3, hint="Y/N"):
    print(q, hint, retries)
ask("Continue?")

6. Coordinates Helper / 좌표는 필수이고 색상은 옵션인 상황을 표현합니다.
def draw(x, y, color="black"):
    print(f"Pos {x},{y} in {color}")
draw(10, 20)

7. Connection Setup / 서버 포트 기본값 설정 예시입니다.
def connect(host, port=8080):
    print(f"URL: {host}:{port}")
connect("local")

8. Ending Character / 파이썬 내장 print 함수의 end와 같은 원리입니다.
def say(m, end="!"):
    print(m, end=end)
say("Hi")

9. Profile Manager / 나이가 입력되지 않았을 때 표시를 조정합니다.
def profile(name, age=0):
    a_str = age if age else "N/A"
    print(f"Name:{name}, Age:{a_str}")
profile("Kim")

10. Repeat Count / 반복 횟수를 생략하면 1번만 실행하도록 기본값을 줍니다.
def msg(t, cnt=1):
    for _ in range(cnt): print(t)
msg("Go!")

11. Boolean default / 기본 활성 상태를 정합니다.
def system(active=True):
    print(f"ON" if active else "OFF")
system(False)

12. List default caution (theory) / [중요] 기본값으로 리스트 []를 쓰는 것은 권장되지 않습니다 (이론).
print("Avoid mutable defaults like list/dict")

13. Multiplier default / 1을 곱하면 원본이 유지되는 점을 활용합니다.
def scale(v, factor=1):
    print(v * factor)
scale(10)

14. Prefix default / 접두사를 기본으로 둡니다.
def tag(name, pre="LV_"):
    print(pre + name)
tag("01")

15. Currency symbol / 통화 기호 기본값을 원(₩)으로 둡니다.
def price(val, sym="₩"):
    print(f"{sym}{val}")
price(100)

16. Character fill / 패딩 문자를 기본 공백으로 둡니다.
def pad(s, n=5):
    print(s.ljust(n))
pad("Hi")

17. Range step default / 1씩 올라가는 기본 보폭입니다.
def jump(n, step=1):
    print(list(range(0, n, step)))
jump(5)

18. Nested dict default / 키가 없을 때 기본값을 리턴하도록 짭니다.
def find(d, k, v="None"):
    print(d.get(k, v))
find({}, "a")

19. Format string default / 빈 줄 개수를 정합니다.
def nl(n=1):
    print("\n" * n, end="")
nl(2)

20. Final Review / [복습] 원하는 가로 길이와 채울 문자를 받아 구분선을 그리는 함수입니다.
def bar(len=10, filler="-"):
    print(filler * len)
bar(5, "=")

---

Lv65. [Challenge] Geometry Module / [챌린지] 도형 계산기 모듈
Description: [챌린지] 다양한 도형의 넓이와 둘레를 계산하는 함수 세트를 구성합니다. / Building a geometry calculation utility set with functions.

1. Square Area / 정사각형 넓이를 구하는 함수를 호출합니다.
def get_square_area(s):
    return s * s
print(get_square_area(4))

2. Rectangle Area / 직사각형 넓이 계산은 두 인자를 받습니다.
def get_rect_area(w, h):
    return w * h
print(get_rect_area(5, 10))

3. Circle Area / 원주율 기본값을 설정하고 원의 넓이를 구합니다.
def get_circle_area(r, pi=3.14):
    return pi * (r ** 2)
print(get_circle_area(10))

4. Rect Pack / 넓이와 둘레를 동시에 구하여 반환합니다.
def get_rect_info(w, h):
    a = w * h
    p = (w + h) * 2
    return a, p
area, peri = get_rect_info(4, 5)
print(f"A:{area}, P:{peri}")

5. Validation Helper / 입력값이 유효한(양수)지 확인하는 보조 함수입니다.
def is_valid_input(val):
    return val > 0
if is_valid_input(10):
    print("Can Calculate")

6. Visual Rect / 특정 문자로 직사각형의 형태를 출력하는 시각화 함수입니다.
def draw_rect(w, h, char="#"):
    for _ in range(h):
        print(char * w)
draw_rect(5, 2)

7. Triangle Area / 삼각형 넓이 공식 함수입니다.
def get_tri_area(b, h):
    return b * h / 2
print(f"Triangle: {get_tri_area(10, 5)}")

8. Converter Logic / cm를 mm로 바꾸거나 그 반대를 수행하는 변환기입니다.
def convert(val, to_mm=True):
    return val * 10 if to_mm else val / 10
print(convert(5))

9. Volume Calc / 세 가지 차원 데이터를 받아 부피를 계산합니다.
def get_vol(w, h, d):
    return w * h * d
print(get_vol(2, 3, 4))

10. Action Logger / 계산 결과를 로그 형식으로 남겨주는 알림 함수입니다.
def log_calc(name, res):
    print(f"[CALC] {name}: {res}")
log_calc("Circle", 314.0)

11. Diagonal length hint / 피타고라스 정리로 대각선 길이를 구합니다 (맛보기).
def diagonal(a, b):
    import math
    return math.sqrt(a**2 + b**2)
print(f"{diagonal(3, 4):.1f}")

12. Scaling info / 가로세로를 n배 늘린 정보를 반환합니다.
def scale_rect(w, h, n=2):
    return w * n, h * n
print(scale_rect(5, 5))

13. Unit suffix adder / 수치 뒤에 단위를 붙입니다.
def add_unit(v, u="cm"):
    return f"{v}{u}"
print(add_unit(10))

14. Box surface area / 직육면체의 겉넓이를 구합니다.
def surface(w, h, d):
    return 2*(w*h + h*d + d*w)
print(surface(1, 2, 3))

15. Sphere volume hint / 구의 부피를 구합니다.
def sphere_vol(r):
    return (4/3) * 3.14 * (r**3)
print(f"{sphere_vol(3):.1f}")

16. Angle converter / 도(deg)를 라디안으로 바꿉니다.
def to_rad(deg):
    return deg * (3.14 / 180)
print(to_rad(180))

17. Polygon perimeter / 한 변의 길이와 변의 개수를 받아 둘레를 구합니다.
def poly_peri(s, n):
    return s * n
print(poly_peri(5, 6))

18. Check if square / 가로 세로가 같으면 정사각형인지 판별합니다.
def is_sq(w, h):
    return w == h
print(is_sq(5, 5))

19. Coordinate distance / (0,0)에서 (x,y)까지의 직선 거리입니다.
def dist(x, y):
    return (x**2 + y**2)**0.5
print(dist(3, 4))

20. Final Review / [종합] 기존에 만든 함수들을 내부에서 호출하여 전체 보고서를 작성하는 고급 함수입니다.
def run_suite(s1, s2):
    a = get_rect_area(s1, s2)
    p = (s1 + s2) * 2
    log_calc("Suite", f"A:{a} P:{p}")
run_suite(10, 5)
