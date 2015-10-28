(function(){
	
	if($('#b-slider').length > 0){
		$('#b-slider').bxSlider({
			'controls' : false
		});
	}   

	if($('#b-region').length > 0){
		$('#b-region').select2({theme: "classic"});	
	}
	
})();