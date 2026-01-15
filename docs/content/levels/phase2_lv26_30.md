# Phase 2: 리스트와 복합 자료구조 (Lv 26 - 30) 상세 세트

---

Lv26. Searching & Count / 탐색과 카운팅
Description: 리스트 안에서 특정 데이터의 개수를 세거나 위치를 찾는 법을 익힙니다. / Learn how to count occurrences and find indices of items within a list.

1. Count Value / count(value)는 리스트에 해당 값이 몇 개 있는지 알려줍니다.
nums = [1, 2, 2, 3, 2]
print(nums.count(2))

2. Count String / 문자열 데이터의 출현 횟수를 세어 봅니다.
colors = ["red", "blue", "red"]
print(colors.count("red"))

3. Index of / index(value)는 해당 값이 처음 나타나는 위치(인덱스)를 반환합니다.
items = ["A", "B", "C"]
print(items.index("B"))

4. First occurrence / 중복된 값이 있으면 가장 앞에 있는 인덱스를 알려줍니다.
data = [10, 20, 30, 20]
print(data.index(20))

5. Presence Check / in 연산자로 존재 여부만 True/False로 신속히 확인합니다.
nums = [1, 5, 7]
print(10 in nums)

6. Char in list / 문자열을 리스트로 바꾼 뒤 특정 알파벳의 개수를 셉니다.
s = "banana"
msg = list(s)
print(msg.count("a"))

7. Find max index / 최고점 점수가 몇 번째 인덱스에 있는지 찾습니다.
scores = [90, 80, 70]
print(scores.index(max(scores)))

8. Count logic / count 결과가 0보다 큰지 확인하여 포함 여부를 판단합니다.
val = 100
lst = [10, 20, 30]
print(lst.count(val) > 0)

9. F-string count / 특정 유저가 목록에 몇 번 등장하는지 f-string으로 출력합니다.
users = ["alice", "bob", "alice"]
print(f"Alice count: {users.count('alice')}")

10. Index & Slice / 값을 찾아낸 인덱스부터 끝까지 잘라내어 출력해 봅니다.
data = [1, 2, 3, 4, 5]
idx = data.index(3)
print(data[idx:])

11. Count non-existent / 리스트에 없는 값의 count는 0을 반환합니다.
n = [1, 2, 3]
print(n.count(99))

12. Index error (Theory) / 없는 값을 index()로 찾으려고 하면 ValueError가 발생합니다.
# n = [1, 2]
# print(n.index(99))
print("Index non-existent causes ValueError")

13. Find min index / 가장 작은 값의 위치를 찾습니다.
prices = [5000, 2000, 8000]
print(prices.index(min(prices)))

14. Check not in / 포함되지 않았는지를 in 연산자로 확인합니다.
lst = ["A", "B"]
print("C" not in lst)

15. Indexing with start / 특정 위치 이후부터 검색을 시작합니다.
data = [1, 2, 3, 2, 1]
print(data.index(2, 2)) # Search 2 starting from index 2

16. List within list count / 중첩된 리스트 자체의 개수를 셉니다.
v = [[1], [2], [1]]
print(v.count([1]))

17. Count booleans / True가 몇 개인지 셉니다.
flags = [True, False, True, True]
print(flags.count(True))

18. Find 'None' index / 리스트에서 None이 위치한 곳을 찾습니다.
lst = [1, None, 3]
print(lst.index(None))

19. Multiple occurrences / 모든 인덱스를 찾는 대신 처음과 마지막만 확인해 봅니다.
n = [7, 8, 7, 9]
print("First:", n.index(7))

20. Final Review / [복습] 거래 기록 리스트에서 'Buy' 액션의 총 횟수를 출력합니다.
p = ["Buy", "Sell", "Buy", "Buy"]
print(f"Total Buy Actions: {p.count('Buy')}")

---

Lv27. Sort & Reverse / 정렬과 뒤집기
Description: 리스트의 순서를 가나다 순이나 크기 순으로 정렬하는 법을 익힙니다. / Learn how to order list items alphabetically or numerically.

