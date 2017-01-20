import React from 'react';
import { connect } from 'react-redux';
import Weather from 'Weather';


const mapStateToProps = (state) => {
    return {
        fetchedWeather: state.fetchedWeather
    };
};


export default connect(mapStateToProps)(Weather);
