//libs
import React from 'react';
import classNames from 'classnames';
import Moment from 'moment-timezone';
//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
import EndpointConstants from '../../../endpoints/endpoints';
// action creators
import { loadVideos, setActiveVideo } from './videos-actions-reducers';
// shared components
import VideoPlayer from './video-player/video-player.jsx';
import { _dropdown } from 'app/shared/dropdown/dropdown';
import { _tabs } from '../../shared/tabs/tabs.jsx';
import ErrorMessage from 'app/shared/error-message/error-message';
//scss
import './videos.scss';
//consts
import { VIDEOS_VIEW, ERRORs } from 'app/app-lang';

/*******************************************************************************
 *  1. VideoThumbnailCell
 *  2. Videos
 */

/*
 * 1. VideoThumbnailCell
 */
class VideoThumbnailCell extends React.Component {
	constructor( props ) {
		super( props );

		this.setActiveVideo = this.setActiveVideo.bind( this );
	}

	componentWillReceiveProps( nextProps ) {
		if( this.props.instance.index === 0 && this.props.currentVideo !== nextProps.currentVideo ) {
			this.props.setActiveVideo( nextProps.currentVideo );
			this.props.resetPlayback();
		}
	}

	setActiveVideo() {
		const videos = this.props.videos.data.videos;

		const targetVideo = videos.find( ( value ) => {
			return value.id == this.props.instance.id;
		} );

		if( targetVideo ) {
			this.props.setActiveVideo( targetVideo.id );
		}

		this.props.resetPlayback();
		webTrack( this.props.instance.webTrackId );
	}
	renderVideoTitle( video ) {
		if( video.isNew ) {
			return(
				<span className="video-new">New! </span>
			);
		}
		return false;
	}
	render() {
		const videos = this.props.videos.data.videos;
		const me = this.props.instance;
		/*const currentVideo = this.props.videos.currentVideo;
		let ogIndex;
		for( let i in videos){
			if( this.props.instance.id === videos[i].id ){
				ogIndex = i;
			}
		}*/

		const currentVideo = videos.find( ( value ) => {
				return value.id == this.props.videos.currentVideo;
		} ) || videos[ 0 ];


		return (
			<div className={ classNames( 'video-thumbnail', { active: currentVideo.id == me.id } ) } onClick={this.setActiveVideo}>

				<div className="video-thumbnail-image" style={{ backgroundImage: 'url(' + this.props.videosImageFilePath() + me.tnImage + '?' + Moment().format( 'M-D' ) + ')' }}></div>

				<div className="description">
					<div className="video-thumbnail-title">
						{ this.renderVideoTitle( me ) }<span dangerouslySetInnerHTML={{ __html: me.title }} />
					</div>
					<div className="duration">
						{ me.duration }
					</div>
					<div className="added-date">
						Added { Moment( me.dateAdded ).format( 'M/D/YYYY' ) }
					</div>
				</div>
			</div>
		);
	}
}

/*
 * 2. Videos
 */
