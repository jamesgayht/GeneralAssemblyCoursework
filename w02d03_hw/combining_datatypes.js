const crayonBox = {
  names: ["fred", "jack", "angela"],
};

console.log(crayonBox.names[0]);

const bottle = {
  cap: {
    material: ["metal", "plastic"],
    color: ["blue", "white"],
  },
};

console.info(bottle.cap.material[0]);

const receipt = [{ name: "apple", price: 1000 }];
console.info(receipt[0].price);

const apartmentBuilding = [["bruno", "changE", "dexter"]];

console.info(apartmentBuilding[0][1]);

function knit() {
  return {
    item: "scarf",
    size: "6ft",
  };
}
console.info(knit().size);

const crayonSelector = () => {
  return crayonBox;
};

console.info(crayonSelector().names[1]);

function powerButton() {
  function options() {
    console.log("select a song");
  }
  return options;
}

powerButton()();

const vendingMachine = {
  snacks: [
    { name: "famous amos", price: 5 },
    { name: "prawn crackers", price: 10 },
    { name: "nut crackers", price: 15 },
  ],
  vend: (i) => {
    if (Number.isInteger(i) && i < vendingMachine.snacks.length)
      return vendingMachine.snacks[i];
    else return "invalid";
  },
};

console.info(vendingMachine.vend(2));

const add = (numA, numB) => {
  return numA + numB;
};
const subtract = (numA, numB) => {
  return numA - numB;
};
const multiply = (numA, numB) => {
  return numA * numB;
};
const divide = (numA, numB) => {
  return numA / numB;
};

function calculate(numA, numB, operates) {
  return operates(numA, numB);
}

console.info(calculate(5, 10, add));
console.info(calculate(5, 10, subtract));
console.info(calculate(5, 10, multiply));
console.info(calculate(5, 10, divide));

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();
// Cannot access 'foo' before initialization
// meaning that we need to put the call method after initializing. since javascript is run from top to bottom

