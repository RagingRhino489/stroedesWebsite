onEvent("startButton", "click", function( ) {
  setScreen("gameScreen");
});

var counter = 0;

onEvent("drj", "click", function() {
  counter++;
  setProperty("counterLabel", "text", counter);
  setPosition("drj", randomNumber(0, 205), randomNumber(0, 350), 100, 100);
  if (counter > 34) {
    setProperty("drj", "hidden", true);
    setProperty("evilJohnson", "hidden", false);
  } else {
    
  }
});

onEvent("counterLabel1", "click", function( ) {
  setScreen("dlcScreen");
  playSound("Jain - Mr Johnson (Audio).mp3", true);
});

onEvent("dlcDRJ", "click", function( ) {
  setProperty("counterLabel", "text", counter);
  setPosition("dlcDRJ", randomNumber(0, 205), randomNumber(0, 250), 100, 100);
});
onEvent("bgImage", "click", function(){
setScreen("gameOverScreen");
counter = 0;
setProperty("counterLabel", "text", counter);
setProperty("evilJohnson", "hidden", true);
setProperty("drj", "hidden", false);
});

onEvent("GoBack", "click", function(){
  setScreen("gameScreen");
  stopSound("Jain - Mr Johnson (Audio).mp3");
});

onEvent("gameOverImage", "click", function(){
setScreen("welcomeScreen");
});

onEvent("evilJohnson", "click", function() {
  counter++;
  setProperty("counterLabel", "text", counter);
  setPosition("evilJohnson", randomNumber(0, 205), randomNumber(0, 350), 100, 100);
});
if (counter >= 1000) {
  setScreen("winScreen");
}
