import React from 'react';

const AddBook = (props) => (

  <form onSubmit={props.handleSubmit}>
  <label>
    Title:
    <input type="text" onChange={props.handleChange}/>
  </label>
  <label>
    Author:
    <input type="text" onChange={props.handlChange}/>
  </label>
  <button type="submit" >Add Book</button>
	</form>

)

export default AddBook;