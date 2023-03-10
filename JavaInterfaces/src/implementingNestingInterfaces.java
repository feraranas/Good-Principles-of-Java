
public class implementingNestingInterfaces implements nestingInterfaces.InterfaceInner {
    public void InnerMethod() {
        int iteration = 0, num = 0, x = 1, y = 1;

        while (num < 15) {
            y = 1;
            iteration = 0;
            while (y <= x) {
                if (x % y == 0)
                    iteration++;
                y++;
            }

            if (iteration == 2) {
                System.out.printf("%d ", x);
                num++;
            }

            x++;
        }
    }
}
