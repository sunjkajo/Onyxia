jQuery(function( $ ) {
    
    $('.hero h1').fadeIn(1300);
    $('.hero p').fadeIn(1500);
    
    $('.top-banner i').click( function(){
        $('html, body').animate({
            scrollTop: $(".menu").offset().top
        }, 2000);
        
    });

    jQuery('.menu_item a').click(function(e) {
        var loc = $(this).attr('href');
         
        if( loc.charAt( 1 ) === '#' ){
            if ( window.location.origin ){
                e.preventDefault();
            }
            loc = loc.slice( 1 );
        }else{
            $(this).trigger( "click" );
        }
        if ( $(document).scrollTop() < $('.top-banner').height() ){
            var offset = 132;
        }else{
            var offset = 77;
        }
        $('html,body').animate({
            scrollTop: $(loc).offset().top - offset 
        },1200);
    });

    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if ( scroll > $('.top-banner').height() ){
            $('.menu').css({'position':'fixed', 'top':'0'});
        }else if ( $('.menu').offset().top < $('.top-banner').height() ){
            $('.menu').css('position','static');
        }
        if ( $('.sub').length > 0 ){
            if ( scroll > $('.sub').height() ){
                 $('section.menu').css({'position':'fixed', 'top':'0'});
            }else{
                 $('section.menu').css('position','static');
            }
        }
    });
});