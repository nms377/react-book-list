//external dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createDevTools } from 'redux-devtools';

// internal dependencies
import App from './containers/App';
import Form from './containers/Form';
import About from './components/About';
import FavoriteBook from './components/FavoriteBook';
import Nav from './components/Nav';
import './index.css';
import reducers from './reducers';

//	reducers 
let store = createStore(reducers, 
	//	for use in development only
	//	don't keep when you go to production 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	// applyMiddleware(ReduxThunk)
);

ReactDOM.render(
	<div>
		<Provider store={store}>
		  <Router>
		  	<div>
		  		<div>
		  			<Nav />
		  		</div>
		  		<Route exact path="/" component={App} />
		  		<Route path="/about" component={About}/>
		  		<Route path="/favebook" component={FavoriteBook}/>
		  	</div>
		  </Router>	
	  </Provider>
	</div>,  
  document.getElementById('root')
);
