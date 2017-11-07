$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });

    $(".work").click(function(){
      mixpanel.track(
        "Work section clicked",
        {"test": "hi",
        "specific item": this.childNodes[1].childNodes[1].alt}
      );
    })

    // mixpanel.track_links(".nav-icons", "click work", {
    //     "referrer": document.referrer
    // });

  if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
    navScroll();
    picHover();
    thankYou();
    animateHeart();
    scroll();
    handle();
    slideEffects();
  } else {
    scroll();
    handle();
    }
});

  var slideEffects = function() {
    // loop over the items I want to slide in. within the loop, callback for on scroll to the slidein function
    // add classes to left and right elements i want to slide in
    // translate those classes to be off the page a bit and transparent
    // in the function, i want them to slide in when they are half exposed, and to disappear when they are off the page
    // to slide in, I will make a transition for those classes when they have class active

    const sliders = document.querySelectorAll('.slide-in');
    // slide in 
    // console.log(sliders)
    function slideIn(e) {
      // console.log(e)
      sliders.forEach(el => {
        console.log(el)
        // the point where the element will slide in at
        const slideInAt = (window.scrollY + window.innerHeight) - el.height / 2;
        const imageBottom = el.offsetTop + el.height;
        // the point where the user is sliding over the slideInAt point for the particular element
        const isHalfShowing = slideInAt > el.offsetTop;
        // the point on the page where the scroll point is still not past the particular element
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShowing && isNotScrolledPast) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', slideIn);
  };


var handle = function() {
$('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
  })
}


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

// if the current scroll top is greater than the lastscrolltop
// (which starts at 0 everytime you stop scrolling), then hide the navbar
// when you scroll down, the scrolltop increases, so it will hide everytime you scroll down
// if you're scrolling up, the lastscrolltop gets set to currentscrolltop, 
// so it will start at a positive number, and when you're scrolling up, 
// the current will become less than the lastscrolltop, and so it will remove the
// class hidden and display the navbar again

var navScroll = function() {
  var documentElem = $(document),
    nav = $("nav"),
    lastScrollTop = 0;

    documentElem.on("scroll", function(){
      var currentScrollTop = $(this).scrollTop();
      
      if (currentScrollTop >= lastScrollTop) {
        nav.hide("fast");
      } else {
        nav.show("fast");
      }

      lastScrollTop = currentScrollTop;
    })
}


var picHover = function() {

var $pic = $("img.profile");

  $("#about").on({ 

      mouseenter: function () {
        $pic.attr("src", "http://res.cloudinary.com/dtk22y6kq/image/upload/v1492725327/tahoe_exl8rx.png");
      },
      mouseleave: function () {
        $pic.attr("src", "http://res.cloudinary.com/dtk22y6kq/image/upload/v1492725930/bluepic_cxz9qi.jpg");
      }
  });
}

var thankYou = function() {
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
      url: "https://formspree.io/jack.dagley77@gmail.com",
      method: "POST",
      data: $("#contact-form").serialize(),
      dataType: "json",
      success:function() {
        console.log("success");
        $("#form-block").hide();
        $("#thankyou").show();
      }
    });
  });
}

var animateHeart = function() {
    $('.fa-chevron-down').animate({
        fontSize: $('.fa-chevron-down').css('fontSize') === '70px' ? '55px' : '70px'
    }, 700, animateHeart);
};






