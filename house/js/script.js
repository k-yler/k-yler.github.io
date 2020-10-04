$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    veriableWigth: true,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

 $("#menu").on("click", "a", function (event) {
          event.preventDefault();
          var id = $(this).attr("href"),
            top = $(id).offset().top;
          $("body,html").animate({ scrollTop: top }, 1000);
        });

});