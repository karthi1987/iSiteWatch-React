//libs and utils
import 'babel-polyfill';
import 'web-animations-js';
import React from 'react';
import { render }  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { connectAndMap, ssoCheckToken, rvCheck } from 'utils/utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isEqual from 'lodash/isEqual';
//app store
import AppStore from './app-store';
//actionCreatiors
import {
    emulatorSession,
    rvHostSession,
    checkSession,
    checkStaticToken,
    triggerRefresh,
    getViewportSize,
    extendSession,
    getRoute,
    setRvHostStatus,
    LogServerResponse,
    setRvInitialization
} from './app-store';
import { loadNav } from './nav/nav-actions-reducers';
//utils
import { setCoreREMSize, disableResize, msViewPortFix, getRandomIntInclusive } from './utils/utils';
//shared
import Header from './header/header';
import TickerView from './shared/ticker/ticker-view';
import { Nav, NavItem } from './nav/nav';
import Overlay from 'app/shared/overlay/overlay';
import { Loader } from 'app/shared/loader/loader';
import AttractLoop from 'app/shared/attract-loop/attract-loop';
import { resetAttractLoopTimeout } from 'app/shared/attract-loop/attract-loop-actions-reducers';
//helpers
import {
    Page404,
    PageNotAvailable,
    PageNotAuthorized,
    RvError,
    ScoreCardDrillDownReportTab,
    RvInitializing
} from './app-helpers';
//scss
import '../framework/scss/app.scss';

/*******************************************************************************
 *  1. App (root level component)
 *  2. AppRouter
 *  3. App Provider and DOM Render
 *  4. Require Ensures
 */

/*
 * 1. App (root level component)
 */
