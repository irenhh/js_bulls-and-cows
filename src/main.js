let bullCount = 0;
let cowCount = 0;
let tryCount = 0;
let random = randomUniqueDigits();
let guessesHistory = '';

//gets random number with unique digits
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomUniqueDigits() {
  let random = '';
  let digit = 0;
  while (random.length < 4) {
    digit = getRandom(0, 9);
    if (!random.includes(digit)) {
      random += digit;
    }
  }
  return random;
}

//a single try
function oneTry(number) {
  number = number.toString();
  console.log(number.toString());
  if (number.length > 4 || number.length < 4) {
    return 'Only 4-digit numbers are accepted';
  } 
  for (let i in number) {
    if (number.indexOf(number[i]) != i) {
      return 'Each digit must be unique';
    }
    if (random.includes(number[i])) {
      if (random.indexOf(number[i]) === number.indexOf(number[i])) {
        bullCount++;
      } else {
        cowCount++;
      }
    }
  }
  tryCount++;
  console.log(`${bullCount} bulls and ${cowCount} cows, ${tryCount} tries`);
  guessesHistory += `${number}: ${bullCount} bulls and ${cowCount} cows, ${tryCount} tries\n`;
}

//starts a new game
function newGame() {
  do {
    bullCount = 0;
    cowCount = 0;
    let number = prompt(`${guessesHistory} Type a number`);
    oneTry(number);
  } while (bullCount !== 4);
  if (bullCount === 4) {
    console.log(`Congrats!!! You got ${bullCount} bulls in ${tryCount} tries`);
    alert(`Congrats!!! You got ${bullCount} bulls in ${tryCount} tries`)
  }
}