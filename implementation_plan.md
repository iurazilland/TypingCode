# Implementation Plan - Typing Code

This plan outlines the steps to build the Typing Code application, expanded to include a full landing page, level selection system, and structured level data.

## Phase 0: 사전 준비 및 설계 (Pre-setup) - **Done**
- [x] 기술 스택 확정.
- [x] 디자인 시스템 기초 설계.

## Phase 1: 프로젝트 환경 구성 (Environment) - **Done**
- [x] Next.js 프로젝트 생성.
- [x] 기본 디렉토리 구조 및 스타일 설정.

## Phase 2: 타이핑 엔진 코어 (Typing Engine Core) - **Done**
- [x] Zustand 스토어 구현.
- [x] `TypingArea` (Typing Club Style) 구현.
- [x] `CodeDisplay` 및 `VirtualKeyboard` 구현.

## Phase 3: 파이썬 실행 엔진 (Python Execution) - **Done**
- [x] Pyodide 연동 및 `ConsoleOutput` 구현.

## Phase 4: 웹 애플리케이션 구조 확장 (Web App Expansion)
**Goal**: 랜딩 페이지, 공통 레이아웃(헤더/푸터), 레벨 선택 화면 등 웹사이트로서의 구색 갖추기.

### 4.1 공통 레이아웃 컴포넌트 (`src/components/layout`)
- [ ] **Header**: 로고, 내비게이션(연습하기, 랭킹 등), 인증 버튼(로그인/회원가입 - UI만).
- [ ] **Footer**: 저작권 정보, 링크(Github 등), 간단한 소개.
- [ ] **Layout Wrapper**: 모든 페이지에 헤더/푸터 적용.

### 4.2 랜딩 페이지 (Main Page, `src/app/page.tsx`)
- [ ] 기존 타이핑 화면을 `src/app/practice/[language]/[level]/page.tsx`로 이동.
- [ ] **Hero Section**: "당신의 코딩 속도를 극한으로", "파이썬 마스터하기" 같은 문구와 Start 버튼.
- [ ] **Feature Section**: 기능 소개 (타이핑 연습, 코드 실행, 다양한 언어).

### 4.3 언어 및 레벨 선택 화면 (`src/app/practice`)
- [ ] **Language Selection**: Python, Java(임시), C++(임시) 선택 카드 그리드.
- [ ] **Level Selection**: 선택된 언어의 레벨 리스트 (1~100).
    - 잠금/해제 상태 표시 (추후 연동).
    - 레벨 클릭 시 해당 타이핑 페이지로 이동.

## Phase 5: 레벨 데이터 및 콘텐츠 구축 (Contect & Integrity)
**Goal**: 100개의 파이썬 레벨 데이터와 다국어 지원 구조 마련.

### 5.1 레벨 데이터 구조 설계 (`src/lib/levels.ts`)
- [ ] `Level` 인터페이스 정의:
    - ID, Title, Description, Difficulty.
    - `Language` type.
    - `PreCode` (reference code).
    - `Type`: "Practice" (따라치기) vs "Challenge" (문제풀이).
- [ ] **Mock Data Generator**: 루프를 돌아 100개의 파이썬 레벨 생성.
    - 1~10: 변수와 출력 (Print).
    - 11~30: 조건문 (If).
    - 31~50: 반복문 (Loop).
    - "Challenge" 레벨은 10단위마다 배치 (예시).

### 5.2 라우팅 및 데이터 연동
- [ ] `practice/[language]/[level]` 페이지에서 URL 파라미터를 읽어 해당 레벨 데이터 로드.
- [ ] `useTypingStore`를 초기화할 때 해당 레벨의 코드를 설정.

## Phase 6: 인증 및 사용자 연동 (Supabase Auth & DB)
**Goal**: 사용자 로그인/회원가입 및 진행 상황 저장.

- [ ] Supabase Auth 설정 (Google/Github 로그인).
- [ ] DB Schema 설계: `users`, `progress` (user_id, level_id, best_wpm, is_cleared).
- [ ] 헤더 로그인 버튼 연동.
- [ ] 레벨 선택 화면에서 클리어한 레벨 표시.

## Phase 7: 고도화 및 최적화
- [ ] SEO 태그 적용.
- [ ] 성능 최적화 (Lighthouse).
- [ ] 배포 (Vercel).
