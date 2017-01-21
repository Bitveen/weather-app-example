import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchWeatherByCityName } from 'actions';



const mapDispatchToProps = (dispatch) => {
    return {
        fetch: cityName => dispatch(fetchWeatherByCityName(cityName))
    };
};


const mapStateToProps = (state) => {
    return {
        isFetching: state.fetchedWeather.isFetching
    };
};

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let cityName = this.refs.cityName.value;
        if (cityName) {
            if (browserHistory.getCurrentLocation().pathname === '/') {
                browserHistory.push(`/search/${cityName}`);
            } else {
                this.props.fetch(cityName);
                browserHistory.push(`/search/${cityName}`);
            }
            this.refs.cityName.value = '';
        }
    }

    render() {
        return (
            <div className="search-form">
                <div className="page-header">
                    <h4>Search weather by city</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text"
                            className="form-control input-md"
                            autoComplete="off"
                            ref="cityName"
                            placeholder="Type in city name..."/>
                        <span className="input-group-btn">
                            <button disabled={this.props.isFetching} className="btn btn-primary btn-md"
                                type="submit"><span className="glyphicon glyphicon-search" /> Search</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
