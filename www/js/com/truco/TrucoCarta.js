
function TrucoCarta(){
	var self = this;
	this.main = document.getElementById('truco_carta');

	var svg = document.getElementById('truco_carta_svg');

	$(this.main).bind('touchstart', onTouchStartThis);

	this.mostrar = function(numero, palo){
		svg.src = 'img/truco/cartas/'+palo+'/'+numero+'.svg';

		$(self.main).css('display','block');
		

		switch(Main.db.getReveal()){
			case 0://Instantly
				   $(self.main).css('opacity',1);
				   break;
			case 1://Slow
				   $(self.main).transition({'opacity':1},3000,'linear');
				   break;
			case 2:// Grow
				   //PRE	
				   $(self.main).transition({scale:0},0);
				   $(self.main).transition({scale:1,opacity:1},300);	   	   
				   break;
		}
	
		
	}	

	function onTouchStartThis(e){
		e.preventDefault();
		
		switch(Main.db.getMode()){
			case 0:$(self.main).css({'display':'none','opacity':0});
				   Main.navegar(0);
				   break;
			case 1://navigator.app.exitApp();
				   break;	   
		}
	}
}