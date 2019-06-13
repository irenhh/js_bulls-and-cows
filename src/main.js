let bullCount = 0;
let cowCount = 0;
let tryCount = 0;
let random = randomUniqueDigits();

//gets random number with unique digits
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomUniqueDigits() {
  let random = [];
  random.push(getRandom(1, 9));
  random.push(getRandom(0, 9));
  for (let i = 1; i < 4; i++) {
    if (random.indexOf(random[i]) !== i) {
      do {
        random.pop();
        random.push(getRandom(0, 9));
      } while (random.indexOf(random[i]) !== i);
    } else {
      if (random.length >= 4) {
        break;
      } else {
        random.push(getRandom(0, 9))
      };
    }

  }
  return random = random.join('');
}

//a single try
function tries(number) {
  number = number.toString();
  console.log(number.toString());
  if (number.length > 4 || number.length < 4) {
    return 'Only 4-digit numbers are accepted';
  } else {
    for (let i in number) {
      if (number.indexOf(number[i]) != i) {
        console.log('Each digit must be unique');
      } else {
        if (random.indexOf(number[i]) !== -1) {
          if (random.indexOf(number[i]) === number.indexOf(number[i])) {
            bullCount++;
          } else {
            cowCount++;
          }
        }
      }
    }
    tryCount++;
    if (bullCount === 4) {
      console.log(`You got 4 bulls in ${tryCount} tries`);
    } else {
      console.log(`${bullCount} bulls and ${cowCount} cows, ${tryCount} tries`);
    }
  }
}

//starts a new game
function newGame() {
  
  do {
    bullCount = 0;
    cowCount = 0;
    let number = window.prompt('Type a number');
    tries(number);
  } while (bullCount !== 4);
  console.log(`Congrats!!! You got ${bullCount} bulls in ${tryCount} tries`);
}
