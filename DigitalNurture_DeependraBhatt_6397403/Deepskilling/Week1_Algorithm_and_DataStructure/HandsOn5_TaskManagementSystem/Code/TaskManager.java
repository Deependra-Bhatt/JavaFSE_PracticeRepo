
public class TaskManager {
    Node head;

    // add task
    public void addTask(Task task){
        Node newNode=new Node(task);
        if(head==null){
            head=newNode;
            return;
        }
        Node current = head;
        while (current.next != null)
            current = current.next;
        current.next = newNode;
    }

    // traverse task
    public void traverseTask(){
        Node current=head;
        while(current!=null){
            System.out.println(current.task);
            current=current.next;
        }
    }

    // search task
    public Task searchTask(int taskId){
        Node current=head;
        while (current!=null) {
            if(current.task.taskId==taskId){
                return current.task;
            }
            current=current.next;
        }
        return null;
    }

    // delete task
    public void deleteTask(int taskId){
        if(head==null){
            System.out.println("Empty List");
            return;
        }

        if(head.task.taskId==taskId){
            head=head.next;
            return;
        }

        Node prev=head;
        Node curr=head.next;
        while(curr!=null){
            if(curr.task.taskId==taskId){
                prev.next=curr.next;
                curr.next=null;
                return;
            }
            prev=curr;
            curr=curr.next;
        }
        System.out.println("Task Not Found");
    }
}
