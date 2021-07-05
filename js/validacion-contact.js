function iniciar_contacto() {

	var boton = document.getElementById("enviar_contacto");
	boton.addEventListener("click", enviarformulario);

	//validar mail/
	var mail = document.getElementById("mail");
	mail.addEventListener("change", validarMail);

	//validar nombre/
	var nombre = document.getElementById("nombreApellido");
	nombre.addEventListener("change", validarNombre);

	//validar asunto/
	var asunto = document.getElementById("subject");
	asunto.addEventListener("change", validarAsunto);

	//validar comentario/
	var mensaje = document.getElementById("mensaje");
	mensaje.addEventListener("change", validarMensaje);

	var telefono = document.getElementById("telefono");
	telefono.addEventListener("change", validarTelefono);
}
function validarTelefono (){

	var telefono  = document.getElementById("telefono");
	let isValid = false;
	var mensaje = "";

	telefono.willValidate = false;
	var maximo = 15;

	var pattern = new RegExp('^[0-9+-]+$', 'i');

	if(!telefono.value) {

	    if (telefono.style.borderColor == 'salmon') {

	    	var alert_telefono = document.getElementById("alert_telefono");
			alert_telefono.parentNode.removeChild(alert_telefono);
	    }

	    isValid = false;
	    telefono.style.borderColor = '#999';
	    return 0;

	} else {

	    if(telefono.value.length > maximo) {

	        isValid = false;
	        mensaje = "No pude sobrepasar los 15 caracteres";

	    } else {
  
	        if(!pattern.test(telefono.value)){ 

	            isValid = false;
	            mensaje = "El número teléfono no debe llevar caracteres numéricos";

	        }else {

	            isValid = true;
	        }
	    }
	}

	if(!isValid) {

	// rojo: no es valido
		if (telefono.style.borderColor == 'salmon') {

			var alert_telefono = document.getElementById("alert_telefono");
			alert_telefono.parentNode.removeChild(alert_telefono);
			telefono.style.borderColor = 'salmon';telefono
			telefono.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_telefono"><p style="color:salmon">'+mensaje+'</p></div>');

		}else{

			telefono.style.borderColor = 'salmon';
			telefono.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_telefono"><p style="color:salmon">'+mensaje+'</p></div>');
		}

	}else{
	    // verde: si es valido
	    if (telefono.style.borderColor == 'salmon') {

	    	var alert_telefono = document.getElementById("alert_telefono");
			alert_telefono.parentNode.removeChild(alert_telefono);
	    }	    

	    telefono.style.borderColor = 'palegreen';
	}
}
function validarAsunto (){

	var asunto  = document.getElementById("subject");
	let isValid = false;
	var mensaje = "";

	asunto.willValidate = false;
	var maximo = 40;

	var pattern = new RegExp('^[A-Z áéíóúñ.,]+$', 'i');

	if(!asunto.value) {

	    if (asunto.style.borderColor == 'salmon') {

	    	var alert_asunto = document.getElementById("alert_asunto");
			alert_asunto.parentNode.removeChild(alert_asunto);
	    }

	    isValid = false;
	    asunto.style.borderColor = '#999';
	    return 0;

	} else {

	    if(asunto.value.length > maximo) {

	        isValid = false;
	        mensaje = "No pude sobrepasar los 40 caracteres";

	    } else {
  
	        if(!pattern.test(asunto.value)){ 

	            isValid = false;
	            mensaje = "El asunto no puede tener caracteres especiales";

	        }else {

	            isValid = true;
	        }
	    }
	}

	if(!isValid) {

	// rojo: no es valido
		if (asunto.style.borderColor == 'salmon') {

			var alert_asunto = document.getElementById("alert_asunto");
			alert_asunto.parentNode.removeChild(alert_asunto);
			asunto.style.borderColor = 'salmon';
			asunto.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_asunto"><p style="color:salmon">'+mensaje+'</p></div>');

		}else{

			asunto.style.borderColor = 'salmon';
			asunto.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_asunto"><p style="color:salmon">'+mensaje+'</p></div>');
		}

	}else{
	    // verde: si es valido
	    if (asunto.style.borderColor == 'salmon') {

	    	var alert_asunto = document.getElementById("alert_asunto");
			alert_asunto.parentNode.removeChild(alert_asunto);
	    }	    

	    asunto.style.borderColor = 'palegreen';
	}
}

