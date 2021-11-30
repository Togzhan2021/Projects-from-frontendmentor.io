
$(document).ready(function(){
	$(".question").click(function(){

		$(this).css('font-weight', '400');

		$('.arrow').toggleClass('reverse');	

		$(".answer").slideUp();

		if($(this).next().is(":visible")){	
	
			$(this).next().slideUp("fast");  
			$(this).toggleClass('non-active');
		}

		else{
	
			$(this).next().slideDown("fast");
			$(this).toggleClass('active');
			      
		}

	});
});