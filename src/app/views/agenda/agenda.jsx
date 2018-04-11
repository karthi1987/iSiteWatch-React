//libs and utilities
import React from 'react';
import { isEqual } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Moment from 'moment-timezone';
//action-creators
import { getAgendaData, openAgendaSubSheet, closeAgendaSubSheet } from './agenda-actions-reducers';
//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
//shared
import AgendaFilters from 'app/shared/filter/filters-agenda';
import ErrorMessage from 'app/shared/error-message/error-message';
import Icon from 'shared/icons/icons';
//import scss
import './agenda.scss';
//lang
import { AGENDA_VIEW } from 'app/app-lang';

/*******************************************************************************
 *  1. Agenda
 *  2. AgendaList
 *  3. AgendaRow
 *  4. AgendaSubSheet
 *  5. AgendaLinkList
 */

/*
 * 1. Agenda
 */
const Agenda = connectAndMap(
	[ 'views.agenda', 'app.session', 'app.loadingErrors', 'app.loaded' ],
	{ getAgendaData, closeAgendaSubSheet }

)(
	class extends React.Component {
		componentWillMount() {
				const hierarchyIds = this.props.agenda.hierarchy.ids;
				if( typeof hierarchyIds.office !== 'boolean' && hierarchyIds.office ) {
						this.props.getAgendaData( hierarchyIds );
				}
				if ( this.props.agenda.agendaSheetOpened ) {
					this.props.closeAgendaSubSheet();
				}
		}

		componentWillReceiveProps( nextProps ) {
			const hierarchyIds = nextProps.agenda.hierarchy.ids;
			if(
				this.props.session.refresh !== nextProps.session.refresh ||
				!isEqual( this.props.agenda.hierarchy.ids, hierarchyIds )
			) {
				this.props.getAgendaData( hierarchyIds );
			}
		}
		closeSheet() {
			$( '.agenda-row-dates-before' ).removeClass();
		}
			
		render() {
			const {
                data, agendaSheetOpened, agendaSubsheetData
            } = this.props.agenda;
            return (
                <AgendaList
                    data={ data }
                    subsheet={ agendaSheetOpened }
                    subsheetData={ agendaSheetOpened ? agendaSubsheetData : false }
                    drilldown={ this.props.agenda.drilldown }
                    hierarchy={ this.props.agenda.hierarchy }
                    getAgendaData={ this.props.getAgendaData }
                    agendaViewLoaded={ this.props.loaded.agendaViewData }
                    agendaViewError={ this.props.loadingErrors.agendaViewData } />
            );
		}
	}
);

/*
 * 2. AgendaList
 */
class AgendaList extends React.Component {

	filterData( hierarchyIds ) {
			this.props.getAgendaData( hierarchyIds );
	}

    renderAgendaList() {
        const {
                data, agendaViewLoaded, agendaViewError
        } = this.props;

        if( agendaViewLoaded && agendaViewError ) {
            return <ErrorMessage message={ agendaViewError } />;
        }else if( data ) {
            return data.agendaByMonth.map(
                        ( item, i ) =>
                        <div
                            className="agenda"
                            key={ i }>
                            <h1 className="agenda-header">{ item.header }</h1>
                                {
                                    item.agendas.length
                                    &&
                                    item.agendas.map(
                                        ( row, j ) =>
                                            <AgendaRow
                                                data={ row }
                                                key={ j }/>
                                    )
                                }
                        </div>
                    );
        }
    }
	
	render() {
		const {
				subsheet, subsheetData
		} = this.props;
		return(
			<div className="agenda-container">

				{
					( !subsheet )
					&&
					<div className="agenda-filters-wrapper">
						 <AgendaFilters drilldown={ this.props.drilldown }
								hierarchy={ this.props.hierarchy }
								filterData={ this.filterData.bind( this ) }
								view="Agenda" />
					</div>
				}

				{ this.renderAgendaList() }

				<ReactCSSTransitionGroup
					transitionName="sheet"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					transitionAppear={false}>
					{
						subsheet
						&&
						<AgendaSubSheet
							data={ subsheetData }
							key={ 'AgendaSubSheet' }/>
					}
				</ReactCSSTransitionGroup>
			</div>
		);	
	}
}

/*
 * 3. AgendaRow
 */
