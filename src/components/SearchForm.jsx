import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();



        this.refs.cityName.value = '';
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
                            <button className="btn btn-primary btn-md"
                                type="submit"><span className="glyphicon glyphicon-search" /> Search</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
};
