// What's the error in the commented code below and what will be the error message

// for(var i = 0; i<20; i++ {
//   console.log(i);
// }

// no error

// What's the error in the code below and what will be the error message

var name = 'cat';
console.log(surName);
// surName is not defined (Refernce error) 

// What's the error in the code below and what will be the error message
var schoolName = "RSVP";
schoolName();
// schoolName is not a function (TypeError)

// What's the error in the code below and what will be the error message
function range(num){
  console.log(num);
  range(num);
}
range();
// no error but output is 'infinite time undefine'

// What will be the output or if error what error will you get

function sayHello() {
  "use strict"
  for(i = 0; i< 3; i++){
    console.log('Hello')
  }
}
sayHello()
// i is not defined (Refernce error)

// What will be the output or if error what error will you get

function Animal(name, doesEat, doesSleep) { 
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name)
// no Error



// What will be the output or if error what error will you get

"use strict"
function Animal(name, doesEat, doesSleep) { 
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name)
// Can not set property 'name' of undefined (TypeError)

// Solve This http://javascript.info/task/finally-or-code-after