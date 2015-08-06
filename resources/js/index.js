$(document).ready(function(){
	$("#navbar-top").fadeIn(1000);
	$("#navbar-bottom").fadeIn(1000);
	$("#site-bground").animate({ opacity: 1 }, { duration: 4000 });
	// $("#jumboBar").click(function(){
	// 	this.animate({top: '250px'});
	// });
	$("#show-pic").click(function(){
		$("#site-container").fadeOut(400);
		$("#show-pic").fadeIn(1);
	});
});