(function () {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
  }

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  toggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Reset when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
  });
}());

document.addEventListener('contextmenu', function (event) {
  if (event.target.closest('img')) {
    event.preventDefault();
  }
});
