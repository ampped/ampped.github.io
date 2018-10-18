//written by Amy Pham
function setupWFDisplay(wfSrcs, pageNames, pageDescs, hotspots, hsDescs){
	console.dir(hsDescs);

	for(var i = 0; i < wfSrcs.length; i++){
		jQuery('#wireframes').append('<div class="wf"><div class="pageDesc"><h4>' + pageNames[i] + '</h4>' + pageDescs[i] + '</div><div class="wfImg"><img src="'+wfSrcs[i]+'" onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\">' + hotspots[i] + '<div class="desc"></div></div>');
	}

	//append hotspot popup
	console.log(sessionStorage.getItem('hotspotSeen'));
	jQuery('.wfImg').append('<div class="lookAtMe">Rollover for more info!</div>').each(function(){
		var thisWF = jQuery(this);

		var hs1 = thisWF.find('.hotspot:first-of-type');

		var viewboxSpecs = thisWF.find('svg').get(0).getAttribute('viewBox').split(' ');
		console.dir(viewboxSpecs);		
		thisWF.find('.lookAtMe').css('left', ((parseInt(hs1.attr('cx'))/parseInt(viewboxSpecs[2])*100).toFixed(2)) + '%');
		thisWF.find('.lookAtMe').css('top', ((parseInt(hs1.attr('cy'))/parseInt(viewboxSpecs[3])*100).toFixed(2))+ '%');

		//position at the farthest right hotspot
		/*
		var farRight = "";
		var amtRight;
		amtRight = 0;
		jQuery(this).find('.hotspot').each(function(){
			if(jQuery(this).attr('cx') > amtRight){
				farRight = this;
				amtRight = jQuery(this).attr('cx');
			}
		});
		console.log(((parseInt(amtRight)/1020)*100).toFixed(2));
		jQuery(this).find('.lookAtMe').css('left', ((parseInt(amtRight)/1020)*100).toFixed(2) + '%');
		jQuery(this).find('.lookAtMe').css('top', ((parseInt(jQuery(farRight).attr('cy'))/638)*100).toFixed(2)+ '%');*/
	});

	//if session is continued, hotspot popup should be hidden
	if(sessionStorage.getItem("hotspotSeen") == "true"){
		jQuery('.lookAtMe').addClass('seen');
	}

	jQuery('.hotspot').each(function(){
		jQuery(this).clone().insertAfter(this).attr('class', 'hotspotClone');
	});

	jQuery('.hotspot').hover(function(){
		if(sessionStorage.getItem("hotspotSeen") == "false"){
			sessionStorage.setItem("hotspotSeen", "true");
			jQuery('.lookAtMe').addClass('seen');
		}

		//select hotspot and change classes
		var i = jQuery(this).index('.hotspot');
		selectItem('desc', i + 1);
		jQuery('.hotspot.selected').attr('class', 'hotspot');
		jQuery(this).attr('class', 'hotspot selected');
		jQuery('.hotspotClone.selected').attr('class', 'hotspotClone');
		jQuery('.hotspotClone:eq(' + i + ')').attr('class', 'hotspotClone selected');

		//change hotspot description box
		var selectedDesc = jQuery(this).parent().parent().next();
		selectedDesc.html('<p>' + hsDescs[jQuery(this).closest('.wf').index('.wf')][jQuery(this).index()/2] + '</p>');
		selectedDesc.attr('class', 'desc selected');
	});

	jQuery('.wfImg').mouseleave(function(){
		jQuery('.desc.selected').attr('class', 'desc');
		jQuery('.hotspot.selected').attr('class', 'hotspot');
		jQuery('.hotspotClone.selected').attr('class', 'hotspotClone');
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
			if(compSrcs[i].includes('mobile')){
				jQuery('#comps').append('<img src="'+compSrcs[i]+'" class="compImg compMobile" style="box-shadow:none">');
			}
			else{
				jQuery('#comps').append('<img src="'+compSrcs[i]+'" class="compImg">');
			}
		}
		else{
			if(compSrcs[i].includes('mobile')){
				jQuery('#comps').append('<video class="compImg compMobile" style="box-shadow: none;" autoplay loop><source src=\"' + compSrcs[i] + '.webm\" type="video/webm"><source src=\"' + compSrcs[i] + '.mp4\" type="video/mp4"></video>');
			}
			else{
				jQuery('#comps').append('<video class="compImg" autoplay loop><source src=\"' + compSrcs[i] + '.webm\" type="video/webm"><source src=\"' + compSrcs[i] + '.mp4\" type="video/mp4"></video>');
			}
		}
	}
}

function setupFull(){
	jQuery('#comps').append('<div class="fullComp"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="currentFull"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="prevFullComp"><img onerror=\"this.src=(this.src.replace(\'webp\',\'png\'));this.onerror=null;\" src="" class="nextFullComp"><div class="prevFull"></div><div class="nextFull"></div><svg class="control-svg control-close" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><line x1="39" y1="33" x2="3" y2="69"/><line x1="3" y1="33" x2="39" y2="69"/></svg></div>');

	jQuery('.compImg').css('cursor', 'pointer');
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
		currentFull = jQuery(this).index('.compImg');
		openFull();
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