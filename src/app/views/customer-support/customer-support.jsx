import React from 'react';
import { browserHistory } from 'react-router';

import Icon from 'app/shared/icons/icons';

import 'app/views/home/home.scss';
import './customer-support.scss';

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
 *  1. Dashboard
 */

class CustomerSupport extends React.Component {

    constructor( props ) {
        super( props );

    }

    componentWillMount() {
        //To do:
    }
    render() {
        return(
            <div className="Home">
                <div className="module-container">
                    <div className="module-wrapper">
                        <div className="module-grid single">
                            <HomeCell module="Customer-support-module">
                                <div className="customer-support">
                                    <h2>Customer Support</h2>
                                    <div className="horizontal-line"></div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 email-us">
                                        <div>
                                            <Icon name="mail" viewBox="-269 191 100 100" />
                                        </div>
                                        <a href="mailto:support@iSiteWatch.com">Email us</a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 give-us-call">
                                        <div>
                                            <Icon name="calling" viewBox="-269 191 100 100" />
                                        </div>
                                        <a href="tel:+16124522224">Give us a call</a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 lets-chat">
                                        <div>
                                            <Icon name="customer-support" viewBox="0 0 58 59" />
                                        </div>
                                        <a href="javascript:void(0)">Let's chat</a>
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

export default CustomerSupport;