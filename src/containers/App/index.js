import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookList from '../../components/BookList.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      BookList
    }
  }

  render() {
    return (
      <ul className="App">
        {
          this.state.BookList.map( ( { title, author } ) =>
            <BookListAppTitle
              key={title}
              title={title}
              author={author}
            />
          )
        }
      </ul>
    );
  }
}

export default App;
