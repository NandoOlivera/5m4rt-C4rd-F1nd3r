
function TrucoCarta(){
	var self = this;
	this.main = document.getElementById('truco_carta');

	var svg = document.getElementById('truco_carta_svg');
	$(svg).load(function(){
		$(self.main).css('display','block');
		$(self.main).transition({opacity:1},500);
	})

	this.mostrar = function(numero, palo){
		svg.src = 'img/truco/cartas/'+palo+'/'+numero+'.svg';
	}	

}