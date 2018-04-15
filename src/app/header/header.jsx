//libs and utils
import React from 'react';
import Icon from 'app/shared/icons/icons';

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
            showProfile: false
        };

        this.userLogout = this.userLogout.bind( this );
        this.redirectTo = this.redirectTo.bind( this );
        this.showUserProfile = this.showUserProfile.bind( this );
    }

    showUserProfile() {
        this.setState( {
            showProfile: !this.state.showProfile
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

    componentWillUnmount() {
        //clearInterval( this.timestampInterval );
    }

    render() {
        const {
            state: {
                showProfile
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
                    <div className="customer-support">
                        <a href="customer-support">Customer Support</a>
                    </div>
                    <div className="user-profile">
                        <div className="user-name">
                            {
                                this.props.userLogin
                                && <p>{ this.props.userLogin }&nbsp; </p>
                            }
                        </div>
                        <div className="user-profile-arrow" onClick={ this.showUserProfile }>
                            <Icon name="right-arrow" />
                        </div>
                         {
                            showProfile
                            && <div className="user-profile-details">
                                 <ul className="list-group  no-padding">
                                     <li className="list-group-item clearfix d-block"><a href="#" onClick={ this.userLogout }> &nbsp; Logout </a></li>
                                 </ul>
                            </div>
                         }
                    </div>
                </div>
            </div>
        );
    }
}
