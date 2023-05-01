$(function () {
  $("#drawer_toggle").click(function () {
    $(this).toggleClass("open");
    $("#gloval_nav").toggleClass("sp_open");
  });

  // ナビゲーションのリンクがクリックされたら、ハンバーガーメニューを閉じる
  $("#gloval_nav a").click(function () {
    $("#drawer_toggle").removeClass("open");
    $("#gloval_nav").removeClass("sp_open");
  });
});

$("#main-slider").slick({
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  fade: true,
  asNavFor: "#text-slider",
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$("#text-slider").slick({
  draggble: false,
  arrows: false,
});


$('#main-slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('#main-slider').slick('slickPlay');
  });