1. Sort In-place / sort()는 리스트를 오름차순(작은 것부터)으로 직접 정렬합니다.
nums = [3, 1, 4, 2]
nums.sort()
print(nums)

2. Sort Reverse / reverse=True를 넣으면 내림차순(큰 것부터)으로 정렬합니다.
nums = [3, 1, 4, 2]
nums.sort(reverse=True)
print(nums)

3. Sorted Function / sorted()는 원본은 그대로 두고 정렬된 '새 리스트'를 반환합니다.
chars = ["c", "a", "b"]
new_chars = sorted(chars)
print(chars, new_chars)

4. Reverse Order / reverse()는 값을 정렬하지 않고 현재 순서만 그대로 뒤집습니다.
vals = [10, 20, 30]
vals.reverse()
print(vals)

5. Sort by Length / key=len을 지정하면 글자 길이를 기준으로 정렬합니다.
names = ["Alice", "Bob", "Charlie"]
names.sort(key=len)
print(names)

6. String Number Sort / 문자열 숫자는 맨 앞 글자 기준으로 정렬됨에 주의하세요.
data = ["10", "2", "30"]
data.sort()
print(data)

7. Sorted & Sliced / 정렬한 뒤 슬라이싱으로 뒤집어 내림차순 효과를 냅니다.
data = [5, 2, 9, 1]
print(sorted(data)[::-1])

8. Sort & Join / 색상 이름을 정렬한 뒤 세련되게 화살표로 연결해 출력합니다.
colors = ["red", "green", "blue"]
colors.sort()
print(" > ".join(colors))

9. Reversed Iterator / reversed() 함수로 이터레이터를 만든 뒤 리스트로 변환해 봅니다.
n = [1, 2, 3]
print(list(reversed(n)))

10. Max/Min via Sort / 정렬 후 첫 번째와 마지막 요소를 뽑아 최소/최대를 확인합니다.
prices = [1200, 800, 5000, 400]
prices.sort()
print(f"Min: {prices[0]}, Max: {prices[-1]}")

11. Sort Mixed (Error) / 타입이 섞인 리스트는 정렬할 수 없습니다 (이론).
# lst = [1, "a"]
# lst.sort()
print("Sorting mixed types causes TypeError")

12. Case-insensitive Sort / 대소문자 구분 없이 정렬합니다.
words = ["banana", "Apple", "cherry"]
words.sort(key=str.lower)
print(words)

13. Reverse after sorting / 정렬하고 뒤집기.
n = [5, 1, 9]
n.sort()
n.reverse()
print(n)

14. Sorted string / 문자열을 정렬하면 각 문자가 리스트로 반환됩니다.
s = "python"
print(sorted(s))

15. Last 3 sorted / 상위 3개만 정렬하여 확인합니다.
n = [10, 50, 20, 40, 30]
print(sorted(n)[-3:])

16. Stability / 같은 값일 때 원래 순서가 유지되는지 확인합니다 (고급).
n = [("A", 1), ("B", 1), ("A", 2)]
n.sort(key=lambda x: x[1])
print(n)

17. Reverse slicing vs method / [::-1]과 reverse()의 차이 (리스트 반환 vs 원본 수정).
a = [1, 2]
b = a[::-1]
a.reverse()
print(a == b)

18. Descending string sort / 문자열을 내림차순으로 정렬합니다.
tags = ["dev", "web", "ai"]
print(sorted(tags, reverse=True))

19. Sorting by absolute value / 절대값을 기준으로 정렬합니다.
n = [-10, 5, -2, 8]
n.sort(key=abs)
print(n)

20. Final Review / [복습] 정렬된 리스트에서 뒤에서 3번째(점수가 3번째로 높은 것)를 뽑습니다.
scores = [85, 92, 78, 100]
s_scores = sorted(scores)
print(f"Rank-3: {s_scores[-3]}")

---

Lv28. List Statistics / 숫자 리스트 통계
Description: 숫자들로 구성된 리스트의 합계, 최댓값, 최솟값을 한 번에 구하는 법을 익힙니다. / Calculate sum, maximum, and minimum values of numeric lists.

