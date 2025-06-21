import java.util.*;

public class StockMarket implements Stock{

    List<Observer> observers=new ArrayList<>();
    private double stockPrice;

    public void setStockPrice(double price) {
        this.stockPrice = price;
        notifyObservers();  // Notify all registered observers
    }

    public double getStockPrice() {
        return stockPrice;
    }

    @Override
    public void register(Observer ob) {
        this.observers.add(ob);
    }

    @Override
    public void deRegister(Observer ob) {
        this.observers.remove(ob);
    }

    @Override
    public void notifyObservers() {
        for(Observer ob:this.observers){
            ob.update(stockPrice);
    }
}
}
