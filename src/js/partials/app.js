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
	
})();