const App = connectAndMap(
    [ 'app', 'app.session', 'nav', 'attractLoop' ],
    {
        emulatorSession,
        rvHostSession,
        checkSession,
        checkStaticToken,
        extendSession,
        triggerRefresh,
        getViewportSize,
        extendSession,
        getRoute,
        loadNav,
        resetAttractLoopTimeout,
        setRvHostStatus,
        setRvInitialization
    }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            /*
             * set our default reboot timeout status
             */
            this.state = {
                rebootTimeoutCleared: false,
                rebootTimeoutSet: false
            };
        }

        /*
         * before the app mounts, we find out where the app is being accessed.
         * can either be from emulator, in which we get an ssoToken,
         * or a reflect player, in which we get RV data,
         * or in our local environment.
         */
        componentWillMount() {

            const pathname = this.props.location.pathname;
            const ssoToken = ssoCheckToken();
            const RV = rvCheck() || LOCAL_RV_TEST;

            if(
                pathname !== APP_PATH + '/' &&
                pathname !== APP_PATH + '/login/' &&
                pathname !== APP_PATH + '/service-notavailable' &&
                pathname !== APP_PATH + '/non-authorized'
            ) {
                /*
                 * if all of the above conditions are not true, then we are
                 * developing locally, and we checkSession to access any needed
                 * values in localStorage
                 */
                this.props.checkSession();

            }
        }

        /*
         * if we receive an ssoToken in the path, the app is being accessed via emulator.
         * we then call emulatorSession and route to home page.
         */
        handleSsoToken( ssoToken ) {
            this.props.emulatorSession( ssoToken );
            browserHistory.push( APP_PATH + '/home' );
        }

        /*
         * if we don't have an ssoToken, and we are able to succesfully pull data from rvhost.js,
         * then the app is being accessed on a reflect player.
         */
        handleRvHost( RV ) {

            /*
             * sets a flag in state that the app can use to determine
             * if app is being accessed in reflect player.
             */
            this.props.setRvHostStatus();

            /*
             * stagger our rvHostSession by anywhere from 0 to 2 minutes,
             * to decrease the load on our database server distribution
             */
            const randomTimeout = getRandomIntInclusive( 0, 120000 );
            this.props.setRvInitialization( true );

            setTimeout(
                () => {

                    /*
                     * we then call rvHostSession, set initialization to false
                     * and route to home page.
                     */
                    this.props.rvHostSession( RV.hostInfo, RV.classifications );
                    this.props.setRvInitialization( false );
                    browserHistory.push( APP_PATH + '/home' );
                },
                randomTimeout
            );
        }

        /*
         * whenever the app receives data,
         * there is a session check and control,
         * and a refresh check and control.
         */
        componentWillReceiveProps( nextProps ) {
            this.checkSession( nextProps );
            //this.controlSession( nextProps );
        }

        /*
         * when the app first mounts,
         * set DOM specific behaviors
         */
        componentDidMount() {
            this.props.getViewportSize();
            setCoreREMSize();
            msViewPortFix();
        }

        /*
         * checks the state of the active flag,
         * and executes methods appropriately.
         */
        checkSession( nextProps ) {
            //debugger;
            const session = nextProps.session;
            const localSessionInactive = !this.props.session.checked && session.checked && !session.active;
            const sessionDeactivated = this.props.session.active && !nextProps.session.active;
            const sessionActivated = !this.props.session.active && session.active;
            if ( localSessionInactive || sessionDeactivated ) {
                this.clearIntervals();
                browserHistory.push( APP_PATH + '/login/' );
            } else if( sessionActivated ) {
                /*
                 * if our session has just been activated,
                 * set our intervals and load our nav
                 */
                //this.props.loadNav();
            }
        }

        /*
         * check and clear all intervals, in preparation for logout page routing,
         * or rendering of RvError.
         * attractLoopTimeout gets cleared in AttractLoop componentWillUnmount lifecycle method
         */
        clearIntervals() {
            if ( this.staticCheckInterval ) {
                clearInterval( this.staticCheckInterval );
            }
            if ( this.refreshInterval ) {
                clearInterval( this.refreshInterval );
            }
            this.clearSessionInterval();
        }

        /*
         * every 5 minutes, make a call to check staticToken.
         */
        setStaticCheckInterval() {
            this.staticCheckInterval = setInterval( this.props.checkStaticToken, 120000 );
        }

        /*
         * every 5 minutes, trigger a data refresh for current view
         */
        setRefreshInterval() {
            this.refreshInterval = setInterval( this.props.triggerRefresh, 300000 );
        }

        /*
         * make a call to extend the session at an interval set by a tokenRefreshStart value
         * returned from the server
         */
        setSessionInterval( nextProps ) {
            this.sessionInterval = setInterval( this.props.extendSession, nextProps.session.tokenRefreshStart );
        }

        /*
         * the below method controls our session behavior
         */
        controlSession( nextProps ) {

            /*
             * if we receive a new tokenRefreshStart value from the service,
             * clear and reset our session interval
             */
            if ( this.props.session.tokenRefreshStart !== nextProps.session.tokenRefreshStart ) {
                this.clearSessionInterval();
                this.setSessionInterval( nextProps );
            }

            /*
             * if app is no longer suppose to be active, clear the session interval.
             */
            if ( !nextProps.session.active ) {
                this.clearSessionInterval();
            }

            /*
             * if we receive a new staticToken, we reboot the app
             */
            if ( this.props.session.active && this.props.session.staticToken !== nextProps.session.staticToken ) {
                window.location.assign( window.location.origin + APP_PATH );
            }
        }

        /*
         * clear the session interval
         */
        clearSessionInterval() {
            if( this.sessionInterval ) {
                clearInterval( this.sessionInterval );
            }
        }

        /*
         * if we receive a different refresh timestamp, reload nav data
         */
        checkRefresh( nextProps ) {
            const refresh = this.props.session.refresh !== nextProps.session.refresh;
            if( this.props.session.active && refresh ) {
                //this.props.loadNav();
            }
        }

        /*
         * attractLoop behaviour affects if we refresh or not,
         * and the below functionality controls that
         */
        controlRefresh( nextProps ) {

        }

        /*
         * return our navigation
         */
        renderNav() {
            const{
                nav, location, app: { session }
            } = this.props;

            return <div></div>;
        }

        /*
         * if we are on an approved route, return children.
         * if we are on a reflect player, but are not authenticated, show the RvError
         */
        renderChildren() {
            const {
                children, app: { session, route }
            } = this.props;

            const approvedRoute = (
                route === APP_PATH + '/login/' ||
                route === APP_PATH + '/service-notavailable' ||
                route === APP_PATH + '/non-authorized' ||
                route === APP_PATH + '/logout/'
            );

            if ( session.active || approvedRoute ) {
                return children;
            } else if ( !session.active ) {
                return <RvError />;
            }
        }

        /*
         * app will reboot in 15 minutes if reflectAuthenticate fails
         */
        setRebootTimeout() {
            LOGSERVERRESPONSE && LogServerResponse( { 'setRebootTimeout': true } );
            this.rebootTimeout = setTimeout( () => { window.location.assign( window.location.origin + APP_PATH ); }, 900000 );
        }

        /*
         * clear rebootTimeout if reflectAuthenticate is successful, and we haven't already cleared the timeout
         */
        clearRebootTimeout() {
            if( !this.state.rebootTimeoutCleared ) {
                LOGSERVERRESPONSE && LogServerResponse( { 'clearRebootTimeout': true } );
                clearTimeout( this.rebootTimeout );
            }

        }

        /*
         * render our loader, which will show whenever we are loading view data
         */
        renderLoader() {
            const{
                route, loading, viewport
            } = this.props.app;

            const showLoader = (
                route !== APP_PATH + '/home' &&
                route !== APP_PATH + '/service-notavailable' &&
                route !== APP_PATH + '/non-authorized' &&
                route !== APP_PATH + '/logout/'
            );

            if( showLoader ) {
                return <Loader
                        page={ this.page }
                        loading={ loading }
                        type="view"
                        overlayHeight={ viewport.height }
                        loadCodes={ [ 'View' ] } />;
            }
        }

        render() {
            const{
               app: { session, user }
            } = this.props;
            return (
                <div className="app-wrapper">
                    <div>
                        <div className="app-container">
                            <nav className="nav">
                                { this.renderNav() }
                                {
                                    ( session.active && user )
                                    &&
                                    <Header { ...user } />
                                }

                                <ReactCSSTransitionGroup
                                    transitionName="fold-transition"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnterTimeout={750}
                                    transitionLeaveTimeout={500}
                                    component="div"
                                    className="page-container">
                                    <div className="page" ref={ ( ref ) => this.page = ref }>
                                        { this.renderChildren() }
                                    </div>
                                </ReactCSSTransitionGroup>
                            </nav>
                            { this.renderLoader() }
                        </div>
                    </div>
                </div>
            );
        }
    }
);