const Videos = connectAndMap(
	[ 'views.videos', 'app.session', 'app.loadingErrors', 'app.loaded' ], { loadVideos, setActiveVideo }
)(
	class extends React.Component {
		constructor( props ) {
			super( props );
			this.videosVideoFilePath = this.videosVideoFilePath.bind( this );
			this.videosImageFilePath = this.videosImageFilePath.bind( this );
			this.resetPlayback = this.resetPlayback.bind( this );

			this.state = {
				videoDropdownLabel: VIDEOS_VIEW.DROPDOWN_LABEL,
				videoDropdownId: VIDEOS_VIEW.DROPDOWN_SELECT_ID,
				videoTabsIndex: 0,
				videoTabs: [
					{
						name: VIDEOS_VIEW.CURRENT_TAB
					},
					{
						name: VIDEOS_VIEW.ARCHIVED_TAB
					}
				]
			};
			this.onVideoCategoriesDropdown = this.onVideoCategoriesDropdown.bind( this );
		}

		componentWillMount() {
			const rvHost = this.props.session.rvHost;
			this.props.loadVideos( rvHost, 'View' );
		}

		componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
            	const rvHost = this.props.session.rvHost;
				this.props.loadVideos( rvHost, 'View' );
            }
        }

		videosVideoFilePath() {
			return EndpointConstants.VIDEOS_VIDEO_FILE_PATH;
		}

		videosImageFilePath() {
			return EndpointConstants.VIDEOS_IMAGE_FILE_PATH;
		}
		filterVideos( videos, videoTabIndex, id ) {
			const originalVideos = videos;
			//const { videoDropdownId } = this.state;
			//const { categories } = this.props.videos.data;

			const filterVideoByCategory = ( videos, id ) => {
				const videos2 = [];

				for ( var i = 0; i < videos.length; i++ ) {
					for ( var j = 0; j < videos[ i ].categories.length; j++ ) {
						if( videos[ i ].categories[ j ] === id ) {
							videos2.push( videos[ i ] );
						}
					}

				}

				return videos2;
			};

			const filterVideoByIndex = ( videos ) => {
				const videos3 = [];
				let videoCode = '';
				let currentVideo = 0;
				switch( videoTabIndex ) {
					case 0:
						videoCode = 'C';
						break;
					case 1:
						videoCode = 'A';
						break;
				}
				for( const i in videos ) {
					if( videos[ i ].archiveOrCurrent === videoCode ) {
						videos3.push( videos[ i ] );
					}
				}
				for( const i in originalVideos ) {
					for( const j in videos3 ) {
						if( Number( j ) === 0 && originalVideos[ i ].id === videos3[ j ].id ) {
							currentVideo = originalVideos[ i ].id;
						}
					}
				}
				const videoBundle = {
					videos: videos3,
					currentVideo: currentVideo
				};
				return videoBundle;
			};

			const filterVideos = ( videos, videoTabIndex, id ) => {
				if( id === VIDEOS_VIEW.DROPDOWN_ALL_ID || id === VIDEOS_VIEW.DROPDOWN_SELECT_ID ) {
					return filterVideoByIndex( videos );
				}
				const filteredVideos = filterVideoByCategory( videos, id );
				return filterVideoByIndex( filteredVideos );
			};

			return filterVideos( videos, videoTabIndex, this.state.videoDropdownId );
		}
		resetPlayback() {
			this.refs.videoPlayer.resetPlayback();
		}
		onVideoCategoriesDropdown( event, label, id ) {
			this.setState( { videoDropdownLabel: label, videoDropdownId: id } );
		}
		renderVideoThumbnails( videos, videoTabIndex ) {
			const videoBundle = this.filterVideos( videos, videoTabIndex );
			const videos2 = videoBundle.videos;
			if ( videos2.length === 0 ) {
				return(
					<div className="video-thumbnail">
						<ErrorMessage message={ERRORs().VIDEOS_VIEW_NO_RESULTS} />

					</div>
				);
			}
			return videos2.map( ( value, index ) => {
				return (
					<VideoThumbnailCell { ...this.props }
						videosImageFilePath={this.videosImageFilePath}
						resetPlayback={this.resetPlayback}
						instance={ { index, ...value } }
						currentVideo={ videoBundle.currentVideo }
						key={index} />
				);
			} );
		}
		renderVideoDuration( individualVideoData ) {

			if( !individualVideoData.duration ) {
				return false;
			}

			return (
				<div className="video-duration">
					{ individualVideoData.duration } |
				</div>
			);
		}
		renderVideoTitle( video ) {
			const renderTitle = ( video ) => {
				if( video.isNew ) {
					return (
						<div>
							<span className="video-new">New!</span><span> { video.title }</span>
						</div>
					);
				} else {
					return (
						<span>{ video.title }</span>
					);
				}
			};

			return (
				<div className="video-title">
					{ renderTitle( video ) }
				</div>
			);
		}
		handleTab( event, index ) {
			webTrack( index == 1 ? WT_IDS.VIDEO_VIEW_ARCHIVED : WT_IDS.VIDEO_VIEW_CURRENT );
			this.setState( { videoTabsIndex: index } );
		}

		render() {
			const videos = this.props.videos.data.videos;
			//const currentVideo = this.props.videos.currentVideo;

			const currentVideo = videos ? videos.find( ( value ) => {
				return value.id == this.props.videos.currentVideo;
			} ) || videos[ 0 ] : null;

			/*
				The "currentVideo" thing exists so that if we come from e.g. the homepage, we can load a *particular* video, rather than just a default one.  If we don't find one, then we'll just default to the very first video in the array.
			*/


            const videosViewLoaded = this.props.loaded.videosView;
            const videosViewError = this.props.loadingErrors.videosView;

			return (
				<div className="videos-page-container">
					<div className="video-controls">
						{
							videos && this.props.videos.data.categories.length > 0
							&&
							<div className="dropdown-wrapper">
								<_dropdown
									_label={ this.state.videoDropdownLabel }
									_state={ this.props.videos.data.categories }
									_callback={ this.onVideoCategoriesDropdown }/>
							</div>
						}

						<div className="tab-wrapper">
							<_tabs
								_index={ this.state.videoTabsIndex }
								_state={ this.state.videoTabs }
								_callback={ this.handleTab.bind( this ) }/>
						</div>
					</div>

					{
						( videosViewLoaded && videosViewError )
						&&
						<ErrorMessage message={videosViewError} />
					}

					{
						( videosViewLoaded && !videosViewError && videos && videos.length > 0 )
						&&
						<div className="videos-page">
							<div className="video-content">
								<div className="video-player-wrapper">
									<VideoPlayer url={ this.videosVideoFilePath() + currentVideo.videoUrl } poster={this.videosImageFilePath() + currentVideo.tnImage + '?' + Moment().format( 'M-D' )  } expectedDuration={currentVideo.duration} ref="videoPlayer" />
								</div>
								<div className="video-details">
									{ this.renderVideoTitle( currentVideo ) }
									{ this.renderVideoDuration( currentVideo ) }
									<div className="video-date-added">
										{ VIDEOS_VIEW.ADDED_LABEL } { Moment( currentVideo.dateAdded ).format( 'M/D/YYYY' ) }
									</div>
								</div>
							</div>
							<div className="video-thumbnail-list">
								{ this.renderVideoThumbnails( videos, this.state.videoTabsIndex ) }
							</div>
						</div>
					}

				</div>
			);
		}
	}
);

export default Videos;
