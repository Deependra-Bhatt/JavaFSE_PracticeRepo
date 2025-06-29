import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

// External API to be mocked
interface ExternalApi {
    String getData();
}

// Service that uses the ExternalApi
class MyService {
    private final ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Optional stub (not required for verification alone)
        when(mockApi.getData()).thenReturn("Mock Data");

        // 2. Use the mock in your service
        MyService service = new MyService(mockApi);
        service.fetchData();  // should internally call mockApi.getData()

        // 3. Verify that getData() was called once
        verify(mockApi).getData();
        // or for more strict validation: verify(mockApi, times(1)).getData();
    }
}
