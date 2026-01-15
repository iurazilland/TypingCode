# Phase 2: 리스트와 복합 자료구조 (Lv 31 - 35) 상세 세트

---

Lv31. Dict Basics / 딕셔너리 기초
Description: 키(Key)와 값(Value)의 쌍으로 데이터를 이름표를 붙여 관리하는 법을 익힙니다. / Learn how to manage data using key-value pairs in dictionaries.

1. Create Dict / 중괄호{}와 콜론:을 사용하여 딕셔너리를 만듭니다.
user = {"name": "Alice", "age": 25}
print(user)

2. Access by Key / 대괄호 안에 키(Key)를 넣어 연결된 값(Value)을 가져옵니다.
user = {"name": "Alice", "age": 25}
print(user["name"])

3. Product Look-up / 상품명을 키로 사용하여 가격 정보를 조회합니다.
prices = {"apple": 1000, "milk": 2500}
print(prices["apple"])

4. Safe Get / get() 메서드를 쓰면 존재하지 않는 키를 조회해도 에러 대신 None을 반환합니다.
book = {"title": "Python", "author": "Guido"}
print(book.get("title"))

5. Get with Default / get(key, default) 형식을 쓰면 키가 없을 때의 기본값을 지정할 수 있습니다.
book = {"title": "Python"}
print(book.get("year", 2026))

6. Key Membership / in 연산자로 특정 키(Key)가 딕셔너리에 존재하는지 확인합니다.
data = {"A": 1, "B": 2}
print("A" in data)

7. Empty Dict / 중괄호만 비워두면 빈 딕셔너리가 생성됩니다.
empty = {}
print(type(empty))

8. Numeric Keys / 키값으로 문자열뿐만 아니라 숫자도 사용할 수 있습니다.
colors = {1: "Red", 2: "Blue"}
print(colors[1])

9. Dict Length / 딕셔너리의 길이는 키-값 쌍의 개수를 의미합니다.
person = {"id": 101, "name": "Kim"}
print(len(person))

10. Quoting in F-string / f-string 안에서 딕셔너리 값을 사용할 때 따옴표 구분을 주의하세요.
data = {"x": 10, "y": 20}
print(f"X is {data['x']}")

11. Nested indexing / 딕셔너리 안의 리스트에 접근합니다.
d = {"tags": ["AI", "Web"]}
print(d["tags"][0])

12. Non-existent Key (Error) / 대괄호로 없는 키를 조회하면 KeyError가 발생합니다 (이론).
# d = {"A": 1}
# print(d["B"])
print("Accessing missing key via [] causes KeyError")

13. Value in dict check / 특정 '값'이 들어있는지는 values()를 통해 확인합니다.
d = {"a": 10}
print(10 in d.values())

14. Dynamic assignment / 변수에 담긴 값을 키로 사용합니다.
k = "id"
u = {"id": "admin"}
print(u[k])

15. Boolean as keys / 불리언 값을 키로 쓸 수도 있습니다 (특수한 경우).
d = {True: "Yes", False: "No"}
print(d[True])

16. List of dicts access / 리스트 내 첫 번째 딕셔너리의 값을 읽어옵니다.
lst = [{"lv": 1}, {"lv": 2}]
print(lst[0]["lv"])

17. Dict from keys hint / 여러 키에 동일한 초기값을 주어 생성합니다.
keys = ["a", "b"]
d = dict.fromkeys(keys, 0)
print(d)

18. Key case sensitivity / 딕셔너리 키도 대소문자를 구분합니다.
d = {"Name": "A", "name": "B"}
print(d["Name"], d["name"])

19. Multiple value types / 값의 타입이 제각각인 딕셔너리입니다.
d = {"ok": True, "val": 0.5, "msg": "Hi"}
print(d["ok"])

20. Final Review / [복습] 딕셔너리에 담긴 정보를 정해진 형식으로 출력합니다.
p = {"name": "Bot", "ver": 1.0}
print(f"SYSTEM: {p['name']} (v{p['ver']})")

