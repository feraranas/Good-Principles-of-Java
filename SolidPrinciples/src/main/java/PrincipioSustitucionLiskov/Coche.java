package PrincipioSustitucionLiskov;

public class Coche extends Vehiculo {
    @Override
    public void acelerar() {
        System.out.println("Acelerando el coche...");
    }
}