import React from 'react';
import BooksGrid from "./BooksGrid";


const Shelf = props => {
	const { name, books, updateBookShelf } = props;

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{name}</h2>
			<div className="bookshelf-books">
				<BooksGrid
					books={books}
					updateBookShelf={updateBookShelf}
				/>
			</div>
		</div>
	);
};

export default Shelf;
