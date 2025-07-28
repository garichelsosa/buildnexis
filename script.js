// Conditional Statements (Ternary Operators) Example
let isLocked = false;
// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }
isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');

let isCorrect = true;
// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Conditional Statements (if-else) Example
let season = 'winter';

if (season === 'spring') {
  console.log("It's spring! The flowers are blooming.");
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === 'fall') {
  console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// Conditional Statements (Switch) Example
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// Conditional Statements (Magic Eight Ball) Example
let userName = 'Garichel Sosa'
if (userName === ''){
  console.log('Hello!')
} else {
  console.log(`Hello, ${userName}!`)
}
let userQuestion = 'What is my destiny?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}
console.log(`Magic Eight Ball says: ${eightBall}`);

// Function Example
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();

// Function with Parameters Example
function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
}
sayThanks('Cole');

// Function with Default Parameters Example
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// Function with Return Value Example
function monitorCount(rows, columns){
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Function with Return Value Example (Using Parameters)
const plantNeedsWater = function(day){
  if (day === 'Wednesday') {
    return(true);
  } else {return false;
  }
};
console.log(plantNeedsWater('Tuesday'));