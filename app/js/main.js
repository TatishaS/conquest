'use strict';

/* Burger menu */
function burgerMenu() {
  const burger = document.querySelector('.menu__burger');
  const menuList = document.querySelector('.menu__list');

  console.log(burger);

  const overlay = document.querySelector('.overlay');
  //const body = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.menu__list-itemlink');

  function hideBurgerMenu() {
    menuList.classList.remove('active');

    burger.classList.remove('active-burger');
    overlay.classList.remove('overlay--show');
  }

  burger.addEventListener('click', () => {
    if (!menuList.classList.contains('active')) {
      menuList.classList.add('active');
      console.log('клик');

      burger.classList.add('active-burger');

      overlay.classList.add('overlay--show');
    } else {
      hideBurgerMenu();
    }
  });
  /* Cкрываем мобильное меню по нажатию на ссылку в меню */
  menuLinks.forEach(link => {
    link.addEventListener('click', hideBurgerMenu);
  });

  // Брейкпойнт, на котором появляется бургер-меню
  window.addEventListener('resize', () => {
    if (window.innerWidth > 740) {
      menuList.classList.remove('active');

      burger.classList.remove('active-burger');
    }
  });

  overlay.addEventListener('click', hideBurgerMenu);
}

burgerMenu();

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
});
