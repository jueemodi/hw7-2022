var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
	
	//missed something lecture 
});

//play button
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play(); 
	//volume info
	var volume = document.querySelector("#slider").value;
	document.querySelector("volume").innerHTML = volume + '%'; 
 });

 //pause
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause(); 
});

//slower by 10%

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow video")
	video.playbackRate *= 0.9;
	console.log("slower speed = " + video.playbackRate);
});

//speed up by 10%
document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video")
	video.playbackRate = video.playbackRate / 0.9;
	console.log("faster speed = " + video.playbackRate);
});

//skip fwd
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip 10 s ahead");
	if (video.currentTime > 70) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10; 
	}
	console.log("current time = " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");
	if (video.muted === false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	} else {
		video.muted = false;
	}
});


//volume slider
document.querySelector("#slider").addEventListener("change", function() {
	var playVol = document.getElementById("slider").value; //i think this is wrong
	console.log("before vol: " + video.volume);
	video.volume = playVol / 100; 
	console.log("after vol: " + video.volume);

	//update volume is
	document.querySelector('#volume').innerHTML = playVol + '%'; // not wprking 

});


document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById('player1').className += " oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById('player1').classList.remove('oldSchool');
});


