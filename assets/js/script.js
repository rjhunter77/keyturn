$(document).ready(function() {

	// nav toggle
	$("#btn-menu").click(function() {
		$(this).toggleClass("open");

		$(".menu-bg").slideToggle(100);
	});

	// textarea placeholder
	$("#txtarea-keyturn").keypress(function() {
		$(".placeholder").hide();
	});

	$("#txtarea-keyturn").blur(function() {
		if ($(this)[0].value == '') {
			$(".placeholder").show();
		}
	});	
	
	// smooth effect for links
	$('a[href*="#"]').click(function(event){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		event.preventDefault();
	});
});