import React from 'react';
import { connect } from 'react-redux';
import Weather from 'Weather';
import { removeWeather } from 'actions';

const mapStateToProps = (state, { params: { id } }) => {
    return {
        weather: state.searchHistory.filter(weather => weather.id === id)[0]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        remove: id => dispatch(removeWeather(id))
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(Weather);
