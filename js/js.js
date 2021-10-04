//Fade in elements
$(document).ready(function () {
  $(".headline").hide().fadeIn(1000);
});

$(document).ready(function () {
  $(".reddot").hide().fadeIn(1000);
});

$(document).ready(function () {
  $(".avatar").hide().fadeIn(1500);
});

$(document).ready(function () {
  $(".main").hide().fadeIn(1500);
});
$(document).ready(function () {
  $(".link_table").hide().fadeIn(2500);
});

//Toggle language
$('[lang="en"]').hide();

$('#switch-lang').click(function() {
  $('[lang="sv"]').toggle();
  $('[lang="en"]').toggle();
});