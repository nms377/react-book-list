// when you create an action immediately add it to your reducers

import { addBookToFakeXHR } from '../data/BookList.js';

export const ADD_BOOK = 'ADD_BOOK';

// export function addBook(title, author) {
// 	return {
// 		type: ADD_BOOK,
// 		//	es2015 lets you write shorthand instead of title: this.title
// 		title,
// 		author
// 	};
// };

export const addBook = books => {
	return function (dispatch) {
		//asynce actions
		//thunk

		dispatch({
			type: 'ADDING_BOOK',
			// book
		})
		
		// addBookFromFakeXHR(books)
		// 	.then(books => {
		// 		dispatch({
		// 			type:'ADD_BOOK',
		// 			books
		// 		});
		// 	});
	}
}


export const updateBooks = books => {
	// must return a valid action

	return {
		type: 'UPDATE_BOOKS',
		// all other args to pass to my reducer function
		books
	};
};