const AgendaRow = connectAndMap( null, { openAgendaSubSheet } )(
	class extends React.Component {
		constructor( props ) {
			super( props );
		}
		toggleAgenda() {
			window.scrollTo( 0, 0 );
			this.props.openAgendaSubSheet( this.props.data );
			webTrack( this.props.data.milestoneId );
		}
		render() {
			const{
					data
			} = this.props;
			const startMoment = Moment( data.startDate, 'MM-DD-YYYY' );
			const endMoment = Moment( data.endDate, 'MM-DD-YYYY' );
			return(
				<div
					className="agenda-row"
					onClick={
						() => {
							this.toggleAgenda();
						}
					}>
					<div className="agenda-row-dates agenda-row-dates-before">
						<div className="agenda-row-dates-month">
						{
							startMoment.format( 'MMMM' ) === endMoment.format( 'MMMM' )
							? startMoment.format( 'MMM' )
							: startMoment.format( 'MMM' ) + ' - ' + endMoment.format( 'MMM' )
						}
						</div>
						<div className="agenda-row-dates-week-of">
						{
							startMoment.format( 'D' ) + '-' + endMoment.format( 'D' )
						}
						</div>

						<div className="icon agenda-row-clipboard-icon">
							<i className="vz vz-clipboard" ></i>
						</div>

						<Icon name="right-arrow" className="agenda-row-right-arrow-mobile" />
					</div>
					<div className="agenda-row-description">
						<div className="new-flag">
						{
								( data.newAgenda === true ) ? <span>New!</span> : ''
						}
						</div>
						<div className="description-text">
								{ data.description }
						</div>
					</div>
					<div>
						<div className="agenda-row-summary" dangerouslySetInnerHTML={ { __html: data.summary } }></div>
						<Icon name="right-arrow" className="agenda-row-right-arrow" />
					</div>
				</div>
			);
		}
	}
);

/*
 * 4. AgendaSubSheet
 */
const AgendaSubSheet = connectAndMap( null, { closeAgendaSubSheet } )(
	class AgendaSubSheet extends React.Component {
		constructor( props ) {
				super( props );
		}
		toggleAgenda() {
			this.props.closeAgendaSubSheet();
		}
		render() {
			const{
					data
			} = this.props;

			const startMoment = Moment( data.startDate, 'MM-DD-YYYY' );
			const endMoment = Moment( data.endDate, 'MM-DD-YYYY' );
			return(
				<div className="agenda-details">
					<div className="agenda-details-back-wrap" onClick={ this.toggleAgenda.bind( this ) }>
						<Icon name="right-arrow" className="agenda-details-back-arrow" />
						<div className="agenda-details-back">{ AGENDA_VIEW.BACK_TO_AGENDA }</div>
					</div>
					<div className="agenda-details-wrap">
						<div className="agenda-details-date">
						{
							startMoment.format( 'MMMM' ) === endMoment.format( 'MMMM' )
							? startMoment.format( 'MMMM D' ) + ' - ' + endMoment.format( 'D' )
							: startMoment.format( 'MMMM D' ) + ' - ' + endMoment.format( 'MMMM D' )
						}
						</div>
						<div dangerouslySetInnerHTML={{ __html: data.detail }} className="agenda-details-content"></div>
						<div className="agenda-details-link">
						{
							( data.agendaLink && data.agendaLink.length )
							?
							<AgendaLinkList data={data.agendaLink} />
							:
							''
						}
						</div>
					</div>
				</div>
			);
		}
	}
);

/*
 * 5. AgendaLinkList
 */
class AgendaLinkList extends React.Component {

	agendaLink( agenda, event ) {
		event.preventDefault();
		webTrack( agenda.milestoneId );
		window.open( agenda.linkUrl, '_blank' );
	}
	render() {

		const {
				data
		} = this.props;

		return (

				<ul>

					{
						( 
							() => {
								if ( data && data.length ) {
									const agendaMapList = [];
									data.map ( 
										( item, index ) => {
											agendaMapList.push (
												<li key={ index }>
													<a href={ item.linkUrl } onClick={ this.agendaLink.bind( this, item ) }>{ item.linkText }</a>
												</li>
											);
										}
									);
									return agendaMapList;
								} else {
									return '';
								}
							}
						)()

					}

				</ul>
		);


	}

}

export default Agenda;
