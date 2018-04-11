import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { LogServerResponse } from 'app/app-store';
import { ERRORs } from 'app/app-lang';
// import extend from 'lodash/object/extend';

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

const messageCenterModuleState = {
    data: {},
    messageFlyout: {
        opened: false,
        flyoutData: null
    }
};

/*******************************************************************************
 *  2. Action Types
 */

export const TYPEs = {
    MESSAGE_CENTER_MODULE_DATA: 'messageCenterModuleData',
    LOAD_MESSAGE_CENTER_MODULE_DATA: 'loadMessageCenterModuleData',
    TOGGLE_MESSAGE_FLYOUT: 'toggleMessageFlyout'
};

const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */

export function getMessageCenterModuleData() {

    return ( dispatch ) => {
        const type = TYPEs.MESSAGE_CENTER_MODULE_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.HOME_MESSAGE_CENTER,
            success: ( results, textStatus, jqXHR ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

					/*
						Do some sanitizing on the data - enforce that the "messages" object is always an array; we need to make sure we get empty arrays instead of nulls.
						This matters particularly for the Ticker, since we were getting an error there, but it's nice-to-have in general.
					*/
					results.data.messageCenter = results.data.messageCenter.map( ( value, index ) => {
						if( !_.isArray( value.messages ) ) {
							return {
								...value,
								messages: []
							};
						} else {
							return value;
						}
					} );

                    LOG_RESPONSE && LogServerResponse( results, textStatus, jqXHR, FEEDS.HOME_MESSAGE_CENTER );

                    dispatch( {
                        type: TYPEs.LOAD_MESSAGE_CENTER_MODULE_DATA,
                        results: results.data
                    } );

                    dispatch( ajax.loaded( type ) );

					const hasResults = results.data.messageCenter.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().MESSAGE_CENTER_MODULE_NO_RESULTS ) );  
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );

    };
}

export function openMessageFlyout( data ) {
    return {
        type: TYPEs.TOGGLE_MESSAGE_FLYOUT,
        data: data,
        opened: true
    };
}

export function closeMessageFlyout( messageText ) {
    return {
        type: TYPEs.TOGGLE_MESSAGE_FLYOUT,
        data: null,
        opened: false
    };
}

/*******************************************************************************
 *  4. Reducers
 */

export default ( state = messageCenterModuleState, action ) => {

    switch( action.type ) {
        case TYPEs.LOAD_MESSAGE_CENTER_MODULE_DATA:
            return {
                ...state,
                data: action.results
            };

        case TYPEs.TOGGLE_MESSAGE_FLYOUT:
            return {
                ...state,
                messageFlyout: {
                    opened: action.opened,
                    flyoutData: action.data
                }
            };
        default:
            return state;

    }
};
