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
import WeatherBySearchHistory from 'WeatherBySearchHistory';
import NotFound from 'NotFound';
/**
 * Other imports
 */
import rootReducer from 'reducers';
import { getFromLocalStorage, saveToLocalStorage } from 'api';




/**
 * Store
 */
const store = createStore(rootReducer, getFromLocalStorage(), applyMiddleware(thunkMiddleware));


store.subscribe(() => {
    console.log(store.getState());
});



/**
 * Routing
 */
const history = syncHistoryWithStore(browserHistory, store);
const routes = (
    <Router history={history}>
        <Route component={App} path='/'>
            <IndexRoute component={CurrentLocationWeather} />
            <Route component={WeatherBySearchHistory} path='/history/search/:id'/>
            <Route component={WeatherByCity} path='/search/:cityName'/>
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
);


ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>
,document.getElementById('app'));


store.subscribe(() => {
    saveToLocalStorage(store.getState());
});
