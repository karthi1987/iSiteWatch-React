//libs
import React from 'react';
import { Redirect } from 'react-router';

/*******************************************************************************
 *  1. Page404
 *  2. PageNotAvailable
 *  3. PageNotAuthorized
 *  4. RvError
 *  5. ScoreCardDrillDownReportTab
 *  6. RvInitializing
 */

/*
 * 1. Page404
 *
 * we see this component only in local development if we have a bad route
 */
const Page404 = () => {
    return (
        <div style={ { height: '100%', width: '100%', padding: '0 3.125rem' } }>
            <h1>404</h1>
        </div>
    );
};

/*
 * 2. PageNotAvailable
 */
const PageNotAvailable = () => {
    return (
        <div style={ { height: '100%', width: '100%' } }>
            <div className="center-content">
            <div className="content" style={ { 'textAlign': 'center', 'position': 'absolute', 'top': '25%', 'left': 0, 'right': 0 } }>
              <div className="logo">
                <svg id="Logo" x="0px" y="0px" viewBox="0 0 814.2 288.7" style={ { 'width': '25rem' } }>
                  <g>
                    <polygon fill="#CD040B" points="721.2,64.6 685.4,141.4 671.9,112.3 657.2,112.3 679.5,159.9 691.3,159.9 735.7,64.6"/>
                    <path d="M567.2,207.2h28.9v-52.9c0-12.1,7-20.6,17.4-20.6c10,0,15.2,7,15.2,17.1v56.4h28.9v-61.9c0-21-12.6-35.8-33-35.8
                        c-13,0-22.1,5.6-28.9,15.8h-0.6v-13h-28V207.2z M510.5,109.7c-30.2,0-50.4,21.7-50.4,50.3c0,28.4,20.2,50.3,50.4,50.3
                        c30.2,0,50.4-21.9,50.4-50.3C560.9,131.4,540.7,109.7,510.5,109.7z M510.3,188.9c-13.7,0-21-11.5-21-28.9c0-17.6,7.2-28.9,21-28.9
                        c13.7,0,21.3,11.3,21.3,28.9C531.6,177.4,524,188.9,510.3,188.9z M377.7,207.2h81.2v-22.8h-46v-0.6l44-49.3v-22.3h-79.2v22.8h44.5
                        v0.6l-44.5,49.7V207.2z M340.6,207.2h29.1v-95h-29.1V207.2z M273.1,207.2H302v-43.6c0-19.8,11.9-28.6,30-26.2h0.6v-25
                        c-1.5-0.6-3.2-0.7-5.9-0.7c-11.3,0-18.9,5.2-25.4,16.3h-0.6v-15.8h-27.6V207.2z M219.8,189c-12.8,0-20.6-8.3-22.1-21.1h68.4
                        c0.2-20.4-5.2-36.7-16.5-46.9c-8-7.4-18.5-11.5-31.9-11.5c-28.6,0-48.4,21.7-48.4,50.1c0,28.6,18.9,50.4,50.3,50.4
                        c11.9,0,21.3-3.2,29.1-8.5c8.3-5.7,14.3-14.1,16-22.4h-27.8C234.1,185.3,228.4,189,219.8,189z M218.3,130.3
                        c10.2,0,17.2,7.6,18.4,18.7h-38.8C200.2,137.7,206.3,130.3,218.3,130.3z M111.5,207.2h30.4l33-95h-29.1l-18.5,61h-0.4l-18.5-61
                        H78.5L111.5,207.2z M340.6,78.5h29.1v25.8h-29.1V78.5z"/>
                  </g>
                </svg>
              </div>
              <div className="caption">
                Site is Temporarily Down for Maintenance.  Please check back later.
              </div>
            </div>
            </div>
        </div>
    );
};

/*
 * 3. PageNotAuthorized
 */
const PageNotAuthorized = () => {
    return (
        <div style={ { height: '100%', width: '100%' } }>
           <div className="center-content">
             <div className="content" style={ { 'textAlign': 'center', 'position': 'absolute', 'top': '25%', 'left': 0, 'right': 0 } }>
               <div className="caption">
                 An unexpected error has occurred. Please reach out to your local End User Support or Market Ops contact for assistance.
               </div>
             </div>
           </div>
        </div>
    );
};

/*
 * 4. RvError
 */
const RvError = () => {
    return(
        <div style={ { height: '100%', width: '100%', padding: '0 3.125rem' } }>
            <h1>Please login to access the site<a href="login/">Login</a></h1>
        </div>
    );
};

/*
 * 5. ScoreCardDrillDownReportTab
 */
const ScoreCardDrillDownReportTab = () => {
    if ( DISPLAY_DRILLDOWN_AS_SELECTED ) {
        return <Redirect from="scorecard" to="scorecard/drilldown-report" />;
    } else {
        return <Redirect from="scorecard" to="scorecard/gauges/graph" />;
    }
};

/*
 * 6. RvInitializing
 */
const RvInitializing = () => {
    return(
        <div style={ { height: '100%', width: '100%', padding: '0 3.125rem' } }>
            <h1>Please wait while the SMART Board is initializing.</h1>
        </div> 
    );
};

export {
    Page404 as Page404,
    PageNotAvailable as PageNotAvailable,
    PageNotAuthorized as PageNotAuthorized,
    RvError as RvError,
    ScoreCardDrillDownReportTab as ScoreCardDrillDownReportTab,
    RvInitializing as RvInitializing
};
