// SECTION 1

/*

1. DRY stands for don't repeat yourself. It helps us to keep our codes concise and readable. Some tools that we have learned would be loops and also includes abstraction and normalization. 

2. the difference is const cannot be updated once declared and should only be assigned to things that should not be changed e.g. the value of pi. let and var can be updated, var is deprecated and let should be used instead. 

*/

// SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.info(a < b);
console.info(c > d);
console.info("Name" === "Name");
console.info(a < b < c);
console.info(a !== a < d);
console.info(e === "Kelvin");
console.info(48 !== "48");
console.info(f !== e);
console.info(a < (b || f) === !f && e !== c);

// SECTION 3

// while (true) {
// 	console.log('Do not run this loop');
// }
// a: infinite loop because the while condition is never changed to false

// const runProgram = true;
// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
// a: the loop is not infinite and will only run once because the loop condition runProgram is updated to false

// assign "A" to variable letters
let letters = "A";
// instantiate variable i to 0
let i = 0;

// start a while loop that will run as long as i is less than 20 
while (i < 20) {
    // "A" will be added to variable letters with each loop
	letters += "A";
    // increments the value of i by 1 to prevent infinite loop
	i++;
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}

// expected results: "AAAAAAAAAAAAAAAAAAAAA"
// results were the same as expected 
console.log(letters);

// SECTION 4

// Q: A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
// a: The foor loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong.

// The first part of the control panel is: instantiating the value 0 to the variable i 
// The second part of the control panel is: setting the condition for the amount of iterations
// The third part of the control panel is: increments the value of i by 1 each time a loop is successfully completed

for(let i = 0; i < 1000; i ++) {
    console.info(`The number is ${i}`)
}

console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
console.log("Without you, today's emotions are the scurf of yesterday's");
// Q: What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
// \(backslash) is used as an escaped character within the regular expression. the / (forward slash) is used to indicate division. in the strings above, the \ is acting as an escaped character for ' which prevents the string from closing, without it the string would close and throw and error 

for(let i = 999; i >= 0; i--) {
    console.info(`The number is ${i}`)
}

for(let i = 1; i <= 10; i++) {
    console.info("The value of i is: " + i + " out of 10")
    // string interpolation 
    console.info(`The value of i is ${i} out of 10`)

}