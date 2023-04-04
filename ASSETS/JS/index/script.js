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

    $(document).ready(function() {
        // Add click event listener to all menu links
        $('.nav-menu a').on('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the target element's ID from the href attribute
            var targetId = $(this).attr('href');

            // Use the target ID to get the target element
            var $targetElement = $(targetId);

            // Smoothly scroll to the target element
            $('html, body').animate({
                scrollTop: $targetElement.offset().top
            }, 1000);
        });
    });
    $(document).ready(function() {
        var $iframe = $('#iframe-container iframe');
    
        // Smooth scrolling when hovering over the iframe
        $iframe.on('mouseover', function() {
            var iframeDoc = this.contentWindow.document;
            $('html, body', iframeDoc).stop().animate({
                scrollTop: $(iframeDoc).height()
            }, 2000);
        });
    
        // Smooth scrolling back to the top when not hovering
        $iframe.on('mouseout', function() {
            var iframeDoc = this.contentWindow.document;
            $('html, body', iframeDoc).stop().animate({
                scrollTop: 0
            }, 2000);
        });
    });
    
});