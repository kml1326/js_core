
// Write a JavaScript program to calculate the factorial of a number. Go to the editor

function factorial() {
  var num = prompt("Enter a number for find factorial");
  var fact = 1;
  for(i=num;i>0;i--) {
    fact = fact * i;
  }
  console.log("factorial of " + num + "= " + fact);
}
factorial();





// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.


function gcd() {
var a = prompt("enter first number");
var b = prompt("enter second number");
var gcd;

for(i=0;i<=a/2;i++) {

    if(a%i == 0) {

      if(b%i == 0) {
        gcd=i;
      }
  	}
}
 console.log(gcd);
}
gcd();





//Write a JavaScript program to get the integers in range (x, y)

function integers(x, y) {

for(i=x+1;i<y;i++) {
 console.log(i);
}

}

integers(56, 65);