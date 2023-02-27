// Para correr en consola: node PrincipioAbiertoCerrado\(OCP\).js 


// Esta clase NO CUMPLE con el principio Abierto/Cerrado porque para agregar
// un nuevo tipo de animal debes modificar la función getSpeed.

// El statement SWITCH viola el principio de open-closed.
class Animal {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  getSpeed() {
    switch (this.type) {
      case 'cheetah':
        console.log('Cheetah runs up to 130mph ');
        break;
      case 'lion':
        console.log('Lion runs up to 80mph');
        break;
      case 'elephant':
        console.log('Elephant runs up to 40mph');
        break;
      default:
        throw new Error(`Unsupported animal type: ${this.type}`);
    }
  }
}

const animal1 = new Animal('Lion', 4, 'lion');
animal1.getSpeed(); // Lion runs up to 80mph


// REFACTORIZAMOS PARA CUMPLIR CON EL PRINCIPIO
class animal {
  constructor(name, age, speedRate) {
    this.name = name;
    this.age = age;
    this.speedRate = speedRate;
  }

  getSpeed() {
    return this.speedRate.getSpeed();
  }
}

class SpeedRate {
  getSpeed() { }
}

class CheetahSpeedRate extends SpeedRate {
  getSpeed() {
    return 130;
  }
}

class LionSpeedRate extends SpeedRate {
  getSpeed() {
    return 80;
  }
}

class ElephantSpeedRate extends SpeedRate {
  getSpeed() {
    return 40;
  }
}

const cheetah = new animal('Cheetah', 4, new CheetahSpeedRate());
console.log(`${cheetah.name} runs up to ${cheetah.getSpeed()} mph`);

const lion = new animal('Lion', 5, new LionSpeedRate());
console.log(`${lion.name} runs up to ${lion.getSpeed()} mph`);

const elephant = new animal('Elephant', 10, new ElephantSpeedRate());
console.log(`${elephant.name} runs up to ${elephant.getSpeed()} mph`);