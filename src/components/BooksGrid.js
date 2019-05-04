import React from 'react';
import Book from "./Book";

const BooksGrid = (props) => {
	return (
		<ol className="books-grid">
			{props.books.length > 0 && props.books.map(book => (
				<li key={book.id}>
					<Book book={book}
					      thumbnail={book.imageLinks.thumbnail}
					      title={book.title}
					      author={book.author}
			        />
				</li>
			))}
		</ol>
	);
};

export default BooksGrid;
