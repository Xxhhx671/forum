// plush.cc — main.js

// Smooth hover on post actions
document.querySelectorAll('.post-action').forEach(el => {
  el.addEventListener('click', function() {
    const count = this.querySelector('span');
    if (count && this.textContent.includes('👍')) {
      count.textContent = parseInt(count.textContent) + 1;
      this.style.color = 'var(--accent2)';
    }
  });
});

// Search input focus effect
const searchInput = document.querySelector('.search-input');
if (searchInput) {
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') this.blur();
  });
}

// Ticker duplicate for seamless loop
const ticker = document.querySelector('.ticker-track span');
if (ticker) {
  ticker.innerHTML = ticker.innerHTML + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + ticker.innerHTML;
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  } else if (currentPage !== 'index.html') {
    link.classList.remove('active');
  }
});

console.log('%c✦ plush.cc', 'color:#7c6ef5;font-size:20px;font-weight:bold');
console.log('%cForum v1.0', 'color:#8a8da0;font-size:12px');
