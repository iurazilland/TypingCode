# Phase 5: 객체지향 및 고급 문법 (Lv 81 - 85) 상세 세트

---

Lv81. Class & Instance / 클래스와 인스턴스 기초
Description: 비슷한 종류의 데이터를 담는 틀(Class)과 그 틀로 만든 실제 객체(Instance)를 익힙니다. / Learn the basics of Object-Oriented Programming (OOP) with classes and instances.

1. Class Blueprints / class로 설계도를 만들고, 호출하여 실체(인스턴스)를 생성합니다.
class Robot:
    pass
r1 = Robot()
print(r1)

2. Class Attributes / 클래스 내부에 정의된 변수(속성)에 마침표 .를 찍어 접근합니다.
class User:
    name = "Alice"
u1 = User()
print(u1.name)

3. Update Attribute / 생성된 객체의 속성값을 외부에서 변경할 수 있습니다.
class Item:
    v = 0
p1 = Item()
p1.v = 10
print(p1.v)

4. Defining Methods / 클래스 내부의 함수(메서드)는 첫 번째 인자로 반드시 self를 가져야 합니다.
class Tool:
    def say(self):
        print("Hi")
t = Tool()
t.say()

5. Object Action / 객체가 수행할 동작을 메서드로 정의하고 호출합니다.
class Dog:
    def bark(self):
        print("Woof!")
my_dog = Dog()
my_dog.bark()

6. Multiple Instances / 하나의 클래스로 여러 개의 독립적인 객체를 만들 수 있습니다.
class App:
    ver = 1.0
a1, a2 = App(), App()
print(a1.ver, a2.ver)

7. Method Parameters / 매개변수를 받는 메서드를 정의하여 데이터를 전달합니다.
class Calc:
    def show(self, n):
        print(f"Num: {n}")
c = Calc()
c.show(100)

8. Instance as Argument / 객체 자체를 함수의 인자로 넘겨서 내부 속성을 활용할 수 있습니다.
class Info:
    msg = "Ready"
def print_msg(obj):
    print(obj.msg)
print_msg(Info())

9. Type of Instance / type()을 써보면 우리가 만든 클래스 이름이 타입으로 출력됩니다.
class Page:
    def open(self):
        print("Open Page")
p = Page()
print(type(p))

10. Dynamic Attributes / 클래스에 정의되지 않은 속성도 동적으로 추가할 수(권장되지는 않음) 있습니다.
class Empty: pass
e = Empty()
e.temp = 1
print(e.temp)

11. Numeric attribute addition / 두 객체의 속성을 더합니다.
class Val: n = 10
v1, v2 = Val(), Val()
print(v1.n + v2.n)

12. Method with return / 값을 반환하는 메서드입니다.
class Bot:
    def get_id(self): return "BOT-01"
print(Bot().get_id())

13. Method updating self attribute / 메서드를 통해 속성을 상수로 업데이트합니다.
class Lamp:
    on = False
    def turn_on(self):
        self.on = True
l = Lamp()
l.turn_on()
print(l.on)

14. Character art method / 반복문을 사용한 메서드입니다.
class Line:
    def draw(self): print("-" * 5)
Line().draw()

15. Multiple attributes / 여러 속성을 한 번에 가집니다.
class Info:
    id = 1
    v = "A"
i = Info()
print(i.id, i.v)

16. List in class / 클래스 변수로 리스트를 가집니다.
class Box:
    items = []
b = Box()
print(b.items)

17. Method alias (theory) / 메서드를 변수에 담아 호출할 수도 있습니다 (맛보기).
class Fn:
    def run(self): print("Run")
f = Fn().run
f()

18. Boolean state method / 상태를 출력합니다.
class Sys:
    active = True
    def check(self): print(self.active)
Sys().check()

19. Instance comparison / 서로 다른 객체인지 비교합니다.
class A: pass
a1, a2 = A(), A()
print(a1 == a2) # False

