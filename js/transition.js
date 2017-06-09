//written by Amy Pham

function project(){
	jQuery('.project').click(function(e){
		jQuery('body').css('overflow-y', 'hidden');
		jQuery('.projectBlock').addClass('showing');
		jQuery('.projectBlock').scrollTop(0);

		jQuery('.projectBlock').load(jQuery(this).attr('data-link'), function(){
			jQuery('.projectBlock').append('<div class="projectBack">&lt; Back to Projects</div>');
			jQuery('.projectBack').click(function(){
				jQuery('.projectBlock').removeClass('showing');
			    setTimeout(function(){
					jQuery('body').css('overflow-y', 'scroll');
			    }, 500);
			});
		});
	});
}