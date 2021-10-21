import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class HelloWorldTest {

	@Test
	void HelloWorldTest(){
		String greeting = "Hello, World!";
		assertEquals("Hello, World!", greeting);
	}

	@Test
	void OtherHelloWorldTest(){
		var expected = "Hello, World!";
		var actual = HelloWorld.getMessage();

		assertEquals(expected, actual);
	}

	@Test
	void customHelloTest(){
		var name = "Josh";

		var expected = "Hello, " + name + "!";
		var actual = HelloWorld.getCustomMessage(name);

		assertEquals(expected, actual);
	}

	@Test
	void otherCustomHelloTest(){
		var name = "Amanda";

		var expected = "Hello, " + name + "!";
		var actual = HelloWorld.getCustomMessage(name);

		assertEquals(expected, actual);
	}

}
