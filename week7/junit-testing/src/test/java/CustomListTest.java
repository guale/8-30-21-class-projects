import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CustomListTest {

	@Test
	void givenEmptyList_whenIsEmpty_thenTrueIsReturned() {
		List<Object> list = new CustomList<>();

		boolean isEmpty = list.isEmpty();

		assertTrue(isEmpty);

	}

	@Test
	void givenNonEmptyList_whenIsEmpty_thenFalseIsReturned() {
		List<Object> list = new CustomList<>();
		list.add(null);

		assertFalse(list.isEmpty());

	}

	@Test
	void givenListWithElement_whenSize_thenOneIsReturned(){
		List<Object> list = new CustomList<>();
		list.add(null);

		assertEquals(1, list.size());

	}

	@Test
	void givenListWithoutElement_whenSize_thenZeroIsReturned(){
		List<Object> list = new CustomList<>();

		assertEquals(0, list.size());
	}

	@Test
	void givenListWithNumElement_whenSize_thenNumIsReturned(){
		List<Object> list = new CustomList<>();

		assertEquals(0, list.size());

		for(int i = 1; i<=100; i++){
			list.add("test");

			assertEquals(i, list.size());
		}
	}

	@Test
	void givenListWithAnElement_whenGet_thenThatElementIsReturned(){
		List<Object> list = new CustomList<>();
		Object element = "baeldung";

		list.add(element);

		assertEquals(element, list.get(0));

	}

	@Test
	void givenListWithSecondElement_whenGet_thenThatElementIsReturned(){
		List<Object> list = new CustomList<>();
		list.add("baeldung");
		list.add("not baeldung");

		assertEquals("not baeldung", list.get(1));

	}

	@Test
	public void givenListWithAnElement_whenAnotherIsAdded_thenGetReturnsBoth() {
		List<Object> list = new CustomList<>();
		list.add("baeldung");
		list.add(".com");
		Object element1 = list.get(0);
		Object element2 = list.get(1);

		assertEquals("baeldung", element1);
		assertEquals(".com", element2);
	}

}