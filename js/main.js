var mn = function( ){


	var init=parseFloat($(".navbar-brand").css("font-size"));
	var size2=init+4;
	
	var bar_init=parseFloat($("nav").css("height"));
	var bar_transform=bar_init+2;
	
$("nav").fadeTo("normal",0.5);
	
$("nav").hover(function()
			   {
	$("nav").fadeTo("fast",1); // hovering the navbar...
	
	
	
	$(".navbar-brand").animate({fontSize:size2}, "normal");

	
	
},

function(){
	

		$("nav").fadeTo("normal",0.5);

	
	$(".navbar-brand").animate({fontSize:init}, "normal");
}
			  );
	
	
$("a").hover(function(){
	$(this).toggleClass("check");
});


}

$(document).ready(mn);
