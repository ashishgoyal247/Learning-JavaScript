function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

//output without click on the screen
// finished function
// finished execution

// o/p with click on screen
// click event