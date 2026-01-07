# 파이썬 100단계 커리큘럼 마스터 플랜 (세트형 고도화)

이 문서는 100개 레벨, 각 레벨당 20개 세트(총 2,000개 예문)로 구성된 파이썬 교육 과정의 전체 구조를 정의합니다.

---

## 🏗️ 시스템 변경 사항 (SQL)
Supabase DB에 다음 SQL을 실행하여 구조를 변경해야 합니다.

```sql
-- 1. 새로운 타입에 맞게 가이드 컬럼 정리
ALTER TABLE levels DROP COLUMN IF EXISTS guide_ko;
ALTER TABLE levels DROP COLUMN IF EXISTS guide_en;

-- 2. target_code 컬럼을 JSONB 배열로 변경
-- 형식: [{ "code": "내용", "guide_ko": "설명", "guide_en": "Desc" }, ...]
ALTER TABLE levels 
ALTER COLUMN target_code TYPE jsonb 
USING jsonb_build_array(jsonb_build_object('code', target_code, 'guide_ko', '내용을 입력하세요.'));

COMMENT ON COLUMN levels.target_code IS '배열 형태의 코드 세트: [{code, guide_ko, guide_en}]';
```

---

## 📅 콘텐츠 구축 로드맵 (Phase 1-5)

총 100개의 레벨을 5개의 Phase로 나누어 상세 설계합니다. 각 레벨은 주제에 맞는 **20개의 점진적 예문**을 가집니다.

### [Phase 1: 기초 문법과 데이터] (Lv 1-20)
*   **Lv 1-5**: 출력과 이스케이프 문자 심화 (sep, end, \n, \t, \\, Quotes)
*   **Lv 6-10**: 문자열 가공과 기초 파싱 (split, join, strip, replace, f-string)
*   **Lv 11-15**: 산술 및 복합 연산자 (//, %, **, +=, -=, *=, /=)
*   **Lv 16-20**: 비교/논리 연산 및 타입 캐스팅 (==, !=, and, or, int, float, str)

### [Phase 2: 리스트와 복합 자료구조] (Lv 21-40)
*   **Lv 21-25**: 리스트 생성과 인덱싱/슬라이싱 (append, insert, pop, remove)
*   **Lv 26-30**: 리스트 메서드와 정렬 (sort, reverse, count, index)
*   **Lv 31-35**: 딕셔너리와 Key-Value 관리 (keys, values, items, get, update)
*   **Lv 36-40**: 튜플과 집합 활용 (packing, unpacking, set operations)

### [Phase 3: 제어문과 프로그램 흐름] (Lv 41-60)
*   **Lv 41-45**: If 조건문과 중첩 구조 (if, elif, else, nested if)
*   **Lv 46-50**: For 반복문과 순회 (range, enumerate, zip)
*   **Lv 51-55**: While 반복문과 제어 (break, continue, infinite loop)
*   **Lv 56-60**: 제어문 응용 및 컴프리헨션 (List/Dict Comprehension)

### [Phase 4: 함수와 프로그램 모듈화] (Lv 61-80)
*   **Lv 61-65**: 함수 기초와 매개변수 (def, return, defaults)
*   **Lv 66-70**: 가변 인자와 스코프 (*args, **kwargs, global, nonlocal)
*   **Lv 71-75**: 함수형 프로그래밍 기초 (lambda, map, filter, reduce)
*   **Lv 76-80**: 내장 라이브러리와 모듈 (math, random, datetime, json)

### [Phase 5: 객체지향 및 고급 문법] (Lv 81-100)
*   **Lv 81-85**: 클래스와 인스턴스 (class, __init__, self, methods)
*   **Lv 86-90**: 상속과 다형성 (inheritance, overriding, super)
*   **Lv 91-95**: 예외 처리와 안전한 코드 (try, except, finally, raise)
*   **Lv 96-100**: 고급 기능 (decorator, generator, magic methods, final project)

---

## 📄 세부 문서화 진행 상황
각 Phase의 파일명을 클릭하여 상세 2,000개 세트를 확인할 수 있도록 순차적으로 업로드하겠습니다.

1.  [Phase 1 상세 데이터 (Lv 1-20)](./levels/phase1.md) - **작업 중**
2.  [Phase 2 상세 데이터 (Lv 21-40)](./levels/phase2.md) - 대기
3.  [Phase 3 상세 데이터 (Lv 41-60)](./levels/phase3.md) - 대기
4.  [Phase 4 상세 데이터 (Lv 61-80)](./levels/phase4.md) - 대기
5.  [Phase 5 상세 데이터 (Lv 81-100)](./levels/phase5.md) - 대기
