// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function burgerMenuToggle() {
  const burger = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const body = document.querySelector('body');

  if (!burger || !mobileMenu || !body) return;


  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('shown');
    burger.classList.toggle('open');
    body.classList.toggle("disable-scroll");
  })
}

function scrollResizeMenu() {
  const menu = document.querySelector("header");

  if (!menu) return;

  window.addEventListener('scroll', () => {
    (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      ? menu.style.borderBottom = `1px solid #35537b`
      : menu.style.borderBottom = "0px";
  })
}

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {delay: 5000},
  direction: 'horizontal',
  initialSlide: 0,
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: "bullets",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

burgerMenuToggle();
scrollResizeMenu();