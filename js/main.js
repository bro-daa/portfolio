$(function () {
  $(".review__slider").slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });

  $(".menu__burger, .menu ul a").on("click", function () {
    if (window.visualViewport.width <= 992) {
      $(".menu__btn").toggleClass("menu__btn--active");
      $(".menu__list").toggleClass("menu__list--active");
      $("body").toggleClass("body__overflow");
    }
  });

  $(".logo").on("click", function () {
    if (window.visualViewport.width <= 992) {
      $(".menu__btn").removeClass("menu__btn--active");
      $(".menu__list").removeClass("menu__list--active");
      $("body").removeClass("body__overflow");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() - 1) {
      if (!$(".menu").hasClass("offheader-state")) {
        $(".menu").toggleClass("offheader-state");
        $(".menu__inner").toggleClass("menu__inner-offheader");
      }
    } else {
      $(".menu").removeClass("offheader-state");
      $(".menu__inner").removeClass("menu__inner-offheader");
    }
  });

  $(".header a, .footer a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 900);
  });

  var mixer = mixitup(".portfolio__content");
});
