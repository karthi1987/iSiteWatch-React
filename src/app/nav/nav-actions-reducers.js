import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';

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

const navState = {
	list: []
};

/*******************************************************************************
 *  2. Action Types
 */

 const NAV_DATA = 'navData';
 const NAV_DATA_LOADED = 'navDataLoaded';

/*******************************************************************************
 *  3. Action Creators
 */

 export function loadNav() {
    return ( dispatch ) => {
        const type = NAV_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.NAVIGATION,
            success: ( results, successLog ) => {

                LOGSERVERRESPONSE && LogServerResponse( successLog );

                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{
                    dispatch( {
                        type: NAV_DATA_LOADED,
                        nav: results.data
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

/*******************************************************************************
 *  4. Reducers
 */

export default ( state = navState, action ) => {

    switch( action.type ) {
    	case NAV_DATA_LOADED:
    		return {
    			...state,
    			list: action.nav.nav,
                waittime: action.nav.waittime,
                transactiontime: action.nav.transactiontime
    		};
        default:
            return state;

    }
};
