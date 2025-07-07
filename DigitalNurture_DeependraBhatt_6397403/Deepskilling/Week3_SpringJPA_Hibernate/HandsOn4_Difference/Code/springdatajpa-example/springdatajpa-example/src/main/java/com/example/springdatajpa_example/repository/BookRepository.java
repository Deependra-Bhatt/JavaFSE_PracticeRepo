package com.example.springdatajpa_example.repository;

import com.example.springdatajpa_example.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {}
