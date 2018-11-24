var animalFunctions = {
  walk: function () {console.log('animal walk')},
  move: function () {console.log('animal move')}
}

function createAnimal(n, a) {
  var obj = Object.create(animalFunctions);
  obj.name = n;
  obj.age = a;
  return obj;
}

var dog = createAnimal('poochi', 2);

dog.move(); // animal move
dog.walk(); // animal walk