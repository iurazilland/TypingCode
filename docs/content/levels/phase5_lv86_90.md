# Phase 5: 객체지향 및 고급 문법 (Lv 86 - 90) 상세 세트

---

Lv86. Inheritance / 상속
Description: 기존 클래스의 기능을 그대로 물려받아 새로운 클래스를 만드는 법을 익힙니다. / Learn how to create new classes by inheriting features from existing ones.

1. Basic Inheritance / Child 클래스는 Parent 클래스의 메서드를 그대로 사용할 수 있습니다.
class Parent:
    def say(self): print("Hi")
class Child(Parent):
    pass
c = Child()
c.say()

2. Functional Extension / 부모의 기능(move)은 물려받고, 자신의 새로운 기능(fly)을 추가합니다.
class Animal:
    def move(self): print("Moving")
class Bird(Animal):
    def fly(self): print("Flying")
b = Bird()
b.move()
b.fly()

3. Attribute Inheritance / 부모 클래스의 클래스 변수 속성도 자식 클래스가 물려받습니다.
class Item:
    name = "Tool"
class Weapon(Item):
    pass
print(Weapon.name)

4. Parent Method Call / Dev 인스턴스에서 부모 클래스의 메서드를 직접 호출해 실행합니다.
class Human:
    def walk(self): print("Walking")
class Dev(Human):
    def code(self): print("Coding")
d = Dev()
d.walk()

5. Checking Hierarchy / issubclass() 함수로 특정 클래스가 다른 클래스의 자식인지 확인합니다.
class A: pass
class B(A): pass
print(issubclass(B, A))

6. Shared Feature / 공통 속성(색상)을 부모에게 두고 자식들이 이를 공유하는 구조입니다.
class Shape:
    color = "Red"
class Square(Shape):
    pass
print(Square().color)

7. Device Evolution / 기존 전화 기능을 물려받은 스마트폰 클래스의 기초 예제입니다.
class Phone:
    def call(self): print("Calling...")
class SmartPhone(Phone):
    def web(self): print("Browsing...")
SmartPhone().call()

8. Constructor Inheritance / 부모의 생성자에서 초기화된 속성도 자식이 가지게 됩니다.
class Base:
    def __init__(self): self.v = 10
class Sub(Base): pass
print(Sub().v)

9. Instance Check / 자식 객체는 부모 클래스의 인스턴스로도 인정됩니다 (isinstance).
class Parent: pass
class Child(Parent): pass
c = Child()
print(isinstance(c, Parent))

10. Abstraction Base / 전원 켜기 등 공통 동작을 부모 클래스로 추상화하는 방식입니다.
class Machine:
    def power_on(self): print("On")
class Computer(Machine): pass
Computer().power_on()

11. Numeric inheritance / 부모의 수치 속성을 물려받아 연산합니다.
class Val: n = 100
class Sub(Val): pass
print(Sub().n + 1)

12. Multi-level inheritance / 할아버지-아버지-아들 구조의 상속입니다 (맛보기).
class G: pass
class P(G): pass
class C(P): pass
print(issubclass(C, G))

13. Method inheritance check / 부모 메서드가 자식에서도 유효한지 봅니다.
class A:
    def f(self): return 1
class B(A): pass
print(B().f())

14. Character inheritance / 부모의 문자를 상속받습니다.
class Mark: char = "#"
class Tag(Mark): pass
print(Tag().char)

15. Overriding concept intro / 자식에서 메서드를 정의하지 않으면 부모 것이 불립니다.
class Boss:
    def msg(self): print("Boss")
class Sub(Boss): pass
Sub().msg()

16. List attribute inheritance / 부모의 리스트 속성을 사용합니다.
class ListBase: data = [1, 2]
class ListSub(ListBase): pass
print(ListSub().data)

17. Inheritance with different names / 클래스 이름만 다르게 해서 상속합니다.
class Old: pass
class New(Old): pass
print(type(New()))

18. Inheriting from built-in (theory) / 파이썬 내장 리스트 등을 상속받을 수도 있습니다 (이론).
class MyList(list): pass
print(MyList([1]))

19. Multiple inheritance (theory) / 여러 클래스에서 동시에 상속받을 수도 있습니다 (이론).
class A: pass
class B: pass
class C(A, B): pass
print(issubclass(C, A) and issubclass(C, B))

