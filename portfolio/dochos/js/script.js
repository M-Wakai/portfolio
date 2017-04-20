$(function () {
    $('#pagetop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    
    $(window).scroll(function () {
            
        var $scroll = $(window).scrollTop();
//        alert($scroll);
        
        var $pagetop = $('#pagetop');
            
        if ($(window).scrollTop() >= 500) {
        $('#pagetop').fadeIn(1000);
        };
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() < 500) {
        $('#pagetop').fadeOut(1000);
        };
    });
    
    var $gnav = $('#gnav').offset().top;
        
    $(window).scroll(function(){
        if($(window).scrollTop() > $gnav){
           $('#gnav').css('position','fixed');   
           $('#gnav').css('top','0'); 
        } else{
           $('#gnav').css('position','absolute'); 
           $('#gnav').css('top','auto'); 
           $('#gnav').css('bottom','0'); 
        }
    });
    
    $('#gnav a').click(function () {

        var target = $($(this).attr('href')).offset().top;
        
//        target -= 100;
        
        $('html, body').animate({
            scrollTop: target
        }, 2000);
        
        return false;
        
//         alert($gnav);
    });
    
    $(window).scroll(function(){
        
        for(var i = 1; i <= 4; i++){
            $scroll =$(window).scrollTop();
            $scroll += 150;
            if($('section:nth-child('+ i +')').offset().top < $scroll){
                
                $('.current').removeClass('current');
                
                $('#gnav li:nth-child('+ i +')').addClass('current');
            }else if($('section:first-child').offset().top>$scroll){
                    $('#gnav li').removeClass('current');
            }
         }
        
    });
    
    $('.news-nav a').click(function () {
        
//        window.alert($(this).attr('href'));
        
        $('.news-area div').css('display','none');
        $($(this).attr('href')).fadeIn(500);
        
        $('.news-nav a').removeClass();
        $(this).addClass('active');
        
        return false;
        
//         alert($gnav);
    });
    
    var bannerArray = ['red', 'yellow', 'green', 'blue', 'brown'];
    
    var num = Math.random();
    
    num = num*5;
    
    num = Math.floor(num);
    
    $('aside img').attr('src', 'img/banner/' + bannerArray[num] + '.jpg');
    
    
        $('#top-gallery a').click(function () {　　　　
        $('body').append('<div id="bg"></div>');
        $('body').append('<div id="modal-photo"></div>');
        $('#bg').hide();
        $('#modal-photo').hide();
        
//        window.alert($(this).attr('href'));
        
        $('#modal-photo').html('<img>');
        $('#modal-photo img').attr('src', $(this).attr('href'));
        $('#bg').fadeIn();
        $('#modal-photo').fadeIn();
        
        $('#bg,#modal-photo').click(function () {
            $('#bg,#modal-photo').fadeOut(function () {
                $('#bg').remove();
                $('#modal-photo').remove();
            });
        });
        
        return false;
        
    });
    
      $('#top-gallery a').hover(function(){
        
        $(this).append('<div class="caption"><p>' + $(this).children('img').attr('alt') + '</p></div>');
        
        $(this).children('.caption').fadeIn();
    
//    $('.caption p').html($(this).children('img').attr('alt'));


      },function(){

         $(this).children('.caption').fadeOut(function(){
    
         });
      });
    
    
  $('button').click(function(){
       
       var target = $(this).attr('value');
       
       $('.gallery-item li').each(function(){
           
           $(this).animate({'opacity' : .1}, 1000, function(){
               $(this).hide();
               
               if($(this).hasClass(target) || target == 'all'){
                   
                   $(this).show();
                   $(this).animate({'opacity' : 1}, 1000);
               }
           });
       });
   });
    
        var current = 1;
    var next = 2;
    timer = setInterval(slideTimer, 3000);

    function slideTimer() {
        $('#slide li:nth-child(+' + current + ')').fadeOut(500);
        $('#slide li:nth-child(+' + next + ')').fadeIn(500);
        current = next;
        next = ++next;
        if (next > 3) {
            next = 1;
        }
        $('.target').removeClass('target');
        $('#button li:nth-child(+' + current + ') a').addClass('target');
    };
    
//    $('#button a').click(function () {
//        next = $(this).html();
//        clearInterval(timer);
//        timer = setInterval(slideTimer, 3000);
//        slideTimer();
//        return false;
//    });
    
})