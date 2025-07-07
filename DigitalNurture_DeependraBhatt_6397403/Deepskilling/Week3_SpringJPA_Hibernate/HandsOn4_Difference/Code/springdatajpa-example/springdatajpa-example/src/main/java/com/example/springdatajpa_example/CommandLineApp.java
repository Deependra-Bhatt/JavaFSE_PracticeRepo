package com.example.springdatajpa_example;

import com.example.springdatajpa_example.model.Book;
import com.example.springdatajpa_example.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CommandLineApp implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void run(String... args) {
        bookRepository.save(new Book("Spring Data JPA Book"));
        bookRepository.findAll().forEach(b -> System.out.println(b.getTitle()));
    }
}
