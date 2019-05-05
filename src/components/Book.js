import React, { Component } from 'react';
import BookActions from './BookActions';
import { update } from '../BooksAPI';

class Book extends Component {
	constructor(props) {
		super(props);
		this.updateBookShelf = this.updateBookShelf.bind(this);
	}


	updateBookShelf(newShelf) {
		const bookToUpdate = this.props.book;
		bookToUpdate.shelf = newShelf;
		update(bookToUpdate, newShelf).then( () => {
			this.props.updateBookShelf(bookToUpdate, newShelf);
		});
	}

	render() {
		const { book } = this.props;
		const style = book.imageLinks ? {
			backgroundImage: `url(${book.imageLinks.thumbnail})`
		} : {};

		return (
			<div className="book">
				<div className="book-top">
					{book.imageLinks && <div className="book-cover" style={style}></div>}
					{!book.imageLinks &&
						<img
							className="book-cover-placeholder"
							alt={book.title}
							src={`https://via.placeholder.com/128x175/0000FF/FFFFFF?text=${book.title}`} />
					}
					<BookActions shelf={book.shelf} updateBookShelf={this.updateBookShelf} />
				</div>
				<div className="book-title">{book.title}</div>
				{book.authors && <div className="book-authors">
					{book.authors.map(author => {
						return <div
							key={book.id + "-" + author.replace(/[^a-zA-Z]+/g, '').toLowerCase()}
						>{author}</div>;
					})}
				</div>}
			</div>
		);
	}
}

export default Book;
