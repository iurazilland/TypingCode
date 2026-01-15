# Phase 2: 리스트와 복합 자료구조 (Lv 36 - 40) 상세 세트

---

Lv36. Tuples & Unpacking / 튜플과 언패킹
Description: 한 번 정하면 바꿀 수 없는 데이터 묶음(Tuple)과 이를 여러 변수로 나눠 담는 법을 익힙니다. / Learn about immutable tuples and how to unpack them into multiple variables.

1. Create Tuple / 소괄호()를 사용하여 튜플을 만듭니다.
point = (10, 20)
print(point)

2. Tuple Access / 튜플도 리스트처럼 인덱싱과 슬라이싱이 가능합니다.
t = (1, 2, 3)
print(t[0], t[-1])

3. Immutable Check / 튜플은 한 번 생성하면 내부 값을 변경할 수 없습니다.
# t = (1, 2)
# t[0] = 99 # Error!
print("Tuples are immutable")

4. Basic Unpacking / 튜플의 요소를 각각의 변수에 나누어 담는 것을 '언패킹'이라고 합니다.
x, y = (10, 20)
print(x, y)

5. Variable Swap / 튜플 패킹/언패킹을 이용해 두 변수의 값을 아주 쉽게 바꿀 수 있습니다.
a, b = 1, 2
a, b = b, a
print(a, b)

6. Single Item Tuple / 요소가 하나뿐인 튜플은 숫자 뒤에 반드시 콤마,를 찍어야 합니다.
single = (10,)
print(type(single))

7. Tuple Length / len()으로 튜플의 항목 개수를 확인합니다.
t = (1, 2, 3)
print(len(t))

8. Tuple Concatenation / 두 튜플을 더해서 새로운 튜플을 만들 수 있습니다.
t = (1, 2) + (3, 4)
print(t)

9. Tuple Multiplier / 튜플에 숫자를 곱해 반복된 튜플을 생성합니다.
t = ("A",) * 3
print(t)

10. Extended Unpacking / *를 사용하면 남은 요소를 리스트로 몰아서 담을 수 있습니다.
data = (10, 20, 30, 40)
a, *b = data
print(a, b)

11. Nested unpacking / 중첩된 튜플을 한 번에 해제합니다.
t = (1, (2, 3))
a, (b, c) = t
print(a, b, c)

12. Tuple in list access / 리스트 속 튜플의 값을 읽어옵니다.
lst = [(1, 2), (3, 4)]
print(lst[1][0])

13. Membership in tuple / 튜플 내에 특정 값이 있는지 확인합니다.
t = ("Red", "Blue")
print("Red" in t)

14. Slicing tuple / 튜플의 일부를 잘라내어 새로운 튜플을 만듭니다.
t = (0, 1, 2, 3, 4)
print(t[1:4])

15. Count in tuple / 특정 값이 몇 개 있는지 셉니다.
t = (1, 2, 2, 3)
print(t.count(2))

16. Index in tuple / 특정 값의 위치를 찾습니다.
t = ("A", "B", "C")
print(t.index("B"))

17. Tuple without parenthesis / 괄호 없이도 콤마만 있으면 튜플로 간주됩니다 (패킹).
t = 1, 2, 3
print(type(t))

18. Returning multiple values / 함수에서 여러 값을 반환할 때 튜플이 쓰입니다. (맛보기)
def get_pos(): return (100, 200)
x, y = get_pos()
print(x, y)

19. Empty tuple / 빈 튜플을 생성합니다.
e = ()
print(len(e))

20. Final Review / [복습] 유저 정보를 튜플로 관리하고 언패킹하여 문장을 구성합니다.
user = ("alice", "admin", 2026)
name, role, year = user
print(f"{name} ({role}) joined in {year}")

---

Lv37. Set Basics / 셋(Set) 기초와 중복 제거
Description: 중복을 허용하지 않고 순서가 없는 데이터 집합(Set)을 익힙니다. / Learn about sets, which store unique elements without a specific order.

1. Unique and Unordered / 셋({})은 중복된 값을 자동으로 제거하고 유일한 값만 남깁니다.
s = {1, 2, 3, 2, 1}
print(s)

2. List to Set / 리스트를 set()으로 감싸면 중복 요소를 말끔히 지울 수 있습니다.
s = set([1, 2, 2, 3])
print(s)

3. Add to Set / add() 메서드로 새로운 요소를 추가합니다.
s = {1, 2}
s.add(3)
print(s)

4. Remove from Set / remove()로 특정 요소를 삭제합니다. (없으면 에러)
s = {1, 2, 3}
s.remove(2)
print(s)

5. Safe Discard / discard()는 삭제하려는 값이 없어도 에러가 나지 않아 안전합니다.
s = {1, 2, 3}
s.discard(99)
print(s)

