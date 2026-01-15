# Phase 5: 객체지향 및 고급 문법 (Lv 91 - 95) 상세 세트

---

Lv91. Exception Basics / 예외 처리 기초
Description: 프로그램 실행 중 발생할 수 있는 에러(Exception)를 잡아내어 멈추지 않고 처리하는 법을 익힙니다. / Learn how to handle runtime errors gracefully using try-except.

1. Basic Try / try 안의 코드를 실행하다 에러가 나면 except 부분으로 건너뜁니다.
try:
    print(10 / 0)
except:
    print("Error occurred")

2. Conversion Catch / 문자를 숫자로 바꿀 수 없는 상황의 예외를 처리합니다.
try:
    n = int("abc")
except:
    print("Can't convert to int")

3. Key Lookup Error / 딕셔너리에 없는 키를 조회할 때 발생하는 에러를 잡아냅니다.
d = {"A": 1}
try:
    print(d["B"])
except:
    print("Key not found")

4. Module Missing / 존재하지 않는 모듈을 가져오려 할 때의 상황을 처리합니다.
try:
    import ghost_module
except:
    print("Module missing")

5. Index Out of Range / 리스트의 인덱스 범위를 벗어난 접근 에러를 처리합니다.
lst = [1, 2]
try:
    print(lst[5])
except:
    print("Out of range")

6. Type Mismatch / 숫자와 문자열을 직접 더할 때 발생하는 타입 에러를 잡아냅니다.
try:
    res = 10 + "Apple"
except:
    print("Type mismatch")

7. Name Error / 정의되지 않은 변수를 사용하려 할 때의 에러를 처리합니다.
try:
    print(undefined_var)
except:
    print("Variable not defined")

8. Exception inside Function / 함수 내부에서도 try-except를 사용해 안정성을 높일 수 있습니다.
def test():
    try: print(x)
    except: print("Error in fn")
test()

9. File I/O Error / 파일을 열 수 없을 때 발생하는 입출력 예외를 처리합니다.
try:
    open("none.txt", "r")
except:
    print("File not found")

10. Exception Alias / as e를 붙이면 구체적인 에러 메시지를 변수로 받아 출력할 수 있습니다.
try:
    x = 1/0
except Exception as e:
    print(f"Detail: {e}")

11. Multiple statements in try / try 블록에 여러 줄을 넣으면 첫 에러 발생 지점에서 멈춥니다.
try:
    print("Start")
    x = 1/0
    print("This won't run")
except:
    print("Caught")

12. Boolean flag and try / 에러 발생 여부를 플래그로 기록합니다.
ok = True
try:
    int("hi")
except:
    ok = False
print(f"Status: {ok}")

13. List iteration with try / 리스트 요소 중 에러 나는 것만 피합니다.
vals = [10, "A", 20]
for v in vals:
    try: print(int(v))
    except: print("Skip")

14. Nested try blocks / (맛보기) try 문 안에 또 다른 try 문을 넣습니다.
try:
    try: 1/0
    except: print("Inner caught")
except: print("Outer")

15. Dictionary value conversion / 딕셔너리 값들을 숫자로 바꿀 때 예외 처리입니다.
d = {"a": "10", "b": "x"}
for k in d:
    try: d[k] = int(d[k])
    except: d[k] = 0
print(d)

16. String slicing error check / 인덱싱 에러를 잡습니다.
s = "A"
try: print(s[5])
except: print("Short string")

17. Function parameter check / 잘못된 인자가 들어왔을 때 catch 합니다.
def fn(x):
    try: print(len(x))
    except: print("No length")
fn(10)

18. Arithmetic overflow simulation / 큰 수 연산 시 에러를 시뮬레이션 합니다.
try:
    res = 10**1000 # Actually okay in Python, but let's practice
except: print("Too large")

19. Default value setting via except / 에러 발생 시 기본값을 할당합니다.
try:
    v = 1/0
except:
    v = -1
print(v)

20. Final Review / [복습] 정수 변환이 실패하면 실수 변환을 시도하는 예외 처리 흐름을 만듭니다.
raw = "10.5"
try:
    val = int(raw)
except:
    val = float(raw)
print(f"Final Val: {val}")

---

Lv92. Specific Exceptions / 특정 예외 구분하기
Description: 어떤 에러가 발생했느냐에 따라 서로 다른 대처를 하는 법을 익힙니다. / Learn how to handle different types of exceptions specifically.

