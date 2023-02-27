// En este ejemplo, SÍ SE CUMPLE el principio LSP, porque Dog y Cat sustituyen a Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows`);
  }
}

function makeAnimalSound(animal) {
  animal.makeSound();
}

const cheetah = new Animal('Cheetah');
makeAnimalSound(cheetah); // Cheetah makes a sound

const dog = new Dog('Jack');
makeAnimalSound(dog); // Jack barks

const cat = new Cat('Khloe');
makeAnimalSound(cat); // Khloe meows

// En este ejemplo, NO SE CUMPLE
class Bird extends Animal {
  fly() {
    console.log(`${this.name} flaps wings`);
  }
}

const parrot = new Bird('Titi the Parrot');
makeAnimalSound(parrot); // Titi the Parrot makes a sound
parrot.fly(); // Titi the Parrot flaps wings