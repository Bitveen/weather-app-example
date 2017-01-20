import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';



/**
 * Components
 */
import App from 'App';
import CurrentLocationWeather from 'CurrentLocationWeather';
import WeatherByCity from 'WeatherByCity';


/**
 * Other imports
 */
import rootReducer from 'reducers';





/**
 * Store
 */
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));




/**
 * Routing
 */
const history = syncHistoryWithStore(browserHistory, store);
const routes = (
    <Router history={history}>
        <Route component={App} path='/'>
            <IndexRoute component={CurrentLocationWeather} />
            <Route component={WeatherByCity} path='/city/:cityName' />
        </Route>
    </Router>
);





ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>
,document.getElementById('app'));
