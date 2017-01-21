import React from 'react';



const FetchError = (props) => {
    return (
        <div className="fetch-error">
            <h4 className="text-center">{props.message}</h4>
        </div>
    );
};

export default FetchError;
