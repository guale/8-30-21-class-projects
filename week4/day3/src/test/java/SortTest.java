import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class SortTest {

	@Test
	void quickSort() {
		Integer[] array = new Integer[] { 12, 13, 24, 10, 3, 6, 90, 70 };
		Sort.quickSort(array,0,array.length-1);
		System.out.println(Arrays.toString(array));
	}

	@Test
	void mergeSort() {
		Integer[] a = { 2, 6, 3, 5, 1 };
		Sort.mergeSort(a);
		System.out.println(Arrays.toString(a));
	}
}