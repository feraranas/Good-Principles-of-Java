package PrincipioSustitucionLiskov;

public class Moto extends Vehiculo {
    @Override
    public void acelerar() {
        System.out.println("Acelerando la moto...");
    }
}
