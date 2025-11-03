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
  const telegramUsername = 'himclean_pro';
  window.open(`https://t.me/${telegramUsername}`, '_blank');
}

// Attach to window for inline onclick handlers
window.openTelegram = openTelegram;

// Yandex Metrika goal tracking
function trackTelegramClick() {
  const hasGlobalCounter = typeof YANDEX_COUNTER_ID !== 'undefined';
  const counterId = hasGlobalCounter
    ? YANDEX_COUNTER_ID
    : (typeof window !== 'undefined' && typeof window.YANDEX_COUNTER_ID !== 'undefined'
        ? window.YANDEX_COUNTER_ID
        : null);

  if (typeof ym === 'function' && counterId) {
    ym(counterId, 'reachGoal', 'telegram_click');
  }

  openTelegram();
}

window.trackTelegramClick = trackTelegramClick;
