import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const MainPage = props => {

	const { allBooks, updateBookShelf } = props;

	const currentlyReading = allBooks.filter( book => book.shelf === 'currentlyReading');
	const wantToRead = allBooks.filter( book => book.shelf === 'wantToRead');
	const readPreviously = allBooks.filter( book => book.shelf === 'read');

	const shelves = [
		{
			name: "Currently Reading",
			books: currentlyReading
		},
		{
			name: "Want to Read",
			books: wantToRead
		},
		{
			name: "Read",
			books: readPreviously
		},
	];

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					{shelves.map(shelf => (
						<Shelf
							key={shelf.name.split(" ").join("").toLowerCase()}
							name={shelf.name}
							books={shelf.books}
							updateBookShelf={updateBookShelf}
						/>
					))}
				</div>
			</div>
			<div className="open-search">
				<Link to="/search">
					<button />
				</Link>
			</div>
		</div>
	);
};

export default MainPage;
