$(document).ready(function(){
	if($('#leftarrow').length) {
		shortcut.add('Left', function(){
			window.location=$('#leftarrow').attr('href');
		});
	}
	if($('#rightarrow').length) {
		shortcut.add('Right', function(){
			window.location=$('#rightarrow').attr('href');
		});
	}
});

var leftShowed=false;
var rightShowed=false;

$(document).mousemove(function(e){
	var windowWidth = document.body.offsetWidth;
	if (e.pageX < windowWidth*0.4) {
		if(!leftShowed) {$('#leftarrow').fadeIn(); leftShowed=true;}
	}
	else {
		if(leftShowed) {$('#leftarrow').fadeOut(); leftShowed=false;}
	}
	if (e.pageX > windowWidth*0.6) {
		if(!rightShowed) {$('#rightarrow').fadeIn(); rightShowed=true;}
	}
	else {
		if(rightShowed) {$('#rightarrow').fadeOut(); rightShowed=false;}
	}		
});
