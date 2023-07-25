$(function () {
  $("#drawer_toggle").click(function () {
    $(this).toggleClass("open");
    $("#global_nav").toggleClass("sp_open");
  });

  $("#global_nav a").click(function () {
    $("#drawer_toggle").removeClass("open");
    $("#global_nav").removeClass("sp_open");
  });

  $("#drawer_toggle").click(function () {
    $(this).toggleClass("active");
    $("#global_nav").toggleClass("active");
  });

  $("#global_nav a").click(function () {
    $("#drawer_toggle").removeClass("active");
    $("#global_nav").removeClass("active");
  });

  $(document).ready(function () {
    var sections = $("section");
    var nav = $("#global_nav");
    var headerHeight = $("header").outerHeight();

    // スクロールイベントの最適化
    var sectionPositions = [];
    sections.each(function () {
      sectionPositions.push($(this).offset().top - headerHeight);
    });

    $(window).on("scroll", function () {
      var curPos = $(this).scrollTop();
      var activeSectionIndex = -1;

      for (var i = 0; i < sectionPositions.length; i++) {
        if (curPos >= sectionPositions[i]) {
          activeSectionIndex = i;
        }
      }

      nav.find("a").removeClass("active");
      sections.removeClass("active");

      if (activeSectionIndex !== -1) {
        sections.eq(activeSectionIndex).addClass("active");
        nav
          .find('a[href="#' + sections.eq(activeSectionIndex).attr("id") + '"]')
          .addClass("active");
      }
    });

    // スムーススクロールの実装
    $("a[href^='#']").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });

  $("#main-slider").slick({
    autoplay: true,
    autoplaySpeed: 3750,
    infinite: true,
    fade: true,
    asNavFor: "#text-slider",
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $("#text-slider").slick({
    draggable: false,
    arrows: false,
  });

  $("#main-slider").on(
    "touchmove",
    function (event, slick, currentSlide, nextSlide) {
      $("#main-slider").slick("slickPlay");
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-6LCEQTSDFY");
