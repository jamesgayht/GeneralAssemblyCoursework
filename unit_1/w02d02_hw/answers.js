// <---- Datatypes Refresher ---->
// A light switch that can be either on or off.
// datatype: boolean
// data structure example: const switchIsOn = true

// A user's email address.
// datatype: string
// data structure example: const email = fred@gmail.com

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: string array
// data structure example: const spaceshipComponents = ["hull", "laser blasters", "tractor beam", "warp drive"]

// A list of student names from our class.
// datatype: string array
// data structure example: const students = ["studentA", "studentB", "studentC"]

// A list of student names from our class, each with a location.
// datatype: object array
/* 
data structure example: const spaceshipComponents = [
    {name: "studentA", location: "locationA" },
    {name: "studentB", location: "locationB" },
    {name: "studentC", location: "locationC" }
]
*/

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: object array
/* 
data structure example: const spaceshipComponents = [
    {name: "studentA", location: "locationA", favouriteShows: ["showA", "showB"] },
    {name: "studentB", location: "locationB", favouriteShows: ["showA", "showB"] },
    {name: "studentC", location: "locationC", favouriteShows: ["showA", "showB"] }
]
*/

// <---- Take It Easy ---->
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

console.info(rainbowColors[4]);

const fred = {
  favouriteFood: "apple",
  hobby: "eating apples",
  city: "apple town",
  favouriteDataType: "boolean",
};

console.info(fred);
console.info(fred.hobby);

// <---- Crazy Object ---->
const crazyObject = {
  taco: [
    { meat: "steak", cheese: ["panela", "queso", "chihuahua"] },
    {
      meat: "chicken",
      salsa: [
        "pico",
        "hot",
        "hotter",
        "really hot",
        "really really hot",
        "omg my mouth is burning",
      ],
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma",
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager",
      },
      {
        name: "funkhauser",
        occupation: "tv dude",
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff",
      },
    ],
  },
};

console.info(crazyObject.taco[1].salsa[5]);
console.info(crazyObject.larry.quotes[0]);
console.info(crazyObject.larry.characters[2].favourtieHobby);
console.info(crazyObject.larry.nicknames[1]);
console.info(crazyObject.larry.characters[1]);
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);
console.info(crazyObject.larry.quotes);

// <---- Object-Ception ---->
const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt",
              },
            },
          },
        },
      },
    },
  },
};

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo =
  null;
console.info(
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
    .dreamLayer6.limbo
);

// <---- Bond Films ---->
const bondFilms = [
  {
    title: "Skyfall",
    year: 2012,
    actor: "Daniel Craig",
    gross: "$1,108,561,008",
  },
  {
    title: "Thunderball",
    year: 1965,
    actor: "Sean Connery",
    gross: "$1,014,941,117",
  },
  {
    title: "Goldfinger",
    year: 1964,
    actor: "Sean Connery",
    gross: "$912,257,512",
  },
  {
    title: "Live and Let Die",
    year: 1973,
    actor: "Roger Moore",
    gross: "$825,110,761",
  },
  {
    title: "You Only Live Twice",
    year: 1967,
    actor: "Sean Connery",
    gross: "$756,544,419",
  },
  {
    title: "The Spy Who Loved Me",
    year: 1977,
    actor: "Roger Moore",
    gross: "$692,713,752",
  },
  {
    title: "Casino Royale",
    year: 2006,
    actor: "Daniel Craig",
    gross: "$669,789,482",
  },
  {
    title: "Moonraker",
    year: 1979,
    actor: "Roger Moore",
    gross: "$655,872,400",
  },
  {
    title: "Diamonds Are Forever",
    year: 1971,
    actor: "Sean Connery",
    gross: "$648,514,469",
  },
  {
    title: "Quantum of Solace",
    year: 2008,
    actor: "Daniel Craig",
    gross: "$622,246,378",
  },
  {
    title: "From Russia with Love",
    year: 1963,
    actor: "Sean Connery",
    gross: "$576,277,964",
  },
  {
    title: "Die Another Day",
    year: 2002,
    actor: "Pierce Brosnan",
    gross: "$543,639,638",
  },
  {
    title: "Goldeneye",
    year: 1995,
    actor: "Pierce Brosnan",
    gross: "$529,548,711",
  },
  {
    title: "On Her Majesty's Secret Service",
    year: 1969,
    actor: "George Lazenby",
    gross: "$505,899,782",
  },
  {
    title: "The World is Not Enough",
    year: 1999,
    actor: "Pierce Brosnan",
    gross: "$491,617,153",
  },
  {
    title: "For Your Eyes Only",
    year: 1981,
    actor: "Roger Moore",
    gross: "$486,468,881",
  },
  {
    title: "Tomorrow Never Dies",
    year: 1997,
    actor: "Pierce Brosnan",
    gross: "$478,946,402",
  },
  {
    title: "The Man with the Golden Gun",
    year: 1974,
    actor: "Roger Moore",
    gross: "$448,249,281",
  },
  { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
  {
    title: "Octopussy",
    year: 1983,
    actor: "Roger Moore",
    gross: "$426,244,352",
  },
  {
    title: "The Living Daylights",
    year: 1987,
    actor: "Timothy Dalton",
    gross: "$381,088,866",
  },
  {
    title: "A View to a Kill",
    year: 1985,
    actor: "Roger Moore",
    gross: "$321,172,633",
  },
  {
    title: "License to Kill",
    year: 1989,
    actor: "Timothy Dalton",
    gross: "$285,157,191",
  },
];

const bondTitles = [];
for (let films of bondFilms) {
  bondTitles.push(films.title);
}
console.info(bondTitles);

const oddBonds = [];
for (let films of bondFilms) {
  if (films.year % 2 !== 0) {
    oddBonds.push(films);
  }
}
console.info(oddBonds);

let totalGross = 0;
let filmGross = 0;
for (let films of bondFilms) {
  films.gross = films.gross.replaceAll("$", "");
  films.gross = films.gross.replaceAll(",", "");
  filmGross = Number(films.gross);
  // console.info(filmGross)
  totalGross += filmGross;
}
console.info(totalGross);

const actorCount = [];
for (let films of bondFilms) {
  if (actorCount[films.actor]) {
    // console.info("in first if");
    actorCount[films.actor] += 1;
  } else {
    actorCount[films.actor] = 1;
  }
}
console.info(actorCount);

let lowestActor = "";
let lowest = 0;

for (let actor in actorCount) {
  if(lowest === 0) {
    lowest = actorCount[actor]
  }
  console.info("lowest >>> ", lowest);
  if (actorCount[actor] < lowest) {
    lowest = actorCount[actor];
    lowestActor = actor;
  }
}
console.info("lowestActor >>> ", lowestActor);

for(let films of bondFilms) {
    if(films.actor === lowestActor) {
        console.info(films)
    }
}


