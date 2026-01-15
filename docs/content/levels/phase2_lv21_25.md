# Phase 2: 리스트와 복합 자료구조 (Lv 21 - 25) 상세 세트

---

Lv21. List Basics / 리스트 생성과 인덱싱
Description: 여러 개의 데이터를 하나의 주머니(List)에 담고 번호로 꺼내는 법을 익힙니다. / Learn how to store multiple data items in a list and access them by index.

1. Create & Print / 대괄호[]를 사용하여 숫자가 담긴 리스트를 만듭니다.
nums = [1, 2, 3]
print(nums)

2. Index Access / 리스트의 첫 번째 항목(인덱스 0)을 가져옵니다.
colors = ["red", "blue"]
print(colors[0])

3. Mixed Types / 파이썬 리스트는 서로 다른 타입의 데이터를 함께 담을 수 있습니다.
mix = ["A", 10, True]
print(mix)

4. Value Assignment / 리스트의 특정 위치 값을 다른 값으로 변경할 수 있습니다.
nums = [10, 20, 30]
nums[1] = 99
print(nums)

5. List Length / len() 함수로 리스트에 들어있는 항목 개수를 확인합니다.
items = ["Phone", "Pad"]
print(len(items))

6. Negative Index / -1 인덱스는 가장 마지막 항목을 뜻합니다.
nums = [1, 2, 3]
print(nums[-1])

7. Empty List / 아무것도 들어있지 않은 빈 리스트를 만들 수 있습니다.
empty = []
print(empty)

8. Basic Slicing / 슬라이싱[:]을 통해 리스트의 일부만 잘라냅니다.
alphabet = ["a", "b", "c", "d"]
print(alphabet[1:3])

9. Membership Check / in 연산자로 리스트 안에 특정 값이 있는지 확인합니다.
data = [1, 2, 3]
print(1 in data)

10. Nested List / 리스트 안에 리스트가 들어있는 중첩 리스트 예제입니다.
v = [[1, 2], [3, 4]]
print(v[0][1])

11. Nested Length / 중첩된 리스트의 내부 길이를 측정합니다.
v = [[1, 2, 3], [4, 5]]
print(len(v[0]))

12. Index 2 access / 세 번째 항목에 접근합니다.
n = [10, 20, 30, 40]
print(n[2])

13. Concatenation / 두 리스트를 합쳐 봅니다.
a = [1, 2]
b = [3, 4]
print(a + b)

14. List of Strings / 문자열들로 구성된 리스트입니다.
names = ["Alice", "Bob", "Charlie"]
print(names[1])

15. Last 2 items / 뒤에서 두 개 항목을 슬라이싱합니다.
n = [1, 2, 3, 4, 5]
print(n[-2:])

16. List initialization / 곱하기 연산자로 리스트를 초기화합니다.
zeros = [0] * 5
print(zeros)

17. Type identification / 리스트 변수의 타입을 확인합니다.
n = [1]
print(type(n))

18. Nested access level 2 / 삼중 리스트 구조에서 값을 꺼냅니다.
v = [[[1]]]
print(v[0][0][0])

19. Sub-slice list / 리스트의 앞부분 절반만 가져옵니다.
n = [1, 2, 3, 4, 5, 6]
mid = len(n) // 2
print(n[:mid])

20. Final Review / [복습] 유저 정보를 리스트에 담고 f-string으로 출력합니다.
p = ["Admin", "Gold", 1250]
print(f"User {p[0]} is {p[1]} rank.")

---

Lv22. Append & Extend / 데이터 추가와 결합
Description: 리스트에 새로운 데이터를 뒤에 붙이거나 다른 리스트와 합치는 법을 익힙니다. / Learn to add items to a list using append or combine lists with extend.

1. Append Item / append()는 데이터를 리스트의 가장 뒤에 추가합니다.
fruits = ["apple"]
fruits.append("banana")
print(fruits)

2. Append Number / 숫자를 리스트 뒤에 덧붙입니다.
nums = [1, 2]
nums.append(3)
print(nums)

3. Add to Empty / 빈 리스트에 첫 번째 요소를 추가하는 과정입니다.
users = []
users.append("alice")
print(users)

4. List Plus Operator / + 연산자를 사용하여 두 리스트를 하나로 합칠 수 있습니다.
a = [1, 2]
b = [3, 4]
print(a + b)

5. List Multiplication / * 연산자로 리스트의 요소들을 반복해서 늘립니다.
lst = ["A"]
lst *= 3
print(lst)

