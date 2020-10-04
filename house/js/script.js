$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".slidersone").slick({
    arrows: false,
    asNavFor: ".slidersthree",
  });
});
// $(document).ready(function () {
//   $(".sliderstwo").slick({
//     arrows: false,
//     fade: true,
//     asNavFor: ".slidersthree",
//   });
// });
$(document).ready(function () {
  $(".slidersthree").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slidersone",
  });
});
