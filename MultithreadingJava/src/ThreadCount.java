class ThreadCount extends Thread {
    ThreadCount() {
        super("Overriding Thread Class");
        System.out.println("New thread created " + this);
        start();
    }

    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                System.out.println("New thread created " + this);
                Thread.sleep(1500);
            }
        } catch (InterruptedException e) {
            System.out.println("Currently executing thread is interrupted");
        }

        System.out.println("Currently executing thread run is terminated");
    }

}
