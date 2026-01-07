# Phase 4: 함수와 프로그램 모듈화 (Lv 66 - 70) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 66: 키워드 인자와 순서 (Keyword Arguments)
**설명**: 매개변수의 이름을 직접 지정하여 데이터를 전달함으로써 인자의 순서가 달라도 정확히 전달하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def info(name, age):\n    print(f"{name}: {age}")\ninfo(age=25, name="Alice")` | 호출 시 `이름=값` 형식을 사용하면 매개변수 순서와 상관없이 전달됩니다. |
| 2 | `def box(w, h, color):\n    print(f"{w}x{h} {color}")\nbox(10, color="Red", h=5)` | 위치 인자와 키워드 인자를 섞어 쓸 때는 위치 인자가 반드시 먼저 와야 합니다. |
| 3 | `def connect(host, port, ssl):\n    print(f"{host}:{port} (SSL:{ssl})")\nconnect("127.0.0.1", ssl=True, port=80)` | 중요한 옵션값들을 명시적으로 이름을 적어 강조할 때 씁니다. |
| 4 | `def profile(user, tier="None"):\n    print(f"{user} rank {tier}")\nprofile(tier="Gold", user="Kim")` | 기본값이 있는 인자도 키워드 방식으로 이름을 찍어서 전달할 수 있습니다. |
| 5 | `def draw(x, y, z=0):\n    print(x, y, z)\ndraw(y=10, x=5)` | 좌표 정보를 명확하게 구분하여 읽기 좋은 코드를 만듭니다. |
| 6 | `def log(m, lv="INF"): print(f"[{lv}] {m}")\nlog(m="Update", lv="ERR")` | 짧은 함지 호출에서도 파라미터 이름을 명시해 실수를 방지합니다. |
| 7 | `def test(a, b, c):\n    print(a, b, c)\ntest(1, c=3, b=2)` | 위치 인자 하나와 키워드 인자 두 개를 조합한 호출입니다. |
| 8 | `def build(target, cpu="x64", ram=8):\n    print(target, cpu, ram)\nbuild("Server", ram=16)` | 특정 기본값만 골라서 덮어쓰고 싶을 때 키워드 인자가 필수입니다. |
| 9 | `def send(to, msg, secret=False):\n    print(f"To:{to}, Msg:{msg}, Secret:{secret}")\nsend(msg="Hi", to="Alice")` | 받는 사람과 메시지 순서를 바꾸어 호출해 봅니다. |
| 10 | `def font(size, bold=False, italic=False):\n    print(size, bold, italic)\nfont(12, italic=True)` | 수많은 옵션 중 필요한 것만 이름을 써서 활성화합니다. |
| 20 | `def report(title, author="N/A", date="2026"):\n    print(f"[{title}] by {author} at {date}")\nreport(date="01-07", title="NEWS")` | [복습] 필수 제목을 넣고, 마지막 날짜값만 키워드로 지정하여 업데이트합니다. |
| * | *(세트 11-19 생략, 키워드 인자 조합 연습)* | ... |

---

## 🟦 Lv 67: 가변 인자 (*args)
**설명**: 몇 개의 인자가 들어올지 미리 알 수 없을 때, 이를 튜플로 한꺼번에 받는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def sum_all(*nums):\n    print(sum(nums))\nsum_all(1, 2, 3, 4)` | `*args`는 들어온 모든 일반 인자들을 하나의 튜플로 묶어줍니다. |
| 2 | `def show_list(*items):\n    for i in items:\n        print("-", i)\nshow_list("A", "B", "C")` | 유동적인 개수의 아이템을 받아 하나씩 반복 출력합니다. |
| 3 | `def greet(msg, *names):\n    for n in names:\n        print(f"{msg}, {name}")\ngreet("Hello", "Alice", "Bob")` | 고정 인자 하나와 가변 인자를 함께 사용할 수 있습니다. |
| 4 | `def multi(*nums):\n    res = 1\n    for n in nums: res *= n\n    return res\nprint(multi(2, 3, 5))` | 입력된 숫자들을 모두 곱하여 반환하는 가변 인자 함수입니다. |
| 5 | `def tag_print(*tags):\n    print(" #".join([""] + list(tags)).strip())\ntag_print("py", "dev")` | 여러 태그를 받아 해시태그 형식으로 합쳐 출력합니다. |
| 6 | `def check_len(*args):\n    print(f"Args count: {len(args)}")\ncheck_len(10, "A", True)` | 몇 개의 데이터가 전달되었는지 길이를 확인합니다. |
| 7 | `def avg(*vals):\n    return sum(vals) / len(vals)\nprint(avg(10, 20, 30))` | 표본의 개수에 상관없이 평균을 구하는 함수입니다. |
| 8 | `def pick_first(*args):\n    print(args[0])\npick_first(1, 2, 3)` | 가변 인자 튜플 중 첫 번째 요소에 접근합니다. |
| 9 | `def combine(sep, *words):\n    print(sep.join(words))\ncombine("|", "A", "B", "C")` | 첫 인자를 구분자로 써서 남은 가변 단어들을 합칩니다. |
| 10 | `nums = [1, 2, 3]\nprint(*nums)` | 리스트 앞에 `*`를 붙여 함수에 넘기면 요소가 풀려서(Unpacking) 전달됩니다. |
| 20 | `def log_errors(code, *msgs):\n    print(f"[{code}]", end=" ")\n    for m in msgs: print(m, end=", ")\nlog_errors(404, "Invalid Path", "Null Data")` | [복습] 에러 코드와 여러 개의 상세 메시지를 받아 한 줄로 나열합니다. |
| * | *(세트 11-19 생략, 가변 위치 인자 활용 연습)* | ... |

