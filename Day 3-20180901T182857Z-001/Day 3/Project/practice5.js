// Practice for scope and closure
// Write 'global' or 'local' infront of the line based on scope.
const dob = 2001;               // global declaration variable
const countAge = (name) => {    // global function
  const x = 2018;               // local variable for function countAge
  return x - dob;                // return a local value for function countAge
}
var name = true;                 // global variable


//What's the output?

const x = 100;                  
const countValue = (num) => {
  const x = 10;
  return num * x;
}

console.log(x);                // 100



// Output of the following
let a = 100;

const changer = () => {
  a++;
}

console.log(a);              // 100
changer();
console.log(a);              // 101


// Output

let a = 5;
let b = 10;

const sum = () => {
  let a = 100;
  return a + b;
}

sum();                     // no output

// Output

const makeBook = () => {
  const name = "The perks of being a wallflower.";

  const printName = () => {
    console.log(name);
  }

  return printName;
}

const myBook = makeBook();
myBook();                                            // "The parks of being a wallflower."

// Output
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter1 = makeCounter();
                                                         /* function() {
                                                               return count++;
                                                              }  4 times.  */
console.log(counter); 
console.log(counter);
console.log(counter1);                               
console.log(counter1);