20. Final Review / [복습] 기본 유저 기능을 물려받고, 관리자만의 특수 권한 기능을 추가합니다.
class User:
    def login(self): print("Welcome")
class Admin(User):
    def del_msg(self): print("DELETED")
a = Admin()
a.login()
a.del_msg()

---

Lv87. Overriding / 메서드 오버라이딩
Description: 부모에게 물려받은 메서드를 자식의 상황에 맞게 덮어써서 재정의하는 법을 익힙니다. / Learn how to redefine inherited methods in child classes to suit specific needs.

1. Name Clash / 자식이 똑같은 이름의 메서드를 만들면 부모의 것 대신 자식의 것이 호출됩니다.
class Parent:
    def say(self): print("Hi")
class Child(Parent):
    def say(self): print("Hello")
Child().say()

2. Sound Matching / 동물마다 울음소리를 다르게 구현하는 전형적인 오버라이딩 예제입니다.
class Animal:
    def speak(self): print("...")
class Dog(Animal):
    def speak(self): print("Woof")
Dog().speak()

3. Shape Drawing / 도형 종류에 따라 그리는 동작을 재정의합니다.
class Shape:
    def draw(self): print("Shape")
class Circle(Shape):
    def draw(self): print("Circle")
Circle().draw()

4. Power Scaling / 일반 유닛보다 더 강력한 보스의 공격력을 오버라이딩으로 구현합니다.
class Unit:
    def attack(self): print("10 Dmg")
class Boss(Unit):
    def attack(self): print("50 Dmg")
Boss().attack()

5. Enhanced Printer / 출력 형식을 조금 더 화려한 버전으로 덮어쓰는 예시입니다.
class Printer:
    def show(self, m): print(m)
class ColorPrinter(Printer):
    def show(self, m): print(f"COLOR: {m}")
ColorPrinter().show("Hi")

6. Performance Tuning / 이동 수단 클래스에서 성능이 향상된 하위 기종의 동작을 변경합니다.
class Car:
    def go(self): print("Driving")
class SportsCar(Car):
    def go(self): print("Flying Fast")
SportsCar().go()

7. Role Updating / 기본 역할 정보를 관리자 용으로 변경하여 표시합니다.
class User:
    def info(self): print("Role: Guest")
class Admin(User):
    def info(self): print("Role: Root")
Admin().info()

8. Log Styling / 로그 기록 방식을 장식 기호가 포함된 형태로 업데이트합니다.
class Log:
    def write(self, m): print(m)
class TagLog(Log):
    def write(self, m): print(f"#[{m}]")
TagLog().write("Init")

9. Precision Boost / 시간 표시의 정밀도를 높여서 재정의하는 클래스입니다.
class Clock:
    def time(self): print("12:00")
class DigitalClock(Clock):
    def time(self): print("12:00:00")
DigitalClock().time()

10. Logic Swap / 기본 동작(대기)을 자동 동작(랜덤 이동)으로 대체합니다.
class Player:
    def move(self): print("Wait")
class Bot(Player):
    def move(self): print("Random Move")
Bot().move()

11. Numeric result override / 반환하는 숫자를 바꿉니다.
class A:
    def get(self): return 1
class B(A):
    def get(self): return 2
print(B().get())

12. Substring override / 가이드 문구를 바꿉니다.
class Tool:
    def help(self): return "Tool help"
class Pen(Tool):
    def help(self): return "Pen rules"
print(Pen().help())

13. List processing override / 다른 방식으로 리스트를 다룹니다.
class L:
    def run(self, x): print(x)
class LRev(L):
    def run(self, x): print(x[::-1])
LRev().run("ABC")

14. Boolean check override / 통과 기준을 다르게 잡습니다.
class Exam:
    def ok(self, s): return s >= 60
class Pro(Exam):
    def ok(self, s): return s >= 90
print(Pro().ok(70))

15. Icon override / 기호를 바꿉니다.
class Icon:
    def show(self): print("(*)")
class Star(Icon):
    def show(self): print("(+)")
Star().show()

16. Multi-argument override / 인자 개수가 같아야 함에 주의하며 덮어씁니다.
class Calc:
    def op(self, a, b): print(a + b)
class Multi(Calc):
    def op(self, a, b): print(a * b)
