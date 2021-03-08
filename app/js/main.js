/*---------------------------*/

//const { active } = require("browser-sync");

$('.below-header-slider').slick({
  dots: true,
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

// $(function() {
//   $("#toggle-menu").on("click", function(e) {
//     $("#mobile-menu").toggleClass("active");
//     $(this).toggleClass("active");
//   });  
// });


var toggleMenu = document.getElementById("toggle-menu");
var mobileMenu = document.getElementById("mobile-menu");

function enableMenu(evt){
  toggleMenu.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  }

toggleMenu.addEventListener('click', enableMenu);