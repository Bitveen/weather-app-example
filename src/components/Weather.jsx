import React from 'react';
import moment from 'moment';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fetch) {
            if (this.props.cityName) {
                this.props.fetch(this.props.cityName);
            } else {
                this.props.fetch();
            }
        }
    }


    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     if (this.props.fetch && (nextProps.cityName !== this.props.fetchedWeather.weather.city)) {
    //         this.props.fetch(this.props.cityName);
    //     }
    // }


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
                                <h4>{this.props.cityName ? "City" : "Your current location is"}: <strong>{fetchedWeather.weather.city}</strong></h4>
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
