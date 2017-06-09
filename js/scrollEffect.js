function scrollEffect(){
	var lastScrollTop = 0;

	jQuery(window).scroll(function(e){
		hideNav(e);
	});
	jQuery('.projectBlock').scroll(function(e){
		hideNav(e);
	});

	function hideNav(e){
		var st = jQuery(e.target).scrollTop();
		if(st > 100){
			jQuery('.logo').attr('class', 'logo shrink');
		}
		else if(lastScrollTop > 100 && st < 100){
			jQuery('.logo').attr('class', 'logo grow');
		}

	    if (st < lastScrollTop){
			jQuery('nav').addClass('showing');
	    } else if(st > lastScrollTop && (st > (jQuery('#work').position().top/2))) {
	       jQuery('nav.showing').removeClass('showing');
	    }
	    lastScrollTop = st;
	}
}