1. Zero Division / 0으로 나누었을 때만 발생하는 ZeroDivisionError를 특정해 잡습니다.
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Zero error")

2. Value Error / 값의 형식이 맞지 않을 때 발생하는 ValueError를 처리합니다.
try:
    n = int("A")
except ValueError:
    print("Invalid Value")

3. Scope/Name Error / 변수 이름이 정의되지 않았을 때의 NameError를 특정합니다.
try:
    print(unknown_name)
except NameError:
    print("Name is missing")

4. Key Error / 딕셔너리 키 부재 상황인 KeyError 만을 처리합니다.
d = {}
try:
    v = d["k"]
except KeyError:
    print("Key Error")

5. Grouped Exceptions / 괄호로 묶어서 여러 에러를 한꺼번에 잡을 수도 있습니다.
try:
    v = 10 / 0
except (ValueError, ZeroDivisionError):
    print("Math or Type error")

6. Sequential Excepts / 각각의 에러 타입별로 다른 메시지를 출력하도록 여러 개의 except를 씁니다.
try:
    n = int("10")
    x = 1 / 0
except ValueError:
    print("V err")
except ZeroDivisionError:
    print("Z err")

7. Data Type Error / 데이터 타입이 어긋난 상황인 TypeError 문구 연습입니다.
try:
    "A" + 1
except TypeError:
    print("Wrong data type")

8. Sequence Range / 리스트 등 시퀀스 타입의 범위를 넘었을 때의 IndexError입니다.
try:
    [1][2]
except IndexError:
    print("Index Out")

9. Syntax Error Check / 코드 문법 자체가 틀렸을 때 발생하는 SyntaxError를 처리합니다.
try:
    eval("if x:")
except SyntaxError:
    print("Code syntax error")

10. Missing Attribute / 모듈이나 객체에 없는 속성을 불렀을 때의 AttributeError입니다.
import math
try:
    math.ghost()
except AttributeError:
    print("No such function")

11. Import Error / 모듈을 못 찾았을 때의 ImportError 입니다.
try:
    import no_module
except ImportError:
    print("Import Failed")

12. Mapping Error and Value / KeyError와 ValueError를 각각 다르게 처리합니다.
d = {"a": "hi"}
try:
    v = int(d["a"])
except KeyError: print("No Key")
except ValueError: print("Not Num")

13. File specific error / FileNotFoundError를 명시적으로 잡습니다.
try:
    open("x.txt")
except FileNotFoundError:
    print("File missing")

14. Catching runtime error / 그 외 런타임 에러를 일반으로 잡습니다.
try:
    raise RuntimeError
except RuntimeError:
    print("Runtime Issue")

15. Using base Exception at end / 특정 에러들을 잡고 나머지를 모두 잡으려면 마지막에 Exception을 둡니다.
try:
    x = y # NameError
except ZeroDivisionError: print("Z")
except Exception: print("Other")

16. Enumerate and index catch / 리스트 순회 중 인덱스 접근 오류를 제어합니다.
l = [10]
try:
    for i in range(2): print(l[i])
except IndexError: print("Stop early")

17. Attribute check on instance / 객체에 없는 속성을 읽을 때입니다 (Lv 81-85 응용).
class A: pass
try: print(A().v)
except AttributeError: print("No v")

18. Recursion error hint / 무한 재귀 등으로 인한 에러를 연습합니다 (이론).
print("RecursionError happens when function calls itself infinitely")

19. StopIteration hint / 이터레이터가 끝났을 때의 에러입니다 (맛보기).
it = iter([1])
next(it)
try: next(it)
except StopIteration: print("Done")

20. Final Review / [복습] 입력값을 숫자로 바꾸고 나누는 과정에서 생길 수 있는 두 가지 에러를 개별 처리합니다.
data = "5"
try:
    res = 10 / int(data)
except ValueError:
    print("Need Number")
except ZeroDivisionError:
    print("Not Zero")

---

Lv93. Else & Finally / else와 finally
Description: 에러가 없을 때만 실행하는 코드(else)와 에러 여부와 상관없이 무조건 실행하는 코드(finally)를 익힙니다. / Learn how to use else and finally blocks in exception handling.

1. Always Execute / finally 블록의 코드는 에러가 나든 안 나든 프로그램의 마지막에 꼭 실행됩니다.
try:
    print("Try")
except:
    print("Err")
finally:
    print("End")

2. Success Only / else는 try 안의 코드가 한 번의 에러도 없이 완벽히 끝났을 때만 실행됩니다.
try:
    n = 10
