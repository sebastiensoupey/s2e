$(document).ready(function() {

	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	$('.day').mouseenter(function() {
		var dayId;
		dayId = $(this).attr("id");
		$("#planning").attr('src','images/planning-'+dayId+'.png');
	});
	// $('.day').mouseleave(function() {
	// 	$('#service').attr('src','images/service-aaa.png');
	// });

});