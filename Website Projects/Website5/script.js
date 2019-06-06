// For hiding and showing navbar
var navButton = $('.hamburgerButton > button');

navButton.click(function(){
	$('nav > div > ul').toggleClass('toggleNav');
	$('nav > div > ul > li').toggleClass('toggleNav');
});



// For Adding more space above the cover image on the button click

var x = 0;


navButton.click(function(){
	if(x === 0){
		$('.photo').css('top', '31rem');
		x = 1;
	} else{
		$('.photo').css('top', '11.5rem');
		x = 0;
	}
})


// SetInterval for Animation Interval

setInterval(function(){
	$('.notices > a').toggleClass('w3-animate-bottom');
}, 5000);
