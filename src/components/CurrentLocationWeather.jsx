import React from 'react';
import { getCurrentPosition } from 'api';

export default class CurrentLocationWeather extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        getCurrentPosition().then((coords) => {
            console.log(coords);
        });
    }

    render() {
        return (
            <div className="current-location-weather">
                <h4 className="text-center"><i className="fa fa-cog fa-spin" /></h4>
            </div>
        );
    }



};