6. Extend Method / extend()는 다른 리스트의 모든 요소를 가져와 합칩니다.
nums = [1, 2]
nums.extend([3, 4])
print(nums)

7. Count after Append / 항목을 추가한 뒤 전체 개수를 확인해 봅니다.
cart = ["Milk"]
cart.append("Bread")
print(f"Items: {len(cart)}")

8. Quarter Combination / 분기별 리스트를 하나로 통합합니다.
q1 = ["Jan", "Feb"]
q2 = ["Mar", "Apr"]
year = q1 + q2
print(year)

9. Append position check / 추가된 항목이 인덱스 1번에 위치함을 확인합니다.
colors = ["Red"]
colors.append("Blue")
print(colors[1])

10. List to joined string / 리스트에 요소를 추가한 뒤 join으로 합쳐 봅니다.
msg = ["Hi"]
msg.append("!")
print("".join(msg))

11. Append boolean / 리스트에 불리언 값을 추가합니다.
flags = [True]
flags.append(False)
print(flags)

12. Sequential appends / 여러 번 연속해서 데이터를 담습니다.
lst = []
lst.append(1)
lst.append(2)
lst.append(3)
print(lst)

13. Extend vs Append / extend와 append의 결과 차이를 확인합니다. (리스트를 통째로 넣음)
a = [1, 2]
a.append([3, 4])
print(a)

14. List addition result / 합쳐진 리스트의 길이를 측정합니다.
res = [1, 2] + [3, 4, 5]
print(len(res))

15. String to list conversion / list() 함수로 문자열을 쪼개 리스트로 만듭니다.
s = "ABC"
chars = list(s)
chars.append("D")
print(chars)

16. Adding None / 리스트에 None 값을 추가해 봅니다.
lst = [1]
lst.append(None)
print(lst)

17. Reverse extend / 원본 리스트의 뒤집힌 버전을 덧붙입니다.
n = [1, 2]
n.extend(n[::-1])
print(n)

18. Dynamic append / 변수에 담긴 값을 리스트에 넣습니다.
data = 100
lst = [50]
lst.append(data)
print(lst)

19. Multiple multiplication / 리스트를 여러 번 곱해 봅니다.
pattern = [1, 0]
print(pattern * 4)

20. Final Review / [복습] 태그를 추가한 후 해시태그 형식으로 출력합니다.
tags = ["python"]
tags.append("dev")
print(" #".join([""] + tags).strip())

---

Lv23. Insert & Delete / 특정 위치 삽입과 삭제
Description: 리스트의 원하는 위치에 값을 넣거나, 값을 찾아 지우는 법을 익힙니다. / Learn how to insert values at specific indices or remove them from the list.

1. Basic Insert / insert(index, value)는 지정한 위치에 값을 끼워넣습니다.
nums = [1, 3]
nums.insert(1, 2)
print(nums)

2. Insert at Start / 맨 앞(인덱스 0)에 새로운 색상을 삽입합니다.
colors = ["Red", "Blue"]
colors.insert(0, "Black")
print(colors)

3. Value Removal / remove(value)는 리스트에서 해당 값을 찾아 지웁니다.
nums = [1, 2, 3]
nums.remove(2)
print(nums)

4. Del Keyword / del 키워드를 사용하여 특정 인덱스의 값을 지웁니다.
data = [10, 20, 30]
del data[1]
print(data)

5. Pop Last / pop()은 마지막 요소를 제거함과 동시에 그 값을 반환합니다.
users = ["A", "B", "C"]
last = users.pop()
print(users, last)

6. Pop by Index / 인덱스를 지정하여 pop(0)을 하면 첫 번째 요소를 지우고 가져옵니다.
users = ["A", "B", "C"]
first = users.pop(0)
print(users, first)

7. Remove Duplicate / remove는 중복된 값이 있으면 가장 앞에 있는 것 하나만 지웁니다.
lst = [1, 1, 2]
lst.remove(1)
print(lst)

8. Clear List / clear()는 리스트의 모든 요소를 지워 빈 리스트로 만듭니다.
nums = [1, 2, 3]
nums.clear()
print(nums)

9. Insert at Len (Append) / len을 이용해 가장 마지막에 삽입하는 append와 같은 동작입니다.
items = ["P1", "P2"]
items.insert(len(items), "P3")
print(items)

10. Queue Logic / 대기열에서 첫 손님을 지우고 다음 손님을 확인합니다.
queue = ["User1", "User2"]
queue.pop(0)
print("Next:", queue[0])

