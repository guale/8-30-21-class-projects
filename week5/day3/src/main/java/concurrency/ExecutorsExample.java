package concurrency;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorsExample {

	public static void main(String[] args){
		Runnable runnable = () ->System.out.println("Hello from a runnable!");
		ExecutorService executor = java.util.concurrent.Executors.newSingleThreadExecutor();
		ExecutorService service = Executors.newFixedThreadPool(10);

		executor.execute(runnable);
		executor.execute(()->System.out.println("Hello from another runnable!"));
		executor.shutdown();

		service.execute(()-> System.out.println("Hello from Runnable 1!"));
		service.execute(()-> System.out.println("Hello from Runnable 2!"));
		service.shutdown();
	}

}
