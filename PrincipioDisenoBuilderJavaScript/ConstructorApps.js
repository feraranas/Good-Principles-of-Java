// Tienes un 'builder' que centraliza las ejecuciones
function ConstructorCentral() {
  this.construir = function (constructor) {
    constructor.paso1();
    constructor.paso2();
    constructor.paso3();
    return constructor.get();
  }
}

function construirAppWeb() {

  this.appWeb = null;

  this.paso1 = function () {
    this.appWeb = new appWeb();
  }

  this.paso2 = function () {
    this.appWeb.construyeFrontend();
  }

  this.paso3 = function () {
    this.appWeb.construyeBackend();
  }

  this.get = function () {
    return this.appWeb;
  }
}

function construirAppMovil() {

  this.appMovil = null;

  this.paso1 = function () {
    this.appMovil = new appMovil();
  }

  this.paso2 = function () {
    this.appMovil.construyeUX();
  }

  this.paso3 = function () {
    this.appMovil.construyeMVC();
  }

  this.get = function () {
    return this.appMovil;
  }
}

function appWeb() {

  this.componentes = { "frontend": "", "backend": "" };

  this.construyeFrontend = function () {
    this.componentes["frontend"] = "React";
  }

  this.construyeBackend = function () {
    this.componentes["backend"] = "Django";
  }

  this.imprime = function () {
    console.log("App web echa con frontend: " + this.componentes["frontend"] + ", backend: " + this.componentes["backend"] + ".");
  }
}

function appMovil() {

  this.componentes = [this.UX = "", this.MVC = ""];

  this.construyeUX = function () {
    this.componentes[0] = "UIKIT";
  }

  this.construyeMVC = function () {
    this.componentes[1] = "Model View Controller Arquitecture";
  }

  this.imprime = function () {
    console.log("App movil echa con UX: " + this.componentes[0] + ", MVC: " + this.componentes[1] + ".");
  }
}


// Driver Code
var desarrollador = new ConstructorCentral();
var construirAppWeb = new construirAppWeb();
var construirAppMovil = new construirAppMovil();
var Web = desarrollador.construir(construirAppWeb);
var Movil = desarrollador.construir(construirAppMovil);
Web.imprime();
Movil.imprime();