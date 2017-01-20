import fetch from 'isomorphic-fetch';

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ce1e54364eca9683d50fe6e14499e5d5&units=metric';

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position.coords);
            }, (err) => {
                reject(err);
            });
        } else {
            reject('Geolocation not supported');
        }
    });
}


export const getWeatherByCurrentPosition = () => {
    return getCurrentPosition().then((coords) => {
        return fetch(`${WEATHER_URL}&lat=${coords.latitude}&lon=${coords.longitude}`);
    });
};


export const getWeatherByCityName = (cityName) => {
    return fetch(`${WEATHER_URL}&q=${cityName}`);
};
