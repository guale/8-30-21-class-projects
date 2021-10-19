import org.junit.jupiter.api.Test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordTest {

	@Test
	void passwordTest() {
//		var expected = "";
//		var actual = Password.getPassword();

//		System.out.println(Password.getPassword(10,48,122));

		String password = Password.getPassword(10,48,122);

//		String password = "!invalid";

		String stringPattern = "^[A-Za-z0-9]{5,10}$";
		Pattern pattern = Pattern.compile(stringPattern);
		Matcher matcher = pattern.matcher(password);
		boolean match = matcher.matches();

		System.out.println(password);
		assert(match);
	}


}
