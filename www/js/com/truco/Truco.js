
function Truco(){
	var self = this;
	this.main = document.getElementById('truco');

	this.animIn = function(){
		$(self.main).css('display','block');
	}

	this.animOut = function(){
		$(self.main).css('display','none');
	}
}