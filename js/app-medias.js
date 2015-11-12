$(document).ready(function() {

	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	// $('.thumbnail').mouseenter(function() {
	// 	var photoId;
	// 	photoId = $(this).attr("id");
	// 	$("#photo").attr('src',+photoId+);
	// });

		$('.thumbnail').hover(

		function() {
		var thumbnailId;
		thumbnailId = $(this).attr('id');
		$('#photo').attr('hidden',false);
		$('#photo').attr('src','images/photos/'+thumbnailId+'.jpg');
		
	}, function() {
		$('#photo').attr('hidden', true);
	});

	$('.video').click(function() {
		var videoId;
		videoId = $(this).attr('id');
		$('.content-image').hide();
		$('.content-video').hide();
		$('#content-'+videoId).show();
	});
	// $('.thumbnail').mouseleave(function() {
	// 	var photoId;
	// 	photoId = $(this).attr("id");
	// 	$("#photo").attr('src','images/galerie.png');
	// });

});