//written by Amy Pham

function project(){
	$('.project').click(function(e){
		$('body').css('overflow-y', 'hidden');
		$('.projectBlock').addClass('showing');
		$('.projectBlock').scrollTop(0);

		$('.projectBlock').load($(this).attr('data-link'), function(){
			$('.projectBlock').append('<div class="projectBack">&lt; Back to Projects</div>');
			$('.projectBack').click(function(){
				$('.projectBlock').removeClass('showing');
			    setTimeout(function(){
					$('body').css('overflow-y', 'scroll');
			    }, 500);
			});
		});
	});
}