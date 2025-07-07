package com.example;

import javax.persistence.*;

@Entity
public class Book {
    @Id @GeneratedValue
    private Long id;
    private String title;

    public Book() {}
    public Book(String title) { this.title = title; }
}
