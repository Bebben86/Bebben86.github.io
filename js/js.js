//Fade in boxes
$(document).ready(function () {
  $(".box").hide().fadeIn(1000);
});

$(document).ready(function () {
  $(".box2").hide().fadeIn(1500);
});

//Toggle dark mode
function themeToggler() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}