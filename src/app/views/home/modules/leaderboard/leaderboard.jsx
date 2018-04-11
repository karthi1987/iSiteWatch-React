//libs and utilities
import React from 'react';
import { max, map } from 'lodash';
import { Link } from 'react-router';
//actionCreators
import { getLeaderboardModuleData } from './leaderboard-actions-reducers.js';
//utils
import { connectAndMap, formatNameString, formatLabel } from 'utils/utils';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
//shared components
import ModuleBody from 'shared/module/module-body.jsx';
import Icon from 'shared/icons/icons';
import ErrorMessage from 'app/shared/error-message/error-message';
import { LoaderDots } from 'shared/loader/loader';
//scss
import './leaderboard.scss';
//lang
import { LEADERBOARD_MODULE } from 'app/app-lang';

/*******************************************************************************
 *  1. LeaderboardModule
 *  2. ModuleContent
 *  3. LeaderboardContent
 *  4. LeaderboardProfileName
 *  5. Leaderboard
 */

/*
 * 1. LeaderboardModule
 */
const LeaderboardModule = connectAndMap(
    [ 'views.home.modules.leaderboard', 'views.home.modules.scorecard', 'app.session', 'app.loadingErrors', 'app.loaded' ],
    { getLeaderboardModuleData }
    )(
    class extends React.Component {
        componentWillMount() {
            this.props.getLeaderboardModuleData();
        }
        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.getLeaderboardModuleData();
            }
        }
        renderModuleContent() {
            const {
                loaded, loading, leaderboard, scorecard
            } = this.props;

            const leaderboardModuleLoaded = this.props.loaded.leaderboardModuleData;
            const leaderboardModuleError = this.props.loadingErrors.leaderboardModuleData;


            if( leaderboardModuleLoaded && leaderboardModuleError ) {
				return <ErrorMessage message={leaderboardModuleError} />;
            } else if( leaderboardModuleLoaded && !leaderboardModuleError ) {
                return <ModuleContent leaderboard={ leaderboard.data } scorecard={ scorecard.data } />;
            } else {
                return <LoaderDots
                            loading={ loading }
                            loadCodes={ [ 'videosView' ] } />;
            }
        }
        render() {
            return(
                <div className={ 'home-module leaderboard-home-module'}>
                    { this.renderModuleContent() }
                </div>
            );
        }
    }
);

/*
 * 2. ModuleContent
 */
const ModuleContent = ( { leaderboard, scorecard } ) => {

    const getLeaderBoardTitle = ( scorecard ) => {

        let title = LEADERBOARD_MODULE.TITLE;
        if ( scorecard && scorecard.channelId && scorecard.channelId === '2016' ) {
            title = LEADERBOARD_MODULE.RANKING_TITLE;
        }
        return title;
    };

    return (
        <div className="module-content">
            <Link to={ APP_PATH + '/leaderboard' } className="home-module-link" onClick={ () => { webTrack( WT_IDS.LEADERBOARD_VIEW ); } }>
                <span className={ 'module-header-title' }>{ getLeaderBoardTitle( scorecard )  }</span>
                <Icon name="right-arrow" className={ 'home-module-header-arrow' } />
            </Link>
            <ModuleBody Content={ LeaderboardContent } data={ leaderboard } />
        </div>
    );
};

/*
 *  23 LeaderboardContent
 *
 *  LeaderboardContent maps out the leaderboards object to render each leaderboard
 */
class LeaderboardContent extends React.Component {
    render() {
        const {
            leaderboards, endDate, metricName, userId
        } = this.props.data;
        var maxNum = max( map( this.props.data.leaderboards, 'points' ) );
        return(
            <div className="leaderboard-content">
                <div className="leaderboard-sub-header">
                    <span>{ metricName } </span>
                    <span className="leaderboard-sub-header-end-date">{ LEADERBOARD_MODULE.END_DATE_LABEL + ' ' + endDate }</span>
                </div>
                {
                    ( leaderboards && leaderboards.length > 0 )
                    &&
                    leaderboards.map(
                        ( leaderboard, i ) =>
                        <Leaderboard leaderboard={ leaderboard } key={ i  } position={ i } maxPoints={ maxNum } userId={ userId } />
                    )
                }
                <div className="leaderboard-message">
                    <span>{ LEADERBOARD_MODULE.MESSAGE_TEXT }</span>
                </div>
            </div>
        );
    }
}

/*
 *  4. LeaderboardProfileName
 */
