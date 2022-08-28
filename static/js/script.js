$(document).ready(function(){
    $(".menu_click").click(function(){
        $(".menutarget").animate({width: 'toggle'});
    });     
});

$(document).ready(function(){
  $("#telle").click(function(){
      $("#phone").animate({height: 'toggle'});
  });     
});

$(document).ready(function(){
  $("#email").click(function(){
      $("#emaill").animate({height: 'toggle'});
  });     
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