Multi().op(2, 3)

17. Type conversion override / 타입을 다르게 해서 돌려줍니다.
class Cast:
    def get(self, x): return str(x)
class Raw(Cast):
    def get(self, x): return x
print(type(Raw().get(10)))

18. Membership override / 포함 여부 확인 로직을 바꿉니다.
class Data:
    def has(self, x, l): return x in l
class All(Data):
    def has(self, x, l): return True
print(All().has(1, []))

19. Formatting override / 포맷팅 형식을 바꿉니다.
class Fmt:
    def s(self, v): print(f"{v}")
class FmtX(Fmt):
    def s(self, v): print(f"<{v}>")
FmtX().s("Hi")

20. Final Review / [복습] 원래 가격을 반환하는 메서드를 할인된 가격을 반환하도록 자식에서 덮어씁니다.
class Price:
    def val(self): return 100
class Sale(Price):
    def val(self): return 80
print(f"Price: {Sale().val()}")

---

Lv88. super() / super() 연산자
Description: 오버라이딩을 하더라도 부모 클래스의 원래 기능을 버리지 않고 가져와 활용하는 법을 익힙니다. / Use super() to access and extend original parent class functionality.

1. Appending Logic / super().say()를 통해 부모의 인사말을 먼저 출력하고 내용을 덧붙입니다.
class Parent:
    def say(self): print("Hi")
class Child(Parent):
    def say(self):
        super().say()
        print("Nice to meet you")
Child().say()

2. Init Extension / 부모의 생성자를 호출해 이름을 설정한 뒤, 자식만의 추가 속성(나이)을 저장합니다.
class Base:
    def __init__(self, n): self.name = n
class Sub(Base):
    def __init__(self, n, a):
        super().__init__(n)
        self.age = a
s = Sub("Alice", 20)
print(s.name, s.age)

3. Value Preprocessing / 부모 생성자에 가공된 값(세금 포함 가격)을 전달하여 저장합니다.
class Item:
    def __init__(self, p): self.p = p
class Taxed(Item):
    def __init__(self, p):
        super().__init__(p * 1.1)
print(Taxed(100).p)

4. Message Wrap / 메시지 앞에 시스템 접두사를 붙여 부모의 로그 기능을 실행합니다.
class Log:
    def write(self, m): print(f"LOG: {m}")
class SysLog(Log):
    def write(self, m):
        super().write(f"[SYS] {m}")
SysLog().write("Init")

5. Action Sandwich / 부모의 동작 실행 전후에 자식만의 특별한 사전 작업을 추가합니다.
class Robot:
    def run(self): print("Motor On")
class FastRobot(Robot):
    def run(self):
        print("Turbo!")
        super().run()
FastRobot().run()

6. Standard Profile Expansion / 회원 가입 로직을 물려받고 회원 등급 속성을 확장하는 아주 흔한 패턴입니다.
class User:
    def __init__(self, id): self.id = id
class Vip(User):
    def __init__(self, id, tier):
        super().__init__(id)
        self.tier = tier
v = Vip("A", "Gold")
print(v.id, v.tier)

7. Numeric accumulation / 부모의 연산 결과에 추가적인 연산을 더하는 방식입니다.
class Calc:
    def go(self, n): return n + 1
class Plus(Calc):
    def go(self, n): return super().go(n) + 1
print(Plus().go(10))

8. State Protection / 화면을 지우기 전에 상태를 먼저 저장하는 부모 메서드 활용법입니다.
class UI:
    def clear(self): print("Cleaning")
class App(UI):
    def clear(self):
        print("Save State")
        super().clear()
App().clear()

9. Fixed Parent Input / 부모 생성자에 고정된 특정 값("Meow")을 넘겨서 객체를 초기화합니다.
class Animal:
    def __init__(self, s): self.s = s
class Cat(Animal):
    def __init__(self): super().__init__("Meow")
print(Cat().s)

10. Multi-stage Extension / 상속 단계를 타고 부모의 기능을 호출하며 기능을 확장해 나갑니다.
class A:
    def d(self): print("A")
class B(A):
    def d(self):
        super().d()
        print("B")
B().d()

11. Conditional super call / 필요할 때만 부모 기능을 부릅니다.
class Guard:
    def alert(self): print("Alert!")
class Smart(Guard):
    def alert(self, x):
        if x > 10: super().alert()
