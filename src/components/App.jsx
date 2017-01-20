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
                <span className="navbar-brand">WeatherApp</span>
            </nav>

            <div className="row">
                <div className="col-lg-8">
                    <SearchForm />
                    {children}
                </div>
                <div className="col-lg-4">
                    <SearchHistory />
                </div>
            </div>

        </div>
    );
};



export default App;
