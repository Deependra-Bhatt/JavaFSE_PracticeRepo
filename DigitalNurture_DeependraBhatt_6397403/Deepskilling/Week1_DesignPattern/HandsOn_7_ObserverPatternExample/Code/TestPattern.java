public class TestPattern {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        Observer mobile1 = new MobileApp("Groww");
        Observer web1 = new WebApp("Zerodha");
        Observer mobile2 = new MobileApp("Paytm");
        Observer web2 = new WebApp("Google Pay");

        // Register observers
        market.register(mobile1);
        market.register(web1);
        market.register(mobile2);
        market.register(web2);

        // Update stock price
        System.out.println("Updating stock price: ");
        market.setStockPrice(100.50);

        // Deregister observers
        market.deRegister(mobile2);
        market.deRegister(web2);

        System.out.println("\nUpdating stock price: ");
        market.setStockPrice(108.25);
    }
}