Smart().alert(15)

12. List expansion via super / 부모가 만든 리스트에 요소를 추가합니다.
class L:
    def __init__(self): self.lst = [0]
class L2(L):
    def __init__(self):
        super().__init__()
        self.lst.append(1)
print(L2().lst)

13. Method return formatting / 부모의 반환값에 태그를 붙입니다.
class Text:
    def get(self): return "Hi"
class Bolt(Text):
    def get(self): return f"*{super().get()}*"
print(Bolt().get())

14. Coordinate offset / 부모가 정한 위치에서 더 이동합니다.
class Pos:
    def __init__(self, x): self.x = x
class Move(Pos):
    def __init__(self, x, dx):
        super().__init__(x + dx)
print(Move(10, 5).x)

15. Boolean and chaining / 부모의 조건 결과와 합칩니다.
class Check:
    def ok(self, x): return x > 0
class Range(Check):
    def ok(self, x): return super().ok(x) and x < 10
print(Range().ok(5))

16. Prefix/Suffix combined / 머리와 꼬리를 다 붙입니다.
class Msg:
    def show(self, m): print(m, end="")
class Wrap(Msg):
    def show(self, m):
        print("[", end="")
        super().show(m)
        print("]")
Wrap().show("A")

17. Dictionary key adding / 부모가 만든 데이터에 키를 추가합니다.
class D:
    def __init__(self): self.d = {"a":1}
class D2(D):
    def __init__(self):
        super().__init__()
        self.d["b"] = 2
print(D2().d)

18. Repeated super call (concept) / (맛보기) 부모의 부모(할아버지)를 부르려면 super()를 거쳐서 올라갑니다 (이론).
print("super() automatically finds the next class in MRO")

19. Calling super outside __init__ / 생성자가 아닌 일반 메서드에서도 super()를 씁니다.
class A:
    def f(self): print("fA")
class B(A):
    def g(self): super().f(); print("gB")
B().g()

20. Final Review / [복습] 부모 생성자로 플레이어 이름을 설정하고, 자식은 무기(Kind) 속성을 추가합니다.
class Player:
    def __init__(self, n): self.n = n
class Knight(Player):
    def __init__(self, n, k):
        super().__init__(n)
        self.kind = k
k = Knight("Arthur", "Sword")
print(f"{k.n} with {k.kind}")

---

Lv89. Magic Methods / 매직 메서드 기초
Description: __str__이나 __len__ 처럼 파이썬이 특수한 상황(출력, 길이 재기 등)에 자동으로 부르는 메서드들을 익힙니다. / Learn special 'magic' methods like __str__ and __len__ for custom object behavior.

1. String Representation / __str__은 객체를 print() 하거나 str()로 바꿀 때 보여질 문자열을 정의합니다.
class User:
    def __init__(self, n): self.n = n
    def __str__(self): return f"User:{self.n}"
print(User("Alice"))

2. Length Customization / __len__을 정의하면 우리가 만든 객체에도 len() 함수를 쓸 수 있게 됩니다.
class Box:
    def __init__(self, lst): self.lst = lst
    def __len__(self): return len(self.lst)
print(len(Box([1, 2])))

3. Developer View / __repr__은 개발자용 객체 표현 방식(디버깅 시 사용)을 정의합니다.
class Point:
    def __init__(self, x, y): self.x, self.y = x, y
    def __repr__(self): return f"P({self.x}, {self.y})"
print(repr(Point(1, 2)))

4. Operator Overloading / __add__를 구현하면 객체끼리 + 연산자로 더하는 기능을 만들 수 있습니다.
class Score:
    def __init__(self, v): self.v = v
    def __add__(self, other): return self.v + other.v
print(Score(10) + Score(20))

5. Containment Check / __contains__를 쓰면 객체 안에 in 키워드를 사용해 값을 검색할 수 있습니다.
class Text:
    def __init__(self, t): self.t = t
    def __contains__(self, k): return k in self.t
print("P" in Text("Python"))

6. Equality Comparison / __eq__는 두 객체의 값이 같은지(==) 비교하는 기준을 정의합니다.
class Val:
    def __init__(self, v): self.v = v
    def __eq__(self, o): return self.v == o.v
print(Val(10) == Val(10))

