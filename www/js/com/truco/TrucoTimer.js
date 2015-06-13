
function TrucoTimer(){
	var self = this;
	this.main = document.getElementById('truco_timer');

	var intervalo;
	var contador = 0;

	this.start = function(){
		contador = Main.db.getTime();
		$(self.main).html(contador);
		intervalo = setInterval(onIntervalo, 1000);
	}

	this.stop = function(){
		try{
			clearInterval(intervalo);
		}catch(e){

		}

		$(self.main).html('');
	}

	function onIntervalo(){
		contador--;
		$(self.main).html(contador);
		if(contador == 0){
			clearInterval(intervalo);
			$(self.main).html('');
		}
	}

}