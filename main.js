let i = 0;
let content = "i don't do much.";
let currContent = "";
let speed = 125;
let wait = 1000;

$(document).ready(function(){
	setTimeout(typeWriter, wait);
});

function typeWriter(){
	if(i < content.length){
		$("#bottomtext").append(content.charAt(i));
		i++;
		setTimeout(typeWriter, speed);
	} else {
		setTimeout(function(){
			$("#bottomtext").css("animation", "none");
			$("#bottomtext").css("border", "none");
		 }, 2700);
	};
}
