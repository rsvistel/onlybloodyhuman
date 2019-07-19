$(document).ready(function () {
    $('.change-color').css('height' , '0');
    $('.text-left-logo').css('color', 'white');

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
    
});