1. Sum List / sum()은 리스트의 모든 숫자를 더한 합계를 반환합니다.
nums = [10, 20, 30]
print(sum(nums))

2. Max & Min / 가장 큰 값과 가장 작은 값을 찾아줍니다.
nums = [5, 12, 3, 9]
print(max(nums))
print(min(nums))

3. Average Logic / 합계를 개수로 나누어 평균을 구하는 가장 핵심적인 공식입니다.
scores = [80, 90, 100]
avg = sum(scores) / len(scores)
print(f"AVG: {avg}")

4. Delta (Range) / 최댓값과 최솟값의 차이(범위)를 구합니다.
data = [1, 2, 3, 4, 5]
print(f"Range: {max(data) - min(data)}")

5. Float Sum / 실수 리스트의 합계를 구하고 소수점을 포맷팅합니다.
prices = [12.5, 8.2, 15.0]
print(f"Total: ${sum(prices):.2f}")

6. Sum & Multiply / 합계에 특정 가중치를 곱하는 연산입니다.
nums = [4, 2, 8]
print(sum(nums) * 10)

7. Max Squared / 최댓값을 찾아 제곱해 봅니다.
vals = [1, 2, 3]
print(max(vals) ** 2)

8. Boolean Sum / 불리언 리스트에서 sum을 쓰면 True의 개수가 카운트됩니다.
check = [True, False, True]
print(sum(check))

9. Rounded AVG / 일평균을 구한 뒤 소수점을 버리고 정수로 출력합니다.
daily = [100, 200, 150]
print(f"Daily AVG: {int(sum(daily)/3)}")

10. Empty Statistics (Error) / 빈 리스트에서는 max, min 호출 시 에러가 나므로 주의해야 합니다.
data = []
# print(max(data))
print("Max/Min on empty list causes ValueError")

11. Sum of string list (Error) / 문자열 리스트는 sum() 할 수 없습니다.
# lst = ["1", "2"]
# sum(lst)
print("Summing strings causes TypeError")

12. Max with default / 빈 리스트일 때 기본값을 반환하도록 설정합니다.
n = []
print(max(n, default=0))

13. List multiplication sum / 리스트 곱 연산 후 합계를 구합니다.
n = [1, 2] * 3
print(sum(n))

14. Min of strings / 문자열 중 알파벳 순서가 가장 빠른 것을 찾습니다.
n = ["cat", "apple", "bat"]
print(min(n))

15. Sum and subtract / 전체 합계에서 특정 값을 뺍니다.
exp = [500, 200, 300]
budget = 2000
print(f"Left: {budget - sum(exp)}")

