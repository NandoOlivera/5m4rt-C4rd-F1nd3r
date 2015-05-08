
function TrucoCarta(){
	var self = this;
	this.main = document.getElementById('truco_carta');

	var svg = document.getElementById('truco_carta_svg');
	$(svg).load(function(){
		$(self.main).css('display','block');
		$(self.main).transition({opacity:1},500);
	})

	$(this.main).bind('touchstart', onTouchStartThis);

	this.mostrar = function(numero, palo){
		svg.src = 'img/truco/cartas/'+palo+'/'+numero+'.svg';
	}	

	function onTouchStartThis(e){
		e.preventDefault();
		
		$(self.main).css({'display':'none','opacity':0});	
		
		if(Main.db.getMode() == 0){
			Main.navegar(0);
		}else{
			navigator.app.exitApp();
		}		
		
	}
}