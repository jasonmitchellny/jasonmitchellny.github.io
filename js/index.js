

$('.carousel').carousel('pause')

var vHeight = $(window).height(),
	vWidth = $(window).width(),
	cover = $('.cover');

cover.css({"height":vHeight,"width":vWidth});

$(document).scroll(function () {
	var y = $(this).scrollTop();
    if (y > vHeight) {
        $('.stick').css( "position", "fixed" );
    } else {
        $('.stick').css( "position", "static" );
    }
});