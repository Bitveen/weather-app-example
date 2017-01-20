import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as ActionTypes from 'actionTypes';




/**
 * Default State for current location weather
 * @type {Object}
 */
const currentLocationWeatherState = {
    isFetching: false,
    weather: {}
};
const currentLocationWeather = (state = currentLocationWeatherState, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CURRENT_LOCATION_WEATHER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.SUCCESS_CURRENT_LOCATION_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                weather: {
                    temp: action.weather.main.temp,
                    location: action.weather.name
                }
            });
        case ActionTypes.ERROR_CURRENT_LOCATION_WEATHER:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
};





export default combineReducers({
    routing: routerReducer,
    currentLocationWeather: currentLocationWeather
});