20. Final Review / [복습] 자기 자신의 속성(self.name)에 접근하여 출력하는 메서드를 만듭니다.
class Player:
    name = "Newbie"
    def greet(self):
        print(f"Welcome, {self.name}")
p = Player()
p.greet()

---

Lv82. Constructor (__init__) / 생성자 함수
Description: 객체가 만들어질 때(탄생할 때) 자동으로 실행되어 초기 데이터를 설정하는 법을 익힙니다. / Learn how to initialize objects with the __init__ constructor.

1. Attribute Init / __init__은 객체 생성 시 넘겨받은 인자로 속성을 초기화합니다.
class User:
    def __init__(self, n):
        self.name = n
u1 = User("Alice")
print(u1.name)

2. Coordinate Init / 두 개 이상의 데이터를 받아 객체 내부의 좌표 정보로 저장합니다.
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
p = Point(10, 20)
print(p.x, p.y)

3. Default Parameters / 생성자에서도 매개변수의 기본값을 설정할 수 있습니다.
class Item:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price
p1 = Item("Milk")
print(p1.price)

4. Message on Birth / 인자를 받지 않더라도 객체 생성 순간에 특정 코드를 실행할 수 있습니다.
class Robot:
    def __init__(self):
        print("Robot Born")
r = Robot()

5. Derived Attributes / 입력받은 값 하나로 여러 내부 속성을 초기화하는 예제입니다.
class Stat:
    def __init__(self, hp):
        self.hp = hp
        self.max_hp = hp
s = Stat(100)
print(s.max_hp)

6. Pre-processing / 생성자 내부에서 데이터를 가공하여 속성에 저장할 수 있습니다.
class Car:
    def __init__(self, brand):
        self.brand = brand.upper()
c = Car("tesla")
print(c.brand)

7. Container Init / 리스트와 같은 복합 자료형을 받아 속성으로 가집니다.
class Box:
    def __init__(self, items):
        self.items = items
b = Box(["A", "B"])
print(len(b.items))

8. Action Logging / 화면에 로그를 찍으며 시작하는 생성자 예시입니다.
class Log:
    def __init__(self, msg):
        print(f"[INIT] {msg}")
Log("System Start")

9. Fixed Initial State / 특정 속성을 고정된 초기값(True)으로 설정하며 시작합니다.
class User:
    def __init__(self, id):
        self.id = id
        self.active = True
u = User("admin")
print(u.active)

10. Variadic Init / 가변 키워드 인자를 받아 데이터를 통째로 딕셔너리 속성에 넣습니다.
class Meta:
    def __init__(self, **kwargs):
        self.data = kwargs
m = Meta(ver=1.0, lang="py")
print(m.data["ver"])

11. Boolean Init / 참/거짓 값을 받아 초기 상태를 정합니다.
class Flag:
    def __init__(self, f): self.f = f
print(Flag(True).f)

12. Type checking in init / (맛보기) 생성자에서 데이터 타입을 확인합니다.
class Num:
    def __init__(self, n):
        if type(n) != int: print("Error")
        self.n = n
Num("A")

13. List Comprehension Init / 범위 기반 리스트를 속성으로 만듭니다.
class Seq:
    def __init__(self, n):
        self.data = [i for i in range(n)]
print(Seq(3).data)

14. String Slicing Init / 단어의 머리글자만 속성으로 저장합니다.
class Key:
    def __init__(self, s): self.k = s[0]
print(Key("Code").k)

15. Object as parameter / 생성자 인자로 다른 객체를 받습니다.
class A: pass
class B:
    def __init__(self, obj_a): self.a = obj_a
b = B(A())
print(type(b.a))

16. Multiple numeric init / 세 숫자를 받아 합계를 저장합니다.
class Sum:
    def __init__(self, a, b, c):
        self.total = a + b + c
print(Sum(1, 2, 3).total)

17. Dictionary mapping init / 딕셔너리를 받아 키와 값을 분리 저장합니다.
class MapData:
    def __init__(self, d):
        self.k = list(d.keys())
        self.v = list(d.values())
m = MapData({"a": 1})
print(m.k)

