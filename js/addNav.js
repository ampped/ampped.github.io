function addNav(){
	jQuery('body').prepend("<nav class=\"showing\"><a href=\"../../index.html#about\">About</a><a href=\"../../index.html#work\">Work</a><a href=\"Pham_resume.pdf\" target=\"_blank\">Resume</a><a href=\"../../index.html#contact\">Contact</a></nav>");

	jQuery('nav').prepend("<a href=\"../../index.html\"><svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"717\" height=\"196\" viewBox=\"0 0 717 196\">" +
		"<path class=\"logoPath\" d=\"M297.9 92.3l-86.4 86.4c1.3 1.3 3 2.1 4.9 2.1h165.1c2.6 0 4.7-2.1 4.7-4.7V22c0-8-7.8-10.5-12.3-6L297.9 92.3\"/>" +
		"<path class=\"logoPath\" d=\"M465.7 13.8c6.7 0 13.1 0 20.2 0 35.6 0 64.4 27.2 64.4 60.8s-28.8 60.8-64.4 60.8c-7.1 0-13.5 0-20.2 0\"/>" +
		"<path class=\"logoPath\" d=\"M465.7 13.8h-37.4c-3.8 0-6.8 3-6.8 6.8v153.3c0 3.8 3 6.8 6.8 6.8h30.6c3.8 0 6.8-3 6.8-6.8V13.8z\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 13.8c6.7 0 13.1 0 20.2 0 35.6 0 64.4 27.2 64.4 60.8s-28.8 60.8-64.4 60.8c-7.1 0-13.5 0-20.2 0\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 13.8h-37.4c-3.8 0-6.8 3-6.8 6.8v153.3c0 3.8 3 6.8 6.8 6.8h30.6c3.8 0 6.8-3 6.8-6.8V13.8z\"/>" +
		"<path class=\"logoPath\" d=\"M90.6 16.4L13.5 170.6c-2.3 4.7 1.1 10.1 6.3 10.1H174c5.2 0 8.6-5.5 6.3-10.1L103.1 16.4C100.6 11.2 93.2 11.2 90.6 16.4z\"/>" +
		"<path class=\"logoPath\" d=\"M75.9 112.1l-63.1 62.4c0.4 3.4 3.2 6.3 7 6.3h135.4l-69.5-68.6C83 109.4 78.7 109.4 75.9 112.1z\"/>" +
		"<path class=\"logoPath\" d=\"M297.7 92.1l-76.2-76.2c-4.4-4.4-11.9-1.3-11.9 4.9v152.9c0 3.9 3.1 7 7 7\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 110c9.3-27 42.3-35.8 42.3-20.5 0 5.4-16.6 12-16 22.7 0.5 9.2 16.2 8.5 9.4 21.3\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 79.3c18.2-11.6 35.5-16.8 46.2-6.4 5.9 5.8 11.9 18.8 5.8 30.9 -3.3 6.7-8.4 16.2-3.3 25.2\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 58.5c13.5-11.1 35.2-15 51.4-5.7 10.7 6.2 20 26.3 13.9 43.3 -3.9 10.7-7.5 18.8-7.9 28.1\"/>" +
		"<path class=\"logoPath\" d=\"M619.6 37.7c16.4-11.6 39.9-13.8 56.7-2.3 21.5 14.6 26.3 37.3 23.3 61.9\"/>" +
		"<path class=\"logoPath\" d=\"M24.4 180.7c11.3-15.7 26.6-26.8 38.2-18.3 11.6 8.5 18.8 16.5 21.5 18.3\"/>" +
		"<path class=\"logoPath\" d=\"M25.7 161.7c17.6-12.2 23.4-17 33.4-12.2s26.6 27.7 49.4 31.2\"/>" +
		"<path class=\"logoPath\" d=\"M65.9 121.9c15.5-1.7 21.6 6.3 35 22.7s27.4 25.5 45.4 36.1\"/>" +
		"<path class=\"logoPath\" d=\"M55.9 131.9c14.1 1.7 22.7 4.4 27.8 12.9 6.6 10.8 1.9 16.9 14.1 21.6 10.4 4.1 17.5 4.8 25.9 9.3 4.5 2.4 7.3 4.9 7.3 4.9\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 170.1c12.1-19.5 33.6-14.4 44.2-13.8\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 152.8c12.1-19.5 35.2-13 44.2-7.4\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 133.7c1-14.8 12.6-13.6 16.9-11.2 8.4 4.7 8.6 5 13.4 5.2 5 0.2 8-8.1 13.9-7.8\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 89.9c10.7-1.8 19.8 13.7 27.2 12.2 7.4-1.5 11.4-5.6 17-6.1\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 70.2c16.4-2.4 19.8 6.7 28.9 7.8 9.1 1.1 12.2-0.1 15.3-2\"/>" +
		"<path class=\"logoPath\" d=\"M421.5 47.5c15.8-0.1 31.9 13.7 44.2 15\"/>" +
		"<path class=\"logoPath\" d=\"M422.5 17c23.8 0.6 34.8 13.7 43.2 24.5\"/>" +
		"<path class=\"logoPath\" d=\"M315.4 180.7c18.4-35.9 34.9-59.4 52.9-41s2.9 41 2.9 41\"/>" +
		"<path class=\"logoPath\" d=\"M286.4 180.7c18.6-31.8 50-60.7 72.3-62 15.4-0.8 27.6 16.6 27.6 16.6\"/>" +
		"<path class=\"logoPath\" d=\"M258.5 180.7c18.8-10.6 37.1-28.9 47.5-41 28.2-32.7 44.3-54 60.2-52.1 15.9 1.8 20.1 22.5 20.1 22.5\"/>" +
		"<path class=\"logoPath\" d=\"M233.2 180.7c6.4-1.5 26.9-10.6 44.2-25.5 22-18.9 56.9-79 82.6-85.5 17.2-4.3 26.4 12.4 26.4 12.4\"/>" +
		"<path class=\"logoPath\" d=\"M233.2 157c15.4 1.8 24.5-0.4 36.8-11.6 14.8-13.5 54.3-68.5 60-85.2\"/>" +
		"<path class=\"logoPath\" d=\"M347.4 42.8c12-8.4 28.3-11 38.9 4.7\"/>" +
		"<path class=\"logoPath\" d=\"M368.4 21.7c10.5-0.1 17.9 2.8 17.9 10\"/>" +
	"</svg></a>");

	var lastScrollTop = 0;

	jQuery(window).scroll(function(e){
		hideNav(e);
	});

	function hideNav(e){
		var st = jQuery(e.target).scrollTop();

	    if (st < (lastScrollTop - 5)){
			jQuery('nav').addClass('showing');
	    } else if(st > (lastScrollTop + 5)){
	       jQuery('nav.showing').removeClass('showing');
	    }
	    lastScrollTop = st;
	}

	jQuery('.project').hover(function(){
		this.firstChild.play();
	}, function(){
		this.firstChild.pause();
	});
}