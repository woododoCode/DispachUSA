// JavaScript Document
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		margin: 10,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
	});
	
});