18. Nested object init / 생성자 안에서 다른 객체를 만듭니다.
class Engine: pass
class Car:
    def __init__(self): self.e = Engine()
print(type(Car().e))

19. Char multiplier init / 글자와 숫자를 받아 장식선을 만듭니다.
class Bar:
    def __init__(self, c, n): self.s = c * n
print(Bar("-", 5).s)

20. Final Review / [복습] 이름과 나이로 초기화한 뒤, 이를 예쁘게 출력하는 메서드를 추가합니다.
class Profile:
    def __init__(self, n, a):
        self.name, self.age = n, a
    def show(self):
        print(f"{self.name}({self.age})")
p = Profile("Bob", 20)
p.show()

---

Lv83. Methods & Self / 메서드와 셀프
Description: 객체 내부에서 다른 메서드를 부르거나 속성을 수정하는 등 '상호작용'하는 법을 익힙니다. / Learn how methods interact with object attributes and other methods using self.

1. State Modifier / 메서드 내부에서 self.속성명을 써서 객체의 데이터를 수정합니다.
class Counter:
    def __init__(self):
        self.val = 0
    def up(self):
        self.val += 1
c = Counter()
c.up()
print(c.val)

2. Getter Method / 객체의 상태 정보를 확인하여 결과를 반환하는 메서드입니다.
class Stat:
    def __init__(self, hp):
        self.hp = hp
    def is_alive(self):
        return self.hp > 0
s = Stat(10)
print(s.is_alive())

3. Property Updater / 외부에서 새 데이터를 받아 내부 속성을 덮어쓰는 메서드입니다.
class User:
    def __init__(self, n):
        self.name = n
    def rename(self, new_n):
        self.name = new_n
u = User("A")
u.rename("B")
print(u.name)

4. Call Other Method / self.메서드명()을 사용하여 클래스 내의 다른 메서드를 호출할 수 있습니다.
class Tool:
    def a(self): print("A")
    def b(self):
        self.a()
        print("B")
Tool().b()

5. Delegate Logic / 내부 계산 로직과 출력 로직을 분리하여 self로 연결합니다.
class Calc:
    def add(self, a, b): return a + b
    def show(self, a, b):
        print(self.add(a, b))
Calc().show(1, 2)

6. Smart Update / 기존 값과 새 값을 비교하여 큰 쪽으로 유지하는 업데이트 로직입니다.
class Score:
    def __init__(self, v): self.v = v
    def update(self, v): self.v = max(self.v, v)
s = Score(80)
s.update(70)
print(s.v)

7. Access & Process / 내부 문자열 속성을 가공하여 밖으로 돌려주는 메서드입니다.
class Msg:
    def __init__(self, t): self.t = t
    def get_upper(self): return self.t.upper()
m = Msg("hi")
print(m.get_upper())

8. State Toggler / 참/거짓 상태를 반전시키는 토글 메서드 구현 예제입니다.
class Lamp:
    def __init__(self): self.on = False
    def toggle(self):
        self.on = not self.on
l = Lamp()
l.toggle()
print(l.on)

9. Calculation Suite / 내부 수치 계산 메서드들의 결과물을 조합하여 최종값을 냅니다.
class Item:
    def __init__(self, price): self.price = price
    def get_tax(self): return self.price * 0.1
    def get_total(self): return self.price + self.get_tax()
print(Item(1000).get_total())

10. Method Chaining / return self를 쓰면 메서드를 연속적으로 연결(Chaining)할 수 있습니다.
class UI:
    def __init__(self): self.w = 10
    def set_w(self, w): self.w = w; return self
ui = UI().set_w(20)
print(ui.w)

11. Numeric multiplier method / 속성에 특정 값을 곱해 업데이트합니다.
class Scale:
    def __init__(self, v): self.v = v
    def multi(self, n): self.v *= n
s = Scale(10)
s.multi(3)
print(s.v)

12. List adder method / 리스트 속성에 요소를 추가합니다.
class Box:
    def __init__(self): self.items = []
    def put(self, x): self.items.append(x)
