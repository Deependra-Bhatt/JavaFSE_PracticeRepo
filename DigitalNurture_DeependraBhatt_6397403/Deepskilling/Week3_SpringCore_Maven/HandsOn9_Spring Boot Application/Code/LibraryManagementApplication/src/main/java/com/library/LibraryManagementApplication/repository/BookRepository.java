package com.library.LibraryManagementApplication.repository;

import com.library.LibraryManagementApplication.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
