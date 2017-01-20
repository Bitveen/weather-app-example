import React from 'react';


const SearchHistory = () => {
    return (
        <div className="search-history">
            <div className="page-header">
                <h4>Search history</h4>
            </div>

            <div className="list-group">
                <a href="" className="list-group-item">
                    <h5 className="list-group-item-heading">Kudrovo</h5>
                    <p className="list-group-item-text">Fetched at: <strong>21.01.2017</strong></p>
                </a>
                <a href="" className="list-group-item">
                    <h5 className="list-group-item-heading">Moscow</h5>
                    <p className="list-group-item-text">Fetched at: <strong>21.01.2017</strong></p>
                </a>
            </div>

        </div>
    );
};


export default SearchHistory;
