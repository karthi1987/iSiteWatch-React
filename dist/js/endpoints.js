/*global APP_ENDPOINT_OVERRIDES*/
const _ = require( 'lodash' );

const base = APP_PATH;

const mockEndpoints = {
    //global
    LOGIN_FILTERS: `${base}/assets/json/login-filters.json`,
    BACKDOOR_SESSION: `${base}/assets/json/session.json`,
    EMULATOR_SESSION: `${base}/assets/json/session.json`,
    RV_HOST_SESSION: `${base}/assets/json/session.json`,
    EXTEND_SESSION: `${base}/assets/json/session.json`,
    STATIC_TOKEN_CHECK: `${base}/assets/json/static-token.json`,
    SESSION_TEST: `${base}/assets/json/session-test.json`,
    PRINT_RESPONSE: `${base}/assets/json/print-serverresponse.json`,
    NAVIGATION: `${base}/assets/json/navigation.json`,
    CHANNEL_FILTERS: `${base}/assets/json/filters/channel-filters.json`,
    REGION_FILTERS: `${base}/assets/json/filters/region-filters.json`,
    DISTRICT_FILTERS: `${base}/assets/json/filters/district-filters.json`,
    AREA_FILTERS: `${base}/assets/json/filters/area-filters.json`,
    OFFICE_FILTERS: `${base}/assets/json/filters/office-filters.json`,
    WEB_TRACKING: `${base}/assets/json/web-tracking.json`,
    ATTRACT_LOOP: `${base}/assets/json/attract-loop.json`,
    //home modules
    HOME_LEADERBOARD_MODULE: `${base}/assets/json/home-modules/home-leaderboard.json`,
    HOME_MESSAGE_CENTER: `${base}/assets/json/home-modules/home-messagecenter.json`,
    HOME_QUICKHITS: `${base}/assets/json/home-modules/home-quickhits.json`,
    HOME_SCORECARD_MODULE: `${base}/assets/json/home-modules/scorecard-module.json`,
    //views
    FILTERS: `${base}/assets/json/views/leaderboard/leaderboard-nav.json`,
    LEADERBOARD: `${base}/assets/json/views/leaderboard/leaderboard-page.json`,
    QUICKHITS: `${base}/assets/json/views/quickhits.json`,
    AGENDA: `${base}/assets/json/views/agenda.json`,
    VIDEOS: `${base}/assets/json/views/videos.json`,
     // TODO fix base path for scorecard
    SHEET_SCORECARD_FILTERS: `${base}/assets/json/views/scorecard/scorecard-navs.json`,
    SHEET_SCORECARD_REPORT_FILTER: `${base}/assets/json/views/scorecard/scorecard-report-nav.json`,
    SHEET_DRILLDOWN_REP_FILTER: `${base}/assets/json/views/scorecard/scorecard-rep-nav.json`,
    SHEET_SCORECARD_GAUGES: `${base}/assets/json/views/scorecard/scorecard-gauges.json`,
    SHEET_SCORECARD_LIST_VIEW: `${base}/assets/json/views/scorecard/scorecard-list-view.json`,
    SHEET_SCORECARD_DRILLDOWN: `${base}/assets/json/views/scorecard/scorecard-drilldown.json`,
    //image paths
    QUICKHITS_IMAGE_PATH: `${base}/assets/images/quickhits/cells/`,
    VIDEOS_VIDEO_FILE_PATH: `${base}/assets/videos/`,
    VIDEOS_IMAGE_FILE_PATH: `${base}/assets/images/videos/`
};

module.exports = _.defaults( {}, APP_ENDPOINT_OVERRIDES, mockEndpoints );
