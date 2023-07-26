//ハンバーガーメニューと画像のサイズ調整のコード
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

  //slick/jsにて画像のスライド
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
  

//googleアナリティクスのコード
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-6LCEQTSDFY");
