import './style.css'

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Telegram link helper
function openTelegram() {
  const telegramUsername = 'clean73ru';
  window.open(`https://t.me/${telegramUsername}`, '_blank');
}

// Attach to window for inline onclick handlers
window.openTelegram = openTelegram;

// Yandex Metrika goal tracking
function trackTelegramClick() {
  if (typeof ym !== 'undefined') {
    ym(YANDEX_COUNTER_ID, 'reachGoal', 'telegram_click');
  }
  openTelegram();
}

window.trackTelegramClick = trackTelegramClick;