except:
    print("Err")
else:
    print("Success")

3. Resource Cleanup / 파일을 열었을 때 어떤 상황에서든 파일을 안전하게 닫기 위해 finally를 씁니다.
f = None
try:
    print("Working...")
except:
    print("Fail")
finally:
    print("Resource closed")

4. Calculation Branch / 계산이 성공했을 때만 정답 메시지를 보여주고 싶을 때 else가 유용합니다.
try:
    res = 10 / 2
except ZeroDivisionError:
    print("Zero")
else:
    print(f"Result is {res}")

5. Full Structure / try-except-else-finally 전체 구조를 함께 사용하는 예제입니다.
try:
    print("Running")
except Exception as e:
    print(e)
else:
    print("Done")
finally:
    print("Clean up")

6. Return with Finally / 함수에서 return으로 중간에 나가더라도 finally는 거쳐서 나갑니다.
def check():
    try: return 1
    finally: print("Leaving")
print(check())

7. Cascading Results / 에러가 없으면 리턴된 값을 이용해 추가 연산을 수행합니다.
try:
    val = int("10")
except: pass
else:
    print(val * 2)

8. Conditional Output / 리스트 접근에 성공했을 때만 값을 출력합니다.
ls = [1]
try:
    v = ls[0]
except:
    print("Fail")
else:
    print(f"Got: {v}")

9. Progress Tracker / 에러가 발생해도 지금까지의 진행 상황을 로그로 남기는 패턴입니다.
step = 0
try:
    step += 1
    print(f"Step {step}")
    # raise Exception
finally:
    print("Log saved")

10. State Confirmation / 플래그 변수의 최종 상태를 finally에서 확인합니다.
is_ok = False
try:
    n = int("1")
    is_ok = True
finally:
    print(f"Status: {is_ok}")

11. Else with multiple statements / 성공 시 여러 작업을 수행합니다.
try:
    raw = [1, 2]
except: print("E")
else:
    s = sum(raw)
    print(f"Sum: {s}")

12. Finally for counter increment / 에러가 나도 시도 횟수는 올립니다.
tries = 0
try:
    int("A")
except: print("Fail")
finally:
    tries += 1
print(f"Tries: {tries}")

13. Nested else/finally / (맛보기) 중첩 구조에서의 흐름입니다.
try:
    try: print("Inner")
    finally: print("F1")
except: print("E")
else: print("L1")

14. Skipping else on exception / 에러가 나면 else는 무시됨을 확인합니다.
try:
    1/0
except: print("Catch")
else: print("Won't see this")

15. Boolean check in else / 성공적으로 읽어왔을 때만 상태를 바꿉니다.
mode = "ready"
try:
    d = {"v": 1}
except: pass
else:
    mode = "active"
print(mode)

16. Using global in finally / 전역 변수 상태를 꼭 정리합니다.
busy = True
try:
    print("Process")
finally:
    busy = False
print(busy)

17. Returning from else / else 블록에서 결과를 리턴합니다.
def get():
    try: x = 1
    except: return 0
    else: return x
print(get())

18. Exception re-trigger / finally 안에서도 에러가 날 수 있음에 주의합니다 (이론).
print("Errors in finally are also processed")

19. Formatting in finally / 출력 형태를 마감합니다.
try: print("Content")
finally: print("=" * 10)

20. Final Review / [복습] 키 조회 여부에 따라 값을 다르게 설정하고, 마지막에 최종 값을 확정 출력합니다.
try:
    d = {"v": 10}
    x = d["v"]
except KeyError:
    x = 0
else:
    print("Found Key")
finally:
    print(f"Final X: {x}")

---

Lv94. Raising Exceptions / 예외 발생시키기
Description: 파이썬이 잡지 못하는 상황이라도 논리적으로 에러라고 판단되면 인위적으로 예외를 던지는(raise) 법을 익힙니다. / Learn how to intentionally trigger exceptions using the raise keyword.

1. Range Validation / 부적절한 값이 들어오면 raise와 함께 에러 타입, 메시지를 던집니다.
age = -5
if age < 0:
    # raise ValueError("No negative age")
    print("ValueError triggered internally")

2. Custom Logic Error / 사용자 정의 상황(비밀번호 길이)에 대해 일반 예외를 발생시킵니다.
pw = "123"
if len(pw) < 5:
    # raise Exception("Short PW")
    print("Exception triggered for short PW")

