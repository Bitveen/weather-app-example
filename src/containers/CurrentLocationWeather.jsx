import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByPosition } from 'actions';
import moment from 'moment';
import Weather from 'Weather';



const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherByPosition: () => dispatch(fetchWeatherByPosition())
    };
};

const mapStateToProps = (state) => {
    return {
        fetchedWeather: state.fetchedWeather
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);
