window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
$(document).ready(function () {
    active = 0;
    isDesktop = true;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isDesktop = false
    }

    if(isDesktop) {
        $('body').css('overflow', 'hidden');
        bindScroll();
    }

    // Init Sections Array
    sections = [];
    $('.section').each(function () {
        sections.push($(this))
    });
    // Init Sections Array

    function bindUnFixed() {
        $(document).bind('wheel', function (e) {
            var delta = e.originalEvent.deltaY;
            if (delta > 0) {
                if (sections[active][0].scrollHeight - sections[active].scrollTop()-1 <= sections[active].outerHeight() && active < sections.length-1) {
                    sections[active].css('overflow', 'hidden');
                    scroll('down');
                }
            } else {
                if (sections[active].scrollTop() === 0 && active > 0) {
                    sections[active].css('overflow', 'hidden');
                    scroll('up');
                }
            }
        });
    }

    function bindTools() {
        $(document).bind('wheel', function (e) {
            var delta = e.originalEvent.deltaY;
            if (delta > 0) {
                if (sections[active][0].scrollHeight - sections[active].scrollTop()-1 <= sections[active].outerHeight() && active < sections.length-1) {
                    if (sections[active].hasClass('tools-camera')) {
                        changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', 'img/section-tools/dji_inspire.jpg');
                    } else if (sections[active].hasClass('tools-dji')) {
                        changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', 'img/section-tools/movi_pro.jpg');
                    } else if (sections[active].hasClass('tools-movi')) {
                        sections[active].css('overflow', 'hidden');
                        scroll('down');
                    }
                }
            } else {
                if (sections[active].scrollTop() === 0 && active > 0) {
                    if (sections[active].hasClass('tools-movi')) {
                        changeTool($('.icon-movi'), $('.icon-dji'), 'tools-movi', 'tools-dji', 'img/section-tools/dji_inspire.jpg');
                    } else if (sections[active].hasClass('tools-dji')) {
                        changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', 'img/section-tools/red_camera.jpg');
                    } else if (sections[active].hasClass('tools-camera')) {
                        sections[active].css('overflow', 'hidden');
                        scroll('up');
                    }
                }
            }

            function changeTool(current_icon, new_icon, current_class, new_class, new_bg) {
                current_icon.animate({'opacity': '0'}, 200);
                setTimeout(function () {
                    current_icon.hide();
                    new_icon.show().animate({'opacity': '1'}, 200);
                }, 200);
                $('.photo-half-section-tools')
                    .append('<div class="after"></div>');
                    // .css('background-image', 'url("' + new_bg +'")');
                $('.photo-half-section-tools .after')
                    .css('background-image', 'url("' + new_bg +'")')
                    .animate({'opacity': '1'}, 500);
                setTimeout(function () {
                    $('.photo-half-section-tools').css('background-image', 'url("' + new_bg +'")');
                    setTimeout(function () {
                        $('.photo-half-section-tools .after').remove();
                    },50);
                }, 500);
                $('#section-tools').removeClass(current_class).addClass(new_class);
                $(document).unbind('wheel');
                setTimeout(function () { bindTools() }, 1000);
            }
        });
    }

    function bindScroll() {
        $(document).bind('wheel', function (e) {
            var delta = e.originalEvent.deltaY;
            if (delta > 0) scroll('down');//down
            else scroll('up');//up
        });
    }

    function scroll(param) {
        var speed = 1000;
        if (param === 'up' && active > 0) {
            $('html, body').animate({scrollTop: sections[active-1].offset().top}, speed);
            active--;
        } else if (param === 'down' && active < sections.length-1) {
            $('html, body').animate({scrollTop: sections[active+1].offset().top}, speed);
            active++;
        }
        checkActiveDot();
        $(document).unbind('wheel');
        $('.hamburger-menu-banner-section, .left-logo-banner-section').removeClass('animation');
        setTimeout(function () {
            sections[active].css('overflow-y', 'scroll');
            $("span.countup").html("1k");
            if (sections[active].attr('id') === 'section-tools') {
                bindTools();
            } else if (sections[active].attr('id') === 'section-instagram') {
                runSubscribersCounter();
                bindUnFixed();
            } else if (sections[active].attr('id') === 'first-section'){
                $('.hamburger-menu-banner-section, .left-logo-banner-section').addClass('animation');
                bindUnFixed();
            } else {
                bindUnFixed();
            }
        }, speed);
    }
    $('.text-dots-block').each(function () {
        $(this).hover(function () {
        if (!$('#menuToggle').hasClass('opened--menu')) {
            var nearDots = $(this).find('.text-near-dots');
            var DotsEmbed = $(this).find('embed');
             if ($(this).hasClass('hover--menu')) {
                 nearDots.animate({'opacity': '0'}, 200);
                 DotsEmbed.animate({'opacity': '0'}, 200);
              $('.text-dots-block').removeClass('hover--menu');
             } else {
                 nearDots.animate({'opacity': '1'}, 200);
                 DotsEmbed.animate({'opacity': '1'}, 200);
                 $('.text-dots-block').addClass('hover--menu');
             }
         }
        })
    });
    $('#menuToggle').click(function () {
        if ($(this).hasClass('opened--menu')) {
            $('.text-near-dots, .text-dots-block embed').animate({'opacity': '0'}, 400);
            $('#menuToggle').removeClass('opened--menu');
        } else {
            $('.text-near-dots, .text-dots-block embed').animate({'opacity': '1'}, 400);
            $('#menuToggle').addClass('opened--menu');
        }
    });

    // Init Dots Array
    dots = [];
    $('.text-dots-block').each(function () {
        dots.push($(this))
    });
    // Init Dots Array

    $('.text-dots-block').click(function () {
        var thisElement = $(this);
        for (var i = 0; i < dots.length; i++) {
            if (dots[i].find('h6').html() === thisElement.find('h6').html()) {
                $('html, body').animate({scrollTop: sections[i].offset().top}, 1000);
                active = i;
                checkActiveDot();
            }
        }

    });
    function checkActiveDot() {
        $('.text-dots-block').each(function () {
            $(this).removeClass('active')
        });
        dots[active].addClass('active')
    }

    $('.outdoor-section-block button').click(function() {
        // $('.outdoor-section__image').animate({'opacity': '0'},200);
        var dataName = $(this).parent().data('name');
        if (dataName.toLowerCase() === 'travel') {
            animateArrow('16.66%')
        } else if (dataName.toLowerCase() === 'outdoor') {
            animateArrow('50%')
        } else {
            animateArrow('83.33%')
        }
        if ($(this).attr('data-clicked') === 'no'){
            $(this).attr('data-clicked', 'yes');
            setTimeout(function () {
                $('.outdoor-section__image').removeClass('active');
                $('.icon-' + dataName).addClass('active').css('opacity', '0').animate({'opacity': '1'},200);

            },200);

        }else { $('.outdoor-section__image').removeClass('active');
            $('.icon-' + dataName).addClass('active').animate({'opacity': '1'},1000);}



        function animateArrow(prop) {
            $('#arrow-skills').animate({'left': prop}, 400);
        }
    });


    function runSubscribersCounter() {
        if ($("span.countup").isInViewport()) {
            animateCounter()
        } else {
            $("#section-instagram").bind("scroll", function() {
                if ($("span.countup").isInViewport()) {
                    animateCounter()
                }
            });
        }
        function animateCounter() {
            $("#section-instagram").unbind("scroll")
            var count = 1;
            countdown = setInterval(function () {
                $("span.countup").html(count + "k");
                count++;
                if (count === 50) clearInterval(countdown);
            }, 30);
        }
    }

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


});
