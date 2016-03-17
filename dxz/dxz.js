window.onload = function() {

	var $nav = $('nav'),
		$header = $('header'),
		headerHeight =  $(window).height() - 100;

	$header.height(headerHeight).css({
		backgroundPosition: 'center ' + headerHeight * .1 + 'px',
		backgroundSize: 'auto 90%'
	});

	$('.nav-trigger').click(function() {
		console.log(21323);
	});
	console.log($('.nav-trigger').length);
};