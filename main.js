let i = 0;
let content = "i don't do much.";
let speed = 125;
let wait = 1000;

$(document).ready(function(){
	setTimeout(typeWriter, wait);
});

function typeWriter(){
	if(i < content.length){
		document.getElementById("bottomtext").innerHTML += content.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
