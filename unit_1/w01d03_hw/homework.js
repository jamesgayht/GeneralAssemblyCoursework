// <---- HTML & CSS ---->
// HTML Intro (tags, content, attributes, semantic HTML)
// 4

// HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)
// 4

// CSS Intro (including css files in HTML, elements)
// 4

// CSS Basics (colors, background, font properties)
// 4

// <---- EASY GOING ---->
for (let i = 1; i <= 20; i++) {
  console.info(`The number is ${i}`);
}

// <---- GET EVEN ---->
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) console.info(`Here are the even numbers: ${i}`);
}

// <---- FIZZ BUZZ ---->
for (let i = 1; i <= 100; i++) {
  console.info("i >>> ", i);
  if (i % 3 === 0) {
    console.info("Fizz");
  }
  if (i % 5 === 0) {
    console.info("Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.info("FizzBuzz");
  }
}

// <---- Wild Wild Life ---->
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = plantee[2] + 1;
console.info(plantee[2]);

wolfy[3] = "Gotham City";
console.info(wolfy[3]);

dart.push("Hawkins");
console.info(dart);

wolfy[0] = "Gameboy";
console.info(wolfy[0]);

// <---- Yell at the Ninja Turtles ---->
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtles of ninjaTurtles) {
  console.info(turtles.toUpperCase());
}

// <---- Methods, Revisited ---->
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

console.info(favMovies.pop());

favMovies.push("Guardians of the galaxy");

console.info(favMovies.reverse());

console.info(favMovies.shift());

console.info(favMovies.unshift());

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
console.info(favMovies);

const favMoviesSliced = favMovies.slice(0, favMovies.length / 2);
console.info("favMoviesSliced >>> ", favMoviesSliced);
console.info("favMovies >>> ", favMovies);

console.log(favMovies.indexOf("Fast and Furious"));

// <---- Where is Waldo ---->

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
console.info(whereIsWaldo);

whereIsWaldo[1][2] = "No One";
console.info(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);

// <---- Excited Kitten ---->
const evenLogs = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 1; i <= 20; i++) {
  console.log(i + ". Love me, pet me! HSSSSSS!");

  if (i % 2 === 0) {
    console.log(evenLogs[Math.floor(Math.random() * evenLogs.length)]);
  }
}

// <---- Find the Median ---->
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

medianNums = Math.floor(nums.length / 2);
console.info(medianNums); // length -> 25
console.info(nums[medianNums]);
// output 19 but expected output is 15

// <---- Return of the Closets ---->
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

let kristynsShoe = kristynsCloset.splice(0, 1);
console.info(kristynsShoe[0]);
thomsCloset[2].push(kristynsShoe[0]);
console.info(thomsCloset);

const outfit1 = [kristynsCloset[0], kristynsCloset[2], kristynsCloset[3]];
const outfit2 = [thomsCloset[0][1], thomsCloset[1][2], thomsCloset[2][1]];
const outfit3 = [thomsCloset[0][3], thomsCloset[1][1], thomsCloset[2][2]];

console.info(outfit1, outfit2, outfit3);

// <---- Dirty Laundry ---->
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

for (let i = 0; i < thomsCloset.length; i++) {
  for (let item of thomsCloset[i]) {
    console.log(item);
  }
}

// <---- Fibonacci ---->
// <---- Checkerboard ---->
// <---- TwoDArray ---->