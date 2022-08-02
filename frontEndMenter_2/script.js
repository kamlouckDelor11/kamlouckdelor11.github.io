
$(document).ready(function(){
    $('.feature').mouseover(function(){
        $('.ul-feature').addClass('scrol-feature');
        $('.rotate-feature').addClass('rote');
   });
   
    $('.feature').mouseout(function(){
        $('.ul-feature').removeClass('scrol-feature');
        $('.rotate-feature').removeClass('rote');
    });

   $('.compagny').mouseover(function(){
        $('.ul-compagny').addClass('scrol-compagny');
        $('.rotate-compagny').addClass('rote');
    });

   $('.compagny').mouseout(function(){
        $('.ul-compagny').removeClass('scrol-compagny');
        $('.rotate-compagny').removeClass('rote');
    });

    $('.menu').click(function(){
        $('nav').toggleClass('active-nav');
        $('.menu').toggleClass('opacity');
        
    }); 
});



 
