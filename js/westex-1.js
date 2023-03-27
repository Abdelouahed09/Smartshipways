/*
  [JS Index]

  ---

  Template Name: Westex - A True Western Experience
  Author:  ex-nihilo
  Version: 1.0
*/

/*
  1. preloader
  2. navigation
    2.1. navigation icon
    2.2. navigation panels
    2.3. navigation links
  3. swiper slider
*/

$(function () {
  "use strict";

  // 1. preloader
  $("#preloader").fadeOut(800);
  $(".preloader-bg").delay(600).fadeOut(800);

  // 2. navigation
  // 2.1. navigation icon
  $(".navigation-icon").on("click", function () {
    $(this).toggleClass("active");
  });
  // 2.2. navigation panels
  $(".navigation-fire").on("click", function (e) {
    if (
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).hasClass("open")
    ) {
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).removeClass("open");
    } else {
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).addClass("open");
    }
  });
  // 2.3. navigation links
  $("nav.navigation-menu a").on("click", function (e) {
    $(".navigation-icon").removeClass("active");
    $(
      ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
    ).removeClass("open");
  });

  // 3. swiper slider
  var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
    preloadImages: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    init: true,
    loop: false,
    speed: 1200,
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
    simulateTouch: true,
    parallax: true,
    effect: "slide",
    pagination: {
      el: ".swiper-slide-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  swiper.on("slideChangeTransitionStart", function () {
    $(".slider-progress-bar").removeClass("slider-active");
  });
  swiper.on("slideChangeTransitionEnd", function () {
    $(".slider-progress-bar").addClass("slider-active");
  });
  var playButton = $(".swiper-slide-controls-play-pause-wrapper");

  function autoEnd() {
    playButton.removeClass("slider-on-off");
    swiper.autoplay.stop();
  }

  function autoStart() {
    playButton.addClass("slider-on-off");
    swiper.autoplay.start();
  }
  playButton.on("click", function () {
    if (playButton.hasClass("slider-on-off")) autoEnd();
    else autoStart();
    return false;
  });
});
