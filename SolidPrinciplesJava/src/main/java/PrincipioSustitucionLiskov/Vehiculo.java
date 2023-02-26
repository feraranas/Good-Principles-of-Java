package PrincipioSustitucionLiskov;
//Principio de Sustitución de Liskov (LSP): Las clases hijas deben poder usarse en lugar de las clases padres
// sin causar problemas. Esto significa que si un programa está diseñado para trabajar con una clase en particular,
// también debería poder trabajar con cualquier subclase de esa clase.
public class Vehiculo {
    public void acelerar() {
        System.out.println("Acelerando...");
    }
}


