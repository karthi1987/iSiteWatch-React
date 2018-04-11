import React from 'react';
import { connectAndMap } from 'utils/utils';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageGallery from 'react-image-gallery';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import PropTypes from 'prop-types'; // ES6

import { loadZoneData, setSelectedDate } from './zone-actions-reducers';

import "node_modules/react-image-gallery/styles/scss/image-gallery.scss";

import 'react-datepicker/dist/react-datepicker.css';

//scss
import 'app/views/home/home.scss';
import './zone.scss';

const HomeCell = ( props ) => (
    <div className={ `Home_cell Home_cell--${ props.module }` }>
        <div className="Home_cellInner">
            <div className="Home_cellContent">
                { props.children }
            </div>
        </div>
    </div>
);


/*
 *  1. Zone
 */

class ZoneModule extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
        	startDate: moment().subtract(7, "days"),
        	endDate: moment(),
        	optedDate: moment().subtract(1, "days"),
        	selectedItem: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.datePreviewChange = this.datePreviewChange.bind(this);
    }

    componentWillMount() {
    	this.props.actions.loadZoneData({ 
            session: this.props.app.session,
            user: this.props.app.user, 
            startDate: this.state.startDate,
            endDate: this.state.endDate
        });
    }

    componentWillReceiveProps( nextProps, nextState ) {
    	const thisProps = this.props;
    	const futureProps = nextProps;
    	if( 
    		futureProps.zone 
    		&& futureProps.zone.data 
    		&& futureProps.zone.data.oneWeekDay
    		&& futureProps.zone.data.oneWeekDay[ 0 ]
    		&& futureProps.zone.data.oneWeekDay[ 0 ].items
    		&& futureProps.zone.data.oneWeekDay[ 0 ].items.length > 0
    	) {
    		const thisZoneItems = futureProps.zone.data.oneWeekDay;
    		const returnValue = _.filter( thisZoneItems, ( item, index ) => {
					return ( item.show == false );
				} );

    		if( returnValue && returnValue.length > 0 ) {
    			this.setState( { selectedItem: returnValue[ 0 ] } );
    		}
    	}
    }

    handleChange( selectedDate ) {
        this.props.setSelectedDate( selectedDate );
    }

    datePreviewChange( item ) {
        this.props.setSelectedDate( moment(item.label) );
    }

    render() {

    	const {
            app: {
                loading, loaded, session, user, viewport
            },
            dashboard: { data },
            zone
        } = this.props;

        if( !this.state.selectedItem ) {
        	return false;
        }

    	return(
    		<div className="Home">
                <div className="module-container">
                    <div className="module-wrapper">
                        <div className="module-grid single">
                            <HomeCell module="scorecardmodule">
                            <div className="zone-page">
                                <div>
                                	Zone page
                                	<div className="horizontal-line"></div>
                                    {
                                        this.state.selectedItem
                                        && this.state.selectedItem.label
                                        && <DatePicker
                                            selected={ moment( this.state.selectedItem.label ) }
                                            onChange={ this.handleChange }
                                            minDate={ moment().subtract(6, "days") }
                                            maxDate={ moment() }
                                        />
                                    }
								    <div className="horizontal-line"></div>
                                </div>
                                <div className="zone-hero-image-date-thumbnails">
                                    <div className="hero-container">
                                        <ImageGallery items={ this.state.selectedItem.items } />
                                    </div>
                                    <div className="date-container">
                                        {   
                                            zone.data
                                            && zone.data.oneWeekDay
                                            && zone.data.oneWeekDay.length > 0
                                            && <ThumbnailsDates 
                                                { ...zone.data }
                                                datePreviewChange={ this.datePreviewChange }
                                            />
                                        }
                                    </div>
                                </div>
                             </div>
                            </HomeCell>
                        </div>
                    </div>
                </div>
            </div>
    	);
    }
}

/*
 *  2. Connect and BindActionsReducers
 */
export default connect(
    (state) => {
      return {
        app: state.app,
        session: state.app.session, 
        dashboard: state.views.home.modules.dashboard || [],
        zone: state.views.zone
      };
    },
    (dispatch) => {
      return {
        actions: bindActionCreators({
            loadZoneData,
            setSelectedDate
        }, dispatch)
    }
}

)(ZoneModule);


const ThumbnailsDates = ( { oneWeekDay, datePreviewChange } ) => {

    return(
        <div className="thumbnail-parent-wrapper">
            {
                oneWeekDay
                && oneWeekDay.map(
                    ( metric, i ) => 
                    <div key={ i } className="metric" onClick={ ( ) => {
                        datePreviewChange( metric );
                    } }>
                        <div className="value"> {  moment(metric.label).format('YYY-MM-DD') } </div>
                        <div className="label">
                            {
                                metric.items
                                && metric.items.length > 0
                                && <img src={ metric.items[ 0 ].original }  width="200"/>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}