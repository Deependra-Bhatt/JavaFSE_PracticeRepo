public class WebApp implements Observer{
    String name;
    WebApp(String name){
        this.name=name;
    }

    @Override
    public void update(double stockPrice) {
        System.out.println("Updated Stock Price on Web App "+name+" with Price "+stockPrice);
    }
    
}
