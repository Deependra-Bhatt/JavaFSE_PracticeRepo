import React from 'react';

function BookDetails({ books }) {
  // Conditional Rendering: Using short-circuit &&
  return (
    <div className="column">
      <h1>Book Details</h1>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookDetails;
