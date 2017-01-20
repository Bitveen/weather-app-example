import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByCityName } from 'actions';

import Weather from 'Weather';


const mapStateToProps = (state) => {
    return {
        fetchedWeather: state.fetchedWeather
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: cityName => dispatch(fetchWeatherByCityName(cityName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);
