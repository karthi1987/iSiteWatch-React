//React
import React from 'react';
import { isEqual } from 'lodash';
import Dimensions from 'utils/react-dimensions';
import Snap from '!!imports?this=>window,fix=>module.exports=0!snapsvg';
import moment from 'moment-timezone';
//utils
import { connectAndMap, formatNameString, formatMetricString, formatNumeral } from 'utils/utils';
//actions-creators
import { getLeaderboardData, clearLeaderboardData } from './leaderboard-actions-reducers';
//Shared
import Avatar from '../../shared/avatar/avatar';
import Icon from '../../shared/icons/icons';
import Filters from 'app/shared/filter/filters';
import ErrorMessage from 'app/shared/error-message/error-message';
//Constants
import { LEADERBOARD_VIEW } from 'app/app-lang';
//Styles
import './leaderboard.scss';

/*******************************************************************************
 *  1. Leaderboard
 *  2. Masthead
 *  3. TopRanks
 *  4. TopRank
 *  5. RanksTable
 *  6. PositiveArrow
 *  7. NegativeArrow
 *  8. StaticArrow
 */

/*
 * 1. Agenda
 */
const Leaderboard = connectAndMap(
    [ 'views.leaderboard', 'app.session', 'app.loadingErrors', 'app.loaded' ],
    { getLeaderboardData, clearLeaderboardData }
)(
    class extends React.Component {

        componentWillMount() {
            const hierarchyIds = this.props.leaderboard.hierarchy.ids;
            if( typeof hierarchyIds.office !== 'boolean' && hierarchyIds.office ) {
                this.props.getLeaderboardData( hierarchyIds );
            }
        }

        componentWillReceiveProps( nextProps ) {
            const hierarchyIds = nextProps.leaderboard.hierarchy.ids;

            if(
                this.props.session.refresh !== nextProps.session.refresh ||
                !isEqual( this.props.leaderboard.hierarchy.ids, hierarchyIds )
            ) {
                this.props.getLeaderboardData( hierarchyIds );
            }
        }

        /*
         * when a filter option is clicked, get new leaderboard data
         */
        filterData( hierarchyIds ) {
            this.props.getLeaderboardData( hierarchyIds );
        }

        render() {
            const {
                data
            } = this.props.leaderboard;

            const leaderboardViewLoaded = this.props.loaded.leaderboardViewData;
            const leaderboardViewError = this.props.loadingErrors.leaderboardViewData;    		

            return (
                <div className="leaderboard-wrapper">

                    <Filters drilldown={ this.props.leaderboard.drilldown }
                        hierarchy={ this.props.leaderboard.hierarchy }
                        filterData={ this.filterData.bind( this ) }
                        view="Leaderboard" />
					{
						(leaderboardViewLoaded && leaderboardViewError)
						&&
						<ErrorMessage message={leaderboardViewError} />
					}
					{
						(leaderboardViewLoaded && !leaderboardViewError)
						&&
						<div className="leaderboard-container">
							<div className="leaderboard-left">
								{
									( data && data.leaderboards && data.leaderboards.length > 0 )
									&&
									<Masthead { ...data.location } />
								}

								{
									( data && data.topRanks && data.topRanks.length > 0 )
									&&
									<TopRanks userId={ this.props.userId } topRanks={ data.topRanks } />
								}
							</div>

							<div className="leaderboard-right">
								{
									( data && data.leaderboards && data.leaderboards.length > 0 && data.location )
									&&
									<RanksTable leaderboards={ data.leaderboards } rank={ data.location.rank } />
								}
							</div>

						</div>
                	}
                </div>
            );
        }
    }
);

/*
 *
 *   2. Masthead
 *
 *   the Masthead holds the filter, lastUpdate text and specific logged in user metrics
 */
class Masthead extends React.Component {

