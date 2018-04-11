//libs
import React from 'react';
import { browserHistory } from 'react-router';
//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
//actionCreators
import { getFilterData, getGaugesData, getReportFilterData } from './scorecard-action-creators.js';
import { getScorecardModuleData } from '../home/modules/scorecard/scorecard-actions-reducers';
//helpers
import { getFilterLabel, getDateCode, getDateIndex, getDateByIndex, getFilterObject } from './scorecard-helper';
// shared components
import { _tabs } from '../../shared/tabs/tabs.jsx';
import { _dropdown } from 'app/shared/dropdown/dropdown';
import Icon from '../../shared/icons/icons';
//lang
import { SCORECARD_MODULE } from 'app/app-lang';
//scss
import './scorecard.scss';

/*******************************************************************************
 *  1. DEFAULT_CRITERIA
 *  2. Scorecard
 */

/*
 * 1. DEFAULT_CRITERIA
 */
const DEFAULT_CRITERIA = {
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
 * 2. Scorecard
 */
const Scorecard = connectAndMap( [ 'views.home.modules.scorecard', 'views.scorecardView', 'app.route' ], { getFilterData, getGaugesData, getScorecardModuleData, getReportFilterData } ) (
	class extends React.Component {
	  constructor( props ) {
	    super( props );

			this.state = {
				scorecardViewIndex: DISPLAY_DRILLDOWN_AS_SELECTED ? 1 : 0,
				scorecardViewTabs: [
					{
						name: 'Scorecard',
						route: APP_PATH + '/scorecard/gauges/graph'
					},
					{
						name: 'Drilldown Report',
						route: APP_PATH + '/scorecard/drilldown-report'
					}
				],
				scorecardDateIndex: 0,
				scorecardDateTabs: [
					{
						name: 'Day'
					},
					{
						name: 'MTD'
					},
					{
						name: 'QTD'
					}
				],
				scorecardPeriodLabel: undefined,
				scorecardPeriod: undefined,
				scorecardGaugesIndex: 0,
				scorecardGaugesTabs: [
					{
						name: <Icon name="pie-chart" viewBox="0 0 2040.9 2040.9"/>,
						route: APP_PATH + '/scorecard/gauges/graph'
					},
					{
						name: <Icon name="list"/>,
						route: APP_PATH + '/scorecard/gauges/list'
					}
				],
				scorecardDrilldownDropdownLabel: undefined,
				scorecardRankDropdownLabel: undefined,
				scorecardDrilldownRankTypeId: undefined,
				scorecardDrilldownRankTypeLabel: undefined,
				scorecardDrilldownShowRankId: undefined,
				scorecardDrilldownShowRankLabel: undefined

			};

			this.onScorecardViewTab = this.onScorecardViewTab.bind( this );
			this.onScorecardDateTab = this.onScorecardDateTab.bind( this );
			this.onScorecardGaugesTab = this.onScorecardGaugesTab.bind( this );
			this.onScorecardPeriodDropdown = this.onScorecardPeriodDropdown.bind( this );
			this.onScorecardDrilldownDropdown = this.onScorecardDrilldownDropdown.bind( this );
			this.onScorecardDrilldownRankTypeDropdown = this.onScorecardDrilldownRankTypeDropdown.bind( this );
			this.onScorecardDrilldownShowRankDropdown = this.onScorecardDrilldownShowRankDropdown.bind( this );
			this.onScorecardRankDropdown = this.onScorecardRankDropdown.bind( this );
			this.doRoute = this.doRoute.bind( this );
	  }
		componentDidMount() {
			this.fetchInitialData();
		}
		componentDidUpdate( prevProps, prevState ) {
			if (
				//todo shoudl not need to use scorecardViewIndex conditional
				prevState.scorecardViewIndex !== this.state.scorecardViewIndex
			 ) {
				this.fetchGaugesData();
			}
		}
		doRoute() {
			const self = this;
			const route = function() {
				if( self.state.scorecardViewIndex === 0 ) {
					return self.state.scorecardGaugesTabs[ self.state.scorecardGaugesIndex ].route;
				}
				return self.state.scorecardViewTabs[ self.state.scorecardViewIndex ].route;
			};
			browserHistory.push( route() );
		}

		componentWillReceiveProps( nextProps, nextState ) {

			if ( nextProps.scorecard.data && nextProps.scorecard.data.channelId  ) {
				this.doCheckIfChannelIsRetail();
			}

			if ( nextProps.scorecardView.showRank && nextProps.scorecardView.rankType ) {
				const {
					criteria,
					showRank,
					rankType
				} = nextProps.scorecardView;

				this.setState( {
					scorecardDrilldownRankTypeId: criteria.rankType,
					scorecardDrilldownRankTypeLabel: getFilterLabel( rankType, criteria.rankType ),
					scorecardDrilldownShowRankId: criteria.showRank,
					scorecardDrilldownShowRankLabel: getFilterLabel( showRank, criteria.showRank )
				} );
			}
		}

		doCheckIfChannelIsRetail( params ) {
			const {
				scorecard
			} = this.props;
			let title = SCORECARD_MODULE.TITLE;
			let stateObj = {};
			const tempObj = !params ? {} : params;
			if ( scorecard.data && scorecard.data.channelId ) {
				if ( scorecard.data.channelId === '2016' ) {
					title = SCORECARD_MODULE.LEADERBOARD_TITLE;

					stateObj = {
						...tempObj,
						scorecardViewTabs: [
							{
								name: title,
								route: APP_PATH + '/scorecard/gauges/graph'
							},
							{
								name: SCORECARD_MODULE.DRILLDOWN_REPORT,
								route: APP_PATH + '/scorecard/drilldown-report'
							}
						]
					};

					this.setState( stateObj );
				}
			}
			return stateObj;
		}

		getPromiseData() {

			const self = this;
			const getDataPromise = () => {
				return new Promise( ( resolve, reject ) => {

			 		if ( !location.pathname.includes( 'drilldown-report' ) ) {

						this.props.getFilterData( { dateCode: getDateByIndex( self.state.scorecardDateIndex ) } ).done( ( response2 ) => {
							if ( response2 && response2.success && response2.data ) {
								this.setState ( 
									{ 
										scorecardPeriodLabel: response2.data.dateNav[ 0 ].label,
										scorecardPeriod: response2.data.dateNav
									}
								);

								const criteria = DEFAULT_CRITERIA;
								criteria.date = response2.data.dateNav[ 0 ].id;
								criteria.rank = response2.data.rankNav[ 0 ].id;
								criteria.dateCode = getDateByIndex( self.state.scorecardDateIndex );
								criteria.drillLevel = response2.data.hierarchyLevel || DEFAULT_CRITERIA.drillLevel;
					 			this.props.getGaugesData( criteria ).done( resolve );

							}
						} );

			 		}

			 		if ( location.pathname.includes( 'drilldown-report' ) ) {
			 			if ( this.props.scorecardView && this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length ) {
			 				let filterItem;
			 				if ( !this.state.scorecardDrilldownDropdownLabel ) {
			 					filterItem = getFilterObject( this.props.scorecardView.reportFilters, this.props.scorecardView.reportFilters[0].label )
			 				} else {
			 					filterItem = getFilterObject( this.props.scorecardView.reportFilters, this.state.scorecardDrilldownDropdownLabel )
			 				}
							self.setState({ 'scorecardDateIndex': getDateIndex( filterItem.defaultValue ) });
							this.fetchData( filterItem.defaultValue );
			 			}
			 		}
				} )
			};
			getDataPromise().then( () => {
				if ( location.pathname.includes( 'graph' ) ) {
					return false;
				}
				self.fetchData();
			} );

		}

		fetchGaugesData() {
			this.getPromiseData();
		}

		fetchInitialData() {
			const self = this;
			const getInitialDataPromise = () => {
				return new Promise( ( resolve, reject ) => {
				 	if ( !this.props.scorecardView.gauges ) {
						const getGaugesData = ( response2 ) => {
				 			const criteria = DEFAULT_CRITERIA;
				 			criteria.date = response2.data.dateNav[ 0 ].id;
				 			criteria.rank = response2.data.rankNav[ 0 ].id;
				 			criteria.drillLevel = response2.data.hierarchyLevel || DEFAULT_CRITERIA.drillLevel;
				 			this.props.getGaugesData( criteria ).done( resolve );
				 		};

				 		if ( !location.pathname.includes( 'drilldown-report' ) ) {
					 		this.props.getFilterData( { dateCode: getDateByIndex( self.state.scorecardDateIndex )  } )
					 			.done( ( response2 ) => { getGaugesData( response2 );} );
				 		}

				 	}

				 	/*if ( location.pathname.includes( 'drilldown-report' ) ) {
				 		if ( DISPLAY_DRILLDOWN_AS_SELECTED && this.props.scorecardView.gauges ) {
					 		self.props.getFilterData( { dateCode: self.props.scorecard.data.dateCodes[ 0 ] } )
					 			.done( resolve );
					 	}
				 	}*/
				 	
				} );
			};

			if ( this.props.scorecard.data.dateCodes && !this.props.scorecard.data.dateCodes.length ) {
				this.props.getScorecardModuleData()
					.done( () => {
						getInitialDataPromise().then( () => {
							if( location.pathname.includes( 'graph' ) ) {
								return false;
							}
							self.fetchData();
						} );
					}
				);
			} else {
				getInitialDataPromise().then( () => {
					if ( location.pathname.includes( 'graph' ) ) {
						return false;
					}
					self.fetchData();
				} );
			}

			if ( DISPLAY_DRILLDOWN_AS_SELECTED ) {
				if ( !this.state.scorecardDrilldownDropdownLabel ) {
					this.props.getReportFilterData().done( () => {
						if ( self.props.scorecardView.reportFilters && self.props.scorecardView.reportFilters.length ) {
							const filterItem = self.props.scorecardView.reportFilters[0];
							self.setState({ 'scorecardDateIndex': getDateIndex( filterItem.defaultValue ), 'scorecardDrilldownDropdownLabel': filterItem.label  });
							self.fetchData( filterItem.defaultValue ) 
						}
					} );
				}
			}
			
		}
		fetchData( scorecardDateIndex ) {
			const {
				scorecard,
				scorecardView
			} = this.props;
			const self = this;
			let dateCode;

			if ( scorecardDateIndex ) {
				dateCode = scorecardDateIndex;
			} else {
				dateCode = getDateCode( this.state.scorecardDateTabs, this.state.scorecardDateIndex ) 
			}
			this.props.getFilterData( { dateCode: dateCode } ).done( () => {
				if ( self.props.scorecardView.dateFilters && self.props.scorecardView.dateFilters.length ) {
					self.setState( { scorecardPeriodLabel: self.props.scorecardView.dateFilters[ 0 ].label, scorecardPeriod: self.props.scorecardView.dateFilters } );
				}
			} );
		}
		onScorecardViewTab( event, index ) {
			this.setState( { scorecardViewIndex: index } );
			if( index === 0 ) {
				this.setState( { scorecardGaugesIndex: 0 } );
				webTrack( WT_IDS.SCORECARD_GAUGE_VIEW );
			}else{
				webTrack( WT_IDS.SCORCARD_DRILLDOWN_VIEW );
			}
		}
		onScorecardDateTab( event, index ) {
			this.props.getFilterData( { dateCode: getDateCode( this.state.scorecardDateTabs, index ) } ).done( () => {
				if ( this.props.scorecardView.dateFilters && this.props.scorecardView.dateFilters.length ) {
					this.setState ( 
						{ 
							scorecardPeriodLabel: this.props.scorecardView.dateFilters[ 0 ].label,
							scorecardPeriod: this.props.scorecardView.dateFilters,
							scorecardDateIndex: index

						}
					);
				}
			} );

			if( index === 0 ) {
				webTrack( WT_IDS.SCORECARD_DAY_TAB );
			}else if( index === 1 ) {
				webTrack( WT_IDS.SCORECARD_MTD_TAB );
			}else if( index === 2 ) {
				webTrack( WT_IDS.SCORECARD_QTD_TAB );
			}
		}
		onScorecardGaugesTab( event, index ) {
			this.setState( { scorecardGaugesIndex: index } );
			if( index === 0 ) {
				webTrack( WT_IDS.SCORECARD_GAUGE_VIEW );
			}else{
				webTrack( WT_IDS.SCORECARD_LIST_VIEW );
			}
		}
		onScorecardPeriodDropdown( event, label ) {
			this.setState( { scorecardPeriodLabel: label } );
		}
		onScorecardDrilldownDropdown( event, label, id, value ) {
			let {
				criteria,
				showRank,
				rankType,
				dateFilters
			} = this.props.scorecardView;

			if ( value ) {
				this.props.getFilterData( { dateCode: value } ).done( () => {
					if ( dateFilters && dateFilters.length ) {
						this.setState (
							 { 
							  	scorecardDateIndex: getDateIndex( value ),
							 	scorecardDrilldownDropdownLabel: label,
							  	scorecardDrilldownRankTypeId: criteria.rankType,
							  	scorecardDrilldownRankTypeLabel: getFilterLabel( rankType, criteria.rankType ),
							  	scorecardDrilldownShowRankLabel: getFilterLabel( showRank, criteria.showRank ),
							  	scorecardDrilldownShowRankId: criteria.showRank,
							  	scorecardPeriod: this.props.scorecardView.dateFilters,
							  	scorecardPeriodLabel: this.props.scorecardView.dateFilters[ 0 ].label
							}
						);
					}
				} );
			} else {

				this.setState (
						{ 
						 	scorecardDrilldownDropdownLabel: label,
						  	scorecardDrilldownRankTypeId: criteria.rankType,
						  	scorecardDrilldownRankTypeLabel: getFilterLabel( rankType, criteria.rankType ),
						  	scorecardDrilldownShowRankLabel: getFilterLabel( showRank, criteria.showRank ),
						  	scorecardDrilldownShowRankId: criteria.showRank
						}
					);
			}
			
		}
		onScorecardDrilldownRankTypeDropdown( event, label, id ) {
			this.setState( { scorecardDrilldownRankTypeLabel: label, scorecardDrilldownRankTypeId: id } );
		}
		onScorecardDrilldownShowRankDropdown( event, label, id ) {
			this.setState( { scorecardDrilldownShowRankLabel: label, scorecardDrilldownShowRankId: id } );
		}
		onScorecardRankDropdown( event, label ) {
			this.setState( { scorecardRankDropdownLabel: label } );
		}
		renderGaugesTabs() {

			if ( !this.props.location.pathname.includes( 'gauges' ) ) {
				return false;
			}

			const renderTabsToggle = () => {
				const cssClass = 'scorecard-tabs-toggle';
				if( !this.props.scorecard.data.officeId ) {
					return cssClass + ' invisible';
				}
				return cssClass;
			};

			return(
				<div className={ renderTabsToggle() }>
					<_tabs
						_index={ this.state.scorecardGaugesIndex }
						_state={ this.state.scorecardGaugesTabs }
						_callback={ this.onScorecardGaugesTab }
					/>
				</div>
			);
		}
		renderRankDropdown() {

			const renderRank = () => {
				const cssClass = 'scorecard-dropdown-rank';
				if( this.props.location.pathname.includes( 'list' ) ) {
					return cssClass + ' invisible';
				}
				return cssClass;
			};

			if ( !this.props.scorecardView.rankFilters ) {
				return false;
			}

			if ( this.props.location.pathname.includes( 'graph' ) || this.props.location.pathname.includes( 'list' ) ) {
				return(
					<div className={ renderRank() }>
						<_dropdown
							_label={ this.state.scorecardRankDropdownLabel }
							_state={ this.props.scorecardView.rankFilters }
							_callback={ this.onScorecardRankDropdown }
						/>
					</div>
				);
			}
		}
		renderDrilldownDropdown() {
			if ( !this.props.location.pathname.includes( 'drilldown-report' ) ) {
				return false;
			}

			if ( this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0 ) {
				return(
					<div className="scorecard-dropdown-drilldown">
						<_dropdown
							_label={ this.state.scorecardDrilldownDropdownLabel }
							_state={ this.props.scorecardView.reportFilters }
							_callback={ this.onScorecardDrilldownDropdown }
						/>
					</div>
				);
			}
		}

		renderDrilldownRankTypeDropdown() {
			if ( !this.props.location.pathname.includes( 'drilldown-report' ) ) {
				return false;
			}
			if( !this.props.scorecardView.rankType || !this.props.scorecardView.criteria || !this.props.scorecardView.criteria.rankType ) {
				return false;
			}

			return(
				<div className="scorecard-dropdown-drilldown rank-type" style={{'marginLeft':'5%'}}>
					<_dropdown
						_label={ getFilterLabel( this.props.scorecardView.rankType, this.props.scorecardView.criteria.rankType ) }
						_state={ this.props.scorecardView.rankType }
						_callback={ this.onScorecardDrilldownRankTypeDropdown }
					/>
				</div>
			);
		}

		renderDrilldownShowRankDropdown() {
			if ( !this.props.location.pathname.includes( 'drilldown-report' ) ) {
				return false;
			}
			if( !this.props.scorecardView.showRank || !this.props.scorecardView.criteria || !this.props.scorecardView.criteria.showRank ) {
				return false;
			}
			return(
				<div className="scorecard-dropdown-drilldown show-rank">
					<_dropdown
						_label={ getFilterLabel( this.props.scorecardView.showRank, this.props.scorecardView.criteria.showRank ) }
						_state={ this.props.scorecardView.showRank }
						_callback={ this.onScorecardDrilldownShowRankDropdown }
					/>
				</div>
			);
		}

		renderDateCodes() {
			let dateIndex = this.props.scorecardView.criteria && this.props.scorecardView.criteria.dateCode || 0;
			switch( dateIndex ) {
				case 'D':
				dateIndex = 0;
				break;
				case 'M':
				dateIndex = 1;
				break;
				case 'Q':
				dateIndex = 2;
				break;
				default:
				dateIndex = 0;
			}
			return dateIndex;
		}
	 	render() {

			const dateSelectedIndex = this.state.scorecardDateIndex === 0 ? this.renderDateCodes() : this.state.scorecardDateIndex;
			const dateFilters = this.props.scorecardView.dateFilters ? this.props.scorecardView.dateFilters : this.state.scorecardPeriod;

		    return (
		      <div className="scorecard-container">
		        <div className="scorecard-content">
					<nav className="scorecard-nav">
						<div className="scorecard-tabs-view">
							<_tabs
								_index={ this.state.scorecardViewIndex}
								_state={ this.state.scorecardViewTabs }
								_callback={ this.onScorecardViewTab }
							/>
						</div>

						{ this.renderGaugesTabs() }
						{ this.renderRankDropdown() }
						{ this.renderDrilldownDropdown() }
						{ this.renderDrilldownRankTypeDropdown() }
						{ this.renderDrilldownShowRankDropdown() }

						<div className="scorecard-tabs-date">
						
							<_tabs
								_index={ this.state.scorecardDateIndex }
								_state={ this.state.scorecardDateTabs }
								_callback={ this.onScorecardDateTab }
							/>
							
						</div>
						<div className="scorecard-dropdown-period">
							<_dropdown
								_label={ this.state.scorecardPeriodLabel }
								_state={ dateFilters }
								_callback={ this.onScorecardPeriodDropdown }
							/>
						</div>
					</nav>
		          	{ React.cloneElement( this.props.children, { ...this.state } ) }
		        </div>
		      </div>
		    );
	  	}
	}
);
export default Scorecard;
