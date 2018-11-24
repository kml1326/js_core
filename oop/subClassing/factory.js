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

var mammalFunctions = {
  sound: function () {console.log('mammal sound')}
}

function mammal(n, a, w) {
  var mObj = createAnimal(n, a);
  Object.setPrototypeOf(mObj, mammalFunctions);
  mObj.weight = w;
  return mObj;
}
Object.setPrototypeOf(mammalFunctions, animalFunctions);

var chhotaDog = mammal('hippo', 3, 5);

chhotaDog.move(); // animal move
chhotaDog.sound(); // mammal sound