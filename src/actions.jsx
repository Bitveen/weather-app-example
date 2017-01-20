import * as ActionTypes from 'actionTypes';
import { getWeatherByCurrentPosition } from 'api';


const requestCurrentLocationWeather = () => {
    return {
        type: ActionTypes.REQUEST_CURRENT_LOCATION_WEATHER
    };
};
const successCurrentLocationWeather = (weather) => {
    return {
        type: ActionTypes.SUCCESS_CURRENT_LOCATION_WEATHER,
        weather: weather
    };
};



export const fetchWeatherByPosition = () => {
    return dispatch => {
        dispatch(requestCurrentLocationWeather());
        return getWeatherByCurrentPosition()
            .then(response => response.json())
            .then(fetchedWeather => {
                dispatch(successCurrentLocationWeather(fetchedWeather));
            });
    };
};




export const fetchWeatherByCity = (cityName) => {
};