6. String to Set / 문자열을 셋으로 만들면 사용된 철자의 종류(중복 제거)를 알 수 있습니다.
s = set("hello")
print(s)

7. Set Membership / 특정 요소가 집합 안에 존재하는지 매우 빠르게 확인합니다.
s = {1, 2, 3}
print(2 in s)

8. Batch Add (Update) / update()를 쓰면 여러 개의 요소를 한 번에 추가합니다.
s = {1, 2}
s.update([3, 4, 5])
print(s)

9. Pop from Set / 셋은 순서가 없으므로 pop()을 하면 임의의 요소가 나옵니다.
s = {1, 2, 3}
item = s.pop()
print(s, item)

10. Clear Set / 집합의 모든 내용을 비웁니다.
s = {1, 2, 3}
s.clear()
print(s)

11. Set literal vs empty / 빈 셋은 set()으로 만들어야 합니다 ({}는 빈 딕셔너리).
s = set()
print(type(s))

12. Unhashable in set (Error) / 리스트와 같이 값이 변하는 타입은 셋의 요소가 될 수 없습니다.
# s = {[1, 2]}
print("Sets cannot contain mutable types like lists")

13. Set length / 집합의 크기를 측정합니다.
s = {10, 20, 30, 10}
print(len(s))

14. Iterating over set / 셋의 요소를 하나씩 출력해 봅니다 (순서 랜덤).
s = {"A", "B", "C"}
# print for item in s: ...
print(list(s)[0])

15. Difference check / 두 집합이 다른지 비교합니다.
a, b = {1, 2}, {2, 1}
print(a == b) # True because order doesn't matter

16. Adding tuple to set / 튜플은 값이 안 변하므로 셋의 요소가 될 수 있습니다.
s = set()
s.add((1, 2))
print(s)

17. Checking subset / issubset을 통해 포함 관계를 봅니다.
a = {1, 2}
print({1}.issubset(a))

18. Pop multiple / 요소를 두 번 꺼내 봅니다.
s = {10, 20, 30}
s.pop()
s.pop()
print(len(s))

19. String unique count / 문장에서 쓰인 고유한 알파벳 개수를 셉니다.
sent = "python is fun"
print(len(set(sent.replace(" ", ""))))

20. Final Review / [복습] 리스트의 중복을 제거한 뒤 다시 정렬된 리스트로 변환합니다.
raw = ["A", "B", "A", "C"]
unique = list(set(raw))
unique.sort()
print(unique)

---

Lv38. Set Operations / 집합 연산
Description: 합집합, 교집합, 차집합 등 수학적인 집합 계산을 수행합니다. / Perform mathematical set operations like union, intersection, and difference.

1. Union (|) / | (Vertical Bar) 기호는 두 집합의 합집합을 구합니다.
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)

2. Intersection (&) / & (Ampersand) 기호는 공통된 요소인 교집합을 구합니다.
a = {1, 2, 3}
b = {3, 4, 5}
print(a & b)

3. Difference (-) / - 기호는 한쪽 집합에만 있는 차집합을 구합니다.
a = {1, 2, 3}
b = {3, 4, 5}
print(a - b)

4. Symmetric Difference (^) / ^ 기호는 합집합에서 교집합 부분을 뺀 대칭 차집합을 구합니다.
a = {1, 2, 3}
b = {3, 4, 5}
print(a ^ b)

5. Union Method / 기호 대신 union() 메서드를 사용할 수도 있습니다.
a = {1, 2}
print(a.union({3, 4}))

6. Intersection Method / 메서드로 교집합을 구하는 예제입니다.
a = {1, 2, 3}
print(a.intersection({2, 3, 4}))

7. Subset Check / {1}이 집합 a의 내부 요소(부분집합)인지 확인합니다.
a = {1, 2}
print({1}.issubset(a))

8. Superset Check / a가 {1}을 포함하는 부모 집합인지 확인합니다.
a = {1, 2}
print(a.issuperset({1}))

9. Disjoint Check / 두 집합이 서로 겹치는 요소가 하나도 없는지 확인합니다.
a = {1, 2}
b = {3, 4}
print(a.isdisjoint(b))

10. Augmented Set Ops / 합집합 결과를 기존 집합에 바로 반영(|=)합니다.
a = {1, 2}
a |= {3, 4}
print(a)

11. Difference method / 메서드형 차집합입니다.
a = {1, 2}
print(a.difference({2, 3}))

12. Symmetric difference method / 메서드형 대칭 차집합입니다.
a = {1, 2}
print(a.symmetric_difference({2, 3}))

13. Proper subset / 자신과 똑같은 집합은 부분집합이지만 '진부분집합'은 아닙니다 (이론).
a = {1, 2}
print(a.issubset(a))

