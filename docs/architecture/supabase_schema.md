# Supabase 아키텍처 및 스키마 설계

이 문서는 TypingCode 애플리케이션을 위한 데이터베이스 테이블과 스토리지 구조를 정의합니다.

## 1. 데이터베이스 스키마 (Database Schema)

Supabase의 PostgreSQL을 사용하며 핵심 테이블은 다음과 같습니다.

### 테이블: `public.profiles`
`auth.users` 테이블과 연동되어 사용자의 프로필 정보를 저장합니다.

| 컬럼명 | 타입 | 제약조건 | 설명 |
| :--- | :--- | :--- | :--- |
| `id` | `uuid` | PK, FK (`auth.users.id`) | Supabase 인증 유저 ID와 연결됨 |
| `username` | `text` | Unique, Nullable | 사용자 닉네임 (화면에 표시) |
| `avatar_url` | `text` | Nullable | 프로필 이미지 스토리지 URL |
| `updated_at` | `timestamptz` | Default `now()` | 마지막 수정 시간 |

**보안 정책 (RLS Policies):**
- **조회 (Select)**: 누구나 볼 수 있음 (공개).
- **수정 (Insert/Update)**: 로그인한 본인만 자신의 행을 수정 가능 (`auth.uid() == id`).

### 테이블: `public.levels`
타이핑 연습 문제(소스코드 및 설명) 데이터를 저장합니다. 이 데이터를 DB화하면 앱 배포 없이 문제를 추가/수정할 수 있습니다.

| 컬럼명 | 타입 | 제약조건 | 설명 |
| :--- | :--- | :--- | :--- |
| `id` | `bigint` | PK, Identity | 고유 ID |
| `language` | `text` | Not Null, Index | 언어 카테고리 (예: 'python') |
| `list_order` | `integer` | Not Null | 레벨 순서 (1, 2, 3...) |
| `title` | `text` | Not Null | 기본 제목 (영어) |
| `description` | `text` | Not Null | 기본 설명 (영어) |
| `target_code` | `text` | Not Null | 연습할 소스코드 본문 |
| `translations` | `jsonb` | Nullable | 다국어 데이터 (예: `{"ko": {"title": "...", "desc": "..."}}`) |
| `created_at` | `timestamptz` | Default `now()` | 생성일 |

**보안 정책 (RLS Policies):**
- **조회 (Select)**: 누구나 볼 수 있음 (공개).
- **수정 (Insert/Update)**: **관리자(Service Role)** 만 가능. 일반 유저는 수정 불가.

### 테이블: `public.completed_levels`
사용자의 레벨 클리어 기록을 저장합니다.

| 컬럼명 | 타입 | 제약조건 | 설명 |
| :--- | :--- | :--- | :--- |
| `id` | `bigint` | PK, Identity | 고유 ID (자동 증가) |
| `user_id` | `uuid` | FK (`public.profiles.id`) | 레벨을 깬 사용자 |
| `level_id` | `integer` | Not Null | 레벨 번호 (예: 1, 2) |
| `language` | `text` | Not Null | 언어 코드 (예: 'python') |
| `completed_at`| `timestamptz` | Default `now()` | 클리어한 시간 |

**인덱스 (Index):**
- 중복 클리어 방지를 위해 `(user_id, language, level_id)` 조합으로 유니크 인덱스 생성.

**보안 정책 (RLS Policies):**
- **조회 (Select)**: 누구나 볼 수 있음 (리더보드용).
- **입력 (Insert)**: 로그인한 본인만 자신의 기록 추가 가능 (`auth.uid() == user_id`).

---

## 2. 스토리지 (Storage)

### 버킷: `avatars`
사용자의 프로필 사진을 저장하는 공간입니다.

- **공개 접근 (Public Access)**: 켜짐 (이미지는 누구나 볼 수 있어야 함).
- **정책 (Policies)**:
  - **조회**: 누구나 가능.
  - **업로드/수정**: 로그인한 사용자가 자신의 폴더(`folder/{user_id}/*`)에만 업로드 가능하도록 제한.

---

## 3. 데이터베이스 함수 & 트리거 (Automation)

### 프로필 자동 생성 (Auto-create Profile)
사용자가 GitHub로 회원가입/로그인하면 `public.profiles`에도 자동으로 정보가 생겨야 합니다. 이를 위한 SQL 트리거입니다.

Supabase 대시보드의 **SQL Editor**에 아래 코드를 복사해서 실행하세요.

```sql
-- 1. 프로필 생성 함수 정의
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'user_name', -- GitHub 닉네임 가져오기
    new.raw_user_meta_data ->> 'avatar_url'  -- GitHub 프로필 사진 가져오기
  );
  return new;
end;
$$;

-- 2. 새 유저 가입 시 트리거 작동 설정
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```
