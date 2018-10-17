
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  
	
     
     //  Active Mobile Menu

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });
    //Round1 next button
   

$('#NEXTR1').click(function () {

   
    $("#round1").hide();
    $("#round2").show();



});

    //  video popup

$('.play-btn').magnificPopup({
    
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    //  member carusel

    $('.active-member-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 30,
        dots: true,
    });

    $('.next-trigger').click(function() {
        $(".active-member-carousel").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-trigger').click(function() {
        $(".active-member-carousel").trigger('prev.owl.carousel');
    });



    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); 
        var submit = $('.submit-btn'); 
        var alert = $('.alert-msg'); 

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); 

            $.ajax({
                url: 'mail.php', 
                type: 'POST', 
                dataType: 'html', 
                data: form.serialize(), 
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn();
                    form.trigger('reset'); 
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });




 });
