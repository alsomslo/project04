$(function () {
    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        dots: true,
        arrows: false,
    });

    $('.main_visual .content .arrows .left').on('click', function (e) {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .content .arrows .right').on('click', function (e) {
        $('.main_slide').slick('slickNext')
    });


});