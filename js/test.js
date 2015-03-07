

$(document).ready(function(){

	$("input").prop("maxlength","10");
	
	$('#Verificare').click(function(){
		
		/* intrebarea 1 */
		
		if($('.i11').val()=='crestere'||$('.i11').val()=='creștere'){
			$('.i11').toggleClass('corect');
			$('#i11').toggleClass('corinp');
			
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
			
		}
		else{
			$('.i12').toggleClass('incorect');
			$('#i12').toggleClass('incinp');
			
		}
	/* intrebarea 2 */
		
		if($('.i21').val()=='pui'){
			$('.i21').toggleClass('corect');
			$('#i21').toggleClass('corinp');
		}
		else{
			$('.i21').toggleClass('incorect');
			$('#i21').toggleClass('incinp');
		}
		
		$('select').prop("disabled",true);
		
	/* intrebarea 3 */
		
	
			if($("#i31").prop("checked")==true){
			$(".i31").toggleClass("corect");
		}
			else{
				$(".i31").toggleClass("incorect");
			}
		
		if($("#i32").prop("checked")==true){
			$(".i32").toggleClass("corect");
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
		}
			else{
				$(".i34").toggleClass("incorect");
			}
		
		
		if($("#i35").prop("checked")==true){
			$(".i35").toggleClass("corect");
		}
			else{
				$(".i35").toggleClass("incorect");
			}
		
	
	
	
	/* intrebarea 4 */
	

		
		
			$(".i41").toggleClass("corect");
		
	
	
			$(".i42").toggleClass("incorect");
		
			
	
	
			$(".i43").toggleClass("incorect");
		
	
		/* intrebarea 5 *....in curs de stoarcere */
		
		
		
	});
	
});