7. Item Access / __getitem__은 객체 뒤에 [index]를 붙여 값을 꺼낼 수 있게 해줍니다.
class ListObj:
    def __init__(self, l): self.l = l
    def __getitem__(self, i): return self.l[i]
print(ListObj([1, 2])[0])

8. Boolean Truth / __bool__은 객체를 if 조건문 등에 썼을 때 참/거짓 판단 기준을 정합니다.
class Msg:
    def __init__(self, t): self.t = t
    def __bool__(self): return len(self.t) > 0
print(bool(Msg("Hi")))

9. Object Calling / __call__을 구현하면 객체 자체를 함수처럼 이름() 으로 호출할 수 있습니다.
class Multi:
    def __init__(self, n): self.n = n
    def __call__(self, x): return self.n * x
f = Multi(10)
print(f(2))

10. Destructor / __del__은 객체가 메모리에서 사라질 때(소멸할 때) 자동으로 실행됩니다.
class Item:
    def __init__(self, n): self.n = n
    def __del__(self): print("Bye")
i = Item("A")
del i

11. Subtraction / 객체 간의 뺄셈을 정의합니다.
class N:
    def __init__(self, v): self.v = v
    def __sub__(self, o): return self.v - o.v
print(N(10) - N(3))

12. Greater Than / 크기를 비교합니다.
class Age:
    def __init__(self, a): self.a = a
    def __gt__(self, o): return self.a > o.a
print(Age(20) > Age(10))

13. Absolute / abs() 호출 시 동작을 정합니다.
class Pos:
    def __init__(self, v): self.v = v
    def __abs__(self): return abs(self.v)
print(abs(Pos(-5)))

14. Iteration support / (맛보기) for 루프에서 돌 수 있게 하는 __iter__ 기초입니다.
class Seq:
    def __init__(self, l): self.l = l
    def __iter__(self): return iter(self.l)
for x in Seq([1, 2]): print(x)

15. Set item / [index]로 값을 수정할 때의 동작입니다.
class Data:
    def __init__(self): self.d = [0]
    def __setitem__(self, i, v): self.d[i] = v
d = Data(); d[0] = 5; print(d.d[0])

16. Numeric conversion / int() 호출 시 정수로 바꿀 기준입니다.
class Won:
    def __init__(self, v): self.v = v
    def __int__(self): return int(self.v)
print(int(Won(100.5)))

17. Multiplication / 곱셈을 정의합니다.
class X:
    def __init__(self, n): self.n = n
    def __mul__(self, o): return self.n * o.n
print(X(2) * X(3))

18. Formatted string customization / (맛보기) format()에 대응합니다.
class F:
    def __init__(self, v): self.v = v
    def __format__(self, s): return f"{self.v:{s}}"
print(f"{F(12.34):.1f}")

19. Hashable / (맛보기) 셋(set)이나 딕셔너리 키로 쓰기 위해 __hash__를 정의합니다 (이론).
print("Objects need __hash__ and __eq__ to be usable as dict keys")

20. Final Review / [복습] 사용자 이름과 점수를 담은 객체를 문자열로 나타낼 양식을 정의합니다.
class User:
    def __init__(self, n, s): self.n, self.s = n, s
    def __str__(self): return f"{self.n}({self.s})"
print(str(User("Lee", 100)))

---

Lv90. [Challenge] Game Hero / [챌린지] 게임 유닛 시스템
Description: [챌린지] 상속, 오버라이딩, super()를 모두 활용하여 전사와 마법사 캐릭터 시스템을 구축합니다. / Building a game character system using inheritance, overriding, and super().

1. Common Base / 모든 유닛의 공통 속성(이름)과 동작을 가진 부모 클래스를 만듭니다.
class Unit:
    def __init__(self, name): self.name = name
    def move(self): print("Moving")
class Hero(Unit): pass
print(Hero("Link").name)

2. Action Override / 기사(Knight) 캐릭터는 더 빠르게 이동하도록 동작을 덮어씁니다.
class Knight(Hero):
    def move(self): print("Running Fast")
Knight("Arthur").move()

3. Extended Attributes / 마법사(Mage)는 이름 외에 추가로 MP(마력) 속성을 가지게 확장합니다.
class Mage(Hero):
    def __init__(self, name, mp):
        super().__init__(name)
        self.mp = mp
