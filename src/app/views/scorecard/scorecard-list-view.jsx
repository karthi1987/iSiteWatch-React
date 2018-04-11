import React from 'react';
import { browserHistory } from 'react-router';
//utils
import { connectAndMap } from 'utils/utils';
// action creators
import { getListViewData } from './scorecard-action-creators.js';
//templates and helpers
import { _tableColumnSortTemplate } from '../../shared/table/_table-column-sort-template';
import { getDateCode, getFilterId, convertEstTimeToUserTimeZone } from './scorecard-helper';
//shared
import Table from '../../shared/table/table';

/*******************************************************************************
 *  1. ScorecardListView
 *
 */

/*
 *  1. ScorecardListView
 */
const ScorecardListView = connectAndMap( [ 'views.scorecardView' ], { getListViewData } ) (
  class extends React.Component {
    constructor( props ) {
      super( props );
			this.state = {
				listSort: {
					index: 0,
					sortOn: 'ASC'
				}
			};
			this.onSort = this.onSort.bind( this );
    	}
		componentDidMount() {
			if( !this.props.scorecardView.criteria ) {
				return browserHistory.push( APP_PATH + '/scorecard/gauges/graph' );
			}
			this.fetchInitialData();
		}
		componentDidUpdate( prevProps, prevState ) {

			if (
        		prevProps.scorecardPeriodLabel !== this.props.scorecardPeriodLabel
      		) {
	 			const criteria = Object.assign( this.props.scorecardView.listView.criteria, {
					date: getFilterId( this.props.scorecardView.dateFilters, this.props.scorecardPeriodLabel ),
					dateCode: getDateCode( this.props.scorecardDateTabs, this.props.scorecardDateIndex ),
					rank: getFilterId( this.props.scorecardView.rankFilters, this.props.scorecardRankDropdownLabel ),
					report: null,
					sortBy: this.props.scorecardView.listView.columns[ this.state.listSort.index ].code,
					sortOn: this.state.listSort.sortOn
				} );
				this.fetchData( criteria );
      		}
		}
		fetchInitialData() {
			this.props.getListViewData( this.props.scorecardView.criteria );
		}
		fetchData( criteria ) {
			this.props.getListViewData( criteria );
		}
		onSort( event, item, index ) {

			if( index !== this.state.listSort.index ) {

				this.setState( { listSort: { index: index, sortOn: 'DESC' } } );

				const criteria = Object.assign( this.props.scorecardView.listView.criteria, {
					sortBy: item.code,
					sortOn: 'DESC'
				} );

				return this.fetchData( criteria );
			}

			if ( this.state.listSort.sortOn === 'ASC' ) {

				this.setState( { listSort: { index: index, sortOn: 'DESC' } } );

				const criteria = Object.assign( this.props.scorecardView.listView.criteria, {
					sortBy: item.code,
					sortOn: 'DESC'
				} );

				return this.fetchData( criteria );

			} else {

				this.setState( { listSort: { index: index, sortOn: 'ASC' } } );

				const criteria = Object.assign( this.props.scorecardView.listView.criteria, {
					sortBy: item.code,
					sortOn: 'ASC'
				} );

				return this.fetchData( criteria );
			}

		}
    	render() {
      //		const { listView, criteria, color, loaded } = this.props.scorecardView;
			const { listView } = this.props.scorecardView;

			if ( !listView ) {
				return false;
			}

			//TODO send entire listView object instead of breaking it into peices
      		return (
		        <div className="list-view">
					<Table
						_callback={ { tableHeaderCallback: this.onSort } }
						_index={ this.state.listSort }
						_lastUpdated= { convertEstTimeToUserTimeZone( listView.lastUpdated ) }
						_template={ { tableHeaderTemplate: _tableColumnSortTemplate } }
						columns={ listView.columns }
		    			rows={ listView.rows }
		    			footer={ listView.totals }
		    			color="#abe0f9"/>
		        </div>
      		);
    	}
  	}
);

export default ScorecardListView;
