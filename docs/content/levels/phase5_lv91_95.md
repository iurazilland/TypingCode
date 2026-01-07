# Phase 5: 객체지향 및 고급 문법 (Lv 91 - 95) 상세 세트

각 레벨은 20개의 연습 세트로 구성됩니다.

---

## 🟦 Lv 91: 예외 처리 기초 (try-except)
**설명**: 프로그램 실행 중 발생할 수 있는 에러(Exception)를 잡아내어 멈추지 않고 처리하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `try:\n    print(10 / 0)\nexcept:\n    print("Error occurred")` | `try` 안의 코드를 실행하다 에러가 나면 `except` 부분으로 건너뜁니다. |
| 2 | `try:\n    n = int("abc")\nexcept:\n    print("Can't convert to int")` | 문자를 숫자로 바꿀 수 없는 상황의 예외를 처리합니다. |
| 3 | `d = {"A": 1}\ntry:\n    print(d["B"])\nexcept:\n    print("Key not found")` | 딕셔너리에 없는 키를 조회할 때 발생하는 에러를 잡아냅니다. |
| 4 | `try:\n    import ghost_module\nexcept:\n    print("Module missing")` | 존재하지 않는 모듈을 가져오려 할 때의 상황을 처리합니다. |
| 5 | `lst = [1, 2]\ntry:\n    print(lst[5])\nexcept:\n    print("Out of range")` | 리스트의 인덱스 범위를 벗어난 접근 에러를 처리합니다. |
| 6 | `try:\n    res = 10 + "Apple"\nexcept:\n    print("Type mismatch")` | 숫자와 문자열을 직접 더할 때 발생하는 타입 에러를 잡아냅니다. |
| 7 | `try:\n    print(undefined_var)\nexcept:\n    print("Variable not defined")` | 정의되지 않은 변수를 사용하려 할 때의 에러를 처리합니다. |
| 8 | `def test():\n    try: print(x)\n    except: print("Error in fn")\ntest()` | 함수 내부에서도 `try-except`를 사용해 안정성을 높일 수 있습니다. |
| 9 | `try:\n    open("none.txt", "r")\nexcept:\n    print("File not found")` | 파일을 열 수 없을 때 발생하는 입출력 예외를 처리합니다. |
| 10 | `try:\n    x = 1/0\nexcept Exception as e:\n    print(f"Detail: {e}")` | `as e`를 붙이면 구체적인 에러 메시지를 변수로 받아 출력할 수 있습니다. |
| 20 | `raw = "10.5"\ntry:\n    val = int(raw)\nexcept:\n    val = float(raw)\nprint(f"Final Val: {val}")` | [복습] 정수 변환이 실패하면 실수 변환을 시도하는 예외 처리 흐름을 만듭니다. |
| * | *(세트 11-19 생략, 기본 예외 처리 패턴 연습)* | ... |

---

## 🟦 Lv 92: 특정 예외 구분하기
**설명**: 어떤 에러가 발생했느냐에 따라 서로 다른 대처를 하는 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Zero error")` | 0으로 나누었을 때만 발생하는 `ZeroDivisionError`를 특정해 잡습니다. |
| 2 | `try:\n    n = int("A")\nexcept ValueError:\n    print("Invalid Value")` | 값의 형식이 맞지 않을 때 발생하는 `ValueError`를 처리합니다. |
| 3 | `try:\n    print(x)\nexcept NameError:\n    print("Name is missing")` | 변수 이름이 정의되지 않았을 때의 `NameError`를 특정합니다. |
| 4 | `d = {}\ntry:\n    v = d["k"]\nexcept KeyError:\n    print("Key Error")` | 딕셔너리 키 부재 상황인 `KeyError` 만을 처리합니다. |
| 5 | `try:\n    v = 10 / 0\nexcept (ValueError, ZeroDivisionError):\n    print("Math or Type error")` | 괄호로 묶어서 여러 에러를 한꺼번에 잡을 수도 있습니다. |
| 6 | `try:\n    n = int("10")\n    x = 1 / 0\nexcept ValueError:\n    print("V err")\nexcept ZeroDivisionError:\n    print("Z err")` | 각각의 에러 타입별로 다른 메시지를 출력하도록 여러 개의 `except`를 씁니다. |
| 7 | `try:\n    "A" + 1\nexcept TypeError:\n    print("Wrong data type")` | 데이터 타입이 어긋난 상황인 `TypeError` 문구 연습입니다. |
| 8 | `try:\n    [1][2]\nexcept IndexError:\n    print("Index Out")` | 리스트 등 시퀀스 타입의 범위를 넘었을 때의 `IndexError`입니다. |
| 9 | `try:\n    eval("if x:")\nexcept SyntaxError:\n    print("Code syntax error")` | 코드 문법 자체가 틀렸을 때 발생하는 `SyntaxError`를 처리합니다. |
| 10 | `try:\n    import math\n    math.ghost()\nexcept AttributeError:\n    print("No such function")` | 모듈이나 객체에 없는 속성을 불렀을 때의 `AttributeError`입니다. |
| 20 | `data = "5"\ntry:\n    res = 10 / int(data)\nexcept ValueError:\n    print("Need Number")\nexcept ZeroDivisionError:\n    print("Not Zero")` | [복습] 입력값을 숫자로 바꾸고 나누는 과정에서 생길 수 있는 두 가지 에러를 개별 처리합니다. |
| * | *(세트 11-19 생략, 상세 예외 타입별 대처 연습)* | ... |

