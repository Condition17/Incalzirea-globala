

$(document).ready(function(){

	$("input").prop("maxlength","10");
	var count=0
	
	$('#Verificare').click(function(){
		
		/* intrebarea 1 */
		
		if($('.i11').val()=='crestere'||$('.i11').val()=='creștere'){
			$('.i11').toggleClass('corect');
			$('#i11').toggleClass('corinp');
			
			count++;
			
		}
		else{
			$('.i11').toggleClass('incorect');
			$('#i11').toggleClass('incinp');
		}
			
		$("input").prop('disabled', true);
		$(this).prop('disabled', 'disabeled');
	
	
if($('.i12').val()=='solului'){
			$('.i12').toggleClass('corect');
			$('#i12').toggleClass('corinp');
			count++;
		}
		else{
			$('.i12').toggleClass('incorect');
			$('#i12').toggleClass('incinp');
			
		}
	/* intrebarea 2 */
		
		if($('.i21').val()=='pui'){
			$('.i21').toggleClass('corect');
			$('#i21').toggleClass('corinp');
			count++;
		}
		else{
			$('.i21').toggleClass('incorect');
			$('#i21').toggleClass('incinp');
		}
		
		$('select').prop("disabled",true);
		
	/* intrebarea 3 */
		
	
			if($("#i31").prop("checked")==true){
			$(".i31").toggleClass("corect");
				count++;
		}
			else{
				$(".i31").toggleClass("incorect");
			}
		
		if($("#i32").prop("checked")==true){
			$(".i32").toggleClass("corect");
			count++;
		}
			else{
				$(".i32").toggleClass("incorect");
			}
			
		
		if($("#i33").prop("checked")!=true){
			$(".i33").toggleClass("corect");
			
		}
			else{
				$(".i33").toggleClass("incorect");
			}
		
		
		if($("#i34").prop("checked")==true){
			$(".i34").toggleClass("corect");
			count++;
		}
			else{
				$(".i34").toggleClass("incorect");
			}
		
		
		if($("#i35").prop("checked")==true){
			$(".i35").toggleClass("corect");
			count++;
		}
			else{
				$(".i35").toggleClass("incorect");
			}
		
	
	
	
	/* intrebarea 4 */
	
if($("#i41").prop("checked")==true){
			$(".i41").toggleClass("corect");
			count++;
		}
			else{
				$(".i41").toggleClass("incorect");
			}
		
		
		
			if($("#i42").prop("checked")==false){
			$(".i42").toggleClass("corect");

		}
			else{
				$(".i42").toggleClass("incorect");
			}
		
			
	
			if($("#i43").prop("checked")==false){
			$(".i43").toggleClass("corect");
			
		}
			else{
				$(".i43").toggleClass("incorect");
			}
		
		
			
		
	
		/* intrebarea 5  */
		
			if($('.i51').val()=='meteo'){
			$('.i51').toggleClass('corect');
			$('#i51').toggleClass('corinp');
			count++;
			}
		else{
			$('.i51').toggleClass('incorect');
			$('#i51').toggleClass('incinp');
			
		}
		
		
		if($('.i52').val()=='atmosferei'){
			$('.i52').toggleClass('corect');
			$('#i52').toggleClass('corinp');
			count++;	
		}
		else{
			$('.i52').toggleClass('incorect');
			$('#i52').toggleClass('incinp');
			
		}
		
			$(".Punctaj").text("Punctaj:"+count+"/10");
	});
	


	

	
	
	
});
