function formEffect(){
	var inputs = jQuery('.form-control');


	jQuery(inputs).each(function(){
		jQuery(this).keyup(function(){
			//notify user the field is required if left empty
			if(jQuery(this).val().length > 0){
				jQuery(this).next().addClass('notEmpty');
				jQuery(this).offsetParent().removeAttr('style');
			}
			else{
				jQuery(this).next().removeClass('notEmpty');
			}

			//disable/enable submit button
			if(jQuery('.notEmpty').length == inputs.length)
				jQuery('.disabled').removeClass('disabled');
			else
				jQuery('.form-submit-button').addClass('disabled');
		});

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

		//insert * to placeholder for required 
		var placeholderString = placeholder.children('p').get(0).innerText;
		if(placeholderString.charAt(placeholderString.length - 1) != "*"){
			jQuery(placeholder).children('p').append('*');
			jQuery(placeholder.children('p').get(0)).css('color', '#FF4B54');
		}

		console.log(jQuery(this).val());
		if(jQuery(this).val().length <= 0)
			jQuery(this).offsetParent().css('border-bottom', '1px solid #FF4B54');

		//border
		var effect = jQuery(this).prev();
		effect.css({'right': '0', 'width': '0'});

		window.setTimeout(function(){
			effect.remove();
		}, 500);
	});
}