$(document).ready(function() {
	
    $(window).on( 'scroll', function(e) {
        if ( $(window).scrollTop() > 144 ) {
            $('.menu_box').addClass('fixed');
        }
        else { $('.menu_box').removeClass('fixed'); }
    });
	$('.top_slider').slick( { arrows : false, dots : true } );
    $('.hidden_menu a').on( 'click', function(e) {
        $('ul.menu').toggleClass('active');
    });
	
	$('.menu_box .menu_search').on( 'click', function(e) {
		if ( !$('.menu_box .search').hasClass('active') ) { $('.menu_box .search').fadeIn(400).addClass('active'); $('.cover').addClass('active'); }
		else { $('.menu_box .search').fadeOut(400).removeClass('active'); $('.cover').removeClass('active'); }
	});
	
});