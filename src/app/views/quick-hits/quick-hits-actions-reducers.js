import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
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
const quickhitsState = {
    data: false
};

/*******************************************************************************
 *  2. Action Types
 */
const QUICKHITS = 'quickhitsViewData';
const LOAD_QUICKHITS = 'loadQuickhitsViewData';
const CLEAR_LAUNCHED_QUICKHIT = 'clearLaunchedQuickhit';
const LAUNCH_QUICKHIT = 'launchQuickhit';
const QUICKHITS_ERROR_REPORT = 'quickhitsErrorReport';

/*******************************************************************************
 *  3. Action Creators
 */

export function loadQuickhits () {
    return ( dispatch ) => {
        const type = QUICKHITS;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.QUICKHITS,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{
                    dispatch( {
                        type: LOAD_QUICKHITS,
                        data: results.data
                    } );

                    dispatch( ajax.loaded( type ) );

                    const hasResults = results.data.quickhits.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().QUICK_HITS_VIEW_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );

    };
}

export function clearLaunchedQuickhit() {
    return ( dispatch ) => {
        dispatch( {
            type: CLEAR_LAUNCHED_QUICKHIT
        } );
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function quickhits( state = quickhitsState, action ) {
    switch ( action.type ) {
        case LOAD_QUICKHITS:
            return {
                ...state,
                data: action.data
            };
        case LAUNCH_QUICKHIT:
            return {
                ...state,
                quickhitId: action.quickhitId
            };
        case CLEAR_LAUNCHED_QUICKHIT:
            return {
                ...state,
                quickhitId: null
            };
        default:
            return state;
    }
}
