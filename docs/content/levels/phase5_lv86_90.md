# Phase 5: 객체지향 및 고급 문법 (Lv 86 - 90) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 86: 상속 (Inheritance)
**설명**: 기존 클래스의 기능을 그대로 물려받아 새로운 클래스를 만드는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Parent:\n    def say(self): print("Hi")\nclass Child(Parent):\n    pass\nc = Child()\nc.say()` | `Child` 클래스는 `Parent` 클래스의 메서드를 그대로 사용할 수 있습니다. |
| 2 | `class Animal:\n    def move(self): print("Moving")\nclass Bird(Animal):\n    def fly(self): print("Flying")\nb = Bird()\nb.move(); b.fly()` | 부모의 기능(`move`)은 물려받고, 자신의 새로운 기능(`fly`)을 추가합니다. |
| 3 | `class Item:\n    name = "Tool"\nclass Weapon(Item):\n    pass\nprint(Weapon.name)` | 부모 클래스의 클래스 변수 속성도 자식 클래스가 물려받습니다. |
| 4 | `class Human:\n    def walk(self): print("Walking")\nclass Dev(Human):\n    def code(self): print("Coding")\nDev().walk()` | `Dev` 인스턴스에서 부모 클래스의 메서드를 직접 호출해 실행합니다. |
| 5 | `class A: pass\nclass B(A): pass\nprint(issubclass(B, A))` | `issubclass()` 함수로 특정 클래스가 다른 클래스의 자식인지 확인합니다. |
| 6 | `class Shape:\n    color = "Red"\nclass Square(Shape):\n    pass\nprint(Square().color)` | 공통 속성(색상)을 부모에게 두고 자식들이 이를 공유하는 구조입니다. |
| 7 | `class Phone:\n    def call(self): print("Calling...")\nclass SmartPhone(Phone):\n    pass\nSmartPhone().call()` | 기존 전화 기능을 물려받은 스마트폰 클래스의 기초 예제입니다. |
| 8 | `class Base:\n    def __init__(self): self.v = 10\nclass Sub(Base): pass\nprint(Sub().v)` | 부모의 생성자에서 초기화된 속성도 자식이 가지게 됩니다. |
| 9 | `class Parent: pass\nclass Child(Parent): pass\nc = Child()\nprint(isinstance(c, Parent))` | 자식 객체는 부모 클래스의 인스턴스로도 인정됩니다(`isinstance`). |
| 10 | `class Machine:\n    def power_on(self): print("On")\nclass Computer(Machine): pass\nComputer().power_on()` | 전원 켜기 등 공통 동작을 부모 클래스로 추상화하는 방식입니다. |
| 20 | `class User:\n    def login(self): print("Welcome")\nclass Admin(User):\n    def del_msg(self): print("DELETED")\na = Admin()\na.login(); a.del_msg()` | [복습] 기본 유저 기능을 물려받고, 관리자만의 특수 권한 기능을 추가합니다. |
| * | *(세트 11-19 생략, 클래스 상속 기본 연습)* | ... |

---

## 🟦 Lv 87: 메서드 오버라이딩 (Overriding)
**설명**: 부모에게 물려받은 메서드를 자식의 상황에 맞게 덮어써서 재정의하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Parent:\n    def say(self): print("Hi")\nclass Child(Parent):\n    def say(self): print("Hello")\nChild().say()` | 자식이 똑같은 이름의 메서드를 만들면 부모의 것 대신 자식의 것이 호출됩니다. |
| 2 | `class Animal:\n    def speak(self): print("...")\nclass Dog(Animal):\n    def speak(self): print("Woof")\nDog().speak()` | 동물마다 울음소리를 다르게 구현하는 전형적인 오버라이딩 예제입니다. |
| 3 | `class Shape:\n    def draw(self): print("Shape")\nclass Circle(Shape):\n    def draw(self): print("Circle")\nCircle().draw()` | 도형 종류에 따라 그리는 동작을 재정의합니다. |
| 4 | `class Unit:\n    def attack(self): print("10 Dmg")\nclass Boss(Unit):\n    def attack(self): print("50 Dmg")\nBoss().attack()` | 일반 유닛보다 더 강력한 보스의 공격력을 오버라이딩으로 구현합니다. |
| 5 | `class Printer:\n    def show(self, m): print(m)\nclass ColorPrinter(Printer):\n    def show(self, m): print(f"COLOR: {m}")\nColorPrinter().show("Hi")` | 출력 형식을 조금 더 화려한 버전으로 덮어쓰는 예시입니다. |
| 6 | `class Car:\n    def go(self): print("Driving")\nclass SportsCar(Car):\n    def go(self): print("Flying Fast")\nSportsCar().go()` | 이동 수단 클래스에서 성능이 향상된 하위 기종의 동작을 변경합니다. |
| 7 | `class User:\n    def info(self): print("Role: Guest")\nclass Admin(User):\n    def info(self): print("Role: Root")\nAdmin().info()` | 기본 역할 정보를 관리자 용으로 변경하여 표시합니다. |
| 8 | `class Log:\n    def log(self, m): print(m)\nclass TagLog(Log):\n    def log(self, m): print(f"#[{m}]")\nTagLog().log("Init")` | 로그 기록 방식을 장식 기호가 포함된 형태로 업데이트합니다. |
| 9 | `class Clock:\n    def time(self): print("12:00")\nclass DigitalClock(Clock):\n    def time(self): print("12:00:00")\nDigitalClock().time()` | 시간 표시의 정밀도를 높여서 재정의하는 클래스입니다. |
| 10 | `class Player:\n    def move(self): print("Wait")\nclass Bot(Player):\n    def move(self): print("Random Move")\nBot().move()` | 기본 동작(대기)을 자동 동작(랜덤 이동)으로 대체합니다. |
| 20 | `class Price:\n    def val(self): return 100\nclass Sale(Price):\n    def val(self): return 80\nprint(f"Price: {Sale().val()}")` | [복습] 원래 가격을 반환하는 메서드를 할인된 가격을 반환하도록 자식에서 덮어씁니다. |
| * | *(세트 11-19 생략, 메서드 재정의 및 덮어쓰기 연습)* | ... |

