# Phase 4: 함수와 프로그램 모듈화 (Lv 66 - 70) 상세 세트

---

Lv66. Keyword Arguments / 키워드 인자와 순서
Description: 매개변수의 이름을 직접 지정하여 데이터를 전달함으로써 인자의 순서가 달라도 정확히 전달하는 법을 익힙니다. / Learn how to use names when passing arguments to functions for clarity and flexible ordering.

1. Basic Keywords / 호출 시 이름=값 형식을 사용하면 매개변수 순서와 상관없이 전달됩니다.
def info(name, age):
    print(f"{name}: {age}")
info(age=25, name="Alice")

2. Positional and Keyword / 위치 인자와 키워드 인자를 섞어 쓸 때는 위치 인자가 반드시 먼저 와야 합니다.
def box(w, h, color):
    print(f"{w}x{h} {color}")
box(10, color="Red", h=5)

3. Explicit Config / 중요한 옵션값들을 명시적으로 이름을 적어 강조할 때 씁니다.
def connect(host, port, ssl):
    print(f"{host}:{port} (SSL:{ssl})")
connect("127.0.0.1", ssl=True, port=80)

4. Keyword with Default / 기본값이 있는 인자도 키워드 방식으로 이름을 찍어서 전달할 수 있습니다.
def profile(user, tier="None"):
    print(f"{user} rank {tier}")
profile(tier="Gold", user="Kim")

5. Coordinate Labeling / 좌표 정보를 명확하게 구분하여 읽기 좋은 코드를 만듭니다.
def draw(x, y, z=0):
    print(x, y, z)
draw(y=10, x=5)

6. Short Call Names / 짧은 함수 호출에서도 파라미터 이름을 명시해 실수를 방지합니다.
def log(m, lv="INF"): print(f"[{lv}] {m}")
log(m="Update", lv="ERR")

7. Mixed Trio / 위치 인자 하나와 키워드 인자 두 개를 조합한 호출입니다.
def test(a, b, c):
    print(a, b, c)
test(1, c=3, b=2)

8. Targeted Update / 특정 기본값만 골라서 덮어쓰고 싶을 때 키워드 인자가 필수입니다.
def build(target, cpu="x64", ram=8):
    print(target, cpu, ram)
build("Server", ram=16)

9. Logic Swapping / 받는 사람과 메시지 순서를 바꾸어 호출해 봅니다.
def send(to, msg, secret=False):
    print(f"To:{to}, Msg:{msg}, Secret:{secret}")
send(msg="Hi", to="Alice")

10. Multi-option Select / 수많은 옵션 중 필요한 것만 이름을 써서 활성화합니다.
def font(size, bold=False, italic=False):
    print(size, bold, italic)
font(12, italic=True)

11. Numeric keywords / 숫자를 인자로 쓸 때도 키워드로 넘기면 의미가 더 명확해집니다.
def circle(r): print(3.14 * r * r)
circle(r=10)

12. Path constructor / 운영체제와 경로를 명시합니다.
def path(os, root="/"): print(f"{os}:{root}")
path(os="Win", root="C:")

13. Auth check keyword / 토큰 정보를 명확히 넘깁니다.
def auth(user, token): print(f"{user} verified with {token}")
auth(token="xyz", user="admin")

14. Timer setup / 시, 분, 초를 키워드로 넘깁니다.
def timer(h, m, s): print(f"{h}:{m}:{s}")
timer(s=30, m=10, h=1)

15. Boolean keyword flags / 여러 상태 플래그를 이름으로 넘깁니다.
def cfg(run, log): print(f"R:{run} L:{log}")
cfg(log=True, run=False)

16. Character fill details / 채우기 문자와 폭을 지정합니다.
def line(w, char="*"): print(char * w)
line(char="-", w=5)

17. Dictionary-like keyword call / 딕셔너리 데이터를 개별 인자로 넘기는 느낌입니다.
def data(id, val): print(f"{id}={val}")
data(val=100, id="X")

18. Error code description / 에러 코드와 설명을 넘깁니다.
def error(code, msg): print(f"E{code}: {msg}")
error(msg="Fail", code=500)

19. Format specifier / 너비와 소수점 자릿수를 넘깁니다.
def fmt(val, width, p): print(f"{val:{width}.{p}f}")
fmt(3.14, p=1, width=5)

20. Final Review / [복습] 필수 제목을 넣고, 마지막 날짜값만 키워드로 지정하여 업데이트합니다.
def report(title, author="N/A", date="2026"):
    print(f"[{title}] by {author} at {date}")
