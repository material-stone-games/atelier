# Atelier 게임 연동 가이드

Atelier에 웹빌드를 올리는 게임이 플레이어와 연동하는 방법을 정리한 문서입니다.

**모든 웹빌드는 게임 메뉴에 전체화면 나가기 버튼을 넣어야 합니다.** 전체화면에는 플레이어 헤더도 종료 버튼도 없고, iPhone에서는 이 버튼 말고 전체화면을 나갈 방법이 없습니다.

## 전체화면 나가기 신호

게임 안에서 부모 창으로 다음 메시지를 보내면 전체화면이 풀립니다. 응답을 기다릴 필요는 없고, 전체화면이 아닐 때 보내면 무시됩니다.

```js
window.parent.postMessage({ type: "atelier:exit-fullscreen" }, "*");
```

버튼은 전체화면일 때만 보이게 합니다. 플레이어가 상태를 알려 주므로 이 값을 그대로 쓰면 됩니다. PC와 모바일을 나눠 구현할 필요가 없습니다.

```js
const button = document.querySelector("#exit-fullscreen");
button.hidden = true;
button.textContent = "전체화면 나가기";
button.onclick = () => window.parent.postMessage({ type: "atelier:exit-fullscreen" }, "*");

window.addEventListener("message", (event) => {
  if (event.source !== window.parent || event.data?.type !== "atelier:fullscreen-change") return;
  button.hidden = !event.data.fullscreen;
});

// 리스너를 등록하기 전에 지나간 상태를 받습니다.
window.parent.postMessage({ type: "atelier:get-fullscreen" }, "*");
```

### Unity

`.jslib` 플러그인에 메시지 전송 함수를 만들고 C#에서 호출합니다. 상태 메시지는 같은 플러그인에서 리스너를 등록해 `SendMessage`로 C#에 전달합니다.

```js
mergeInto(LibraryManager.library, {
  AtelierExitFullscreen: function () {
    window.parent.postMessage({ type: "atelier:exit-fullscreen" }, "*");
  },
});
```

```csharp
#if UNITY_WEBGL && !UNITY_EDITOR
[System.Runtime.InteropServices.DllImport("__Internal")]
private static extern void AtelierExitFullscreen();
#endif
```

### Godot

`OS.has_feature("web")`으로 웹빌드를 구분합니다. 상태 메시지는 `JavaScriptBridge.create_callback()`으로 `message` 리스너를 등록해 받습니다.

```gdscript
JavaScriptBridge.eval('window.parent.postMessage({ type: "atelier:exit-fullscreen" }, "*")')
```

## 메시지 목록

| 방향 | 메시지 | 의미 |
|---|---|---|
| 게임 → 플레이어 | `{ type: "atelier:exit-fullscreen" }` | 전체화면을 나갑니다. |
| 게임 → 플레이어 | `{ type: "atelier:get-fullscreen" }` | 현재 상태를 알려 달라고 요청합니다. |
| 게임 → 플레이어 | `{ type: "atelier:capture-esc" }` | 전체화면에서 Esc를 게임이 받겠다고 요청합니다. |
| 플레이어 → 게임 | `{ type: "atelier:fullscreen-change", fullscreen: boolean }` | iframe 로드가 끝날 때, 전체화면 상태가 바뀔 때, 상태를 요청받았을 때 전달됩니다. |

게임이 메시지로 전체화면에 들어갈 수는 없습니다. 진입은 플레이어 헤더의 전체화면 버튼이 맡습니다.

## 기기별 전체화면 동작

어느 기기든 전체화면에서는 `ATELIER PLAYER / LIVE BUILD` 헤더가 사라지고 게임이 화면 전체를 씁니다.

| 기기 | 전체화면 방식 | 게임 버튼 외의 나가는 방법 |
|---|---|---|
| PC 브라우저 | 브라우저 전체화면 | Esc (`capture-esc`를 요청하면 Esc 길게 누르기) |
| Android | 브라우저 전체화면 | 시스템 뒤로 가기(기기와 브라우저마다 다를 수 있음) |
| iPhone, iPhone 홈 화면 웹앱 | 플레이어가 화면을 덮는 대체 방식 | 없음 |

대체 방식에서도 메시지는 똑같이 동작하므로 게임 코드를 따로 나눌 필요가 없습니다. 플레이어가 게임 화면을 덮으므로 노치와 홈 인디케이터 영역은 플레이어가 비워 둡니다.

## 스토어 빌드와 구분하기

같은 게임을 Steam이나 모바일 앱으로도 출시한다면 빌드 타깃 상수로 버튼의 역할을 나눕니다.

```js
const BUILD_TARGET = "atelier"; // "atelier" | "steam" | "android" | "ios"
```

| 환경 | 버튼 | 동작 |
|---|---|---|
| Atelier, 전체화면 | 전체화면 나가기 | `atelier:exit-fullscreen` 전송 |
| Atelier, 일반 화면 | 숨김 | 나갈 전체화면이 없습니다. |
| Steam, PC 앱 | 게임 종료 | 앱 프레임워크의 종료 API 호출 |
| Android 앱 | 게임 종료 | 앱 프레임워크의 종료 API 호출 |
| iOS 앱 | 숨김 | Apple은 앱이 스스로 종료하는 동작을 권장하지 않습니다. |

같은 빌드를 여러 환경에 쓴다면 `window.parent !== window`로 iframe 안인지 확인할 수 있습니다.

## Esc 키

PC 전체화면에서 Esc는 기본적으로 브라우저가 먼저 처리해 전체화면을 나갑니다. 게임 안에서는 이 동작을 막을 수 없습니다.

Esc를 게임 메뉴 키로 쓰려면 게임 시작 코드에서 플레이어에 요청합니다. 요청하지 않은 게임의 Esc 동작은 바뀌지 않습니다. 요청은 전체화면에 들어가기 전에 보내는 것이 가장 안전합니다.

```js
window.parent.postMessage({ type: "atelier:capture-esc" }, "*");
```

플레이어는 Keyboard Lock API로 Esc를 잠급니다. 이 API를 지원하는 브라우저(Chrome에서 확인)에서는 Esc 입력이 게임으로 전달되고, Esc를 약 2초 길게 누르면 전체화면을 나갑니다. 지원하지 않는 브라우저에서는 Esc가 계속 전체화면을 나가므로 두 경우를 모두 처리합니다.

```js
let wasFullscreen = false;

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") toggleMenu();
});

window.addEventListener("message", (event) => {
  if (event.source !== window.parent || event.data?.type !== "atelier:fullscreen-change") return;
  if (wasFullscreen && !event.data.fullscreen) openMenu(); // Esc로 전체화면을 나간 경우에도 메뉴를 엽니다.
  wasFullscreen = event.data.fullscreen;
});
```

- `capture-esc`를 요청한 게임은 Esc를 반드시 처리해야 합니다. 처리하지 않으면 플레이어에게 Esc가 고장 난 것처럼 보입니다.
- 일반 화면에서는 요청과 상관없이 Esc가 게임에 전달됩니다.
- Steam과 모바일 앱 빌드에서는 이 메시지가 필요 없습니다.

## 빌드 제약

ZIP 형식과 asset 경로 규칙은 [README](../README.md)의 업로드 안내를 따릅니다. 게임은 샌드박스 iframe에서 실행되므로 최상위 페이지를 이동시키거나 팝업을 열 수 없습니다. 업로드된 빌드는 Atelier와 다른 origin에서 서비스되므로 `window.parent`의 DOM에도 접근할 수 없습니다.
