/*---------------------------*/

//const { active } = require("browser-sync");
var _functions = {},
    winWidth;

function removeScroll() {
  popupTop = $(window).scrollTop();
  $('html').css({
      "position": "fixed",
      "top": -$(window).scrollTop(),
      "width": "100%"
  });
}

function addScroll() {
  $('html').css({
      "position": "static"
  });
  window.scroll(0, popupTop);
}

$('.below-header-slider').slick({
  dots: true,
  fade: true,
});

$('.container-slider').slick({
  dots: true,
  prevArrow: "<img class='slick-prev slick-arrow' src='img/prev.png'>",
  nextArrow: "<img class='slick-next slick-arrow' src='img/next.png'>"
});

/*---------------------------*/

$(function () {
  $('.image-popup-vertical-fit').magnificPopup({
    delegate: 'a',
    type: 'image'
  });
});

/*----------------------------*/

$('.slider-customer').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
});

/*------------------------------*/

$(".accordion").on("click", function (event) {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $('.accordion').removeClass('active');
    $(this).addClass('active');
  }
});


/*--------------------------------*/

var svgLocation = document.getElementById("mysvg").getBoundingClientRect();
let myObject = document.querySelector(".rotate-number");
let myObjetSecond = document.querySelector(".line-anim")

var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;

function scrollAnimTriggerCheck(evt) {
  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    myObject.classList.add("anim-circle");
    myObjetSecond.classList.add("line-animation")
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }
}
document.addEventListener("scroll", scrollAnimTriggerCheck);

/*---------------------toggle menu----------------------*/


var toggleMenu = document.getElementById("toggle-menu");
var mobileMenu = document.getElementById("mobile-menu");
var bodySite = document.querySelector('body');
var menuOverlay = document.getElementById('menu-overlay');

function enableMenu(evt){
  toggleMenu.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  menuOverlay.classList.toggle('background');
  bodySite.classList.toggle('scroll');
}

toggleMenu.addEventListener('click', enableMenu);

/*--------------------POPUP----------------------------*/

_functions.openPopup = function (popup) {
  $('.popup-container').removeClass('active');
  $(popup + ', .popup-container').addClass('active');
  removeScroll();
};

_functions.closePopup = function () {
  $('.popup-container').removeClass('active');
  addScroll();
};

$(document).on('click', '#open-popup', function (e) {
  e.preventDefault();
  _functions.openPopup('.popup-container[data-rel="' + $(this).data('rel') + '"]');
});

$(document).on('click', '#close-popup', function(e){
  e.preventDefault();
  _functions.closePopup();
})

// var openPopup = document.getElementById("open-popup");
// var popupOverlay = document.getElementById("popup-overlay")

// function popupOpen(evt){  
//   popupOverlay.classList.add('active');
//   removeScroll();
// }
// openPopup.addEventListener('click', popupOpen);

// /*--------------close popup----------------*/

// var closePopup = document.getElementById("close-popup");
// function popupClose(evt){
//   popupOverlay.classList.remove('active');
//   addScroll();
// }
// closePopup.addEventListener('click', popupClose);
// document.getElementById("overlay").addEventListener('click', popupClose)