---

## 🟦 Lv 68: 가변 키워드 인자 (**kwargs)
**설명**: 매개변수 이름을 포함하여 몇 개가 들어올지 모르는 데이터를 딕셔너리로 받는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def info(**kwargs):\n    print(kwargs)\ninfo(name="Alice", age=25)` | `**kwargs`는 `이름=값` 형태로 들어온 인자들을 딕셔너리로 묶어줍니다. |
| 2 | `def profile(id, **extra):\n    print(f"ID: {id}")\n    for k, v in extra.items():\n        print(f"{k}: {v}")\nprofile("user01", tier="Gold", score=1000)` | 기본 ID 외에 추가 정보를 유동적으로 받을 때 유용합니다. |
| 3 | `def set_config(**opt):\n    theme = opt.get("theme", "light")\n    print(f"Theme: {theme}")\nset_config(zoom=1.2)` | 딕셔너리의 `get()`을 활용해 기본값이 있는 설정을 관리합니다. |
| 4 | `def draw_obj(type, **style):\n    print(f"Type: {type}, Styles: {list(style.keys())}")\ndraw_obj("Box", color="red", border=1)` | 어떤 스타일 속성이 들어왔는지 키 목록만 출력해 봅니다. |
| 5 | `def update_db(table, **data):\n    print(f"Update {table} with {data}")\nupdate_db("users", name="Bob", login=True)` | 데이터베이스 업데이트용 쿼리를 생성하기 좋은 구조입니다. |
| 6 | `def test(**kwargs):\n    if "admin" in kwargs: print("Admin Login")\ntest(admin=True, user="a")` | 특정 키워드가 들어왔는지 `in` 연산자로 확인합니다. |
| 7 | `def greet(**names):\n    for k in names: print(f"Hello {names[k]}")\ngreet(u1="Alice", u2="Bob")` | 다중 유저 이름을 받아 개별 인사를 수행합니다. |
| 8 | `config = {"v": 1, "s": "ok"}\ndef show(v, s): print(v, s)\nshow(**config)` | 딕셔너리 앞에 `**`를 붙이면 내용을 풀어 키워드 인자로 전달합니다. |
| 9 | `def fn(*args, **kwargs):\n    print(len(args), len(kwargs))\nfn(1, 2, a=3, b=4)` | 가변 위치 인자와 가변 키워드 인자를 동시에 사용할 수 있습니다. |
| 10 | `def build_tag(name, **attrs):\n    print(f"<{name} {attrs}>")\nbuild_tag("img", src="a.jpg", alt="hi")` | HTML 태그처럼 속성 이름과 값을 동적으로 받을 때 씁니다. |
| 20 | `def save_profile(id, **extra):\n    print(f"Saving {id}...")\n    print(f"Data count: {len(extra)}")\nsave_profile("ant", email="a@b.com", exp=120, lang="py")` | [복습] 유저 ID와 함께 가변적인 상세 필드들을 모두 집계합니다. |
| * | *(세트 11-19 생략, 가변 키워드 인자 응용 연습)* | ... |

---

## 🟦 Lv 69: 지역 변수와 전역 변수 (Scope)
**설명**: 함수 안에서 만든 변수(`Local`)와 밖에서 만든 변수(`Global`)의 범위 차이를 이해합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `x = 10\ndef fn():\n    x = 20\n    print("Local:", x)\nfn()\nprint("Global:", x)` | 함수 내부의 `x`는 밖의 `x`와는 다른 별개의 '지역 변수'입니다. |
| 2 | `total = 0\ndef add(n):\n    global total\n    total += n\nadd(10)\nprint(total)` | 함수 밖의 변수를 안에서 직접 수정하려면 `global` 키워드가 필요합니다. |
| 3 | `def outer():\n    v = "out"\n    def inner():\n         print(v)\n    inner()\nouter()` | 안쪽 함수(중첩 함수)는 바깥쪽 함수의 변수를 읽을 수 있습니다. |
| 4 | `def fn():\n    local_v = 100\n# print(local_v) # Error!` | 함수가 끝나면 내부의 지역 변수는 사라지므로 밖에서 쓸 수 없습니다. |
| 5 | `count = 0\ndef up():\n    global count\n    count += 1\nup(); up()\nprint(count)` | 전역 카운터 변수를 함수로 제어하는 가장 기본적인 구조입니다. |
| 6 | `c = 1\ndef set_val(n):\n    c = n # This is local!\nset_val(10)\nprint(c)` | `global` 선언 없이 대입하면 이름만 같은 새로운 지역 변수가 생성됩니다. |
| 7 | `def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    print(x)\nouter()` | 중첩 함수에서 부모 함수의 변수를 수정하려면 `nonlocal`을 씁니다. |
| 8 | `g_msg = "A"\ndef change():\n    global g_msg\n    g_msg = "B"\nchange()\nprint(g_msg)` | 전역 문자열 변수의 내용을 함수 내부에서 교체합니다. |
| 9 | `v = 5\ndef fn(v):\n    print(v + 1)\nfn(10)\nprint(v)` | 매개변수는 지역 변수의 성질을 가지므로 밖의 변수를 가립니다(Shadowing). |
| 10 | `def log():\n    t = "Local"\n    print(t)\nlog()` | 단순하게 함수 안에서만 쓰이고 사라지는 데이터는 지역 변수로 관리합니다. |
| 20 | `score = 0\ndef hit(p):\n    global score\n    score += p\nhit(10)\nprint(f"Current Score: {score}")` | [복습] 전역 점수 변수를 생성하고, 함수를 통해 보너스 점수를 누적 업데이트 합니다. |
| * | *(세트 11-19 생략, 변수 범위 제어 연습)* | ... |

