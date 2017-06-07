function formEffect(){
	var inputs = $('.form-control');

	$(inputs).each(function(){
		var placeholder = $(this).attr('placeholder');
		if(placeholder != undefined){
			$(this).after('<div class="label"><label for="' + $(this).attr('id') + '">' + placeholder + '</label></div>');
			$(this).after('<div class="placeholder"><p>' + placeholder + '</p></div>');
			$(this).removeAttr('placeholder');
		}
	});

	inputs.focus(function(){
		selectedGroup = $(this).offsetParent();
		//border
		selectedGroup.prepend('<div class="control-border"></div>');
		$(this).prev().animate({
		    width: "100%"
		}, 15, 'linear');
	});

	inputs.blur(function(){
		//placeholder
		var placeholder = $(this).next();
		if($(this).val().length > 0)
			placeholder.addClass('notEmpty');
		else{
			console.dir(placeholder);
			placeholder.removeClass('notEmpty');
		}
		//border
		var effect = $(this).prev();
		effect.css({'right': '0', 'width': '0'});

		window.setTimeout(function(){
			effect.remove();
		}, 500);
	});
}