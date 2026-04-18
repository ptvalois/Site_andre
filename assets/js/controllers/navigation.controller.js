
export function initNavigation() {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.querySelector('[data-mobile-toggle]');
  const closers = document.querySelectorAll('[data-mobile-close]');

  if (!menu || !toggle) return;

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  closers.forEach((item) => {
    item.addEventListener('click', () => setOpen(false));
  });
}
