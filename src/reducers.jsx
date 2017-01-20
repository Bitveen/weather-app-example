import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as actions from 'actions';



export default combineReducers({
    routing: routerReducer
});
