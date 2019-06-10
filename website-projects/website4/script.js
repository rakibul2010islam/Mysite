var navButton = $('.hamburgerButton > button');

navButton.click(function(){
	$('nav > ul > li').toggleClass('toggleNav');
	$('nav > ul > li:first-child').toggleClass('li-hide');
	$('nav > ul > li:last-child').toggleClass('last-li-positioning');
})

// Navbar Responsiveness codes end here