---

## 🟦 Lv 93: else와 finally
**설명**: 에러가 없을 때만 실행하는 코드(`else`)와 에러 여부와 상관없이 무조건 실행하는 코드(`finally`)를 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `try:\n    print("Try")\nexcept:\n    print("Err")\nfinally:\n    print("End")` | `finally` 블록의 코드는 에러가 나든 안 나든 프로그램의 마지막에 꼭 실행됩니다. |
| 2 | `try:\n    n = 10\nexcept:\n    print("Err")\nelse:\n    print("Success")` | `else`는 `try` 안의 코드가 한 번의 에러도 없이 완벽히 끝났을 때만 실행됩니다. |
| 3 | `try:\n    f = open("log.txt", "w")\n    f.write("Hi")\nfinally:\n    f.close()\n    print("File closed")` | 파일을 열었을 때 어떤 상황에서든 파일을 안전하게 닫기 위해 `finally`를 씁니다. |
| 4 | `try:\n    res = 10 / 2\nexcept ZeroDivisionError:\n    print("Zero")\nelse:\n    print(f"Result is {res}")` | 계산이 성공했을 때만 정답 메시지를 보여주고 싶을 때 `else`가 유용합니다. |
| 5 | `try:\n    print("Running")\nexcept Exception as e:\n    print(e)\nelse:\n     print("Done")\nfinally:\n     print("Clean up")` | try-except-else-finally 전체 구조를 함께 사용하는 예제입니다. |
| 6 | `def check():\n    try: return 1\n    finally: print("Leaving fn")\ncheck()` | 함수에서 `return`으로 중간에 나가더라도 `finally`는 거쳐서 나갑니다. |
| 7 | `try:\n    val = int("10")\nexcept: pass\nelse:\n    print(val * 2)` | 에러가 없으면 리턴된 값을 이용해 추가 연산을 수행합니다. |
| 8 | `ls = [1]\ntry:\n    v = ls[0]\nexcept:\n    print("Fail")\nelse:\n    print(f"Got: {v}")` | 리스트 접근에 성공했을 때만 값을 출력합니다. |
| 9 | `step = 0\ntry:\n    step += 1\n    print(f"Step {step}")\nfinally:\n    print("Log saved")` | 에러가 발생해도 지금까지의 진행 상황을 로그로 남기는 패턴입니다. |
| 10 | `is_ok = False\ntry:\n    n = int("1")\n    is_ok = True\nfinally:\n    print(f"Status OK: {is_ok}")` | 플래그 변수의 최종 상태를 `finally`에서 확인합니다. |
| 20 | `try:\n    d = {"v": 10}\n    x = d["v"]\nexcept KeyError:\n    x = 0\nelse:\n    print("Found Key")\nfinally:\n    print(f"Final X: {x}")` | [복습] 키 조회 여부에 따라 값을 다르게 설정하고, 마지막에 최종 값을 확정 출력합니다. |
| * | *(세트 11-19 생략, 예외 처리 풀 플로우 연습)* | ... |

---

## 🟦 Lv 94: 예외 발생시키기 (raise)
**설명**: 파이썬이 잡지 못하는 상황이라도 논리적으로 에러라고 판단되면 인위적으로 예외를 던지는(`raise`) 법을 익힙니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `age = -5\nif age < 0:\n    raise ValueError("Age can't be negative")` | 부적절한 값이 들어오면 `raise`와 함께 에러 타입, 메시지를 던집니다. |
| 2 | `pw = "123"\nif len(pw) < 5:\n    raise Exception("PW too short")` | 사용자 정의 상황(비밀번호 길이)에 대해 일반 예외를 발생시킵니다. |
| 3 | `def check_admin(u):\n    if u != "admin":\n        raise PermissionError\ncheck_admin("guest")` | 특정 권한이 없을 때 `PermissionError`를 강제로 발생시킵니다. |
| 4 | `try:\n    raise NameError("Custom")\nexcept NameError as e:\n    print(e)` | 내가 직접 던진 예외를 바로 아래의 `except` 블록에서 잡아 처리합니다. |
| 5 | `score = 150\nif not (0 <= score <= 100):\n    raise ValueError("Score out of range")` | 점수 범위를 벗어난 경우 강제로 프로그램을 멈추거나 예외 처리를 유도합니다. |
| 6 | `def log(m):\n    if not m: raise ValueError("Empty message")\n    print(m)\nlog("")` | 빈 메시지 입력을 차단하기 위해 예외를 던집니다. |
| 7 | `def divide(a, b):\n    if b == 0: raise ZeroDivisionError("Don't use zero")\n    return a / b\ndivide(10, 0)` | 자체적으로 조건을 검사하여 더 구체적인 메시지로 에러를 던집니다. |
| 8 | `try:\n    raise Exception("Initial")\nexcept Exception:\n    print("Catch and re-raise")\n    raise # Re-raise same error` | 에러를 한 번 출력(로깅)한 뒤, 상위 코드로 전파하기 위해 `raise`만 다시 씁니다. |
| 9 | `class MyError(Exception): pass\nraise MyError("Special Error")` | 클래스 상속을 통해 나만의 새로운 에러 타입을 만들어 던질 수도 있습니다. |
| 10 | `input_id = ""\nif not input_id:\n    raise KeyError("ID is required")` | 필수 값이 누락되었을 때 `KeyError`를 활용해 문제를 알립니다. |
| 20 | `def set_level(l):\n    if l < 1: raise ValueError("Level must be >= 1")\n    return l\ntry:\n    set_level(0)\nexcept ValueError as e: print(e)` | [복습] 함수 내부에서 예외를 던지고, 밖에서 그 예외를 잡아 메시지를 출력합니다. |
| * | *(세트 11-19 생략, 강제 예외 발생 및 처리 시뮬레이션)* | ... |

