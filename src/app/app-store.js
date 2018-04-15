import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { extend, clone } from 'lodash';
//utils
import Ajax, * as ajax from 'utils/ajax';
import { grabTimestamp, diagnosticConsoleLog } from 'utils/utils';
import $ from 'jquery';
//endpoints
import FEEDS from 'endpoints/endpoints';
// actions-reducers
import views from 'app/views/views-reducers';
import overlay from 'app/shared/overlay/overlay-actions-reducers';
import nav from 'app/nav/nav-actions-reducers';
//lang
import { FILTER_TYPEs } from 'app/app-lang';

/*******************************************************************************
 *
 *   1. Default State
 *   2. Action Types
 *   3. Action Creators
 *   4. Reducers
 *   5. Combine Reducers
 *   6. Create Store
 *
 */

/*******************************************************************************
 *  1. Default State
 */
const appState = {
    loading: {},
    loaded: {},
    loadingErrors: {},
    session: {
        checked: false,
        active: false,
        token: null,
        tokenExpiry: null,
    },
    user: {
        userLogin: null,
        userRole: null,
        userToken: null,
        siteId: null,
        customerId: null,
        userViewAccess: false
    },
    viewport: {
        width: 0,
        height: 0
    }
};

/*******************************************************************************
 *  2. Action Types
 */

const GET_VIEWPORT_SIZE = 'getViewportSize';

const SET_ROUTE = 'setRoute';

const SET_HIERARCHY = 'setHierarchy';
const SET_RV_HOST_STATUS = 'setRvHostStatus';
const SET_RV_INITIALIZATION = 'setRvInitialization';

const INITIATE_SESSION = 'initiateSession';
const CHECK_SESSION = 'checkSession';
const CLEAR_SESSION = 'clearSession';
const EXTEND_SESSION = 'extendSession';
const RETRY_SESSION = 'retrySession';
const CHECK_STATIC_TOKEN = 'checkStaticToken';
const TRIGGER_REFRESH = 'triggerRefresh';

const DATA_LOADING = 'dataLoading';
const DATA_LOADED = 'dataLoaded';
const DATA_RESET_LOADED = 'resetLoaded';
const CLEAR_DATA_LOADING_ERROR = 'clearDataLoadingError';
const DATA_LOADING_ERROR = 'dataLoadingError';


/*******************************************************************************
 *  3. Action Creators
 */

/*
 * initiateSession get's used in rvHostSession and emulatorSession.
 * it handles the success responses when we authentication
 */
export function initiateSession( results, dispatch ) {
    const timestamp = grabTimestamp();
    dispatch( {
        type: INITIATE_SESSION,
        authenticated: true,
        token: results.data.user_token,
        tokenExpiry: results.data.token_expiry,
        refresh: timestamp.full,
        rvInitializing: false,
        userLogin: results.data.user_login,
        userRole: 'admin',
        siteId: results.data.site_id,
        customerId: results.data.customer_id,
        userViewAccess: true
    } );

    localStorage.setItem( 'authenticated', true );
    localStorage.setItem( 'userDetails', JSON.stringify( results.data ) );
    //dispatch( ajax.loaded( INITIATE_SESSION ) );
 }

/*
 * if we have an ssoToken, we know that the app is being accessed via emulator,
 * which has it's own specific session call.
 */
export function emulatorSession( ssoToken ) {
    return ( dispatch ) => {

        Ajax( {
            url: FEEDS.EMULATOR_SESSION,
            data: {
                ssoToken: ssoToken
            },
            success: ( results ) => {
                if( !results.success ) {
                    diagnosticConsoleLog( 'emulator sso failed' );
                }else{
                   initiateSession( results, dispatch, false );
                }
            },
            fail: ( error ) => {
                diagnosticConsoleLog( 'emulator sso failed' );
            }
        } );
    };
}


/*
 * if we have an rvHostInfo and rvClassifications, we know that the app is being accessed via reflect player,
 * which has it's own specific session call.
 */