11. Insert past end / 리스트 길이보다 큰 인덱스에 insert하면 가장 뒤에 붙습니다.
n = [1, 2]
n.insert(99, 3)
print(n)

12. Insert with negative index / 음수 인덱스로 삽입 위치를 정해 봅니다.
n = [10, 20, 30]
n.insert(-1, 25)
print(n)

13. Multi-del / del을 사용하여 슬라이싱 범위를 한꺼번에 지웁니다.
n = [1, 2, 3, 4, 5]
del n[1:4]
print(n)

14. Checking count before remove / 특정 값이 몇 개 있는지 확인 후 지웁니다.
lst = ["A", "B", "A"]
if "A" in lst:
    lst.remove("A")
print(lst)

15. Pop from empty (Error) / 빈 리스트에서 pop을 하면 에러가 납니다 (이론).
# n = []
# n.pop()
print("Pop empty list causes IndexError")

16. Del variable / 변수 자체를 메모리에서 제거합니다.
x = 10
del x
# print(x) # Error
print("Variable deleted")

17. Clear vs Del / 리스트 객체는 남기고 비우는 것과 객체 자체를 지우는 것의 차이입니다.
n = [1]
n.clear()
print(n)

18. Pop index 2 / 세 번째 항목을 팝합니다.
lst = [10, 20, 30, 40]
val = lst.pop(2)
print(val, lst)

19. Insert multiple times / 여러 항목을 연속해서 삽입합니다.
n = [1]
n.insert(0, 0)
n.insert(2, 2)
print(n)

20. Final Review / [복습] 스택(Stack) 구조처럼 데이터를 쌓았다가 마지막 것을 지워봅니다.
undo_stack = ["Page1", "Page2"]
undo_stack.append("Page3")
undo_stack.pop()
print(undo_stack)

---

Lv24. Slicing Plus / 리스트 슬라이싱 심화
Description: 여러 단계로 뛰어넘거나 거꾸로 뒤집는 등 슬라이싱의 고급 기법을 익힙니다. / Master advanced slicing techniques like stepping and reversing lists.

1. Step Slicing / [시작:끝:간격] 형식으로 0번부터 4번 전까지 2칸씩 가져옵니다.
n = [0, 1, 2, 3, 4, 5]
print(n[0:4:2])

2. Only Even Indices / 전체 리스트에서 짝수 인덱스(0, 2, 4)만 가져옵니다.
n = [0, 1, 2, 3, 4, 5]
print(n[::2])

3. Only Odd Indices / 전체 리스트에서 홀수 인덱스(1, 3, 5)만 가져옵니다.
n = [0, 1, 2, 3, 4, 5]
print(n[1::2])

4. Reversing List / 리스트를 역순으로 뒤집은 새 리스트를 만듭니다.
n = [1, 2, 3]
print(n[::-1])

5. Reverse Segment / 뒤에서부터 거꾸로 슬라이싱하는 예제입니다 (3, 2, 1).
n = [0, 1, 2, 3, 4, 5]
print(n[3:0:-1])

6. List of Chars / 문자열을 리스트로 바꾼 뒤 앞부분만 잘라냅니다.
msg = list("PYTHON")
print(msg[:3])

7. Segment Replacement / 슬라이싱 범위를 통째로 다른 리스트로 교체할 수 있습니다.
nums = [1, 2, 3]
nums[1:3] = [8, 9]
print(nums)

8. Segment Removal / 슬라이싱 범위에 빈 리스트를 대입하면 해당 구간이 삭제됩니다.
nums = [1, 2, 3, 4]
nums[1:3] = []
print(nums)

9. Shallow Copy / [:]는 리스트의 전체 복사본을 만듭니다.
a = [1, 2, 3]
b = a[:]
print(b == a, b is a)

10. From Negative Index / 뒤에서부터 세 번째 항목부터 끝까지 가져옵니다.
data = [10, 20, 30, 40, 50]
print(data[-3:])

11. Every 3rd / 3칸 간격으로 항목을 추출합니다.
n = list(range(10))
print(n[::3])

12. Reverse from 4 to 2 / 4번부터 2번 전까지 거꾸로 자릅니다.
n = [10, 20, 30, 40, 50]
print(n[3:1:-1])

