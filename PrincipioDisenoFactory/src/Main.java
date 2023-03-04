import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

        setPlanInversionista planInversionista = new setPlanInversionista();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Ingresa el perfil del inversionista: ");
        String planName = br.readLine();

        System.out.println("Ingresa el monto de inversión: ");
        int inversion = Integer.parseInt(br.readLine());

        Inversionista p = planInversionista.setPlan(planName);
        System.out.print("El perfil del inversionista es " + planName + " su tasa de inversión es: " );
        p.setCategoria();
        p.calculaInversion(inversion);
    }
}