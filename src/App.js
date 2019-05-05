import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import { getAll } from './BooksAPI';


class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allBooks: []
		};
		this.updateAllBooksState = this.updateAllBooksState.bind(this);
		this.updateBookShelf = this.updateBookShelf.bind(this);
	}

	componentDidMount() {
		getAll().then( books => {
			this.updateAllBooksState(books);
		});
	}

	updateAllBooksState(books) {
		this.setState({
			allBooks: books
		});
	}

	allBooksShelves() {
		let allBooksShelves = [];
		this.state.allBooks.forEach( book => {
			allBooksShelves[book.id] = book.shelf;
		});
		return allBooksShelves;
	}

	updateBookShelf(bookToUpdate, shelf) {
		let updatedBooks = this.state.allBooks.slice();
		const bookInAllBooks = updatedBooks.filter( book => book.id === bookToUpdate.id).length > 0;

		if (bookInAllBooks) {
			updatedBooks.forEach( book => {
				if (book.id === bookToUpdate.id) {
					book.shelf = shelf;
				}
			});
		} else {
			bookToUpdate.shelf = shelf;
			updatedBooks.push(bookToUpdate);
		}

		this.updateAllBooksState(updatedBooks);
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/"
					       render={(props) =>
						       <MainPage
							       {...props}
							       allBooks={this.state.allBooks}
							       updateBookShelf={this.updateBookShelf}
						       />
					       }
					/>
					<Route path="/search"
						render={(props) =>
							<SearchPage
								{...props}
								allBooksShelves={this.allBooksShelves()}
								updateBookShelf={this.updateBookShelf}
							/>}
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default BooksApp;
