const checkbox = document.getElementById('toggle-theme-checkbox');

checkbox.addEventListener('change', () => {
  document.cookie = `theme=${checkbox.checked ? 'dark' : 'light'}; path=/; SameSite=Lax`;
  location.reload();
});

checkbox.checked = document.cookie.includes('theme=dark');

(function () {
  const theme = document.cookie.includes('theme=dark') ? 'dark' : 'light';

  document.body.classList.forEach(cls => {
    if (cls.startsWith('background-')) {
      document.body.classList.remove(cls);
    }
  });
  document.body.classList.add(`background-${theme}`);

  document.querySelectorAll('[class*="theme-"]').forEach(el => {
    const original = Array.from(el.classList).find(c => c.startsWith('theme-'));
    if (original) el.classList.replace(original, `theme-${theme}`);
  });
})();

function injectContent() {
	document.getElementById('page-footer').innerHTML = '2025 Kaspa Community Hub';
}
injectContent();
