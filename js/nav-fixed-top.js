$(document).ready(function () {
  let logo = document.getElementById("ssw-logo");
  let hamburger = document.getElementsByClassName("menu-icon-bar");

  let logo1 = new Image();
  logo1.src = "img/ssw.png";

  let logo2 = new Image();
  logo2.src = "img/ssw-fff1.png";

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 150) {
      logo.src = "img/ssw.png";
      for (let i = 0; i < hamburger.length; i++) {
        hamburger[i].style.backgroundColor = "#0e377b";
      }
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
      logo.src = "img/ssw-fff1.png";
      for (let i = 0; i < hamburger.length; i++) {
        hamburger[i].style.backgroundColor = "#fff";
      }
    }
  });
});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
