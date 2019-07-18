$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 7,
                autoplay: false,
                loop: false
            }
        }
    });

    $(window).on("resize", function(){
        if($(window).width() < 768){
            $('.client-contact-list-img').css("background-image", "url(/img/s6-contact/phone_mob.jpg)");
        }
    });
    if($(window).width() < 768) {
        var videoFile = 'img/video/reel_mob_588.mp4';
        $('.video-in-section-banner video').attr('src', videoFile);
        $('video.section-outdoor-professional').removeAttr("autoplay");
    }

    if($(window).width() > 768) {
        $('video.section-outdoor-professional').removeAttr("controls");
    }

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
});