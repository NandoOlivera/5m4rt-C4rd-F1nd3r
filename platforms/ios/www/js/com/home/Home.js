
function Home(){
	var self = this;
	this.main = document.getElementById('home');

	var perform_btn = document.getElementById('home_perform_btn');
	var settings_btn = document.getElementById('home_settings_btn');
	var tutorial_btn = document.getElementById('home_tutorial_btn');

	$(perform_btn).bind('touchstart', onClickPerformBtn);
	$(settings_btn).bind('touchstart', onClickSettingsBtn);
	$(tutorial_btn).bind('touchstart', onClickTutorialBtn);

	this.animIn = function(){
		//PRE
		$(perform_btn).transition({y:250,opacity:0},0);	
		$(settings_btn).transition({y:250,opacity:0},0);	
		$(tutorial_btn).transition({y:250,opacity:0},0);	

		$(self.main).css({'display':'block','opacity':1});

		$(perform_btn).transition({y:0,opacity:1},300);	
		$(settings_btn).delay(300).transition({y:0,opacity:1},300);	
		$(tutorial_btn).delay(600).transition({y:0,opacity:1},300);
	}

	this.animOut = function(){
		$(self.main).transition({opacity:0},300,function(){
			$(self.main).css('display','none');	
		});
	}

	function onClickPerformBtn(e){
		e.preventDefault();
		Main.navegar(3);
	}

	function onClickSettingsBtn(e){
		e.preventDefault();
		Main.navegar(1);
	}

	function onClickTutorialBtn(e){
		e.preventDefault();
		Main.navegar(2);
	}
}