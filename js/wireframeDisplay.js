//written by Amy Pham

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