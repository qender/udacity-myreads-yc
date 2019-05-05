import React from 'react';
import Book from "./Book";

const BooksGrid = props => {
	const { books, updateBookShelf } = props;

	return (
		<ol className="books-grid">
			{books.length > 0 && books.map(book => (
				<li key={book.id}>
					<Book
						book={book}
						updateBookShelf={updateBookShelf}
					/>
				</li>
			))}
		</ol>
	);
};

export default BooksGrid;
