$(function () {




});

/*---------------------------*/

$('.below-header-slider').slick({
  dots: true,
});

$('.container-slider').slick({
  dots: true,
  prevArrow:"<img class='slick-prev slick-arrow' src='img/prev.png'>",
  nextArrow:"<img class='slick-next slick-arrow' src='img/next.png'>"
});

/*---------------------------*/

  $(function() {
    $('.image-popup-vertical-fit').magnificPopup({delegate: 'a', type: 'image' });
});

/*----------------------------*/

$('.slider-customer').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
});