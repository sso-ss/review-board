// ── Review data array (populated by reviews/_index.js) ──────────────
const REVIEWS = [];

// ── Auto-assign avatar colours by position ───────────────────────────
const GRADIENTS = [
  'linear-gradient(135deg,#f65009 0%,#ffb347 100%)',
  'linear-gradient(135deg,#00bfa5 0%,#69f0ae 100%)',
  'linear-gradient(135deg,#7c4dff 0%,#e040fb 100%)',
  'linear-gradient(135deg,#1565c0 0%,#42a5f5 100%)',
  'linear-gradient(135deg,#f9a825 0%,#ef5350 100%)',
  'linear-gradient(135deg,#2e7d32 0%,#a5d6a7 100%)',
];

// ── Render a single review card ───────────────────────────────────────
function renderCard(review, index) {
  const { name, link, text } = review;
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const initials = name.trim().split(' ')
    .map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';

  const article = document.createElement('article');
  article.className = 'review-card';
  const hasImg = review.img;
  article.innerHTML = `
    <div class="card-img">
      ${hasImg
        ? `<img src="reviews/img/${escHtml(review.img)}" alt="${escHtml(name)}">`
        : `<div class="avatar-placeholder" style="background:${gradient}">${initials}</div>`}
    </div>
    <div class="card-body">
      <div class="name-block">
        <p class="reviewer-name">${escHtml(name)}</p>
        ${link
          ? `<a class="reviewer-link" href="${escAttr(link)}" target="_blank" rel="noopener">${escHtml(link)}</a>`
          : ''}
      </div>
      <div class="quote-mark">❝</div>
      <p class="review-text">${escHtml(text)}</p>
    </div>
  `;

  document.querySelector('.board').appendChild(article);
}

document.addEventListener('DOMContentLoaded', () => {
  REVIEWS.forEach((r, i) => renderCard(r, i));
});

// ── Helpers ───────────────────────────────────────────────────────
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) {
  const url = str.startsWith('http://') || str.startsWith('https://') ? str : 'https://' + str;
  return encodeURI(url).replace(/"/g,'%22');
}
