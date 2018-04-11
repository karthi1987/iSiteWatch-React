//libs
import React from 'react';
import { Link } from 'react-router';
var Slider = require( 'react-slick' );
import { isEqual } from 'lodash';
import Moment from 'moment-timezone';
//actionCreators
import { loadVideos, setActiveVideo } from '../../../videos/videos-actions-reducers';
//utils
import { connectAndMap } from 'app/utils/utils';
import EndpointConstants from '../../../../../endpoints/endpoints';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
//shared
import { LoaderDots } from 'shared/loader/loader';
import ErrorMessage from 'app/shared/error-message/error-message';
//scss
import './video.scss';

const Videos = connectAndMap( [ 'hierarchy', 'views.videos', 'app.session', 'app.loadingErrors', 'app.loaded' ], { loadVideos, setActiveVideo } ) (
	class extends React.Component {
		constructor( props ) {
			super( props );

			this.state = {
				videoIndex: 0,
				videos: [],
				settings: {
                    dots: true,
                    infinite: false,
                    autoplay: true,
                    autoplaySpeed: null,
                    arrows: false,
                    responsive: [ {
                        breakpoint: 600,
                        settings: {
                            arrows: false
                        }
                    } ]
                }
			};
		}


        componentWillMount() {
            this.props.loadVideos( null, 'Module' );
        }

        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.loadVideos( null, 'Module' );
            }

            this.setCarouselSettings( nextProps );
        }

        setCarouselSettings ( nextProps ) {
            let newSettings = this.state.settings;

            if ( !this.state.settings.autoplaySpeed && nextProps.videos.data && nextProps.videos.data.interval ) {
            	newSettings = {
        			...newSettings,
                    autoplaySpeed: nextProps.videos.data.interval
        		};
            }

            if( 
            	!isEqual( this.props.videos.data, nextProps.videos.data ) ||
            	(
                    !this.state.settings.autoplaySpeed && 
                    nextProps.videos.data && nextProps.videos.data.videos.length
                )
            ) {
            	const hasSlider = nextProps.videos.data.videos.length > 1;
            	newSettings = {
        			...newSettings,
                    infinite: hasSlider ? true : false,
                    autoplay: hasSlider ? true : false
        		};
            }

            this.setState( { settings: newSettings } );
        }

		renderModuleContent() {
			if( this.props.loaded && this.props.videos.data.videos && this.props.videos.data.videos.length ) {
				const { setActiveVideo } = this.props;

				const videos = _.filter( this.props.videos.data.videos, ( value, index ) => {
					return ( value.archiveOrCurrent == 'C' );
				} );

				const videosViewLoaded = this.props.loaded.videosModule;
				const videosViewError = this.props.loadingErrors.videosModule;    		


				return (
					<div className="video-module">
					{
						(videosViewLoaded && videosViewError)
						&&
						<ErrorMessage message={videosViewError} />
					}
					
					{
						(videosViewLoaded && !videosViewError)
						&&
						<Slider { ...this.state.settings }>
						{
							videos.map( ( value, index ) =>
								<div key={ index }
									className="video-container">
									<VideoContainer
										videos={videos}
										videoIndex={index}
										{...value}
										setActiveVideo={setActiveVideo}
									/>
								</div>
							)					
						}
						</Slider>
					}
					</div>
				);
			} else {
				return (
                    <LoaderDots
                        loading={ this.props.loading }
						loadCodes={ [ 'videosModule' ] } />
                );
			}
		}

		render() {
			return(
				<div className="video-module" ref="videoModule">
                    { this.renderModuleContent() }
				</div>
			);
		}
	}
);

class VideoContainer extends React.Component {
	render() {
		const {
			videos, videoIndex, id, webTrackId, setActiveVideo
		} = this.props;
			
		return (
			<div className="video-cell"
				style={ { backgroundImage: 'url(' + EndpointConstants.VIDEOS_IMAGE_FILE_PATH + videos[ videoIndex ].tnImage + '?' + Moment().format('M-D') + ')' } }
			>
				<Link
					to={ APP_PATH + '/videos' }
					onClick={ ( e ) => {
						setActiveVideo( id );
						webTrack( webTrackId );
						webTrack( WT_IDS.VIDEOS_VIEW );
					} }>
					<div className="video-player-icon" />
				</Link>
			</div>
		);
	}
}


export default Videos;
