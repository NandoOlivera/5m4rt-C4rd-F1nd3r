
function DataBase(){
	var self = this;
	
	this.mode = null;
	this.time = null;
	this.sound = null;


	cargarDB();


	/*if(localStorage.getItem('mode') == null){
		localStorage.setItem('mode',0);

	}*//*else{
		alert(localStorage.getItem('mode'))
	}	*/


	function cargarDB(){
		if(localStorage.getItem('mode') == null){ //Si no esta creada la creo
			localStorage.setItem('mode',2);
			localStorage.setItem('time',5);
			localStorage.setItem('sound',0);
		}

		self.mode = localStorage.getItem('mode');
		self.time = localStorage.getItem('time');
		self.sound = localStorage.getItem('sound');
	}


	this.setMode = function(valor){
		self.mode = valor;
		localStorage.setItem('mode',valor);
	}

	this.setTime = function(valor){
		self.time = valor;
		localStorage.setItem('time',valor);
	}

	this.setSound = function(valor){
		self.sound = valor;
		localStorage.setItem('sound',valor);
	}


}