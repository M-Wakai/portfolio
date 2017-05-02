$(function(){
    
//    $('#navBtn a').click(function(){
////        $('#gnav li').css('display','block');
//        $('#gnav li').slideToggle();
//    });
//    
//    return false;
    
    var $gnav = $('#gnav_L').offset().top;
        
    $(window).on("scroll load resize",function(){
        if($(window).scrollTop() > $gnav){
           $('#gnav_L').css('display','none'); 
           $('#gnav_S').css('display','block'); 
           $('#gnav_S').css('position','fixed');   
           $('#gnav_S').css('top','0'); 
           $('#gnav_S').css('right','0'); 
           $('#gnav_S').css('opacity','.8'); 
        } else{
            $('#gnav_S').css('display','none'); 
            $('#gnav_L').css('display','inline-block');
            $('#gnav_L').css('position','static'); 
            $('#gnav_L ul').css('margin','0 auto'); 
            $('#gnav_L li').css('width','24%');
            $('#gnav_L li').css('float','left');
        }
    
            
        var $scroll = $(window).scrollTop();
//        alert($scroll);
        
        var $pagetop = $('#pagetop');
            
        if ($(window).scrollTop() >= 500) {
        $('#pagetop').fadeIn(1000);
        };
    
        if ($(window).scrollTop() < 500) {
        $('#pagetop').fadeOut(1000);
        };
    })

    $('#pagetop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
})