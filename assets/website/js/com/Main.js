
function Main(){
	this.main = document.getElementById('main');

	var fondo = document.getElementById('fondo');

	var app_store_btn = document.getElementById('app_store_btn');
	var support_btn = document.getElementById('support_btn');

	$(app_store_btn).bind('mouseenter', onMouseEnterBtn);
	$(app_store_btn).bind('mouseleave', onMouseLeaveBtn);

	$(support_btn).bind('mouseenter', onMouseEnterBtn);
	$(support_btn).bind('mouseleave', onMouseLeaveBtn);


	function onMouseEnterBtn(e){
		$(fondo).stop();
		$(fondo).clearQueue();

		$(this).stop();
		$(this).clearQueue();

		$(this).animate({opacity:0.8},100);
		$(fondo).animate({'opacity':0.5},200);
	}

	function onMouseLeaveBtn(e){
		$(fondo).stop();
		$(fondo).clearQueue();

		$(this).stop();
		$(this).clearQueue();

		$(this).animate({opacity:1},100);
		$(fondo).animate({'opacity':0.4},200);
	}
}