'use strict';

let swiper = new Swiper('.quality__swiper-slider', {
  slidesPerView: 1,
  autoplay: {
    delay: 6000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Custom pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    },
  },

  /*   breakpoints: {
    860: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }, */
});
