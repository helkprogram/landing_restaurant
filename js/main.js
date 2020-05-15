$(document).ready(function () {
    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu').toggleClass('menu_active');
    });
    $('#owl-carousel-1').owlCarousel({
        stagePadding: 50,
        loop: true,
        autoWidth: true,
        autoplay: true,
        autoplaySpeed: 1000
    });
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});