report(date="01-07", title="NEWS")

---

Lv67. Variadic Positions (*args) / 가변 인자
Description: 몇 개의 인자가 들어올지 미리 알 수 없을 때, 이를 튜플로 한거번에 받는 법을 익힙니다. / Use *args to accept an arbitrary number of positional arguments as a tuple.

1. Aggregation / *args는 들어온 모든 일반 인자들을 하나의 튜플로 묶어줍니다.
def sum_all(*nums):
    print(sum(nums))
sum_all(1, 2, 3, 4)

2. Iterating Args / 유동적인 개수의 아이템을 받아 하나씩 반복 출력합니다.
def show_list(*items):
    for i in items:
        print("-", i)
show_list("A", "B", "C")

3. Mixed Head / 고정 인자 하나와 가변 인자를 함께 사용할 수 있습니다.
def greet(msg, *names):
    for n in names:
        print(f"{msg}, {n}")
greet("Hello", "Alice", "Bob")

4. Accumulation Loop / 입력된 숫자들을 모두 곱하여 반환하는 가변 인자 함수입니다.
def multi(*nums):
    res = 1
    for n in nums: res *= n
    return res
print(multi(2, 3, 5))

5. Custom Joiner / 여러 태그를 받아 해시태그 형식으로 합쳐 출력합니다.
def tag_print(*tags):
    print(" #".join([""] + list(tags)).strip())
tag_print("py", "dev")

6. Length of Args / 몇 개의 데이터가 전달되었는지 길이를 확인합니다.
def check_len(*args):
    print(f"Args count: {len(args)}")
check_len(10, "A", True)

7. Dynamic Average / 표본의 개수에 상관없이 평균을 구하는 함수입니다.
def avg(*vals):
    return sum(vals) / len(vals)
print(avg(10, 20, 30))

8. Indexing Args / 가변 인자 튜플 중 첫 번째 요소에 접근합니다.
def pick_first(*args):
    print(args[0])
pick_first(1, 2, 3)

9. Separator Lead / 첫 인자를 구분자로 써서 남은 가변 단어들을 합칩니다.
def combine(sep, *words):
    print(sep.join(words))
combine("|", "A", "B", "C")

10. Unpacking into Call / 리스트 앞에 *를 붙여 함수에 넘기면 요소가 풀려서(Unpacking) 전달됩니다.
nums = [1, 2, 3]
def show(a, b, c): print(a+b+c)
show(*nums)

11. Min and Max from args / 가변 인자 중 최솟값과 최댓값을 구합니다.
def range_stats(*n):
    print(min(n), max(n))
range_stats(10, 5, 20)

12. Type checker for all / 모든 인자가 같은 타입인지 확인합니다 (맛보기).
def all_int(*args):
    print(all(type(x) == int for x in args))
all_int(1, 2, "3")

13. Filtering args / 가변 인자 중 짝수만 뽑아 합칩니다.
def sum_evens(*nums):
    print(sum(n for n in nums if n % 2 == 0))
sum_evens(1, 2, 3, 4)

14. List wrapping args / 가변 인자로부터 다시 리스트를 만듭니다.
def to_list(*args):
    return list(args)
print(to_list(1, 2, 3))

15. Argument existence / 하나라도 전달되었는지 확인합니다.
def has_args(*args):
    print(bool(args))
has_args()

16. Positional after *args (Error check) / 가변 인자 뒤에 일반 인자를 두면 반드시 키워드로 호출해야 합니다 (이론).
def fn(*a, b): print(a, b)
fn(1, 2, b=3)

17. Nested extraction / 인자로 리스트를 받았을 때 풀어서 가변으로 넘깁니다.
data = [10, 20]
def ping(*v): print(v)
ping(*data)

18. String concatenation from args / 모든 문자열 아이템을 더합니다.
def join_all(*s):
    res = ""
    for x in s: res += x
    print(res)
join_all("H", "e", "l", "l", "o")

19. Args vs single list parameter (Theory) / 여러 데이터를 넘길 때 리스트 하나를 넘길지, 가변 인자를 쓸지 선택해야 합니다.
print("Use *args for loose items")

20. Final Review / [복습] 에러 코드와 여러 개의 상세 메시지를 받아 한 줄로 나열합니다.
def log_errors(code, *msgs):
    print(f"[{code}]", end=" ")
    for m in msgs: print(m, end=", ")
log_errors(404, "Invalid Path", "Null Data")

---

