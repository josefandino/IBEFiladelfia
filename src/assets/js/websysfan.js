new WOW().init();

// When the user scrolls down 80px from the top of the document,
// resize the navpc's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navpc").style.padding = "0px 30px 0px 20px";
    document.getElementById("navpc").style.background = "#0D0D2E";
    document.getElementById("img").style.width = "auto";
    document.getElementById("img").style.height = "55px";
  } else {
    document.getElementById("navpc").style.padding = "0px 0px";
    document.getElementById("navpc").style.background = "#00000000";
    document.getElementById("img").style.width = "auto";
    document.getElementById("img").style.height = "35px";
  }
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
