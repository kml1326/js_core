// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

class Persone {
	constructor(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


// Define a function name calculateAge which returns the age of the person
calculateAge(yearOfBirth) {
	var now = new Date();
	var currentYear = now.getFullYear();
	var age = currentYear - this.yearOfBirth;
	return `${age} years old` ;
}
}


// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var person1 = new Persone('john', 1990, 'teacher')
var person2 = new Persone('saim', 1993, 'clerk')
var person3 = new Persone('Iliya', 1996, 'manager')

// call the calculateAge function on each object

person1.calculateAge();
// "28 years old"
person2.calculateAge();
// "25 years old"
person3.calculateAge();
// "22 years old"

