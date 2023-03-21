function fadeAnime() {
    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    });
}

$(window).scroll(function () {
    fadeAnime();
});

$(window).on('load', function () {
    fadeAnime();
});

const menuIcon = document.querySelector('.menu-icon');
const menuLines = document.querySelectorAll('.menu-line');

menuIcon.addEventListener('click', () => {
    menuLines.forEach(line => line.classList.toggle('menu-line-active'));
});

$(function () {
    /*==================================
    スマホメニュー
    ===================================*/
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編:ストアサイト(インテリア)」参照
    $('.toggle_btn').on('click', function () {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function () {
        $('#header').removeClass('open');
    });

    // リンクをクリックしたときにメニューを閉じる
    //ミスタイプ ('#navi a').on('click', function () {
    //     $('#header').removeClass('open')
    // });

    /*================================================
    スムーススクロール
    =================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール運動で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;