---

Lv32. Update & Delete / 딕셔너리 수정과 삭제
Description: 딕셔너리에 새 항목을 추가하거나 기존 값을 바꾸고 삭제하는 법을 익힙니다. / Learn to add, modify, and remove items in a dictionary.

1. Add New Item / 존재하지 않는 키에 값을 대입하면 새로운 항목이 추가됩니다.
user = {"id": 1}
user["name"] = "Alice"
print(user)

2. Overwrite Value / 이미 존재하는 키에 값을 대입하면 기존 값이 업데이트됩니다.
user = {"id": 1, "name": "Old"}
user["name"] = "New"
print(user)

3. Delete Key / del 키워드로 특정 키와 그에 연결된 값을 삭제합니다.
data = {"A": 1, "B": 2}
del data["A"]
print(data)

4. Pop Item / pop(key)은 항목을 삭제하면서 그 값을 반환합니다.
data = {"A": 1, "B": 2}
val = data.pop("B")
print(data, val)

5. Batch Update / update()는 다른 딕셔너리를 합쳐서 여러 항목을 한 번에 추가/수정합니다.
data = {"name": "Kim"}
data.update({"age": 30, "city": "Seoul"})
print(data)

6. Numeric In-place / 딕셔너리 내부의 수치 데이터도 복합 대입 연산자로 수정이 가능합니다.
stats = {"hp": 100}
stats["hp"] -= 10
print(stats)

7. Incremental update / 장바구니 수량을 1 늘리는 예제입니다.
cart = {"Apple": 1}
cart["Apple"] += 1
print(cart)

8. Pop Last Item / popitem()은 마지막에 추가된 항목을 삭제합니다.
db = {"u1": "OK"}
db.popitem()
print(db)

9. Clear All / 모든 항목을 지워서 빈 딕셔너리를 만듭니다.
data = {"temp": 25}
data.clear()
print(data)

10. Conditional Addition / 값이 없을 때만 기본값을 넣어 항목을 생성하는 패턴입니다.
user = {"name": "Bob"}
user["grade"] = user.get("grade", "Basic")
print(user)

11. Safe pop / pop()에 기본값을 설정하면 키가 없어도 에러가 나지 않습니다.
d = {"a": 1}
print(d.pop("b", "Not Found"))

12. Key transfer / 한 키의 값을 다른 키로 옮기고 기존 것을 지웁니다.
d = {"old": 10}
d["new"] = d.pop("old")
print(d)

13. List as value update / 딕셔너리 내 리스트에 요소를 추가합니다.
d = {"tags": ["A"]}
d["tags"].append("B")
print(d)

14. Counter pattern / 딕셔너리를 카운터로 사용하여 숫자를 누적합니다.
counts = {}
fruit = "apple"
counts[fruit] = counts.get(fruit, 0) + 1
print(counts)

15. Dictionary of Dictionaries / 중첩 딕셔너리 부분 업데이트.
users = {"u1": {"lv": 1}}
users["u1"]["lv"] += 1
print(users)

16. Selective delete / 키가 있을 때만 지우는 안전한 삭제입니다.
d = {"a": 1}
if "a" in d:
    del d["a"]
print(d)

17. Length change / 항목 삭제 후 길이의 변화를 확인합니다.
d = {"a": 1, "b": 2}
del d["a"]
print(len(d))

18. Update with list of tuples / 튜플 리스트를 사용하여 딕셔너리 내용을 갱신합니다.
d = {"a": 1}
d.update([("b", 2), ("c", 3)])
print(d)

19. Multiple assignment / 여러 키의 값을 동시에 수정합니다 (각각 명시).
d = {"x": 0, "y": 0}
d["x"], d["y"] = 10, 20
print(d)

20. Final Review / [복습] 항목을 추가하고 기존 키의 문자열 값을 가공하여 저장합니다.
p = {"id": "dev"}
p["level"] = 5
p["id"] = p["id"].upper()
print(p)