b = Box()
b.put("A")
print(b.items)

13. String prefixer / 속성에 머리말을 붙여 반환합니다.
class Tag:
    def __init__(self, v): self.v = v
    def wrap(self): return f"[{self.v}]"
print(Tag("MSG").wrap())

14. Bulk update method / 여러 속성을 한꺼번에 바꿉니다.
class Pos:
    def __init__(self): self.x, self.y = 0, 0
    def move(self, dx, dy): self.x += dx; self.y += dy
p = Pos()
p.move(1, 2)
print(p.x, p.y)

15. Boolean check with message / 상태에 따라 다른 문구를 출력합니다.
class Wifi:
    def __init__(self): self.on = True
    def show(self): print("Connected" if self.on else "Disconnected")
Wifi().show()

16. Comparison method / 다른 객체와 속성을 비교합니다.
class Val:
    def __init__(self, n): self.n = n
    def is_larger(self, other): return self.n > other.n
v1, v2 = Val(10), Val(5)
print(v1.is_larger(v2))

17. Reset method / 속성을 초기 상태로 돌립니다.
class Game:
    def __init__(self): self.p = 0
    def reset(self): self.p = 0
g = Game()
g.p = 100
g.reset()
print(g.p)

18. Internal loop / 속성(리스트)을 순회하며 출력합니다.
class ListShow:
    def __init__(self, l): self.l = l
    def run(self):
        for x in self.l: print(x)
ListShow([1, 2]).run()

19. Format string getter / 속성을 포맷팅하여 돌려줍니다.
class Won:
    def __init__(self, v): self.v = v
    def text(self): return f"{self.v:,}원"
print(Won(1000).text())

20. Final Review / [복습] 누적 점수 메서드와 현재 상황을 출력하는 보고 메서드를 결합합니다.
class Game:
    def __init__(self): self.score = 0
    def hit(self, p): self.score += p
    def report(self): print(f"Score: {self.score}")
g = Game()
g.hit(100); g.report()

---

Lv84. Class Variables & Static Methods / 클래스 변수와 정적 메서드
Description: 개별 객체가 아닌 클래스 전체가 공유하는 데이터와 독립적인 함수(Static)를 익힙니다. / Understand shared class attributes and independent static methods.

1. Shared Counter / 클래스 변수(count)는 모든 객체가 공유하며, 전체 개수 집계 등에 씁니다.
class Robot:
    count = 0
    def __init__(self):
        Robot.count += 1
r1, r2 = Robot(), Robot()
print(Robot.count)

2. Static Info / @staticmethod는 self 없이 클래스 이름을 통해 바로 호출하는 함수입니다.
class App:
    @staticmethod
    def info():
        print("App System")
App.info()

3. Utility Static / 객체를 만들 필요가 없는 순수 계산 로직 등을 정적 메서드로 만듭니다.
class Calc:
    @staticmethod
    def add(a, b): return a + b
print(Calc.add(1, 2))

4. Global Const Lookup / 클래스 공통 기준값(MIN_AGE)을 메서드 내부에서 참조합니다.
class User:
    MIN_AGE = 19
    def check(self, a):
         return a >= User.MIN_AGE
print(User().check(20))

5. Shared Limit / 모든 상자가 공통적으로 가지는 한계치를 클래스 변수로 관리합니다.
class Box:
    LIMIT = 10
    def __init__(self): self.cnt = 0
    def is_full(self):
        return self.cnt >= Box.LIMIT
print(Box().is_full())

6. Class Method / @classmethod는 self 대신 클래스 자체(cls)를 인자로 받아 공통 속성에 접근합니다.
class Tool:
    label = "T"
    @classmethod
    def get_label(cls):
        return cls.label
print(Tool.get_label())

7. Serial Gen / 클래스 메서드를 사용하여 유일한 일련번호를 순차적으로 생성합니다.
class ID:
    _id = 0
    @classmethod
    def gen(cls):
        cls._id += 1
        return cls._id
print(ID.gen(), ID.gen())