function validarNombre (){

	var input  = document.getElementById("nombreApellido");
	// Variable que usaremos para determinar si el input es valido
	let isValid = false;
	var mensaje = "";

	input.willValidate = false;

	// El tamaño maximo para nuestro input
	var maximo = 35;

	// El pattern que vamos a comprobar
	var pattern = new RegExp('^[A-Z áéíóúñ]+$', 'i');

	// Primera validacion, si input esta vacio entonces no es valido
	if(!input.value) {

	    if (input.style.borderColor == 'salmon') {

	    	var alert_nombre = document.getElementById("alert_nombre");
			alert_nombre.parentNode.removeChild(alert_nombre);
	    }

	    isValid = false;
	    input.style.borderColor = '#999';
	    return 0;

	} else {

	    // Segunda validacion, si input es mayor que 35
	    if(input.value.length > maximo) {

	        isValid = false;
	        mensaje = "No pude sobrepasar los 35 caracteres";

	    } else {

	        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
	        
	        if(!pattern.test(input.value)){ 

	        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
	        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
	            isValid = false;
	            mensaje = "El nombre no puede tener caracteres especiales";

	        }else {
	            // Si pasamos todas la validaciones anteriores, entonces el input es valido
	            isValid = true;
	        }
	    }
	}

	//Ahora coloreamos el borde de nuestro input
	if(!isValid) {

	// rojo: no es valido
		if (input.style.borderColor == 'salmon') {

			var alert_nombre = document.getElementById("alert_nombre");
			alert_nombre.parentNode.removeChild(alert_nombre);
			input.style.borderColor = 'salmon';
			input.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_nombre"><p style="color:salmon">'+mensaje+'</p></div>');

		}else{

			input.style.borderColor = 'salmon';
			input.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_nombre"><p style="color:salmon">'+mensaje+'</p></div>');
		}

	}else{
	    // verde: si es valido
	    if (input.style.borderColor == 'salmon') {

	    	var alert_nombre = document.getElementById("alert_nombre");
			alert_nombre.parentNode.removeChild(alert_nombre);
	    }	    

	    input.style.borderColor = 'palegreen';
	}

	// devolvemos el valor de isValid
	return isValid;
}

function validarMail(){

	var mail = document.getElementById("mail");

	if (mail.value == "") {

		return 0;

	}else{
		var re = /^([\da-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

		if(!re.exec(mail.value)){


			if(mail.style.borderColor == 'salmon'){

				var alert_mail = document.getElementById("alert_mail");
				alert_mail.parentNode.removeChild(alert_mail);

				mail.style.borderColor = 'salmon';
				mail.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_mail"><p style="color:salmon">Dirección email NO válido</p></div>');

			}else{
				mail.style.borderColor = 'salmon';
				mail.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_mail"><p style="color:salmon">Dirección email NO válido</p></div>');
			}
		}else{

			if(mail.style.borderColor == 'salmon'){

				var alert_mail = document.getElementById("alert_mail");
				alert_mail.parentNode.removeChild(alert_mail);

				mail.style.borderColor = 'palegreen';

			}else{
				mail.style.borderColor = 'palegreen';
			}
		}
	}
}
function validarMensaje (){
	var comentario  = document.getElementById("mensaje");
	let isValid = false;
	var mensaje = "";

	comentario.willValidate = false;
	var maximo = 300;

	var pattern = new RegExp('^[A-Z 0-9áéíóúñ., ]+$', 'i');

	if(!comentario.value) {

	    if (comentario.style.borderColor == 'salmon') {

	    	var alert_commt = document.getElementById("alert_commt");
			alert_commt.parentNode.removeChild(alert_commt);
	    }

	    isValid = false;
	    comentario.style.borderColor = '#999';
	    return 0;

	} else {

	    if(comentario.value.length > maximo) {

	        isValid = false;
	        mensaje = "No pude sobrepasar los 300 caracteres";

	    } else {
	 
	        if(!pattern.test(comentario.value)){ 

	            isValid = false;
	            mensaje = "El comentario no puede tener caracteres especiales";

	        }else {

	            isValid = true;
	        }
	    }
	}

	if(!isValid) {

	// rojo: no es valido
		if (comentario.style.borderColor == 'salmon') {

			var alert_commt = document.getElementById("alert_commt");
			alert_commt.parentNode.removeChild(alert_commt);
			comentario.style.borderColor = 'salmon';
			comentario.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_commt"><p style="color:salmon">'+mensaje+'</p></div>');

		}else{

			comentario.style.borderColor = 'salmon';
			comentario.insertAdjacentHTML('afterend', '<div align="rigth" id="alert_commt"><p style="color:salmon">'+mensaje+'</p></div>');
		}

	}else{
	    // verde: si es valido
	    if (comentario.style.borderColor == 'salmon') {

	    	var alert_commt = document.getElementById("alert_commt");
			alert_commt.parentNode.removeChild(alert_commt);
	    }	    

	    comentario.style.borderColor = 'palegreen';
	}
}
function enviarformulario() {

	var contacto = document.querySelector("form[name='contacto']");
	contacto.submit();
}
//carga de eventos//
window.addEventListener("load", iniciar_contacto);