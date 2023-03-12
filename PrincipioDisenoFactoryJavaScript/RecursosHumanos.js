var recursosHumanos = function () {

  this.crearEmpleado = function (tipo) {

    var empleado;

    if (tipo === "tiempoCompleto") {
      empleado = new tiempoCompleto();
    } else if (tipo === "tiempoMedio") {
      empleado = new tiempoMedio();
    } else if (tipo === "freelance") {
      empleado = new freelance();
    } else if (tipo === "contratista") {
      empleado = new contratista();
    }

    empleado.tipo = tipo;

    empleado.imprime = function () {
      console.log(this.tipo + " gana de sueldo: " + this.porHora + "/hora.");
    }

    return empleado;
  }
}

var tiempoCompleto = function () {
  this.porHora = "$100";
}

var tiempoMedio = function () {
  this.porHora = "50";
}

var freelance = function () {
  this.porHora = "25";
}

var contratista = function () {
  this.porHora = "200";
}


var empleados = [];
var recursosHumanos = new recursosHumanos();

empleados.push(recursosHumanos.crearEmpleado("tiempoCompleto"));
empleados.push(recursosHumanos.crearEmpleado("tiempoMedio"));
empleados.push(recursosHumanos.crearEmpleado("freelance"));
empleados.push(recursosHumanos.crearEmpleado("contratista"));

for (var i = 0, len = empleados.length; i < len; i++) {
  empleados[i].imprime();
}
