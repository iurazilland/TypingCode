# Phase 5: 객체지향 및 고급 문법 (Lv 81 - 85) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 81: 클래스와 인스턴스 기초 (Class)
**설명**: 비슷한 종류의 데이터를 담는 틀(Class)과 그 틀로 만든 실제 객체(Instance)를 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Robot:\n    pass\nr1 = Robot()\nprint(r1)` | `class`로 설계도를 만들고, 호출하여 실체(인스턴스)를 생성합니다. |
| 2 | `class User:\n    name = "Alice"\nu1 = User()\nprint(u1.name)` | 클래스 내부에 정의된 변수(속성)에 마침표`.`를 찍어 접근합니다. |
| 3 | `class Item:\n    v = 0\np1 = Item()\np1.v = 10\nprint(p1.v)` | 생성된 객체의 속성값을 외부에서 변경할 수 있습니다. |
| 4 | `class Tool:\n    def say(self):\n        print("Hi")\nt = Tool()\nt.say()` | 클래스 내부의 함수(메서드)는 첫 번째 인자로 반드시 `self`를 가져야 합니다. |
| 5 | `class Dog:\n    def bark(self):\n        print("Woof!")\nmy_dog = Dog()\nmy_dog.bark()` | 객체가 수행할 동작을 메서드로 정의하고 호출합니다. |
| 6 | `class App:\n    ver = 1.0\na1, a2 = App(), App()\nprint(a1.ver, a2.ver)` | 하나의 클래스로 여러 개의 독리적인 객체를 만들 수 있습니다. |
| 7 | `class Calc:\n    def show(self, n):\n        print(f"Num: {n}")\nc = Calc()\nc.show(100)` | 매개변수를 받는 메서드를 정의하여 데이터를 전달합니다. |
| 8 | `class Info:\n    msg = "Ready"\ndef print_msg(obj):\n    print(obj.msg)\nprint_msg(Info())` | 객체 자체를 함수의 인자로 넘겨서 내부 속성을 활용할 수 있습니다. |
| 9 | `class Page:\n    def open(self):\n        print("Open Page")\np = Page()\nprint(type(p))` | `type()`을 써보면 우리가 만든 클래스 이름이 타입으로 출력됩니다. |
| 10 | `class Empty: pass\ne = Empty()\ne.temp = 1\nprint(e.temp)` | 클래스에 정의되지 않은 속성도 동적으로 추가할 수(권장되지는 않음) 있습니다. |
| 20 | `class Player:\n    name = "Newbie"\n    def greet(self):\n        print(f"Welcome, {self.name}")\np = Player()\np.greet()` | [복습] 자기 자신의 속성(`self.name`)에 접근하여 출력하는 메서드를 만듭니다. |
| * | *(세트 11-19 생략, 클래스/인스턴스 생성 연습)* | ... |

---

## 🟦 Lv 82: 생성자 함수 (__init__)
**설명**: 객체가 만들어질 때(탄생할 때) 자동으로 실행되어 초기 데이터를 설정하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class User:\n    def __init__(self, n):\n        self.name = n\nu1 = User("Alice")\nprint(u1.name)` | `__init__`은 객체 생성 시 넘겨받은 인자로 속성을 초기화합니다. |
| 2 | `class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\np = Point(10, 20)\nprint(p.x, p.y)` | 두 개 이상의 데이터를 받아 객체 내부의 좌표 정보로 저장합니다. |
| 3 | `class Item:\n    def __init__(self, name, price=0):\n        self.name = name\n        self.price = price\np1 = Item("Milk")\nprint(p1.price)` | 생성자에서도 매개변수의 기본값을 설정할 수 있습니다. |
| 4 | `class Robot:\n    def __init__(self):\n        print("Robot Born")\nr = Robot()` | 인자를 받지 않더라도 객체 생성 순간에 특정 코드를 실행할 수 있습니다. |
| 5 | `class Stat:\n    def __init__(self, hp):\n        self.hp = hp\n        self.max_hp = hp\ns = Stat(100)\nprint(s.max_hp)` | 입력받은 값 하나로 여러 내부 속성을 초기화하는 예제입니다. |
| 6 | `class Car:\n    def __init__(self, brand):\n        self.brand = brand.upper()\nc = Car("tesla")\nprint(c.brand)` | 생성자 내부에서 데이터를 가공하여 속성에 저장할 수 있습니다. |
| 7 | `class Box:\n    def __init__(self, items=[]):\n        self.items = items\nb = Box(["A", "B"])\nprint(len(b.items))` | 리스트와 같은 복합 자료형을 받아 속성으로 가집니다. |
| 8 | `class Log:\n    def __init__(self, msg):\n        print(f"[INIT] {msg}")\nLog("System Start")` | 화면에 로그를 찍으며 시작하는 생성자 예시입니다. |
| 9 | `class User:\n    def __init__(self, id):\n        self.id = id\n        self.active = True\nu = User("admin")\nprint(u.active)` | 특정 속성을 고정된 초기값(`True`)으로 설정하며 시작합니다. |
| 10 | `class Meta:\n    def __init__(self, **kwargs):\n        self.data = kwargs\nm = Meta(ver=1.0, lang="py")\nprint(m.data)` | 가변 키워드 인자를 받아 데이터를 통째로 딕셔너리 속성에 넣습니다. |
| 20 | `class Profile:\n    def __init__(self, n, a):\n        self.name, self.age = n, a\n    def show(self):\n        print(f"{self.name}({self.age})")\np = Profile("Bob", 20)\np.show()` | [복습] 이름과 나이로 초기화한 뒤, 이를 예쁘게 출력하는 메서드를 추가합니다. |
| * | *(세트 11-19 생략, 다양한 생성자 초기화 패턴 연습)* | ... |

