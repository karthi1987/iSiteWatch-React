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

const dashboardModuleState = {
    data: {
        projects: [],
        locations: []
    }
};

/*******************************************************************************
 *  2. Action Types
 */

export const TYPEs = {
    DASHBOARD_PROJECTS_MODULE_DATA: 'dashboardModuleData',
    LOAD_DASHBOARD_PROJECTS_MODULE_DATA: 'loadDashboardModuleData',
    DASHBOARD_LOCATIONS_MODULE_DATA: 'dashboardLocationsModuleData',
    LOAD_DASHBOARD_LOCATIONS_MODULE_DATA: 'loadDashboardLocationsModuleData',
    SET_ERROR: 'errorMessage'
};

/*******************************************************************************
 *  3. Action Creators
 */

export function getDashboardProjectsData( info ) {

    return ( dispatch ) => {

        const type = TYPEs.DASHBOARD_PROJECTS_MODULE_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: 'https://wejllcr10k.execute-api.us-east-1.amazonaws.com/BETA/site',
            type: 'POST',
            data: JSON.stringify( {
                "user_login": info.user.userLogin,
                "user_token": info.session.token,
                "customer_id": info.user.customerId,
                "site_id": info.user.siteId
            } ),
            success: ( results, textStatus, jqXHR ) => {

               if( !results.data ) {
                    dispatch( setErrorMessage( results.status && results.status.message ) );
                } else {
                    dispatch( {
                        type: TYPEs.LOAD_DASHBOARD_PROJECTS_MODULE_DATA,
                        results: results.data
                    } );

                    dispatch( ajax.loaded( type ) );
                   // const hasResults = results.data.leaderboards.length > 0;
                   // dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().LEADERBOARD_MODULE_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.errorThrown ) );
            }
        } );

    };
}

/**
    ** Locations service call 
***/
export function getDashboardLocationsData( info ) {

    return ( dispatch ) => {
        const type = TYPEs.DASHBOARD_LOCATIONS_MODULE_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: 'https://wejllcr10k.execute-api.us-east-1.amazonaws.com/BETA/location',
            type: 'POST',
            data: JSON.stringify( {
                "user_login": info.user.userLogin,
                "user_token": info.session.token,
                "customer_id": info.user.customerId,
                "site_id": info.user.siteId
            } ),
            success: ( results, textStatus, jqXHR ) => {

               if( !results.data ) {
                    debugger;
                    dispatch( setErrorMessage( results.status && results.status.message ) );
                } else {
                    dispatch( {
                        type: TYPEs.LOAD_DASHBOARD_LOCATIONS_MODULE_DATA,
                        results: results.data
                    } );

                    dispatch( ajax.loaded( type ) );
                   // const hasResults = results.data.leaderboards.length > 0;
                   // dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().LEADERBOARD_MODULE_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {

                dispatch( ajax.loadingError( type, error.errorThrown ) );
            }
        } );

    };
}

export function setErrorMessage ( errorMessage, clearErrorMessage ) {
    errorMessage = errorMessage && errorMessage.length > 0 ? errorMessage : LOGIN.DEFAULT_ERROR_MESSAGE;
    errorMessage = clearErrorMessage ? false : errorMessage;
    return {
        type: TYPEs.SET_ERROR,
        errorMessage: errorMessage
    };
}

/*******************************************************************************
 *  4. Reducers
 */

export default ( state = dashboardModuleState, action ) => {

    switch( action.type ) {
        case TYPEs.LOAD_DASHBOARD_PROJECTS_MODULE_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    projects: action.results
                }
            };
       case TYPEs.LOAD_DASHBOARD_LOCATIONS_MODULE_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    locations: action.results
                }
            };
       case TYPEs.SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;

    }
};