Lv68. Variadic Keywords (**kwargs) / 가변 키워드 인자
Description: 매개변수 이름을 포함하여 몇 개가 들어올지 모르는 데이터를 딕셔너리로 받는 법을 익힙니다. / Use **kwargs to accept arbitrary keyword arguments as a dictionary.

1. Basic Kwargs / **kwargs는 이름=값 형태로 들어온 인자들을 딕셔너리로 묶어줍니다.
def info(**kwargs):
    print(kwargs)
info(name="Alice", age=25)

2. Extensible Profile / 기본 ID 외에 추가 정보를 유동적으로 받을 때 유용합니다.
def profile(id, **extra):
    print(f"ID: {id}")
    for k, v in extra.items():
        print(f"{k}: {v}")
profile("user01", tier="Gold", score=1000)

3. Config with Get / 딕셔너리의 get()을 활용해 기본값이 있는 설정을 관리합니다.
def set_config(**opt):
    theme = opt.get("theme", "light")
    print(f"Theme: {theme}")
set_config(zoom=1.2)

4. Style Explorer / 어떤 스타일 속성이 들어왔는지 키 목록만 출력해 봅니다.
def draw_obj(type, **style):
    print(f"Type: {type}, Styles: {list(style.keys())}")
draw_obj("Box", color="red", border=1)

5. DB Query Sim / 데이터베이스 업데이트용 쿼리를 생성하기 좋은 구조입니다.
def update_db(table, **data):
    print(f"Update {table} with {data}")
update_db("users", name="Bob", login=True)

6. Key Membership / 특정 키워드가 들어왔는지 in 연산자로 확인합니다.
def test(**kwargs):
    if "admin" in kwargs: print("Admin Login")
test(admin=True, user="a")

7. Greeting Map / 다중 유저 이름을 받아 개별 인사를 수행합니다.
def greet(**names):
    for k in names: print(f"Hello {names[k]}")
greet(u1="Alice", u2="Bob")

8. Dict Unpacking / 딕셔너리 앞에 **를 붙이면 내용을 풀어 키워드 인자로 전달합니다.
config = {"v": 1, "s": "ok"}
def show(v, s): print(v, s)
show(**config)

9. Both Variadic Types / 가변 위치 인자와 가변 키워드 인자를 동시에 사용할 수 있습니다.
def fn(*args, **kwargs):
    print(len(args), len(kwargs))
fn(1, 2, a=3, b=4)

10. Attribute Builder / HTML 태그처럼 속성 이름과 값을 동적으로 받을 때 씁니다.
def build_tag(name, **attrs):
    print(f"<{name} {attrs}>")
build_tag("img", src="a.jpg", alt="hi")

11. Default kwarg combination / 필수 인자와 가변 키워드를 섞습니다.
def save(path, **data):
    print(f"To {path}: {data}")
save("/tmp", size=100)

12. Counting extra fields / 몇 개의 추가 키가 들어왔는지 봅니다.
def count_extra(**kw):
    print(len(kw))
count_extra(a=1, b=2, c=3)

13. Value type check in kwargs / 모든 값이 숫자인지 봅니다 (맛보기).
def nums_only(**kw):
    print(all(type(v) == int for v in kw.values()))
nums_only(a=1, b="2")

14. Nested dictionary from kwargs / 가변 인자를 이용해 중첩 구조를 만듭니다.
def nest(name, **sub):
    d = {name: sub}
    print(d)
nest("user", id=1, age=20)

15. Formatting dynamic strings / 키워드를 문자열 템플릿에 적용합니다.
def fill(temp, **kw):
    print(temp.format(**kw))
fill("{n} is {a}", n="Bob", a=20)

16. Keyword priority / 딕셔너리로 넘길 때 우선순위를 봅니다.
d = {"a": 1}
def show(a): print(a)
show(**d)

17. Cleaning kwargs / 특정 키를 제외하고 나머진 처리합니다.
def clean(**kw):
    kw.pop("secret", None)
    print(kw)
clean(id=1, secret="123")

18. Key transformation via kwargs / 모든 키를 대문자로 바꿔 출력합니다.
def upper_keys(**kw):
    print({k.upper(): v for k, v in kw.items()})
upper_keys(name="a", age=1)

19. Merging multiple dicts via unpacking / 두 딕셔너리를 풀어서 하나의 호출로 보냅니다.
d1, d2 = {"a": 1}, {"b": 2}
def merge(a, b): print(a, b)
merge(**d1, **d2)

20. Final Review / [복습] 유저 ID와 함께 가변적인 상세 필드들을 모두 집계합니다.
def save_profile(id, **extra):
    print(f"Saving {id}...")
    print(f"Data count: {len(extra)}")
