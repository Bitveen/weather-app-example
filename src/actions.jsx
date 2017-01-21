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

const errorWeather = (error) => {
    return {
        type: ActionTypes.ERROR_WEATHER,
        fetchError: error
    };
};

export const fetchWeatherByPosition = () => {
    return dispatch => {
        dispatch(requestWeather());
        return getWeatherByCurrentPosition()
            .then(response => response.json())
            .then(fetchedWeather => {
                dispatch(successWeather(fetchedWeather));
            }).catch((error) => {
                dispatch(errorWeather(error));
            });
    };
};
export const fetchWeatherByCityName = (cityName) => {
    return dispatch => {
        dispatch(requestWeather());
        return getWeatherByCityName(cityName)
            .then(response => {
                if (response.status < 400) {
                    return response.json().then(fetchedWeather => {
                        dispatch(successWeather(fetchedWeather));
                        dispatch(saveWeather(fetchedWeather));
                    });
                } else {
                    return response.json().then(error => {
                        return Promise.reject(error);
                    });
                }
            })
            .catch(error => {
                dispatch(errorWeather(error));
            });
    };
};
