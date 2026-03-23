// ════════════════════════════════════════════════════════════════════
//  리뷰 목록
//  ✏️  소감을 추가하려면:
//     1. 아래 주석 블록(// { … }) 을 복사해서
//     2. ]  바로 위에 붙여넣고 값만 수정하세요.
//  수정할 항목은 딱 3~4가지 → name / link / text / img (선택)
// ════════════════════════════════════════════════════════════════════

[
  {
    name: "So Eun Ahn",
    link: "https://www.linkedin.com/in/soeunahn/",
    text: "부족한 점이 많았던 이벤트였음에도 끝까지 함께해 주셔서 진심으로 감사드립니다. 여러분이 있어 더욱 뜻깊은 시간이었어요! ReadMe 방법대로 마무리 하시면 여러분의 소감도 이 보드에 올라가요 🙌",
    img: "soeun.jpg",  // ← 이미지 파일명 (예: "soeun.jpg") — 비워두면 이니셜 아바타 표시
  },

  {
    name: "Sue Hwang",
    link: "https://www.linkedin.com/in/sue-product-dsgn/",
    text: "오늘 이렇게 디자이너분들이 많이 모이시는 자리에 스피커로 초대해주셔서 감사합니다! 바이브코딩을 시작하시는 분들께 조금이나마 도움이 되었으면 좋겠습니다. 앞으로도 계속 만들고 배우면서, 좋은 인사이트가 생기면 또 나누고 싶습니다. 감사합니다! :)",
    img: "",  // ← 이미지 파일명 (예: "soeun.jpg") — 비워두면 이니셜 아바타 표시
  },

  {
    name: "danjeong",
    link: "https://www.linkedin.com/in/dan-jeong/",
    text: "멋진 후기시스템입니다!",
    img:  "",
  },

  {
    name: "Chuck Shin",
    link: "https://www.linkedin.com/in/graycrisp/",
    text: "모두 만나서 반가웠습니다. 재밌는 시간이었어요! 이렇게 후기 남기는 시스템도 너무 좋네요 :) 💅🏻",
    img:  "chuck_avatar.png",
  }
  // ── 여기에 새 리뷰를 붙여넣으세요 ↓ ──────────────────────────────
  // {
  //   name: "이름  (예: Kim Jisoo)",
  //   link: "https://github.com/yourname",  // GitHub or LinkedIn — 없으면 "" 로 비워두세요
  //   text: "소감을 자유롭게 써주세요!",
  //   img:  "",                              // 프로필 사진 (예: "jisoo.jpg") — reviews/img/ 폴더에 넣으세요. 없으면 비워두세요
  // },

].forEach(r => REVIEWS.push(r));
