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
