import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SearchHistory from 'SearchHistory';
import SearchForm from 'SearchForm';
import Navbar from 'Navbar';


const mapStateToProps = (state) => {
    return {
        searchHistory: state.searchHistory
    }
};


const App = ({ searchHistory, children }) => {
    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col-lg-8">
                    <SearchForm />
                    <hr/>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <SearchHistory searchHistory={searchHistory} />
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(App);