    render() {
        const {
            name, metricName, startDate, endDate,
        } = this.props;

        return(
            <div className="leaderboard-participant-header">
                <div className="show-grid">

                    {
                        <div>
                            <h1 className="leaderboard-participant-first-name">{ formatNameString( name ) }</h1>
                        </div>
                    }
                    <div>
                        <h2 className="leaderboard-participant-metric-name">{ formatMetricString( metricName ) }</h2>
                        <h3 className="leaderboard-participant-start-date">{ moment( new Date( startDate ) ).format( 'MMM D' ) + ' - ' + moment( new Date( endDate ) ).format( 'MMM D' ) }</h3>
                    </div>
                </div>
            </div>
        );
    }
}


/*
 *
 *   3. TopRanks
 *
 *   TopRanks renders the medallions beneath the Masthead
 */
class TopRanks extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            height: 1,
            medallionTop: 0
        };
    }
    componentDidMount() {

        /*
         * give TopRanks half a second to get a height before we setTop
         */
         setInterval( () => { this.setStyles(); }, 500 );
    }

    /*
     * does the math for desktop and mobile to determine what top inline css value should be
     */
    setStyles() {
        if( this.topRanks ) {
            this.setState( {
                height: this.topRanks.clientHeight,
                medallionTop: this.topRanks.clientHeight * .056
            } );
        }     
    }

    render() {
        const{
            props: { topRanks },
            state: { height }
        } = this;

        return(
            <div className="top-ranks" ref={ ( ref ) => this.topRanks = ref }>
                {
                    ( topRanks && topRanks.length )
                    &&
                    topRanks.map(
                        ( leaderboard, i ) =>
                            <div key={ i }
                                id={ 'top-rank-' + ( i + 1 ) }
                                className={ 'top-rank top-rank-' + ( i + 1 ) }>
                                <TopRank
                                    layoutRank={ i + 1 }
                                    leaderboard={ leaderboard }
                                    height={ height }
                                    viewportWidth={ this.props.viewportWidth }
                                    userId={ this.props.userId } />
                            </div>
                    )
                }
            </div>
        );
    }
}

/*
 *
 *   4. TopRank
 *
 *   TopRank is responsible for rendering an individual medallion
 */
