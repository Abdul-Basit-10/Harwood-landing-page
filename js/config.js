$(document).ready(function () {
  $(".client-reviews-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    // appendDots: ".move",
    prevArrow: ".btn-arrow.left ",
    nextArrow: ".btn-arrow.right",
  });
  $(".achievement-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // appendDots: ".move",
    prevArrow: ".achievement-left ",
    nextArrow: ".achievement-right",
  });
});
