import Ajax, * as ajax from 'utils/ajax';
import * as TYPEs from './scorecard-action-types.js';
import FEEDS from 'endpoints/endpoints';

const TABLE = {
	DESC_LIST_SORT_VALUE: 'ASC',
	ASC_LIST_SORT_VALUE: 'DESC',
	RIGHT_ARROW: '>',
	COLORS: [
		'#abe0f9',
        '#72b495',
        '#e0bc57',
        '#f9b294'
	]
};

const ERROR_MESSAGE = 'Please reach out to your local Market Ops. or End User Support contact.';

function assignColor( filterOptions ) {
    let count = 0;
    for( const i in filterOptions ) {
        filterOptions[ i ].color = TABLE.COLORS[ count ];
        count = count + 1;
        if( count === 4 ) {
            count = 0;
        }
    }
    return filterOptions;
}

export function getFilterData( criteria ) {
    return ( dispatch ) => {
        const type = TYPEs.FILTER_DATA;

        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.SHEET_SCORECARD_FILTERS,
            data: { dateCode: criteria.dateCode },
						success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.message ) );
                } else {

                    dispatch( {
                        type: TYPEs.LOAD_FILTER_DATA,
                        dateFilters: results.data.dateNav,
                        rankFilters: results.data.rankNav,
                        admin: results.data.admin,
                        hierarchyLevel: results.data.hierarchyLevel,
                        maxHierarchyLevel: results.data.maxHierarchyLevel
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

export function getReportFilterData( criteria ) {
    return ( dispatch ) => {
        const type = TYPEs.REPORT_FILTER_DATA;

        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.SHEET_SCORECARD_REPORT_FILTER,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.message ) );
                }else{

                    let filterOptions = results.data.selectNavOptions;
                    filterOptions = assignColor( filterOptions );

                    dispatch( {
                        type: TYPEs.LOAD_REPORT_FILTER_DATA,
                        reportFilters: filterOptions
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

/* Drilldown Rep filter */
export function getRepFilterData() {
    return ( dispatch ) => {
        const type = TYPEs.REP_FILTER_DATA;

        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.SHEET_DRILLDOWN_REP_FILTER,
            success: ( results ) => {
                if ( !results.success ) {
                    dispatch( ajax.loadingError( type, results.message ) );
                } else {

                    let filterOptions = results.data;
                    //filterOptions = assignColor( filterOptions );

                    dispatch( {
                        type: TYPEs.LOAD_REP_FILTER_DATA,
                        repFilters: filterOptions
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


export function getGaugesData( criteria ) {

    return ( dispatch ) => {
        const type = TYPEs.GAUGES_DATA;

        dispatch( { type: TYPEs.CLEAR_GAUGES_DATA } );
        dispatch( ajax.resetLoaded( type ) );
        dispatch( ajax.loading( type ) );


        return Ajax( {
            url: FEEDS.SHEET_SCORECARD_GAUGES,
            data: criteria,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch (
                        {
                            type: TYPEs.GAUGES_ERROR_REPORT,
                            error: true,
                            message: results.errorMessage || ERROR_MESSAGE
                        }
                    );
                    dispatch( ajax.loadingError( type, results.message ) );
                }else{
                    dispatch( {
                        type: TYPEs.LOAD_GAUGES_DATA,
                        gauges: results.data,
                        criteria: results.data.criteria
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

export function getListViewData( criteria ) {

    return ( dispatch ) => {
        const type = TYPEs.LIST_VIEW_DATA;

        dispatch( ajax.resetLoaded( type ) );
        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.SHEET_SCORECARD_LIST_VIEW,
            data: criteria,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( type, results.message ) );
                }else{
                    dispatch( {
                        type: TYPEs.LOAD_LIST_VIEW_DATA,
                        listView: results.data,
                        criteria: results.data.criteria
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

export function getDrilldownData( criteria ) {

    return ( dispatch ) => {
        const type = TYPEs.DRILLDOWN_DATA;

        //dispatch( { type: TYPEs.CLEAR_DRILLDOWN_REPORT_DATA } );
        dispatch( ajax.resetLoaded( type ) );
        dispatch( ajax.loading( type ) );

        return Ajax( {
            url: FEEDS.SHEET_SCORECARD_DRILLDOWN,
            data: criteria,
            success: ( results ) => {
                if( !results.success ) {
                    dispatch (
                        {
                            type: TYPEs.DRILLDOWN_ERROR_REPORT,
                            error: true,
                            message: results.errorMessage || ERROR_MESSAGE
                        }
                    );
                    dispatch( ajax.loadingError( type, results.message ) );
                } else {
                    dispatch( {
                        type: TYPEs.LOAD_DRILLDOWN_DATA,
                        drilldownReport: results.data,
                        criteria: results.data.criteria,
                        rankType: results.data.rankType,
                        showRank: results.data.showRank
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

export function clearGaugesData() {
    return { type: TYPEs.CLEAR_GAUGES_DATA };
}