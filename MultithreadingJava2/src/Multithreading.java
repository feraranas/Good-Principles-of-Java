public class Multithreading extends Thread {
    public void run() {
        try {
            System.out.println("Thread executing number: " + Thread.currentThread().getId());
        } catch(Exception e) {
            System.out.println("Exception caught!");
        }
        System.out.println("Finished executing thread number: " + Thread.currentThread().getId());
    }
}
