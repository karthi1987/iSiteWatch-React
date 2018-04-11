import React from 'react';
import { debounce, isEqual } from 'lodash';
//utils
import { connectAndMap } from 'utils/utils';
//action creators
import { getGaugesData, clearGaugesData } from './scorecard-action-creators.js';
//templates and helpers
import { renderGauges } from '../../shared/gauge/gauges-template';
import { getDateCode, getFilterId, convertEstTimeToUserTimeZone } from './scorecard-helper';
import { _tablePaginator } from '../../shared/table/_table-paginator';
//shared
import ErrorMessage from 'app/shared/error-message/error-message';
import Icon from '../../shared/icons/icons';
//scss
import '../../shared/table/table.scss';

/*******************************************************************************
 *  1. ScorecardGauges
 */

/*
 * 1. ScorecardGauges
 */
const ScorecardGauges = connectAndMap( [ 'views.scorecardView' ], { getGaugesData, clearGaugesData } ) (
	class extends React.Component {
		constructor( props ) {
			super( props );

			this.state = {
				slideGaugesVisible: 4,
				paginatorArray: []
			};
			this.paginatorIndex = 0;

			this.onSlideNavPaginator = this.onSlideNavPaginator.bind( this );
			this.setPaginatorArray = this.setPaginatorArray.bind( this );
			this.setTableWidth = this.setTableWidth.bind( this );

			this.onResizeListener = debounce( this.setTableWidth, 150 );
		}
		componentWillReceiveProps( nextProps, nextState ) {
			if ( nextProps.scorecardView && nextProps.scorecardView.gauges && nextProps.scorecardView.gauges.metrics ) {
				this.setPaginatorArray( nextProps );
			}
		}
		componentDidMount() {
			window.addEventListener( 'resize', this.onResizeListener, false );

			if ( this.props.scorecardView && this.props.scorecardView.gauges && this.props.scorecardView.gauges.metrics ) {
				this.setPaginatorArray( this.props );
			}
		}
		componentDidUpdate( prevProps, prevState ) {

			if ( this.props.scorecardView && this.props.scorecardView.gauges && this.props.scorecardView.gauges.metrics ) {
				this.setTableWidth();
				this.doTableSlide();
			}

			if (
				prevProps.scorecardPeriodLabel !== this.props.scorecardPeriodLabel ||
				prevProps.scorecardRankDropdownLabel !== this.props.scorecardRankDropdownLabel
			) {
				this.paginatorIndex = 0;
				this.fetchData();
			}
			if( this.paginatorIndex === 0 && isEqual( prevState.paginatorArray, this.state.paginatorArray ) === false ) {
				this.getPaginatorVisibleArray( 0 );
			}
		}
		componentWillUnmount() {
			window.removeEventListener( 'resize', this.onResizeListener, false );
		}
		fetchData() {
			if( this.props.scorecardView.criteria ){
				const criteria = Object.assign( this.props.scorecardView.criteria, {
					date: getFilterId( this.props.scorecardView.dateFilters, this.props.scorecardPeriodLabel ),
					dateCode: getDateCode( this.props.scorecardDateTabs, this.props.scorecardDateIndex ),
					rank: getFilterId( this.props.scorecardView.rankFilters, this.props.scorecardRankDropdownLabel ),
					report: null
				} );
				this.props.getGaugesData( criteria );
			}
		}
		setPaginatorArray( nextProps ) {
			const array = nextProps.scorecardView.gauges.metrics.map( ( item, index ) => {
					return item;
			} );
			this.setState( { paginatorArray: array } );
		}
		getPaginatorVisibleArray( paginatorIndex ) {

			const paginatorArray = this.state.paginatorArray.map( ( item, index ) => {
				if ( index <= 3 && paginatorIndex <= 3 ) {
					return true;
				}
				if ( index >= paginatorIndex - 3 && index <= paginatorIndex && paginatorIndex >= 3 ) {
					return true;
				} else {
					return false;
				}
			} );
			this.setState( { paginatorArray: paginatorArray } );
			this.paginatorIndex = paginatorIndex;
		}
		setTableWidth() {
			const { metrics } = this.props.scorecardView.gauges;

			if( !this.refs.slidableGauges ) {
				return false;
			}
			if ( metrics.length >= 4 ) {
				this.refs.slidableGauges.style.width = ( this.refs.slideGauges.getBoundingClientRect().width / 4 * metrics.length )	 + 'px';
			}
		}
		doTableSlide( prevState, state ) {

			if ( !this.refs.slideGauges ) {
				return false;
			}

			const gaugeWidth = this.refs.slideGauges.getBoundingClientRect().width / 4;
			const { slidableGauges } = this.refs;

			this.getPaginatorIndex = () => {
				if( 0 >= this.paginatorIndex - 3 ) {
					return 0;
				} else {
					return this.paginatorIndex - 3;
				}
			};

			slidableGauges.style.transform = 'translateX(-' + ( gaugeWidth * this.getPaginatorIndex() ) + 'px)';
		}
		onSlideNavPaginator( event, index ) {
			this.getPaginatorVisibleArray( index );
		}
		onButtonPaginator( event ) {

			const paginatorNext = ( index ) => {
				const { metrics } = this.props.scorecardView.gauges;

				if( index < 4 ) {
					return this.getPaginatorVisibleArray( 4 );
				}

				if( index === metrics.length - 1 ) {
					return false;
				}

				return this.getPaginatorVisibleArray( index + 1 );
			};

			const paginatorPrevious = ( index ) => {
				this.getPaginatorVisibleArray( index - 1 );
			};
			switch ( event.target.parentElement.className ) {
				case 'btn-next':
					paginatorNext( this.paginatorIndex );
					break;
				case 'btn-previous':
					paginatorPrevious( this.paginatorIndex );
					break;
			}
		}
		renderSlideNavPaginator() {
			const { metrics } = this.props.scorecardView.gauges;

			if( metrics.length <= 4 ) {
				 return false;
			}
			return(
				<_tablePaginator
				 _callback={ this.onSlideNavPaginator }
				 _state={ this.state.paginatorArray }
				/>
			);
		}
		renderPreviousButton() {
			const { metrics } = this.props.scorecardView.gauges;

			if ( metrics.length <= 4 ) {
				return false;
			}
			return(
				<div
					className="btn-previous"

					>
					<div className="btn-paginator" onClick={ ( event ) => { this.onButtonPaginator( event ); } }>

					</div>
					<Icon name="big-arrow"/>
				</div>
			);
		}
		renderNextButton() {
			const { metrics } = this.props.scorecardView.gauges;

			if ( metrics.length <= 4 ) {
				return false;
			}

			return(
				<div className="btn-next">
					<div className="btn-paginator" onClick={ ( event ) => { this.onButtonPaginator( event ); } } />
					<Icon name="big-arrow" />
				</div>
			);
		}
		
		showScorecardGaugesError() {
			const {
				message,
				error
			} = this.props.scorecardView;

			return (
				<ErrorMessage message={message} />
			);
		}	

		showNoResults() {
			return (
				<ErrorMessage message={"No Results to Display."} />
			);
		}	
		
		renderScorecardGauges() {
			const {
				scorecardView: {
					gauges,
				}
			} = this.props;
			let scorecard = [];

			if( this.props.scorecardView && this.props.scorecardView.gauges && this.props.scorecardView.gauges.metrics ) {
				scorecard = this.props.scorecardView.gauges.metrics;
			} else {
				return false;
			}

			return (
				<div className="scorecard-gauges-container">
					<div className="slide-table-utility">
						<span>Updated as of: { convertEstTimeToUserTimeZone( gauges.lastUpdated ) }</span> { this.renderSlideNavPaginator() }
					</div>
					<div className="scorecard-view-container">
						<div className="scorecard-gauges">
							<div className="slide-gauges-container">
								{ this.renderPreviousButton() }
								<div className="slide-gauges" ref="slideGauges">
									<div className="slidable-gauges" ref="slidableGauges">
										{ renderGauges( scorecard ) }
									</div>
								</div>
								{ this.renderNextButton() }
							</div>
						</div>
					</div>
				</div>
			);
		}
		
		render() {
			const {
				scorecardView
			} = this.props;
			
			if ( scorecardView && scorecardView.errorGauges ) {
				return this.showScorecardGaugesError();
			} else if( scorecardView.gauges && scorecardView.gauges.metrics && scorecardView.gauges.metrics.length == 0 ) {
				return this.showNoResults();
			} else {
				return this.renderScorecardGauges();
			}
		}
		
	}
);

export default ScorecardGauges;
