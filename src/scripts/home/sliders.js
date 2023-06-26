/* eslint-disable no-new */
/* eslint-disable no-undef */

new Swiper('#swiper-toprated', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    620: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1640: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

new Swiper('#swiper-popular', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
});

new Swiper('#swiper-series', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    620: {
      slidesPerView: 2,
    },
    940: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 5,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 6,
      centeredSlides: false,
    },
  },
});
