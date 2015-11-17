(function(){

	if($('#b-slider').length > 0){
		$('#b-slider').bxSlider({
			'controls' : false
		});
	}   

	if($('#b-region').length > 0){
		$('#b-region').select2({
			theme: "classic",
			width: "element"
		});	
	}

	if($('#b-login__tabs').length > 0){
		$('#b-login__tabs').tabs({
			active : 1
		});
	}

	// валидация форм
	// задаем default-текст сообщений
	$.extend($.validator.messages, {
	  required: 'Поле обязательно для заполнения',
	  email: "Пожалуйста, введите корректный email"
	});
	// задаем правильную разметку вывода сообщений
	$.validator.setDefaults({
	  	errorPlacement: function(error, element, label) {
			var container = $('<div class="b-login__form__item error"><span></span></div>');
			container.insertAfter(element.closest('.b-login__form__item'));
			error.appendTo(container);
		}
	});

	$.validator.addClassRules({
	  name: {
	    required: true,
	    minlength: 2
	  },
	  email: {
	    required: true,
	    email: true
	  }
	});

	// назначаем валидацию на нужные формы
	if($('.c-validate').length > 0){
		$('.c-validate').each(function() {
			$(this).validate();
		});
	}

	// открываем popup
	$(document).ready(function(){

		$('#element_to_pop_up').bPopup();	

	});
	

})();