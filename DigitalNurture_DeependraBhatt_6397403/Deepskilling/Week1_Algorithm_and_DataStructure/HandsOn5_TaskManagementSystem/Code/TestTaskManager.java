
public class TestTaskManager {
    public static void main(String[] args) {
        TaskManager tm = new TaskManager();

        tm.addTask(new Task(1, "Design UI", "Completed"));
        tm.addTask(new Task(2, "Develop Backend", "In Progress"));
        tm.addTask(new Task(3, "Write Tests", "Pending"));
        tm.addTask(new Task(4, "Run Test", "Pending"));

        System.out.println("All Tasks:");
        tm.traverseTask();

        System.out.println("\nSearching for Task with ID 2:");
        Task found = tm.searchTask(2);
        System.out.println(found != null ? found : "Not Found");

        System.out.println("\nDeleting Task with ID 1:");
        tm.deleteTask(1);

        System.out.println("\nAll Tasks after Deletion:");
        tm.traverseTask();

        System.out.println("\nDeleting Task with ID 7:");
        tm.deleteTask(7);
    }
}
