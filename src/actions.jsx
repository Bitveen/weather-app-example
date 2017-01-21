import * as ActionTypes from 'actionTypes';
import { getWeatherByCurrentPosition, getWeatherByCityName } from 'api';
import uuid from 'uuid';





/**
 * Save or Remove fetched weather
 *
 */
const saveWeather = (weather) => {
    return {
        type: ActionTypes.SAVE_WEATHER,
        weather,
        id: uuid(),
        fetchedAt: Date.now()
    };
};

export const removeWeather = (id) => {
    return {
        type: ActionTypes.REMOVE_WEATHER,
        id
    };
};




/**
 * Fetch weather from API
 *
 */
const requestWeather = () => {
    return {
        type: ActionTypes.REQUEST_WEATHER
    };
};
const successWeather = (weather) => {
    return {
        type: ActionTypes.SUCCESS_WEATHER,
        weather,
        id: uuid(),
        fetchedAt: Date.now()
    };
};

const errorWeather = () => {
    return {
        type: ActionTypes.ERROR_WEATHER
    };
};

export const fetchWeatherByPosition = () => {
    return dispatch => {
        dispatch(requestWeather());
        return getWeatherByCurrentPosition()
            .then(response => response.json())
            .then(fetchedWeather => {
                dispatch(successWeather(fetchedWeather));
            }).catch(() => {
                dispatch(errorWeather());
            });
    };
};
export const fetchWeatherByCityName = (cityName) => {
    return dispatch => {
        dispatch(requestWeather());
        return getWeatherByCityName(cityName)
            .then(response => response.json())
            .then(fetchedWeather => {
                dispatch(successWeather(fetchedWeather));
                dispatch(saveWeather(fetchedWeather));
            }).catch(() => {
                dispatch(errorWeather());
            });
    };
};
