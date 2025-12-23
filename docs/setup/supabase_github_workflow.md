---
description: Supabase Auth와 GitHub 연동 가이드
---

# Supabase & GitHub 연동 워크플로우

이 문서는 사용자 인증(로그인)을 위해 프로젝트에 Supabase와 GitHub를 연결하는 단계를 설명합니다.

## 1. Supabase 프로젝트 생성
1. [Supabase 대시보드](https://supabase.com/dashboard)로 이동합니다.
2. **"New Project"**를 클릭합니다.
3. 조직(Organization)을 선택하고 **Name** (예: `TypingCode`)과 **Database Password**를 입력합니다. (비밀번호는 꼭 기억해두세요!)
4. **Region**은 사용자와 가까운 곳(예: Seoul, Tokyo)을 선택합니다.
5. **"Create new project"**를 클릭하고 설정이 완료될 때까지 기다립니다.

## 2. GitHub OAuth 앱 설정
사용자가 GitHub 아이디로 로그인할 수 있도록 권한을 설정해야 합니다.

1. [GitHub Developer Settings](https://github.com/settings/developers)로 이동합니다.
2. **"New OAuth App"**을 클릭합니다.
3. 다음 내용을 입력합니다:
   - **Application Name**: `TypingCode` (또는 앱 이름).
   - **Homepage URL**: `http://localhost:3000` (개발용).
   - **Authorization callback URL**: 
     - Supabase 대시보드 > **Authentication** > **Configuration** > **Sign In / Providers** 메뉴로 갑니다.
     - **GitHub**를 클릭하여 펼칩니다.
     - **"Callback URL"**을 복사합니다. (형식: `https://<your-project-ref>.supabase.co/auth/v1/callback`)
     - GitHub의 "Authorization callback URL" 입력창에 붙여넣습니다.
4. **"Register application"**을 클릭합니다.
5. 생성된 화면에서 다음을 확인합니다:
   - **Client ID**를 복사해둡니다.
   - **"Generate a new client secret"** 버튼을 눌러 **Client Secret**을 생성하고 복사해둡니다.

## 3. Supabase Auth 설정
1. 다시 Supabase 대시보드 > **Authentication** > **Providers**로 돌아옵니다.
2. 목록에서 **GitHub**를 선택합니다.
3. **"GitHub enabled"** 스위치를 켭니다.
4. 아까 복사한 **Client ID**와 **Client Secret**을 입력합니다.
5. **"Save"**를 클릭하여 저장합니다.

## 4. Next.js 앱 연결
Supabase 인증 정보를 로컬 프로젝트에 환경 변수로 추가해야 합니다.

1. Supabase 대시보드 > **Project Settings** (톱니바퀴 아이콘) > **API** 메뉴로 갑니다.
2. **Project URL**과 **anon public key**를 복사합니다.
3. 프로젝트 루트 폴더에 `.env.local` 파일을 생성하거나 수정하여 다음 내용을 추가합니다:

```bash
NEXT_PUBLIC_SUPABASE_URL=여기에_Project_URL_입력
NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_anon_key_입력
```

## 5. 확인 (Verification)
이 단계가 완료되면, 애플리케이션 코드를 수정하여 실제 로그인을 구현할 수 있습니다.
- 로그인 버튼 클릭 시 Supabase GitHub 로그인 창이 뜨게 됩니다.
- 기존의 로컬 스토리지 대신 Supabase DB에 레벨 진행 상황이 저장됩니다.