---

Lv33. Dict Methods / 딕셔너리 메서드 활용
Description: 딕셔너리의 키들만 따로 모으거나 값들만 모아 처리하는 법을 익힙니다. / Use keys(), values(), and items() to handle dictionary parts efficiently.

1. Keys View / keys()는 딕셔너리의 모든 키(Key) 목록을 가져옵니다.
user = {"name": "Alice", "age": 25}
print(user.keys())

2. Values View / values()는 딕셔너리의 모든 값(Value) 목록을 가져옵니다.
user = {"name": "Alice", "age": 25}
print(user.values())

3. Items View / items()는 키와 값을 쌍(Tuple)으로 묶은 목록을 가져옵니다.
user = {"name": "Alice", "age": 25}
print(user.items())

4. Keys to List / 추출된 키 목록을 리스트로 변환하여 유연하게 사용할 수 있습니다.
d = {"A": 1, "B": 2}
print(list(d.keys()))

5. Summing Values / 값들만 모아서 합계를 구하는 통계 작업에 활용합니다.
scores = {"Math": 90, "Eng": 80}
print(sum(scores.values()))

6. Existence in Keys / 특정 키가 있는지 확인할 때 명시적으로 .keys()를 쓸 수도 있습니다.
data = {"a": 1, "b": 2}
print("a" in data.keys())

7. Item Count / items의 개수를 세어 데이터 저장소의 크기를 확인합니다.
user = {"id": "001"}
print(len(user.items()))

8. Find Max Value / 저장된 값들 중 가장 큰 수치를 찾습니다.
d = {"A": 10, "B": 20}
print(max(d.values()))

9. Existence in Values / 특정 값이 들어있는지 확인할 때 유용합니다.
d = {"apple": "red", "banana": "yellow"}
print("red" in d.values())

10. Join Keys / 모든 키를 콤마로 연결하여 하나의 문자열로 만듭니다.
user = {"name": "Alice"}
print(", ".join(user.keys()))

11. Unique values count (Set hint) / 값들 중 중복을 뺀 종류의 개수를 셉니다 (맛보기).
d = {"a": 1, "b": 1, "c": 2}
print(len(set(d.values())))

12. Average of values / 딕셔너리 값들의 평균을 구합니다.
d = {"p1": 10, "p2": 30}
vals = d.values()
print(sum(vals) / len(vals))

13. Key sorting / 키값들을 알파벳 순으로 정렬하여 확인합니다.
d = {"c": 3, "a": 1, "b": 2}
print(sorted(d.keys()))

14. Check if dict empty / 메서드를 활용해 비어있음을 확인합니다.
d = {}
print(len(d.keys()) == 0)

15. Key with specific value / 특정 값을 가진 키를 찾는 역방향 탐색 원리입니다 (맛보기).
d = {"id": "admin"}
print([k for k, v in d.items() if v == "admin"])

16. List from dict conversion / 딕셔너리를 리스트로 감싸면 키 목록만 남습니다.
d = {"a": 1, "b": 2}
print(list(d))

17. Values to string / 값들을 모두 문자열로 합쳐 봅니다.
d = {"f": "Apple", "c": "Red"}
print(" is ".join(d.values()))

18. Key-Value mapping output / "Key: Value" 형식으로 출력하는 기초입니다.
d = {"A": 1}
it = list(d.items())[0]
print(f"{it[0]} mapping to {it[1]}")

19. Max key by value / 가장 큰 값을 가진 키를 찾습니다 (고급).
d = {"A": 10, "B": 20}
print(max(d, key=d.get))

20. Final Review / [복습] 값들을 리스트로 뽑아 합계와 개수를 함께 출력합니다.
s = {"k1": 10, "k2": 20}
all_v = list(s.values())
print(f"Total: {sum(all_v)}, Items: {len(all_v)}")

---

