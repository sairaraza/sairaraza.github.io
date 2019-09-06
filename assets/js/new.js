$(document).ready(function() {
  lightboxOnResize();
  $('#emailid2').bind("cut copy paste",function(e) {
    e.preventDefault();
  });
});
$(window).resize(lightboxOnResize);

// init Isotope
$(window).load(function(){
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

  });
});

// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// lightbox
//https://ashleydw.github.io/lightbox/#global-galleries
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault() ;
    $(this).ekkoLightbox();
});

function lightboxOnResize() {
  //768px - bootstrap xs
    if ($(window).width() < 768) {
        $('a[data-toggle="lightbox"]')
            .removeAttr('data-toggle')
            .addClass('lightboxRemoved');

      $('.lightboxRemoved').click(function( event ) {
  event.preventDefault();

      });

    } else {
        $('a.lightboxRemoved').attr('data-toggle', 'lightbox');
    }
}

//SMOOTH SCROLL

$(function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//toggle bottom nav on scroll
$(document).scroll(function () {
    var y = $(this).scrollTop();
    var height = $(window).height();
     //console.log(height);
    if (y > height) {
        $('.bottomNav').fadeIn();
        $("#navText").fadeIn();
    } else {
        $('.bottomNav').fadeOut();
        $("#navText").fadeOut();
    }
});


//detect which nav link was clicked and change bottom nav text accordingly
$('.half-screen a').click(function(){
  if ($(this).text() == "Photographer") {
    $("#navText")[0].text = "Web Developer";
  } else {
    $("#navText")[0].text = "Photographer";
  }
});

//navigation using bottom nav
$('#navText').click(function(){
  if (this.text == "Photographer") {
    $(this).attr("href", "#photoSection");
  } else if (this.text == "Web Developer" ) {
    $(this).attr("href", "#devSection");
  }
});

//if scrolled to #photoSection change bottomNav text to Web Developer
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    if(isScrolledIntoView($('#photoSection')))
    {
      $("#navText")[0].text = "Web Developer";
      console.log("text should change to Web Developer");
    }  else if (isScrolledIntoView($('#devSection')))  {
      $("#navText")[0].text = "Photographer";
    }

    if (isScrolledIntoView($("#contactSection"))) {
      $(".envelopeIcon").fadeOut();
    } else {
      $(".envelopeIcon").fadeIn();
    }
});

//contact form check on submission

function check() {
 // console.log("test");
  var email1 = $("#emailid");
  var email2 = $("#emailid2");

 // console.log(email1.val()+" "+ email2.val());
  if (email1.val()!=email2.val()) {
    $("#emailError").html("Please make sure the emails match!");
    //scroll up to the error so that the user can see it
    return false;
  } else {
    $("#emailError").html();
    return true;
  }
}
