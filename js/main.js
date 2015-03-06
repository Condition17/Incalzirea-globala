$(document).ready(function() {


    $(document).scroll(function () {

        var scroll = $(this).scrollTop();
        
        var topDist = $("nav").position();
        if (scroll > topDist.top) {
            $('nav').css({"position":"fixed","margin-top":"0px"});		
			
		

		
        } 
		
		else {

			
           
			$('nav').css({"position":"fixed","margin-top":"20px"});	
		
			
	}
		
		
    });
	
	
	
	

});

