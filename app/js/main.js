$(function () {




});

/*---------------------------*/

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

let arr = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*--------------------------------*/

var svgLocation = document.getElementById("mysvg").getBoundingClientRect();
let myObject = document.querySelector(".rotate-number");
let myObjetSecond = document.querySelector(".line-anim")

var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;

function scrollAnimTriggerCheck(evt)
{
  var viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {
    myObject.classList.add("anim-circle");;
    myObjetSecond.classList.add("line-animation")
    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }
}
document.addEventListener("scroll", scrollAnimTriggerCheck);


