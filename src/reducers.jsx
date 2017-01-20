import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as ActionTypes from 'actionTypes';




/**
 * Default state for fetched weather
 *
 */
const fetchedWeatherDefaultState = {
    isFetching: false,
    weather: {}
};
const fetchedWeather = (state = fetchedWeatherDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_WEATHER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.SUCCESS_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                weather: {
                    id: action.id,
                    temp: action.weather.main.temp,
                    city: action.weather.name,
                    fetchedAt: action.fetchedAt
                }
            });
        case ActionTypes.ERROR_WEATHER:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
};




const searchHistoryDefaultState = [
    {
        id: 1,
        temp: -10,
        city: 'Moscow',
        fetchedAt: Date.now()
    },
    {
        id: 2,
        temp: -1,
        city: 'Kudrovo',
        fetchedAt: Date.now()
    }
];


const searchHistory = (state = searchHistoryDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_WEATHER:
            return state.concat([ action.weather ]);
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
