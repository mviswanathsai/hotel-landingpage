var gamePattern = [];
var userClickedPattern = [];
var colors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNum = Math.floor(Math.random() * 3 + 1);

  var randomChosenColor = colors[randomNum];
  gamePattern.push(randomChosenColor);



  $("#" + randomChosenColor).fadeToggle("fast").fadeToggle("fast");

}



$(document).keypress(function() {
  if (!started) {
    started = true;
    nextSequence();
  }
})



$("button").click( function(event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
})

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(userLevel) {

  if (gamePattern[userLevel] === userClickedPattern[userLevel]) {
    if (gamePattern.length === userClickedPattern.length {
      setTimeout(function() {
        nextSequence();
      },1000)
    }
  }
  else {
    startOver();
  }

}

function startOver(){

  $("h1").text("Press any button to restart");
  level = 0;
  gamePattern=[];
  started = false;
}
