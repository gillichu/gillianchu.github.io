$(document).ready(function() {

//For PHOTO GALLERY PAGE
  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

$("#sidebar-button1").click(function () {
  if ($(".sidebar-container1").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $('#sidebar-button1').removeClass("button-active");
    $('.sidebar-container1').removeClass("sidebar-active");
    $('.page-wrapper1').removeClass("wrapper-active");
    $('.hero-layer').removeClass("wrapper-active");
  } else {
    $('#sidebar-button1').addClass("button-active");
    $('.sidebar-container1').addClass("sidebar-active");
    $('.page-wrapper1').addClass("wrapper-active");
    $('.hero-layer').addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$("#hero-layer").click(function () {
  if ($(".sidebar-container1").hasClass("sidebar-active")) {
    $(".sidebar-container1").removeClass("sidebar-active");
    $('.page-wrapper1').removeClass("wrapper-active");
    $('body').removeClass("no-scroll");
    $('#sidebar-button1').removeClass("button-active");
  }
});


//For Photo Gallery
$("#sidebar-button2").click(function () {
  if ($(".sidebar-container2").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $('#sidebar-button2').removeClass("button-active");
    $('.sidebar-container2').removeClass("sidebar-active");
    $('.page-wrapper2').removeClass("wrapper-active");
  } else {
    $('#sidebar-button2').addClass("button-active");
    $('.sidebar-container2').addClass("sidebar-active");
    $('.page-wrapper2').addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper2").click(function () {
  if ($(".sidebar-container2").hasClass("sidebar-active")) {
    $(".sidebar-container2").removeClass("sidebar-active");
    $('.page-wrapper2').removeClass("wrapper-active");
    $('body').removeClass("no-scroll");
    $('#sidebar-button2').removeClass("button-active");
  }
});



//FOR THOUGHTS&REFLECTIONS PAGE

$("#sidebar-button3").click(function () {
  if ($(".sidebar-container3").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $('#sidebar-button3').removeClass("button-active");
    $('.sidebar-container3').removeClass("sidebar-active");
    $('.page-wrapper3').removeClass("wrapper-active");
  } else {
    $('#sidebar-button3').addClass("button-active");
    $('.sidebar-container3').addClass("sidebar-active");
    $('.page-wrapper3').addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper3").click(function () {
  if ($(".sidebar-container3").hasClass("sidebar-active")) {
    $(".sidebar-container3").removeClass("sidebar-active");
    $('.page-wrapper3').removeClass("wrapper-active");
    $('body').removeClass("no-scroll");
    $('#sidebar-button3').removeClass("button-active");
  }
});



  //Implement the "slide to left" when the user clicks on #carousel-next of the LIVED CAROUSEL
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



  //Implement the "slide to left" when the user clicks on #carousel-next of the TRAVEL CAROUSEL
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


  //Implement the "slide to left" when the user clicks on #carousel-next of the INTRO CAROUSEL
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

var $preview = $("#preview");

$("#strip4").hover(function () {
  // $preview.attr("src", $(this).attr("data-thumbnail-src"));
  //   }, function () {
  //       $preview.attr("src", "");
  //   });
 $("#a4p1").text("");
 $("#a4p2").text("Casa Batlo is arguably Gaudi's most interesting architecture, with the entire building inspired by a dragon. That explains the lizard scale decor...");
}, function () {
 $("#a4p1").text("");
 $("#a4p2").text("");
});

$("#strip2").hover(function () {
 $("#a2p1").text("We live in a society exquisitely dependent on science and technology");
 $("#a2p2").text("in which hardly anyone knows anything about science and technology. ");
 $("#a2p3").text("The dual scorn and worship for technology that Carl Sagan recognizes in millenials... ");
}, function () {
 $("#a2p1").text("");
 $("#a2p2").text("");
 $("#a2p3").text("");
});

$("#strip3").hover(function () {
 $("#a3p1").text("You're off to great places!");
 $("#a3p2").text("Today is your day!");
 $("#a3p3").text("Your mountain is waiting, so get on your way!");
}, function () {
 $("#a3p1").text("");
 $("#a3p2").text("");
 $("#a3p3").text("");
});

$("#strip3").hover(function () {
 $("#a3p1").text("You're off to great places!");
 $("#a3p2").text("Today is your day!");
 $("#a3p3").text("Your mountain is waiting, so get on your way!");
}, function () {
 $("#a3p1").text("");
 $("#a3p2").text("");
 $("#a3p3").text("");
});

$("#strip5").hover(function () {
 $("#a5p1").text("临时抱佛脚");
 $("#a5p2").text("Plan ahead. Lessons can be expensive to learn.");
}, function () {
 $("#a5p1").text("");
 $("#a5p2").text("");
});

$("#strip6").hover(function () {
 $("#a6p1").text("Big companies like to throw lots of money into things they don't understand");
 $("#a6p2").text("They've learned to be wary of small companies that have big shadows");
}, function () {
 $("#a6p1").text("");
 $("#a6p2").text("");
});

$("#strip7").hover(function () {
 $("#a7p1").text("It's not.");
 $("#a7p2").text("Invest time instead in finding the confidence to pull of mismatched socks. Why isn't my code working anymore? I have no confidence in anything.");
}, function () {
 $("#a7p1").text("");
 $("#a7p2").text("");
});

$("#strip8").hover(function () {
 $("#a8p1").text("Robots would be better at collecting awards and studying information and applying to jobs");
 $("#a8p2").text("Unfortunately I'm not a robot...");
}, function () {
 $("#a8p1").text("");
 $("#a8p2").text("");
});

$("#strip9").hover(function () {
 $("#a9p1").text("Robots would be better at collecting awards and studying information and applying to jobs");
 $("#a9p2").text("Unfortunately I'm not a robot...");
}, function () {
 $("#a9p1").text("");
 $("#a9p2").text("");
});

// $(".sf").hover(function () {
//   $(".sf").flip();
// })
  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});