import React from 'react';


/**
 * Components
 */
import SearchHistory from 'SearchHistory';
import SearchForm from 'SearchForm';


const App = ({ children }) => {
    return (
        <div className="container">
            <nav className="navbar navbar-default">
                <span className="navbar-brand">WeatherApp by <a href="https://github.com/Bitveen" target="_blank">bitveen</a></span>
            </nav>

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