export function rvHostSession( rvHostInfo, rvClassifications ) {
    return ( dispatch ) => {

        Ajax( {
            url: FEEDS.RV_HOST_SESSION,
            data: {
                rvHostInfo: rvHostInfo,
                rvClassifications: rvClassifications
            },
            success: ( results, successLog ) => {

                LOGSERVERRESPONSE && LogServerResponse( successLog );

                if( !results.success ) {
                    diagnosticConsoleLog( 'rvHost sso failed' );
                }else{

                    initiateSession( results, dispatch );

                }

                dispatch( setRvInitialization( false ) );
            },
            fail: ( error ) => {
                diagnosticConsoleLog( 'rvHost sso failed' );
            }
        } );
    };
}

/*
 * checkStaticToken retrieves the staticToken,
 * which determines if the app needs to reboot or not.
 */
export function checkStaticToken() {
    return ( dispatch ) => {

        Ajax( {
            url: FEEDS.STATIC_TOKEN_CHECK,
            success: ( results, successLog ) => {

                LOGSERVERRESPONSE && LogServerResponse( successLog );

                if ( !results.success ) {
                    diagnosticConsoleLog( 'static token check failed' );
                } else {
                   dispatch( {
                        type: CHECK_STATIC_TOKEN,
                        staticToken: results.data.staticToken
                   } );
                }
            },
            fail: ( error ) => {
                diagnosticConsoleLog( 'static token check failed' );
            }
        } );
    };
}

/*
 * checkSession is only used in local fed development
 * and allows FEDs to refresh the app in the browser, essentially
 */
export function checkSession() {

    const active = ( !PROD && localStorage.getItem( 'authenticated' ) ) ? true : false ;
    const timestamp = grabTimestamp();

    const getItemId = () => {
        return JSON.parse(localStorage.getItem( 'userDetails' ));
    };

    if( getItemId() != null ) {
        return {
            type: CHECK_SESSION,
            active: active,
            authenticated: ( !PROD && localStorage.getItem( 'authenticated' ) ),
            token: getItemId().user_token,
            tokenExpiry:getItemId().token_expiry,
            refresh: timestamp.full,
            rvInitializing: false,
            userLogin: getItemId().user_login,
            userRole: 'admin',
            siteId: getItemId().site_id,
            customerId: getItemId().customer_id,
            userViewAccess: true
        };
    } else {
        return {
            type: CHECK_SESSION,
            active: false,
            authenticated: false,
            token: null,
            tokenExpiry: null,
            refresh: timestamp.full,
            rvInitializing: false,
            userLogin: null,
            userRole: 'admin',
            siteId: null,
            customerId: null,
            userViewAccess: false
        };
    }
}

/*
 * keeps track of viewport height and width in global app state
 */
export function getViewportSize() {
    return {
        type: GET_VIEWPORT_SIZE,
        width: window.innerWidth,
        height: window.innerHeight
    };
}

/*
 * extendSession retrieves our new tokenA and tokenB from the server.
 * these tokens are recreated every hour and are sent in the
 * request headers of almost every ajax call
 *
 * if extendSession fails, we try 10 more times, and if it still fails,
 * the app reboots
 */
export function extendSession() {
    return ( dispatch ) => {

        const type = EXTEND_SESSION;
        dispatch( ajax.loading( type ) );
        Ajax( {
            url: FEEDS.EXTEND_SESSION,
            success: ( results, successLog ) => {

                LOGSERVERRESPONSE && LogServerResponse( successLog );

                if ( !results.success ) {
                     dispatch( ajax.loadingError( type, results.errorMessage ) );

                     dispatch( { type: RETRY_SESSION } );
                } else {
                    if ( results.data.authenticated === true ) {

                        if ( !PROD ) {
                            localStorage.setItem( 'authenticated', results.data.authenticated );
                            localStorage.setItem( 'tokenA', results.data.tokenA );
                            localStorage.setItem( 'tokenB', results.data.tokenB );
                            localStorage.setItem( 'tokenRefreshStart', results.data.tokenRefreshStart );
                            localStorage.setItem( 'tokenRefreshEnd', results.data.tokenRefreshEnd );
                        }

                        dispatch( {
                            type: EXTEND_SESSION,
                            active: true,
                            session: results.data,
                        } );

                    } else {
                        /*
                         * invalidate user and boot user out of app
                         */
                        dispatch( {
                           type: EXTEND_SESSION,
                           active: false
                        } );

                        LOGSERVERRESPONSE && LogServerResponse( { 'logout': true } );
                    }

                    dispatch( ajax.loaded( type ) );
                }
            },
            fail: ( error ) => {
                dispatch( { type: RETRY_SESSION } );
            }
        } );
    };
}

