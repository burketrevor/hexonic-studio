$(window).scroll(function() {
    if ($(this).scrollTop()>600)
     {
      $('.header').show(1000);
     }
  	else 
      {
        $('.header').hide(1000);
     }
 });