import Swiper, { Navigation, Pagination } from 'swiper';

export function slider() {
  Swiper.use([Navigation, Pagination]);
  var introSwiper = new Swiper('.intro-sliders-list', {
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 80,
    initialSlide: 1,
    navigation: {
      nextEl: '.intro-button-next',
      prevEl: '.intro-button-prev',
    }
  })
  var promoSwiper = new Swiper('.promo-contain', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 8,
    },
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      1200: {
        direction: 'vertical',
      }
    },
  })
}
