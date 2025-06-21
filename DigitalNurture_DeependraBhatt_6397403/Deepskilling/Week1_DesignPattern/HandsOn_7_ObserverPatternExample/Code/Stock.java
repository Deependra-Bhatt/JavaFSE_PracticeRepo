public interface Stock{
    public void register(Observer ob);
    public void deRegister(Observer ob);
    public void notifyObservers();
}
