function iniciar() {

	var boton = document.getElementById("enviar_servicios");
	boton.addEventListener("click", enviarformulario_servicios);

	//validar mail/
	var email = document.getElementById("email");
	email.addEventListener("change", validarEmail);

	//validar nombre/
	var nombre = document.getElementById("nombre");
	nombre.addEventListener("change", validarNombre);

	//validar asunto/
	var asunto = document.getElementById("asunto");
	asunto.addEventListener("change", validarAsunto);

	//validar comentario/
	var comentario = document.getElementById("comentario");
	comentario.addEventListener("change", validarComentario);

	//metodo imprimir//
	var documento = document.getElementById("print");
	documento.addEventListener("click", imprimir);
}
function enviarformulario_servicios() {

	var formulario = document.querySelector("form[name='informacion']");
	formulario.submit();
}

function validarEmail (){

	var mail = document.getElementById("email");

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

function validarNombre (){

	var input  = document.getElementById("nombre");
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

function validarAsunto (){

	var asunto  = document.getElementById("asunto");
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

function validarComentario (){
	var comentario  = document.getElementById("comentario");
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
function imprimir(){

		var printContents = document.getElementById('formulario').innerHTML;
        w = window.open();
        w.document.write(printContents);
        w.document.close(); // necessary for IE >= 10
        w.focus(); // necessary for IE >= 10
		w.print();
		w.close();
        return true;
 }
//carga de eventos//
window.addEventListener("load", iniciar);