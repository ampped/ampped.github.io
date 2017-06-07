//written by Amy Pham

function createSlider(imgs){
	var imgSrcs = imgs;
	var current = 0;

	//create html elements of slider
	$('.slider').append('<img src=\"' + imgSrcs[current] + '\" class="comp fitWidth currentComp">');
	$('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp fitWidth nextComp">');
	$('.slider').append('<img src=\"' + imgSrcs[(current-1+imgSrcs.length)%imgSrcs.length] + '\" class="comp fitWidth prevComp">');
	$.each(imgSrcs, function(){
		$('.pagination').append('<button class="control-page"></button>');
	});
	$('.control-page:first').attr('id', 'selected-page');

	//set up next button
	$('.control-next').click(function(){
		if(current == imgSrcs.length-1)
			current = 0;
		else
			current++;
		nextComp();
		$('#selected-page').attr('id', '');
		$('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up back button
	$('.control-back').click(function(){
		if(current == 0)
			current = imgSrcs.length-1;
		else
			current--;
		prevComp();
		$('#selected-page').attr('id', '');
		$('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up pagination events
	$('.control-page').click(function(e){
		$('#selected-page').attr('id', '');
		$(this).attr('id', 'selected-page');
		if($(e.target).index() > current){
			current = $(e.target).index();
			$('.nextComp').attr('src', imgSrcs[(current)%imgSrcs.length]);
			nextComp();
			
			//set order of pics right
			setTimeout(function(){
				$('.prevComp').attr('src', imgSrcs[(current-1)%imgSrcs.length])
			}, 500);
		}
		else if($(e.target).index() < current){
			current = $(e.target).index();
			$('.prevComp').attr('src', imgSrcs[(current)%imgSrcs.length]);
			prevComp();
			
			//set order of pics right
			setTimeout(function(){
				$('.nextComp').attr('src', imgSrcs[(current+1)%imgSrcs.length]);
			}, 500);
		}
	});

	//move to a later page
	function nextComp(){
		if($('.prevComp'))
			$('.prevComp').remove();

		$('.currentComp').addClass('prevComp').removeClass('currentComp');
		$('.nextComp').addClass('currentComp').removeClass('nextComp');
		
		$('.slider').append('<img src=\"' + imgSrcs[(current+1)%imgSrcs.length] + '\" class="comp fitWidth nextComp">');
	}

	//move to a previous page
	function prevComp(){
		if($('.nextComp'))
			$('.nextComp').remove();

		$('.currentComp').addClass('nextComp').removeClass('currentComp');
		$('.prevComp').addClass('currentComp').removeClass('prevComp');

		$('.slider').append('<img src=\"' + imgSrcs[(current-1 + imgSrcs.length)%imgSrcs.length] + '\" class="comp prevComp">');
	}
}

function createVideoSlider(vids){
	var vidSrcs = vids;
	var current = 0;

	//create html elements of slider
	$('.slider').append('<video class="comp fitHeight currentComp" autoplay loop><source src=\"' + vidSrcs[current] + '\" type="video/mp4" class="comp fitHeight currentComp"></video>');
	$('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '\" type="video/mp4"></video>');
	$('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1+vidSrcs.length)%vidSrcs.length] + '\" type="video/mp4"></video>');
	$.each(vidSrcs, function(){
		$('.pagination').append('<button class="control-page"></button>');
	});
	$('.control-page:first').attr('id', 'selected-page');

	//set up next button
	$('.control-next').click(function(){
		if(current == vidSrcs.length-1)
			current = 0;
		else
			current++;
		nextComp();
		$('#selected-page').attr('id', '');
		$('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up back button
	$('.control-back').click(function(){
		if(current == 0)
			current = vidSrcs.length-1;
		else
			current--;
		prevComp();
		$('#selected-page').attr('id', '');
		$('.control-page:nth-of-type(' + (current+1) + ')').attr('id', 'selected-page');
	});

	//set up pagination events
	$('.control-page').click(function(e){
		$('#selected-page').attr('id', '');
		$(this).attr('id', 'selected-page');
		if($(e.target).index() > current){
			current = $(e.target).index();
			console.log(current + " " + vidSrcs[(current)%vidSrcs.length]);
			$('.nextComp>source').attr('src', vidSrcs[(current)%vidSrcs.length]);
			$('.nextComp').get(0).load();
			nextComp();
			
			//set order of pics right
			setTimeout(function(){
				$('.prevComp>source').attr('src', vidSrcs[(current-1)%vidSrcs.length])
			}, 500);
		}
		else if($(e.target).index() < current){
			current = $(e.target).index();
			console.log(current + " " + vidSrcs[(current)%vidSrcs.length]);
			$('.prevComp>source').attr('src', vidSrcs[(current)%vidSrcs.length]);
			$('.prevComp').get(0).load();
			prevComp();
			
			//set order of pics right
			setTimeout(function(){
				$('.nextComp>source').attr('src', vidSrcs[(current+1)%vidSrcs.length]);
			}, 500);
		}
	});

	//move to a later page
	function nextComp(){
		if($('.prevComp'))
			$('.prevComp').remove();

	
		$('.currentComp').addClass('prevComp').removeClass('currentComp');
		$('.nextComp').addClass('currentComp').removeClass('nextComp');
		$('.currentComp').get(0).pause();
		$('.currentComp').get(0).currentTime = 0;
		$('.currentComp').get(0).play();
		
		$('.slider').append('<video class="comp fitHeight nextComp" autoplay loop><source src=\"' + vidSrcs[(current+1)%vidSrcs.length] + '\" type="video/mp4"></video>');
	}

	//move to a previous page
	function prevComp(){
		if($('.nextComp'))
			$('.nextComp').remove();

		$('.currentComp').addClass('nextComp').removeClass('currentComp');
		$('.prevComp').addClass('currentComp').removeClass('prevComp');
		$('.currentComp').get(0).pause();
		$('.currentComp').get(0).currentTime = 0;
		$('.currentComp').get(0).play();

		$('.slider').append('<video class="comp fitHeight prevComp" autoplay loop><source src=\"' + vidSrcs[(current-1 + vidSrcs.length)%vidSrcs.length] + '\"></video>');
	}
}