---

## 🟦 Lv 83: 메서드와 셀프 (Methods & Self)
**설명**: 객체 내부에서 다른 메서드를 부르거나 속성을 수정하는 등 '상호작용'하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Counter:\n    def __init__(self):\n        self.val = 0\n    def up(self):\n        self.val += 1\nc = Counter()\nc.up()\nprint(c.val)` | 메서드 내부에서 `self.속성명`을 써서 객체의 데이터를 수정합니다. |
| 2 | `class Stat:\n    def __init__(self, hp):\n        self.hp = hp\n    def is_alive(self):\n        return self.hp > 0\ns = Stat(10)\nprint(s.is_alive())` | 객체의 상태 정보를 확인하여 결과를 반환하는 메서드입니다. |
| 3 | `class User:\n    def __init__(self, n):\n        self.name = n\n    def rename(self, new_n):\n        self.name = new_n\nu = User("A")\nu.rename("B")\nprint(u.name)` | 외부에서 새 데이터를 받아 내부 속성을 덮어쓰는 메서드입니다. |
| 4 | `class Tool:\n    def a(self): print("A")\n    def b(self):\n        self.a()\n        print("B")\nTool().b()` | `self.메서드명()`을 사용하여 클래스 내의 다른 메서드를 호출할 수 있습니다. |
| 5 | `class Calc:\n    def add(self, a, b): return a + b\n    def show(self, a, b):\n        print(self.add(a, b))\nCalc().show(1, 2)` | 내부 계산 로직과 출력 로직을 분리하여 `self`로 연결합니다. |
| 6 | `class Score:\n    def __init__(self, v): self.v = v\n    def update(self, v): self.v = max(self.v, v)\ns = Score(80)\ns.update(70)\nprint(s.v)` | 기존 값과 새 값을 비교하여 큰 쪽으로 유지하는 업데이트 로직입니다. |
| 7 | `class msg:\n    def __init__(self, t): self.t = t\n    def get_upper(self): return self.t.upper()\nm = msg("hi")\nprint(m.get_upper())` | 내부 문자열 속성을 가공하여 밖으로 돌려주는 메서드입니다. |
| 8 | `class Lamp:\n    is_on = False\n    def toggle(self):\n        self.is_on = not self.is_on\nl = Lamp()\nl.toggle()\nprint(l.is_on)` | 참/거짓 상태를 반전시키는 토글 메서드 구현 예제입니다. |
| 9 | `class Item:\n    def __init__(self, price): self.price = price\n    def get_tax(self): return self.price * 0.1\n    def get_total(self): return self.price + self.get_tax()\nprint(Item(1000).get_total())` | 내부 수치 계산 메서드들의 결과물을 조합하여 최종값을 냅니다. |
| 10 | `class UI:\n    def __init__(self): self.w = 10\n    def set_w(self, w): self.w = w; return self\nui = UI().set_w(20)\nprint(ui.w)` | `return self`를 쓰면 메서드를 연속적으로 연결(Chaining)할 수 있습니다. |
| 20 | `class Game:\n    def __init__(self): self.score = 0\n    def hit(self, p): self.score += p\n    def report(self): print(f"Score: {self.score}")\ng = Game()\ng.hit(100); g.report()` | [복습] 누적 점수 메서드와 현재 상황을 출력하는 보고 메서드를 결합합니다. |
| * | *(세트 11-19 생략, 객체 내부 상호작용 연습)* | ... |

---

## 🟦 Lv 84: 클래스 변수와 정적 메서드
**설명**: 개별 객체가 아닌 클래스 전체가 공유하는 데이터와 독립적인 함수(Static)를 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Robot:\n    count = 0\n    def __init__(self):\n        Robot.count += 1\nr1, r2 = Robot(), Robot()\nprint(Robot.count)` | 클래스 변수(`count`)는 모든 객체가 공유하며, 전체 개수 집계 등에 씁니다. |
| 2 | `class App:\n    VER = 1.2\n    @staticmethod\n    def info():\n        print("App System")\nApp.info()` | `@staticmethod`는 `self` 없이 클래스 이름을 통해 바로 호출하는 함수입니다. |
| 3 | `class Calc:\n    @staticmethod\n    def add(a, b): return a + b\nprint(Calc.add(1, 2))` | 객체를 만들 필요가 없는 순수 계산 로직 등을 정적 메서드로 만듭니다. |
| 4 | `class User:\n    MIN_AGE = 19\n    def check(self, a):\n         return a >= User.MIN_AGE\nprint(User().check(20))` | 클래스 공통 기준값(`MIN_AGE`)을 메서드 내부에서 참조합니다. |
| 5 | `class Box:\n    LIMIT = 10\n    def __init__(self): self.cnt = 0\n    def is_full(self):\n        return self.cnt >= Box.LIMIT\nprint(Box().is_full())` | 모든 상자가 공통적으로 가지는 한계치를 클래스 변수로 관리합니다. |
| 6 | `class Tool:\n    label = "T"\n    @classmethod\n    def get_label(cls):\n        return cls.label\nprint(Tool.get_label())` | `@classmethod`는 `self` 대신 클래스 자체(`cls`)를 인자로 받아 공통 속성에 접근합니다. |
| 7 | `class ID:\n    _id = 0\n    @classmethod\n    def gen(cls):\n        cls._id += 1\n        return cls._id\nprint(ID.gen(), ID.gen())` | 클래스 메서드를 사용하여 유일한 일련번호를 순차적으로 생성합니다. |
| 8 | `class Config:\n    theme = "dark"\n# Config.theme = "light"\nprint(Config.theme)` | 객체 생성 없이 클래스 변수 자체를 설정 값의 저장소로 활용합니다. |
| 9 | `class Math:\n    @staticmethod\n    def is_even(n): return n % 2 == 0\nprint(Math.is_even(10))` | 유틸리티 성격의 함수를 클래스 안에 모아 관리하는 방식입니다. |
| 10 | `class Mix:\n    count = 0\n    def __init__(self):\n        Mix.count += 1\n    def show(self): print(Mix.count)\nMix().show()` | 인스턴스 메서드(`show`) 내부에서도 클래스 변수에 접근할 수 있습니다. |
| 20 | `class Sys:\n    VER = "v1"\n    @staticmethod\n    def log(m): print(f"[{Sys.VER}] {m}")\nSys.log("Init OK")` | [복습] 클래스 공통 버전 정보를 정적 로그 메서드에서 활용하여 출력합니다. |
| * | *(세트 11-19 생략, 공통 변수 및 유틸리티 메서드 연습)* | ... |

