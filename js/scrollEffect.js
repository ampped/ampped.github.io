function scrollEffect(){
	var lastScrollTop = 0;

	$(window).scroll(function(e){
		hideNav(e);
	});
	$('.projectBlock').scroll(function(e){
		hideNav(e);
	});

	function hideNav(e){
		console.dir(e);
		var st = $(e.target).scrollTop();
	    if (st < lastScrollTop){
			$('nav').addClass('showing');
	    } else {
	       $('nav.showing').removeClass('showing');
	    }
	    lastScrollTop = st;
	}
}