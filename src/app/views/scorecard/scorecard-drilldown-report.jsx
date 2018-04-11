//lings
import React from 'react';
import { browserHistory } from 'react-router';
//utils
import { connectAndMap } from 'utils/utils';
//actionsCreators
import { getDrilldownData, getReportFilterData, getRepFilterData, getFilterData } from './scorecard-action-creators.js';
//templates and helpers
import { _tableColumnSortTemplate } from '../../shared/table/_table-column-sort-template';
import { _tableColumnDrilldownTemplate } from '../../shared/table/_table-column-drilldown-template';
import { getFilterId, getFilterIndex, getDateCode, convertEstTimeToUserTimeZone } from './scorecard-helper';
//shared
import ErrorMessage from 'app/shared/error-message/error-message';
import Table from '../../shared/table/table';
//lang
import { SCORECARD_MODULE } from 'app/app-lang';

/*******************************************************************************
 *  1. ScorecardDrilldownReport
 *  2. _drilldown
 */

const DRILLDOWN_DEFAULT_CRITERIA = {
    dateCode: null,
    date: null,
    sortBy: null,
    sortOn: 'ASC',
    report: null,
    drillLevel: 3,
    drillId: null,
    rank: null,
    rankType: null,
    showRank: null
};

/*
 * 1. ScorecardDrilldownReport
 */
