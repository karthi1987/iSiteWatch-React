//utils
import { combineReducers } from 'redux';
//reducers
import home from './home/home-reducers';
import login from './login/login-actions-reducers';
import zone from './zone/zone-actions-reducers';

/*
 * combineReducers for views exists mainly for organizability
 */
export default combineReducers( {
	home,
	zone,
	login
} );
