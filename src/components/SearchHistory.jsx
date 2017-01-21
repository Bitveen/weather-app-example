import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state) => {
    return {
        searchHistory: state.searchHistory
    };
};


const SearchHistory = (props) => {


    props.searchHistory.sort((a, b) => {
        if (a.fetchedAt < b.fetchedAt) {
            return 1;
        } else if (a.fetchedAt > b.fetchedAt){
            return -1;
        }
        return 0;
    });


    const renderList = () => {
        if (!props.searchHistory.length) {
            return <h4 className="text-center">History is empty.</h4>
        }
        return (
            props.searchHistory.map((weather) => {
                return (
                    <Link to={`/history/search/${weather.id}`}
                        key={weather.id} activeClassName="active"
                        className="list-group-item">
                        <h5 className="list-group-item-heading">{weather.city}</h5>
                        <p className="list-group-item-text">
                            Fetched at: <strong>{moment(weather.fetchedAt).format('DD.MM.YYYY HH:mm')}</strong>
                        </p>
                    </Link>
                );
            })
        );
    };


    return (
        <div className="search-history">
            <div className="page-header">
                <h4>Search history</h4>
            </div>
            <div className="list-group">
                {renderList()}
            </div>
        </div>
    );
};


export default connect(mapStateToProps)(SearchHistory);