const TopRank = Dimensions()(
    class extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {
                rankTop: 0,
                rankFontSize: 0,
                ordinalFontSize: 0,
                ordinalTop: 0,
                firstRankLeft: 0,
                rankInfoTop: 0,
                rankInfoFontSize: 0,
                rankIconSize: 0
            };
        }

        componentDidMount() {

            /*
             * use snagSvg to draw the shadow on shadow ref
             */
            this.drawShadow( this.shadow );
        }

        /*
         * handles the math to set the layout for the medallion
         */
        setRankLayout() {
            setTimeout(
                () => {
                    const medallionHeight = this.medallion.clientHeight;
                    this.setState( {
                        rankTop: medallionHeight / 2,
                        rankFontSize: medallionHeight * .45,
                        ordinalFontSize: medallionHeight * .2,
                        ordinalTop: medallionHeight * .165,
                        firstRankLeft: medallionHeight * .02,
                        rankInfoFontSize: medallionHeight * .10,
                        rankIconSize: medallionHeight * .125,
                        rankInfoTop: medallionHeight  + ( medallionHeight * ( this.props.layoutRank === 1 ? .25 : .3 ) )
                    } );
                },
                50
            );
        }

        /*
         * use snagSvg to draw the shadow on shadow ref
         */
        drawShadow( shadowElement ) {

            const shadowSvg = Snap( shadowElement );
            const blur = 10;

            const shadowWidth = 375;
            const shadowX = shadowWidth * .4;
            const shadowHeight = 375 * .2;
            const shadowY = shadowHeight / 3;

            shadowSvg.attr( { viewBox: `0 0 ${ shadowWidth } ${ shadowHeight }` } );

            const ellipse = shadowSvg.ellipse( shadowWidth / 2, shadowHeight / 2, shadowX - blur, shadowY - blur );
            const blurFilter = shadowSvg.filter( Snap.filter.blur( blur ) );

            ellipse.attr( {
                filter: blurFilter
            } );

        }

        render() {
            const {
                props: {
                    leaderboard, containerWidth, userId, layoutRank
                },
                state: {
                     rankFontSize, firstRankLeft
                }
            } = this;

            return(
                <div className={ 'medallion medallion-' + layoutRank }
                    id={ 'medallion-' + layoutRank }
                    ref={ ( ref ) => this.medallion = ref }
                    style={ {
                        backgroundImage: leaderboard.avatar ? 'url(' + leaderboard.avatar + ')' : null,
                        width: containerWidth,
                        height: containerWidth
                    } } >
                    <h1 className="leaderboard-rank">
                        <span className="leaderboard-rank-number" style={{
                            fontSize: rankFontSize,
                            left: leaderboard.rank === 1 ? firstRankLeft : 'auto'
                        }}>
                            { leaderboard.rank }
                        </span>
                        <span className="leaderboard-rank-ordinal" style={{ }}>
                            { LEADERBOARD_VIEW.ORDINAL_INDICATORS[ leaderboard.rank ] }
                        </span>
                    </h1>
                    <div className="top-rank-info" style={ {}}>
                        <h1 className="top-rank-info-name">
                            {
                                Number( leaderboard.ownerPaxId ) === Number( userId )
                                ?
                                LEADERBOARD_VIEW.YOU
                                :
                                formatNameString( leaderboard.firstName )  + ' ' + formatNameString( leaderboard.lastName )
                            }
                        </h1>
                        <h2 className="top-rank-info-total">
                            <Icon name={ LEADERBOARD_VIEW.CHANGE_CODE_ICON_NAMES[ leaderboard.changeCode ] }
                                svgStyle={ { height: '2em', width: '2em' } } />
                            <span className="top-rank-info-total-text" style={{ lineHeight: '1em' }}>
                                { formatNumeral( leaderboard.total, leaderboard.valueType ) }
                            </span>
                        </h2>
                    </div>
                    <svg className="shadow" width="100%" height="100px" ref={ ( ref ) => this.shadow = ref }></svg>
                </div>
            );
        }
    }
);

/*
 *
 *   5. RanksTable
 *
 *   renders the RanksTable. RanksTable does not use shared Table component
 */
class RanksTable extends React.Component {

    /*
     * when RanksTable mounts, calculate rowHeight for mobile and desktop,
     * and scroll table to logged in user's row
     */

    renderIcon( iconCode ) {

        switch( iconCode ) {
            case 'E':
                return <StaticArrow />;
            case 'I':
                return <PositiveArrow />;
            case 'D':
                return <NegativeArrow />;
        }
    }

