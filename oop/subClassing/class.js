class CreateAnimal {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }

  walk() {console.log('animal walk')};
  move() {console.log('animal move')};

}

var dog = new CreateAnimal('hippo', 3);

dog // CreateAnimal {name: 'pooch', age: 5}
dog.move(); // animal move
dog.walk(); // animal walk

class Mammal extends CreateAnimal {
  constructor(n, a, w) {
    super(n, a);
    this.weight = w;
  }

  sound() {console.log('mammal sound')};

}

var chhotaDog = new Mammal('hippo', 3, 5);

chhotaDog.move(); // animal move
chhotaDog.walk(); // animal walk
chhotaDog.sound(); // mammal sound