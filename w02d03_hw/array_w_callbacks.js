const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const moreThanZero = (num) => {
  if (num > 0) return true;
  return false;
};

console.info(nums.every(moreThanZero));

const shorterThanEightChars = (word) => {
  if (word.length < 8) return true;
  return false;
};

console.info(panagram.every(shorterThanEightChars));

// Every
// Determine if every number is greater than or equal to 0
// false

// determine if every word shorter than 8 characters
// true

function lessThanFour(num) {
  if (num < 4) return true;
  return false;
}
console.info(nums.filter(lessThanFour));

function evenLength(word) {
  if (word.length % 2 === 0) return true;
  return false;
}
console.info(panagram.filter(evenLength));

function divideFive(num) {
  if (num % 5 === 0) return true;
  return false;
}

console.info(nums.find(divideFive));

function moreThanFiveChars(word) {
  if (word.length > 5) return true;
  return false;
}
console.info(panagram.find(moreThanFiveChars));
// dont have

function divideThree(num) {
  if (num % 3 === 0) return true;
  return false;
}

console.info(nums.findIndex(divideThree));

function lessThanTwoChars(word) {
  if (word.length < 2) return true;
  return false;
}

console.info(panagram.findIndex(lessThanTwoChars));
// dont have

const numsSub = [];
function multiplyByThree(num, index, array) {
  numsSub[index] = num * 3;
}
nums.forEach(multiplyByThree);
console.info(nums);

function addExclamations(word, index, array) {
  array[index] = word + "!";
  console.log(array[index]);
}
panagram.forEach(addExclamations);

const newNums = [];
nums.map((num) => {
  newNums.push(num * 100);
});

console.info(newNums);

function toUpperCase(word) {
  return word.toUpperCase();
}
console.info(panagram.map(toUpperCase));

console.info(nums);

function divisbleBy7(num) {
  return num % 7 === 0;
}
console.info(nums.some(divisbleBy7));

function hasA(word) {
  return word.includes("a");
}
console.info(panagram.some(hasA));

let total = nums.reduce((numA, numB) => numA + numB);

console.info(total);

let fullSentence = panagram.reduce((wordA, wordB) => wordA + " " + wordB);
console.info(fullSentence);

console.info(nums.sort());
console.info(panagram.sort());

nums.sort((a, b) => a - b);
console.info(nums);

nums.sort((a, b) => b - a);
console.info(nums);

panagram.sort((a, b) => a.localeCompare(b));
console.info(panagram);

panagram.sort((a, b) => b.localeCompare(a));
console.info(panagram);

let string = panagram.toString().replaceAll(",", "").replaceAll("!", "");
string = string.toLowerCase();
console.info(string);
let allChars = null;
for (i = 97; i <= 122; i++) {
  if (!string.includes(String.fromCharCode(i))) {
    console.info(String.fromCharCode(i));
    allChars = false;
  } else {
    allChars = true;
  }
}

console.info(allChars);

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

function priceLessThan10(obj) {
    return obj.price < 10
}

console.info(products.filter(priceLessThan10))

console.info("sorting now >>> ")

console.info(products.sort((a, b) => {
  return a.name.localeCompare(b.name) 
}))
