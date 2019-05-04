import React, { Component } from 'react';
import BookActions from './BookActions';
import { update } from '../BooksAPI';

class Book extends Component {
	constructor(props) {
		super(props);
		this.updateBookShelf = this.updateBookShelf.bind(this);
	}


	updateBookShelf(newShelf) {
		update(this.props.book, newShelf).then(
			// TODO: Update book's shelf
		)
	}

	render() {
		const book = this.props.book;

		const style = {
			backgroundImage: `url(${book.imageLinks.thumbnail})`
		};

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={style}></div>
					<BookActions updateBookShelf={this.updateBookShelf} />
				</div>
				<div className="book-title">{this.props.title}</div>
				<div className="book-authors">{this.props.author}</div>
			</div>
		);
	}
}

export default Book;
