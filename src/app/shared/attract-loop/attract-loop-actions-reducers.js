import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';
import { grabTimestamp } from 'utils/utils';

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
const attractLoopState = {
    open: false,
    resetTime: undefined,
    data: {
        waitTime: 900000,
        displayTime: 12000
    }
};

/*******************************************************************************
 *  2. Action Types
 */

const ATTRACT_LOOP_DATA = 'attractLoopData';
const LOAD_ATTRACT_LOOP_DATA = 'getAttractLoopData';
const RESET_ATTRACT_LOOP_TIMEOUT = 'resetAttractLoopTimeout';
const SHOW_ATTRACT_LOOP = 'showAttractLoop';
const CLOSE_ATTRACT_LOOP = 'closeAttractLoop';
const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */

export function getAttractLoopData( hierarchyIds ) {

    return ( dispatch ) => {

        const type = ATTRACT_LOOP_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.ATTRACT_LOOP,
            success: ( results, successLog ) => {

                LOG_RESPONSE && LogServerResponse( successLog );

                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{
                    dispatch( {
                        type: LOAD_ATTRACT_LOOP_DATA,
                        results: {
                            ...results.data
                        }
                    } );

                    dispatch( ajax.loaded( type ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );
    };
}


export function resetAttractLoopTimeout() {
    return {
        type: RESET_ATTRACT_LOOP_TIMEOUT,
        resetTime: grabTimestamp()
    };
}

export function showAttractLoop() {
    return {
        type: SHOW_ATTRACT_LOOP,
        open: true
    };
}

export function closeAttractLoop() {
    return {
        type: CLOSE_ATTRACT_LOOP,
        open: false
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function attractLoop( state = attractLoopState, action ) {
    switch ( action.type ) {
        case LOAD_ATTRACT_LOOP_DATA:
            return {
                ...state,
                data: action.results
            };
        case RESET_ATTRACT_LOOP_TIMEOUT:
            return {
                ...state,
                resetTime: action.resetTime
            };
        case SHOW_ATTRACT_LOOP:
            return {
                ...state,
                open: action.open
            };
        case CLOSE_ATTRACT_LOOP:
            return {
                ...state,
                open: action.open
            };
        default:
            return state;
    }
}