---

## 🟦 Lv 88: super() 연산자
**설명**: 오버라이딩을 하더라도 부모 클래스의 원래 기능을 버리지 않고 가져와 활용하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Parent:\n    def say(self): print("Hi")\nclass Child(Parent):\n    def say(self):\n        super().say()\n        print("Nice to meet you")\nChild().say()` | `super().say()`를 통해 부모의 인사말을 먼저 출력하고 내용을 덧붙입니다. |
| 2 | `class Base:\n    def __init__(self, n): self.name = n\nclass Sub(Base):\n    def __init__(self, n, a):\n        super().__init__(n)\n        self.age = a\ns = Sub("Alice", 20)\nprint(s.name, s.age)` | 부모의 생성자를 호출해 이름을 설정한 뒤, 자식만의 추가 속성(나이)을 저장합니다. |
| 3 | `class Item:\n    def __init__(self, p): self.p = p\nclass Taxed(Item):\n    def __init__(self, p):\n        super().__init__(p * 1.1)\nprint(Taxed(100).p)` | 부모 생성자에 가공된 값(세금 포함 가격)을 전달하여 저장합니다. |
| 4 | `class Log:\n    def write(self, m): print(f"LOG: {m}")\nclass SysLog(Log):\n    def write(self, m):\n        super().write(f"[SYS] {m}")\nSysLog().write("Init")` | 메시지 앞에 시스템 접두사를 붙여 부모의 로그 기능을 실행합니다. |
| 5 | `class Robot:\n    def run(self): print("Motor On")\nclass FastRobot(Robot):\n    def run(self):\n        print("Turbo!")\n        super().run()\nFastRobot().run()` | 부모의 동작 실행 전후에 자식만의 특별한 사전 작업을 추가합니다. |
| 6 | `class User:\n    def __init__(self, id): self.id = id\nclass Vip(User):\n    def __init__(self, id, tier):\n        super().__init__(id); self.tier = tier\nprint(Vip("A", "Gold").id)` | 회원 가입 로직을 물려받고 회원 등급 속성을 확장하는 아주 흔한 패턴입니다. |
| 7 | `class Calc:\n    def go(self, n): return n + 1\nclass Plus(Calc):\n    def go(self, n): return super().go(n) + 1\nprint(Plus().go(10))` | 부모의 연산 결과에 추가적인 연산을 더하는 방식입니다. |
| 8 | `class UI:\n    def clear(self): print("Cleaning")\nclass App(UI):\n    def clear(self):\n        print("Save State")\n        super().clear()\nApp().clear()` | 화면을 지우기 전에 상태를 먼저 저장하는 부모 메서드 활용법입니다. |
| 9 | `class Animal:\n    def __init__(self, s): self.s = s\nclass Cat(Animal):\n    def __init__(self): super().__init__("Meow")\nprint(Cat().s)` | 부모 생성자에 고정된 특정 값("Meow")을 넘겨서 객체를 초기화합니다. |
| 10 | `class A:\n    def d(self): print("A")\nclass B(A):\n    def d(self): super().d(); print("B")\nB().d()` | 상속 단계를 타고 부모의 기능을 호출하며 기능을 확장해 나갑니다. |
| 20 | `class Player:\n    def __init__(self, n): self.n = n\nclass Knight(Player):\n    def __init__(self, n, k): super().__init__(n); self.k = k\nKnight("A", "Sword")` | [복습] 부모 생성자로 플레이어 이름을 설정하고, 자식은 무기(Kind) 속성을 추가합니다. |
| * | *(세트 11-19 생략, super() 활용 생성자/메서드 확장 연습)* | ... |

---

## 🟦 Lv 89: 매직 메서드 기초 (Magic Methods)
**설명**: `__str__`이나 `__len__` 처럼 파이썬이 특수한 상황(출력, 길이 재기 등)에 자동으로 부르는 메서드들을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class User:\n    def __init__(self, n): self.n = n\n    def __str__(self): return f"User:{self.n}"\nprint(User("Alice"))` | `__str__`은 객체를 `print()` 하거나 `str()`로 바꿀 때 보여질 문자열을 정의합니다. |
| 2 | `class Box:\n    def __init__(self, lst): self.lst = lst\n    def __len__(self): return len(self.lst)\nprint(len(Box([1, 2])))` | `__len__`을 정의하면 우리가 만든 객체에도 `len()` 함수를 쓸 수 있게 됩니다. |
| 3 | `class Point:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def __repr__(self): return f"P({self.x}, {self.y})"\nprint(repr(Point(1, 2)))` | `__repr__`은 개발자용 객체 표현 방식(디버깅 시 사용)을 정의합니다. |
| 4 | `class Score:\n    def __init__(self, v): self.v = v\n    def __add__(self, other): return self.v + other.v\nprint(Score(10) + Score(20))` | `__add__`를 구현하면 객체끼리 `+` 연산자로 더하는 기능을 만들 수 있습니다. |
| 5 | `class Text:\n    def __init__(self, t): self.t = t\n    def __contains__(self, k): return k in self.t\nprint("P" in Text("Python"))` | `__contains__`를 쓰면 객체 안에 `in` 키워드를 사용해 값을 검색할 수 있습니다. |
| 6 | `class Val:\n    def __init__(self, v): self.v = v\n    def __eq__(self, o): return self.v == o.v\nprint(Val(10) == Val(10))` | `__eq__`는 두 객체의 값이 같은지(`==`) 비교하는 기준을 정의합니다. |
| 7 | `class ListObj:\n    def __init__(self, l): self.l = l\n    def __getitem__(self, i): return self.l[i]\nprint(ListObj([1, 2])[0])` | `__getitem__`은 객체 뒤에 `[index]`를 붙여 값을 꺼낼 수 있게 해줍니다. |
| 8 | `class Msg:\n    def __init__(self, t): self.t = t\n    def __bool__(self): return len(self.t) > 0\nprint(bool(Msg("Hi")))` | `__bool__`은 객체를 `if` 조건문 등에 썼을 때 참/거짓 판단 기준을 정합니다. |
| 9 | `class Multi:\n    def __init__(self, n): self.n = n\n    def __call__(self, x): return self.n * x\nf = Multi(10)\nprint(f(2))` | `__call__`을 구현하면 객체 자체를 함수처럼 `이름()` 으로 호출할 수 있습니다. |
| 10 | `class Item:\n    def __init__(self, n): self.n = n\n    def __del__(self): print("Deleted")\ni = Item("A"); del i` | `__del__`은 객체가 메모리에서 사라질 때(소멸할 때) 자동으로 실행됩니다. |
| 20 | `class User:\n    def __init__(self, n, s): self.n, self.s = n, s\n    def __str__(self): return f"{self.n}({self.s})"\nprint(str(User("Lee", 100)))` | [복습] 사용자 이름과 점수를 담은 객체를 문자열로 나타낼 양식을 정의합니다. |
| * | *(세트 11-19 생략, 다양한 매직 메서드 오버로딩 연습)* | ... |

