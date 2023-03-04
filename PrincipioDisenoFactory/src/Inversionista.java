abstract class Inversionista {
    protected double categoria;
    abstract void setCategoria();

    public void calculaInversion(int monto) {
        System.out.println(categoria * monto);
    }
}//end of Plan Inversionista.
