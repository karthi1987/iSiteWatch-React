import Ajax, * as ajax from 'utils/ajax';
import { initiateSession } from 'app/app-store';
import { browserHistory } from 'react-router';
//import { grabTimestamp } from 'utils/utils';
import FEEDS from 'endpoints/endpoints';
import { LOGIN } from 'app/app-lang';
import { diagnosticConsoleLog } from 'utils/utils';

/*******************************************************************************
 *
 *   1. Default State
 *   2. Action Types
 *   3. ACtion Creators
 *   4. Reducers
 *
 */

/*******************************************************************************
 *  1. Default State
 */
const loginState = {
    filters: [],
    errorMessage: false
};

/*******************************************************************************
 *  2. Action Types
 */
const LOAD_FILTERS = 'loadFilters';
const SET_ERROR = 'setError';
const CLEAR_SESSION = 'clearSession';
const LOGIN_AUTHENTICATE = 'authenticate';

/*******************************************************************************
 *  3. Action Creators
 */
export function loadFilters () {


    return ( dispatch ) => {

        //dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.LOGIN_FILTERS,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( setErrorMessage( results.errorMessage ) );
                } else {
                    dispatch( {
                        type: LOAD_FILTERS,
                        filters: results.data.filters
                    } );

                   // dispatch( ajax.loaded( type ) );
                }
            },
            fail: ( error ) => {
                dispatch( setErrorMessage( error.errorThrown ) );
            }
        } );
    };
}

export function backdoorSession( userLogin, password ) {

    return ( dispatch ) => {

        dispatch( ajax.loading( LOGIN_AUTHENTICATE ) );

        Ajax( {
            url: 'https://wejllcr10k.execute-api.us-east-1.amazonaws.com/BETA/authenticate',
            data: JSON.stringify({
                user_login: userLogin,
                user_pass: password
            }),
            success: ( results ) => {

                if( !results.data ) {
                    if( results.status && ( results.status.message === 'INVALID_CREDENTIALS' || results.status.message === 'INVALID_USER' ) ) {
                        dispatch( setErrorMessage( results.status.message ) );
                    }
                    if( results.errorMessage && results.errorMessage === 'TOKEN_EXPIRED' ) {
                         browserHistory.push( APP_PATH + '/login' );
                    }
                } else {
                    initiateSession( results, dispatch );
                    dispatch( ajax.loaded( LOGIN_AUTHENTICATE ) );
                    dispatch( setErrorMessage( false, true ) );
                }
            },
            fail: ( error ) => {
                dispatch( setErrorMessage( error.errorThrown ) );
            }
        } );
    };
}

export function setErrorMessage ( errorMessage, clearErrorMessage ) {
    errorMessage = errorMessage && errorMessage.length > 0 ? errorMessage : LOGIN.DEFAULT_ERROR_MESSAGE;
    errorMessage = clearErrorMessage ? false : errorMessage;
    return {
        type: SET_ERROR,
        errorMessage: errorMessage
    };
}

export function clearSession() {
    if ( !PROD ) {
        localStorage.removeItem( 'authenticated' );
        localStorage.removeItem( 'userDetails' );
    }
    return {
        type: CLEAR_SESSION
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function login( state = loginState, action ) {
    switch ( action.type ) {
        case LOAD_FILTERS:
            return {
                ...state,
                filters: action.filters
            };
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
}
