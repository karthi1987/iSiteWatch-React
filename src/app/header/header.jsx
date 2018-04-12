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
        this.redirectTo = this.redirectTo.bind( this );
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

    redirectTo( event ) {
        event.preventDefault();
        window.location.assign( window.location.origin + APP_PATH + '/home');
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
            },
            props: {
                userLogin
            }
        } = this;

        return (
            <div className="header-container">
                <div className="logo-block">
                    <div className="project-name">
                        <h2>
                            <a href="#" onClick={ this.redirectTo }>
                                <span>{ HEADER.BRAND_NAME_ONE }</span><span className="stageTitle"></span>
                            </a>
                        </h2>
                    </div>
                </div>
                 <div className="current-time-block">
                    <div>
                        {
                            this.props.userLogin
                            &&
                            <p>{ this.props.userLogin }&nbsp; </p>
                         }
                    </div>
                    <div>
                        <a href="customer-support">Customer Support | </a>
                        <a href="#" onClick={ this.userLogout }> &nbsp; Logout </a>
                    </div>
                </div>
                <div className="current-time-block">
                    <h2>{ date } <br/>
                    <span className="timestamp"><strong>{ time } <span className="time-of-day">{ timeOfDay }</span></strong></span></h2>
                </div>
            </div>
        );
    }
}
