public class MobileApp implements Observer{
    String name;
    MobileApp(String name){
        this.name=name;
    }

    @Override
    public void update(double stockPrice) {
        System.out.println("Updated Stock Price on Mobile App "+name+" with Price "+stockPrice);
    }
}
