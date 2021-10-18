import concurrency.*;

import java.util.Arrays;
import java.util.concurrent.ForkJoinPool;

public class Main {

	public static void main(String[] args) {

//		new Thread(new HelloRunnable()).start();
//
//		(new HelloThread()).start();
//
//		new Thread(() -> System.out.println("Hello from a lambda runnable!")).start();

//		SynchronizedRGB color = new SynchronizedRGB(0,0,0,"Pitch Black");
//		int myColorInt=color.getRGB();
//		new Thread(()-> color.set(255,255,255,"white"));
//
//		String myColorName = color.getName();
//
//		System.out.println(color.getName());

//		ImmutableRGB immutableRGB = new ImmutableRGB(255,255,255,"white");
//		new Thread(() -> System.out.println(immutableRGB.invert())).start();
		int[] src = {10, 32, 34, 255, 12, 43, 23};
		int[] dst = {0, 0, 0, 0, 0, 0, 0,};

		ForkBlur fb = new ForkBlur(src, 0, src.length, dst);
		ForkJoinPool pool = new ForkJoinPool();
		pool.invoke(fb);

		System.out.println(Arrays.toString(src));
		System.out.println(Arrays.toString(dst));
	}

}
