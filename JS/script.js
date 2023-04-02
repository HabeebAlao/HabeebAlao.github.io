$(document).ready(function() {

    // Show the button when the user has scrolled past 500 pixels
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top-btn').fadeIn();
        } else {
            $('#back-to-top-btn').fadeOut();
        }
    });

    $('#back-to-top-btn').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    $('#about > div > div > div > ul > li').on('click', function() {
        console.log("hello");
        // Remove the active class from any li elements that have it
        var curr = $('#about > div > div > div > ul > li.active').data("name");
        $('#about > div > div > div > ul > li.active').removeClass('active');

        $('#' + curr).hide();

        var next = $(this).data('name');
        $('#' + next).show();

        // Add the active class to the hovered li element
        $(this).addClass('active');
    });
});