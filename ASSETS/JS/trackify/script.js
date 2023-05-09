
$(document).ready(function() {
    $('.nav-menu a').on('click', function(event) {

        event.preventDefault();
        var targetId = $(this).attr('href');
        var $targetElement = $(targetId);

        $('html, body').animate({
            scrollTop: $targetElement.offset().top
        }, 2000);
    });


    $('.question').on('click', function () {
        $('#faqs > div > div.question.active').removeClass('active');
        $('.answer').hide();

        $(this).addClass('active');
        console.log(this);
        $($(this).next()).slideDown( "slow");
        
    })
    
});