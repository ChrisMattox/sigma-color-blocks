$(document).ready(function() {
  var colors = ["red", "magenta", "cyan", "brown", "coral", "orange"];
  var currentColor = "";

  pickRandomColor();
  createBlocks();

  function createBlocks() {
    for(var i = 0; i < colors.length; i++) {
      $("#block-container").append('<div class="color-block"></div>');
      var $el = $("#block-container").children().last();
      $el.css("background-color", colors[i]);
    }
  }

  function setPrompt() {
    $("#prompt").text('Please click the ' + currentColor + ' box!');
  }

  function pickRandomColor() {
    currentColor = colors[randomNumber(0, colors.length - 1)];
    setPrompt();
  }


});


// Utility functions
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
