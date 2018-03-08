//written by Amy Pham

function addSquiggles(){
	jQuery('h1').append('<br><svg xmlns="http://www.w3.org/2000/svg" width="208" height="14" viewBox="0 0 207.6 13.6"><style type="text/css">' +
		'.st0{fill:none;stroke:#D1F084;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="st0" d="M206.6 1c-7.5 0-10.1 3.4-12.9 5.8 -3 2.6-5.3 5.8-12.9 5.8 -7.5 0-9.9-3.2-12.9-5.8 -2.8-2.4-5.3-5.8-12.9-5.8 -7.5 0-9.9 3.2-12.9 5.8 -2.8 2.4-5.3 5.8-12.9 5.8 -7.5 0-10.1-3.4-12.9-5.8 -3-2.6-5.3-5.8-12.9-5.8S93.8 4.4 91 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C62.5 4.4 59.9 1 52.4 1S42.3 4.4 39.6 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C11.1 4.4 8.5 1 1 1"/></svg>');
	jQuery('h3').each(function(){
		jQuery(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" width="131" height="24" viewBox="0 0 130.5 13.6"><style type="text/css">'+  
		'.st0{fill:none;stroke:#D1F084;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="st0" d="M129.5 12.6c-7.5 0-10.1-3.4-12.9-5.8 -3-2.6-5.3-5.8-12.9-5.8S93.8 4.4 91 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C62.5 4.4 59.9 1 52.4 1S42.3 4.4 39.6 6.8c-3 2.6-5.3 5.8-12.9 5.8s-9.9-3.2-12.9-5.8C11.1 4.4 8.5 1 1 1"/></svg>&nbsp;&nbsp;&nbsp;');
		jQuery(this).append('&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="131" height="24" viewBox="0 0 130.5 13.6"><style type="text/css">'+  
		'.st0{fill:none;stroke:#D1F084;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}'+
	'</style><path class="st0" d="M1 12.6c7.5 0 10.1-3.4 12.9-5.8 3-2.6 5.3-5.8 12.9-5.8s10.1 3.4 12.9 5.8c3 2.6 5.3 5.8 12.9 5.8s9.9-3.2 12.9-5.8C68 4.4 70.6 1 78.1 1S88.2 4.4 91 6.8c3 2.6 5.3 5.8 12.9 5.8s9.9-3.2 12.9-5.8C119.5 4.4 122 1 129.5 1"/></svg>');
	});
}

function setupWFDisplay(wfSrcs){
	jQuery('.pages>li').click(function(){
		jQuery('.pages>.selected').removeClass('selected');
		jQuery(this).addClass('selected');

		selectItem('hotspots', jQuery(this).index());
		selectItem('pageDesc', jQuery(this).index());

		jQuery('.wf>img').attr('src', wfSrcs[jQuery(this).index()]);
	})

	jQuery('.hotspot').hover(function(){
		selectItem('desc', jQuery(this).index('.hotspot') + 1);
		jQuery('.hotspot.selected').attr('class', 'hotspot');
		jQuery(this).attr('class', 'hotspot selected');
	});

	jQuery('.wf').mouseleave(function(){
		selectItem('desc', 0);
		jQuery('.hotspot.selected').attr('class', 'hotspot');
	});
}

//helper function to add the selected class to the actual selected object
function selectItem(className, i){
	jQuery('.' + className + '.selected').removeClass('selected');
	jQuery('.' + className + ':eq(' + i + ')').addClass('selected');
}


//create comp images
var compSrcs = "";
//var currentFull = 0;

function createComps(compSrcs){
	compSrcs = compSrcs;
	for(var i = 0; i < compSrcs.length; i++){
		//compSrcs[currentFull] = '' + compSrcs[currentFull];
		var fileFormat = compSrcs[i].split(".")[1];
		if(fileFormat == 'png' || fileFormat == 'webp'){
			jQuery('#comps').append('<img src="'+compSrcs[i]+'" class="compImg">');
		}
		else{
			jQuery('#comps').append('<video class="compImg" autoplay loop><source src=\"' + compSrcs[i] + '.webm\" type="video/webm"><source src=\"' + compSrcs[i] + '.mp4\" type="video/mp4"></video>');
		}
	}

	jQuery('#comps').append('<div class="fullComp"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="currentFull"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="prevFullComp"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="nextFullComp"><div class="prevFull"></div><div class="nextFull"></div><svg class="control-svg control-close" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><line x1="39" y1="33" x2="3" y2="69"/><line x1="3" y1="33" x2="39" y2="69"/></svg></div>')
	setupFull();
}

function setupFull(){
	var currentFull = 0;

	//set up close button
	jQuery('.control-close').click(function(){
		enableScrolling();
		jQuery('.fullComp').removeClass('showing');
	});

	//set up fullComp next button
	jQuery('.nextFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + 1) % compSrcs.length;
		nextFullComp();
	});

	//set up fullComp back button
	jQuery('.prevFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + compSrcs.length - 1) % compSrcs.length;
		prevFullComp();
	});

	//open fullComp on compImg click
	jQuery('.compImg').click(function(){
		//currentFull = jQuery(this).index('.compImg');
		//openFull();
	});

	function setUpControls(){
		jQuery('.fullComp').scrollTop(0);
		var fullHeight = jQuery('.currentFull').css('height');
		jQuery('.nextFull').css('height', fullHeight);
		jQuery('.prevFull').css('height', fullHeight);
	}

	function openFull(){
		disableScroll();
		jQuery('nav.showing').removeClass('showing');
		jQuery('.currentFull').attr('src', compSrcs[currentFull%compSrcs.length]);
		jQuery('.prevFullComp').attr('src', compSrcs[(currentFull-1 + compSrcs.length)%compSrcs.length]);
		jQuery('.nextFullComp').attr('src', compSrcs[(currentFull+1)%compSrcs.length]);
		jQuery('.fullComp').addClass('showing');	
		setUpControls();
	}

	//move to a later page
	function nextFullComp(){
		if(jQuery('.prevFullComp'))
			jQuery('.prevFullComp').remove();

		jQuery('.currentFull').addClass('prevFullComp').removeClass('currentFull');
		jQuery('.nextFullComp').addClass('currentFull').removeClass('nextFullComp');
		
		jQuery('.fullComp').append('<img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src=\"' + compSrcs[(currentFull+1)%compSrcs.length] + '\" class="nextFullComp">');
		setUpControls();
	}

	//move to a previous page
	function prevFullComp(){
		if(jQuery('.nextFullComp'))
			jQuery('.nextFullComp').remove();

		jQuery('.currentFull').addClass('nextFullComp').removeClass('currentFull');
		jQuery('.prevFullComp').addClass('currentFull').removeClass('prevFullComp');

		jQuery('.fullComp').append('<img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src=\"' + compSrcs[(currentFull-1 + compSrcs.length)%compSrcs.length] + '\" class="prevFullComp">');
		setUpControls();
	}
}