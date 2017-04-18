$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });
  
  scroll();
});


var scroll = function() { 
  $("#xabout").on("click", function(){
    $("body").animate({
      scrollTop: $("#about").offset().top
      }, 900);
  });

  $("#xportfolio").on("click", function(){
    $("body").animate({
      scrollTop: $("#portfolio").offset().top
      }, 900);
  });

   $("#xcontact").on("click", function(){
    $("body").animate({
      scrollTop: $("#contact").offset().top
      }, 900);
  });
}
