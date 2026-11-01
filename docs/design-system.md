# Atelier 디자인 시스템

Atelier의 색과 글자 규칙입니다. 값은 모두 [`src/tokens.css`](../src/tokens.css)에 있고, 컴포넌트 스타일([`src/styles.css`](../src/styles.css))은 그 토큰만 씁니다.

## 토큰 구조

토큰은 두 층입니다.

1. **기본 토큰(primitive)**: 팔레트와 크기 단계 그 자체입니다. 예: `--gem-500`, `--stone-850`, `--fs-caption`.
2. **용도 토큰(semantic)**: 값을 어디에 쓰는지를 이름으로 나타냅니다. 예: `--accent`, `--color-surface`, `--tier-public`.

컴포넌트는 **용도 토큰만** 씁니다. 색을 바꿀 때는 `tokens.css`에서 용도 토큰이 가리키는 기본 토큰만 바꾸면 사이트 전체에 반영됩니다. 새 컴포넌트에 `#hex`나 `rgba()`를 직접 쓰지 않습니다. 예외는 게임 카드·상세 화면의 장식용 배경 그라디언트뿐입니다.

## 색

### 팔레트(기본 토큰)

| 계열 | 토큰 | 값 | 역할 |
|---|---|---|---|
| Stone | `--stone-950` ~ `--stone-300`, `--cream-100` | `#080a0c` ~ `#e8e7df` | 작업실의 어두운 무채색: 배경, 패널, 선, 글자 |
| Gem | `--gem-200` ~ `--gem-700` | `#a9c0ff` ~ `#1a3db0` | 로고 보석의 파랑. **브랜드 색** |
| Ember | `--ember-400` | `#ff7144` | 레이저의 열기. 보조 강조 |
| Moss | `--moss-400` | `#a6cd7c` | 성공, 공개 등급 |
| Violet | `--violet-300` | `#b79bff` | 멤버 등급 |
| Red | `--red-400` | `#ff5a5a` | 삭제 같은 위험 동작 |

`--gem-500`은 아이콘의 보석 본체 색, `--gem-400`은 빛을 받은 윗면 색입니다.

### 용도 토큰

| 토큰 | 가리키는 값 | 쓰는 곳 |
|---|---|---|
| `--color-bg` | stone-900 | 페이지 배경 |
| `--color-surface` | stone-850 | 카드, 입력창, 패널 |
| `--color-surface-raised` | stone-750 | 패널 위 요소(아바타 배경 등) |
| `--color-line` / `--color-line-strong` | cream 13% / 40% | 구분선, 테두리 / hover 테두리 |
| `--color-text` | cream-100 | 본문, 제목 |
| `--color-text-soft` | stone-300 | 긴 설명 문단 |
| `--color-text-muted` | stone-400 | 보조 정보, 날짜, 캡션 |
| `--color-text-placeholder` | stone-500 | 입력창 placeholder |
| `--accent` | gem-400 | 강조 글자, 아이콘, 밑줄, 활성 상태 |
| `--accent-strong` | gem-300 | 강조 링크의 hover |
| `--accent-fill` | gem-500 | 강조 색으로 칠한 면(주요 버튼 hover, 아바타 점) |
| `--on-accent` | 흰색 | `--accent-fill` 위의 글자 |
| `--accent-line` / `--accent-soft` | gem-400 50% / 13% | 포커스 테두리 / 강조 틴트 배경 |
| `--heat` / `--heat-soft` | ember-400 / 10% | 좋아요, 경고, 레이저 |
| `--success` / `--danger` | moss-400 / red-400 | 상태 표시 |

### 대비 기준

작은 글자는 배경 대비 4.5:1 이상이어야 합니다. 어두운 배경(`#101418`)에서 잰 값입니다.

| 조합 | 대비 |
|---|---|
| `--accent`(gem-400) 글자 | 5.8:1 |
| `--color-text-muted`(stone-400) 글자 | 6.6:1 (패널 위) |
| `--color-text-placeholder`(stone-500) 글자 | 4.5:1 (패널 위) |
| `--on-accent` 글자 on `--accent-fill` | 6.4:1 |
| gem-500 글자 | **2.9:1, 글자색으로 쓰지 않음** |

그래서 보석 파랑은 용도를 나눠 씁니다. **글자에는 `--accent`(밝은 면), 넓은 면에는 `--accent-fill`(본체)** 을 쓰고, `--accent-fill` 위의 글자는 항상 `--on-accent`입니다.

### 브랜드 파랑과 보조 주황

- 브랜드 강조는 보석 파랑(`--accent`) 하나입니다. 헤드라인 강조, 메뉴 밑줄, eyebrow, 화살표, 포커스가 모두 이 색입니다.
- 주황(`--heat`)은 "열기"를 뜻하는 곳에만 씁니다: 좋아요, 경고 알림, hero 모션의 레이저와 불꽃. 한 화면에 넓게 쓰지 않습니다.

### 접근 등급 색

게임 태그와 홈 카드는 등급마다 같은 색을 씁니다. 등급 색은 `--tier`라는 지역 변수로 넘겨 테두리·글자·틴트에 함께 적용합니다.

| 등급 | 토큰 | 색 |
|---|---|---|
| 공개(public) | `--tier-public` | moss 초록 |
| 로그인 데모(login) | `--tier-login` | cream |
| 구독자 프로토타입(subscriber) | `--tier-subscriber` | gem 파랑 |
| 채널 멤버(member) | `--tier-member` | violet |

```css
.access-tag.public { --tier: var(--tier-public); }
.info-card.public { --tier: var(--tier-public); }
```

## 글자

### 글꼴

| 토큰 | 글꼴 | 쓰는 곳 |
|---|---|---|
| `--font-sans` | DM Sans, Noto Sans KR | 본문 |
| `--font-display` | Space Grotesk, Noto Sans KR | 제목, 카드 이름 |
| `--font-mono` | DM Mono, Noto Sans KR | 라벨, 메뉴, 버튼, 메타 정보 |

### 크기 단계

**사이트의 최소 글자 크기는 12px입니다.** 12px보다 작은 값은 쓰지 않습니다.

| 토큰 | 크기 | 쓰는 곳 |
|---|---|---|
| `--fs-caption` | 12px | eyebrow, 태그, 날짜, 캡션, 보조 버튼 |
| `--fs-small` | 13px | 메뉴, 버튼, 작은 설명 |
| `--fs-body-sm` | 14px | 입력창, 좁은 본문 |
| `--fs-body` | 15px | 기본 본문, hero 소개문 |
| `--fs-lead` | 16px | 강조 문단 |

제목처럼 큰 글자는 화면 크기에 맞춰 `clamp()`로 정하고, 위 단계에 묶지 않습니다.

## 새 스타일을 쓸 때

1. 색은 용도 토큰에서 고릅니다. 맞는 토큰이 없으면 `tokens.css`에 용도 토큰을 먼저 추가합니다.
2. 반투명 색은 `color-mix(in srgb, var(--토큰) N%, transparent)`로 만듭니다.
3. 글자 크기는 `--fs-*` 단계를 씁니다. 12px 아래로 내리지 않습니다.
4. 보석 파랑을 글자에 쓸 때는 `--accent`만 씁니다. `--accent-fill`은 면 전용입니다.
