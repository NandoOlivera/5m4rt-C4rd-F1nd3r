
function DataBase(){
	var self = this;
	
	var mode = null;
	var time = null;
	var reveal = null;


	cargarDB();

	function cargarDB(){
		if(localStorage.getItem('mode') == null){ //Si no esta creada la creo
			localStorage.setItem('mode',0);
			localStorage.setItem('time',5);
			localStorage.setItem('reveal',0);
			Main.alerta.mostrar();
		}

		mode = localStorage.getItem('mode');
		time = localStorage.getItem('time');
		reveal = localStorage.getItem('reveal');
	}


	this.setMode = function(valor){
		mode = valor;
		localStorage.setItem('mode',valor);
	}

	this.setTime = function(valor){
		time = valor;
		localStorage.setItem('time',valor);
	}

	this.setReveal = function(valor){
		reveal = valor;
		localStorage.setItem('reveal',valor);
	}

	this.getMode = function(){
		return parseInt(mode,10);
	}

	this.getTime = function(){
		return parseInt(time,10);
	}

	this.getReveal = function(){
		return parseInt(reveal,10);
	}


}