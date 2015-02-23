var mn = function( ){

$("nav").fadeTo("slow",0.5); //on load...
	
$("nav").hover(function()
			   {
	$("nav").fadeTo("fast",1); // hovering the navbar...
	
	
}
,
function(){
	
	
		$("nav").fadeTo("normal",0.5); //after hover;
	
}
			  );
	
	


}

$(document).ready(mn);
