package concurrency;

import java.util.concurrent.atomic.AtomicInteger;

public class SynchronizedCounter {
	private AtomicInteger c = new AtomicInteger(0);

	public synchronized void increment(){
		c.incrementAndGet();
	}

	public synchronized void decrement(){
		c.decrementAndGet();
	}

	public synchronized int value(){
		return c.get();
	}

}
