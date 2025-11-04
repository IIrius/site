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

// Mobile menu toggle with smooth animation
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  const toggleMobileMenu = (forceOpen) => {
    const isOpen = mobileMenu.classList.contains('is-open');
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isOpen;

    mobileMenu.classList.toggle('is-open', shouldOpen);
    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen.toString());
    mobileMenuBtn.setAttribute('aria-label', shouldOpen ? 'Закрыть меню' : 'Открыть меню');
    mobileMenu.setAttribute('aria-hidden', (!shouldOpen).toString());
  };

  const closeMenu = () => {
    if (mobileMenu.classList.contains('is-open')) {
      toggleMobileMenu(false);
    }
  };

  mobileMenuBtn.addEventListener('click', () => {
    toggleMobileMenu();
  });

  mobileMenu.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('click', () => {
      if (element !== mobileMenuBtn) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
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
