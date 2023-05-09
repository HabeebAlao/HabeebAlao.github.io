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

        //get whats cufrently active
        var curr = $('#about > div > div > div > ul > li.active').data("name");
        var curr_header = $('#about > div > div h4.active-header').data("name");

        //remove active and hide
        $('#about > div > div > div > ul > li.active').removeClass('active');
        $('#' + curr).hide();

        // hide and remove active
        $('#about > div > div h4.active-header').hide();
        $('#about > div > div h4.active-header').removeClass('active-header');

        
        // get what was just clicked and set to show
        var next = $(this).data('name');
        $('#' + next).show();
        console.log(next);
        $('#about > div > div h4[data-name="' + next + '"]').show();
        $('#about > div > div h4[data-name="' + next + '"]').addClass('active-header');

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

    if ($(window).width() <= 600) {
        $(window).scroll(function() {
          var scrollTop = $(this).scrollTop();
      
          // Parallax effect for the image
          $('.landing-img-holder img').css({
            'transform': 'translateY(' + scrollTop / 6 + 'px)'+'translateX(-2.4000000000000004vw)',
            'overflow-x': 'hidden'
          });
      
          // Parallax effect for the landing-info text
          $('#landing-info').css({
            'font-size': 30 + scrollTop / 20 + 'px',
            'overflow-x': 'hidden',
            'white-space': 'nowrap',
            'text-align': 'centre'
          });
      
          // Parallax effect for the landing-name
          $('#landing-name').css({
            'animation': 'landing-name 1s forwards',
            'animation-play-state': 'paused',
            'transform': 'translateY(' + scrollTop / 1.3 + 'px)',
            'font-size': 55 + scrollTop / 10 + 'px',
            'max-width': '100%',
            'overflow-x': 'hidden'
            
          });
      
          if (scrollTop > 100) {
            $('#landing-name').css({
              'animation-play-state': 'running',
              'overflow-x': 'hidden'
            });
          }
        });
      }
      
      
    
});