m = Mage("Gandalf", 100)
print(m.name, m.mp)

4. Diverse Overrides / 클래스 계층에서 이동 방식(순상이동)을 오버라이딩 합니다.
class Wizard(Mage):
    def move(self): print("Teleporting")
Wizard("Oz", 50).move()

5. Legacy Wrap / 부모의 공격 기능을 실행한 뒤 자신만의 추가 데미지를 덧붙입니다.
class Unit:
    def attack(self): print("10 Dmg")
class StrongUnit(Unit):
    def attack(self):
        super().attack()
        print("+10 Bonus")
StrongUnit("Ogre").attack()

6. String Info / 아이템 객체를 문자열로 출력했을 때 이름이 나오도록 매직 메서드를 씁니다.
class Item:
    def __init__(self, n): self.n = n
    def __str__(self): return self.n
print(f"Equipped: {Item('Sword')}")

7. Rank Comparison / 두 영웅의 레벨이 같으면 같은 등급으로 간주하도록 비교 기준을 세웁니다.
class Hero:
    def __init__(self, lv): self.lv = lv
    def __eq__(self, o): return self.lv == o.lv
print(Hero(10) == Hero(10))

8. List Len Wrapper / 파티 객체의 길이를 재면 소속 멤버 수가 나오도록 구현합니다.
class Party:
    def __init__(self, mem): self.mem = mem
    def __len__(self): return len(self.mem)
print(len(Party(["A", "B"])))

9. Action Trigger / 스킬 객체 자체를 호출하면 기술이 실행되도록 만듭니다.
class Skill:
    def __call__(self): print("Fire!")
fire = Skill()
fire()

10. Multi-feature Boss / 부모 생성자로 초기화하고 출력 형태는 보스답게 재정의합니다.
class Boss(Unit):
    def __init__(self, n): super().__init__(n)
    def __str__(self): return f"BOSS:{self.name}"
print(Boss("Dragon"))

11. Level up method / 레벨을 올리고 메시지를 출력합니다.
class Player:
    def __init__(self): self.lv = 1
    def level_up(self): self.lv += 1; print("UP!")
p = Player()
p.level_up(); print(p.lv)

12. Health points check / 체력이 바닥났는지 봅니다.
class Stat:
    def __init__(self, hp): self.hp = hp
    def is_dead(self): return self.hp <= 0
print(Stat(0).is_dead())

13. Team registration / 리스트에 유닛 객체를 추가합니다.
class Team:
    def __init__(self): self.units = []
    def add(self, u): self.units.append(u)
t = Team(); t.add(Hero("P1"))
print(len(t.units))

14. Gold management / 골드를 벌고 씁니다.
class Wallet:
    def __init__(self): self.g = 0
    def earn(self, x): self.g += x
w = Wallet(); w.earn(100); print(w.g)

15. Skill damage calc / 마력에 비례한 스킬 데미지를 구합니다.
class Mage:
    def __init__(self, mp): self.mp = mp
    def fire(self): return self.mp * 2
print(Mage(50).fire())

16. Map exploration check / 방문한 지역인지 필터링합니다.
class Map:
    def __init__(self): self.v = []
    def visit(self, p): self.v.append(p)
m = Map(); m.visit("Zone1"); print("Zone1" in m.v)

17. Buff duration / 버프의 남은 턴수를 줄입니다.
class Buff:
    def __init__(self, t): self.t = t
    def tick(self): self.t -= 1
b = Buff(3); b.tick(); print(b.t)

18. Equipment slot / 장비를 착용 중인지 봅니다.
class Char:
    def __init__(self): self.item = None
    def has_item(self): return self.item is not None
print(Char().has_item())

19. Global game speed / 게임 속도를 조절하는 클래스 변수입니다.
class Game:
    speed = 1.0
Game.speed = 2.0
print(Game.speed)

20. Final Review / [종합] 유닛 정보를 상속받아 탱크 유닛을 만들고 이름, 체력, 방어력을 모두 초기화하여 확인합니다.
class Unit:
    def __init__(self, n, hp):
        self.n, self.hp = n, hp
class Tank(Unit):
    def __init__(self, n, hp, arm):
        super().__init__(n, hp)
        self.arm = arm
t = Tank("T1", 200, 50)
print(f"{t.n}:{t.hp}:{t.arm}")
