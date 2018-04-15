import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDashboardProjectsData, getDashboardLocationsData, getDashboardLocationEventsData, showToggleItems } from './dashboard-actions-reducers.js';
import { _selectBox } from 'app/shared/dropdown/selectbox';
import { _dropdown } from 'app/shared/dropdown/dropdown';

import Icon from 'app/shared/icons/icons';
import classnames from 'classnames';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//scss
import './dashboard.scss';

const ProjectDeleteModify = [
    {
        'label': 'Delete',
        'id': 'delete',
        'value': 'Delete'
    },
    {
        'label': 'Modify',
        'id': 'modify',
        'value': 'Modify'
    }
]
/*
 *  1. Dashboard
 */

class DashboardModule extends React.Component {

     constructor( props ) {
        super( props );

        this.eventsTimeOut;
        this.onProjectSelection = this.onProjectSelection.bind( this );
        this.onProjectActions = this.onProjectActions.bind( this );
        this.onDashboardTileClick = this.onDashboardTileClick.bind( this );
        this.onTileClickToggleItem = this.onTileClickToggleItem.bind( this );
        this.checkIfDashboardLocationsIsAvailable = this.checkIfDashboardLocationsIsAvailable.bind( this );
    }

    componentDidMount() {

        const self = this;
        this.eventsTimeOut = setInterval(
            ( ) => {
                this.checkIfDashboardLocationsIsAvailable();
            }, 1000
        );
    }

    componentWillMount() {
        this.props.actions.getDashboardProjectsData( { session: this.props.app.session, user: this.props.app.user } );
        this.props.actions.getDashboardLocationsData( { session: this.props.app.session, user: this.props.app.user } );
    }

    componentWillUnmount() {
        clearInterval( this.eventsTimeOut );
    }

    onProjectSelection( event, id, name, city ) {
        //debugger;
    }

    onProjectActions( event, id, name ) {

    }

    onDashboardTileClick( info ) {
        browserHistory.push( APP_PATH + '/zone/'+info.location_id );
    }

    onTileClickToggleItem( info ) {
        this.props.actions.showToggleItems( info );
    }

    checkIfDashboardLocationsIsAvailable() {
        const {
            dashboard
        } = this.props;

        const self = this;
        if( dashboard && dashboard.data ) {
            const dashboardResults = dashboard.data;
            const dashboardLocations = dashboardResults.locations;
            if( dashboardLocations && dashboardLocations.length > 0 ) {
                clearInterval( this.eventsTimeOut );
                for( var i = 0; i < dashboardLocations.length; i++ ) {
                    //To do: Make Locations Events call
                    self.props.actions.getDashboardLocationEventsData(
                        {
                            session: self.props.app.session,
                            user: self.props.app.user,
                            location_id: dashboardLocations[ i ].location_id,
                            site_id: dashboardLocations[ i ].site_id
                        }
                    );
                }
            } 
        }
    }
    render() {
        const {
            app: {
                loading: {
                    dashboardLocationsModuleData,
                    dashboardModuleData
                }, loaded, session, user, viewport
            },
            dashboard: { data }
        } = this.props;

        if( !data ) {
            return false;
        }

        if( data.projects && data.projects.length > 0 && data.locations && data.locations.length > 0 ) {
            return(
                <div className="page-dashboard">
                    <h2>Dashboard</h2>
                    <div className="horizontal-line"></div>
                    <div className="projects">
                        <_selectBox
                            _label={ data.projects[ 0 ].site_name + ' ' + data.projects[ 0 ].site_city }
                            _state={ data.projects }
                            _callback={ this.onProjectSelection }
                        />
                        <div className="projects-user-actions">
                            <button className="button-create button button-primary">
                            Create &nbsp;
                            </button>
                            <div className="delete-modify-project">
                                <_dropdown
                                    _label={ ProjectDeleteModify[ 0 ].label }
                                    _state={ ProjectDeleteModify }
                                    _callback={ this.onProjectActions }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="page-memo">
                         <h3>Simply Click On The Picture For Additional Zone Level Details</h3>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="locations">
                        { LocationsTemplate( data, this.onDashboardTileClick, this.onTileClickToggleItem ) }
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }            
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
        dashboard: state.views.home.modules.dashboard || []
      };
    },
    (dispatch) => {
      return {
        actions: bindActionCreators({
            getDashboardProjectsData,
            getDashboardLocationsData,
            getDashboardLocationEventsData,
            showToggleItems
        }, dispatch)
    }
}

)(DashboardModule);


// Locations template
const LocationsTemplate = ( props, _callback, _actionCallback ) => {

    if( !props.locations ) {
        return false;
    }

    const invokeCallback = ( item ) => {
        return _callback( item );
    }

    const locationsOutput = [];
    const combinedLocations = props.locations.map( ( item, index ) => {
      locationsOutput.push (
            <div
                className="col-md-5"
                key={ index }
            >
                <div className="box box-widget widget-user" >
                    <div className="widget-user-header bg-black img-fluid location-tile" onClick={ ( event ) => {
                    invokeCallback( item );
                  } }>
                        <div style={ {'backgroundImage': 'url(' + item.image + ')',  'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat', 'width': '100%', 'height': '200px' } }></div>
                    </div>
                    <div className="box-footer">
                        <div className="box box-primary direct-chat direct-chat-primary collapsed-box">
                            <div className="box-header with-border">
                                <h3 className="box-title">{ item.location_name }</h3>
                                <div className="box-tools pull-right">
                                    {
                                        item
                                        && item.events
                                        && item.events.length > 0 
                                        && <LocationsEventsComponent { ...item } />
                                    }
                                    <button className="btn btn-box-tool" data-widget="collapse" type="button" onClick={
                                        ( event ) => {
                                            _actionCallback( item );
                                        }
                                    }>
                                        <Icon name="plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="box-body">
                                {
                                    item.show
                                    &&
                                    <ReactCSSTransitionGroup
                                      transitionName="toggle-fade-in"
                                      transitionEnterTimeout={500}
                                      transitionLeaveTimeout={300}>
                                       <LocationToggleContent { ...item }/>
                                    </ReactCSSTransitionGroup>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    } );

    return(
        <div className="outer-locations">
            { locationsOutput }
        </div>
    );
};

const LocationsEventsComponent = ( props ) => {

    if( !props.events ) {
        return <div />;
    }

    return(
        <div className="box-tools-wrapper">
        {
            props.events
            && props.events.map(
                ( event, index ) => 
                 <span key={ index } className={ classnames(
                            'badge',
                            {
                                'bg-red': event.event_message == 'alert',
                                'bg-warning': event.event_message == 'warning',
                                'bg-light-blue': event.event_message == 'message'
                            }
                        ) }
                      data-toggle="tooltip"
                    title={ event.event_value && event.event_value.length }>
                    <strong>{ event.event_value && event.event_value.length }</strong>
                </span>
            )
        }
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
