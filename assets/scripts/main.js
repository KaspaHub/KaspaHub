const checkbox = document.getElementById('toggle-theme-checkbox');

checkbox.addEventListener('change', () => {
  var theme;
  if (checkbox.checked) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  document.cookie = 'theme=' + theme + '; path=/; SameSite=Lax';
  location.reload();
});

checkbox.checked = document.cookie.includes('theme=dark');

(function () {
  var theme;
  if (document.cookie.includes('theme=dark')) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  document.body.classList.add('background-' + theme);
})();
