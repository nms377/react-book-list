export const ADD_BOOK = 'ADD_BOOK';

export function addBook(title, author) {
	return {
		type: ADD_BOOK,
		//	es2015 lets you write shorthand instead of title: this.title
		title,
		author
	}
}

