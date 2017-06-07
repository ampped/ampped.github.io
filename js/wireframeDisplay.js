//written by Amy Pham

function setupWFDisplay(wfSrcs){
	$('.pages>li').click(function(){
		$('.pages>.selected').removeClass('selected');
		$(this).addClass('selected');

		selectItem('hotspots', $(this).index());
		selectItem('pageDesc', $(this).index());

		$('.wf>img').attr('src', wfSrcs[$(this).index()]);
	})

	$('.hotspot').hover(function(){
		selectItem('desc', $(this).index('.hotspot') + 1);
	});

	$('.wf').mouseleave(function(){
		selectItem('desc', 0);
	});
}

//helper function to add the selected class to the actual selected object
function selectItem(className, i){
	$('.' + className + '.selected').removeClass('selected');
	$('.' + className + ':eq(' + i + ')').addClass('selected');
}