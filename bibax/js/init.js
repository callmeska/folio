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
		$('nav a').removeClass('current');
		currentSection = $section.attr('id');
		$('.target-' + currentSection).addClass('current');
	}

	$('nav').on('click','a', function(){
	
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});	
	
	
    $("#nav-mobile").html($("#nav-main").html());
	
    $("#nav-trigger").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("opened");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("opened");
        }
    });

	
});