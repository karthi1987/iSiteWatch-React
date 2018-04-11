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

export const leaderboardState = {
    data: {},
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

export const TYPEs = {
    LEADERBOARD_FILTER_DATA: 'leaderboardViewFilterData',
    LEADERBOARD_ERROR_REPORT: 'leaderboardErrorReport',
    LOAD_LEADERBOARD_FILTER_DATA: 'loadLeaderboardViewFilterData',
    LEADERBOARD_DATA: 'leaderboardViewData',
    LOAD_LEADERBOARD_DATA: 'loadLeaderboardViewData',
    SET_HIERARCHY: 'setHierarchy',
    CHECK_SESSION: 'checkSession',
    CLEAR_LEADERBOARD_DRILLDOWN_FILTERS: 'clearLeaderboardDrilldownFilters',
    CLEAR_LEADERBOARD_DATA: 'clearLeaderboardData'
};

/*******************************************************************************
 *  3. Action Creators
 */

/*
 * getLeaderboardData is the main actionCreator for this sheet
 */
export function getLeaderboardData( hierarchyIds ) {

    const cleanedIds = cleanHierarchyIds( hierarchyIds );

    return ( dispatch ) => {

        const type = TYPEs.LEADERBOARD_DATA;

        dispatch( ajax.loading( type ) );

        Ajax( {
            url: FEEDS.LEADERBOARD,
            data: cleanedIds,
            success: ( results ) => {

                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                }else{

                    const leaderboardsResults = results.data.leaderboards;
                    let leaderboards = [];
                    if( leaderboardsResults.length > 100 ) {
                        for( const i in leaderboardsResults ) {
                            if( i <= 99 ) {
                                leaderboards.push( { ...leaderboardsResults[ i ] } );
                            }else{
                                break;
                            }
                        }
                    }else{
                        leaderboards = leaderboardsResults;
                    }

                    dispatch( {
                        type: TYPEs.LOAD_LEADERBOARD_DATA,
                        hierarchyIds: hierarchyIds,
                        results: {
                            ...results.data,
                            leaderboards: leaderboards || []
                        }
                    } );

                    dispatch( ajax.loaded( type ) );

					const hasResults = results.data.leaderboards.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().LEADERBOARD_VIEW_NO_RESULTS ) );  
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            }
        } );
    };
}

export function clearLeaderboardData() {
    return {
        type: TYPEs.CLEAR_LEADERBOARD_DATA
    };
}


/*******************************************************************************
 *  4. Reducers
 */

export default ( state = leaderboardState, action ) => {

    switch( action.type ) {

        case TYPEs.LOAD_LEADERBOARD_DATA:
            return {
                ...state,
                data: action.results
            };

        case TYPEs.CHECK_SESSION:
        case TYPEs.SET_HIERARCHY:
            return{
                ...state,
                hierarchy: action.hierarchy,
                originalHierarchy: action.hierarchy
            };

        case FILTER_TYPEs.LOAD_LEADERBOARD_CHANNEL_FILTERS:
        case FILTER_TYPEs.LOAD_LEADERBOARD_REGION_FILTERS:
        case FILTER_TYPEs.LOAD_LEADERBOARD_DISTRICT_FILTERS:
        case FILTER_TYPEs.LOAD_LEADERBOARD_AREA_FILTERS:
        case FILTER_TYPEs.LOAD_LEADERBOARD_OFFICE_FILTERS:

            let returnObj = {
                ...state,
                hierarchy: {
                    ids: {
                        ...action.hierarchyIds,
                        [ action.key ]: action.filters && action.filters.length > 0 ? action.filters[ 0 ].id : false
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

        case FILTER_TYPEs.CLEAR_LEADERBOARD_DRILLDOWN_FILTERS:
            return{
                ...state,
                drilldown: {
                    ...state.drilldown,
                    [ action.key ]: {}
                }
            };

        case FILTER_TYPEs.RESET_LEADERBOARD_HIERARCHY_AND_FILTERS:
            return{
                ...state,
                drilldown: leaderboardState.drilldown,
                hierarchy: state.originalHierarchy
            };

        case TYPEs.CLEAR_LEADERBOARD_DATA:
            return{
                ...leaderboardState
            };

        default:
            return state;

    }
};
