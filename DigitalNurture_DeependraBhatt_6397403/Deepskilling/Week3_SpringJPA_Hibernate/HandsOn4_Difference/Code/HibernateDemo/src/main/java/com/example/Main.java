package com.example;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();

        Book book = new Book("Hibernate Book");
        Transaction tx = session.beginTransaction();
        session.save(book);
        tx.commit();

        session.close(); factory.close();
    }
}
