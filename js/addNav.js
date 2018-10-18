function setupWorkPage(){
	sessionSetup();
	window.onload = function(){
		addNav();
		addSquiggles();
	}
}

function addNav(){
	jQuery('body').prepend("<nav class=\"showing\"><img src=\"../../mobileMenu.svg\" class=\"mobileMenuButton\"><a href=\"../../index.html#about\">About</a><a href=\"../../index.html#work\">Work</a><a href=\"../../Pham_resume.pdf\" target=\"_blank\">Resume</a><a href=\"../../index.html#contact\">Contact</a></nav>");

	jQuery('nav').prepend("<a href=\"../../index.html\"><img src=\"../../logo.svg\" class=\"logo\"></a>");

	jQuery('nav').after("<div class=\"mobileNav\">"+
		"<img src=\"../../mobileClose.svg\" class=\"mobileClose\">"+
		"<img src=\"../../logo.svg\" class=\"logo\"><br>"+
		"<a href=\"../../index.html#about\">About</a><br><a href=\"../../index.html#work\">Work</a><br><a href=\"../../Pham_resume.pdf\" target=\"_blank\">Resume</a><br><a href=\"../../index.html#contact\">Contact</a><br>"+
	"</div>");
	
	jQuery('.mobileMenuButton').click(function(){
		jQuery('.mobileNav').addClass('showing');
	});
	jQuery('.mobileClose').click(function(){
		jQuery('.mobileNav').removeClass('showing');
	});
	jQuery('.mobileNav').children('a').click(function(){
		jQuery('.mobileNav').removeClass('showing');
	});

	var lastScrollTop = 0;

	jQuery(window).scroll(function(e){
		hideNav(e);
	});
    checkMobileNav();

	jQuery(window).resize(checkMobileNav);

	function checkMobileNav(){
	  if(jQuery(window).width() < 800){
	    jQuery(window).unbind('scroll');
	    jQuery('nav').addClass('showing');
	  }
	  else{
	    hideNav(window);
	    jQuery(window).scroll(function(e){
	      hideNav(e);
	    });
	  }
	}

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

function addSquiggles(){
	jQuery('h1').append('<br><svg xmlns="http://www.w3.org/2000/svg" width="208" height="14" viewBox="0 0 207.6 13.6"><style type="text/css">' +
		'.hSquiggle{fill:none;stroke:#AAEF25;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="hSquiggle" d="M206.6 1c-7.5 0-10.1 3.4-12.9 5.8 -3 2.6-5.3 5.8-12.9 5.8 -7.5 0-9.9-3.2-12.9-5.8 -2.8-2.4-5.3-5.8-12.9-5.8 -7.5 0-9.9 3.2-12.9 5.8 -2.8 2.4-5.3 5.8-12.9 5.8 -7.5 0-10.1-3.4-12.9-5.8 -3-2.6-5.3-5.8-12.9-5.8S93.8 4.4 91 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C62.5 4.4 59.9 1 52.4 1S42.3 4.4 39.6 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C11.1 4.4 8.5 1 1 1"/></svg>');
	jQuery('h3').each(function(){
		jQuery(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" width="131" height="24" viewBox="0 0 130.5 13.6"><style type="text/css">'+  
		'.hSquiggle{fill:none;stroke:#AAEF25;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="hSquiggle" d="M129.5 12.6c-7.5 0-10.1-3.4-12.9-5.8 -3-2.6-5.3-5.8-12.9-5.8S93.8 4.4 91 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C62.5 4.4 59.9 1 52.4 1S42.3 4.4 39.6 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C11.1 4.4 8.5 1 1 1"/></svg>');
		jQuery(this).append('<svg xmlns="http://www.w3.org/2000/svg" width="131" height="24" viewBox="0 0 130.5 13.6"><style type="text/css">'+  
		'.hSquiggle{fill:none;stroke:#AAEF25;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="hSquiggle" d="M1 12.6c7.5 0 10.1-3.4 12.9-5.8 3-2.6 5.3-5.8 12.9-5.8s10.1 3.4 12.9 5.8c3 2.6 5.3 5.8 12.9 5.8s9.9-3.2 12.9-5.8C68 4.4 70.6 1 78.1 1S88.2 4.4 91 6.8c3 2.6 5.3 5.8 12.9 5.8s9.9-3.2 12.9-5.8C119.5 4.4 122 1 129.5 1"/></svg>');
	});
}

function sessionSetup(){
	if(typeof(Storage) !== "undefined"){
		if(!sessionStorage.hotspotSeen){
			sessionStorage.setItem("hotspotSeen", "false");
		}
	}
}