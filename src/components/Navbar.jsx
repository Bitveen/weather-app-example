import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
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
    );
};

export default Navbar;
