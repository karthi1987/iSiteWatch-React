import React from 'react';
import { connectAndMap } from 'utils/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageGallery from 'react-image-gallery';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types'; // ES6
import classnames from 'classnames';

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
        this.getLocationInfo = this.getLocationInfo.bind(this);
        this.datePreviewChange = this.datePreviewChange.bind(this);
        this.setLocationsTemplate = this.setLocationsTemplate.bind(this);
    }

    componentWillMount() {
        const {
            app: { session, user },
            params: { id },
            dashboard: { data }
        } = this.props;

    	this.props.actions.loadZoneData({ 
            session: this.props.app.session,
            user: this.props.app.user,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            locationId: this.props.params.id,
            dashboardInfo: data.locations || []
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
        this.props.actions.setSelectedDate( moment(selectedDate) );
    }

    datePreviewChange( item ) {
        this.props.actions.setSelectedDate( moment(item.label) );
    }

    getLocationInfo() {
        const {
            dashboard: { data }
        } = this.props;
        let location = [];
        if ( data && data.locations && data.locations.length > 0 ) {
          const filteredLocation = _.filter( data.locations, { 'location_id': this.props.params.id } );
          if( filteredLocation && filteredLocation.length > 0 ) {
            location = filteredLocation[ 0 ];
          }
        }
        return location;
    }

    setLocationsTemplate() {
        const locationInfo = this.getLocationInfo();
        if( locationInfo ) {
            return <LocationToggleContent { ...locationInfo }/>;
        }
        return <div />;
    }

    render() {

    	const {
            app: {
                loading, loaded, session, user, viewport
            },
            dashboard: { data },
            zone
        } = this.props;

        let LocationName = 'Zone Name';
        if ( data && data.locations.length > 0 ) {
          const filteredLocation = _.filter( data.locations, { 'location_id': this.props.params.id } );
          if( filteredLocation && filteredLocation.length > 0 ) {
            LocationName = filteredLocation[ 0 ].location_name;
          }
        }

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
                                	<h2>{ LocationName } DETAIL & 1 WEEK HISTORY</h2>
                                	<div className="horizontal-line"></div>
                                    <h3>Simply change the date for additional pictures</h3>
                                    {
                                        this.state.selectedItem
                                        && this.state.selectedItem.label
                                        && <DatePicker
                                            selected={ moment( this.state.selectedItem.label ) }
                                            onChange={ ( eventDate ) => { this.handleChange( eventDate ) } }
                                            minDate={ moment().subtract(6, "days") }
                                            maxDate={ moment() }
                                        />
                                    }
								    <div className="horizontal-line"></div>
                                </div>
                                <div className="zone-hero-image-date-thumbnails">
                                    <div className="hero-container">
                                        {
                                            this.state.selectedItem.items
                                            && this.state.selectedItem.items.length
                                            && this.state.selectedItem.items.length > 0
                                            && <ImageGallery
                                                lazyload="true"
                                                items={ this.state.selectedItem.items }
                                            />
                                        }
                                    </div>
                                    <div className="date-container">
                                        {   
                                            zone.data
                                            && zone.data.oneWeekDay
                                            && zone.data.oneWeekDay.length > 0
                                            && <ThumbnailsDates
                                                { ...zone.data }
                                                { ...this.state.selectedItem }
                                                datePreviewChange={ this.datePreviewChange }
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="location-details">
                                    { this.setLocationsTemplate() }
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
    /* Render Images */
    const imagePath = APP_PATH + "/assets/images/no-image-available.png";
    const renderFullImages = [];
    const renderImages = () => {
        oneWeekDay
        && oneWeekDay.length > 0
        && oneWeekDay.map(
            ( metric, i ) => {
                metric.show
                &&
                renderFullImages.push(
                    <div key={ i } className="metric" onClick={ ( event ) => {
                        datePreviewChange( metric );
                    } }>
                        <div className="value"> {  moment(metric.label).format('YYYY-MM-DD') } </div>
                        <div className="label">
                            {
                                metric.items
                                && metric.items.length > 0
                                && metric.items[ 0 ]
                                && metric.items[ 0 ].thumbnail
                                && <img src={ metric.items[ 0 ].thumbnail }  width="200"/>
                            }
                            {
                                metric.items
                                && !metric.items.length
                                && <img src={ imagePath } width="200"/>
                            }
                        </div>
                    </div>
                );
            }
        );
        return renderFullImages;
    };

    return(
        <div className="thumbnail-parent-wrapper">
            { renderImages() }
        </div>
    );
}

/* 
 * Location Toggle content 
 *
 */

const LocationToggleContent = ( props ) => {

    if( !props ) {
        return <div />;
    }

    const combinedResults = [];
    props.events
    && props.events.length
    && props.events.length > 0
    && props.events.map(
        ( prop, index ) => {
            prop
            && prop.event_value
            && prop.event_value.length > 0
            && prop.event_value.map(
                ( item, idx ) => {
                    combinedResults.push(
                        <li key={ index +'-'+idx } className="list-group-item clearfix d-block">
                            <i className="fa fa-industry fa-fw"></i>{ item.sensor_id }
                                <span className={ classnames(
                                    'float-right text-muted small',
                                    {
                                        'bg-red': item.event_level == 'alert',
                                        'bg-warning': item.event_level == 'warning',
                                        'bg-light-blue': item.event_level == 'message'
                                    }
                                ) }>
                                    <em>{ item.event_value }</em>
                                </span>
                        </li>
                    );
                }
            );
        }
    );

    combinedResults.push(
        <li key="unique-coordinates" className="list-group-item clearfix d-block">
            <i className="fa fa-id-card-o fa-fw"></i> GEO Coordinates
            <span className="float-right text-muted small">
                <em>{ props.location_location }</em>
            </span>
        </li>);
    combinedResults.push(<li key="unique-updated" className="list-group-item clearfix d-block">
            <i className="fa fa-object-group fa-fw"></i> Last update
            <span className="float-right text-muted small">
                <em>{ moment(props.location_lastupdate).format('YYYY-MM-DD hh:mm') }</em>
            </span>
        </li>
    );

    return(
         <div className="list-group  no-padding">
            <ul>
                 { combinedResults }
            </ul>
        </div>
    );
}
