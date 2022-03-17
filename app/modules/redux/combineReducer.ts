import { combineReducers } from 'redux';
import { WeatherUpdate } from './weather/reducer'

const combineReducer = combineReducers({
    WeatherUpdate
});

export default combineReducer;