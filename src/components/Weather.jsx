import React from 'react';
import moment from 'moment';
import FetchError from 'FetchError';

import { browserHistory } from 'react-router';


export default class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    componentDidMount() {
        if (this.props.fetch) {
            if (this.props.params.cityName) {
                this.props.fetch(this.props.params.cityName);
            } else {
                this.props.fetch();
            }
        }
    }


    handleRemoveClick() {
        browserHistory.push(`/`);
        this.props.remove(this.props.params.id);
    }



    render() {

        if (this.props.fetchedWeather && this.props.fetchedWeather.fetchError) {
            return <FetchError message="Fetch error." />
        }


        let fetchedWeather = {};
        if (this.props.fetchedWeather) {
            fetchedWeather = this.props.fetchedWeather;
        } else {
            fetchedWeather = {
                weather: this.props.weather
            };
        }

        return (
            <div className="current-location-weather">
                {fetchedWeather.isFetching ?
                    (<h4 className="text-center"><i className="fa fa-cog fa-spin" /></h4>)
                    :
                    (
                        <div className="weather">
                            <div className="page-header">
                                <h4>
                                    {browserHistory.getCurrentLocation().pathname === '/' ? "Your current location is: " : "City: "}
                                    {fetchedWeather.weather.city}
                                </h4>
                                Fetched at: <strong>{moment(fetchedWeather.weather.fetchedAt).format('DD.MM.YYYY HH:mm')}</strong>
                            </div>
                            <div className="weather-temperature">
                                <h1 className="text-center">{fetchedWeather.weather.temp} °C</h1>
                            </div>
                            { this.props.remove ? <button onClick={this.handleRemoveClick} className="btn btn-danger btn-sm">Remove from history</button> : null }
                        </div>
                    )
                }
            </div>
        );
    }
};
