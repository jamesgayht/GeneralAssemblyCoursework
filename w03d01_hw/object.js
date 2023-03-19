// HAMSTER
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner || "";
    this.name = name;
    this.price = price || 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

const hamster = new Hamster("ricky");

console.info(hamster);
hamster.wheelRun();
hamster.eatFood();
console.info(hamster.getPrice());

// PERSON
class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;
    this.age = age || 0;
    this.height = height || 0;
    this.weight = weight || 0;
    this.mood = mood || 0;
    this.hamsters = hamsters || [];
    this.bankAccount = bankAccount || 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet(name) {
    console.log(`Greetings ${name}!`);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const person1 = new Person("fred");
console.info(person1);
console.info(person1.getName());
console.info(person1.getAge());
console.info(person1.getWeight());
person1.greet("Jack");
person1.eat();
console.info("after eating >>> ", person1);
person1.exercise();
console.info("after exercise >>> ", person1);
person1.ageUp();
console.info("after ageUp >>> ", person1);
person1.buyHamster(new Hamster("fred", "ricky"));
console.info("after buyingHamster >>> ", person1);

const timmy = new Person("Timmy");
console.info(timmy);

for (let i = 0; i < 5; i++) {
  timmy.ageUp();
  timmy.eat();
  timmy.exercise();
}
console.info(timmy);

for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}
console.info(timmy);

const gus = new Hamster("Timmy", "Gus");
console.info(gus);
timmy.buyHamster(gus);
console.info(timmy);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}
console.info(timmy);

for (let i = 0; i < 2; i++) {
  timmy.eat();
  timmy.exercise();
}
console.info(timmy);