16. Median hint / 정렬된 리스트에서 가운데 값을 뽑아 봅니다.
n = [10, 20, 30, 40, 50]
print(n[len(n)//2])

17. Absolute max / 절대값이 가장 큰 수를 찾습니다.
n = [-50, 20, 30]
print(max(n, key=abs))

18. Total character length / 리스트 내 모든 문자열의 총 길이를 구합니다 (맛보기).
words = ["Ai", "Python"]
print(sum(len(w) for w in words))

19. Weighted sum / 각 요소에 인덱스를 곱한 합계를 구합니다 (맛보기).
n = [10, 20, 30]
print(n[0]*0 + n[1]*1 + n[2]*2)

20. Final Review / [복습] 재고 합계를 구하고, 재고가 0인 품목이 있는지 판별합니다.
inv = [5, 10, 0, 8]
print(f"Total Stock: {sum(inv)}, Needs Refill: {min(inv) == 0}")

---

Lv29. Nested Lists / 중첩 리스트
Description: 리스트 안에 또 다른 리스트를 넣어 2차원 공간(표나 행렬)을 표현하는 법을 익힙니다. / Learn how to use a list within another list to represent grids or tables.

1. Access Row / 리스트 내부의 각 리스트 요소에 접근해 봅니다.
matrix = [[1, 2], [3, 4]]
print(matrix[0])
print(matrix[1])

2. Access Column / 첫 번째 리스트의 두 번째 항목(20)을 가져옵니다.
matrix = [[10, 20], [30, 40]]
print(matrix[0][1])

3. Table Access / 두 번째 리스트의 첫 번째 항목(C)을 가져옵니다.
table = [["A", "B"], ["C", "D"]]
print(table[1][0])

4. Outer Length / 바깥쪽 리스트의 길이를 재면 내부 리스트의 개수(2)가 나옵니다.
groups = [[1, 2, 3], [4, 5, 6]]
print(len(groups))

5. Inner Length / 첫 번째 내부 리스트의 아이템 개수(3)를 확인합니다.
groups = [[1, 2, 3], [4, 5, 6]]
print(len(groups[0]))

6. Coordinate Update / 특정 좌표([0][0])의 값을 직접 수정합니다.
data = [[1, 1], [2, 2]]
data[0][0] = 9
print(data)

7. Record Access / 이름과 나이가 짝지어진 데이터를 인덱스로 출력합니다.
users = [["alice", 20], ["bob", 25]]
print(f"{users[0][0]} is {users[0][1]}yo")

8. Initializing Rows / 문자 반복을 활용해 같은 모양의 행을 리스트로 만듭니다.
rows = [["#"] * 3] * 3
print(rows[0])

9. Pixel Logic / 이미지 픽셀 데이터 같은 중첩 구조를 연습합니다.
pixels = [[0, 0, 0], [255, 255, 255]]
print(f"Row 2 Start: {pixels[1][0]}")

10. Nested Math / 중첩 리스트 안의 수치를 연산하여 업데이트합니다.
inv = [["Apple", 5], ["Milk", 2]]
inv[1][1] += 3
print(inv[1])

11. Nested Slicing / 전체 행 중 일부 열만 가져옵니다.
m = [[1, 2, 3], [4, 5, 6]]
print(m[0][:2])

12. Adding a Row / 리스트 뒤에 새로운 행 리스트를 추가합니다.
m = [[1, 2]]
m.append([3, 4])
print(m)

13. Flattening hint / 2차원을 1차원으로 합칩니다.
m = [[1], [2]]
print(m[0] + m[1])

14. Searching in nested / 내부 리스트 안에 특정 값이 있는지 확인합니다.
m = [[1, 2], [3, 4]]
print(3 in m[1])

15. Dynamic grid / 변수를 인덱스로 사용하여 접근합니다.
m = [[0, 1], [2, 3]]
r, c = 1, 0
print(m[r][c])

16. Nested clear / 전체 리스트는 남기고 하나만 비워 봅니다.
m = [[1], [2]]
m[0].clear()
print(m)

17. List of tuples / 튜플을 포함한 리스트 구조입니다.
lst = [(0, 0), (1, 1)]
print(lst[1][0])

18. Nested sorting / 두 번째 요소를 기준으로 정렬합니다.
data = [[1, 30], [2, 10], [3, 20]]
data.sort(key=lambda x: x[1])
print(data)

19. Identity check / 리스트 복사 시 내부 객체가 공유되는 현상을 확인합니다.
m1 = [[1]]
m2 = m1[:]
m1[0][0] = 9
print(m2) # Shared inner list

20. Final Review / [복습] 2D 게임판의 특정 위치 값들을 뽑아서 비교해 봅니다.
board = [["O", "X", "O"], ["X", "O", "X"]]
print(f"Center: {board[0][1]}, {board[1][1]}")

---

Lv30. [Challenge] Basic Analysis / [챌린지] 데이터 분석 기초
Description: [챌린지] 리스트의 메서드와 통계 함수를 결합하여 간단한 데이터 리포트를 작성합니다. / Integrating list methods and statistics functions to create simple data reports.

1. Score Spread / 성적 리스트에서 최고점과 최저점의 차이를 구합니다.
scores = [70, 85, 90, 75, 100]
hi = max(scores)
lo = min(scores)
print(f"Diff: {hi - lo}")

2. Steps AVG / 일일 걸음 수의 평균을 소수점 없이 출력합니다.
daily_steps = [8000, 12000, 7500, 10000]
avg = sum(daily_steps) / len(daily_steps)
print(f"Step AVG: {avg:.0f}")

3. Top N Items / 데이터를 내림차순 정렬한 뒤 상위 2개만 뽑아냅니다.
raw = [10, 5, 20, 15]
fast_fix = sorted(raw, reverse=True)
print(f"Top 2: {fast_fix[:2]}")

4. Error Rate / 에러 발생 로그를 분석하여 퍼센트 비율로 변환합니다.
logs = ["OK", "ERR", "OK", "ERR", "ERR"]
err_cnt = logs.count("ERR")
print(f"Error Rate: {err_cnt / len(logs):.1%}")

5. Unique Identity / 전체 명단 수와 특정 성씨의 빈도를 체크합니다.
users = ["kim", "lee", "park", "kim"]
print(f"Total: {len(users)}, Unique Kim: {users.count('kim')}")

6. Simple Auto-increment / ID 리스트를 정렬한 뒤 마지막 번호에 1을 더해 새 ID를 추천합니다.
ids = [101, 105, 103, 102]
ids.sort()
print(f"Next ID: {ids[-1] + 1}")

7. Midpoint Slice / 리스트를 정확히 반으로 잘라 앞부분만 출력합니다.
data = [1, 2, 3, 4, 5, 6]
mid = len(data) // 2
print(f"First half: {data[:mid]}")

8. Currency Sum / 가격 리스트의 합계에 세금을 적용하여 포맷팅합니다.
prices = [1200, 1500, 900]
taxed = sum(prices) * 1.1
print(f"Final Bill: {taxed:,.0f}")

9. Popularity Check / 특정 태그가 2번 이상 쓰였는지 인기 여부를 판별합니다.
tags = ["python", "java", "python", "php"]
print(f"Is Python popular? {tags.count('python') >= 2}")

10. Middle Trim / 정렬 후 양 끝을 뺀 중간 데이터들만 발라냅니다.
nums = [5, 1, 9, 3]
nums.sort()
middle_val = nums[1:3]
print(f"Middle Items: {middle_val}")

11. Inventory Shortage / 재고가 5개 미만인 품목이 있는지 확인합니다.
stocks = [10, 15, 3, 20]
print(f"Alert? {min(stocks) < 5}")

12. ID Search & Display / 특정 ID가 리스트에 있으면 그 위치를 함께 표시합니다.
ids = [201, 205, 310]
target = 205
if target in ids:
    print(f"Found at index {ids.index(target)}")

13. Performance Gap / 평균과 최고점 사이의 격차를 구합니다.
scores = [80, 90, 70]
print(f"Gap: {max(scores) - sum(scores)/3:.1f}")

14. Username Validation / 사용 가능한 이름인지(이미 존재하지 않는지) 확인합니다.
active_names = ["alex", "neo"]
new_name = "alex"
print(f"Can use '{new_name}'? {new_name not in active_names}")

15. Batch Update / 모든 수치에 일괄적으로 가산점을 부여한 합계를 구합니다.
raw = [10, 20, 30]
print(f"Total with Bonus: {sum(raw) + len(raw)*5}")

16. List to CSV Sample / 리스트 내용을 콤마로 연결해 보여줍니다.
data = ["Admin", "2026", "OK"]
print(",".join(data))

17. Tail Removal / 로그가 너무 길면 마지막 1개를 지우는 로직입니다.
logs = ["L1", "L2", "L3", "L4"]
logs.pop()
print(logs)

18. Absolute Sum / 모든 값의 기호를 떼고 절대값의 합을 구합니다 (맛보기).
n = [-10, 20, -30]
print(sum(abs(x) for x in n))

19. Sorting with prefix / 'ID' 문자가 붙은 문자열들을 정렬합니다.
ids = ["ID03", "ID01", "ID02"]
print(sorted(ids))

20. Final Review / [종합] 판매량 리스트에서 최고 실적과 최저 실적을 정렬 기법으로 찾습니다.
sales = [150, 200, 50, 300]
sorted_sales = sorted(sales)
print(f"BEST: {sorted_sales[-1]}, WORST: {sorted_sales[0]}")
