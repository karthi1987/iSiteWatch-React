import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';
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

const scorecardModuleState = {
    data: {}
};

/*******************************************************************************
 *  2. Action Types
 */

export const TYPEs = {
    SCORECARD_MODULE_DATA: 'scorecardModuleData',
    LOAD_SCORECARD_MODULE_DATA: 'loadScorecardModuleData'
};
const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */

/*
 * getScorecardModuleData is the main actionCreator for this module
 */
export function getScorecardModuleData() {

    return ( dispatch ) => {
        const type = TYPEs.SCORECARD_MODULE_DATA;

        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.HOME_SCORECARD_MODULE,
            success: ( results, textStatus, jqXHR ) => {

                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

                    LOG_RESPONSE && LogServerResponse( results, textStatus, jqXHR, FEEDS.HOME_SCORECARD_MODULE );

                    dispatch( {
                        type: TYPEs.LOAD_SCORECARD_MODULE_DATA,
                        results: results.data
                    } );

                    dispatch( ajax.loaded( type ) );

                    const hasResults = results.data.scorecard.length > 0;

                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().SCORECARD_MODULE_NO_RESULTS ) );
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

export default ( state = scorecardModuleState, action ) => {

    switch( action.type ) {
        case TYPEs.LOAD_SCORECARD_MODULE_DATA:
            return {
                ...state,
                data: action.results
            };
        default:
            return state;

    }
};
