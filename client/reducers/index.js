import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import almanac from './almanac.js';
import forecast from './forecast.js';
import fivedayforecast from './five-day-forecast.js';

const rootReducer = combineReducers({almanac, forecast, fivedayforecast, routing: routerReducer});

export default rootReducer;