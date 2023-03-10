public class Main {
    public static void main(String[] args) {
        implementingInterfaces geometry = new implementingInterfaces();

        geometry.Circle();

        geometry.Square();

        geometry.Rectangle();

        geometry.Triangle();

        implementingNestingInterfaces obj = new implementingNestingInterfaces();

        obj.InnerMethod();
    }
}