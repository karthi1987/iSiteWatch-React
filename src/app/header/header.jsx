//libs and utils
import React from 'react';
import Icon from 'app/shared/icons/icons';

//scss
import './header.scss';
//lang
import { HEADER } from 'app/app-lang';
import { closeSession } from 'app/app-store';
import Avatar from 'app/shared/avatar/avatar';

import $ from 'jquery';

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
            showProfile: false,
            profileStyle: null,
            showStandardReports: false
        };

        this.userLogout = this.userLogout.bind( this );
        this.redirectTo = this.redirectTo.bind( this );
        this.showUserProfile = this.showUserProfile.bind( this );
    }

    componentDidMount() {

        if( this.refs.userProfileElement ) {
            const ProfilePosition = this.refs.userProfileElement.getBoundingClientRect();
            /* Set profile top position */
            const styles = { 'top': ProfilePosition.top + 10 +'px' };
            this.setState( { profileStyle: styles } );

            //Show Profile
            this.refs.userProfileElement.addEventListener('mouseenter', ( event ) => {
                this.showUserProfile()
            });
            this.refs.userProfileElement.addEventListener('mouseleave', ( event ) => {
                this.showUserProfile()
            });

            //Standard Reports
            this.refs.standardReports.addEventListener('mouseenter', ( event ) => {
                this.setState({ showStandardReports: !this.state.showStandardReports })
            });
            this.refs.standardReports.addEventListener('mouseleave', ( event ) => {
                this.setState({ showStandardReports: !this.state.showStandardReports })
            });
        }

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
                showProfile,
                profileStyle,
                showStandardReports
            },
            props: {
                userLogin
            }
        } = this;

        return (
            <div className="header-container">
                <div className="project-name">
                    <div className="project-name">
                        <h2>
                            <a href="#" onClick={ this.redirectTo }>
                                <span>{ HEADER.BRAND_NAME_ONE }</span><span className="stageTitle">{ HEADER.BRAND_NAME_TWO }</span>
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="current-time-block">

                   <div className="customer-support">
                       <a href="customer-support">Customer Support</a>
                   </div>

                   <div className="standard-report" ref="standardReports">
                       <div className="label">
                           Standard Reports
                           <div className="user-profile-arrow">
                               <Icon name="right-arrow" />
                           </div>
                       </div>
                       {
                           showStandardReports && profileStyle
                           && <div className="container" style={ profileStyle }>
                               <ul className="list-group  no-padding">
                                   <li className="list-group-item clearfix d-block">
                                       <a href="#">Download as HTML</a>
                                   </li>
                                   <li className="list-group-item clearfix d-block">
                                       <a href="#">Download as PDF</a>
                                   </li>
                               </ul>
                           </div>
                       }

                   </div>

                   <div className="user-profile" ref="userProfileElement">
                       <div className="user-name" onClick={ this.showUserProfile }>
                           {
                               this.props.userLogin
                               && <Avatar avatar="true" firstname={ this.props.userLogin } />
                           }
                           <div className="user-profile-arrow">
                               <Icon name="right-arrow" />
                           </div>
                       </div>
                        {
                           showProfile && profileStyle
                           && <div className="user-profile-details" ref="userProfileDetails" style={ profileStyle }>
                                <ul className="list-group  no-padding">
                                   <li className="list-group-item clearfix d-block">
                                       <a href="#" > &nbsp; Profile </a>
                                   </li>
                                    <li className="list-group-item clearfix d-block">
                                       <a href="#" > &nbsp; Settings </a>
                                   </li>
                                    <li className="list-group-item clearfix d-block">
                                       <a href="#" onClick={ this.userLogout }> &nbsp; Logout </a>
                                   </li>
                                </ul>
                           </div>
                        }
                   </div>
               </div>
            </div>
        );
    }
}
