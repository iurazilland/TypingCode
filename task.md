# 작업 체크리스트: 파이썬 타자 연습 웹 앱 (상세 버전)

## Phase 0: 사전 준비 및 설계 (Pre-setup)
- [x] 기술 스택 확정 및 버전 검토 (Next.js 14+, React 18, Pyodide 최신)
- [x] 디자인 시스템 기초 설계 (CSS 변수: 컬러, 폰트, 간격, Minimalist 토큰)
- [ ] Supabase 프로젝트 생성 및 API 키 확보 (Deferred)

## Phase 1: 프로젝트 환경 구성 (Environment)
- [x] Next.js (App Router) + TypeScript 프로젝트 생성 (`create-next-app`)
- [x] 기본 디렉토리 구조 확립 (`components`, `hooks`, `lib`, `types`, `styles`)
- [x] 전역 스타일링 설정 (`globals.css`) - CSS Variables 기반 테마 시스템
- [x] 폰트 설정 (영문: Code 폰트, 한글: 본고딕/Pretendard)
- [x] ESLint, Prettier 등 코드 린팅 환경 구성

## Phase 2: 타이핑 엔진 코어 (Typing Engine Core)
- [x] 타이핑 상태 관리 스토어 구현 (Zustand 추천) - `Input`, `Cursor`, `Mistakes`
- [x] `CodeDisplay` 컴포넌트 구현
    - [x] 구문 강조(Syntax Highlighting)를 위한 토큰화 로직 또는 라이브러리 선정
    - [x] 줄 번호(Line number) 렌더링
- [x] 키보드 입력 핸들러 구현
    - [x] `keydown` 이벤트 캡처 및 기본 동작 제어
    - [x] 올바른 키/트린 키 판별 로직
    - [x] 백스페이스(Backspace) 및 줄바꿈(Enter) 처리 로직
- [x] 실시간 통계 계산 로직
    - [x] WPM (Words Per Minute) 계산 알고리즘
    - [x] 정확도(Accuracy) 계산 (오타율 반영)
- [x] 시각적 피드백 구현 (커서 깜빡임, 오타 붉은색 표시, 정답 초록색 표시)

## Phase 3: 파이썬 실행 엔진 (Python Execution via Pyodide)
- [x] Pyodide 비동기 로드 관리 Hook (`usePyodide`) 개발
- [x] 보안 및 성능을 위한 Web Worker 도입 검토 및 구현 (Main thread implementation chosen for simplicity first)
- [x] `ConsoleOutput` 컴포넌트 개발
    - [x] 표준 출력(`stdout`) 스트림 캡처 및 화면 표시
    - [x] 표준 에러(`stderr`) 캡처 및 스타일링 (Error Red)
- [x] 코드 실행(`Run`) 트리거 및 로딩 상태(Spinner) 처리
- [x] 실행 컨텍스트 초기화/리셋 기능

## Phase 4: 웹사이트 기본 구조 (Basic Website Structure)
- [x] **4.1 공통 레이아웃 (`src/components/layout`)**
    - [x] `Header`, `Footer`, `MainLayout` 구현 완료
- [x] **4.2 랜딩 페이지 (`src/app/page.tsx`)**
    - [x] Hero Section, Features Section 구현 완료
    - [x] 3D Code Window 애니메이션 적용

## Phase 5: 연습 탐색 및 실행 흐름 (Navigation & Execution Flow)
**Goal**: 사용자가 언어와 레벨을 선택하고, 실제 연습 화면까지 매끄럽게 이동하는 흐름 구현.
- [ ] **5.1 언어 선택 화면 (`src/app/practice/page.tsx`)**
    - [ ] 언어 카드 (Python, JS, C++) 그리드 레이아웃
    - [ ] 각 언어별 아이콘 및 설명 추가
- [ ] **5.2 레벨 선택 화면 (`src/app/practice/[language]/page.tsx`)**
    - [ ] 1~100 레벨 그리드 리스트 UI
    - [ ] 잠금(Lock)/해제(Unlock) 시각적 상태 구분
- [ ] **5.3 동적 타이핑 페이지 (`src/app/practice/[language]/[level]/page.tsx`)**
    - [x] 기본 페이지 구조 생성 완료
    - [ ] 실제 레벨 데이터(`params`)를 받아와서 `TypingArea` 초기화하는 로직 연동

## Phase 6: 콘텐츠 데이터 구축 (Content Engineering)
**Goal**: 정적/동적 레벨 데이터를 구조화하고 100개의 실제 연습 콘텐츠 생성.
- [ ] **6.1 레벨 데이터 구조 설계**
    - [ ] `src/lib/levels.ts`: Level 인터페이스 (Type, Difficulty, Description, Code)
- [ ] **6.2 콘텐츠 생성 (Mock & Real)**
    - [ ] Python 레벨 1~100 생성 (기초 문법 ~ 알고리즘)
    - [ ] 10단위 'Challenge' 문제 구성
- [ ] **6.3 챌린지 모드 구현**
    - [ ] 타이핑 완료 후 정답 검증 로직 (Output 비교)

## Phase 7: 사용자 인증 및 저장 (Backend & Supabase)
- [ ] Supabase 프로젝트 설정
- [ ] 로그인/회원가입 UI 및 OAuth 연동
- [ ] `user_progress` 테이블: 레벨 클리어 정보 저장 및 불러오기

## Phase 8: 고도화 및 최적화 (Advanced)
- [ ] **실시간 구문 강조 (Typed Syntax Highlighting)**: 입력된 텍스트에 문법 색상 적용
- [ ] SEO, 효과음(Sound FX), 테마 토글
- [ ] Vercel 배포