---

## 🟦 Lv 70: [Challenge] 다기능 로그 모듈 (Logger)
**설명**: [챌린지] 키워드 인자, 가변 인자, 전역 변수를 조합하여 전문적인 로그 기록기를 만듭니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `logs = []\ndef log(msg):\n    global logs\n    logs.append(msg)\nlog("Start")\nprint(logs)` | 전역 리스트에 메시지를 차곡차곡 쌓아 기록합니다. |
| 2 | `def log(msg, level="INFO"):\n    print(f"[{level}] {msg}")\nlog("Normal")\nlog("Crash", "ERROR")` | 기본 레벨은 INFO이며, 필요시 커스텀 레벨을 지정하는 로그함수입니다. |
| 3 | `def log_multi(*msgs):\n    for m in msgs: print(f"[LOG] {m}")\nlog_multi("Init", "Load", "Run")` | 여러 개의 메시지를 한꺼번에 받아 각각 로그로 남깁니다. |
| 4 | `def log_with_opt(msg, **opt):\n    time = opt.get("time", "00:00")\n    print(f"{time}: {msg}")\nlog_with_opt("Hello", time="09:30")` | 키워드 인자로 시간 등의 옵션 정보를 유동적으로 받습니다. |
| 5 | `def clear_log():\n    global logs\n    logs = []\n    print("Log Cleared")\nclear_log()` | 전역 기록 리스트를 초기화하는 기능의 함수입니다. |
| 6 | `def log_fmt(msg, prefix=">>>"):\n    print(f"{prefix} {msg}")\nlog_fmt("Update", prefix="[SYS]")` | 문자열 접두사를 키워드 인자로 변경하여 출력을 제약합니다. |
| 7 | `def super_log(msg, *tags, **meta):\n    print(f"Msg: {msg}")\n    print(f"Tags: {tags}")\n    print(f"Meta: {meta}")\nsuper_log("Hi", "py", "dev", ver=1.0)` | 고정 인자, 가변 인자, 가변 키워드 인자를 모두 사용하여 종합 보고를 합니다. |
| 8 | `def count_log():\n    print(f"Total Logs: {len(logs)}")\ncount_log()` | 지금까지 쌓인 전체 로그의 개수를 출력합니다. |
| 9 | `def get_last_log():\n    return logs[-1] if logs else "None"\nprint(get_last_log())` | 가장 최근에 기록된 마지막 로그를 찾아 반환합니다. |
| 10 | `def log_step(s, status="OK"):\n    print(f"Step {s:02d} ... {status}")\nlog_step(1, "RUNNING")` | 단계 번호 정렬과 상태 메시지를 보여주는 실전 로그함수입니다. |
| 20 | `all_logs = []\ndef smart_log(*m, tier="INFO"):\n    global all_logs\n    entry = f"[{tier}] {' '.join(m)}"\n    all_logs.append(entry)\n    print(entry)\nsmart_log("Disk", "Full", tier="CRITICAL")` | [종합] 가변 인자들을 합쳐 문장을 만들고, 티어 정보를 붙여 전역 리스트에 저장합니다. |
| * | *(세트 11-19 생략, 고급 로그 시스템 구현 연계)* | ... |
