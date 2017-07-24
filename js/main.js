$(document).ready(function() {
    'use strict';

    fixSizes();

    // Loader
    $('.loader-content').delay(2000).fadeToggle('slow');
    $('.loader').delay(2500).fadeOut('slow', function() {
        $('body').css('overflow', 'auto');
    });

    // write message in c0nsol3 :)
	console.log("mysite@axelvf:~$");
	console.log("mysite@axelvf:~$");
	console.log("mysite@axelvf:~$");
	console.log("mysite@axelvf:~$ What are you doing here?");
	console.log("mysite@axelvf:~$");

    // Hash links
 $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // safe reference. We dont want this the be done every scrolled pixel!
    // (Courtesy: Martijn :  http://stackoverflow.com/users/2519416/martijn)
    $(window).on("scroll", function() {

        if ($(window).scrollTop() > 150) {
            $("#home h1").addClass("show");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#home h1").removeClass("show");
        }
    });

    //Get in touch effects
    $('#contact a').on('mouseenter mouseleave', function() {
        if ($(this).hasClass('email')) {
            $('#contact').find('h1').toggleClass('email-color');
        } else if ($(this).hasClass('twitter')) {
            $('#contact').find('h1').toggleClass('twitter-color');
        } else if ($(this).hasClass('github')) {
            $('#contact').find('h1').toggleClass('github-color');
        } else if ($(this).hasClass('linkedin')) {
            $('#contact').find('h1').toggleClass('linkedin-color');
        };
    });

    // Scroll reveal
    var config = {
        mobile: false
    }

    window.sr = new scrollReveal(config);

});

$(window).resize(function() {
    'use strict'

    fixSizes();
});

function fixSizes() {
    // Home position
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    $('#home').css('height', windowHeight);
    $('#home h1').each(function() {
        $(this).css('padding-bottom', ($(this).parent().height() - $(this).height()) / 2);
    });
};

 // Change header nav on scroll

$(function(){
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('section').each(function() {
        var topDistance = $(this).offset().top - $('header').outerHeight();
        if ( (topDistance) < scrollTop ) {
            $('.menu a').css('color',$(this).attr('data-color'));
        }
    });
});
})