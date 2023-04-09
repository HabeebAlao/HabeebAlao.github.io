$(document).ready(function() {

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

        var curr = $('#about > div > div > div > ul > li.active').data("name");
        $('#about > div > div > div > ul > li.active').removeClass('active');

        $('#' + curr).hide();

        var next = $(this).data('name');
        $('#' + next).show();


        $(this).addClass('active');
    });

    $(document).ready(function() {

        $('.nav-menu a').on('click', function(event) {

            event.preventDefault();

            var targetId = $(this).attr('href');

            var $targetElement = $(targetId);

            $('html, body').animate({
                scrollTop: $targetElement.offset().top
            }, 1000);
        });
    });
    $(document).ready(function() {
        var $iframe = $('#iframe-container iframe');
    
        $iframe.on('mouseover', function() {
            var iframeDoc = this.contentWindow.document;
            $('html, body', iframeDoc).stop().animate({
                scrollTop: $(iframeDoc).height()
            }, 4000);
        });
    
        $iframe.on('mouseout', function() {
            var iframeDoc = this.contentWindow.document;
            $('html, body', iframeDoc).stop().animate({
                scrollTop: 0
            }, 4000);
        });
    });
    
});