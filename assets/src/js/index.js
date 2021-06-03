$(document).ready(function() {

  //select
  $('.nice-select').niceSelect();

  //mobile navigation
  $('.heder-button__menu, .btn-close').click(function(){
    $(this).toggleClass('open');
    $('.heder-menu').toggleClass('open');
    $('.overlley').toggleClass('d-block');
  });
});

//slider

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 70,
  slidesPerView: 2.5,
  loop: true,
  stopOnLastSlide: false,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
    }
  }
}) 