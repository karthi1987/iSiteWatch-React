import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';
import { browserHistory } from 'react-router';
import { ERRORs } from 'app/app-lang';

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
const homeQuickhitsState = {
    data: false
};

/*******************************************************************************
 *  2. Action Types
 */
const HOME_QUICKHITS = 'quickHitsModuleData';
const LOAD_HOME_QUICKHITS = 'loadQuickhitsModuleData';
const LAUNCH_QUICKHIT = 'launchQuickhit';
const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */
export function loadHomeQuickhits() {
    return ( dispatch ) => {
        const type = HOME_QUICKHITS;

        dispatch( ajax.loading( type ) );
        Ajax( {
            url: FEEDS.HOME_QUICKHITS,
            success: ( results, textStatus, jqXHR ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

                    LOG_RESPONSE && LogServerResponse( results, textStatus, jqXHR, FEEDS.HOME_QUICKHITS );

                    dispatch( {
                        type: LOAD_HOME_QUICKHITS,
                        data: results.data
                    } );
                    dispatch( ajax.loaded( type ) );

                    const hasResults = results.data.quickhits.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().QUICK_HITS_MODULE_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );
    };
}

export function launchQuickhit ( quickhitId ) {
    return ( dispatch ) => {
        dispatch( {
            type: LAUNCH_QUICKHIT,
            quickhitId: quickhitId
        } );
        browserHistory.push( APP_PATH + '/quickhits' );
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function quickhits( state = homeQuickhitsState, action ) {
    switch ( action.type ) {
        case LOAD_HOME_QUICKHITS:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
