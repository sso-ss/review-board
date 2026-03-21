# AI & Design 리뷰 보드

세션에 참여하셨다면 한 줄 소감을 남겨주세요! 🧡

🔗 **라이브 보드**: [https://sso-ss.github.io/review-board/](https://sso-ss.github.io/review-board/)

---

## 🛠️ 사전 준비 (Mac 기준)

**코드 에디터** 하나만 설치하면 됩니다 (둘 중 하나만!):
- [VS Code](https://code.visualstudio.com/) (무료)
- [Cursor](https://www.cursor.com/) (무료)

**Git 확인:**  
에디터에서 터미널을 열고 아래를 입력해보세요:
- **VS Code**: 상단 메뉴 → `Terminal` → `New Terminal`
- **Cursor**: 상단 메뉴 → `Terminal` → `New Terminal`  (또는 ⌃` )

```
git --version
```
- 버전 번호가 나오면 → 이미 설치되어 있어요 ✅  
- `xcode-select` 설치 팝업이 뜨면 → **"설치"** 버튼 누르면 끝!

---

## ✏️ 리뷰 남기는 방법

### 1단계 — 저장소 Clone (복사)

에디터 터미널에서 아래 명령어를 그대로 붙여넣으세요:

```bash
git clone https://github.com/sso-ss/review-board.git
```

Clone이 끝나면 폴더가 생깁니다. 에디터에서 해당 폴더를 열어주세요:
- **VS Code**: `File` → `Open Folder` → 방금 clone한 폴더 선택
- **Cursor**: `File` → `Open Folder` → 방금 clone한 폴더 선택

---

### 2단계 — 내 브랜치 만들기

에디터 터미널에서 아래를 입력하세요:

```bash
git switch -c review/내이름
```
> 예: `git switch -c review/soeun`  (영문 이름, 띄어쓰기 X)

💡 **이게 바로 Branch!** main을 건드리지 않고 내 작업 공간을 따로 만드는 거예요.

---

### 3단계 — 내 리뷰 작성

`reviews/_index.js` 파일을 열어주세요.  
파일 안에 아래와 같은 주석 블록이 있습니다:

```js
  // ── 여기에 새 리뷰를 붙여넣으세요 ↓ ──────────────────────────────
  // {
  //   name: "이름  (예: Kim Jisoo)",
  //   link: "https://github.com/yourname",
  //   text: "소감을 자유롭게 써주세요!",
  //   img:  "",
  // },
```

**이렇게 하세요:**
1. 위 블록을 복사
2. `]` 바로 **위**에 붙여넣기
3. 앞의 `//` 를 지우기
4. 값만 수정!

완성 예시:
```js
  {
    name: "So Eun Ahn",
    link: "https://www.linkedin.com/in/soeunahn/",
    text: "Git이 타임머신이라는 비유가 정말 와닿았어요!",
    img:  "soeun.jpg",
  },
```

### 📷 프로필 사진 넣기 (선택)

1. 사진 파일을 `reviews/img/` 폴더에 넣으세요
2. `img:` 에 파일 이름만 적으세요 (예: `"soeun.jpg"`)
3. 사진이 없으면 `img: ""` → 이니셜 아바타가 자동 표시됩니다

---

### 4단계 — Push (내 브랜치 올리기)

에디터 터미널에서 아래 명령어를 **한 줄씩** 입력하세요:

```bash
git add .
git commit -m "Add review: 내이름"
git push origin review/내이름
```

> 🙋 **여기까지가 여러분이 할 일입니다!**  
> Push가 완료되면 오너(관리자)가 확인 후 main에 합쳐줍니다.

🎉 이게 바로 **Branch → Push → Merge** 워크플로우입니다.

끝! 🙌

---

## 파일 구조

```
review-board/
  reviews/
    _index.js     ← 리뷰 데이터 (여기만 수정)
    img/          ← 프로필 사진 넣는 곳 (선택)
  index.html      ← 페이지 (수정 불필요)
  style.css       ← 스타일 (수정 불필요)
  app.js          ← 동작 코드 (수정 불필요)
  README.md       ← 지금 읽고 계신 파일
```