13. First Half / 리스트의 상반부만 자릅니다.
n = [1, 2, 3, 4]
print(n[:len(n)//2])

14. Second Half / 리스트의 하반부만 자릅니다.
n = [1, 2, 3, 4]
print(n[len(n)//2:])

15. Double Step / 끝에서부터 2칸 간격으로 거꾸로 가져옵니다.
n = [1, 2, 3, 4, 5, 6]
print(n[::-2])

16. Replace one with many / 하나를 지우고 두 개를 넣습니다.
n = [1, 2, 3]
n[1:2] = [20, 21]
print(n)

17. Reverse string in list / 리스트의 문자열 요소를 뒤집은 결과를 확인합니다.
names = ["Alice", "Bob"]
print(names[0][::-1])

18. Dynamic end slice / 끝에서 1개만 제외하고 모두 가져옵니다.
n = [1, 2, 3, 4]
print(n[:-1])

19. Sub-nested slice / 중첩 리스트의 내부 요소를 슬라이싱합니다.
v = [[1, 2, 3], [4, 5, 6]]
print(v[0][1:])

20. Final Review / [복습] 문자열을 뒤집어 원래와 같은지 확인(회문, Palindrome)해 봅니다.
s = "Racecar"
print(s.lower() == s.lower()[::-1])

---

Lv25. [Challenge] Shopping Cart / [챌린지] 장바구니 관리 시스템
Description: [챌린지] 리스트의 추가, 삭제, 삽입, 슬라이싱을 종합적으로 사용합니다. / Practicing list operations in a full-fledged shopping cart simulation.

1. Add Item / 물품 하나를 장바구니 뒤에 추가합니다.
cart = ["Apple", "Milk"]
cart.append("Bread")
print(cart)

2. Urgent Insert / 특정 위치에 중요 물품을 끼워넣습니다.
cart.insert(1, "Egg")
print(f"Top: {cart[0]}, Next: {cart[1]}")

3. Cancel Item / 구매를 취소한 물품을 이름으로 찾아 삭제합니다.
cart = ["Apple", "Egg", "Milk", "Bread"]
cart.remove("Milk")
print(f"Items: {len(cart)}")

4. Checkout Process / 첫 번째 물건을 결제하고 목록에서 지웁니다.
bought = cart.pop(0)
print(f"Paid: {bought}, Left: {len(cart)}")

5. Merge Lists / 추가 리스트를 장바구니에 합칩니다.
more = ["Water", "Salt"]
cart += more
print(cart)

6. Recent View / 마지막으로 담은 물건 2개를 확인합니다.
print(f"Latest 2: {cart[-2:]}")

7. Sort Inventory / 장바구니를 가나다 순으로 정렬해 봅니다.
cart.sort()
print(f"Sorted: {cart}")

8. Find Item Index / 특정 물품이 몇 번째에 있는지 위치를 찾습니다.
idx = cart.index("Water")
print(f"Water is at #{idx}")

9. Rename Item / 첫 번째 물품의 이름을 수정해 봅니다.
cart[0] = "Premium " + cart[0]
print(cart[0])

10. Empty Check / 장바구니가 비었는지 확인하는 로직입니다.
print(f"Cart empty? {len(cart) == 0}")

11. Count specific item / 특정 물건이 장바구니에 몇 개인지 셉니다.
cart.append("Water")
print(f"Water count: {cart.count('Water')}")

12. Top 3 Items / 장바구니의 상위 3개 품목만 봅니다.
print(f"Priority: {cart[:3]}")

13. Item Replace / "Salt"를 "Sugar"로 교체합니다.
idx = cart.index("Salt")
cart[idx] = "Sugar"
print(cart)

14. List Reverse / 담은 순서를 완전히 뒤집어 봅니다.
cart.reverse()
print(f"Reversed: {cart}")

15. All caps items / 모든 품목을 대문자로 출력해 봅니다. (맛보기)
print(str(cart).upper())

16. Batch checkout / 모든 물건을 결제합니다.
cart.clear()
print(f"Pending: {len(cart)}")

17. Restock from backup / 백업 리스트에서 다시 가져옵니다.
backup = ["Milk", "Egg"]
cart.extend(backup)
print(cart)

18. Check premium / 특정 글자가 포함된 물품이 있는지 확인합니다.
print("Premium" in cart[0])

19. Gift wrap / 마지막 물건에 포장 표시를 합니다.
cart[-1] += " (GIFT)"
print(cart[-1])

20. Final Review / [종합] 위시리스트를 합친 뒤 예쁘게 나열하여 최종 목록을 보여줍니다.
wishlist = ["PC", "Mic"]
cart.extend(wishlist)
print(f"FINAL CART ({len(cart)}): {', '.join(cart)}")
