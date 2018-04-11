//utils
import { combineReducers } from 'redux';
// reducers
import modules from './modules/modules-reducers';

// combineReducers for modules exists mainly for organizability
export default combineReducers( {
    modules
} );
