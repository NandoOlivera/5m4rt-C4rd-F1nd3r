
function Settings(){
	var self = this;
	this.main = document.getElementById('settings');

	var placa = document.getElementById('settings_placa');

	var select_mode = $(this.main).find('.settings_select')[0];
	var select_time = $(this.main).find('.settings_select')[1];
	var select_reveal = $(this.main).find('.settings_select')[2];

	select_mode.value = Main.db.getMode();
	select_time.value = Main.db.getTime();
	select_reveal.value = Main.db.getReveal();

	$(select_mode).bind('change', onChangeSelectMode);
	$(select_time).bind('change', onChangeSelectTime);
	$(select_reveal).bind('change', onChangeSelectReveal);


	this.animIn = function(){
		//PRE
		$(placa).transition({opacity:1,x:322},0);

		$(self.main).css('display','block');

		$(placa).transition({x:0},300);

	}

	this.animOut = function(){
		
		$(placa).transition({opacity:0},300,function(){
			$(self.main).css('display','none');
		});
	}

	function onChangeSelectMode(e){
		Main.db.setMode(select_mode.value);
	}

	function onChangeSelectTime(e){
		Main.db.setTime(select_time.value);
	}

	function onChangeSelectReveal(e){
		Main.db.setReveal(select_reveal.value);
	}
}