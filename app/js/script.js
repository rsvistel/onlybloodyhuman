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
});

