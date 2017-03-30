import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookList from '../../data/BookList.js';
import AddBook from '../Form';
import './styles.css';

import books from '../../reducers';

// import actions
import { addBook, updateBooks } from '../../actions';


// let store = createStore(books);
// create store
// pass reducer to store

// store.dispatch(addBook('HACK THE PLANET', 'BORGZ'));

// console.log(store.getState(books));

class App extends Component {
  constructor(){
    super();

    //  no longer need to set the state if you use redux
    //  state is handled by redux and the store
    //  you do need to have this for your form though
    //  can put in your form component
    // this.state ={
    //   book: []
    // }

  }

  // addBook = (book) => {
    // addBookToFakeXHR(book)
    //   .then(book => {
      //  no more setting states in redux
    //     this.setState({books});
    //   });
    //  trigger action
  //   this.props.addBook(book);
  // }

  // componentWillMount() {
   // getBooksFromFakeXHR()
   //  .then( books => {
   //    books.forEach( book => {
   //      //  internal state way
   //      // store.dispatch(addBook(book.title, book.author))
   //      this.props.updateBooks(books)
   //    });
   //  });
  // }


  render() {
    return (
      <div className="App">
        <h2>React Book List</h2>
        <div>
          <ul>
            {
              this.props.books.map( ( { title, author } ) =>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBook: (title, author) => {
      dispatch(addBook(title, author));
    },
    updateBooks: books => {
      dispatch(updateBooks(books));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
