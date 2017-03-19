import React from 'react';

const AddBook = (props) => (

  <form>
  <label>
    Title:
    <input type="text" value={props.state.book} onChange={props.handleChange}/>
  </label>
  <label>
    Author:
    <input type="text" value={props.state.book} onChange={props.handleChange}/>
  </label>
  <button type="submit" onSubmit={props.handleSubmit}>Add Book</button>
	</form>

)

export default AddBook;