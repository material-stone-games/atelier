# Atelier

Material Stone Games의 게임·데모·프로토타입 허브입니다.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Firebase 환경변수가 비어 있으면 화면은 샘플 게임과 게시글로 렌더링됩니다. 실제 로그인, 게시판, 게임 업로드를 사용하려면 `.env`에 Firebase Web 설정과 Functions URL을 입력해야 합니다.

## Build and test

```bash
npm run lint
npm test
npm run build
```

`npm run build`는 GitHub Pages 프로젝트 경로(`/atelier/`)를 포함한 `dist/`와 SPA 새로고침용 `dist/404.html`을 생성합니다.

## Firebase setup

1. Firebase 프로젝트를 Blaze 요금제로 전환합니다. Cloud Storage와 Cloud Functions가 필요합니다.
2. Google Authentication을 켜고 `material-stone-games.github.io`를 authorized domain에 추가합니다.
3. Firestore, Storage, Cloud Functions를 초기화한 뒤 Rules와 indexes를 배포합니다.
4. YouTube Data API를 활성화하고 Functions 환경값을 설정합니다.

```bash
firebase use YOUR_PROJECT_ID
firebase deploy --only firestore:rules,firestore:indexes,storage,functions
```

Functions 환경값은 Firebase Secret Manager/Functions params로 관리합니다.

```bash
firebase functions:secrets:set PLAY_SESSION_SECRET
```

필수 값은 `YOUTUBE_CHANNEL_ID`, `PAGES_ORIGIN`, `FUNCTIONS_BASE_URL`입니다. 관리자 Google 계정이 한 번 로그인한 뒤 Application Default Credentials가 준비된 환경에서 다음 명령으로 custom claim을 부여합니다.

```bash
npm --prefix functions run set-admin -- admin@example.com
```

관리자 계정은 로그아웃 후 다시 로그인해야 새 claim이 반영됩니다.

## GitHub Pages

Repository Settings → Pages에서 Source를 **GitHub Actions**로 선택합니다. 다음 Repository Variables를 등록하면 `main` push마다 Pages가 배포됩니다.

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_FUNCTIONS_REGION`
- `VITE_FUNCTIONS_BASE_URL`
- `VITE_YOUTUBE_CHANNEL_ID`
- `VITE_YOUTUBE_URL`
- `VITE_DISCORD_URL`

Firebase Web config는 브라우저에 노출되는 값이므로 비밀값으로 취급하지 않습니다. 게임 세션 서명 키와 서버 자격증명은 저장소에 넣지 않습니다.

## Access levels

| 등급 | 플레이 가능 |
| --- | --- |
| `public` | 누구나 |
| `login` | Google 로그인 사용자 |
| `subscriber` | YouTube 구독 확인 사용자·멤버. 매주(KST 월요일 기준) 3~5개는 누구에게나 무료 |
| `member` | 채널 멤버십 회원(`npm --prefix functions run set-member -- <email> [days\|off]`로 부여) |

관리자(`admin: true`)는 모든 등급을 플레이할 수 있습니다.

## Migrating from shit-game-gallery

원조 프로젝트의 데이터·환경값 이전과 제거 순서는 [docs/migration-from-gallery.md](docs/migration-from-gallery.md)를 따릅니다.

## Web build contract

관리자가 업로드하는 ZIP은 루트(또는 하나의 최상위 폴더)에 `index.html`이 있어야 하며 웹빌드의 asset 경로는 상대 경로여야 합니다. Unity WebGL의 `.gz`/`.br` asset은 gateway가 `Content-Encoding`을 붙여 전달합니다. 기존 게임에 새 빌드를 올리면 처리 완료까지 이전 빌드가 계속 공개되고, 성공 시 이전 빌드 파일은 삭제됩니다. 경로 순회, 절대 경로, 심볼릭 링크, 250MiB 초과 ZIP, 압축 해제 후 1GiB 초과 빌드는 거부됩니다.

## Cost guardrails

Blaze는 종량제이므로 Google Cloud Billing 예산 알림, Functions `maxInstances`, App Check, 파일 크기 제한을 함께 설정합니다. 예산 알림은 자동 지출 차단이 아니므로 초기에는 낮은 max instance와 보수적인 업로드 제한으로 운영합니다.
