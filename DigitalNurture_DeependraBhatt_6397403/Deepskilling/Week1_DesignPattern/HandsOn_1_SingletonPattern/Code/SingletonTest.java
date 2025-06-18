public class SingletonTest {
    public static void main(String[] args) {
        
        Logger instance1= Logger.getLogger();
        Logger instance2= Logger.getLogger();

        /* If Both the Hash Code are Same then successful Implementation */
        if(instance1.hashCode()==instance2.hashCode()){
            System.out.println("Successful Singleton Implementation");
        }
        else{
            System.out.println(" Singleton Implementation Failed");
        }

        /* Printing the Hash Code */
        System.out.println("Hash Code Instance1: "+instance1.hashCode());
        System.out.println("Hash Code Instance2: "+instance2.hashCode());
    }
}
