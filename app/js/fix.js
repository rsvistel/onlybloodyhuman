$(document).ready(function () {
   var progressLine = false;
   var speed;
   var insta = false;
    isDesktop = true;
    var isTouchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isDesktop = false
    }

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        $(".ecco-image").css({"marginLeft": "6vw"});
        $(".ie-tools").css({"position": "static"});
        $(".ie-image-logo").css({"width": "6vw"});
        $(".section-outdoor-professional").css({"left": "0"});
        $(".video-references").css({"left": "0"});
        $(".ie-image").each(function () {
            var route = $(this).attr("data");
            route = route.slice(0,-4);
            $(this).attr("data", route + '-ie.svg')
        })
    }

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

    sections = [];
    $('.section').each(function () {
        sections.push($(this))
    });
    dots = [];
    $('.text-dots-block').each(function () {
        dots.push($(this))
    });
    const instagramStartPosition = $("#section-instagram").offset().top;
    const aboutStartPosition = $("#section-about").offset().top;
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollingSpeed: 700,
        anchors: ['intro', 'about', 'tools', 'skills', 'contact', 'contact'],
        menu: '.dots-block-section-banner',
        css3: true,
        scrollOverflow: true,
        responsiveWidth: 1000,
        verticalCentered: false,
        lazyLoading: false,
        onLeave: function (index, nextIndex, direction) {
            if (($(window).width() <= 768) && $('body').hasClass('opened--menu')) {
                $('#menuToggle-mobile input').click()
            }
            $.fn.fullpage.setAllowScrolling(true);
            $("#fullpage.fullpage-wrapper").removeClass('long-section');
            sections[nextIndex.index].css('pointer-events', 'auto');
            $(window).unbind('wheel');
            $(document).unbind('wheel');
            if (!isTouchCapable) {
                if ((nextIndex.index >= 3) && $('#section-tools').hasClass('tools-dji')) {
                    setTimeout(function () {
                        changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', '3', false);
                        setTimeout(function () { $(document).unbind('wheel'); }, speed*2 + 1);
                    }, 700);
                }
                else if ((nextIndex.index <= 1) && $('#section-tools').hasClass('tools-dji')) {
                    setTimeout(function () {
                        changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', '1', true);
                        setTimeout(function () { $(document).unbind('wheel'); }, speed*2 + 1);
                    }, 700);
                }
                else if ((nextIndex.index >= 3) && $('#section-tools').hasClass('tools-camera'))  {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', false);
                    setTimeout(function () {
                        changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', '3', false);
                        setTimeout(function () { $(document).unbind('wheel'); }, speed*2 + 1);
                    }, 200);
                }
                else if ((nextIndex.index <= 1) && $('#section-tools').hasClass('tools-movi')) {
                    changeTool($('.icon-movi'), $('.icon-dji'), 'tools-movi', 'tools-dji', '2', true);
                    setTimeout(function () {
                        changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', '1', true);
                        setTimeout(function () { $(document).unbind('wheel'); }, speed*2 + 1);
                    }, 200);
                }
            }
            if ($('body').hasClass('opened--menu')) {
                $('#menuToggle input').click()
            }
            $('.text-dots-block').removeClass('active');
            $("#fullpage.fullpage-wrapper").removeClass('long-section');
            if (nextIndex.index > dots.length - 1) {
                dots[dots.length - 1].addClass('active');

            } else if (sections[nextIndex.index].attr("id") === "section-tools") {
                if (!($(window).width() < 1025)) {
                    $.fn.fullpage.setAllowScrolling(false);
                    setTimeout(function () {
                        bindTools();
                    }, 700);
                }
            } else if (sections[nextIndex.index].attr("id") === "section-about") {
                $.fn.fullpage.setAllowScrolling(false);
                setTimeout(function () {$("#fullpage.fullpage-wrapper").addClass('long-section')}, 700);
                if (isDesktop) {
                    $(window).unbind('wheel');
                    if (progressLine == false) {
                        $('.progress-line-gray').animate({'width': '0'}).removeClass('animated');
                    }
                    $(window).bind('wheel', function (e) {
                            $(".progress-line").each(function () {
                                var diff = $(this).offset().top;
                                var heightWindow = $(window).height();
                                var res = diff - heightWindow;
                                var current_transform = parseInt($('#section-about .fp-scroller').css('transform').split(',')[5]);
                                current_transform = Math.abs(current_transform);
                                if (current_transform > res) {
                                    animateStat($(this))
                                }
                            });
                            setTimeout(function () {
                                progressLine = true;
                            }, 3000);

                            function animateStat(item) {
                                if (!item.find('.progress-line-gray').hasClass('animated')) {
                                    var width;
                                    var classListArray = item.find('.progress-line-gray').attr('class').split(' ');
                                    for (var i = 0; i < classListArray.length; i++) {
                                        if (classListArray[i].includes('progress-line-gray-')) {
                                            width = classListArray[i].replace('progress-line-gray-', '')
                                        }
                                    }
                                    item.find('.progress-line-gray').animate({'width': width + '%'}, 1000).addClass('animated')
                                }
                            }
                    });
                }
                setTimeout(function () {longSectionScrolling()}, 600);
            }
            else if (sections[nextIndex.index].attr("id") === "section-instagram") {
                $.fn.fullpage.setAllowScrolling(false);
                setTimeout(function () {$("#fullpage.fullpage-wrapper").addClass('long-section')}, 700);
                $(window).bind('wheel', function (e) {
                    if (insta == false) {
                        if (isDesktop) {
                            $("span.countup").html("1k");
                        }
                        var topSecInsta = $('#section-instagram span.countup').offset().top;
                        var heighttest = $(window).height();
                        var resInsta = topSecInsta - heighttest;
                        var current_transform1 = parseInt($('#section-instagram .fp-scroller').css('transform').split(',')[5]);
                        current_transform1 = (current_transform1);
                        if (current_transform1 < resInsta) {
                            animateCounter();
                        }
                        setTimeout(function () {
                            insta = true;
                        }, 200);
                    }
                });
                setTimeout(function () {longSectionScrolling()}, 600);
            }
            else if (sections[nextIndex.index].attr("id") === "section-contact") {
                $.fn.fullpage.setAllowScrolling(true);
            }
            else {
                dots[nextIndex.index].addClass('active');
            }
            if (sections[nextIndex.index].hasClass('black-right')) {
                swapColor(false);
                $('body').addClass('black-mode');
            }
            else {
                swapColor(true);
                $('body').removeClass('black-mode');
            }

            // if (sections[nextIndex.index].hasClass('black-left')) {
            //     $('object.change-color').css('opacity', 1);
            //     $('object.current-color').css('opacity', 0);
            //     $('.whole-text-left-logo').css('color', '#333');
            // } else {
            //     $('object.change-color').css('opacity', 0);
            //     $('object.current-color').css('opacity', 1);
            //     $('.whole-text-left-logo').css('color', '#fff');
            //  }

            // if($(window).width() <= 768) {
            //     if (sections[nextIndex.index].hasClass('black-left')) {
            //         $('object.change-color').css('opacity', 1);
            //         $('object.current-color').css('opacity', 0);
            //         $('.whole-text-left-logo').css('color', '#333');
            //     } else {
            //         $('object.change-color').css('opacity', 0);
            //         $('object.current-color').css('opacity', 1);
            //         $('.whole-text-left-logo').css('color', '#fff');
            //      }
            // }
            // if ($(window).width() <= 768) {
            //     console.log('mobile')

            // }
            for (var b = 0; b < nextIndex.index; b++) {
                var heightWindows = $(window).height();
                var height = sections[b].find('.fp-scroller').outerHeight();
                var change = heightWindows - height;
                sections[b].find('.fp-scroller').css('transform', 'matrix(1, 0, 0, 1, 0, ' + change + ')');
            }
            for (var y = nextIndex.index + 1; y < sections.length; y++) {
                sections[y].find('.fp-scroller').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
            }
            function longSectionScrolling() {
                var sectionStartPosition;
                if (sections[nextIndex.index].attr('id') === "section-instagram") {
                    sectionStartPosition = instagramStartPosition;
                } else if (sections[nextIndex.index].attr('id') === "section-about") {
                    sectionStartPosition = aboutStartPosition;
                }
                var sectionHeight = sections[nextIndex.index].find('.fp-scroller').outerHeight();
                var sectionEnd = $(window).height() - sectionHeight;
                var sectionScroll = sectionStartPosition;
                $(window).bind('wheel', function (e) {
                    if  (sections[nextIndex.index].find('.fp-scroller').css('transform') === 'matrix(1, 0, 0, 1, 0, ' + 0 + ')') {
                        var deltaUp = e.originalEvent.deltaY;
                        sections[nextIndex.index].css('pointer-events', 'none');
                        if (deltaUp < 0) {
                            sectionScroll = sectionScroll + event.deltaY;
                            $('#fullpage').css('transform', 'translate3d(0px, -' + sectionScroll + 'px, 0px)');
                            if (sectionScroll <= sectionStartPosition - sectionHeight / 100 * 10) {
                                $.fn.fullpage.setAllowScrolling(true);
                                $("#fullpage.fullpage-wrapper").removeClass('long-section');
                                sections[nextIndex.index].css('pointer-events', 'auto');
                                $(window).unbind('wheel');
                            }
                        } else  {
                            sectionScroll = sectionScroll + event.deltaY;
                            if (sectionScroll >= sectionStartPosition) {
                                sections[nextIndex.index].css('pointer-events', 'auto');
                                $('#fullpage').css('transform', 'translate3d(0px, -' + sectionStartPosition + 'px, 0px)');
                            } else {
                                $('#fullpage').css('transform', 'translate3d(0px, -' + sectionScroll + 'px, 0px)');
                            }
                        }
                    }
                    else  if (sections[nextIndex.index].find('.fp-scroller').css('transform') === 'matrix(1, 0, 0, 1, 0, ' + Math.round(sectionEnd) + ')') {
                        var delta = e.originalEvent.deltaY;
                        sections[nextIndex.index].css('pointer-events', 'none');
                        if (delta > 0) {
                            sectionScroll = sectionScroll + e.originalEvent.deltaY;
                            $('#fullpage').css('transform', 'translate3d(0px, -' + sectionScroll + 'px, 0px)');
                            if (sectionScroll > $(window).height() / 100 * 20 + sectionStartPosition) {
                                $.fn.fullpage.setAllowScrolling(true);
                                $("#fullpage.fullpage-wrapper").removeClass('long-section');
                                sections[nextIndex.index].css('pointer-events', 'auto');
                                $(window).unbind('wheel');
                            }
                        } else {
                            sectionScroll = sectionScroll + e.originalEvent.deltaY;
                            if (sectionScroll <= sectionStartPosition) {
                                sections[nextIndex.index].css('pointer-events', 'auto');
                                $('#fullpage').css('transform', 'translate3d(0px, -' + sectionStartPosition + 'px, 0px)');
                            } else {
                                $('#fullpage').css('transform', 'translate3d(0px, -' + sectionScroll + 'px, 0px)');
                            }
                        }

                    }

                });
            }
    },
    afterLoad: function (origin) {
        if (insta == false) {
            if (origin.anchor == 'contact') {
                var count = 1;
                var url = 'https://api.instagram.com/v1/users/314886036/?access_token=314886036.4dfcb3e.dc9b2db2c58e48349642da1ca0ac393b';
                var followers;
                $.ajax({
                    method: 'GET',
                    url: url,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function (response) {
                        followers = parseFloat(getRepString(response.data.counts.followed_by));
                    }
                });

                function getRepString(rep) {
                    rep = rep + '';
                    if (rep < 1000) return rep;
                    if (rep < 10000) return rep.charAt(0) + ',' + rep.substring(1);
                    return (rep / 1000).toFixed(rep % 1000 != 0);
                }
                countdown = setInterval(function () {
                    if (parseInt(count * 1000) <= parseInt(parseFloat(followers) * 1000)) {
                        $("span.countup").html(count + "k");
                        count += 0.1;
                        count = parseFloat(count.toFixed(1));
                        }
                    }, 3);
                }
            }
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if (isChrome)  {
                console.log("chrome");
            } else {
                $("video.section-outdoor-professional").attr('poster', 'img/s4-outdoor/pro_placeholder.jpg');
                $("#section-banner").css('background-image', 'url("img/s1-intro/reel_placeholder_dsk.jpg")');
                $("#section-about").css('background-image', 'url("img/s2-about/grain_texture.jpg")');
                $("#section-about .fp-scroller").css('background-image', 'url("img/s2-about/grain_texture.jpg")');
                $(".photo-man-section-about").css('background-image', 'url("img/s2-about/jamie_dsk.jpg")')
            }
        }
    });
    $( function() {
        if (isTouchCapable) {
            $.fn.fullpage.setResponsive(true);
        }
    });
    $.fn.fullpage.setAllowScrolling(true);

    if(isDesktop) {
        $('#goToAbout').click(function () {
            fullpage_api.moveTo('about', 1);
        });
    }

    var offsetSections = [];
    $('.section').each(function() {
        offsetSections.push($(this).offset().top)
    });
    console.log(offsetSections);
    $(window).bind('scroll', function (){
        if ($(window).width() <= 768) {
            $('.inner-content-section-banner-fixed').on("click", function () {
                $('.whole-text-left-logo').css('opacity', '1');
                setTimeout(function () {
                    $('.whole-text-left-logo').css('opacity', '0');
                }, 3000);
            });
            if ($(this).scrollTop() <= offsetSections[0]) {
                $('.whole-text-left-logo').css('opacity', '1');
                }
                else {
                    $('.whole-text-left-logo').css('opacity', '0');
            }
            if ($(this).scrollTop() > offsetSections[0] &&  $(this).scrollTop() < offsetSections[1] || $(this).scrollTop() > offsetSections[1] && $(this).scrollTop() < offsetSections[2]) {
                $('.change-color').css('opacity', '0');
                $('.current-color').css('opacity', '1');

                $('object.change-color').css('opacity', 0);
                $('object.current-color').css('opacity', 1);
                $('.whole-text-left-logo').css('color', '#fff');
            }
            if ($(this).scrollTop() > offsetSections[1] &&  $(this).scrollTop() < offsetSections[2] || $(this).scrollTop() > offsetSections[2] && $(this).scrollTop() < offsetSections[3]) {
            console.log('111')
                $('.change-color').css('opacity', '1');
                $('.current-color').css('opacity', '0');

                $('object.change-color').css('opacity', 1);
                $('object.current-color').css('opacity', 0);
                $('.whole-text-left-logo').css('color', '#333');
            }
            if ($(this).scrollTop() > offsetSections[2] &&  $(this).scrollTop() < offsetSections[3] || $(this).scrollTop() > offsetSections[3] && $(this).scrollTop() < offsetSections[4]) {
                $('.change-color').css('opacity', '0');
                $('.current-color').css('opacity', '1');

                $('object.change-color').css('opacity', 0);
                $('object.current-color').css('opacity', 1);
                $('.whole-text-left-logo').css('color', '#fff');
            }
            if ($(this).scrollTop() > offsetSections[3] &&  $(this).scrollTop() < offsetSections[4] || $(this).scrollTop() > offsetSections[4] && $(this).scrollTop() < offsetSections[5]) {
                $('.change-color').css('opacity', '0');
                $('.current-color').css('opacity', '1');

                $('object.change-color').css('opacity', 0);
                $('object.current-color').css('opacity', 1);
                $('.whole-text-left-logo').css('color', '#fff');
            }
            if ($(this).scrollTop() > offsetSections[4] && $(this).scrollTop() < offsetSections[5]) {
                $('.change-color').css('opacity', '1');
                $('.current-color').css('opacity', '0');

                $('object.change-color').css('opacity', 1);
                $('object.current-color').css('opacity', 0);
                $('.whole-text-left-logo').css('color', '#333');
            }
            if ($(this).scrollTop() > offsetSections[5]) {
                $('.change-color').css('opacity', '1');
                $('.current-color').css('opacity', '0');

                $('object.change-color').css('opacity', 1);
                $('object.current-color').css('opacity', 0);
                $('.whole-text-left-logo').css('color', '#333');
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
    $('.text-dots-block').click(function () {
        if ($('body').hasClass('opened--menu')) {
            $('body').removeClass('opened--menu');
            $(".cross-icon, .list-icon").fadeToggle(500);
            $('#menuToggle input, #menuToggle-mobile input').prop('checked', false);
        }
    });
    $("#menuToggle input , #menuToggle-mobile input").click(function(){
        $(".list-icon, .cross-icon").fadeToggle(500);
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

    $('.block-tools-section button').click(function () {
        if (!$(this).hasClass('active')) {
            $('.tools-section__image').animate({'opacity': '0'}, 200);
            var dataName = $(this).parent().data('name');
            if (dataName.toLowerCase() === 'camera') {
                animateArrow('16.66%')
                } else if (dataName.toLowerCase() === 'drone') {
                    animateArrow('50%')
                } else {
                    animateArrow('83.33%')
                }
            setTimeout(function () {
                $('.tools-section__image').removeClass('active');
                $('.icon-' + dataName).addClass('active').css('opacity', '0').animate({'opacity': '1'}, 200);
                $('.block-tools-section button').removeClass('active');
                $('.block-tools-section .block-tools-section__' + dataName + ' button').addClass('active');
            }, 200);
        }
        function animateArrow(prop) {
            $('#arrow-tools').animate({'left': prop}, 400);
        }
    });

    $('.outdoor-section-block button').click(function () {
        if (!$(this).hasClass('active')) {
            $('.outdoor-section__image').animate({'opacity': '0'}, 200);
            var dataName = $(this).parent().data('name');
            if (dataName.toLowerCase() === 'travel') {
                animateArrow('16.66%')
                } else if (dataName.toLowerCase() === 'outdoor') {
                    animateArrow('50%')
                    } else {
                        animateArrow('83.33%')
                    }
            setTimeout(function () {
                $('.outdoor-section__image').removeClass('active');
                $('.icon-' + dataName).addClass('active').css('opacity', '0').animate({'opacity': '1'}, 200);
                $('.outdoor-section-block button').removeClass('active');
                $('.outdoor-section-block .outdoor-section__' + dataName + ' button').addClass('active');
            }, 200);
        }
        function animateArrow(prop) {
            $('#arrow-skills').animate({'left': prop}, 400);
        }
    });

     function swapColor(white) {
        var color;
        var opacity;
        if (white) {
            color = '#fff';
            opacity = 0;
                $('.dark-arrow').css('transition', 'opacity .5s linear');
                $('.light-arrow').css('visibility', 'visible');
                $('.dark-arrow').css('visibility', 'hidden');
        } else {
            color = '#363531';
            opacity = 1;
                $('.light-arrow').css('transition', 'opacity .5s linear');
                $('.dark-arrow').css('visibility', 'visible');
                $('.light-arrow').css('visibility', 'hidden');
     }
        $('.dots-block-section-banner .text-dots-block:not(.active) .dot-section-banner').css('background-color', color);
        $('.text-near-dots').css('color', color);
        $('.dots-block-section-banner .dot-section-banner').css('border-color', color);
        $('#menuToggle .black-button').animate({opacity: opacity}, 700);
    }

    function bindTools() {
        $(document).bind('wheel', function (e) {
            var delta = e.originalEvent.deltaY;
            if (delta > 0) {
                if ($('#section-tools').hasClass('tools-camera')) {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', false);
                    $(document).unbind('wheel');
                }
                else if ($('#section-tools').hasClass('tools-dji')) {
                    changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', '3', false);
                    $(document).unbind('wheel');
                }
                else if ($('#section-tools').hasClass('tools-movi')) {
                    $(document).unbind('wheel');
                    $.fn.fullpage.setAllowScrolling(true);
                }
            } else {
                if ($('#section-tools').hasClass('tools-movi')) {
                    changeTool($('.icon-movi'), $('.icon-dji'), 'tools-movi', 'tools-dji', '2', true);
                    $(document).unbind('wheel');
                }
                else if ($('#section-tools').hasClass('tools-dji')) {
                    changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', '1', true);
                    $(document).unbind('wheel');
                }
                else if ($('#section-tools').hasClass('tools-camera')) {
                    $(document).unbind('wheel');
                    $.fn.fullpage.setAllowScrolling(true);
                }
            }
        });
    }

    function changeTool(current_icon, new_icon, current_class, new_class, number, up, fast) {
        if(fast) {
            speed = 300;
        } else {
            speed = 500;
        }
        $('.block-tools-section-tablet button').css('pointer-events', 'none');
        current_icon.animate({'opacity': '0'}, speed);
        setTimeout(function () {
            new_icon.css('display', 'flex').animate({'opacity': '1'}, speed);
        }, 0);
        if (up) {
            $('.tool-image.active').animate({'top': '100vh'}, speed).removeClass('active');
            $('.after-'+number)
                .animate({'top': '0'}, speed)
                .addClass('active');
        } else {
            $('.tool-image.active').animate({'top': '-100vh'}, speed).removeClass('active');
            $('.after-'+number)
                .animate({'top': '0'}, speed)
                .addClass('active');
        }
        $('#section-tools').removeClass(current_class).addClass(new_class).css('overflow', 'hidden');
        $(document).unbind('wheel');
        if (!isTouchCapable) {
            setTimeout(function () { bindTools(); }, speed*2);
        }
        setTimeout(function () {  $('.block-tools-section-tablet button').css('pointer-events', 'auto'); }, speed*2);
    }

    $('.block-tools-section-tablet button').bind('click', function () {
        if (!$(this).hasClass('active')) {
            $('.tools-tablet div').animate({'opacity': '0'}, 200);
            var dataName = $(this).parent().data('name');
            if (dataName.toLowerCase() === 'camera') {
                animateArrow('16.66%');
                if($('.block-tools-section-tablet button.active').parent().data('name').toLowerCase() === 'gimbal') {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', true,  true);
                    setTimeout( function() {
                    changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', '1', true, false);
                    }, 700);
                } else {
                    changeTool($('.icon-dji'), $('.icon-camera'), 'tools-dji', 'tools-camera', '1', true, false);
                }
            } else if (dataName.toLowerCase() === 'drone') {
                animateArrow('50%');
                if($('.block-tools-section-tablet button.active').parent().data('name').toLowerCase() === 'camera') {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', false, false);
                } else {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', true, false);
                }
            } else if (dataName.toLowerCase() === 'gimbal') {
                animateArrow('83.33%');
                if($('.block-tools-section-tablet button.active').parent().data('name').toLowerCase() === 'camera') {
                    changeTool($('.icon-camera'), $('.icon-dji'), 'tools-camera', 'tools-dji', '2', false, true);
                    setTimeout( function() {
                    changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', '3', false, false);
                    }, 700);
                } else {
                    changeTool($('.icon-dji'), $('.icon-movi'), 'tools-dji', 'tools-movi', '3', false, false);
                }
            }
            setTimeout(function () {
                $('.tools-tablet div').removeClass('active');
                $('.icon-' + dataName).addClass('active').css('opacity', '0').animate({'opacity': '1'}, 200);
                $('.block-tools-section-tablet button').removeClass('active');
                $('.block-tools-section-tablet .block-tools-section__' + dataName + ' button').addClass('active');
            }, 200);
        }
        function animateArrow(prop) {
            $('#arrow-tools-tablet').animate({'left': prop}, 400);
        }
    });
    function getRepString (rep) {
        rep = rep+'';
        if (rep < 1000) return rep;
        if (rep < 10000) return rep.charAt(0) + ',' + rep.substring(1);
        return (rep/1000).toFixed(rep % 1000 != 0);
    }
    function animateCounter() {
        var count = 1;
        var url = 'https://api.instagram.com/v1/users/314886036/?access_token=314886036.4dfcb3e.dc9b2db2c58e48349642da1ca0ac393b';
        var followers;
        $.ajax({
            method: 'GET',
            url: url,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (response) {
                followers = parseFloat(getRepString(response.data.counts.followed_by));
            }
        });

        function getRepString(rep) {
            rep = rep + '';
            if (rep < 1000) return rep;
            if (rep < 10000) return rep.charAt(0) + ',' + rep.substring(1);
            return (rep / 1000).toFixed(rep % 1000 != 0);
        }

        countdown = setInterval(function () {
            if (parseInt(count * 1000) <= parseInt(parseFloat(followers) * 1000)) {
                $("span.countup").html(count + "k");
                count += 0.1;
                count = parseFloat(count.toFixed(1));
            }
        }, 3);
    }
});