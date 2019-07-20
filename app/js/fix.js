$(document).ready(function () {

    sections = [];
    $('.section').each(function () {
        sections.push($(this))
    });
    dots = [];
    $('.text-dots-block').each(function () {
        dots.push($(this))
    });
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollingSpeed: 700,
        anchors: ['intro', 'about', 'tools', 'skills', 'contact', 'contact'],
        menu: '.dots-block-section-banner',
        css3: true,
        scrollOverflow: true,
        offsetSectionsKey: 'Y29kZXBlbi5pb196MDZiMlptYzJWMFUyVmpkR2x2Ym5NPWhPNA==',
        offsetSections: true,
        onLeave: function (index, nextIndex, direction) {
            $('.text-dots-block').removeClass('active');
            if (nextIndex.index > dots.length - 1) {
                dots[dots.length - 1].addClass('active');
            } else {
                dots[nextIndex.index].addClass('active');
            }
            if (sections[nextIndex.index].hasClass('black-right')) {
                swapColor(false);
                $('body').addClass('black-mode')
            } else {
                swapColor(true);
                $('body').removeClass('black-mode')
            }

            if (sections[nextIndex.index].hasClass('black-left')) {
                $('object.change-color').css('opacity', 1);
                $('object.current-color').css('opacity', 0);
                $('.whole-text-left-logo').css('color', '#333')
            } else {
                $('object.change-color').css('opacity', 0);
                $('object.current-color').css('opacity', 1);
                $('.whole-text-left-logo').css('color', '#fff')
            }
        }
    });

    $.fn.fullpage.setAllowScrolling(true);

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

    $('#menuToggle input, #menuToggle-mobile input').click(function () {
        if ($('body').hasClass('opened--menu')) {
            $('body').removeClass('opened--menu');
            if ($('body').hasClass('black-mode')) {
                swapColor(false)
            }
        } else {
            $('body').addClass('opened--menu');
            swapColor(true)
        }
    });
    $("#menuToggle input , #menuToggle-mobile input").click(function(){
        $(".list-icon, .cross-icon").fadeToggle(500);
        $('.text-left-logo').css('color', 'snow');
    });

    $(window).on("resize", function () {
        if ($(window).width() < 768) {
            $('.client-contact-list-img').css("background-image", "url(/img/s6-contact/phone_mob.jpg)");
        }
    });
    if ($(window).width() < 768) {
        var videoFile = 'img/video/reel_mob_588.mp4';
        $('.video-in-section-banner video').attr('src', videoFile);
        $('video.section-outdoor-professional').removeAttr("autoplay");
    }

    if ($(window).width() > 768) {
        $('video.section-outdoor-professional').removeAttr("controls");
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $('.outdoor-section-block button, .block-tools-section button').click(function () {
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
    function swapColor(white) {
        var color;
        var opacity;
        if (white) {
            color = '#fff';
            opacity = 0;
            $('.light-arrow').css('visibility', 'visible');
            $('.dark-arrow').css('visibility', 'hidden')
        } else {
            color = '#363531';
            opacity = 1;
            $('.dark-arrow').css('visibility', 'visible');
            $('.light-arrow').css('visibility', 'hidden')
        }
        $('.dots-block-section-banner .text-dots-block:not(.active) .dot-section-banner').css('background-color', color);
        $('.text-near-dots').css('color', color);
        $('.dots-block-section-banner .dot-section-banner').css('border-color', color);
        $('#menuToggle .black-button').animate({opacity: opacity}, 700);
    }
});