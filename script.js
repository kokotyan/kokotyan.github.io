//画面のアニメーション

// function fadeAnime() {
//     $('.fadeUpTrigger').each(function () {
//         var elemPos = $(this).offset().top - 50;
//         var scroll = $(window).scrollTop();
//         var windowHeight = $(window).height();
//         if (scroll >= elemPos - windowHeight) {
//             $(this).addClass('fadeUp');
//         } else {
//             $(this).removeClass('fadeUp');
//         }
//     });
// }

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

//考えた末chatGPTを利用
SPMenu.addEventListener('click', () => {
    MenuOpen.classList.remove('active');
    MEnuClose.classList.add('active');
    SPMenu.classList.remove('active');
});


//ハンバーガーメニュー終わり