14. Intersection update / 교집합 부분만 남기고 나머지를 버립니다.
a = {1, 2, 3}
a &= {2, 3, 4}
print(a)

15. Multiple sets union / 세 집합을 한꺼번에 합칩니다.
a, b, c = {1}, {2}, {3}
print(a | b | c)

16. Multiple sets intersection / 세 집합의 공통 부분을 찾습니다.
a, b, c = {1, 2}, {2, 3}, {2, 5}
print(a & b & c)

17. Set minus empty / 집합에서 빈 집합을 빼면 자기 자신입니다.
s = {1, 2}
print(s - set())

18. Set vs List complexity / 셋의 탐색 속도가 리스트보다 훨씬 빠릅니다 (이론).
print("Set lookup is O(1)")

19. Unique characters overlap / 두 단어에서 공통적으로 쓰인 알파벳을 찾습니다.
w1, w2 = set("apple"), set("pine")
print(w1 & w2)

20. Final Review / [복습] 과목별 수강생 셋을 이용해 중복 수강생과 전체 인원수를 구합니다.
math = {"A", "B", "C"}
eng = {"B", "D"}
print(f"Both: {math & eng}, Total: {len(math | eng)}")

---

Lv39. Type Conversion / 자료구조 간 변환
Description: 리스트, 튜플, 셋 간의 자유로운 형 변환을 통해 상황에 맞는 데이터 처리를 합니다. / Convert between lists, tuples, and sets for various data processing needs.

1. List to Tuple / 리스트를 수정 불가능한 튜플로 변환합니다.
lst = [1, 2, 3]
tpl = tuple(lst)
print(tpl)

2. Tuple to List / 튜플을 리스트로 바꿔서 내용을 추가한 후 사용합니다.
tpl = (10, 20)
lst = list(tpl)
lst.append(30)
print(lst)

3. List to Set / 리스트를 셋으로 바꿔 중복을 제거합니다.
lst = [1, 1, 2, 3, 3]
s = set(lst)
print(s)

4. Set to Tuple / 셋을 튜플로 변환합니다.
s = {1, 2, 3}
tpl = tuple(s)
print(tpl)

5. Dict Keys to List / 딕셔너리의 키들만 뽑아 리스트로 만듭니다.
d = {"a": 1, "b": 2}
print(list(d.keys()))

6. Dict Items to List / 딕셔너리의 키-값 쌍을 튜플들이 담긴 리스트로 변환합니다.
d = {"a": 1, "b": 2}
print(list(d.items()))

7. String to Sorted List / 문자열을 셋으로 바꿔 중복 제거 후, 리스트화하여 정렬까지 수행합니다.
s = set("python")
lst = sorted(list(s))
print(lst)

8. Zip to Dict / 두 개의 리스트를 zip하여 딕셔너리로 합칩니다.
keys = ["id", "pw"]
vals = ["admin", "123"]
d = dict(zip(keys, vals))
print(d)

9. Iterables to Join / 튜플에 담긴 문자열들도 join으로 합칠 수 있습니다.
names = ("a", "b", "c")
print("-".join(names))

10. List of Tuples Access / 튜플들을 담고 있는 리스트(리스트 오브 튜플) 구조를 연습합니다.
data = [(1, 2), (3, 4)]
print(data[0][1])

11. Tuple to individual vars / 튜플을 개별 변수로 언패킹합니다. (Casting feel)
t = (1, 2)
a, b = t
print(a + b)

12. Nesting after cast / 리스트를 만들어 튜플 안에 담습니다.
lst = [1, 2]
t = (lst, 3)
print(t)

13. Set to sorted list / 셋은 순서가 없으므로 정렬하려면 리스트로 바꿔야 합니다.
s = {3, 1, 2}
print(sorted(list(s)))

14. Nested list to individual tuples / 중첩 리스트를 튜플 묶음으로 바꿉니다.
m = [[1], [2]]
t = (tuple(m[0]), tuple(m[1]))
print(t)

15. Boolean list to set / 불리언 리스트를 셋으로 바꾸면 True, False만 남습니다.
flags = [True, True, False]
print(set(flags))

16. Single char string to list / 한 글자씩 쪼갭니다.
s = "Hi"
print(list(s))

17. Range to list / range 범위를 리스트로 변환합니다.
r = range(5)
print(list(r))

18. Map object to list / map 함수의 결과를 리스트로 봅니다 (맛보기).
n = ["1", "2"]
print(list(map(int, n)))

19. Reversing via cast / 튜플을 리스트로 바꿔 뒤집고 다시 튜플로 만듭니다.
t = (1, 2, 3)
l = list(t)
l.reverse()
print(tuple(l))

20. Final Review / [복습] 셋에 데이터를 추가하고 정렬된 튜플 형태로 최종 변환합니다.
p = set([1, 2, 3])
p.add(4)
print(tuple(sorted(list(p))))

