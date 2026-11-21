document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdownMenu.classList.toggle('dropdown--open');
    dropdownToggle.classList.toggle('header__link--open', isOpen);
    dropdownToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
      dropdownMenu.classList.remove('dropdown--open');
      dropdownToggle.classList.remove('header__link--open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
});