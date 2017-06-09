//written by Amy Pham

function createSlider(imgs){
	var imgSrcs = imgs;
	var current = 0;

	//create html elements of slider
	jQuery('.slider').append('<img src=\"' + imgSrcs[current] + '\" class="comp fitWidth currentComp">');
	jQuery('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp fitWidth nextComp">');
	jQuery('.slider').append('<img src=\"' + imgSrcs[(current-1+imgSrcs.length)%imgSrcs.length] + '\" class="comp fitWidth prevComp">');
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
		
		jQuery('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp fitWidth nextComp">');
	}

	//move to a previous page
	function prevComp(){
		if(jQuery('.nextComp'))
			jQuery('.nextComp').remove();

		jQuery('.currentComp').addClass('nextComp').removeClass('currentComp');
		jQuery('.prevComp').addClass('currentComp').removeClass('prevComp');

		jQuery('.slider').append('<img src=\"' + imgSrcs[(current-1 + imgSrcs.length)%imgSrcs.length] + '\" class="comp prevComp">');
	}
}

function createVideoSlider(vids){
	var vidSrcs = vids;
	var current = 0;

	//create html elements of slider
	jQuery('.slider').append('<video class="comp fitHeight currentComp" autoplay loop><source src=\"' + vidSrcs[current] + '\" type="video/mp4" class="comp fitHeight currentComp"></video>');
	jQuery('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '\" type="video/mp4"></video>');
	jQuery('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '\" type="video/mp4"></video>');
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
		
		jQuery('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '\" type="video/mp4"></video>');
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

		jQuery('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1 + vidSrcs.length)%vidSrcs.length] + '\"></video>');
	}
}