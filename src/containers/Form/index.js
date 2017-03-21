import React, { Component } from 'react';
// import BookList from '../../data/BookList.js';

class AddBook extends Component {
	constructor(){
		super();
		this.state = {
			value: {
				title: '',
				author: ''
			}
		}
		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log(event.target.value);
		this.setState({value: {
			title: event.target.value.title, author: event.target.value.author
		}});
	}

	handleSubmit(event) {
		alert('A book was submitted: ' + this.state.value.title + ' by ' +this.state.value.author);
		event.preventDefault();
	};

	render(AddBook){
		return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.value.title} onChange={this.handleChange} placeholder="Title of Book"/>
        </label>
        <label>
          Author:
          <input type="text" value={this.state.value.author} onChange={this.handleChange}  placeholder="Who Wrote the Book"/>
        </label>
        <button type="submit" value="Submit">Add Book</button>
      </form>
		);
	}
}

export default AddBook;