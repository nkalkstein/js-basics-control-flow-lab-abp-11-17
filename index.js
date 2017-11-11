function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return "This one is on me!";
}     else if (ride > 2000 && ride < 2500) {
        return "I will gladly take your thirty bucks.";
}     else if (ride > 2500) {
        return "No can do.";
}
}

function ternaryCheckCity(city) {
  if (city== "NYC") {
    return "Ok, sounds good.";
}     else if (city != "NYC") {
        return "No go.";
}
}

const charm = 'generous';
 
let answer;


switch (charm) {
  case "generous":
    answer = "Thank you so much.";
    break;
  case "not as generous":
    answer = "Thank you.";
    break;
  default
    answer = "Bye.";
    break;
}
}

const order = 'cheeseburger';
 
let ingredients;
 
switch (order) {
  case 'cheeseburger':
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
    break;
  case 'hamburger':
    ingredients = 'bun, burger, lettuce, tomato, onion';
    break;
  case 'malted':
    ingredients = 'milk, ice cream, malted milk powder';
    break;
  default:
    console.log("Sorry, that's not on the menu right now.");
    break;
}