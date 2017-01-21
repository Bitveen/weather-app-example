import React from 'react';
import { Link } from 'react-router';

/**
 * Components
 */
import SearchHistory from 'SearchHistory';
import SearchForm from 'SearchForm';

const App = ({ children }) => {
    return (
        <div className="container">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        WeatherApp by <a href="https://github.com/Bitveen" target="_blank">bitveen</a>
                    </span>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Get weather by current position</Link></li>
                    </ul>
                </div>

            </nav>

            <div className="row">
                <div className="col-lg-8">
                    <SearchForm />
                    <hr/>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {children}
                        </div>
                        <div className="panel-footer"></div>
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
