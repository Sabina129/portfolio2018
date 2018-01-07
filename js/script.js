$(document).ready(function () {
    $("#menu").click(function () {
        $("#nav-open").slideDown(750);
    });
    
    $("#close-nav").click(function () {
        $("#nav-open").slideUp(750);
    });
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
        $('.nav-wrapper').css('background-color','white');
        $('.nav-wrapper').css('border-bottom','1px solid #f0f0f0');
    }
    else {
        $('.nav-wrapper').css('background-color','rgba(255,255,255,0)');
        $('.nav-wrapper').css('border-bottom','1px solid rgba(255,255,255,0)');

    }
});
