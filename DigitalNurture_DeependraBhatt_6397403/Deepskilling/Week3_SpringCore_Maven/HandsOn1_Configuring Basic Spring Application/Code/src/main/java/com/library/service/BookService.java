package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    // Dependency
    private BookRepository bookRepository;

    // Setter-based Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showAllBooks() {
        System.out.println("Service: Requesting repository to show books...");
        bookRepository.displayBooks();
    }
}
