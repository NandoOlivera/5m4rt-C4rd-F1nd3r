
function TrucoBtn(id,div){
	
	$(div).bind('touchstart', onTouchStartDiv);

	function onTouchStartDiv(e){
		var evt = jQuery.Event('TRUCO_BTN_TOUCH_START');
		evt.x = e.originalEvent.touches[0].pageX;
		evt.y = e.originalEvent.touches[0].pageY;
		evt.numero = id+1;
		$(div).trigger(evt);
	}
}