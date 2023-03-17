const { argv } = require("node:process");

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// <--- Verbal Questions ---->
// What is the difference between a parameter and an argument?
// a: parameters are the names that are defined when a function is declared. arguments are the values that are passed into the functions. parameters are initialized to the values of the arguments supplied

// Within a function, what is the difference between return and console.log?
// a: console.log() is a function to print information to the console while return is to pass a value back up to where the function was called.

// <--- Palindrome ---->
const checkPalindrome = (inputString) => {
  if (inputString.length <= 0) {
    console.info("in first if");
    return false;
  }
  console.info("starting loop here");
  inputString = inputString.toLowerCase();

  let start = 0;
  let end = inputString.length - 1;

  while (start < end) {
    if (inputString[start] !== inputString[end]) {
      console.info(
        `start vs end >>> ${inputString[start]} vs ${inputString[end]}`
      );

      return false;
    }
    start++;
    end--;
  }

  console.info("exiting function for ", inputString);
  return true;
};

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("noon"));
console.log(checkPalindrome("HELLO"));
console.log(checkPalindrome("dented"));

// <--- Palindrome ---->
const sumArray = (array) => {
  let sum = 0;
  for (let nums of array) {
    sum += nums;
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// <--- Prime Numbers ---->

function checkPrime(number) {
  // check every number up to the square root
  const root = Math.sqrt(number);
  // console.info(root)
  for (let i = 2; i <= root; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const printPrimes = (number) => {
  for (let i = 1; i < number; i++) {
    if (checkPrime(i) === true) {
      console.info(`Prime Number >>> ${i}`);
    }
  }
  console.info("Done printing all prime numbers");
  return 0;
};

console.info(printPrimes(97));

// <--- Rock, Paper, Scissors ---->
function randomMove() {
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  let choice = Math.floor(Math.random() * 5);
  return moves[choice];
}

const rockPaperScissors = (computersMove, usersMove) => {
  if (
    (computersMove === "rock" &&
      (usersMove === "scissors" || usersMove === "lizard")) ||
    (computersMove === "scissors" &&
      (usersMove === "paper" || usersMove === "lizard")) ||
    (computersMove === "paper" &&
      (usersMove === "rock" || usersMove === "spock")) ||
    (computersMove === "lizard" &&
      (usersMove === "spock" || usersMove === "paper")) ||
    (computersMove === "spock" &&
      (usersMove === "scissors" || usersMove === "rock"))
  ) {
    console.info(`computer chose ${computersMove}`);
    console.info(`user chose ${usersMove}`);
    console.info(`${computersMove} beats ${usersMove}, computer wins!`);
  } else if (
    (usersMove === "rock" &&
      (computersMove === "scissors" || computersMove === "lizard")) ||
    (usersMove === "scissors" &&
      (computersMove === "paper" || computersMove === "lizard")) ||
    (usersMove === "paper" &&
      (computersMove === "rock" || computersMove === "spock")) ||
    (usersMove === "lizard" &&
      (computersMove === "spock" || computersMove === "paper")) ||
    (usersMove === "spock" &&
      (computersMove === "scissors" || computersMove === "rock"))
  ) {
    console.info(`user chose ${usersMove}`);
    console.info(`computer chose ${computersMove}`);
    console.info(`${usersMove} beats ${computersMove}, user wins!`);
  } else {
    console.info(`user chose ${usersMove}`);
    console.info(`computer chose ${computersMove}`);
    console.info(`${usersMove} equals ${computersMove}, it's a tie!`);
  }
};

const moves = ["rock", "paper", "scissors", "lizard", "spock"];
let computersMove = randomMove();
let usersMove = "";
// insert one string after
if (argv.length <= 2) {
  console.info("move input empty, assigning random move");
  usersMove = randomMove();
} else {
  if (moves.includes(argv[2].toLowerCase())) {
    usersMove = argv[2].toLowerCase();
    console.info("usersMove >>> ", usersMove);
  } else {
    console.info("move input error, assigning random move");
    usersMove = randomMove();
  }
}

rockPaperScissors(computersMove, usersMove);

// <--- DIGIT SUM ---->
const sumDigits = (number) => {
  let sum = 0;
  while (number > 1) {
    console.info(`number % 10 >>> ${number % 10}`);
    sum += number % 10;
    number /= 10;
    number = Math.floor(number);
    console.info(`sum >>> ${sum}, number >>> ${number}`);
  }
  return sum;
};

console.log(sumDigits(234234));

// <--- Pythagoras ---->
// a**2 + b**2 = c**2
function calculateSide(sideA, sideB) {
  let sideC = 0;
  sideASquare = sideA ** 2;
  sideBSquare = sideB ** 2;
  console.info(`sideASquare ${sideASquare}, sideBSquare ${sideBSquare}`);
  sideC = Math.sqrt(sideASquare + sideBSquare);
  return sideC;
}

console.log(calculateSide(8, 6));

// <--- Triangles ---->
const isoscelesTriangle = (num) => {
  if (typeof num !== "number") {
    console.error("please input a number");
  } else {
    let block = "#";
    for (let i = 0; i < num; i++) {
      console.log(block);
      block += "#";
    }
  }
};

const isoscelesTriangleReversed = (num) => {
  if (typeof num !== "number") {
    console.error("please input a number");
  } else {
    let block = "";
    let numWhile = num;

    while (numWhile > 0) {
      // console.info("numWhile >>> ", numWhile)
      block += "#";
      numWhile--;
    }

    for (let i = 0; num > i; num--) {
      console.log(block);
      block = block.slice(0, num - 1);
    }
  }
};

isoscelesTriangle(7);
isoscelesTriangleReversed(6);

// <--- "Second" Numbers ---->

const secondNumbers = (array) => {
  let i = 0;

  let highest = Math.max(...array);
  console.info("highest >>> ", highest);

  let lowest = Math.min(...array);
  console.info("lowest >>> ", lowest);

  let highestIndex = array.indexOf(highest);
  console.info("highestIndex >>> ", highestIndex);
  array.splice(highestIndex, 1);

  let lowestIndex = array.indexOf(lowest);
  console.info("lowestIndex >>> ", lowestIndex);
  array.splice(lowestIndex, 1);

  console.info(array);

  const secondNumbers = [];
  secondNumbers.secondHighest = Math.max(...array);
  secondNumbers.secondLowest = Math.min(...array);

  return secondNumbers;
};

console.log(secondNumbers([4, 2, 6, 9, 5]));
// => second highest: 6
// => second lowest: 4

// <--- Unique String ---->
function uniqueString(string) {
  // takes the first string if there are spaces
  string = string.split(" ")[0];
  console.info(string);
  const uniqueChars = [];
  for (let char of string) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }
  console.info(uniqueChars);
  uniqueString = uniqueChars.toString().replaceAll(",", "");
  return uniqueString;
}

console.log(uniqueString("helloworld"));
// => helowrd

// <--- Insert Dash ---->
const insertDash = (number) => {
  let digitB = 0;
  let digitA = 0;

  number = number.toString();
  const numArray = number.split("");
  console.info(numArray);

  let numberDash = "";

  for (let i = 0; i < numArray.length - 1; i++) {
    numberDash += numArray[i];
    if (numArray[i] % 2 !== 0 && numArray[i + 1] % 2 !== 0) {
      numberDash += "-";
    }
    if (i === numArray.length - 2) {
      numberDash += numArray[i + 1];
    }
  }

  return numberDash;
};

console.log(insertDash(454793));
