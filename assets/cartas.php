<html>
	<head>
	<link rel="stylesheet" type="text/css" href="../www/css/estilos.css"/>
	<script src="../www/js/libs/jquery-1.8.3.min.js"></script>
	</head>
	<body>
		<div id="truco_carta">
            <img id="truco_carta_svg" src="../www/img/truco/cartas/<?= $_GET['p'].'/'.$_GET['n']?>.svg"/>
        </div>

        <script>
        	$('#truco_carta').css({'display':'block','opacity':1});
        </script>
	</body>
</html>