---

## 🟦 Lv 95: [Challenge] 안전한 계산기 (Safe Calc)
**설명**: [챌린지] 사용자의 잘못된 입력(문자 입력, 0으로 나누기 등)에도 멈추지 않는 견고한 계산기 로직을 만듭니다.

| Set | 코드 (code) | 가이드 (guide_ko) |
| :--- | :--- | :--- |
| 1 | `def get_int(s):\n    try: return int(s)\n    except: return 0\nprint(get_int("abc"))` | 숫자가 아닌 문자열을 받아도 에러 대신 0을 반환하는 안전한 변환 함수입니다. |
| 2 | `def safe_div(a, b):\n    try: return a / b\n    except ZeroDivisionError: return "DIV#0"\nprint(safe_div(10, 0))` | 화면에 에러를 띄우는 대신 특정 기호(DIV#0)를 반환하도록 설계합니다. |
| 3 | `def process(vals):\n    for v in vals:\n        try: print(10 / v)\n        except: continue\nprocess([2, 0, 5])` | 리스트를 돌다 특정 데이터에서 에러가 나면 해당 항목만 건너뛰고 계속 진행합니다. |
| 4 | `try:\n    res = int("10") / 2\nexcept:\n    print("Error")\nelse:\n    print(f"Calc SUCCESS: {res}")` | 계산이 완벽히 성공했을 때만 최종 완료 메시지를 보여줍니다. |
| 5 | `def calculate(a, b, op):\n    if op not in "+-*/": raise ValueError("Unknown OP")\n    return eval(f"{a}{op}{b}")\nprint(calculate(1, 2, "+"))` | 연산자가 이상하면 `raise`로 에러를 던져 잘못된 입력을 막습니다. |
| 6 | `def log_calc(a, b):\n    try:\n        print(a + b)\n    finally:\n        print("Calc session ended")\nlog_calc(1, 2)` | 계산 성공 여부와 상관없이 세션 종료 메시지를 매번 띄웁니다. |
| 7 | `data = {"x": 10, "y": "A"}\ntry:\n    res = data["x"] + int(data["y"])\nexcept (KeyError, ValueError) as e:\n    print(f"Data Error: {type(e).__name__}")` | 딕셔너리 키 검사와 타입 검사를 동시에 수행하며 실제 어떤 에러인지 타입을 보여줍니다. |
| 8 | `def ratio(part, total):\n    try:\n        if total == 0: raise Exception("No total")\n        return part / total\n    except Exception as e: return f"ERR:{e}"\nprint(ratio(10, 0))` | 내부 조건 판단 시 직접 에러를 던지고, 같은 함수 내 `except`에서 받아 처리합니다. |
| 9 | `try:\n    v = int("1")\nfinally:\n    print("Program Finalized")` | 단순 변환 뒤에도 무조건 실행되어야 할 환경 정리 코드를 수행해 봅니다. |
| 10 | `nums = ["10", "20", "err", "30"]\nclean = []\nfor n in nums:\n    try: clean.append(int(n))\n    except: pass\nprint(f"Valid Sum: {sum(clean)}")` | 잘못된 데이터가 섞인 리스트에서 숫자만 골라내어 합계를 구하는 전형적인 예외 사례입니다. |
| 20 | `def safe_run(a, b):\n    try:\n        res = int(a) + int(b)\n    except Exception as e:\n        return f"Fail:{e}"\n    else: return f"Sum:{res}"\nprint(safe_run("10", "20"))` | [종합] 두 입력을 숫자로 바꾸고 더하는 복합 과정을 예외 처리와 성공 처리로 나누어 반환합니다. |
| * | *(세트 11-19 생략, 데이터 정제 및 안전한 수치 연산 실무 연습)* | ... |
