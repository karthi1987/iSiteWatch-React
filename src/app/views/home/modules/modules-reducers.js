//utils
import { combineReducers } from 'redux';
// reducers
import dashboard from './dashboard/dashboard-actions-reducers.js';
import zone from 'app/views/zone/zone-actions-reducers.js';


/*
 * combineReducers for modules exists mainly for organizability
 */
export default combineReducers( {
	dashboard,
	zone
} );
