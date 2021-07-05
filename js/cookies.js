	function setCookie(cname,cvalue,exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires=" + d.toGMTString();
	    document.cookie = cname+"="+cvalue+"; "+expires + "; path=/";
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	var user=getCookie("_namecookie");
	if (user == "") {
		$('#js_barra_aceptacion_cookie').css({
		display: 'block'
	});
	}
	$('#js_btn_cookie').on('click', function(e) {
	e.preventDefault();
	user = 'Luis Rene';
	if (user != "" && user != null) {
		setCookie("_namecookie", user, 30);
		$('#js_barra_aceptacion_cookie').css({
		display: 'none'
		});
		console.log("cookie creada: " + user);
	}
	});
	if(user == ""){
	    console.log("cookie actual: Null");
	}else{
		console.log("cookie actual: " + user);
	}