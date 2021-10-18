import generics.Generics;
import org.junit.jupiter.api.Test;

class GenericsTest {

	@Test
	void printArray() {

		Integer[] intArray = {10, 20, 30, 40, 50};
		String[] stringArray = {"Java", "Ruby", "Python", "Swift"};
		Character[] charArray = {'H', 'E', 'L', 'L', 'O'};

		Generics.printArray(intArray);
		Generics.printArray(stringArray);
		Generics.printArray(charArray);

	}


}