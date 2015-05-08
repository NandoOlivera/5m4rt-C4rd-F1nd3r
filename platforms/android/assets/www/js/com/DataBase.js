
function DataBase(){
	var self = this;
	
	var mode = null;
	var time = null;
	var sound = null;


	cargarDB();


	/*if(localStorage.getItem('mode') == null){
		localStorage.setItem('mode',0);

	}*//*else{
		alert(localStorage.getItem('mode'))
	}	*/


	function cargarDB(){
		if(localStorage.getItem('mode') == null){ //Si no esta creada la creo
			localStorage.setItem('mode',0);
			localStorage.setItem('time',5);
			localStorage.setItem('sound',0);
		}

		mode = localStorage.getItem('mode');
		time = localStorage.getItem('time');
		sound = localStorage.getItem('sound');
	}


	this.setMode = function(valor){
		mode = valor;
		localStorage.setItem('mode',valor);
	}

	this.setTime = function(valor){
		time = valor;
		localStorage.setItem('time',valor);
	}

	this.setSound = function(valor){
		sound = valor;
		localStorage.setItem('sound',valor);
	}

	this.getMode = function(){
		return parseInt(mode,10);
	}

	this.getTime = function(){
		return parseInt(time,10);
	}

	this.getSound = function(){
		return parseInt(sound,10);
	}


}