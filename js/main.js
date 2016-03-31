$(document).ready(function() {

  // header and sub-header fade effects

  $("#title-main").fadeIn(1000);
  $("#title-sub").fadeIn(2000);

  // rez download button click counter

  var clicks = 0;

  $("#rez-download").click(function() {
    clicks++;
    if (clicks > 1) {
      console.log(clicks + " clicks");  
    } else {
      console.log(clicks + " click");
    }

    // rez download button link trigger
    
    window.open('https://www.dropbox.com/s/5y4i9mwqiesiyte/Matthew_Lissauer.pdf?dl=0');

  });


})