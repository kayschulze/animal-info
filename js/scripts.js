$(function() {
  var thisAnimal = prompt("Which animal would you like learn about?  Turtles, snakes, or insects?");

  thisAnimal = thisAnimal.toLowerCase();

  if (thisAnimal === "turtles") {
    $(".turtles").show();
    }
  else if (thisAnimal === "snakes") {
    $(".snakes").show();
    }
    else if (thisAnimal === "insects") {
        $(".insects").show();
      }
      else {
        $(".error").show();
      }

});
