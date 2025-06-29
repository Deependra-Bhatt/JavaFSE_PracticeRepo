import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup: runs before each test
        System.out.println("Setting up Calculator...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        // Teardown: runs after each test
        System.out.println("Cleaning up Calculator...\n");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 5, b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testMultiplication() {
        // Arrange
        int a = 4, b = 6;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(24, result);
    }
}
