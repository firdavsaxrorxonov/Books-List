import React from 'react';
import BookCard from './BookCard';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div style={{ display: 'flex', gap: '24px', marginTop: 36, flexWrap: 'wrap', justifyContent: 'space-start' }}>
      {books.map((book, index) => (
        <BookCard key={index} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;
