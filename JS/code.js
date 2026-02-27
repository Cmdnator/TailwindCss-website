const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.remove('hidden');
  } else {
    scrollBtn.classList.add('hidden');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
function initDarkMode() {
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(mode) {
    if (mode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
    updateIcon();
  }

  function updateIcon() {
    if (html.classList.contains('dark')) {
      toggle.textContent = '☀️';
    } else {
      toggle.textContent = '🌙';
    }
  }

  // initialize
  if (saved === 'dark' || (!saved && prefersDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  toggle.addEventListener('click', () => {
    setTheme(html.classList.contains('dark') ? 'light' : 'dark');
  });
}

// run on load
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
});

