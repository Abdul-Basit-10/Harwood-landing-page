$(document).ready(function () {
  $(".client-reviews-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,

    // appendDots: ".move",
    prevArrow: ".btn-arrow.left ",
    nextArrow: ".btn-arrow.right",
  });
  $(".achievement-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,

    // appendDots: ".move",
    prevArrow: ".achievement-left ",
    nextArrow: ".achievement-right",
  });
});
