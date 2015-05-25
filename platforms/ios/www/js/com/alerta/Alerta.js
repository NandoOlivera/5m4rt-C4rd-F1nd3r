
function Alerta(){
	var self = this;
	this.main = document.getElementById('alerta');

	var placa = document.getElementById('alerta_placa');

	var boton = document.getElementById('alerta_boton');

	$(boton).bind('touchstart', onClickBoton);

	this.mostrar = function(){
		//PRE

		$(placa).transition({scale:0.2,opacity:0},0);

		//ANIM IN
		$(self.main).css('display','block');
		$(self.main).transition({opacity:1},400);
		$(placa).delay(200).transition({scale:1,opacity:1},300);
	}

	function onClickBoton(e){
		$(self.main).transition({opacity:0},500,function(){
			$(self.main).css('display','none');
		});
	}

}