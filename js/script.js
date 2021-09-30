
$(document).ready(function(){
    $("i.bar").click(function(){
      $(".nav-lsit ul").slideToggle();
    });
    $(window).scroll(function(){
        $('.navbar-fixed').css({"background-color": "rgba(0,0,0,.6)"});
        var scroll = $(window).scrollTop();
        if (scroll > 3110){
          $('.timer').countTo();
        }
    });
   
  
  });


 