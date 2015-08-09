<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=640, user-scalable=no"/> 
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<meta property="og:title" content="Titulo" />
<meta property="og:description" content="Descripción" />
<meta property="og:image" content="img/share.png?a=1" />

<title>Magic Card Reveal</title>
<link rel="shortcut icon" href="favicon.ico" />
<link rel="stylesheet" type="text/css" href="css/estilos.css"/>
<script src="js/libs/jquery-1.8.3.min.js"></script>
<script src="js/com/Main.js"></script>
</head>

<body>
	<div id="main">
		<div id="fondo"></div>
		<img id="logo" src="img/logo.png"/>
		<div id="texto">Make a spectator's freely selected card<br/>magically appear on your phone screen</div>
		<div id="holder_video">
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/JeKvv1szuh8?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>
		</div>
		<div id="support_btn">Support</div>
		<img id="app_store_btn" src="img/app_store_btn.png"/>
		
	</div>
	<script>
		$(document).ready(function(){
			var main = new Main();
		})

	</script>

</body>
</html>