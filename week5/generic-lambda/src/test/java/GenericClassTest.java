import generics.GenericClass;
import org.junit.jupiter.api.Test;

class GenericClassTest {

	@Test
	void myTypeTest(){
		GenericClass<Boolean> booleanGenericClass= new GenericClass<>();
		GenericClass<String> stringGenericClass= new GenericClass<>();

		booleanGenericClass.add(Boolean.TRUE);
		stringGenericClass.add(new String("I'm a string"));

		System.out.printf("Boolean Value :%b\n\n", booleanGenericClass.get());
		System.out.printf("String Value :%s\n", stringGenericClass.get());

	}

}