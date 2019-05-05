import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			q: ''
		};
	}

	searchBooks() {
		if (this.state.q) {
			search(this.state.q).then( (bookResults) => {
				bookResults = !bookResults.error ? bookResults : [];

				bookResults.forEach( book => {
					if (this.props.allBooksShelves[book.id]) {
						book.shelf = this.props.allBooksShelves[book.id];
					}
				});

				this.setState({ books: bookResults });
			});
		} else {
			this.setState({ books: [] });
		}
	}

	updateQueryText(q) {
		this.setState({
			q: q
		}, () => {
			this.searchBooks()
		});
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search" />
					<div className="search-books-input-wrapper">
						{/*
			              NOTES: The search from BooksAPI is limited to a particular set of search terms.
			              You can find these search terms here:
			              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
			            */}
			            <input
							type="text"
							placeholder="Search by title or author"
							value={this.state.q}
							onChange={(e) => this.updateQueryText(e.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<BooksGrid
						books={this.state.books}
						updateBookShelf={this.props.updateBookShelf}
					/>
				</div>
			</div>
		);
	}
}

export default SearchPage;
