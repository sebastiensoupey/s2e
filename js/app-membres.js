$(document).ready(function() {

	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	$('.membre').hover(

		function() {
		var memberId;
		memberId = $(this).attr('id');
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/photos/'+memberId+'.jpg');
		
	}, function() {
		$('#photo').attr('hidden', true);
	});

		$('.membre2').hover(

		function() {
		var memberId;
		memberId = $(this).attr('id');
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/voile/membres/'+memberId+'.jpg');
		
	}, function() {
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/voile/membres/tous.jpg');
	});

		$('.resultat').hover(

		function() {
		var memberId;
		memberId = $(this).attr('id');
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/actu/'+memberId+'.jpg');
		
	}, function() {
		$('#photo').attr('hidden',true);

	});

		$('.photo').hover(

		function() {
		var memberId;
		memberId = $(this).attr('id');
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/'+memberId+'.jpg');
		
	}, function() {
		$('#photo').attr('hidden', true);
	});
});