3. Guard Condition / 특정 권한이 없을 때 PermissionError를 강제로 발생시킵니다.
def check_admin(u):
    if u != "admin":
        # raise PermissionError
        print("PermissionError triggered")
check_admin("guest")

4. Raise and Catch / 내가 직접 던진 예외를 바로 아래의 except 블록에서 잡아 처리합니다.
try:
    # raise NameError("Custom")
    print("Manually throwing error...")
    raise NameError("MyMsg")
except NameError as e:
    print(e)

5. Boundary Check / 점수 범위를 벗어난 경우 강제로 프로그램을 멈추거나 예외 처리를 유도합니다.
score = 150
if score > 100:
    # raise ValueError("Over 100")
    print("ValueError for score overflow")

6. Argument Sanitizer / 빈 메시지 입력을 차단하기 위해 예외를 던집니다.
def log(m):
    if not m: # raise ValueError
        print("Empty Error")
log("")

7. Detailed Message / 자체적으로 조건을 검사하여 더 구체적인 메시지로 에러를 던집니다.
def divide(a, b):
    if b == 0: raise ZeroDivisionError("Custom zero msg")
    return a / b
# divide(1, 0)

8. Re-raising / 에러를 한 번 출력(로깅)한 뒤, 상위 코드로 전파하기 위해 raise만 다시 씁니다.
try:
    1/0
except Exception as e:
    print(f"Logging: {e}")
    # raise # Re-throw same error

9. Custom Exception Class / 클래스 상속을 통해 나만의 새로운 에러 타입을 만들어 던질 수도 있습니다.
class MyError(Exception): pass
# raise MyError("Special")

10. Mandatory Key / 필수 값이 누락되었을 때 KeyError를 활용해 문제를 알립니다.
d = {}
if "id" not in d:
    # raise KeyError("ID Needed")
    print("KeyError for missing ID")

11. Raising TypeError / 데이터 형식이 틀릴 때 던집니다.
x = "hi"
if type(x) != int:
    # raise TypeError
    print("TypeError triggered")

12. Raise in loop / 루프 중간에 특정 조건을 만나면 던집니다.
for i in [1, 2, 0]:
    if i == 0: # raise ValueError
        print("Found zero error")

13. Raising from list length / 리스트가 비어있으면 안 될 때입니다.
l = []
if not l: # raise IndexError
    print("IndexError for empty list")

14. Nested raise and catch / 내부에서 던지고 외부에서 잡습니다.
def inner(): raise ValueError("In")
try: inner()
except ValueError as e: print(e)

15. Raising with complex message / 속성 정보를 포함해 에러를 던집니다.
u = "Bob"
if u == "Bob": # raise Exception(f"Banned: {u}")
    print("Custom ban triggered")

16. Raising NotImplementedError / 아직 구현 안 된 기능을 알립니다 (맛보기).
def todo():
    # raise NotImplementedError
    print("NotImplementedError triggered")
todo()

17. Raising AssertionError / 디버깅용으로 조건을 확언할 때 씁니다.
x = 5
# assert x < 0, "Should be negative"
print("Assert triggered check")

18. Raising inside lambda (theory) / 람다에서는 직접 raise를 쓸 수 없어 팁이 필요합니다 (이론).
print("Lambda cannot contain raise statement directly")

19. Specific subclass raise / Exception 보다 구체적인 클래스를 던지는 것이 좋습니다.
# raise LookupError("Missing info")

20. Final Review / [복습] 함수 내부에서 예외를 던지고, 밖에서 그 예외를 잡아 메시지를 출력합니다.
def set_level(l):
    if l < 1: raise ValueError("Min level 1")
    return l
try:
    set_level(0)
except ValueError as e:
    print(f"Caught: {e}")

---

Lv95. [Challenge] Safe Calculator / [챌린지] 안전한 계산기
Description: [챌린지] 사용자의 잘못된 입력(문자 입력, 0으로 나누기 등)에도 멈추지 않는 견고한 계산기 로직을 만듭니다. / Building a robust calculator logic that handles invalid inputs gracefully.

1. Safe Int Cast / 숫자가 아닌 문자열을 받아도 에러 대신 0을 반환하는 안전한 변환 함수입니다.
def get_int(s):
    try: return int(s)
    except: return 0
print(get_int("abc"))

