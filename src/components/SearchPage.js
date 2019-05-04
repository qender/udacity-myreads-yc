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

	searchBooks(event) {
		event.preventDefault();
		search(this.state.q).then( (books) => {
			books = books ? books : [];
			this.setState({
				books: books
			});
		});
	}

	updateQueryText(q) {
		this.setState({
			q: q
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

			              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			              you don't find a specific author or title. Every search is limited by search terms.
			            */}
			            <form onSubmit={(e) => this.searchBooks(e)}>
				            <input
								type="text"
								placeholder="Search by title or author"
								value={this.state.q}
								onChange={(e) => this.updateQueryText(e.target.value)}
							/>
			            </form>

					</div>
				</div>
				<div className="search-books-results">
					<BooksGrid books={this.state.books} />
				</div>
			</div>
		);
	}
}

export default SearchPage;
