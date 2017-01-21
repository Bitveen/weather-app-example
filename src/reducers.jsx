import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as ActionTypes from 'actionTypes';




/**
 * Default state for fetched weather
 *
 */
const fetchedWeatherDefaultState = {
    isFetching: false,
    fetchError: false,
    weather: {}
};
const fetchedWeather = (state = fetchedWeatherDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_WEATHER:
            return Object.assign({}, state, {
                isFetching: true,
                fetchError: false
            });
        case ActionTypes.SUCCESS_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                fetchError: false,
                weather: {
                    id: action.id,
                    temp: action.weather.main.temp,
                    city: action.weather.name,
                    fetchedAt: action.fetchedAt
                }
            });
        case ActionTypes.ERROR_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                fetchError: true
            });
        default:
            return state;
    }
};





const searchHistory = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SAVE_WEATHER:
            let newWeather = {
                id: action.id,
                temp: action.weather.main.temp,
                city: action.weather.name,
                fetchedAt: action.fetchedAt
            };
            return state.concat([ newWeather ]);
        case ActionTypes.REMOVE_WEATHER:
            return state.filter(weather => weather.id !== action.id);
        default:
            return state;
    }
};





export default combineReducers({
    routing: routerReducer,
    fetchedWeather: fetchedWeather,
    searchHistory: searchHistory
});
