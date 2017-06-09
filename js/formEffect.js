function formEffect(){
	var inputs = jQuery('.form-control');

	jQuery(inputs).each(function(){
		var placeholder = jQuery(this).attr('placeholder');
		if(placeholder != undefined){
			jQuery(this).after('<div class="label"><label for="' + jQuery(this).attr('id') + '">' + placeholder + '</label></div>');
			jQuery(this).after('<div class="placeholder"><p>' + placeholder + '</p></div>');
			jQuery(this).removeAttr('placeholder');
		}
	});

	inputs.focus(function(){
		selectedGroup = jQuery(this).offsetParent();
		//border
		selectedGroup.prepend('<div class="control-border"></div>');
		jQuery(this).prev().animate({
		    width: "100%"
		}, 15, 'linear');
	});

	inputs.blur(function(){
		//placeholder
		var placeholder = jQuery(this).next();
		if(jQuery(this).val().length > 0)
			placeholder.addClass('notEmpty');
		else{
			placeholder.removeClass('notEmpty');
		}
		//border
		var effect = jQuery(this).prev();
		effect.css({'right': '0', 'width': '0'});

		window.setTimeout(function(){
			effect.remove();
		}, 500);
	});
}