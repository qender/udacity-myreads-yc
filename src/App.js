import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import { getAll } from './BooksAPI';


class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		allBooks: []
	};

	componentDidMount() {
		getAll().then( books => {
			this.setState({
				allBooks: books
			}, () => console.log('allbooks', this.state.allBooks));
		});
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/"
					       render={(props) => <MainPage {...props} allBooks={this.state.allBooks} />}
					/>
					<Route path="/search"
						render={(props) => <SearchPage {...props} allBooks={this.state.allBooks} />}
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default BooksApp;
