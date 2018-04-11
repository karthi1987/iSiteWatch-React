import * as TYPEs from './scorecard-action-types.js';

export const scorecardState = {
    open: false
};

export default ( state = scorecardState, action ) => {
    switch( action.type ) {
        // CLEAR_GAUGES_DATA
        case TYPEs.CLEAR_GAUGES_DATA:
            return {
                ...state,
                gauges: {}
            };

        // CLEAR_DRILLDOWN_REPORT_DATA
        case TYPEs.CLEAR_DRILLDOWN_REPORT_DATA:
            if( state.drilldownReport ) {
                const rows = state.drilldownReport.rows;
                for( const k in state.drilldownReport.rows ) {
                    for( const l in state.drilldownReport.rows[ k ] ) {
                        rows[ k ][ l ] = {};
                    }
                }
                return {
                    ...state,
                    drilldownReport: {
                        ...state.drilldownReport,
                        rows: rows
                    }
                };
            }

        // CLEAR_LIST_VIEW_DATA
        case TYPEs.CLEAR_LIST_VIEW_DATA:
            if( state.listView ) {
                const rows = state.listView.rows;
                for( const k in state.listView.rows ) {
                    for( const l in state.listView.rows[ k ] ) {
                        rows[ k ][ l ] = {};
                    }
                }
                return {
                    ...state,
                    listView: {
                        ...state.listView,
                        rows: rows
                    }
                };
            }

        //GET_DATE_NAV_DATA
        case TYPEs.LOAD_FILTER_DATA:
            return {
                ...state,
                dateFilters: action.dateFilters,
                rankFilters: action.rankFilters,
                admin: action.admin,
                hierarchyLevel: action.hierarchyLevel,
                maxHierarchyLevel: action.maxHierarchyLevel
            };

        //GET_REPORT_NAV_DATA
        case TYPEs.LOAD_REPORT_FILTER_DATA:
            return {
                ...state,
                reportFilters: action.reportFilters
            };

        //GET_REP_NAV_DATA
        case TYPEs.LOAD_REP_FILTER_DATA:
            return {
                ...state,
                repFilters: action.repFilters.location,
                regionFilters: action.repFilters.region
            };

        // GET_GAUGES_DATA
        case TYPEs.LOAD_GAUGES_DATA:
            return {
                ...state,
                gauges: action.gauges,
                criteria: action.criteria,
                errorGauges: false,
                message: null
            };
        case TYPEs.GAUGES_ERROR_REPORT:
            return {
                ...state,
                errorGauges: action.error,
                message: action.message
            };

        //GET_LIST_VIEW_DATA
        case TYPEs.LOAD_LIST_VIEW_DATA:
            return {
                ...state,
                listView: action.listView,
                criteria: action.criteria
            };

        //GET_DRILLDOWN_DATA
        case TYPEs.LOAD_DRILLDOWN_DATA:

            let drilldownLoadCount;
            if( typeof state.drilldownLoadCount === 'undefined' || ( state.drilldownLoadCount >= state.maxHierarchyLevel ) ) {
                drilldownLoadCount = 0;
            } else {
                drilldownLoadCount = state.drilldownLoadCount + 1;
            }

            return {
                ...state,
                drilldownReport: action.drilldownReport,
                criteria: action.criteria,
                drilldownLoadCount: drilldownLoadCount,
                rankType: action.rankType,
                showRank: action.showRank,
                errorDrilldown: false,
                message: null
            };

        case TYPEs.DRILLDOWN_ERROR_REPORT:
            return {
                ...state,
                errorDrilldown: action.error,
                message: action.message
            };

        default:
            return state;

    }
};
