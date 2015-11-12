$(document).ready(function() {

	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	$('.banniere').mouseenter(function() {
		$('#serieux').attr('src','images/photos/grp-fun.JPG');
	});
	$('.banniere').mouseleave(function() {
		$('#serieux').attr('src','images/photos/grp-serieux.JPG');
	});

	$('#video-pres').click(function() {
		$('.content-image').hide();
		$('.content-video').show();
	});

});