save_profile("ant", email="a@b.com", exp=120, lang="py")

---

Lv69. Scope / 지역 변수와 전역 변수
Description: 함수 안에서 만든 변수(Local)와 밖에서 만든 변수(Global)의 범위 차이를 이해합니다. / Understand the difference between local and global variables and their lifetime.

1. Local Identity / 함수 내부의 x는 밖의 x와는 다른 별개의 '지역 변수'입니다.
x = 10
def fn():
    x = 20
    print("Local:", x)
fn()
print("Global:", x)

2. Modifying Global / 함수 밖의 변수를 안에서 직접 수정하려면 global 키워드가 필요합니다.
total = 0
def add(n):
    global total
    total += n
add(10)
print(total)

3. Accessing Parent / 안쪽 함수(중첩 함수)는 바깥쪽 함수의 변수를 읽을 수 있습니다.
def outer():
    v = "out"
    def inner():
        print(v)
    inner()
outer()

4. Lifetime Error / 함수가 끝나면 내부의 지역 변수는 사라지므로 밖에서 쓸 수 없습니다.
def fn():
    local_v = 100
# print(local_v) # Error!
print("local_v is not accessible here")

5. Counter Cycle / 전역 카운터 변수를 함수로 제어하는 가장 기본적인 구조입니다.
count = 0
def up():
    global count
    count += 1
up(); up()
print(count)

6. Accidental Local / global 선언 없이 대입하면 이름만 같은 새로운 지역 변수가 생성됩니다.
c = 1
def set_val(n):
    c = n # This is local!
set_val(10)
print(c)

7. Nonlocal Keyword / 중첩 함수에서 부모 함수의 변수를 수정하려면 nonlocal을 씁니다.
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
    inner()
    print(x)
outer()

8. String Global Update / 전역 문자열 변수의 내용을 함수 내부에서 교체합니다.
g_msg = "A"
def change():
    global g_msg
    g_msg = "B"
change()
print(g_msg)

9. Shadowing / 매개변수는 지역 변수의 성질을 가지므로 밖의 변수를 가립니다.
v = 5
def fn(v):
    print(v + 1)
fn(10)
print(v)

10. Simple Local / 단순하게 함수 안에서만 쓰이고 사라지는 데이터는 지역 변수로 관리합니다.
def log():
    t = "Local"
    print(t)
log()

11. Global list modification / 리스트는 global 선언 없이도 내용을 바꿀 수 있습니다 (메모리 주소 참조).
lst = []
def add_to():
    lst.append(1)
add_to()
print(lst)

12. Name clash / 전역과 지역 이름이 같을 때 함수 내부의 우선순위를 봅니다.
val = "G"
def show():
    val = "L"
    print(val)
show()

13. Persistent state simulation / 전역 변수로 상태를 유지합니다.
ready = False
def toggle():
    global ready
    ready = not ready
toggle()
print(ready)

14. Constants inside / 함수 안에서만 쓰는 고정 상수를 선언합니다.
def circle(r):
    PI = 3.14
    print(PI * r * r)
circle(5)

15. Multiple globals / 여러 전역 변수를 동시에 선언합니다.
x, y = 0, 0
def move():
    global x, y
    x, y = 1, 1
move()
print(x, y)

16. Nonlocal vs Global (theory) / nonlocal은 한 단계 위가 아닌, 가장 가까운 부모 스코프를 찾습니다 (이론).
print("nonlocal finds the nearest enclosing scope")

17. Reading global without global keyword / 읽기만 할 때는 global 키워드가 없어도 됩니다.
S = "Secret"
def read_s():
    print(S)
read_s()

18. Re-binding global (Error case) / 읽은 후에 대입하려 하면 UnboundLocalError가 날 수 있습니다 (이론).
# v = 1
# def e(): print(v); v = 2
print("Reading then assigning without global causes error")

19. Scope search order / LEGB(Local -> Enclosing -> Global -> Built-in) 규칙을 상기합니다 (이론).
print("LEGB search order")

20. Final Review / [복습] 전역 점수 변수를 생성하고, 함수를 통해 보너스 점수를 누적 업데이트 합니다.
score = 0
def hit(p):
    global score
    score += p
hit(10)
print(f"Current Score: {score}")

---

Lv70. [Challenge] Multi-Logger / [챌린지] 다기능 로그 모듈
Description: [챌린지] 키워드 인자, 가변 인자, 전역 변수를 조합하여 전문적인 로그 기록기를 만듭니다. / Building a professional logging module using arguments and scopes.

