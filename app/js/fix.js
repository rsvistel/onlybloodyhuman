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

    $('.outdoor-section-block button, .block-tools-section button').click(function() {
        if (!$(this).hasClass('active')) {
            $('.outdoor-section__image, .tools-section__image').animate({'opacity': '0'}, 200);
            var dataName = $(this).parent().data('name');
            if (dataName.toLowerCase() === 'travel') {
                animateArrow('16.66%')
            } else if (dataName.toLowerCase() === 'outdoor') {
                animateArrow('50%')
            } else if (dataName.toLowerCase() === 'camera') {
                animateArrow('16.66%')
            } else if (dataName.toLowerCase() === 'drone') {
                animateArrow('50%')
            } else {
                animateArrow('83.33%')
            }

            setTimeout(function () {
                $('.outdoor-section__image, .tools-section__image').removeClass('active');
                $('.icon-' + dataName).addClass('active').css('opacity', '0').animate({'opacity': '1'}, 200);
                $('.outdoor-section-block button, .block-tools-section button').removeClass('active');
                $('.outdoor-section-block .outdoor-section__' + dataName + ' button', '.block-tools-section .block-tools-section__' + dataName + ' button').addClass('active');

            }, 200);
        }

        function animateArrow(prop) {
            $('#arrow-skills, #arrow-tools').animate({'left': prop}, 400);
        }
    });



});