Lv34. Nested Dicts / 중첩 딕셔너리
Description: 딕셔너리 안에 또 다른 딕셔너리나 리스트를 넣어 복잡한 데이터를 구조화합니다. / Organize complex data by nesting dictionaries and lists.

1. Create Nested / 딕셔너리 안에 하위 딕셔너리를 포함시킵니다.
users = {"u1": {"name": "Alice"}, "u2": {"name": "Bob"}}
print(users["u1"])

2. Double Bracket / 대괄호를 두 번 사용하여 깊은 곳의 값에 접근합니다.
data = {"user": {"id": 1, "name": "A"}}
print(data["user"]["name"])

3. Deep Update / 중첩된 구조 내부의 수치를 직접 수정합니다.
stats = {"player": {"hp": 100, "mp": 50}}
stats["player"]["hp"] -= 20
print(stats["player"])

4. Dict containing List / 딕셔너리의 값이 리스트인 형태에서 특정 요소를 꺼내옵니다.
course = {"students": ["Alice", "Bob", "Charlie"]}
print(course["students"][0])

5. List containing Dicts / 리스트 안에 딕셔너리가 들어있는 매우 실무적인 데이터 구조입니다.
sys = {"nodes": [{"id": 1}, {"id": 2}]}
print(sys["nodes"][1]["id"])

6. Dynamic Nesting / 빈 중첩 딕셔너리를 생성한 뒤 동적으로 키를 추가합니다.
db = {"users": {}}
db["users"]["admin"] = "pass123"
print(db)

7. Safe Nested Get / get()을 연속 사용하여 안전하게 중첩 데이터를 조회합니다.
meta = {"ver": "1.0", "info": {"author": "Ant"}}
print(meta.get("info").get("author"))

8. Display Nested in F-string / 하위 속성 값을 f-string에 담아 출력합니다.
item = {"name": "P1", "specs": {"color": "Red"}}
print(f"Color: {item['specs']['color']}")

9. Complex Metadata / 리스트와 딕셔너리가 혼합된 메타데이터 구조를 연습합니다.
p = {"tags": ["A", "B"], "data": {"v": 10}}
print(len(p["tags"]), p["data"]["v"])

10. Multi-level Deep / 3단계 이상 중첩된 구조의 데이터 탐색 연습입니다.
data = {"a": {"b": {"c": 1}}}
print(data["a"]["b"]["c"])

11. Nested dictionary keys / 하위 딕셔너리의 키들만 뽑아 봅니다.
d = {"u1": {"age": 20, "city": "NY"}}
print(d["u1"].keys())

12. Adding a nested dictionary / 새로운 계층 구조를 통째로 추가합니다.
d = {"id": "01"}
d["config"] = {"mode": "auto"}
print(d)

13. Checking key in nested / 깊은 곳에 특정 키가 있는지 확인합니다.
d = {"root": {"child": 1}}
print("child" in d["root"])

14. Nested items count / 바깥쪽과 안쪽의 길이를 각각 확인합니다.
d = {"g1": {"a": 1, "b": 2}, "g2": {"c": 3}}
print(len(d), len(d["g1"]))

15. Row-column abstraction / 2차원 데이터를 딕셔너리로 표현한 예시입니다.
grid = {"r1": {"c1": "O", "c2": "X"}}
print(grid["r1"]["c1"])

16. Clearing a nested level / 하위 단계만 초기화합니다.
d = {"data": {"val": 100}}
d["data"].clear()
print(d)

17. Dict in List in Dict / 복합적으로 꼬인 구조 탐색입니다.
d = {"A": [{"v": 10}]}
print(d["A"][0]["v"])

18. Overwriting nested dict / 하위 딕셔너리를 다른 딕셔너리로 아예 갈아치웁니다.
d = {"p": {"x": 1}}
d["p"] = {"y": 2}
print(d)

19. Slicing list inside dict / 딕셔너리 내 리스트의 일부만 가져옵니다.
d = {"logs": [1, 2, 3, 4, 5]}
print(d["logs"][-2:])

