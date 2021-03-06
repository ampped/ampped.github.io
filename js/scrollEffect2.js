function scrollEffect(){
	var lastScrollTop = 0;

	jQuery(window).scroll(function(e){
    adjustNav(e);
	});

  checkMobileNav();

	/*jQuery('.projectBlock').scroll(function(e){
		hideNav(e);
	});*/

  jQuery(window).resize(checkMobileNav);

  function checkMobileNav(){
    if(jQuery(window).width() < 800){
      jQuery(window).unbind('scroll');
      jQuery('nav').addClass('showing solidBG');
    }
    else{
      adjustNav(window);
      jQuery(window).scroll(function(e){
        adjustNav(e);
      });
    }
  }

  function adjustNav(e){
    hideNav(e);

    if(jQuery(e.target).scrollTop() > 600){
      jQuery('nav').addClass('solidBG');
    }
    else{
      jQuery('nav').removeClass('solidBG');
    }
  }

	function hideNav(e){
		var st = jQuery(e.target).scrollTop();
		/*if(st > 100){
			jQuery('.logo').attr('class', 'logo shrink');
		}
		else if(lastScrollTop > 100 && st < 100){
			jQuery('.logo').attr('class', 'logo grow');
		}*/

	    if (st < lastScrollTop){
			jQuery('nav').addClass('showing');
	    } else if(st > lastScrollTop && (st > (jQuery('#work').position().top/2))) {
	       jQuery('nav.showing').removeClass('showing');
	    }
	    lastScrollTop = st;
	}

// Select all links with hashes
jQuery('nav>a')
  // Remove links that don't actually link to anything
  .not('[href="resume.pdf"]')
  .click(function(event) {

    if(jQuery('.projectBlock showing')){
    jQuery('.projectBlock').removeClass('showing');
      setTimeout(function(){
      jQuery('body').css('overflow-y', 'scroll');
      }, 500);
  }
    // On-page links

    //code modified from https://css-tricks.com/snippets/jquery/smooth-scrolling/
      // Figure out element to scroll to
      var target = jQuery(this).attr('data-link');
      target = jQuery(target);
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 600, 'swing', function() {
          // Callback after animation
          // Must change focus!
          var jQuerytarget = jQuery(target);
          jQuerytarget.focus();
          if (jQuerytarget.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            jQuerytarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            jQuerytarget.focus(); // Set focus again
          };
        });
      }
  });


// Select all links with hashes
jQuery('.mobileNav>a')
  // Remove links that don't actually link to anything
  .not('[href="resume.pdf"]')
  .click(function(event) {

  	if(jQuery('.projectBlock showing')){
		jQuery('.projectBlock').removeClass('showing');
	    setTimeout(function(){
			jQuery('body').css('overflow-y', 'scroll');
	    }, 500);
	}
    // On-page links

    //code modified from https://css-tricks.com/snippets/jquery/smooth-scrolling/
      // Figure out element to scroll to
      var target = jQuery(this).attr('data-link');
      target = jQuery(target);
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 600, 'swing', function() {
          // Callback after animation
          // Must change focus!
          var jQuerytarget = jQuery(target);
          jQuerytarget.focus();
          if (jQuerytarget.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            jQuerytarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            jQuerytarget.focus(); // Set focus again
          };
        });
      }
  });
}