---

## 🟦 Lv 85: [Challenge] 은행 계좌 시스템 (Bank)
**설명**: [챌린지] 클래스, 생성자, 메서드를 모두 동원하여 입금/출금/잔액 기능을 구현합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Account:\n    def __init__(self, owner, bal=0):\n        self.owner = owner\n        self.bal = bal\na = Account("Alice", 1000)\nprint(a.owner)` | 계좌주와 초기 잔액을 설정하는 생성자입니다. |
| 2 | `class Account:\n    def __init__(self, b): self.bal = b\n    def deposit(self, m):\n        self.bal += m\n        print(f"In: {m}")\na = Account(100)\na.deposit(50)\nprint(a.bal)` | 돈을 넣어 잔액을 늘리는 입금 메서드를 구현합니다. |
| 3 | `class Account:\n    def __init__(self, b): self.bal = b\n    def withdraw(self, m):\n        if self.bal >= m:\n            self.bal -= m\n            return m\n        return 0\na = Account(100)\nprint(f"Got: {a.withdraw(50)}")` | 잔액이 충분할 때만 돈을 빼주는 출금 메서드와 조건문입니다. |
| 4 | `class Account:\n    def __init__(self, b): self.bal = b\n    def show(self):\n        print(f"Current Balance: {self.bal:,} Won")\nAccount(50000).show()` | 현재 잔액을 콤마 포맷과 함께 예쁘게 보여주는 메서드입니다. |
| 5 | `class Bank:\n    count = 0\n    def __init__(self):\n        Bank.count += 1\nb1, b2 = Bank(), Bank()\nprint(f"Total Accounts: {Bank.count}")` | 클래스 변수를 이용해 은행에 개설된 전체 계좌 수를 관리합니다. |
| 6 | `class VIP:\n    def __init__(self, b): self.bal = b\n    def add_interest(self):\n        self.bal *= 1.05\nVIP(1000).add_interest()` | 이자를 계산하여 잔액에 바로 반영하는 메서드입니다. |
| 7 | `class Safe:\n    def __init__(self, pw): self.pw = pw\n    def check(self, p): return self.pw == p\nprint(Safe("123").check("123"))` | 비밀번호 확인 로직을 가진 간단한 금고 기능입니다. |
| 8 | `class Transfer:\n    @staticmethod\n    def fee(m): return m * 0.01\nprint(f"Fee: {Transfer.fee(1000)}")` | 송금 수수료를 계산하는 정적 메서드 예시입니다. |
| 9 | `class Log:\n    @staticmethod\n    def write(m): print(f"[BANK] {m}")\nLog.write("Transaction OK")` | 은행 거래 기록을 남기는 정적 알림 메서드입니다. |
| 10 | `class User: pass\nu = User(); u.name = "Bob"\nprint(f"User Obj: {u.name}")` | 기본 클래스 외부에 속성을 주입하는 방식의 환기성 예제입니다. |
| 20 | `class Account:\n    def __init__(self, n, b=0):\n        self.n, self.b = n, b\n    def tr(self, m):\n        if self.b >= m:\n            self.b -= m; print("OK")\n        else: print("Error")\na = Account("K", 100); a.tr(50); print(a.b)` | [종합] 계좌 생성 후, 특정 금액을 차감(출금) 시도하고 최종 잔액을 확인합니다. |
| * | *(세트 11-19 생략, 은행 시스템 로직 연계 연습)* | ... |
