//written by Amy Pham

function createSlider(imgs){
	var imgSrcs = imgs;
	var current = 0;
	var currentFull = 0;

	//create html elements of slider
	jQuery('.slider').append('<img src=\"' + imgSrcs[current] + '\" class="comp currentComp">');
	jQuery('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp nextComp">');
	jQuery('.slider').append('<img src=\"' + imgSrcs[(current-1+imgSrcs.length)%imgSrcs.length] + '\" class="comp prevComp">');
	jQuery.each(imgSrcs, function(){
		jQuery('.pagination').append('<button class="control-page"></button>');
	});
	jQuery('.control-page:first').attr('id', 'selected-page');

	//set up next button
	jQuery('.control-next').click(function(){
		if(current == imgSrcs.length-1)
			current = 0;
		else
			current++;
		nextComp();
		jQuery('#selected-page').attr('id', '');
		jQuery('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up back button
	jQuery('.control-back').click(function(){
		if(current == 0)
			current = imgSrcs.length-1;
		else
			current--;
		prevComp();
		jQuery('#selected-page').attr('id', '');
		jQuery('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up pagination events
	jQuery('.control-page').click(function(e){
		jQuery('#selected-page').attr('id', '');
		jQuery(this).attr('id', 'selected-page');
		if(jQuery(e.target).index() > current){
			current = jQuery(e.target).index();
			jQuery('.nextComp').attr('src', imgSrcs[(current)%imgSrcs.length]);
			nextComp();
			
			//set order of pics right
			setTimeout(function(){
				jQuery('.prevComp').attr('src', imgSrcs[(current-1)%imgSrcs.length])
			}, 500);
		}
		else if(jQuery(e.target).index() < current){
			current = jQuery(e.target).index();
			jQuery('.prevComp').attr('src', imgSrcs[(current)%imgSrcs.length]);
			prevComp();
			
			//set order of pics right
			setTimeout(function(){
				jQuery('.nextComp').attr('src', imgSrcs[(current+1)%imgSrcs.length]);
			}, 500);
		}
	});

	//move to a later page
	function nextComp(){
		if(jQuery('.prevComp'))
			jQuery('.prevComp').remove();

		jQuery('.currentComp').addClass('prevComp').removeClass('currentComp');
		jQuery('.nextComp').addClass('currentComp').removeClass('nextComp');
		jQuery('.currentComp').click(function(){
			openFull();
		});
		
		jQuery('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp nextComp">');
	}

	//move to a previous page
	function prevComp(){
		if(jQuery('.nextComp'))
			jQuery('.nextComp').remove();

		jQuery('.currentComp').addClass('nextComp').removeClass('currentComp');
		jQuery('.prevComp').addClass('currentComp').removeClass('prevComp');
		jQuery('.currentComp').click(function(){
			openFull();
		});

		jQuery('.slider').append('<img src=\"' + imgSrcs[(current-1 + imgSrcs.length)%imgSrcs.length] + '\" class="comp prevComp">');
	}

	//seeing full-size comp
	jQuery('.slider').append('<div class="fullComp"><img src="" class="currentFull"><img src="" class="prevFullComp"><img src="" class="nextFullComp"><div class="prevFull"></div><div class="nextFull"></div><svg class="control-svg control-close" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><line x1="39" y1="33" x2="3" y2="69"/><line x1="3" y1="33" x2="39" y2="69"/></svg></div>')

	//set up close button
	jQuery('.control-close').click(function(){
		enableScrolling();
		jQuery('.fullComp').removeClass('showing');
	});

	//set up fullComp next button
	jQuery('.nextFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + 1) % imgSrcs.length;
		nextFullComp();
	});

	//set up fullComp back button
	jQuery('.prevFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + imgSrcs.length - 1) % imgSrcs.length;
		prevFullComp();
	});

	jQuery('.currentComp').click(function(){
		openFull();
	});

	function openFull(){
		disableScroll();
		jQuery('nav.showing').removeClass('showing');
		currentFull = current;
		jQuery('.currentFull').attr('src', imgSrcs[(currentFull)%imgSrcs.length]);
		jQuery('.prevFullComp').attr('src', imgSrcs[(currentFull-1 + imgSrcs.length)%imgSrcs.length]);
		jQuery('.nextFullComp').attr('src', imgSrcs[(currentFull+1)%imgSrcs.length]);
		jQuery('.fullComp').addClass('showing')		
		setUpControls();
	}

	//move to a later page
	function nextFullComp(){
		if(jQuery('.prevFullComp'))
			jQuery('.prevFullComp').remove();

		jQuery('.currentFull').addClass('prevFullComp').removeClass('currentFull');
		jQuery('.nextFullComp').addClass('currentFull').removeClass('nextFullComp');
		
		jQuery('.fullComp').append('<img src=\"' + imgSrcs[(currentFull+1)%imgSrcs.length] + '\" class="nextFullComp">');
		setUpControls();
	}

	//move to a previous page
	function prevFullComp(){
		if(jQuery('.nextFullComp'))
			jQuery('.nextFullComp').remove();

		jQuery('.currentFull').addClass('nextFullComp').removeClass('currentFull');
		jQuery('.prevFullComp').addClass('currentFull').removeClass('prevFullComp');

		jQuery('.fullComp').append('<img src=\"' + imgSrcs[(currentFull-1 + imgSrcs.length)%imgSrcs.length] + '\" class="prevFullComp">');
		setUpControls();
	}

	function setUpControls(){
		jQuery('.fullComp').scrollTop(0);
		var fullHeight = jQuery('.currentFull').css('height');
		jQuery('.nextFull').css('height', fullHeight);
		jQuery('.prevFull').css('height', fullHeight);
	}
}

function createVideoSlider(vids){
	var vidSrcs = vids;
	var current = 0;

	//create html elements of slider
	jQuery('.slider').append('<video class="comp fitHeight currentComp" autoplay loop><source src=\"' + vidSrcs[current] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[current] + '.mp4\" type="video/mp4"></video>');
	jQuery('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.mp4\" type="video/mp4"></video>');
	jQuery('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '.mp4\" type="video/mp4"></video>');
	jQuery.each(vidSrcs, function(){
		jQuery('.pagination').append('<button class="control-page"></button>');
	});
	jQuery('.control-page:first').attr('id', 'selected-page');

	//set up next button
	jQuery('.control-next').click(function(){
		if(current == vidSrcs.length-1)
			current = 0;
		else
			current++;
		nextComp();
		jQuery('#selected-page').attr('id', '');
		jQuery('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up back button
	jQuery('.control-back').click(function(){
		if(current == 0)
			current = vidSrcs.length-1;
		else
			current--;
		prevComp();
		jQuery('#selected-page').attr('id', '');
		jQuery('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up pagination events
	jQuery('.control-page').click(function(e){
		jQuery('#selected-page').attr('id', '');
		jQuery(this).attr('id', 'selected-page');
		if(jQuery(e.target).index() > current){
			current = jQuery(e.target).index();
			console.log(current + " " + vidSrcs[(current)%vidSrcs.length]);
			jQuery('.nextComp>source').attr('src', vidSrcs[(current)%vidSrcs.length]);
			jQuery('.nextComp').get(0).load();
			nextComp();
			
			//set order of pics right
			setTimeout(function(){
				jQuery('.prevComp>source').attr('src', vidSrcs[(current-1)%vidSrcs.length])
			}, 500);
		}
		else if(jQuery(e.target).index() < current){
			current = jQuery(e.target).index();
			console.log(current + " " + vidSrcs[(current)%vidSrcs.length]);
			jQuery('.prevComp>source').attr('src', vidSrcs[(current)%vidSrcs.length]);
			jQuery('.prevComp').get(0).load();
			prevComp();
			
			//set order of pics right
			setTimeout(function(){
				jQuery('.nextComp>source').attr('src', vidSrcs[(current+1)%vidSrcs.length]);
			}, 500);
		}
	});

	//move to a later page
	function nextComp(){
		if(jQuery('.prevComp'))
			jQuery('.prevComp').remove();

	
		jQuery('.currentComp').addClass('prevComp').removeClass('currentComp');
		jQuery('.nextComp').addClass('currentComp').removeClass('nextComp');
		jQuery('.currentComp').get(0).pause();
		jQuery('.currentComp').get(0).currentTime = 0;
		jQuery('.currentComp').get(0).play();
		
		jQuery('.currentComp').click(function(){
			openFull();
		});
		
		jQuery('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.mp4\" type="video/mp4"></video>');
	}

	//move to a previous page
	function prevComp(){
		if(jQuery('.nextComp'))
			jQuery('.nextComp').remove();

		jQuery('.currentComp').addClass('nextComp').removeClass('currentComp');
		jQuery('.prevComp').addClass('currentComp').removeClass('prevComp');
		jQuery('.currentComp').get(0).pause();
		jQuery('.currentComp').get(0).currentTime = 0;
		jQuery('.currentComp').get(0).play();
		
		jQuery('.currentComp').click(function(){
			openFull();
		});

		jQuery('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1 + vidSrcs.length)%vidSrcs.length] + '.webm\"><source src=\"' + vidSrcs[(current-1 + vidSrcs.length)%vidSrcs.length] + '.mp4\"></video>');
	}
	//seeing full-size comp
	jQuery('.slider').append('<div class="fullComp"><video class="currentFull" autoplay loop></video><video class="prevFullComp" autoplay loop></video><video class="nextFullComp" autoplay loop></video><div class="prevFull"></div><div class="nextFull"></div><svg class="control-svg control-close" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><line x1="39" y1="33" x2="3" y2="69"/><line x1="3" y1="33" x2="39" y2="69"/></svg></div>')

	//set up close button
	jQuery('.control-close').click(function(){
		enableScrolling();
		jQuery('.fullComp').removeClass('showing');
	});

	//set up fullComp next button
	jQuery('.nextFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + 1) % vidSrcs.length;
		nextFullComp();
	});

	//set up fullComp back button
	jQuery('.prevFull').click(function(){
		jQuery('.fullComp').scrollTop(0);
		currentFull = (currentFull + vidSrcs.length - 1) % vidSrcs.length;
		prevFullComp();
	});

	jQuery('.currentComp').click(function(){
		openFull();
	});

	function openFull(){
		disableScroll();
		jQuery('nav.showing').removeClass('showing');
		currentFull = current;
		jQuery('.currentFull').append('<source src=\"' + vidSrcs[current] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[current] + '.mp4\" type="video/mp4">');
		jQuery('.nextFullComp').append('<source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '.mp4\" type="video/mp4">');
		jQuery('.prevFullComp').append('<source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '.mp4\" type="video/mp4">');

		jQuery('.currentFull').on('loadeddata', function(){
			jQuery('.fullComp').addClass('showing')		
			setUpControls();
		});
	}

	//move to a later page
	function nextFullComp(){
		if(jQuery('.prevFullComp'))
			jQuery('.prevFullComp').remove();

		jQuery('.currentFull').addClass('prevFullComp').removeClass('currentFull');
		jQuery('.nextFullComp').addClass('currentFull').removeClass('nextFullComp');
		
		jQuery('.currentFull').get(0).pause();
		jQuery('.currentFull').get(0).currentTime = 0;
		jQuery('.currentFull').get(0).play();
		
		jQuery('.fullComp').append('<video class="nextFullComp" autoplay loop><source src=\"' + vidSrcs[(currentFull+1)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(currentFull+1)%vidSrcs.length] + '.mp4\" type="video/mp4"></video>');
		setUpControls();
	}

	//move to a previous page
	function prevFullComp(){
		if(jQuery('.nextFullComp'))
			jQuery('.nextFullComp').remove();

		jQuery('.currentFull').addClass('nextFullComp').removeClass('currentFull');
		jQuery('.prevFullComp').addClass('currentFull').removeClass('prevFullComp');

		jQuery('.currentFull').get(0).pause();
		jQuery('.currentFull').get(0).currentTime = 0;
		jQuery('.currentFull').get(0).play();
		
		jQuery('.fullComp').append('<video class="prevFullComp" autoplay loop><source src=\"' + vidSrcs[(currentFull-1+vidSrcs.length)%vidSrcs.length] + '.webm\" type="video/webm"><source src=\"' + vidSrcs[(currentFull-1+vidSrcs.length)%vidSrcs.length] + '.mp4\" type="video/mp4"></video>');
		setUpControls();
	}

	function setUpControls(){
		jQuery('.fullComp').scrollTop(0);
		var fullHeight = jQuery('.currentFull').css('height');
		jQuery('.nextFull').css('height', fullHeight);
		jQuery('.prevFull').css('height', fullHeight);
	}
}

//control page scroll for seeing full comps
function disableScroll(){
	var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
};
function enableScrolling(){
    window.onscroll=function(){};
}