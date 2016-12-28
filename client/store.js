import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';

//get the root reducer

import rootReducer from './reducers/index.js';

import almanac from './data/almanac';
import forecast from './data/forecast';
import fivedayforecast from './data/five-day-forecast';


const defaultState = {
	almanac,
	forecast,
	fivedayforecast
};



const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}


const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));


store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});
export const history = syncHistoryWithStore(hashHistory, store);

export default store;