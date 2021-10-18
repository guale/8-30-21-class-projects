package generics;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Generics {

	public static <W> void printArray(W[] arrayIn) {
		for (W element : arrayIn) {
			System.out.printf("%s ", element);
		}
		System.out.println();
	}

	public static <T extends Comparable<T>> int greaterThan(T[] numArray, T elem) {
		int count = 0;
		for (T e : numArray)
			if (e.compareTo(elem) > 0)
				++count;
		return count;
	}

	public static <T> List<T> fromArrayToList(T[] a){
		return Arrays.stream(a).collect(Collectors.toList());
	}

	public static <T, G> List<G> fromArrayToListTG(T[] a, Function<T,G> mapperFunction){
		return Arrays.stream(a)
				.map(mapperFunction)
				.collect(Collectors.toList());
	}

}
