//utils
import { combineReducers } from 'redux';
//reducers
import agenda from './agenda/agenda-actions-reducers';
import home from './home/home-reducers';
import leaderboard from './leaderboard/leaderboard-actions-reducers';
import login from './login/login-actions-reducers';
import quickhits from './quick-hits/quick-hits-actions-reducers';
import scorecardView from './scorecard/scorecard-reducers';
import videos from './videos/videos-actions-reducers';
import zone from './zone/zone-actions-reducers';

/*
 * combineReducers for views exists mainly for organizability
 */
export default combineReducers( {
	agenda,
	home,
	zone,
	leaderboard,
	login,
	quickhits,
	scorecardView,
	videos
} );
