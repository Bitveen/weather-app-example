import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchWeatherByPosition, fetchWeatherByCityName } from 'actions';
import * as ActionTypes from 'actionTypes';
import nock from 'nock';
import expect from 'expect';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('creates SUCCESS_WEATHER when fetching weather has been done', () => {

    });

});
