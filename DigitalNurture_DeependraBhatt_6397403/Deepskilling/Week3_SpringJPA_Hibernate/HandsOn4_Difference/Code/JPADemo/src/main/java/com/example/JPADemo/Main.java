package com.example.JPADemo;

import javax.persistence.*;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpa-unit");
        EntityManager em = emf.createEntityManager();

        Book book = new Book("JPA Book");
        em.getTransaction().begin();
        em.persist(book);
        em.getTransaction().commit();

        em.close(); emf.close();
    }
}
