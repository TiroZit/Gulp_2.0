// SWIPER 
// https://swiperjs.com/swiper-api
import Swiper, { Lazy, Navigation, Pagination } from 'swiper';

// Инициализация слайдеров
// https://swiperjs.com/swiper-api#using-js-modules
function initSliders(){
  if(document.querySelector('.swiper')){
    new Swiper('.swiper', {
      modules: [Pagination, Lazy, Navigation],
      grabCursor: true,
      loop: true,// Ьесконечный прокрут
      speed: 500,
      spaceBetween: 0,// Отступ между слайдами
      slidesPerView: '1',// Кол-во слайдов
      // preloadImages: false,// Принудительно загрузить все слайды
      // lazy: {
      //   loadPrevNext: true,
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // autoplay: {
      //   delay: 5000,
      // },
      // breakpoints: {
      // // when window width is >= 640px
      //   1400: {
      //     slidesPerView: 2,
      //   }
      // }
    });
  }
}

window.addEventListener('load', function(e){
  // Запуск инициализации слайдеров
  initSliders();
});