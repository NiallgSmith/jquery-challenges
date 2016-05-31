$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".card").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click",function() {
		$("p").css("background-color", "red");
	});
	$("h2").on("mouseenter",function() {
		$("h2").addClass("lightBlueBackground");
	});
	$("h2").on("mouseleave",function() {
		$("h2").removeClass("lightBlueBackground");
	});
	$("h2").on("mouseover",function() {
		$(this).css("font-size","2em");
	});
	$(".bottom_button").on("mouseenter",function() {
		$("body").addClass("lightBlueBackground");
	});
	$(".bottom_button").on("mouseleave",function() {
		$("body").removeClass("lightBlueBackground");
	});
});