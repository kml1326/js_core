// Output in the right sequence

try {
  console.log('First');
  
  helloFirst;

  console.log('Second'); 

} catch(err) {

  console.log('Third' + err); 

} finally {
  console.log('Fourth'); 
}

console.log('Fifth');
// First
// Third Reference Error : helloFirst is not define
// Fourth
// Fifth




// Output in the right sequence


// try {
//   {
//   console.log('First');
  
//   helloFirst;

//   console.log('Second'); 

// } catch(err) {

//   console.log('Third' + err); 

// } finally {
//   console.log('Fourth'); 
// }

// console.log('Fifth');

// syntax error

//Use the following Data and do the following

var json = {name:"Steve Jobs",job:"Founder"};
// Write a program using try catch
// check if the json object doesn't have a age property throw an arror saying "Incomplete Data"
// If you have age you can console.log age
// in catch statement console.log error message and name

try {
  if(!json.age == true) {throw "error"};
  console.log(json.age);
} catch(error) {
  console.log("Incomplete Data" + " : Reference Error");
}

var json = {name:"Steve Jobs",job:"Founder", age: 42};

// Execute your program using this data