
function Truco(){
	var self = this;
	this.main = document.getElementById('truco');

	var arr_btns = new Array();
	for(var i=0; i < 13;i++){
		arr_btns.push(new TrucoBtn(i,$(this.main).find('.truco_btn')[i]));
	}

	var carta = new TrucoCarta();

	var reset_btn = $(this.main).find('.truco_btn')[14];


	var numero = 0;

	var xo;
	var yo;

	var xf;
	var yf;

	var palo;

	var intervalo;
	var estado = 0; //0 = ready, 1= touchstart, 2 = touchend y esperando, 3= carta visible


	$(this.main).bind('TRUCO_BTN_TOUCH_START', onTrucoBtnTouchStart);
	$(this.main).bind('touchend', onTouchEndThis);
	$(reset_btn).bind('touchstart', onTouchStartResetBtn);

	this.animIn = function(){
		estado = 0;
		switch(Main.db.getMode()){
			case 0:$('.truco_btn_learning').css('display','block');
				   break;
			case 1:$('.truco_btn_learning').css('display','none');
				   break;
		}

		$(self.main).css('display','block');
	}

	this.animOut = function(){
		$(self.main).css('display','none');
	}

	function onTrucoBtnTouchStart(e){
		if(estado == 0){
			numero = e.numero;
			xo = e.x;
			yo = e.y;	
			estado = 1;
		}
	}

	function onTouchEndThis(e){
		e.preventDefault();
		if(estado == 1){
			estado = 2;
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

			intervalo = setInterval(onIntervalo,Main.db.getTime()*1000);
			
		}
	}

	function onIntervalo(){
		estado = 3;
		clearInterval(intervalo);
		carta.mostrar(numero, palo);
	}


	function onTouchStartResetBtn(e){
		e.preventDefault();
		if(estado != 3){
			estado = 0;
			try{
				clearInterval(intervalo);	
			}catch(e){

			}
		}
	}

	
}