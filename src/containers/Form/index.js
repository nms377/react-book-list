import React, { Component } from 'react';
import BookList from '../../data/BookList.js';

class AddBook extends Component {
	constructor(){
		super();
		this.state = {
			book: BookList
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.book});
	}

	handleSubmit(event) {
		alert('A book was submitted: ' + this.state.book);
		event.preventDefault();
	}

	render(){
		return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.book} onChange={this.handleChange}/>
        </label>
        <label>
          Author:
          <input type="text" value={this.state.book} onChange={this.handleChange}/>
        </label>
        <button type="submit">Add Book</button>
      </form>
		);
	}
}

export default AddBook;