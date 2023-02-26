// Para correr, escribi en consola: node PrincipioResponsabilidadUnica\(SRP\).js

// Este ejemplo NO CUMPLE el Primer principio SOLID.
class Animal {
  constructor(name, feedingType, soundMade) {
    this.name = name;
    this.feedingType = feedingType;
    this.soundMade = soundMade;
  }

  nomenclature() {
    console.log(`The name of the animal is ${this.name}`)
  }

  sound() {
    console.log(`${this.name} ${this.soundMade}`)
  }

  feeding() {
    console.log(`${this.name} is a ${this.feedingType}`)
  }
}

let elephant = new Animal('Elephant', 'herbivore', 'trumpet')

// Ahora separamos por clases para SI CUMPLIR el Primer principio SOLID.
class animal {
  constructor(name) {
    this.name = name;
  }

  nomenclature() {
    console.log(`The name of the animal is ${this.name}`)
  }
}

let animal1 = new Animal('Elephant');
animal1.nomenclature();

// Sound class
class Sound {
  constructor(name, soundMade) {
    this.name = name;
    this.soundMade = soundMade;
  }

  sound() {
    console.log(`${this.name} ${this.soundMade}s`);
  }
}

let animalSound1 = new Sound('Elephant', 'trumpet');
animalSound1.sound(); //Elephant trumpets

// Feeding class
class Feeding {
  constructor(name, feedingType) {
    this.name = name;
    this.feedingType = feedingType;
  }

  feeding() {
    console.log(`${this.name} is a/an ${this.feedingType}`);
  }
}

let animalFeeding1 = new Feeding('Elephant', 'herbivore');
animalFeeding1.feeding(); // Elephant is a/an herbivore