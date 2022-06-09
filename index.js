function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let message
  if (someValue <= 400) {
    message = 'This one is on me!';
  } else if (someValue <= 2000) {
    message = 'That will be twenty bucks.';
  } else if (someValue <= 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    message = "No can do.";
  }
  return message
}

function ternaryCheckCity(cityCheck) {
  // Write your code here!
  let ternCity = cityCheck === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return ternCity
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let tipMessage;

  switch (tip) {
    case 'generous':
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = 'Thank you.';
      break;
    default:
      tipMessage = 'Bye.';
      break;
  } return tipMessage
}