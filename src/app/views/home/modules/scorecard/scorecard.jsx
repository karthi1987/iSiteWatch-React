//libs
import React from 'react';
import { Link } from 'react-router';
//actionCreators
import { getScorecardModuleData } from './scorecard-actions-reducers';
//templates
import { renderGauges } from '../../../../shared/gauge/gauges-template';
//shared
import Icon from 'shared/icons/icons';
import { LoaderDots } from 'shared/loader/loader';
import ErrorMessage from 'app/shared/error-message/error-message';

import { convertEstTimeToUserTimeZone } from 'app/views/scorecard/scorecard-helper';

//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
//scss
import './scorecard.scss';
//lang
import { SCORECARD_MODULE } from 'app/app-lang';

/*******************************************************************************
 *  1. ScorecardModule
 *  2. ModuleContent
 */

/*
 * 1. ScorecardModule
 */
const ScorecardModule = connectAndMap(
	[ 'views.home.modules.scorecard', 'app.session', 'app.loadingErrors' ],
	{ getScorecardModuleData  }
)(
    class extends React.Component {
        componentWillMount() {
            this.props.getScorecardModuleData();
        }
        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.getScorecardModuleData();
            }
        }
        renderModuleContent() {
        	const { lastUpdated, locationName, channelId } = this.props.scorecard.data;
        	const scorecardModuleError = this.props.loadingErrors.scorecardModuleData;
			let scorecard = this.props.scorecard.data.scorecard;

			if( scorecard && scorecard[ 0 ] ) {
				scorecard = scorecard[ 0 ].metrics;
			}
            if( this.props.loaded ) {
                return <ModuleContent
							scorecard={ scorecard }
							locationName={ locationName }
							channelId={ channelId }
							lastUpdated={ lastUpdated }
							scorecardModuleError={ scorecardModuleError } />;
			}else{
                return <LoaderDots
                            loading={ this.props.loading }
                            loadCodes={ [ 'scorecardModuleData' ] } />;
            }
        }
        render() {
            return(
              	<div className="home-scorecard">
					{ this.renderModuleContent() }
				</div>
            );
        }
    }
);

/*
 * 2. ScorecardModule
 */
const ModuleContent = ( { scorecard, locationName, channelId, lastUpdated, scorecardModuleError } ) => {

	const getScoreCardTitle = ( channelId ) => {

		let title = SCORECARD_MODULE.TITLE;
		if ( channelId && channelId === '2016' ) {
			title = SCORECARD_MODULE.LEADERBOARD_TITLE;
		}
		return title;
	};

	const getScorecardRoute = () => {
		if ( DISPLAY_DRILLDOWN_AS_SELECTED ) {
			return APP_PATH + '/scorecard/drilldown-report';
		}
		return APP_PATH + '/scorecard/gauges/graph';
	};

	return (
	    <div className="module-content">
	    	<div className="home-scorecard-details">
				<div className="home-scorecard-location">
					<h3 className="module-header-title">{ locationName }</h3>
					<h4>{ getScoreCardTitle( channelId ) }</h4>
				</div>

				{
					lastUpdated
					&&
					<div className="last-upated-wrapper">
						<Link to={ getScorecardRoute() }
							onClick={ () => { webTrack( WT_IDS.SCORECARD_VIEW ); } }>
							{ SCORECARD_MODULE.TIMESTAMP_LABEL }<span className="last-updated-text">{ convertEstTimeToUserTimeZone( lastUpdated ) }</span>
							<Icon name="right-arrow" />
						</Link>
					</div>
				}

			</div>
			<div className="home-gauges-view">
				<div className="home-gauges-container">
					{ scorecardModuleError ? <ErrorMessage message={ scorecardModuleError } /> : renderGauges( scorecard ) }
				</div>
			</div>
	    </div>
	);
};

export default ScorecardModule;
