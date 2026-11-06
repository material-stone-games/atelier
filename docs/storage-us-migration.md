# 게임 저장소 미국 버킷 이관

게임 파일을 `us-central1` 버킷으로 옮기고, 큰 바이너리는 Functions를 거치지 않고 버킷에서 바로 내려보내는 절차입니다.

## 왜 옮기나요

- Cloud Storage 무료 할당량은 `us-central1`, `us-east1`, `us-west1` 버킷에만 적용됩니다.
- `playGateway`가 파일을 직접 전달하면 그 용량이 Cloud Run Functions 인터넷 전송 요금으로 청구됩니다.
- 이제 `.glb`, 이미지, 오디오, 폰트, `.wasm` 같은 바이너리는 서명 URL로 리디렉션합니다. HTML, CSS, JS는 상대 경로가 깨지지 않도록 계속 `playGateway`가 전달합니다. 기준은 `functions/src/delivery.ts`에 있습니다.

## 절차

아래 값을 기준으로 합니다.

```bash
P=material-stone-atelier
OLD=gs://material-stone-atelier.firebasestorage.app
NEW=gs://material-stone-atelier-us
```

1. 버킷을 만들고 Firebase에 연결합니다. 삭제 후 보관 용량도 무료 한도에 포함되므로 끕니다.

   ```bash
   gcloud storage buckets create $NEW --project $P --location us-central1 --uniform-bucket-level-access --soft-delete-duration 0
   curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "x-goog-user-project: $P" "https://firebasestorage.googleapis.com/v1beta/projects/$P/buckets/material-stone-atelier-us:addFirebase"
   ```

2. CORS를 설정합니다. 게임이 `fetch`로 받는 파일이 리디렉션을 따라갈 수 있어야 합니다.

   ```json
   [{ "origin": ["https://asia-northeast3-material-stone-atelier.cloudfunctions.net"], "method": ["GET", "HEAD"], "responseHeader": ["Content-Type", "Content-Length", "Content-Encoding", "Accept-Ranges", "Content-Range"], "maxAgeSeconds": 3600 }]
   ```

   ```bash
   gcloud storage buckets update $NEW --cors-file=cors.json
   ```

3. Functions 서비스 계정이 URL에 서명할 수 있게 권한을 줍니다.

   ```bash
   SA=19488072410-compute@developer.gserviceaccount.com
   gcloud iam service-accounts add-iam-policy-binding $SA --project $P --member "serviceAccount:$SA" --role roles/iam.serviceAccountTokenCreator
   ```

4. 파일을 복사하고 게임 파일에 캐시 헤더를 붙입니다. `.br`, `.gz` 파일이 있다면 `Content-Encoding`도 함께 지정합니다.

   ```bash
   gcloud storage rsync -r $OLD $NEW
   gcloud storage objects update "$NEW/game-builds/**" --cache-control="private, max-age=21600"
   ```

5. Storage 규칙과 Functions를 배포합니다. `functions/.env`에 `GAME_STORAGE_BUCKET=material-stone-atelier-us`를 먼저 추가합니다. `processBuildZip`은 리전이 바뀌므로 서울의 기존 함수가 삭제됩니다.

   ```bash
   firebase deploy --only storage,functions
   ```

6. GitHub 저장소 변수 `VITE_FIREBASE_STORAGE_BUCKET`을 `material-stone-atelier-us`로 바꾸고 사이트를 다시 배포합니다.

7. 그사이 기존 버킷에 올라온 파일을 한 번 더 복사합니다.

   ```bash
   gcloud storage rsync -r $OLD $NEW
   ```

8. 게임 실행, 표지, 게시글 이미지, 게임 업로드를 확인합니다. 브라우저 Network 탭에서 `.glb` 요청이 `302`로 `storage.googleapis.com`에 연결되는지 봅니다.

9. 며칠 뒤 청구 내역에서 `Cloud Run Functions Network Internet Data Transfer Out`이 줄었는지 확인하고, 문제가 없으면 기존 버킷의 파일을 지웁니다.

## 되돌리기

기존 버킷의 파일을 지우기 전까지만 되돌릴 수 있습니다. `git revert`로 코드를 되돌려 Functions를 배포하고, GitHub 변수를 기존 값으로 돌린 뒤, 이관 후 새 버킷에 올라온 파일을 기존 버킷으로 복사합니다.

## 알아둘 점

- 서명 URL은 최대 12시간 유효합니다. 2시간 플레이 세션이 끝나도 이미 받은 URL로는 그 시간 동안 해당 파일을 받을 수 있습니다. 비공개 게임은 이 점을 감안합니다.
- 서명 URL을 쓰는 파일에는 `playGateway`의 `Content-Security-Policy`가 붙지 않습니다. 그래서 스크립트가 실행될 수 있는 형식은 직접 제공 대상에서 뺐습니다.
- 무료 한도는 저장 5GB, 다운로드 월 100GB, 업로드 작업 월 5천 회, 다운로드 작업 월 5만 회입니다. 넘으면 요금이 청구됩니다.
