;(function($){
 'use strict';


 $('a[href*="#"]').on('click', function(){

  console.log('test')
  event.preventDefault();

  $('body').animate({
   scrollTop:$($(this).attr('href')).offset().top 

  }, 1600);
 });







// 

})(jQuery);