const ScorecardDrilldownReport = connectAndMap( [ 'views.scorecardView' ], { getDrilldownData, getReportFilterData, getRepFilterData, getFilterData } ) (
  class extends React.Component {
    constructor( props ) {
      super( props );

			this.state = {
				drilldownIndex: 2,
				drilldownReportLabel: undefined,
				drilldownReportId: undefined,
				drilldownSort: {
					index: 0,
					sortOn: 'ASC'
				},
				hierarchyLevel: undefined,
				maxHierarchyLevel: undefined,
				drilldownRankTypeId: undefined,
				drilldownRankTypeLabel: undefined,
				drilldownShowRankId: undefined,
				drilldownShowRankLabel: undefined,
				dateFilters: undefined,
				reportFilters: undefined
		};

			this.onSort = this.onSort.bind( this );
			this.onDrilldown = this.onDrilldown.bind( this );
			this.onDrilldownReport = this.onDrilldownReport.bind( this );
			this.renderTableHeaderFooterColor = this.renderTableHeaderFooterColor.bind( this );
    }
		componentDidMount() {
			if ( !this.props.scorecardView.criteria && !DISPLAY_DRILLDOWN_AS_SELECTED ) {
				return browserHistory.push( APP_PATH + '/scorecard/gauges/graph' );
			}

			this.fetchDataInterval = setInterval( () => { this.checkIfPeriodAvailalbe() }, 100 )
		}

		checkIfPeriodAvailalbe() {
			if ( this.props.scorecardPeriodLabel ) {
				clearInterval( this.fetchDataInterval );
				this.fetchInitialData();
			}
		}

		componentWillReceiveProps( nextProps, nextState ) {

			const {
				dateFilters,
				reportFilters,
				hierarchyLevel,
				maxHierarchyLevel,
				drilldownRankTypeId
			} = this.state;


			if ( !hierarchyLevel && !maxHierarchyLevel ) {
				this.setState({'hierarchyLevel': Number( nextProps.scorecardView.hierarchyLevel ), 'maxHierarchyLevel': Number( nextProps.scorecardView.maxHierarchyLevel ) })
			}

			if ( !reportFilters && this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0 ) {
				this.setState({ 'reportFilters': this.props.scorecardView.reportFilters });
			}

			if ( nextProps.scorecardDrilldownRankTypeId ) {
				this.setState({ 'drilldownRankTypeId': nextProps.scorecardDrilldownRankTypeId });
			}

			if ( nextProps.scorecardDrilldownShowRankId ) {
				this.setState({ 'drilldownShowRankId': nextProps.scorecardDrilldownShowRankId });
			}

		}
		componentDidUpdate( prevProps, prevState ) {

			if ( !this.props.scorecardView.drilldownReport  || !prevProps.scorecardView.drilldownReport ) {
				return false;
			}

			this.renderTableHeaderFooterColor();

			/* Double Ajax call issue fixed */

			if ( this.shouldFetchData( prevProps )  ) {

				const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
					date: this.getSelectedDate(),
					dateCode: this.getSelectedDateCode(),
					report: this.getReportId('selected'),
					rankType: this.props.scorecardDrilldownRankTypeId,
					showRank: this.props.scorecardDrilldownShowRankId,
					drillId: this.getDrillId(prevProps),
					drilldownCarot: null
				} );

				return this.fetchData( criteria );
      		}
		}

		shouldFetchData( prevProps ) {

			if ( !location.pathname.includes( 'drilldown-report' ) ) {
				return false
			}

			if ( 
				prevProps.scorecardPeriodLabel && prevProps.scorecardPeriodLabel !== this.props.scorecardPeriodLabel ||
				prevProps.scorecardDrilldownDropdownLabel && prevProps.scorecardDrilldownDropdownLabel !== this.props.scorecardDrilldownDropdownLabel ||
				prevProps.scorecardDrilldownRankTypeId && prevProps.scorecardDrilldownRankTypeId !== this.props.scorecardDrilldownRankTypeId ||
				prevProps.scorecardDrilldownShowRankId && prevProps.scorecardDrilldownShowRankId !== this.props.scorecardDrilldownShowRankId
			 ) {
			 	return true
			}

			return false
		}

		getSelectedDateCode() {
			if ( this.props.scorecardDateTabs && this.props.scorecardDateTabs.length > 0 ) {
				return getDateCode( this.props.scorecardDateTabs, this.props.scorecardDateIndex )
			}
			return null
		}

		getSelectedDate() {
			if ( this.props.scorecardView.dateFilters && this.props.scorecardView.dateFilters.length > 0 ) {
				return getFilterId( this.props.scorecardView.dateFilters, this.props.scorecardPeriodLabel )
			}
			return null
		}


		getReportByDefault() {

			if ( this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0 ) {
				return this.props.scorecardView.reportFilters[ 0 ].id
			} else {
				return null
			}
		}

		getReportId( argument ) {
			
			if ( argument === 'selected' && this.state.reportFilters.length > 0 ) {
				return getFilterId( this.state.reportFilters, this.props.scorecardDrilldownDropdownLabel )
			}

			if ( argument === 'default' ) {
				return this.getReportByDefault()
			}
		}


		retrieveDrillId(){

			if ( this.props.scorecardView.drilldownReport && this.props.scorecardView.drilldownReport.drilldown ) {
				const drilldownStoredItem = this.props.scorecardView.drilldownReport.drilldown;
				if ( drilldownStoredItem.length ) {
					//To do: change this approach to take the value from an array
					return drilldownStoredItem[drilldownStoredItem.length - 1].code;
				}
			}

			return null;
		}

		getDrillId( prevProps ) {

			if ( !prevProps.scorecardPeriodLabel ) {
				return null
			}
			return this.retrieveDrillId()
		}
		fetchInitialData() {
			const self = this;
			let intialRequest;
			if ( DISPLAY_DRILLDOWN_AS_SELECTED && !this.props.scorecardView.criteria ) {
				intialRequest = DRILLDOWN_DEFAULT_CRITERIA;
			} else {
				intialRequest = this.props.scorecardView.criteria
			}

			if ( DISPLAY_DRILLDOWN_AS_SELECTED && this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length ) {
				this.props.getFilterData( { dateCode: this.props.scorecardView.reportFilters[0].defaultValue } ).done( ( response ) => {
					if ( response && response.success ) {
						if ( response.data && response.data.dateNav && response.data.dateNav.length ) {
							const criteria = Object.assign( intialRequest, {
								date: response.data.dateNav[0].id,
								dateCode: this.props.scorecardView.reportFilters[0].defaultValue,
								report: this.getReportId('default'),
								drillLevel: this.state.hierarchyLevel,
								drilldownCarot: null,
								drillId: null
							} );
							self.props.getDrilldownData( criteria );
						}
					}
				} );
			} else {
				this.props.getReportFilterData().done( () => {
					const criteria = Object.assign( intialRequest, {
						date: null,
						report: this.getReportId('default'),
						drillLevel: this.state.hierarchyLevel,
						drilldownCarot: null,
						drillId: null
					} );
					self.props.getDrilldownData( criteria );
				} );
			}
		}
		fetchData( criteria ) {
			this.props.getDrilldownData( criteria );
		}
		onDrilldown( event, index, item ) {

			const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
				drillLevel: index + 1,
				drillId: item.code || null,
				drilldownCarot: null,
				drillBreadCrumb: true
			} );

			this.fetchData( criteria );
		}
		onDrilldownReport( event, data ) {

			let {
				maxHierarchyLevel
			} = this.state;

			if ( this.props.scorecardView.criteria.drillLevel >= maxHierarchyLevel ) {
				return false;
			}

			const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
				drillLevel: this.props.scorecardView.drilldownReport.criteria.drillLevel + 1,
				drillId: data.id
			} );

			this.fetchData( criteria );

		}
		onSort( event, item, index ) {

			if( index !== this.state.drilldownSort.index ) {

				this.setState( { drilldownSort: { index: index, sortOn: 'DESC' } } );

				const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
					sortBy: item.code,
					sortOn: 'DESC',
					drilldownCarot: null,
					drillId: this.retrieveDrillId()
				} );
				return this.fetchData( criteria );
			}

			if ( this.state.drilldownSort.sortOn === 'ASC' ) {

				this.setState( { drilldownSort: { index: index, sortOn: 'DESC' } } );

				const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
					sortBy: item.code,
					sortOn: 'DESC',
					drilldownCarot: null,
					drillId: this.retrieveDrillId()
				} );
				return this.fetchData( criteria );

			} else {

				this.setState( { drilldownSort: { index: index, sortOn: 'ASC' } } );

				const criteria = Object.assign( this.props.scorecardView.drilldownReport.criteria, {
					sortBy: item.code,
					sortOn: 'ASC',
					drilldownCarot: null,
					drillId: this.retrieveDrillId()
				} );
				return this.fetchData( criteria );
			}
		}

		renderDrillLevel() {
			let {
				maxHierarchyLevel
			} = this.state;

			if ( this.props.scorecardView.drilldownReport.criteria.drillLevel < maxHierarchyLevel )
				{return 'drilldown-report drill-level-' + this.props.scorecardView.drilldownReport.criteria.drillLevel;}
			else
				{return 'drilldown-report drill-level-max';}
		}
		getFixedColumns() {
			const {
				drilldownRankTypeLabel,
				drilldownRankTypeId
			} = this.state;

			let fColumn = 0;

			if ( !drilldownRankTypeId ) {
				fColumn = 0;
			}

			const drilldownRankType = drilldownRankTypeId && drilldownRankTypeId.toUpperCase() || null;

			switch( drilldownRankType ) {
				case 'PAX':
					fColumn = 2;
				break;
				case 'OFFICE':
					fColumn = 1;
				break;
				default:
					fColumn = 1;
				break;
			}

			return fColumn;
		}
		renderTableHeaderFooterColor( className ) {
			//TODO add modulus operator
			const localProps = this.props;

			const index = getFilterIndex( localProps.scorecardView.reportFilters, localProps.scorecardDrilldownDropdownLabel );

			const getColor = ( index ) => {
				switch ( index ) {
					case 0:
						return 'rgb(171, 224, 249)';
					break;
					case 1:
						return 'rgb(114, 180, 149)';
					break;
					case 2:
						return 'rgb(224, 188, 87)';
					break;
					case 3:
						return 'rgb(249, 178, 148)';
					break;
					case 4:
						return 'rgb(171, 224, 249)';
					break;
					case 5:
						return 'rgb(114, 180, 149)';
					break;
					case 6:
						return 'rgb(249, 178, 148)';
					break;
				}
			};

			const classes_we_recolor = [ 'slidable-header', 'slidable-footer', 'flex-table-header', 'flex-table-footer', 'first-column-header', 'first-column-footer' ];

			if( classes_we_recolor.find( ( value ) => { return value === className; } ) ) {
				return {
					//backgroundColor: getColor( index )
				};
			} else {
				return {};
			}
		}

		showDrilldownReportError() {
			const {
				message,
				errorDrilldown,
				reportFilters
			} = this.props.scorecardView;

			let errorMessage = message;
			let errorOn = errorDrilldown;
			let drillNoReportMessage = SCORECARD_MODULE.NO_REPORT_MESSAGE;

			if ( !errorDrilldown && ( reportFilters && !reportFilters.length ) ) {
				errorOn = true;
				errorMessage = drillNoReportMessage;
			}

			return (
				errorOn && <ErrorMessage message={errorMessage} />
			)
		}

		renderDrilldownReport() {
			const {
				message,
				errorDrilldown,
				drilldownReport,
				drilldownLoadCount,
				color,
				reportFilters,
				rankType,
				showRank
			} = this.props.scorecardView;

      		const { 
      			drilldownRankTypeId
      		} = this.state;

			if ( !drilldownReport || !reportFilters || !drilldownReport.drilldown  || !rankType || !showRank || !drilldownRankTypeId ) {
				return false
			} else {

				return (

					<div className="scorecard-drilldown-report">
						<div className={ this.renderDrillLevel() }>
							<_drilldown
								_state={ drilldownReport.drilldown }
								_callback={ this.onDrilldown }
								_index={ this.state.drilldownIndex }
							/>
							<Table
								_callback={
									{
										tableHeaderCallback: this.onSort,
										tableBodyCallback: this.onDrilldownReport
									}
								}
								_index={ this.state.drilldownSort }
								_lastUpdated= { convertEstTimeToUserTimeZone( drilldownReport.lastUpdated ) }
								_template={
									{
										tableHeaderTemplate: _tableColumnSortTemplate,
										tableBodyTemplate: _tableColumnDrilldownTemplate
									}
								}
								ref="table"
								hierarchyLevel={ this.state.hierarchyLevel }
								drilldownLoadCount={drilldownLoadCount}
								drillLevel={ this.state.maxHierarchyLevel }
								fixedColumns={ this.getFixedColumns() }
								columns={ drilldownReport.columns }
								rows={ drilldownReport.rows }
								footer={ drilldownReport.totals }
								color={ color }
								styleCallback={ this.renderTableHeaderFooterColor }
							/>
						</div>
		        	</div>
				)
			}

		}

    	render() {
    		const {
    			scorecardView
    		} = this.props;

    		if ( ( scorecardView && scorecardView.errorDrilldown ) || ( scorecardView.reportFilters && !scorecardView.reportFilters.length ) ) {
    			return this.showDrilldownReportError()
    		} else {
    			return this.renderDrilldownReport()
    		}
      		
    	}
  	}
);

/*
 * 2. _drilldown
 */
const _drilldown = ( props ) => {

	if( !props._state ) {
		return false;
	}

	return(
		<ul className="drilldown">
			{
				props._state.map( ( item, index ) => {
					return (
						<li
							key={ index }
							onClick={ ( event ) => { props._callback( event, index, item );} }>
							{ item.label } <span> > </span>
						</li>
					);
				} )
			}
		</ul>
	);
};

export default ScorecardDrilldownReport;