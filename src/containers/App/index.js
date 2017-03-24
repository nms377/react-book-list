import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookList from '../../data/BookList.js';
import AddBook from '../Form';
import './styles.css';

import { createStore } from 'redux';

// import reducer
import books from '../../reducers';

// import actions
import { addBook } from '../../actions';

// create store
// pass reducer to store
let store = createStore(books);

store.dispatch(addBook('HACK THE PLANET', 'BORGZ'));

console.log(store.getState(books));

class App extends Component {
  constructor(){
    super();
    this.state ={
      book: []
    }
  }

  XHRRequest() {
    return new Promise((resolve, reject) => {
      resolve(BookList)
    })
  }

  addBook = (book) => {
    this.setState({
      books: this.state.books.concat([book])
    })
  }

  componentWillMount() {
    this.XHRRequest().then(book => {
      this.setState({
        book
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.book.map( ( { title, author } ) =>
              <BookListAppTitle
                key={title}
                title={title}
                author={author}
              />
            )
          }
        </ul>
        <AddBook addBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
