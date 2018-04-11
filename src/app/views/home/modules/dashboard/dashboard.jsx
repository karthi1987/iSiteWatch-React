import React from 'react';
import { browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDashboardProjectsData, getDashboardLocationsData } from './dashboard-actions-reducers.js';

import { _selectBox } from 'app/shared/dropdown/selectbox';

//scss
import './dashboard.scss';

/*
 *  1. Dashboard
 */

class DashboardModule extends React.Component {

     constructor( props ) {
        super( props );

        this.onProjectSelection = this.onProjectSelection.bind( this );
        this.onDashboardTileClick = this.onDashboardTileClick.bind( this );
    }

    componentWillMount() {
        this.props.actions.getDashboardProjectsData( { session: this.props.app.session, user: this.props.app.user } );
        this.props.actions.getDashboardLocationsData( { session: this.props.app.session, user: this.props.app.user } );
    }

    onProjectSelection( event, id, name, city ) {
        //debugger;
    }

    onDashboardTileClick( info ) {
        browserHistory.push( APP_PATH + '/zone/'+info.location_id );
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
                    <h2>Dashboard!</h2>
                    <div className="horizontal-line"></div>
                    <div className="projects">
                        <_selectBox
                            _label={ data.projects[ 0 ].site_name + ' ' + data.projects[ 0 ].site_city }
                            _state={ data.projects }
                            _callback={ this.onProjectSelection }
                        />
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="page-memo">
                         <h3>Simply Click On The Picture For Additional Zone Level Details</h3>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="locations">
                        { LocationsTemplate( data, this.onDashboardTileClick ) }
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
            getDashboardLocationsData
        }, dispatch)
    }
}

)(DashboardModule);


// Locations template
const LocationsTemplate = ( props, _callback ) => {

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
                                    <span className="badge bg-red" data-toggle="tooltip" title="3 Alerts">2</span>
                                    <button className="btn btn-box-tool" data-widget="collapse" type="button">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="box-body"></div>
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
