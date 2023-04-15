function scuberGreetingForFeet(distance){
 
  if ((distance > 0) && (distance <= 400)) {
    return('This one is on me!');    
  }
  else if ((distance > 400) && (distance <= 2000) ) {
    return('That will be twenty bucks.');
    }
  
    else if ((distance > 2000) && (distance <= 2500) ) {
      return('I will gladly take your thirty bucks.');
      }

    else if (distance > 2500) {
      return('No can do.');
      }
}
  
function ternaryCheckCity(city){
  let cityReply;
  city === 'NYC'? (cityReply = 'Ok, sounds good.') : (cityReply = 'No go.');
  return(cityReply)
}

function switchOnCharmFromTip(tipReply){
  switch (tipReply) {
    case 'generous':
      tipReply = 'Thank you so much.';
      break;
    case 'not as generous':
      tipReply = 'Thank you.';
      break;
    default:
      tipReply = 'Bye.';
      break;    
  }
  return(tipReply);
}