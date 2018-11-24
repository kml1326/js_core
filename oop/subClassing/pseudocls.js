
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

function Mammal(n, a, w) {
  CreateAnimal.call(this, n, a);
  this.weight = w;
}

Mammal.prototype = Object.create(CreateAnimal.prototype);
Mammal.prototype.sound = function () {console.log('mammal sound sound')};

var chhotaDog = new Mammal('hippo', 3, 5);

chhotaDog.move(); // animal move move
chhotaDog.walk(); // animal walk walk
chhotaDog.sound(); // mammal sound sound