---

## 🟦 Lv 90: [Challenge] 게임 유닛 시스템 (Game Hero)
**설명**: [챌린지] 상속, 오버라이딩, super()를 모두 활용하여 전사와 마법사 캐릭터 시스템을 구축합니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `class Unit:\n    def __init__(self, name): self.name = name\n    def move(self): print("Moving")\nclass Hero(Unit): pass\nprint(Hero("Link").name)` | 모든 유닛의 공통 속성(이름)과 동작을 가진 부모 클래스를 만듭니다. |
| 2 | `class Knight(Hero):\n    def move(self): print("Running Fast")\nKnight("Arthur").move()` | 기사(Knight) 캐릭터는 더 빠르게 이동하도록 동작을 덮어씁니다. |
| 3 | `class Mage(Hero):\n    def __init__(self, name, mp): super().__init__(name); self.mp = mp\nm = Mage("Gandalf", 100)\nprint(m.mp)` | 마법사(Mage)는 이름 외에 추가로 MP(마력) 속성을 가지게 확장합니다. |
| 4 | `class Wizard(Mage):\n    def move(self): print("Teleporting")\nWizard("Oz", 50).move()` | 전사 뿐 아니라 마법사 계열도 이동 방식(순상이동)을 오버라이딩 합니다. |
| 5 | `class Unit:\n    def attack(self): print("10 Damage")\nclass Strong(Unit):\n    def attack(self): super().attack(); print("+10 Bonus")\nStrong("Huge").attack()` | 부모의 공격 기능을 실행한 뒤 자신만의 추가 데미지를 덧붙입니다. |
| 6 | `class Item:\n    def __str__(self): return "Sword"\nprint(f"Equipped: {Item()}")` | 아이템 객체를 문자열로 출력했을 때 이름이 나오도록 매직 메서드를 씁니다. |
| 7 | `class Hero:\n    def __init__(self, level): self.level = level\n    def __eq__(self, o): return self.level == o.level\nprint(Hero(10) == Hero(10))` | 두 영웅의 레벨이 같으면 같은 등급으로 간주하도록 비교 기준을 세웁니다. |
| 8 | `class Party:\n    def __init__(self, mem): self.mem = mem\n    def __len__(self): return len(self.mem)\nprint(len(Party(["A", "B"])))` | 파티 객체의 길이를 재면 소속 멤버 수가 나오도록 구현합니다. |
| 9 | `class Skill:\n    def __call__(self): print("Fire!")\nfire = Skill(); fire()` | 스킬 객체 자체를 호출하면 기술이 실행되도록 만듭니다. |
| 10 | `class Boss(Unit):\n    def __init__(self, n): super().__init__(n)\n    def __str__(self): return f"BOSS:{self.name}"\nprint(Boss("Dragon"))` | 부모 생성자로 초기화하고 출력 형태는 보스답게 재정의합니다. |
| 20 | `class Unit:\n    def __init__(self, n, hp): self.n, self.hp = n, hp\nclass Tank(Unit):\n    def __init__(self, n, hp, arm): super().__init__(n, hp); self.arm = arm\nt = Tank("T1", 200, 50); print(f"{t.n}:{t.hp}:{t.arm}")` | [종합] 유닛 정보를 상속받아 탱크 유닛을 만들고 이름, 체력, 방어력을 모두 초기화하여 확인합니다. |
| * | *(세트 11-19 생략, 게임 클래스 계층 설계 연습)* | ... |
