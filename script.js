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

  $(document).ready(function() {
    // セクションの高さを計算する
    var sections = $("section");
    var nav = $("#global_nav");

    $(window).on("scroll", function() {
      var curPos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - 50; // ヘッダーの高さを考慮する
        var bottom = top + $(this).outerHeight();
        if (curPos >= top && curPos <= bottom) {
          nav.find("a").removeClass("active");
          sections.removeClass("active");
          $(this).addClass("active");
          nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
      });
    });
    
    // スムーススクロールの実装
    $("a[href^='#']").click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top - 50 // ヘッダーの高さを考慮する
      }, 500);
    });
  });

$("#main-slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
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