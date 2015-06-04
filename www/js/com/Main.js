
function Main(){
	this.main = document.getElementById('main');

	
	$(this.main).transition({scale:$(window).width()/320},0);
	$(this.main).css({'display':'block','height':Math.floor(($(window).height()*320)/$(window).width(),10)});

	window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
	window.brightness.setKeepScreenOn(true);


	try{
		StatusBar.hide();	
	}catch(e){

	}


	brightness.getBrightness(function(status){
		Main.brightness_default = status;
		Main.brightness_actual = Main.brightness_default;

		document.addEventListener("resign", onPauseApp, false);
		document.addEventListener("active", onResumeApp, false);

	}, function(){});
	

	Main.alerta = new Alerta();
	
	Main.db = new DataBase();

	var logo = document.getElementById('main_logo');
	var back_btn = document.getElementById('main_back_btn');

	var arr_secciones = new Array();
	arr_secciones.push(new Home());
	arr_secciones.push(new Settings());
	arr_secciones.push(new Tutorial());
	arr_secciones.push(new Truco());

	var actual = 0;

	
	//PRE
	$(logo).transition({scale:0},0);
	$(back_btn).transition({x:110, opacity:0},0);

	$(logo).transition({opacity:1, scale:1},400,function(){
		$(logo).css('transform-origin','left top');
	});
	arr_secciones[actual].animIn();


	$(back_btn).bind('touchstart', onClickBackBtn);
	

	Main.navegar = function(id){
		arr_secciones[actual].animOut();
		actual = id;
		arr_secciones[actual].animIn();
		
		
		if(id == 0){
			$(logo).transition({scale:1, x:0, y:0},300);
			$(back_btn).transition({x:110, opacity:0},300);
		}else if(id != 3){
			$(logo).transition({scale:0.56, x:-64, y:-16},300);
			$(back_btn).delay(200).transition({x:0, opacity:1},300);
		}
	}

	function onPauseApp(e){
		brightness.setBrightness(Main.brightness_default, function(){}, function(){});
	}

	function onResumeApp(e){
		brightness.setBrightness(Main.brightness_actual, function(){}, function(){});
	}

	function onClickBackBtn(e){
		e.preventDefault();
		Main.navegar(0);
	}

}
