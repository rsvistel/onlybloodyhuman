$(document).ready(function () {
    $('.change-color').css('height' , '0');
    $('.text-left-logo').css('color', 'white');
    active = 0;

    $('#menuToggle input, #menuToggle-mobile input').click(function () {
        if ($('body').hasClass('opened--menu')) {
            $('body').removeClass('opened--menu');
        } else {
            $('body').addClass('opened--menu');

        }
    });
    $("#menuToggle input , #menuToggle-mobile input").click(function(){
        $(".list-icon, .cross-icon").fadeToggle(500);
        $('.text-left-logo').css('color', 'snow');
    });

    dots = [];
    $('.text-dots-block').each(function () {
        dots.push($(this))
    });
    // Init Dots Array

    $('.text-dots-block').click(function () {
        var thisElement = $(this);
        if (isDesktop) {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i].find('h6').html() === thisElement.find('h6').html()) {
                    scroll(i);
                    active = i;
                    for (var b = 0; b < active; b++) {
                        sections[b].scrollTop(sections[b][0].scrollHeight);
                    }
                    for (var y = active+1; y < sections.length; y++) {
                        sections[y].scrollTop(0);
                    }
                    checkActiveDot();
                }
            }
            if (active > 2) {
                $('.img-under-line-block').hide();
                $('.icon-dji, .icon-camera').hide().animate({'opacity': '0'});
                $('.icon-movi').show().animate({'opacity': '1'});
                $('.photo-half-section-tools').css('background-image', 'url("img/s3-tools/gimbal_dsk.jpg")');
                $('#section-tools').removeClass('tools-dji tools-camera').addClass('tools-movi');
            } else {
                $('.img-under-line-block').hide();
                $('.icon-dji, .icon-movi').hide().animate({'opacity': '0'});
                $('.icon-camera').show().animate({'opacity': '1'});
                $('.photo-half-section-tools').css('background-image', 'url("img/s3-tools/camera_dsk.jpg")');
                $('#section-tools').removeClass('tools-dji tools-movi').addClass('tools-camera');
            }

            if ($(this).hasClass('instagram-counter')) {
                setTimeout(function () {
                    runSubscribersCounter()
                }, 700);

            }
        } else {
            for (var t = 0; t < dots.length; t++) {
                if (dots[t].find('h6').html() === thisElement.find('h6').html()) {
                    $('html, body').animate({scrollTop: sections[t].offset().top}, 1000);
                }
            }
        }

    });
    function checkActiveDot() {
        $('.text-dots-block').each(function () {
            $(this).removeClass('active')
        });
        dots[active].addClass('active')
    }

});

