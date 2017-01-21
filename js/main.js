$(document).ready(function() {
	'use strict';

	fixSizes();

	// Loader
	$('.loader-content').delay(2000).fadeToggle('slow');
	$('.loader').delay(2500).fadeOut('slow', function() {
		$('body').css('overflow', 'auto');
	});

	// Hash links
	$('a[href^="#"]').on('click',function(e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 150
	    }, 400, 'swing', function() {
	        window.location.hash = target;
	    });
	});

// safe reference. We dont want this the be done every scrolled pixel!
// (Courtesy: Martijn :  http://stackoverflow.com/users/2519416/martijn)
$(window).on("scroll", function() {
        if($(window).scrollTop() > 650) {
            $("header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });

	// Works "hover" effect
	$('.work-item').bind('mouseenter mouseleave', function() {
		$(this).children('.work-item-content').toggleClass('visually-showed');
	});

	// Remodal events
	$(document).on('opening', '.remodal', function() {});
	$(document).on('opened', '.remodal', function() {});
	$(document).on('closing', '.remodal', function() {});
	$(document).on('closed', '.remodal', function() {});

	//Get in touch effects
	$('#contact a').on('mouseenter mouseleave', function() {
		if ($(this).hasClass('email')) {
			$('#contact').find('h1').toggleClass('email-color');
		} else if ($(this).hasClass('twitter')) {
			$('#contact').find('h1').toggleClass('twitter-color');
		} else if ($(this).hasClass('instagram')) {
			$('#contact').find('h1').toggleClass('instagram-color');
		} else if ($(this).hasClass('dribbble')) {
			$('#contact').find('h1').toggleClass('dribbble-color');
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
