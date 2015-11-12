$(document).ready(function() {

	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	$('.service').mouseenter(function() {
		var serviceId;
		serviceId = $(this).attr("id");
		$("#service").attr('src','images/service-'+serviceId+'.png');
	});

});