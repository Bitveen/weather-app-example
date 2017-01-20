import React from 'react';



const WeatherByCity = ({ params: { cityName } }) => {
    return (
        <div>
            <h3>WeatherByCity: {cityName}</h3>
        </div>
    );
};

export default WeatherByCity;
