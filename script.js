$(function(){
  $("#drawer_toggle").click(function(){
      $(this).toggleClass("open");
      $("#gloval_nav").toggleClass("sp_open");
  });

  // ナビゲーションのリンクがクリックされたら、ハンバーガーメニューを閉じる
  $("#gloval_nav a").click(function() {
      $("#drawer_toggle").removeClass("open");
      $("#gloval_nav").removeClass("sp_open");
  });
});