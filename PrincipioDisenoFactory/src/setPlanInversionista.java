public class setPlanInversionista {
    public Inversionista setPlan(String tipo) {
        if (tipo == null) {
            return null;
        } else if (tipo.equalsIgnoreCase("ALTORIESGO")) {
            return new InversionistaRiesgoAlto();
        } else if (tipo.equalsIgnoreCase("MEDIORIESGO")) {
            return new InversionistaRiesgoMedio();
        } else if (tipo.equalsIgnoreCase("BAJORIESGO")) {
            return new InversionistaRiesgoBajo();
        }
        return null;
    }
}
