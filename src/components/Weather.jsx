import React from 'react';
import moment from 'moment';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWeatherByPosition();
    }

    render() {
        let { fetchedWeather } = this.props;
        return (
            <div className="current-location-weather">
                {fetchedWeather.isFetching ?
                    (<h4 className="text-center"><i className="fa fa-cog fa-spin" /></h4>)
                    :
                    (
                        <div className="weather">
                            <div className="page-header">
                                <h4>Your current location is: <strong>{fetchedWeather.weather.city}</strong></h4>
                                Fetched at: <strong>{moment(fetchedWeather.weather.fetchedAt).format('DD.MM.YYYY HH:mm')}</strong>
                            </div>
                            <div className="weather-temperature">
                                <h1 className="text-center">{fetchedWeather.weather.temp} °C</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
};
