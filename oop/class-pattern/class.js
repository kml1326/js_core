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