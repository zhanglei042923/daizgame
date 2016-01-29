window.onload=function(){
	var audio=document.getElementById("audio");
	audio.onclick=function(){
		alert(1)
	if(audio.paused){
		audio.play();
	}else{
		audio.pause();	
	}
  }
}