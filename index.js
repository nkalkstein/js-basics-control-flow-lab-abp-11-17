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

function switchOnCharmFromTip(){

const tip = "generous";

let answer;

switch (tip) {
  case "generous":
    answer = "Thank you so much.";
    break;
  case "not as generous":
    answer = "Thank you.";
    break;
  default:
    answer = "Bye.";
    break;
}
}
