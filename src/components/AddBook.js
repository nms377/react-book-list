import React from 'react';

const AddBook = (props) => (

  <form>
  <label>
    Title:
    <input type="text" onChange={props.handleChange}/>
  </label>
  <label>
    Author:
    <input type="text" onChange={props.handlChange}/>
  </label>
  <button type="submit" onSubmit={props.handleSubmit}>Add Book</button>
	</form>

)

export default AddBook;