/*
 * 2. AppRouter
 */
const AppRouter = props => (
    <Router history={ browserHistory } onUpdate={ getRoute }>
        <Route path={ APP_PATH } component={ App }>
            <Route path="login/" getComponent={ requireLoginComponent } />
            <Route path="login/backdoor" getComponent={ requireBackdoorLoginComponent } />
            <Route path="logout/" getComponent={ requireLogoutComponent } />
            <Route path="home" getComponent={ requireHomeComponent } />
            <Route path="customer-support" getComponent={ requireCustomerSupportComponent } />
            <Route path="scorecard" getComponent={ requireScorecardComponent } onChange={ getRoute }>
                <Route path="gauges/graph" getComponent={ requireScorecardGaugesComponent } />
                <Route path="gauges/list" getComponent={ requireScorecardListViewComponent } />
                <Route path="drilldown-report" getComponent={ requireScorecardDrillDownReportComponent } />
            </Route>
            <Route path="zone/:id" getComponent={ requireZoneComponent } />
            <Route path="service-notavailable" component={ PageNotAvailable } />
            <Route path="non-authorized" component={ PageNotAuthorized } />
            <Route path="sso" />
            <Route path="*" component={ Page404 } />
        </Route>
    </Router>
);

/*
 * 3. App Provider and DOM Render
 *
 * call the main render from react-dom
 */
render(
    <Provider store={ AppStore }>
        <AppRouter />
    </Provider>,
    document.getElementById( 'app-root' )
);

/*
 * 4. Require Ensures
 *
 * define the dynamic webpack bundles for each route
 */
function requireLoginComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/login/login.jsx' ).default );
    }, 'login' );
}

function requireLogoutComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/login/logout.jsx' ).default );
    }, 'logout' );
}

function requireBackdoorLoginComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/login/login.jsx' ).default );
    }, 'backdoor' );
}

function requireHomeComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/home/home.jsx' ).default );
    }, 'home' );
}

function requireScorecardComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/scorecard/scorecard.jsx' ).default );
    }, 'scorecard' );
}
function requireScorecardGaugesComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/scorecard/scorecard-gauges.jsx' ).default );
    }, 'scorecardGauges' );
}
function requireScorecardListViewComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/scorecard/scorecard-list-view.jsx' ).default );
    }, 'scorecardListView' );
}
function requireScorecardDrillDownReportComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/scorecard/scorecard-drilldown-report.jsx' ).default );
    }, 'ScorecardDrilldownReport' );
}

function requireLeaderboardComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/leaderboard/leaderboard.jsx' ).default );
    }, 'leaderboard' );
}

function requireQuickhitsComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/quick-hits/quick-hits.jsx' ).default );
    }, 'quickhits' );
}

function requireVideosComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/videos/videos.jsx' ).default );
    }, 'videos' );
}

function requireAgendaComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/agenda/agenda.jsx' ).default );
    }, 'agenda' );
}

function requireZoneComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/zone/zone.jsx' ).default );
    }, 'zone' );
}

function requireCustomerSupportComponent( location, callback ) {
    require.ensure( [], function ( require ) {
        callback( null, require( './views/customer-support/customer-support.jsx' ).default );
    }, 'CustomerSupport' );

}
