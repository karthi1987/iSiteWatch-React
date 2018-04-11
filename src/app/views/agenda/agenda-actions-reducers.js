import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { FILTER_TYPEs, ERRORs } from 'app/app-lang';
import { cleanHierarchyIds } from 'utils/utils';

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

const agendaState = {
    open: false,
    agendaSheetOpened: false,
    data: false,
    agendaSubsheetData: {},
    originalHierarchy: {},
    hierarchy: {},
    drilldown: {
        channel: {},
        region: {},
        district: {},
        area: {},
        office: {}
    }
};

/*******************************************************************************
 *  2. Action Types
 */

const TYPEs = {
    AGENDA_DATA: 'agendaViewData',
    AGENDA_ERROR_REPORT: 'agendaErrorReport',
    LOAD_AGENDA_DATA: 'loadAgendaViewData',
    OPEN_AGENDA_SUB_SHEET: 'openAgendaViewSubSheet',
    CLOSE_AGENDA_SUB_SHEET: 'closeAgendaViewSubSheet',
    SET_HIERARCHY: 'setHierarchy',
    CHECK_SESSION: 'checkSession'
};

/*******************************************************************************
 *  3. Action Creators
 */

export function getAgendaData( hierarchyIds ) {

    const cleanedIds = cleanHierarchyIds( hierarchyIds );

    return ( dispatch ) => {
        const type = TYPEs.AGENDA_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.AGENDA,
            data: cleanedIds,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{
                    dispatch( {
                        type: TYPEs.LOAD_AGENDA_DATA,
                        data: results.data,
                        hierarchyIds: hierarchyIds
                    } );

                    dispatch( ajax.loaded( type ) );

                    const hasResults = results.data.agendaByMonth.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().AGENDA_VIEW_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );

    };

}

export function openAgendaSubSheet( data ) {
  return{
    type: TYPEs.OPEN_AGENDA_SUB_SHEET,
    agendaSheetOpened: true,
    data: data
  };
}

export function closeAgendaSubSheet() {
  return{
    type: TYPEs.CLOSE_AGENDA_SUB_SHEET,
    agendaSheetOpened: false
  };
}

/*******************************************************************************
 *  4. Reducers
 */

export default function agenda ( state = agendaState, action ) {
    switch( action.type ) {

        case TYPEs.LOAD_AGENDA_DATA:
            return {
                ...state,
                data: action.data,
                error: false,
                message: null
            };
        case TYPEs.AGENDA_ERROR_REPORT:
            return {
                ...state,
                error: action.error,
                message: action.message
            };
        case TYPEs.OPEN_AGENDA_SUB_SHEET:
            return {
              ...state,
              agendaSheetOpened: action.agendaSheetOpened,
              agendaSubsheetData: action.data
            };
        case TYPEs.CLOSE_AGENDA_SUB_SHEET:
            return {
              ...state,
              agendaSheetOpened: action.agendaSheetOpened
            };
        case TYPEs.CHECK_SESSION:
        case TYPEs.SET_HIERARCHY:
            return{
                ...state,
                hierarchy: action.hierarchy,
                originalHierarchy: action.hierarchy
            };

        case FILTER_TYPEs.LOAD_AGENDA_CHANNEL_FILTERS:
        case FILTER_TYPEs.LOAD_AGENDA_REGION_FILTERS:
        case FILTER_TYPEs.LOAD_AGENDA_DISTRICT_FILTERS:
        case FILTER_TYPEs.LOAD_AGENDA_AREA_FILTERS:
        case FILTER_TYPEs.LOAD_AGENDA_OFFICE_FILTERS:

            let returnObj = {
                ...state,
                hierarchy: {
                    ids: {
                        ...action.hierarchyIds,
                        [ action.key ]: ( action.filters && action.filters.length > 0 ) ? action.filters[ 0 ].id : false
                    }
                },
                drilldown: {
                    ...state.drilldown,
                    [ action.key ]: {
                        filters: action.filters,
                        ddKey: action.ddKey,
                        hideSelectBox: false
                    }
                }
            };

            /* Hide Area and Office, if selectedDropdown is District and the value is ALL */
            if ( returnObj && returnObj.drilldown && action.hierarchyIds ) {
                const district = action.hierarchyIds.district;
                if ( district && district === 'ALL' ) {
                    if ( returnObj.drilldown.area ) {
                        returnObj.drilldown.area.hideSelectBox = true;
                    }
                    if ( returnObj.drilldown.office ) {
                        returnObj.drilldown.office.hideSelectBox = true;
                    }
                }
            }

            return returnObj;

        case FILTER_TYPEs.CLEAR_AGENDA_DRILLDOWN_FILTERS:
            return{
                ...state,
                drilldown: {
                    ...state.drilldown,
                    [ action.key ]: {}
                }
            };

        case FILTER_TYPEs.RESET_AGENDA_HIERARCHY_AND_FILTERS:
            return{
                ...state,
                drilldown: agendaState.drilldown,
                hierarchy: state.originalHierarchy
            };

        default:
            return state;

    }
}