2. Symbol Result / 화면에 에러를 띄우는 대신 특정 기호(DIV#0)를 반환하도록 설계합니다.
def safe_div(a, b):
    try: return a / b
    except ZeroDivisionError: return "DIV#0"
print(safe_div(10, 0))

3. Bulk Skip / 리스트를 돌다 특정 데이터에서 에러가 나면 해당 항목만 건너뛰고 계속 진행합니다.
def process(vals):
    for v in vals:
        try: print(10 / v)
        except: continue
process([2, 0, 5])

4. Success Message / 계산이 완벽히 성공했을 때만 최종 완료 메시지를 보여줍니다.
try:
    res = int("10") / 2
except:
    print("Error")
else:
    print(f"Calc SUCCESS: {res}")

5. Op Validation / 연산자가 이상하면 raise로 에러를 던져 잘못된 입력을 막습니다.
def calculate(a, b, op):
    if op not in "+-*/": raise ValueError("?")
    return eval(f"{a}{op}{b}")
print(calculate(1, 2, "+"))

6. Session Log / 계산 성공 여부와 상관없이 세션 종료 메시지를 매번 띄웁니다.
def log_calc(a, b):
    try: print(a + b)
    finally: print("Session End")
log_calc(1, 2)

7. Multi-Type Catch / 딕셔너리 키 검사와 타입 검사를 동시에 수행하며 실제 어떤 에러인지 타입을 보여줍니다.
data = {"x": 10, "y": "A"}
try:
    res = data["x"] + int(data["y"])
except (KeyError, ValueError) as e:
    print(f"Data Error: {type(e).__name__}")

8. Internal Throw / 내부 조건 판단 시 직접 에러를 던지고, 같은 함수 내 except에서 받아 처리합니다.
def ratio(p, t):
    try:
        if t == 0: raise Exception("NullTotal")
        return p / t
    except Exception as e: return f"ERR:{e}"
print(ratio(10, 0))

9. Finalization / 단순 변환 뒤에도 무조건 실행되어야 할 환경 정리 코드를 수행해 봅니다.
try:
    v = int("1")
finally:
    print("Finalized")

10. List Sanitizer / 잘못된 데이터가 섞인 리스트에서 숫자만 골라내어 합계를 구하는 전형적인 예외 사례입니다.
nums = ["10", "20", "err", "30"]
clean = []
for n in nums:
    try: clean.append(int(n))
    except: pass
print(f"Sum: {sum(clean)}")

11. Numeric check and raise / 입력이 숫자가 아니면 즉시 에러를 발생시킵니다.
def check(n):
    if not isinstance(n, (int, float)): raise TypeError
check(10)

12. Custom Error for Zero / 0으로 나눌 때 나만의 에러 클래스를 사용합니다.
class MyZero(Exception): pass
def div(a, b):
    if b == 0: raise MyZero("Zero X")
    return a / b
# div(1, 0)

13. Safe dictionary math / 딕셔너리 값들로 수학 연산을 안전하게 합니다.
d = {"a": 10, "b": 0}
try: res = d["a"] / d["b"]
except: res = None
print(res)

14. Error logging list / 에러 발생 내역을 리스트에 따로 모읍니다.
errs = []
for x in ["1", "X"]:
    try: int(x)
    except Exception as e: errs.append(str(e))
print(f"Error count: {len(errs)}")

15. Boolean return on exception / 성공 여부를 불리언으로 반환합니다.
def run(x):
    try: int(x); return True
    except: return False
print(run("123"))

16. Handling multiple steps / 여러 단계 연산 중 하나라도 틀리면 중단합니다.
try:
    a = int("10")
    b = 10 / 0
except: print("Step Fail")

17. Resetting values in finally / 에러와 무관하게 임시 값을 끕니다.
tmp = 100
try: # operation
    pass
finally: tmp = 0
print(tmp)

18. Raising error with fallback / 에러를 내되 기본값을 미리 설정해둡니다.
def get(s):
    v = 0
    try:
        if s == "": raise ValueError
        v = int(s)
    except: v = -1
    return v
print(get(""))

19. Global error flag / 전역 변수로 에러 상태를 관리합니다.
HAS_ERR = False
def p():
    global HAS_ERR
    try: 1/0
    except: HAS_ERR = True
p()
print(HAS_ERR)

20. Final Review / [복습] 두 입력을 숫자로 바꾸고 더하는 복합 과정을 예외 처리와 성공 처리로 나누어 반환합니다.
def safe_run(a, b):
    try:
        res = int(a) + int(b)
    except Exception as e:
        return f"Fail:{e}"
    else:
        return f"Sum:{res}"
print(safe_run("10", "20"))
