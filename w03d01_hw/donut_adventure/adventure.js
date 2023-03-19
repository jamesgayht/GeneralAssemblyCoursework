console.log("HEY JS IS WORKING");

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };

    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }

  talkSass() {
    let randomizer = Math.floor(Math.random() * this.catchPhrases.length);
    console.log(this.catchPhrases[randomizer]);
  }

  announceHealth() {
    console.log("Hero's health >>> ", this.health);
  }

  fight(enemy) {
    console.log(`I\'m ready to rumble!`);
    const weaponNames = ["sprinkleSpray", "sugarShock"];
    let randomizer = Math.floor(Math.random() * 2);
    console.info(this.weapons[weaponNames[randomizer]]);
    enemy.health -= this.weapons[weaponNames[randomizer]];
    console.info(
      `${enemy.name} got hit by ${weaponNames[randomizer]}, health points remaining ${enemy.health}`
    );
  }
}

const dougieTheDonut = new Hero("Dougie");
// console.info(dougieTheDonut);
// dougieTheDonut.talkSass();
// dougieTheDonut.announceHealth();
// dougieTheDonut.fight();

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };

    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ];
  }
  talkSmack() {
    let randomizer = Math.floor(Math.random() * this.catchPhrases.length);
    console.log(this.catchPhrases[randomizer]);
  }

  announceHealth() {
    console.log("Enemy's health >>> ", this.health);
  }

  fight(enemy) {
    console.log(`i\'m gonna flatten you like a slice of pepperoni!`);

    let randomizer = Math.floor(Math.random() * 2);
    const weaponNames = ["pepperoniStars", "cheeseGrease"];
    console.info(this.weapons[weaponNames[randomizer]]);
    enemy.health -= this.weapons[weaponNames[randomizer]];
    console.info(
      `${enemy.name} got hit by ${weaponNames[randomizer]}, health points remaining ${enemy.health}`
    );
  }
}

const pietroPizzaRat = new Enemy("Pietro");
// console.info(pietroPizzaRat);
// pietroPizzaRat.talkSmack();
// pietroPizzaRat.announceHealth();
// pietroPizzaRat.fight();

dougieTheDonut.talkSass();
pietroPizzaRat.talkSmack();

while (dougieTheDonut.health > 0 && pietroPizzaRat.health > 0) {
  let randomizer = Math.floor(Math.random() * 2);
  if (randomizer === 0) {
    dougieTheDonut.fight(pietroPizzaRat);
    pietroPizzaRat.announceHealth();
}
if (randomizer === 1) {
    pietroPizzaRat.fight(dougieTheDonut);
    dougieTheDonut.announceHealth();
  }


  if (dougieTheDonut.health <= 0) {
    alert(`${dougieTheDonut.name} fainted, ${pietroPizzaRat.name} wins!`);
    console.log(`${dougieTheDonut.name} fainted, ${pietroPizzaRat.name} wins!`);
  }
  if (pietroPizzaRat.health <= 0) {
    console.log(`${pietroPizzaRat.name} fainted, ${dougieTheDonut.name} wins!`);
  }
}
