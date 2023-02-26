package PrincipioAbiertoCerrado;
// Principio de Abierto/Cerrado (OCP): Un objeto o clase debería estar abierto para extensión pero
// cerrado para modificación. Esto significa que el código existente no debería tener que cambiar
// cada vez que se agrega una nueva funcionalidad.


public class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }
}
