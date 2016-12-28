import React from 'react';
import { render } from 'react-dom';
//get components
import App from './components/App.js';
import Search from './components/Search.js';
import Weather from './components/Weather.js';


import css from './css/main.css'; //update this for mine

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			<IndexRoute component={Search}></IndexRoute>
			<Route path="/weather/:cityid" component={Weather}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
