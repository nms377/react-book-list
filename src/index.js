import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Form from './containers/Form';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import books from './reducers';

let store = createStore(books);

ReactDOM.render(
	<div>
		<Provider store={store}>
		  <App />
		  <Form />
	  </Provider>
	</div>,  
  document.getElementById('root')
);
