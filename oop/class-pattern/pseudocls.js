
function CreateAnimal(n, a) {
  this.name = n;
  this.age = a;
}
CreateAnimal.prototype.walk = function () {console.log('animal walk walk')};
CreateAnimal.prototype.move = function () {console.log('animal move move')};


var dog = new CreateAnimal('pooch', 5);

dog // CreateAnimal {name: 'pooch', age: 5}

dog.move(); // animal move move

dog.walk(); // animal walk walk