/*
 * method used to print the server response
 * act as like Console log in the Sever side (Logs the JSON in the System)
 */
export function LogServerResponse( data ) {
    const dataParams = $.param( data );
    return Ajax( {
        url: FEEDS.PRINT_RESPONSE,
        logServerResponse: true,
        data: {
            log: dataParams
        },
        success: ( results ) => {
            if ( !results.success ) {
                diagnosticConsoleLog( 'Print server response failed' );
            } else {
                diagnosticConsoleLog( 'Successfully printed the response' );
            }
        },
        fail: ( error ) => {
            diagnosticConsoleLog( 'Print server response failed' );
        }
    } );

}

/*
 * if the app is accessed via reflect player, we acknowledge it with a flag
 */
export function setRvHostStatus() {
    return{
        type: SET_RV_HOST_STATUS
    };
}

/*
 * set our stagger initiation flag
 */
export function setRvInitialization( initialize ) {
    return{
        type: SET_RV_INITIALIZATION,
        initialize: initialize
    };
}

/*
 * retry the extendSession
 */
export function retrySession() {
    return{
        type: RETRY_SESSION
    };
}

/*
 * set a new timestamp, which tells the view to fire off ajax calls,
 * and get new data
 */
export function triggerRefresh() {
    const timestamp = grabTimestamp();
    return{
        type: TRIGGER_REFRESH,
        refresh: timestamp.full
    };
}

/*
 * route to another view
 */
export function getRoute ( props ) {
  AppStore.dispatch( {
    type: SET_ROUTE,
    route: location.pathname
  } );
}

/*
 * we receive hierarchyIds in our initiateSession function.
 * Rep Rank and Agenda display filters based on these hierarchy ids.
 * depending on what hierarchy ids we get, we make a call to get our filters per hierarchy level
 */
