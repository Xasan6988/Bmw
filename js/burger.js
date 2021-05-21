document.addEventListener('DOMContentLoaded', () => {
  const menuElem = document.querySelector('.menu');
  const humburgerElem = document.querySelector('.humburger-menu');

  const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
  };

  const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('humburger-menu-active');
  }

  humburgerElem.addEventListener('click', toggleMenu);

  document.body.addEventListener('click', e => {
    const target = e.target;
    if (!target.classList.contains('menu') && !target.classList.contains('humburger-menu') && target.closest('.menu') === null) {
      closeMenu();
    } else if (target.classList.contains('menu-list__link')) {
      closeMenu();
    }
  });
});
