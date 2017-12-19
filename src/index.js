import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import handleTransaction from './reducers/handleTransaction.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(handleTransaction, composeWithDevTools()

);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
