$(document).ready(function () {

"use strict"

$('.welcome_slider').slick({

	infinite: true,
	draggable: false,
	appendArrows: $('.slider_nav'),
	nextArrow: "<button class=\"prev\"><i class=\"fas fa-caret-right\"></i></button>",
	prevArrow: "<button class=\"next\"><i class=\"fas fa-caret-left\"></i></button>"

});

$('.pro_slider').slick({
  infinite: true,
  draggable: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendArrows: $('.pro_slider_nav'),
  nextArrow: "<button class=\"next\"><i class=\"fas fa-arrow-right\"></i></button>",
  prevArrow: "<button class=\"prev\"><i class=\"fas fa-arrow-left\"></i></button>",
  responsive: [{
    breakpoint:1300,
    settings: {
      slidesToShow:3,
      slidesToScroll:1
    }
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow:2,
      slidesToScroll:1,
    }
  },
  {
    breakpoint: 630,
    settings: {
      slidesToShow: 1
    }
  }
  ]
});


$('.video_popup').magnificPopup({
  	      disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
});


$('.slider').slick({
    infinite: true,
    draggable: false,
    slidesToScroll: 1,
    slidesToShow: 3, 
    appendArrows: $('.slider_arrows'),
    prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
    nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
});

$('.testimonial_slider').slick({

  	infinite: true,
  	draggable: false,
  	appendArrows: $('.testi_slider_nav'),
  	nextArrow: "<div class=\"next1\"><i class=\"fas fa-chevron-right\"></i></div>",
  	prevArrow: "<div class=\"prev\"><i class=\"fas fa-chevron-left\"></i></div>"

});

  $(".scroll-to").bind('click',function(event){

      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, {
          duration: 1200,
          easing: "easeInOutExpo"
      });

      event.preventDefault();
  });

  // Animate distance
  var o = $('.animated-distance');
  if (o.length > 0) {
    o.appear(function() {
      var elem = $(this);
      var b = elem.data('num');
      var d = elem.data('duration');
      var animationDelay = elem.data('animation-delay');
      if ( !animationDelay ) { animationDelay = 0; }
      elem.find('span').text("0" + '%');

      setTimeout(function(){
        elem.animate({ num: b }, {
          duration: d,
          // easing: 'easeOutExpo',
          step: function (num){
            var a = (num).toFixed(0) + '%';
            elem.find('span').text(a);
            elem.css("width", a);
          }
        });
      }, animationDelay);
    });
  }



});