8. Global Config Store / 객체 생성 없이 클래스 변수 자체를 설정 값의 저장소로 활용합니다.
class Config:
    theme = "dark"
print(Config.theme)

9. Logic Grouper / 유틸리티 성격의 함수를 클래스 안에 모아 관리하는 방식입니다.
class Math:
    @staticmethod
    def is_even(n): return n % 2 == 0
print(Math.is_even(10))

10. Mixed Access / 인스턴스 메서드(show) 내부에서도 클래스 변수에 접근할 수 있습니다.
class Mix:
    count = 0
    def __init__(self):
        Mix.count += 1
    def show(self): print(Mix.count)
Mix().show()

11. Class variable update / 클래스 변수 자체를 업데이트합니다.
class Sys: ver = 1.0
Sys.ver = 1.1
print(Sys.ver)

12. Static method string join / 문자열을 합치는 정적 유틸리티입니다.
class Str:
    @staticmethod
    def join(a, b): return a + b
print(Str.join("A", "B"))

13. List shared across instances / 모든 인스턴스가 공유하는 리스트입니다 (주의!).
class Logs:
    all = []
    def add(self, m): Logs.all.append(m)
l1 = Logs(); l1.add("1")
print(Logs.all)

14. Classmethod factory / (맛보기) 이름이 없는 기본 객체를 만드는 팩토리 메서드입니다.
class User:
    def __init__(self, n): self.n = n
    @classmethod
    def guest(cls): return cls("Guest")
print(User.guest().n)

15. Static boolean check / 필터링용 정적 함수입니다.
class Filter:
    @staticmethod
    def ok(x): return x > 0
print(Filter.ok(5))

16. Global prefix variable / 모든 로그에 붙을 공통 접두사입니다.
class Log:
    PRE = "[sys]"
    def show(self, m): print(f"{Log.PRE} {m}")
Log().show("OK")

17. Class identification / 어떤 클래스인지 이름을 반환합니다.
class Info:
    @classmethod
    def name(cls): return cls.__name__
print(Info.name())

18. Static range creation / 범위를 리스트로 돌려주는 정적 메서드입니다.
class Seq:
    @staticmethod
    def get(n): return list(range(n))
print(Seq.get(3))

19. Dynamic class variable / 클래스 레벨에서 동적으로 속성을 추가합니다.
class Meta: pass
Meta.kind = "data"
print(Meta.kind)

20. Final Review / [복습] 클래스 공통 버전 정보를 정적 로그 메서드에서 활용하여 출력합니다.
class Sys:
    VER = "v1"
    @staticmethod
    def log(m): print(f"[{Sys.VER}] {m}")
Sys.log("Init OK")

---

Lv85. [Challenge] Bank System / [챌린지] 은행 계좌 시스템
Description: [챌린지] 클래스, 생성자, 메서드를 모두 동원하여 입금/출금/잔액 기능을 구현합니다. / Building a banking system simulation using classes and methods.

1. Account Init / 계좌주와 초기 잔액을 설정하는 생성자입니다.
class Account:
    def __init__(self, owner, bal=0):
        self.owner = owner
        self.bal = bal
a = Account("Alice", 1000)
print(a.owner)

2. Deposit Logic / 돈을 넣어 잔액을 늘리는 입금 메서드를 구현합니다.
class Account:
    def __init__(self, b): self.bal = b
    def deposit(self, m):
        self.bal += m
        print(f"In: {m}")
a = Account(100)
a.deposit(50)
print(a.bal)

3. Withdraw with Balance Check / 잔액이 충분할 때만 돈을 빼주는 출금 메서드와 조건문입니다.
class Account:
    def __init__(self, b): self.bal = b
    def withdraw(self, m):
        if self.bal >= m:
            self.bal -= m
            return m
        return 0
a = Account(100)
print(f"Got: {a.withdraw(50)}")

4. Balance View / 현재 잔액을 콤마 포맷과 함께 예쁘게 보여주는 메서드입니다.
class Account:
    def __init__(self, b): self.bal = b
    def show(self):
        print(f"Current Balance: {self.bal:,} Won")
