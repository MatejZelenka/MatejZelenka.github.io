function burgerMenuToggle() {
  const burger = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const ul = document.querySelector('.navigation')

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('shown')
    ul.classList.toggle('mb-0')
    burger.classList.toggle('open')
  })
}

burgerMenuToggle()
