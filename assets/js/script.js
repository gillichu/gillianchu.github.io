$(document).ready(function() {

//For PHOTO GALLERY PAGE
  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

$("#sidebar-button").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $('#sidebar-button').removeClass("button-active");
    $('.sidebar-container').removeClass("sidebar-active");
    $('.page-wrapper').removeClass("wrapper-active");
  } else {
    $('#sidebar-button').addClass("button-active");
    $('.sidebar-container').addClass("sidebar-active");
    $('.page-wrapper').addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $(".sidebar-container").removeClass("sidebar-active");
    $('.page-wrapper').removeClass("wrapper-active");
    $('body').removeClass("no-scroll");
    $('#sidebar-button').removeClass("button-active");
  }
});

//FOR HOME PAGE

$("#sidebar-button").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $('#sidebar-button').removeClass("button-active");
    $('.sidebar-container').removeClass("sidebar-active");
    $('.page-wrapper2').removeClass("wrapper-active");
  } else {
    $('#sidebar-button').addClass("button-active");
    $('.sidebar-container').addClass("sidebar-active");
    $('.page-wrapper2').addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper2").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $(".sidebar-container").removeClass("sidebar-active");
    $('.page-wrapper2').removeClass("wrapper-active");
    $('body').removeClass("no-scroll");
    $('#sidebar-button').removeClass("button-active");
  }
});

  //Implement the "slide to left" when the user clicks on #carousel-next of the QUOTE CAROUSEL
$("#carousel-next1").click(function() {
  var currMargin = parseInt($('#carousel1').css("margin-left").replace("px", ""));
  if (currMargin == -3840) {
    return false;
  } else {
    $("#carousel1").css("margin-left", currMargin - 960);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev1").click(function() {
  var currMargin = parseInt($('#carousel1').css("margin-left").replace("px", ""));
  if (currMargin == 0) {
    return false;
  } else {
    $("#carousel1").css("margin-left", currMargin + 960);
  }
});


  //Implement the "slide to left" when the user clicks on #carousel-next of the LIVED CAROUSEL
$("#carousel-next2").click(function() {
  var currMargin = parseInt($('#carousel2').css("margin-left").replace("px", ""));
  if (currMargin == -3840) {
    return false;
  } else {
    $("#carousel2").css("margin-left", currMargin - 960);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev2").click(function() {
  var currMargin = parseInt($('#carousel2').css("margin-left").replace("px", ""));
  if (currMargin == 0) {
    return false;
  } else {
    $("#carousel2").css("margin-left", currMargin + 960);
  }
});

  //Implement the "slide to left" when the user clicks on #carousel-next of the LIVED CAROUSEL
$("#carousel-next3").click(function() {
  var currMargin = parseInt($('#carousel3').css("margin-left").replace("px", ""));
  if (currMargin == -3840) {
    return false;
  } else {
    $("#carousel3").css("margin-left", currMargin - 960);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev3").click(function() {
  var currMargin = parseInt($('#carousel3').css("margin-left").replace("px", ""));
  if (currMargin == 0) {
    return false;
  } else {
    $("#carousel3").css("margin-left", currMargin + 960);
  }
});

  //Implement the "slide to left" when the user clicks on #carousel-next of the LIVED CAROUSEL
$("#carousel-next-home").click(function() {
  var currMargin = parseInt($('#carousel-home').css("margin-left").replace("px", ""));
  if (currMargin == -3840) {
    return false;
  } else {
    $("#carousel-home").css("margin-left", currMargin - 960);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev-home").click(function() {
  var currMargin = parseInt($('#carousel-home').css("margin-left").replace("px", ""));
  if (currMargin == 0) {
    return false;
  } else {
    $("#carousel-home").css("margin-left", currMargin + 960);
  }
});


// ON HOVER CHANGE THE STRIP TEXT

$("#strip1").hover(function () {
 $("#a1p1").text("This is my first blog post! Welcome to my website!");
 $("#a1p2").text("It's built purely out of HTML/CSS/JQUERY as an experiment and a self-growth project! (And for the webdev decal lol)");
}, function () {
 $("#a1p1").text("");
 $("#a1p2").text("");
});


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});