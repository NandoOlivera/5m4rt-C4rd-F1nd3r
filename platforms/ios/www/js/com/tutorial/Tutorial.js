
function Tutorial(){
	var self = this;
	this.main = document.getElementById('tutorial');

	var placa = document.getElementById('tutorial_placa');

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
}