
function Tutorial(){
	var self = this;
	this.main = document.getElementById('tutorial');

	var placa = document.getElementById('tutorial_placa');
	
	var video_holder = document.getElementById('tutorial_video_holder');
	var video;


	//$(video).bind('ended', onEndVideo);

	this.animIn = function(){
		//PRE
		$(placa).transition({opacity:1,x:322},0);

		$(self.main).css('display','block');

		$(placa).transition({x:0},300);
		
		resetVideo();
		
	}

	this.animOut = function(){
		$(placa).transition({opacity:0},300,function(){
			$(self.main).css('display','none');
			video.pause();
        	video.currentTime = 0
		});
	}

	function resetVideo(){
		$(video_holder).empty();
		video = document.createElement('video');
		video.width = 230;
		video.height = 129;
		video.poster = 'video/poster.jpg';
		video.src = 'video/video.mp4';
		video.controls = true;
		$(video_holder).append(video);
	}

}