function setupWorkPage(){
	sessionSetup();
	window.onload = function(){
		addNav();
		addSquiggles();
		addLoader();
	}
}

function addNav(){
	jQuery('body').prepend("<nav class=\"showing\"><img src=\"../../mobileMenu.svg\" class=\"mobileMenuButton\"><a href=\"../../index.html#work\">Work</a><a href=\"../../Pham_resume.pdf\" target=\"_blank\">Resume</a><a href=\"../../index.html#contact\">Contact</a></nav>");

	jQuery('nav').prepend("<a href=\"../../index.html\"><img src=\"../../logo.svg\" class=\"logo\"></a>");

	jQuery('nav').after("<div class=\"mobileNav\">"+
		"<img src=\"../../mobileClose.svg\" class=\"mobileClose\">"+
		"<img src=\"../../logo.svg\" class=\"logo\"><br />"+
		"<a href=\"../../index.html#work\">Work</a><br /><a href=\"../../Pham_resume.pdf\" target=\"_blank\">Resume</a><br /><a href=\"../../index.html#contact\">Contact</a><br />"+
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
}

function addSquiggles(){
	var squiggleSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 151 18"><path class="hSquiggle" d="M148 3c-14.5 0-14.5 10.6-29 10.6C104.5 13.6 104.5 3 90 3 75.5 3 75.5 13.6 61 13.6 46.5 13.6 46.5 3 32 3 17.5 3 17.5 13.6 3 13.6"/></svg>';

	var squiggleReverseSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 151 18"><path class="hSquiggle" d="M3 3c14.5 0 14.5 10.6 29 10.6C46.5 13.6 46.5 3 61 3c14.5 0 14.5 10.6 29 10.6 14.5 0 14.5-10.6 29-10.6 14.5 0 14.5 10.6 29 10.6"/></svg>'

	jQuery('h1').append(squiggleSVG);
	jQuery('h3').each(function(){
		jQuery(this).prepend(squiggleReverseSVG);
		jQuery(this).append(squiggleSVG);
	});
}

function sessionSetup(){
	if(typeof(Storage) !== "undefined"){
		if(!sessionStorage.hotspotSeen){
			sessionStorage.setItem("hotspotSeen", "false");
		}
	}
}