20. Final Review / [복습] 중첩된 딕셔너리 내부의 점수들의 합계를 계산합니다.
user = {"id": "tester", "scores": {"math": 90, "eng": 85}}
print(f"Total: {sum(user['scores'].values())}")

---

Lv35. [Challenge] Profile Manager / [챌린지] 유저 프로필 관리자
Description: [챌린지] 딕셔너리의 중첩 구조와 메서드를 활용해 회원 정보를 관리하는 시뮬레이션을 합니다. / Manage user profiles using nested dictionaries and specific methods.

1. Profile Skeleton / 기본 유저 정보를 중첩 딕셔너리로 선언합니다.
user = {"id": "code_master", "profile": {"name": "Alice", "age": 25}}
print(user)

2. Stats Extension / 유저의 스탯(Stats) 정보를 신규 추가합니다.
user["stats"] = {"level": 5, "exp": 1200}
print(user.keys())

3. Experience Accumulation / 중첩된 경험치 데이터를 갱신합니다.
user["stats"]["exp"] += 500
print(f"EXP Updated: {user['stats']['exp']}")

4. Skill Tags / 유저의 관심 키워드 리스트를 관리합니다.
user["tags"] = ["Python", "C++"]
user["tags"].append("Javascript")
print(user["tags"])

5. Information Removal / 특정 개인 정보 항목을 삭제 처리합니다.
del user["profile"]["age"]
print("age" in user["profile"])

6. Batch Config / 설정 테마 정보를 딕셔너리로 묶어 유저 데이터와 병합합니다.
settings = {"theme": "dark", "zoom": 1.2}
user.update({"config": settings})
print(user["config"])

7. Section Couting / 유저 데이터 내의 대분류(Profile, Stats, Tags 등) 개수를 셉니다.
print(f"Total Sections: {len(user)}")

8. Skill Display / 태그 리스트를 합쳐서 가독성 좋게 보여줍니다.
skills = ", ".join(user["tags"])
print(f"Skill Set: {skills.upper()}")

9. Handle formatting / 유저 ID 앞에 골뱅이(@) 기호를 붙여 수정합니다.
user["id"] = "@" + user["id"]
print(f"Handle: {user['id']}")

10. Key overview / 유저 데이터의 루트 키 목록을 리스트로 확인합니다.
data_keys = list(user.keys())
print(f"Data Root: {data_keys}")

11. Check level-up threshold / 레벨이 특정 수치 이상인지 확인합니다.
print(f"Is Pro? {user['stats']['level'] >= 10}")

12. Config value access / 설정 중 줌(zoom) 수치만 따로 뽑습니다.
print(user["config"].get("zoom"))

13. Safe tag check / 특정 태그가 있는지 in으로 확인합니다.
print("Python" in user["tags"])

14. Nested name change / 프로필 이름을 변경합니다.
user["profile"]["name"] = "Alice (Pro)"
print(user["profile"]["name"])

15. Stats summary / 모든 스탯 수치를 합산해 봅니다 (레벨+경험치).
print(sum(user["stats"].values()))

16. Handle string strip / 핸들이 이미 @을 가지고 있다면 제거하는 로직입니다.
user["id"] = user["id"].strip("@")
print(user["id"])

17. Appending more info / 이메일 정보를 프로필에 추가합니다.
user["profile"]["email"] = "alice@test.com"
print(user["profile"])

18. Check config length / 설정 값이 몇 가지나 되는지 봅니다.
print(len(user["config"]))

19. Snapshot copy / 현재 상태를 보존하기 위해 복사본을 만듭니다.
snap = user.copy()
print("Snapshot created")

20. Final Review / [종합] 유저 객체와 시스템 상태를 결합한 최종 관리 구조를 만듭니다.
final = {"user": user, "status": "active"}
print(f"USER: {final['user']['id']} STATUS: {final['status'].upper()}")
