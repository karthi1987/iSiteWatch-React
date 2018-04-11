//libs and utils
import React from 'react';
//utils
import { grabTimestamp } from 'utils/utils';
//scss
import './header.scss';
//lang
import { HEADER } from 'app/app-lang';

import { closeSession } from 'app/app-store';

/*******************************************************************************
 *  1. Header
 */


/*
 * 1. Header
 */
export default class Header extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            timestamp: {
                date: null,
                time: null,
                timeOfDay: null
            }
        };

        this.userLogout = this.userLogout.bind( this );
    }

    updateTimeStamp() {
        const timestamp = grabTimestamp();
        this.setState( {
            timestamp: {
                date: timestamp.date,
                time: timestamp.time,
                timeOfDay: timestamp.timeOfDay
            }
        } );
    }

    userLogout( event ) {
        event.preventDefault();
        window.location.assign( window.location.origin + APP_PATH + '/login/');
        //closeSession();
    }

    /*
     * when header first renders, we add our timestamp and set the interval, 
     * to update the current-time-block once every 5 minutes. 
     */
    componentDidMount() {
        this.updateTimeStamp();
        this.timestampInterval = setInterval( this.updateTimeStamp.bind( this ), 30000 );
    }

    componentWillUnmount() {
        clearInterval( this.timestampInterval );
    }

    render() {
        const {
            state: {
                timestamp: { date, timeOfDay, time }
            }
        } = this;

        return (
            <div className="header-container">
                <div className="logo-block">
                    <div className="project-name">
                        <h2><span>{ HEADER.BRAND_NAME_ONE }</span><span className="stageTitle"></span></h2>
                    </div>
                </div>

                 <div className="current-time-block">
                    <a href="#" onClick={ this.userLogout }> Logout </a>
                </div>

                <div className="current-time-block">
                    <h2>{ date } <br/>
                    <span className="timestamp"><strong>{ time } <span className="time-of-day">{ timeOfDay }</span></strong></span></h2>
                </div>

            </div>
        );
    }
}
