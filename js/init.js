function init() {
	window.addEventListener('scroll', function (e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300,
			header = document.querySelector("header");
		if (distanceY > shrinkOn) {
			classie.add(header, "smaller");
		} else {
			if (classie.has(header, "smaller")) {
				classie.remove(header, "smaller");
			}
		}
	});
}
window.onload = init();


$(function () {

	$("#main section").waypoint(function (direction) {
		if (direction === 'down') {
			change($(this));
		}
	}, {
		offset: '20%'
	}).waypoint(function (direction) {
		if (direction === 'up') {
			change($(this));
		}
	}, {
		offset: '-30%'
	});

	function change($section) {
		$('nav.menu a').removeClass('current');
		currentSection = $section.attr('id');
		$('.target-' + currentSection).addClass('current');
	}

	$('nav.menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});
	
	
	$('.menu-toggle').click(function(){
		$(this).toggleClass('opened');
	});
	
});