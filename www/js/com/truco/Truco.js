
function Truco(){
	var self = this;
	this.main = document.getElementById('truco');

	var arr_btns = new Array();
	for(var i=0; i < 13;i++){
		arr_btns.push(new TrucoBtn(i,$(this.main).find('.truco_btn')[i]));
	}

	var carta = new TrucoCarta();

	var reset_btn = document.getElementById('truco_btn_reset');


	var numero = 0;

	var xo;
	var yo;

	var xf;
	var yf;

	var palo;

	var intervalo;
	var esperando = false;
	var carta_visible = false;


	$(this.main).bind('TRUCO_BTN_TOUCH_START', onTrucoBtnTouchStart);
	$(this.main).bind('touchend', onTouchEndThis);
	$(reset_btn).bind('touchstart', onTouchStartResetBtn);
	$(this.main).bind('touchstart', onTouchStartThis);

	this.animIn = function(){
		switch(parseInt(Main.db.mode,10)){
			case 0:$('.truco_btn_learning').css('display','block');
				   $('.truco_btn_helper').css('display','none');		
				   break;
			case 1:console.log("va a modificar 1");
				   $('.truco_btn_learning').css('display','none');
				   $('.truco_btn_helper').css('display','block');
				   break;
			case 2:$('.truco_btn_learning').css('display','none');
				   $('.truco_btn_helper').css('display','none');
				   break;	   	   

		}

		$(self.main).css('display','block');
	}

	this.animOut = function(){
		$(self.main).css('display','none');
	}

	function onTrucoBtnTouchStart(e){
		if(numero == 0 && !esperando){
			numero = e.numero;
			xo = e.x;
			yo = e.y;	

		}
	}

	function onTouchEndThis(e){
		e.preventDefault();
		if(numero != 0 && !esperando){
			xf = e.originalEvent.changedTouches[0].pageX;
			yf = e.originalEvent.changedTouches[0].pageY;

			if(Math.abs(xf-xo) > Math.abs(yf - yo)){//Horizontal
				if(xf - xo < 0){//A la izquierda - Trebol
					palo = 'T';
				}else{//A la derecha - Picas
					palo = 'P';
				}

			}else{ //Vertical
				if(yf - yo < 0){//Hacia arriba - Corazones
					palo = 'C';
				}else{//Hacia abajo - Diamante
					palo = 'D';
				}
			}

			$($(this.main).find('.truco_btn_learning')[0]).html('numero='+numero+' - palo='+palo+' - tiempo='+Main.db.time*1000);

			intervalo = setInterval(onIntervalo,Main.db.time*1000);
			
		}
	}

	function onIntervalo(){
		clearInterval(intervalo);
		carta.mostrar(numero, palo);
	}


	function onTouchStartResetBtn(e){
		e.preventDefault();
		if(!carta_visible){
			try{
				clearInterval(intervalo);	
			}catch(e){

			}
			
			esperando = false;
			numero = 0;

		}
	}

	function onTouchStartThis(e){
		e.preventDefault();
		if(carta_visible){
			if(Main.db.mode == 0){
				Main.navegar(0);
			}else{
				navigator.app.exitApp();
			}		
		}
	}
}