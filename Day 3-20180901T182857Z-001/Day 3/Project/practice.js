// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."




// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.




// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.




// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

function  celsiusToFahrenheit() {
  var fahrenheit;
  var temp = prompt("enter temperature in celsius");
    fahrenheit = temp * 1.8 + 32;
    console.log(temp + "'C is " + fahrenheit + "'F");
}
celsiusToFahrenheit();


// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."



function  fahrenheitToCelsius() {
  var celsius;
  var temp = prompt("enter temperature in celsius");
    celsius = (temp - 32) * 5/9;
    console.log(temp + "'F is " + celsius + "'C");
}
fahrenheitToCelsius();



//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?

//NO






// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

function checkAge(age) {
  (age > 18) ?  true : confirm('Do you have your parents permission to access this page?');
}



// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

function pow() {
  var num = prompt("enter number");
  var pow = prompt("enter number for power");
  var power = 1;
  if(num < 1 | pow < 1) {
    console.log("enter only natural number");
  } else {
    
    for(i=1;i<=pow;i++) {
      power = power * num;
    }
    alert(power);
  }
}


pow();



// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”



// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10


// Write a program that asks the user for a number n and gives them the possibility to choose 
// between computing the sum and computing the product of 1,…,n.

function sumProduct() {
  var n = prompt("Entar number");
  var value = prompt("Either you want to sum : type sum & similary want to product : type product");
  var sum = 0;
  var product = 1;

  if(value == "sum") {
    for(i=1;i<=n;i++) {
      sum = sum + i;
    }
    console.log("sum = " + sum);
  } else {

    if(value == "product") {
      for(i=1;i<=n;i++) {
        product = product * i;
      }
      console.log("product = " + product);
    }
  }
}

sumProduct();




// Write a function that returns the largest element in a list.



// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

function sumOfNumber() {
  var num = prompt("Enter number");
  var sum = 0;

    for(i=1;i<=num;i++) {
      sum = sum + i;
    }
  console.log(sum);
}

sumOfNumber();

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

function sumOfNumber() {
  var num = prompt("Enter number");
  var sum = 0;

    for(i=1;i<=num;i++) {

      if(i%5 == 0) {
         sum = sum + i;
       } else {
        if(i%7 == 0) {
      sum = sum + i;
        }
      }
    }
  console.log(sum);
}

sumOfNumber();

// Write a program that takes a number under (25) and prints the multiplication table for the number.

function table() {
  var num = prompt("Enter number under 25")
  if(num > 25) {
    console.log("please enter valid number");
  } else {

    for(i=1;i<=10;i++) {
    console.log(num * i);
    }
  }

}

table();