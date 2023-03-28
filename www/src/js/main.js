function burgerMenuToggle() {
  const burger = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const body = document.querySelector('body');


  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('shown');
    burger.classList.toggle('open');
    body.classList.toggle("disable-scroll");
  })
}

function scrollResizeMenu() {
  const menu = document.querySelector("header");

  window.addEventListener('scroll', () => {
    (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      ? menu.style.borderBottom = `1px solid #35537b`
      : menu.style.borderBottom = "0px";
  })
}

burgerMenuToggle();
scrollResizeMenu();