Account(50000).show()

5. Account Counter / 클래스 변수를 이용해 은행에 개설된 전체 계좌 수를 관리합니다.
class Bank:
    count = 0
    def __init__(self):
        Bank.count += 1
b1, b2 = Bank(), Bank()
print(f"Total: {Bank.count}")

6. Interest Calc / 이자를 계산하여 잔액에 바로 반영하는 메서드입니다.
class VIP:
    def __init__(self, b): self.bal = b
    def add_interest(self):
        self.bal *= 1.05
v = VIP(1000)
v.add_interest()
print(v.bal)

7. Password Lock / 비밀번호 확인 로직을 가진 간단한 금고 기능입니다.
class Safe:
    def __init__(self, pw): self.pw = pw
    def check(self, p): return self.pw == p
print(Safe("123").check("123"))

8. Static Fee Calc / 송금 수수료를 계산하는 정적 메서드 예시입니다.
class Transfer:
    @staticmethod
    def fee(m): return m * 0.01
print(f"Fee: {Transfer.fee(1000)}")

9. Static Activity Log / 은행 거래 기록을 남기는 정적 알림 메서드입니다.
class Log:
    @staticmethod
    def write(m): print(f"[BANK] {m}")
Log.write("Transaction OK")

10. Dynamic Name Binding / 기본 클래스 외부에 속성을 주입하는 방식의 환기성 예제입니다.
class User: pass
u = User()
u.name = "Bob"
print(f"User: {u.name}")

11. Min Balance Requirement / 최소 유지 잔액 미만이면 경고합니다.
class Acc:
    MIN = 100
    def __init__(self, b): self.b = b
    def check(self):
        if self.b < Acc.MIN: print("Low Balance")
Acc(50).check()

12. Transaction record list / 거래 내역을 리스트에 쌓습니다.
class History:
    def __init__(self): self.logs = []
    def add(self, m): self.logs.append(m)
h = History()
h.add("Deposit 100")
print(h.logs)

13. Multiple withdrawals / 돈을 여러 번 뺍니다.
class Money:
    def __init__(self, b): self.b = b
    def take(self, m): self.b -= m
m = Money(100)
m.take(10); m.take(20)
print(m.b)

14. Checking owner match / 계좌 소유자가 일치하는지 봅니다.
class User:
    def __init__(self, n): self.n = n
    def is_me(self, name): return self.n == name
print(User("Alice").is_me("Alice"))

15. Static currency converter / 원화를 달러로 환산하는 정적 메서드입니다.
class Cur:
    @staticmethod
    def to_usd(won): return won / 1300
print(f"{Cur.to_usd(13000):.1f}")

16. Setting nickname / 닉네임을 설정하거나 변경합니다.
class Profile:
    def __init__(self, n): self.nick = n
    def set_nick(self, n): self.nick = n
p = Profile("A")
p.set_nick("B")
print(p.nick)

17. Initializing with dict/kwargs / 키워드 인자로 개인정보를 초기화합니다.
class UserInfo:
    def __init__(self, **kw): self.data = kw
print(UserInfo(id=1, email="a@b.com").data)

18. Simple interest return / 원금과 이율을 받아 이자액만 리턴합니다.
class Calc:
    @staticmethod
    def get_i(p, r): return p * r
print(Calc.get_i(1000, 0.05))

19. Clearing balance / 잔액을 0으로 만듭니다.
class Acc:
    def __init__(self, b): self.b = b
    def clear(self): self.b = 0
a = Acc(100)
a.clear()
print(a.b)

20. Final Review / [종합] 계좌 생성 후, 특정 금액을 차감(출금) 시도하고 최종 잔액을 확인합니다.
class Account:
    def __init__(self, n, b=0):
        self.n, self.b = n, b
    def tr(self, m):
        if self.b >= m:
            self.b -= m; print("OK")
        else: print("Error")
a = Account("K", 100)
a.tr(50)
print(a.b)
