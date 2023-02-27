// En este ejemplo se incumple el principio de Inversión de Dependencia
// porque para ejecutar correctamente 'printAnimalNames' se requiere que dog y cat
// estén bien implementadas
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!! woof!!');
  }
}

class Cat extends Animal {
  meow() {
    console.log('meooow!');
  }
}

function printAnimalNames(animals) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.name);
  }
}

const dog0 = new Dog('Jack');
const cat0 = new Cat('Zoey');

const animals0 = [dog0, cat0];

printAnimalNames(animals0);

console.log('\n');

// En este ejemplo se corrige el código:
class animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class dog extends animal {
  woof() {
    console.log('wooff!');
  }
}

class cat extends animal {
  meow() {
    console.log('meow!');
  }
}

// Add Ape class
class Ape extends animal {
  aping() {
    console.log('woo! woo! woo!');
  }
}

function PrintAnimalNames(animals) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.getName());
  }
}

const dog1 = new dog('Yuyo'); // King Kong

// Use the Ape class
const cat1 = new cat('Katy'); // King Kong

// Use the Ape class
const ape = new Ape('King Kong'); // King Kong

const animals = [dog1, cat1, ape];

PrintAnimalNames(animals);