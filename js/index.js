"use strict";
$(function(){

let winW = window.innerWidth;
// console.log(winW);

// smooth scroll
let $noScrollObj = '.js-noscroll';
let $scrollObj = '[href^=\\#]:not(' + $noScrollObj + ')'; 

$(document).on('click',$noScrollObj,function(){
  return false;
});
$(document).on('click',$scrollObj,function(){
  winW = window.innerWidth;
  let $href = $(this).attr('href');
  let $margin = 140;
  if(winW >= 900) {
    $margin = 210;
  }
  if($href.match(/^#.+$/) && $($href).length){
    $('html,body').animate({
      scrollTop: $($href).offset().top - $margin
    },600);
  }
  return false;
});


// swiper
const mySwiper = new Swiper('.voice-list-wrap .swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 40,
  grabCursor: true,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.voice-list-wrap .swiper-button-next',
    prevEl: '.voice-list-wrap .swiper-button-prev',
  },
  breakpoints: {
    1160: {
      slidesPerView: '3.5',
      centeredSlides: false,
      spaceBetween: 32,
    },
    900: {
      slidesPerView: '2.5',
      centeredSlides: false,
      spaceBetween: 32,
    }
  },
});


// modal
let modalScrollPosition;

$(document).on("click",".modal-open-btn",function(){
  modalScrollPosition = $(window).scrollTop();
  //  ボタンをクリックしたら、クリックしたい要素のdata属性を取得
  let target = $(this).data('modal-link');
  //  上記で取得した要素と同じclass名を持つ要素を取得
  let modal = '.' + target;

  //  その要素にclassを付け替える
  $(modal).addClass('is-show');
  $('body').addClass('modal-open');
  $('body').css({'top': -modalScrollPosition});

});

$(document).on("click",".modal__close, .modal__bg",function(){
  $(this).parents('.modal').removeClass('is-show');
  $('body').removeClass('modal-open');
  $('body').removeAttr('style');
  window.scrollTo( 0 , modalScrollPosition );
});



}); // jQuery