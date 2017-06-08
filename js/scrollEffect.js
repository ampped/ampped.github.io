function scrollEffect(){
	var lastScrollTop = 0;

	$(window).scroll(function(e){
		hideNav(e);
	});
	$('.projectBlock').scroll(function(e){
		hideNav(e);
	});

	function hideNav(e){
		var st = $(e.target).scrollTop();
		if(st > 100){
			$('.logo').attr('class', 'logo shrink');
		}
		else if(lastScrollTop > 100 && st < 100){
			$('.logo').attr('class', 'logo grow');
		}

	    if (st < lastScrollTop){
			$('nav').addClass('showing');
	    } else if(st > lastScrollTop && (st > ($('#work').position().top/2))) {
	       $('nav.showing').removeClass('showing');
	    }
	    lastScrollTop = st;
	}
}