
$("#mce-EMAIL").focus();


$("#mc-embedded-subscribe-form").submit(function(){
	var email = $("#mce-EMAIL").val();
	if(email != "") {
		var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
         
		if(filtro.test(email)) {
			$("#mce-EMAIL").val("email enviado com sucesso...");
	   		return true;
		}
		else {
			alert("Este endereço de email não é válido!");
			return false;
		}
	}
	else {
		$("#mce-EMAIL").val("Digite um email!");
		return false;
	}
});