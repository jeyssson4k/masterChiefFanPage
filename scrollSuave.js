$(document).ready(function(){

	$('a.explorar').on('click', function(e){
		e.preventDefault();

		if ($(window).scrollTop() != 0) {
			$('html, body').stop().animate({scrollTop: 0},1000);
		}
	});

	$('a.explorar').on('click', function(e){
		e.preventDefault();
		var seccionOffsetTop = $($(this).attr('href')).offset().top - 240;
			$('html, body').stop().animate({scrollTop: seccionOffsetTop},1000);
	});
});
