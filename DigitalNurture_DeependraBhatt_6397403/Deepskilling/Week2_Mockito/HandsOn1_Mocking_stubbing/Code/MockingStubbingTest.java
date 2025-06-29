import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

// Simulating the external API
interface ExternalApi {
    String getData();
}

// Service that uses the external API
class MockingStubbing {
    private final ExternalApi api;

    public MockingStubbing(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}

public class MockingStubbingTest {

    @Test
    public void testExternalApi() {
        // 1. Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Use the mock in service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert result
        assertEquals("Mock Data", result);
    }
}
