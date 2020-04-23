$(function() {
    $('.slider').show().slick({        
        infinity: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        fade: false,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $(".sub-menu__item").closest(".main-menu__item").addClass("main-menu__item--parent");

    $(".burger").click(function () {
        $(this).toggleClass("burger--active");
        $(".main-menu").toggleClass("main-menu--active");
    });

    $(".main-menu__click-adaptive").click(function () {
        $(this).parent().toggleClass("main-menu__item--active");
    });
});