
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


    $('.question').on('click', function () {
        $('#faqs > div > div.question.active').removeClass('active');
        $('.answer').hide();

        $(this).addClass('active');
        console.log(this);
        $($(this).next()).show();
        
    })
});