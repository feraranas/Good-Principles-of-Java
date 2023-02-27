// Este ejemplo NO CUMPLE con el principio de Segregación de Interface
// La clase 'Fish' no necesita el método 'Fly' de la clase 'Animal'
// La clase 'Bird' no necesita el método 'Swim' de la clase 'Animal'
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  swim() {
    console.log(`${this.name} is swimming`);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

class Fish extends Animal {
  fly() {
    console.error("ERROR! Fishes can't fly");
  }
}

class Bird extends Animal {
  swim() {
    console.error("ERROR! Birds can't swim");
  }
}

const bird0 = new Bird('Titi the Parrot');
bird0.swim(); // ERROR! Birds can't swim

const fish0 = new Fish('Neo the Dolphin');
fish0.fly(); // ERROR! Fishes can't fly


// En este ejemplo sí se cumple el principio (ISP)
class animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  swim() {
    console.log(`${this.name} is swimming`);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

class fish extends animal {
  // This class needs the swim() method
}

class bird extends animal {
  //   THis class needs the fly() method
}

console.log('\n');

// Making them implement the methods they need
const bird1 = new bird('Titi the Parrot');
bird1.swim(); // Titi the Parrot is swimming

const fish1 = new fish('Neo the Dolphin');
fish1.fly(); // Neo the Dolphin is flying

console.log('\n');

// Both can also implement eat() method of the Super class because they both eat
bird1.eat(); // Titi the Parrot is eating
fish1.eat(); // Neo the Dolphin is eating