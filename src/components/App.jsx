import React from 'react';
import { Link } from 'react-router';

import SearchHistory from 'SearchHistory';
import SearchForm from 'SearchForm';
import Navbar from 'Navbar';

const App = ({ children }) => {
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
                    <SearchHistory />
                </div>
            </div>
        </div>
    );
};

export default App;
