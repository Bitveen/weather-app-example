import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByPosition } from 'actions';
import moment from 'moment';


const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherByPosition: () => dispatch(fetchWeatherByPosition())
    };
};

const mapStateToProps = (state) => {
    return {
        currentLocationWeather: state.currentLocationWeather
    };
};

class CurrentLocationWeather extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWeatherByPosition();
    }

    render() {
        let { currentLocationWeather } = this.props;
        return (
            <div className="current-location-weather">
                {currentLocationWeather.isFetching ?
                    (<h4 className="text-center"><i className="fa fa-cog fa-spin" /></h4>)
                    :
                    (
                        <div className="weather">
                            <div className="page-header">
                                <h4>Your current location is: <strong>{currentLocationWeather.weather.location}</strong></h4>
                                Fetched at: <strong>{moment().format('DD.MM.YYYY HH:mm')}</strong>
                            </div>
                            <div className="weather-temperature">
                                <h1 className="text-center">{currentLocationWeather.weather.temp || ""} °C</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }



};


export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocationWeather);
