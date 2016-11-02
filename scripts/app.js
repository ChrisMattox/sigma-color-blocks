$(document).ready(function() {

  var colors = ["red", "magenta", "cyan", "brown", "coral"];

  for(var i = 0; i < colors.length; i++) {
    $("#block-container").append('<div class="color-block"></div>');
    var $el = $("#block-container").children().last();
    $el.css("background-color", colors[i]);
  }


});


// Utility functions
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