---

Lv40. [Challenge] Log Cleaner / [챌린지] 중복 ID 로그 클리너
Description: [챌린지] 셋의 중복 제거 특성과 집합 연산을 사용하여 데이터 로그를 정제합니다. / Refining data logs using set properties and operations.

1. Distinct Users / 전체 접속 로그에서 중복을 제외한 실제 유저 수를 구합니다.
logs = ["user1", "user2", "user1", "user3"]
unique_users = set(logs)
print(f"Unique: {len(unique_users)}")

2. Daily Newcomers / 1일차와 2일차 유저를 대조하여 2일차에 처음 나타난 신규 유저를 찾습니다.
day1 = {"a", "b", "c"}
day2 = {"b", "c", "d"}
print(f"New Users: {day2 - day1}")

3. Shared Staff / 전체 접속자 중 관리자 권한을 가진 사람만 골라냅니다.
admins = {"root", "admin"}
users = {"admin", "guest", "user1"}
print(f"Admin Access: {admins & users}")

4. Full Pool / 이틀간 나타난 모든 유저를 합친 전체 명단을 만듭니다.
day1 = {"a", "b", "c"}
day2 = {"b", "c", "d"}
all_staff = day1 | day2
print(f"Total Staff Pool: {all_staff}")

5. Filter Invalid / 현재 명단에서 테스트용 계정이나 게스트를 제외합니다.
invalid = {"test", "guest"}
current = {"admin", "test", "user1"}
print(f"Valid: {current - invalid}")

6. Normalize & Sort / 튜플 데이터의 중복을 제거하고 정렬된 리스트로 정제합니다.
data = ("apple", "banana", "apple")
clean = sorted(list(set(data)))
print(f"Sorted Unique: {clean}")

7. Collision Detector / 두 집합 간에 겹치는 요소가 있는지 판별합니다.
s1 = {1, 2, 3}
s2 = {4, 5, 6}
print(f"Common items exist? {not s1.isdisjoint(s2)}")

8. Tag Sanitizer / 콤마로 구분된 태그들을 쪼갠 뒤 중복을 없애고 예쁘게 합칩니다.
input_tags = "python, java, python, c++"
tags = set(input_tags.split(", "))
print(f"Tags: {', '.join(sorted(tags))}")

9. Tuple to Dict Item / 튜플의 데이터를 이용해 딕셔너리의 항목을 구성해 봅니다.
v = ("key", "val")
d = {v[0]: v[1]}
print(d)

10. Merge & Count / 기존 집합에 새로운 집합 데이터를 병합하여 항목 수를 확인합니다.
s = {10, 20, 30}
s.update({30, 40, 50})
print(f"Final Count: {len(s)}")

11. Unique character check / 모든 알파벳이 중복 없이 쓰였는지 봅니다.
s = "abc"
print(len(s) == len(set(s)))

12. Membership intersection / 여러 리스트에 공통으로 있는 아이템을 효율적으로 찾습니다.
l1, l2 = [1, 2, 3], [2, 3, 4]
print(set(l1) & set(l2))

13. Remove batch / 리스트에서 여러 요소를 한 번에 제거합니다.
raw = {1, 2, 3, 4, 5}
remove_list = {2, 4}
print(raw - remove_list)

14. Symmetric diff in roles / 두 부서 간에 소속이 겹치지 않는 사람들을 뽑습니다.
it = {"kim", "lee"}
hr = {"lee", "park"}
print(it ^ hr)

15. Set to f-string display / 셋의 내용을 정렬하여 가독성 있게 보여줍니다.
s = {"Banana", "Apple"}
print(f"Choices: {'/'.join(sorted(s))}")

16. List unique with index stability / 순서를 유지하며 중복을 제거하는 기법 기초입니다 (맛보기).
lst = ["B", "A", "B", "C"]
seen = set()
# use for loop logic...
print("Use sets to track 'seen' items while keeping list order")

17. Clear and check / 집합을 비우고 유효성 검사를 합니다.
s = {1, 2}
s.clear()
print(not s)

18. Pop and store / 셋에서 아무 요소나 하나 꺼내 저장합니다.
s = {"T1", "T2"}
task = s.pop()
print(f"Start: {task}")

19. Sub-dict extraction / 딕셔너리의 일부 키-값 쌍만 뽑아 셋 연산과 결합합니다 (맛보기).
d = {"a": 1, "b": 2}
keys = {"a", "c"}
print(set(d.keys()) & keys)

20. Final Review / [종합] 두 그룹 중 서로 겹치지 않고 오직 한쪽에만 있는 멤버들을 찾아냅니다.
grp_a = {"x", "y"}
grp_b = {"y", "z"}
print(f"Exclusive to each: {grp_a ^ grp_b}")
