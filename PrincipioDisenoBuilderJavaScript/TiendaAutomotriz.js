function tienda() {
  this.construir = function (constructor) {
    constructor.paso1();
    constructor.paso2();
    return constructor.get();
  }
}

function construirCarro() {
  this.carro = null;

  this.paso1 = function () {
    this.carro = new carro();
  }

  this.paso2 = function () {
    this.carro.agregarPartes();
  }

  this.get = function () {
    return this.carro;
  }
}

function construirCamioneta() {
  this.camioneta = null;

  this.paso1 = function () {
    this.camioneta = new camioneta();
  }

  this.paso2 = function () {
    this.camioneta.agregarPartes();
  }

  this.get = function () {
    return this.camioneta;
  }
}

function carro() {

  this.puertas = 0;

  this.agregarPartes = function () {
    this.puertas = 4;
  }

  this.imprime = function () {
    console.log("Soy un carro de " + this.puertas + " puertas.");
  }
}

function camioneta() {

  this.puertas = 0;

  this.agregarPartes = function () {
    this.puertas = 2;
  }

  this.imprime = function () {
    console.log("Soy una camioneta de " + this.puertas + " puertas.");
  }
}

// Driver code: Ejecución de Builder
var tienda = new tienda();
var construirCarro = new construirCarro();
var construirCamioneta = new construirCamioneta();
var carro = tienda.construir(construirCarro);
var camioneta = tienda.construir(construirCamioneta);
carro.imprime();
camioneta.imprime();