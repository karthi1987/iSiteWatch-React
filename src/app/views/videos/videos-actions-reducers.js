import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { rvCheck } from 'utils/utils';
import { LogServerResponse } from 'app/app-store';
import { ERRORs } from 'app/app-lang';

/*******************************************************************************
 *
 *   1. Default State
 *   2. Action Types
 *   3. ACtion Creators
 *   4. Reducers
 *
 */

/*******************************************************************************
 *  1. Default State
 */
const videosState = {
    data: false,
    currentVideo: 0,
    replicationFiles: []
};

/*******************************************************************************
 *  2. Action Types
 */

//const VIDEOS_VIEW = 'videosView';
const LOAD_VIDEOS_VIEW = 'loadVideosView';
//const VIDEOS_MODULE = 'videosModule';
const LOAD_VIDEOS_MODULE = 'loadVideosModule';
//const LOAD_VIDEOS_MODULE = 'loadVideosModuleData';
const SET_ACTIVE_VIDEO = 'setActiveVideo';
const SET_REPLICATION_FILES = 'setReplicationFiles';
const VIDEOS_ERROR_REPORT = 'videosErrorReport';
const LOG_RESPONSE = LOGSERVERRESPONSE;

/*******************************************************************************
 *  3. Action Creators
 */
export function loadVideos ( rvHost, type ) {
    return ( dispatch ) => {
        const videosType = 'videos' + type;
        const loadVideosType = 'loadVideos' + type;
        dispatch( ajax.loading( videosType ) );

        return Ajax( {
            url: FEEDS.VIDEOS,
            success: ( results, textStatus, jqXHR ) => {
                if( !results.success ) {
                    dispatch( ajax.loadingError( videosType, results.errorMessage ) );
                }else{

                    LOG_RESPONSE && LogServerResponse( results, textStatus, jqXHR, FEEDS.VIDEOS );

                    const videos = results.data.videos;

                    for( const video in videos ) {

                        if( rvHost ) {

                            const RV = rvCheck();
                            const replicationFiles = RV.replicationFiles;

                            for( const file in replicationFiles ) {
                                if( videos[ video ].videoUrl === replicationFiles[ file ].FileName ) {
                                    videos[ video ].videoUrl = replicationFiles[ file ].URL;
                                }
                            }

                        } else {
                            videos[ video ].videoUrl = VIDEO_PATH + videos[ video ].videoUrl;
                        }
                    }

                    dispatch( ajax.loaded( videosType ) );

                    dispatch( {
                        type: loadVideosType,
                        data: {
                            ...results.data,
                            videos: videos
                        }
                    } );


                    const hasResults = results.data.videos.length > 0;
                    dispatch( ajax.handleResultsMessage( 'videos' + type, hasResults, ERRORs().VIDEOS_VIEW_NO_RESULTS ) );
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( videosType, error.textStatus ) );
            }
        } );

    };
}

export function setActiveVideo ( index ) {
    return ( dispatch ) => {
  		dispatch( {
  			type: SET_ACTIVE_VIDEO,
  			data: index
  		} );
    };
}

export function setReplicationFiles( replicationFiles ) {
    return{
        type: SET_REPLICATION_FILES,
        replicationFiles: replicationFiles
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function videos( state = videosState, action ) {
    switch ( action.type ) {
        case LOAD_VIDEOS_MODULE:
        case LOAD_VIDEOS_VIEW:
            return {
                ...state,
                data: action.data,
                error: false,
                message: null
            };
        case VIDEOS_ERROR_REPORT:
            return {
                ...state,
                error: action.error,
                message: action.message
            };
        case SET_ACTIVE_VIDEO:
            return {
                ...state,
                currentVideo: action.data
            };
        default:
            return state;
    }
}
