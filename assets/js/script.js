$(document).on('click', '[data-toggle="modal"]', function(e){
	e.preventDefault();
	var target = $(this).data('target');
	$(target).fadeIn('fast');
	$(target).find('.modal-content').addClass('swing');
});
$(document).on('click', '.modal .close', function(e){
	e.preventDefault();
	$('.modal').fadeOut('slow');
});
$(document).click(function(e) {
  if ( $(e.target).is('.modal') ) {
	$('.modal').fadeOut('slow');
  }
});