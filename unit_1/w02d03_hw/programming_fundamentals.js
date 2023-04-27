// <---- Common Programming Principles ---->

// DRY
// don't repeat yourself, use functions and abstractions if required

// KISS
// Keep it simple, stupid! focus on making code simple and easy to read

// Avoid creating a YAGNI
// "you aren't going to need it" remove any extra functionalities not required

// Do the simplest thing that could possibly work
// Ask yourself: What is the simplest thing that could possibly work?

// Don't make me think
// code should be easily read and understood with a minimum of effort required

// Write code for the maintainer
// Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live (don't make that person think)

// Single responsibility principle
// A component of code (e.g. class or function) should perform a single well defined task.

// Avoid premature optimization
// Don’t even think about optimization unless your code is working, but slower than you want

// Separation of concerns
// Different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// <---- Commenting Code ---->
// function f takes in a parameter l
const f = (l) => {
    // creates a variable ef and assign a value 0
    let es = 0,
    // creates a variable p and assign a value 0
    p = 0,
    // creates a variable c and assign a value 1
    c = 1,
    // creates a variable n and assign a value 0
    n = 0
    // initialize a while loop that will run if c is less than or equal to l
  while (c <= l) {
    // reassign the value of c + p to variable n
    n = c + p;
    // array of n and c is assigned to c and p (c takes the value of n and p takes the value of c)
    [c, p] = [n, c]
    console.info("[c, p] >>> ", [c, p])
    console.info("[n, c] >>> ", [n, c])
    // console.info([c, p] = [n, c])
    // variable es will add c, if c is an even number add c and add 0 if c is not an even number 
    es += (c % 2 === 0 ? c : 0)
  }
  return es;
};

console.log(f(55));

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// sumEvenNumbers()

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// yes