class LeaderboardProfileName extends React.Component {
    render() {
        const {
            firstName, lastName, ownerPaxId, userId, avatar, styles, position
        } = this.props;

        return(
            <div className="leaderboard-profile-wrapper">

                {
                    ( ( typeof userId != 'undefined' ) && ( Number( userId ) === Number( ownerPaxId ) ) &&  firstName.toLowerCase() === 'user' )
                    ?
                    'Y'
                    :
                    avatar
                        ?
                        <img className={ 'leaderboard-avatar leaderboard-avatar-' + position } src={ avatar } style={ styles.avatar }/>
                        :
                        <span className={ 'leaderboard-avatar leaderboard-initials leaderboard-avatar-' + position } style={ styles.avatar }>
                            { firstName.charAt( 0 ) + lastName.charAt( 0 ) }
                        </span>
                }

            </div>
        );
    }
}

/*
 *  5. Leaderboard
 *
 *  Leaderboard has an animation to display the leaderboard data for the top four leaderboards
 */
class Leaderboard extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            styles: {},
            fullName: ''
        };
    }

    componentDidMount() {
        const {
            position,
            leaderboard: { firstName, lastName, points, valueType, maxPoints, ownerPaxId, userId }
        } = this.props;

        //calculate fill percent pased on points and maxPoints
        const fillPercent = ( ( points / maxPoints ).toFixed( 2 ) < .60 ) ? 60 : ( ( points / maxPoints ).toFixed( 2 ) * 100 );

        // set our animation styles to be used in render
        this.setAnimation( points, maxPoints, position, fillPercent );

        // formats the name string
        this.setFullName( firstName, lastName, valueType, fillPercent, userId, ownerPaxId );
    }

    /*
     * animation helper to format the css
     */
    animation( keyFrame, duration, easing, delay ) {
        duration = duration.toFixed( 2 );
        delay = delay.toFixed( 2 );
        return{
            WebkitAnimation: keyFrame + ' ' + duration + 's ' + easing + ' ' + delay + 's',
            MozAnimation: keyFrame + ' ' + duration + 's ' + easing + ' ' + delay + 's',
            msAnimation: keyFrame + ' ' + duration + 's ' + easing + ' ' + delay + 's',
            animationFillMode: 'forwards'
        };
    }
    /*
     * uses math to set our styles which in return runs our animations using CSS3 animate
     */
    setAnimation( points, maxPoints, position, fillPercent ) {
        const styles = {
          wrapper: this.animation( 'width' + fillPercent, 0.5, 'cubic-bezier(.28,.74,.58,.93)', 2.0 - ( .1 * position ) ),
          leaderboard: this.animation( 'fadeIn', 0.50, 'ease-in', 0.50 - ( .10 * position ) ),
          avatar: this.animation( 'fadeIn', 0.50, 'ease-in', 1.90 - ( .15 * position ) ),
          name: this.animation( 'fadeIn', 0.20, 'ease-in', 2.30 - ( .15 * position ) ),
          points: this.animation( 'fadeIn', 0.20, 'ease-in', 2.30 - ( .15 * position ) ),
          place: this.animation( 'fadeIn', 0.30, 'ease-in', 1.00 - ( .10 * position ) )
        };
        this.setState( { styles: styles } );
    }
    /*
     * formats the name string
     */
    setFullName( firstName, lastName, valueType, fillPercent, userId, ownerPaxId ) {
        let fullName = formatNameString( firstName ) + ' ' + ( lastName ? formatNameString( lastName ) : '' );

        if ( Number( userId ) === Number( ownerPaxId ) ) {
            if ( firstName.toLowerCase() === 'user' ) {
                fullName = LEADERBOARD_MODULE.YOU;
            } else {
                fullName = fullName;
            }
        }

        if( fillPercent < 75 && valueType === 'cur' || valueType === 'pct' ) {
            fullName = fullName.length > 8 ? fullName.substr( 0, 8 ) + '...' : fullName;
        }else{
            fullName = fullName.length > 11 ? fullName.substr( 0, 11 ) + '...' : fullName;
        }
        this.setState( { fullName: fullName } );
    }

    render() {
        const {
            props: {
                position,
                leaderboard: { firstName, lastName, avatar, points, place, ownerPaxId, valueType, userId }
            },
            state: { styles, fullName }
        } = this;

        return(
          <div className={ 'leaderboard-back-wrapper' }>
            <div className={ 'leaderboard-bar-wrapper' } style={ styles.wrapper }>
                <div className={ 'leaderboard leaderboard-' + position } style={ styles.leaderboard }>
                    <LeaderboardProfileName  firstName={firstName} lastName={lastName} avatar={avatar} ownerPaxId={ownerPaxId} userId={userId} styles={styles} position={position} />
                    <span className={ 'leaderboard-name leaderboard-name-' + position } style={ styles.name }>{ fullName }</span>
                    <span className={ 'leaderboard-points leaderboard-points-' + position } style={ styles.points }>
                        { formatLabel( points, valueType ) }
                    </span>
                    <span className={ 'leaderboard-place leaderboard-place-' + position } style={ styles.place }>{ place }</span>
                </div>
            </div>
          </div>
        );
    }
}

module.exports = LeaderboardModule;
