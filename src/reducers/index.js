// import { ADD_BOOK } from '../actions';

// const initialState = {
// 	books: []
// };

// // es2015 feature allows us to set default value for parameter
// function books(state = initialState, action) {
//   switch(action.type) {
//     case ADD_BOOK:
//       return Object.assign({}, state, {
//         books: [
//         	//	new feature ... is a spread operator
//         	//	
//           ...state.books,
//           {
//             title: action.title,
//             author: action.author
//           }
//         ]
//       })
//     default:
//       return state;
//   }
// }

// export default books;

import { combineReducers } from 'redux'
import books from './books';

const reducers = combineReducers({
  books
});

export default reducers;