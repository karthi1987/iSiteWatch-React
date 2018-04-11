import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';
import { ERRORs } from 'app/app-lang';
//import extend from 'lodash/object/extend';

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

const leaderboardModuleState = {
    data: {}
};

/*******************************************************************************
 *  2. Action Types
 */

export const TYPEs = {
    LEADERBOARD_MODULE_DATA: 'leaderboardModuleData',
    LOAD_LEADERBOARD_MODULE_DATA: 'loadLeaderboardModuleData'
};

const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */

export function getLeaderboardModuleData() {

    return ( dispatch ) => {
        const type = TYPEs.LEADERBOARD_MODULE_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.HOME_LEADERBOARD_MODULE,
            type: 'POST',
            success: ( results, textStatus, jqXHR ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

                    LOG_RESPONSE && LogServerResponse( results, textStatus, jqXHR, FEEDS.HOME_LEADERBOARD_MODULE );

                    dispatch( {
                        type: TYPEs.LOAD_LEADERBOARD_MODULE_DATA,
                        results: results.data
                    } );

                    dispatch( ajax.loaded( type ) );

					const hasResults = results.data.leaderboards.length > 0;

                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().LEADERBOARD_MODULE_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );

    };
}

/*******************************************************************************
 *  4. Reducers
 */

export default ( state = leaderboardModuleState, action ) => {

    switch( action.type ) {
        case TYPEs.LOAD_LEADERBOARD_MODULE_DATA:
            return {
                ...state,
                data: action.results
            };
        default:
            return state;

    }
};
