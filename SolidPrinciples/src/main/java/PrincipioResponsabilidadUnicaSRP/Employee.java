package PrincipioResponsabilidadUnicaSRP;
// 1. Principio de Responsabilidad Única (SRP): Un objeto o clase debería tener solo una responsabilidad.
// Si una clase o método tiene demasiadas responsabilidades, es probable que sea más difícil de mantener y más propenso a errores.
// Por lo tanto, es mejor dividir las responsabilidades en clases o métodos más pequeños y especializados.

// En este ejemplo, la clase Employee tiene la única responsabilidad de almacenar los datos de un empleado
class Employee {
    private String name;
    private double salary;

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}