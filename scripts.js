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


function scroll() { 
  $("#xabout").click(function(){
    $("html, body").animate({
      color: "red"}, 2000);
    });
  }
