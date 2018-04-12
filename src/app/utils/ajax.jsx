import $ from 'jquery';
import AppStore, { LogServerResponse } from '../app-store';
import { ERRORs } from 'app/app-lang';
import { diagnosticConsoleLog } from 'utils/utils';

/*******************************************************************************
 *
 *   1. Ajax default function
 *   2. Ajax actionCreators
 *
 */

/*******************************************************************************
 *  1. Ajax default function
 *
 *
 * we use a jquery ajax function for all ajax in the react app.
 * the backbone app has it's own ajax function, called ajax_post located in js/vz.js
 * both the react Ajax function and the ajax_post function operated similarly
 */

export default function Ajax( opts ) {

    /*
     * get our global app state session object
     */
    const session = AppStore.getState().app.session;

    return $.ajax( {
        url: opts.url,
        data: opts.data,
        dataType: opts.dataType || 'json',
        contentType: 'application/json',
        //contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        //type: ( PROD === true ) ? 'POST' : 'GET',
        type: 'POST',
        crossDomain: true,
        timeout: opts.timeout || 500000,
        beforeSend: function( xhr ) {

            /*
             * if we have an active session,
             * send our tokenA and tokenB as part of request headers.
             * this is needed for authentication
             */
           // if ( session && session.active ) {
                //xhr.setRequestHeader( 'X-BIW-TKNA', session.tokenA );
                //xhr.setRequestHeader( 'X-BIW-TKNB', session.tokenB );
          //  }
        }
    } )
    .done( function( data, textStatus, jqXHR ) {

        if ( typeof opts.success === 'function' ) {
            const successLog = {
                url: opts.url,
                requestData: opts.data,
                responseData: data,
                requestTokens: {
                    tokenA: session.tokenA,
                    tokenB: session.tokenB
                }
            };
            opts.success( data, successLog );
        } else {
            console.warn( 'Ajax call expected callback function, instead received', opts.success );
        }

    } )
    .fail( function( jqXHR, textStatus, errorThrown ) {

        debugger;

        console.log( 'Im in AJX Failure callback');

         //window.location.assign( window.location.origin + APP_PATH );

         return false;

        const redirectLocation = jqXHR.getResponseHeader( 'Location' );
        if ( redirectLocation && ( jqXHR.status === 600 || jqXHR.status === 404 ) ) {

            /*
             * if we receive a 600 or 404,
             * send user to an error page
             */
            //  const HOST_NAME = '/public/smartboard/js/'; // future for when server is changed to handle public
            const HOST_NAME = '/iSiteWatch-React/js/';

            window.location.replace( HOST_NAME + redirectLocation + '.html' );

        } else {

            /*
             * create our failure object
             */
            var failObj = {
                jqXHR: jqXHR,
                textStatus: textStatus,
                errorThrown: errorThrown,
                url: opts.url
            };

            if ( opts.fail ) {

                /*
                 * send fail object to ajax method
                 */
                opts.fail( failObj );

                /*
                 * create failLog object, and
                 * send it to server via another ajax request,
                 * to output it within the system logs
                 */
                if( !opts.logServerResponse ) {
                    let responseText = jqXHR.responseText;
                    if ( responseText && responseText.length ) {
                        responseText = responseText.toString();
                        responseText = responseText.substr( 0, 100 );
                    }

                    const failLog = {
                        url: opts.url,
                        requestData: opts.data,
                        responseText: responseText,
                        statusCode: jqXHR.status,
                        textStatus: textStatus,
                        errorThrown: errorThrown,
                        requestTokens: {
                            tokenA: session.tokenA,
                            tokenB: session.tokenB
                        }
                    };
                    //LogServerResponse( failLog );
                }

            } else {
                //diagnosticConsoleLog( 'Failure info:', failObj );
            }
        }

        /*
         * if we receive a 403 error code,
         * then authentication is false,
         * and the app is rebooted.
         */
        if( jqXHR.status === 403 ) {
            window.location.assign( window.location.origin + APP_PATH );
        }

    } );
}

/*******************************************************************************
 *  2. Ajax actionCreators
 *
 * each individal Ajax call within an -actions-reducers or -reducers file
 * is respondible for including the follwing actionCreators, so that
 * loading, loaded and loadingError objects get updated correctly within the app state tree
 * check app state tree object in the logger to see how each object gets updated
 */

const APP_TYPEs = {
    DATA_LOADING: 'dataLoading',
    DATA_LOADED: 'dataLoaded',
    DATA_RESET_LOADED: 'resetLoaded',
    DATA_LOADING_ERROR: 'dataLoadingError',
    CLEAR_DATA_LOADING_ERROR: 'clearDataLoadingError'
};

/*
 * our loading actionCreator is executed before the Ajax function is executed, typically.
 * our loading object determines when the app shows loading spinners or loading dots.
 * the reducers listening for DATA_LOADING also sets loaded to false
 */
export var loading = ( type, loadType ) => {
    return {
        type: APP_TYPEs.DATA_LOADING,
        loading: type,
        loadType: type.indexOf( type ) > -1 ? '' : loadType
    };
};

/*
 * our loaded actionCreator runs when we receive a success back from the Ajax service
 * the reducers listening for DATA_LOADED also sets loading to false
 * the loaded object in state tree is used to short circuit a component that shouldn't
 * render until the data is available. the loaded actionCreator should be executed after we
 * dispatch the loaded Ajax data to the corresponding reducers
 */
export var loaded = ( type ) => {
    return {
        type: APP_TYPEs.DATA_LOADED,
        loaded: type
    };
};

/*
 * another helper function to set a key in loaded to false, after it has already been loaded.
 * used when unmounting some components
 */
export var resetLoaded = ( type ) => {
    //alert( 'reset ' + type );
    return {
        type: APP_TYPEs.DATA_RESET_LOADED,
        loaded: type
    };
};

/*
 * our loadingError actionCreator runs when we receive a success of false from the service or
 * when the Ajax function iteself fails due to a syntax error, etc.
 * the reducer listend for DATA_LOADING_ERROR also sets loading and loaded to false for the corresponding type
 * our loadingErrors get displayed by the ErrorModal component
 */
export var loadingError = ( type, message ) => {
    return {
        type: APP_TYPEs.DATA_LOADING_ERROR,
        loading: type,
        loaded: type,
        error: type,
        message: message || ERRORs().DEFAULT_MESSAGE
    };
};

/*
 * if we receive the data that we know is good, we get rid of the loadingError
 */
export var clearLoadingError = ( type ) => {
    return {
        type: APP_TYPEs.CLEAR_DATA_LOADING_ERROR,
        error: type
    };
};

/*
 * if we have a success and results, clear the loading error.
 * if we have success and not results, show a message
 */
export var handleResultsMessage = ( type, hasResults, message ) => {
    if( hasResults ) {
        return clearLoadingError( type );
    }else{
        return loadingError( type, message );
    }
};