    render() {
        const {
            leaderboards, userId
        } = this.props;

        return (
            <div className="leaderboard-table-wrapper leaderboard-table ">
                <div className="leaderboard-table-header">
                    <div className="leaderboard-table-rank leaderboard-table-header-cell rank-table-header">
                        { LEADERBOARD_VIEW.RANK_TABLE_HEADER }
                    </div>
                    <div className="leaderboard-table-change leaderboard-table-header-cell change-table-header">
                        {
                            LEADERBOARD_VIEW.CHANGE_TABLE_HEADER
                        }
                    </div>
                    <div className="leaderboard-table-name leaderboard-table-header-cell name-table-header">
                        { LEADERBOARD_VIEW.NAME_TABLE_HEADER }
                    </div>
                    <div className="leaderboard-table-total leaderboard-table-header-cell total-table-header">
                        { LEADERBOARD_VIEW.TOTAL_TABLE_HEADER }
                    </div>
                </div>

                {
                    leaderboards
                    &&
                    // <div className="leaderboard-table-body">
                    //     <div className="error-message" style={ { marginTop: 20, textAlign: 'center' } }>
                    //         Under construction.
                    //     </div>
                    // </div>
                    <div className="leaderboard-table-body">
                         {
                            leaderboards.slice( 3 ).map(
                                ( leaderboard, i ) =>
                                    <div key={ i } className="leaderboard-row">
                                        <div className="leaderboard-table-rank leaderboard-row-data rank-row-data">
                                            <div className="rank-row-data-rank">
                                                { leaderboard.rank }
                                            </div>
                                        </div>
                                        <div className="leaderboard-table-change leaderboard-row-data change-row-data">
                                            <Icon name={ LEADERBOARD_VIEW.CHANGE_CODE_ICON_NAMES[ leaderboard.changeCode ] } />
                                        </div>

                                            <div className="leaderboard-table-name leaderboard-row-data name-row-data">
                                                <Avatar className="leaderboard"
                                                    avatar={ leaderboard.avatar }
                                                    firstName = {

                                                        ( Number( leaderboard.ownerPaxId ) === Number( userId ) && ( leaderboard.optedOut === true ) )
                                                        ?
                                                        'Y'
                                                        :
                                                        formatNameString( leaderboard.firstName )

                                                    }
                                                    lastName={

                                                        ( Number( leaderboard.ownerPaxId ) === Number( userId ) && ( leaderboard.optedOut === true ) )
                                                        ?
                                                        ''
                                                        :
                                                        formatNameString( leaderboard.lastName )

                                                    } />

                                                <div className="name-row-data-name">
                                                    {
                                                        Number( leaderboard.ownerPaxId ) === Number( userId )
                                                        ?
                                                        LEADERBOARD_VIEW.YOU
                                                        :
                                                        formatNameString( leaderboard.firstName )  + ' ' + formatNameString( leaderboard.lastName )
                                                    }
                                                </div>
                                            </div>
                                            
                                        <div className="leaderboard-table-total leaderboard-row-data total-row-data">
                                           <div className="total-row-data-value"> { formatNumeral( leaderboard.total, leaderboard.valueType ) } </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                }
            </div>
        );
    }
}


/*
 *   6. PositiveArrow
 */
const PositiveArrow = () => (
    <svg viewBox="0 0 25 25" className="icon icon-positive-arrow">
        <path d="M7,12.8h2.6v1.7V17v0.1h0c0.1,0.8,0.8,1.5,1.6,1.5h2.5c0.9,0,1.6-0.7,1.6-1.5h0V17v-2.5v-1.7H18c0.9,0,1.1-0.5,0.5-1.1
        l-4.8-4.8c-0.6-0.6-1.7-0.6-2.3,0l-4.8,4.8C5.9,12.3,6.1,12.8,7,12.8"/>
    </svg>
);

/*
 *   7. NegativeArrow
 */
const NegativeArrow = () => (
    <svg viewBox="0 0 25 25" className="icon icon-negative-arrow">
        <path d="M18,12.2h-2.6v-1.7V8V7.9h0c-0.1-0.8-0.8-1.5-1.6-1.5h-2.5c-0.9,0-1.6,0.7-1.6,1.5h0V8v2.5v1.7H7c-0.9,0-1.1,0.5-0.5,1.1
        l4.8,4.8c0.6,0.6,1.7,0.6,2.3,0l4.8-4.8C19.1,12.7,18.9,12.2,18,12.2"/>
    </svg>
);

/*
 *   7. StaticArrow
 */
const StaticArrow = () => (
    <svg viewBox="0 0 25 25" className="icon icon-static-arrow">
        <path d="M21.2,11.3l-4.8-4.8c-0.6-0.6-1.1-0.4-1.1,0.5v2.6h-1.7h-2.5h-0.1v0c0,0,0,0,0,0H9.7V7c0-0.9-0.5-1.1-1.1-0.5l-4.8,4.8
        c-0.6,0.6-0.6,1.7,0,2.3l4.8,4.8c0.6,0.6,1.1,0.4,1.1-0.5v-2.6h1.7h2.5h0.1v0c0,0,0,0,0,0h1.2V18c0,0.9,0.5,1.1,1.1,0.5l4.8-4.8
        C21.9,13,21.9,12,21.2,11.3z"/>
    </svg>
);

export default Leaderboard;