1. Record Buffer / 전역 리스트에 메시지를 차곡차곡 쌓아 기록합니다.
logs = []
def log(msg):
    global logs
    logs.append(msg)
log("Start")
print(logs)

2. Priority Level / 기본 레벨은 INFO이며, 필요시 커스텀 레벨을 지정하는 로그함수입니다.
def p_log(msg, level="INFO"):
    print(f"[{level}] {msg}")
p_log("Normal")
p_log("Crash", "ERROR")

3. Bulk Logging / 여러 개의 메시지를 한꺼번에 받아 각각 로그로 남깁니다.
def log_multi(*msgs):
    for m in msgs: print(f"[LOG] {m}")
log_multi("Init", "Load", "Run")

4. Dynamic Metadata / 키워드 인자로 시간 등의 옵션 정보를 유동적으로 받습니다.
def log_opt(msg, **opt):
    time = opt.get("time", "00:00")
    print(f"{time}: {msg}")
log_opt("Hello", time="09:30")

5. Buffer Clear / 전역 기록 리스트를 초기화하는 기능의 함수입니다.
def clear_log():
    global logs
    logs = []
    print("Log Cleared")
clear_log()

6. Prefix Control / 문자열 접두사를 키워드 인자로 변경하여 출력을 제약합니다.
def log_fmt(msg, prefix=">>>"):
    print(f"{prefix} {msg}")
log_fmt("Update", prefix="[SYS]")

7. Advanced Report / 고정 인자, 가변 인자, 가변 키워드 인자를 모두 사용하여 종합 보고를 합니다.
def report(msg, *tags, **meta):
    print(f"Msg: {msg}")
    print(f"Tags: {tags}")
    print(f"Meta: {meta}")
report("Hi", "py", "dev", ver=1.0)

8. Stats Counter / 지금까지 쌓인 전체 로그의 개수를 출력합니다.
def count_log():
    print(f"Total Logs: {len(logs)}")
count_log()

9. Last Entry / 가장 최근에 기록된 마지막 로그를 찾아 반환합니다.
def get_last():
    return logs[-1] if logs else "None"
print(get_last())

10. Formatted Step / 단계 번호 정렬과 상태 메시지를 보여주는 실전 로그함수입니다.
def log_step(s, status="OK"):
    print(f"Step {s:02d} ... {status}")
log_step(1, "RUNNING")

11. Unique logs filter / 중복을 제거한 로그 목록을 보여줍니다.
def unique_logs():
    print(list(set(logs)))
unique_logs()

12. Saving to file simulation / 파일 저장 로직을 시뮬레이션합니다.
def save_sim(fname="log.txt"):
    print(f"Writing {len(logs)} items to {fname}")
save_sim()

13. Critical alert check / 특정 단어가 포함되면 위험 신호를 보냅니다.
def is_crit(m):
    return "FAIL" in m.upper()
print(is_crit("Disk failure"))

14. Log batch string / 모든 로그를 하나의 긴 문자열로 합칩니다.
def get_all_str():
    return " | ".join(logs)
print(get_all_str())

15. Argument mapping logic / 키워드로 받은 딕셔너리를 유려하게 출력합니다.
def log_map(**d):
    for k, v in d.items(): print(f"{k} -> {v}")
log_map(user="bot", mode="test")

16. Selective clear / 특정 인덱스 이전 로그만 지웁니다 (맛보기).
def slice_log(n):
    global logs
    logs = logs[n:]
slice_log(1)

17. Search in logs / 특정 검색어가 포함된 로그를 필터링합니다.
def search(q):
    return [l for l in logs if q in l]
print(search("Start"))

18. Log with retry count / 재시도 횟수까지 같이 기록합니다.
def log_retry(m, r=0):
    print(f"{m} (Tries: {r})")
log_retry("Connect", 3)

19. Time wrapper / (맛보기) 함수 처리 시간을 출력하는 껍데기입니다.
def time_log(msg):
    import time
    print(f"[{time.time():.0f}] {msg}")
time_log("Checkpoint")

20. Final Review / [종합] 가변 인자들을 합쳐 문장을 만들고, 티어 정보를 붙여 전역 리스트에 저장합니다.
all_logs = []
def smart_log(*m, tier="INFO"):
    global all_logs
    entry = f"[{tier}] {' '.join(m)}"
    all_logs.append(entry)
    print(entry)
smart_log("Disk", "Full", tier="CRITICAL")
