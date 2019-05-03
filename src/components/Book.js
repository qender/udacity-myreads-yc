import React from 'react';
import BookActions from './BookActions';

const Book = (props) => (
	<div className="book">
		<div className="book-top">
			<div className="book-cover" style={props.style}></div>
			<BookActions/>
		</div>
		<div className="book-title">{props.title}</div>
		<div className="book-authors">{props.author}</div>
	</div>
);

export default Book;