export function getFilters( key, view, data, hierarchyIds ) {
    return ( dispatch, getState ) => {
        /*
         * we could be using getFilters on either the leaderboard or agendas view
         */
        const type = FILTER_TYPEs[ 'GET_' + view.toUpperCase() + '_' + key + '_FILTERS' ];

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS[ key + '_FILTERS' ],
            data: data,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

                    /*
                     * dispatch the correct action type for either leaderboard or agenda view,
                     * as well as the new filters returned by the service,
                     * the key for the id that was sent as data,
                     * the ddKey which is the key for the filter options just retrieved,
                     * and the hierarchyIds, so that we can update our global app state object
                     */
                    dispatch( {
                        type: FILTER_TYPEs[ 'LOAD_' + view.toUpperCase() + '_' + key + '_FILTERS' ],
                        filters: results.data.filters,
                        key: key.toLowerCase(),
                        ddKey: results.data.key,
                        hierarchyIds: hierarchyIds
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

/*
 * when we route away from a leaderboard or agenda view,
 * we reset heirarchy and filters.
 */
export function resetHierarchyAndFilters( view ) {
    view = view.toUpperCase();
    return{
        type: FILTER_TYPEs[ 'RESET_' + view + '_HIERARCHY_AND_FILTERS' ]
    };
}

/*
 * clears a set of filters by hierarchy level key,
 * on either rep rank view or agenda view
 */
export function clearDrilldownFilters( key, view ) {
    view = view.toUpperCase();
    return{
        type: FILTER_TYPEs[ 'CLEAR_' + view + '_DRILLDOWN_FILTERS' ],
        key: key
    };
}

/*******************************************************************************
 *  4. Reducers
 */

const app = ( state = appState, action ) => {

    /*
     * helper function that updates our loading object
     */
    const loading = ( bool ) => {
        return extend( {}, state.loading, { [ action.loading || action.loaded || action.loadingError ]: bool } );
    };

    /*
     * helper function that updates our loaded object
     */
    const loaded = ( bool ) => {
        return extend( {}, state.loaded, { [ action.loaded ]: bool } );
    };


    switch ( action.type ) {
        //routing
        case SET_ROUTE:
            return {
                ...state,
                route: action.route
            };

        //viewport
        case GET_VIEWPORT_SIZE:
            return {
                ...state,
                viewport: {
                    width: action.width,
                    height: action.height
                }
            };

        //loading, loaded and loadingError
        case DATA_LOADING:
            return{
                ...state,
                loading: loading( true )
            };
        case DATA_LOADED:
            return{
                ...state,
                loaded: loaded( true ),
                loading: loading( false )
            };
        case DATA_RESET_LOADED:
            return{
                ...state,
                loaded: loaded( false ),
                loading: loading( false )
            };
        case DATA_LOADING_ERROR:
            const errors = clone( state.loadingErrors );
            errors[ action.error ] = action.message;
            return{
                ...state,
                loadingErrors: errors,
                loaded: loaded( true ),
                loading: loading( false )
            };
        case CLEAR_DATA_LOADING_ERROR:
            const errorsWithClear = clone( state.loadingErrors );
            errorsWithClear[ action.error ] = false;
            return{
                ...state,
                loadingErrors: errorsWithClear
            };

        // rvHost/reflect player flag
        case SET_RV_HOST_STATUS:
            return {
                ...state,
                session: {
                    ...state.session,
                    rvHost: true
                }
            };

        // initialization flag for our staggered rvHost init
        case SET_RV_INITIALIZATION:
            return {
                 ...state,
                session: {
                    ...state.session,
                    rvInitializing: action.initialize
                }
            };

        // initiate, check, extend, retry and clear session
        case INITIATE_SESSION:
            return {
                 ...state,
                session: {
                    ...state.session,
                    checked: false,
                    active: action.authenticated,
                    token: action.token,
                    tokenExpiry: action.tokenExpiry
                },
                user: {
                    ...state.user,
                    userLogin: action.userLogin,
                    userRole: action.userRole,
                    userToken: action.token,
                    siteId: action.siteId,
                    customerId: action.customerId,
                    userViewAccess: action.userViewAccess
                }
            }
        case CHECK_SESSION:
            return {
                ...state,
                session: {
                    ...state.session,
                    checked: true,
                    active: action.authenticated,
                    token: action.token,
                    tokenExpiry: action.tokenExpiry
                },
                user: {
                    ...state.user,
                    userLogin: action.userLogin,
                    userRole: action.userRole,
                    userToken: action.token,
                    siteId: action.siteId,
                    customerId: action.customerId,
                    userViewAccess: action.userViewAccess
                }
            };
        case EXTEND_SESSION:
            let session;
            if( action.active ) {
                session = {
                    ...state.session,
                    ...action.session,
                    active: action.active,
                    refreshCount: 0
                };
            } else {
                session = {
                    ...state.session,
                    active: action.active
                };
            }
            return {
                ...state,
                session: session
            };

        case RETRY_SESSION:
            const retryCount = state.session.retryCount;
            return {
                ...state,
                session: {
                    ...state.session,
                    tokenRefreshStart: ( retryCount > 10 ? 0 : 60000 ),
                    retryCount: retryCount + 1,
                    active: ( retryCount > 10 ? false : true )
                }
            };
        case CLEAR_SESSION:
            return {
                ...state,
                session: appState.session,
                user: appState.user
            };

        case SET_HIERARCHY:
            return {
                ...state,
                hierarchy: action.hierarchy
            };

        // refresh trigger
        case TRIGGER_REFRESH:
            return{
                ...state,
                session: {
                    ...state.session,
                    refresh: action.refresh
                }
            };

        // staticToken update
        case CHECK_STATIC_TOKEN:
            return{
                ...state,
                session: {
                    ...state.session,
                    staticToken: action.staticToken
                }
            };


        default:
            return state;
    }
};

/*******************************************************************************
 *  5. Combine Reducers
 */
const reducers = combineReducers( {
    app,
    views,
    overlay,
    nav
} );

/*******************************************************************************
 *  6. Create Store
 */
const AppStore = createStore(
    reducers,
    compose( applyMiddleware( thunk, createLogger() ), window.devToolsExtension ? window.devToolsExtension() : f => f )
);

export default AppStore;
