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

//ハンバーガーメニュー用はじめ

const MenuContainer = document.querySelector('.menu_container');
const MenuOpen = document.querySelector('.menu_open');
const MEnuClose = document.querySelector('.menu_close');

const SPMenu = document.querySelector('.sample_sp_menu');
	MenuContainer.addEventListener('click', () => {
        MenuOpen.classList.toggle('active');
        MEnuClose.classList.toggle('active');
        SPMenu.classList.toggle('active');
	});

    //ハンバーガーメニュー終わり

    $('ハンバーガーアイコンのセレクター').click(function() {
        $('nav').slideToggle();
        });

// $(window).scroll(function () {
//     fadeAnime();
// });

// $(window).on('load', function () {
//     fadeAnime();
// });

// const menuIcon = document.querySelector('.menu-icon');
// const menuLines = document.querySelectorAll('.menu-line');

// menuIcon.addEventListener('click', () => {
//     menuLines.forEach(line => line.classList.toggle('menu-line-active'));
// });