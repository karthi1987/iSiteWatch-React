import './video-player.scss';

const React = require( 'react' );
const classNames = require( 'classnames' );

import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';


	//------------------------------ Button Classes ------------------------------//

class PlayPauseButton extends React.Component {

	render() {
		const classes = classNames( {
			'play-pause-button': true,
			'play': !this.props.isPlaying,
			'pause': this.props.isPlaying
		} );

		return (
			<div className={ classes } title="Play/Pause" onClick={ this.props.doAction }></div>
		);
	}
}

class TimeDisplay extends React.Component {
	stringToSeconds( str ) {
		var p = str.split( ':' ),
			s = 0, m = 1;

		while ( p.length > 0 ) {
			s += m * parseInt( p.pop(), 10 );
			m *= 60;
		}

		return s;
	}

	secondsToTime( secs )
	{
		secs = Math.round( secs );
		const hours = Math.floor( secs / ( 60 * 60 ) );

		const divisor_for_minutes = secs % ( 60 * 60 );
		const minutes = Math.floor( divisor_for_minutes / 60 );

		const divisor_for_seconds = divisor_for_minutes % 60;
		const seconds = Math.ceil( divisor_for_seconds );

		if( hours > 0 ) {
			return hours + ':' + this.padInteger( minutes, 2 ) + ':' + this.padInteger( seconds, 2 );
		} else {
			return minutes + ':' + this.padInteger( seconds, 2 );
		}
	}
	
	doTimeFormatting( secs, expectedDuration ){
		if( secs ) {
			return this.secondsToTime( secs );
		} else {
			if(expectedDuration && this.stringToSeconds( expectedDuration ) ) {
				return this.secondsToTime( this.stringToSeconds( expectedDuration ) );
			} else {
				return "0:00";
			}
		}
	}

	padInteger ( num, size ) {
		if ( num.toString().length >= size ) {return num;}
		return ( Math.pow( 10, size ) + Math.floor( num ) ).toString().substring( 1 );
	}

	render() {
		return (
			<div className="timeDisplay"  title="Time">
				<p>
					<span className="currentTime">{ this.doTimeFormatting( this.props.currentTime )}</span>
					<span> / </span>
					<span className="totalTime">{ this.doTimeFormatting( this.props.duration, this.props.expectedDuration )}</span>
				</p>
			</div>
		);
	}
}



class ProgressBar extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			isCurrentlyChangingValue: false,
		};
	}

	componentDidMount() {
	}

	normalizedProgress() {
		const duration = this.props.duration ? this.props.duration : 0.0000001;
		return 100.0 * ( this.props.currentTime / duration );
	}

	filledStyle() { return { width: this.normalizedProgress() + '%' }; }
	bufferedStyle() { return { width: 100.0 * this.props.bufferedFraction + '%' }; }
	sliderStyle() { return { left: 'calc(' + this.normalizedProgress() + '% - 8px)' }; }

	setPlaybackTime = ( e ) => {
		if( this.state.isCurrentlyChangingValue ) {
			this._setPlaybackTime( e );
		}
	}

	_setPlaybackTime = ( e ) => {
		const bounds = this.refs.progressBar.getBoundingClientRect();
		const normalized_val =  e.clientX - bounds.left;
		const proportion = Math.min(Math.max(normalized_val / bounds.width, 0.0), 1.0);

		this.props.onUpdate( proportion );
	}




	mousedownListener = (e) => {
		this.setState( { isCurrentlyChangingValue: true } );
		this._setPlaybackTime( e );
		this.captureMouseEvents(e);
		e.stopPropagation();
	}

	mousemoveListener = (e) => {
		this.setPlaybackTime(e);
		e.stopPropagation();
		// do whatever is needed while the user is moving the cursor around
	}

	mouseupListener = (e) => {
		var restoreGlobalMouseEvents = () => {
			document.body.style['pointer-events'] = 'auto';
		}

		restoreGlobalMouseEvents ();
		document.removeEventListener ('mouseup',   this.mouseupListener,   {capture: true});
		document.removeEventListener ('mousemove', this.mousemoveListener, {capture: true});
		e.stopPropagation ();

		this.setState( { isCurrentlyChangingValue: false } );
	}

	captureMouseEvents = (e) => {
		var preventGlobalMouseEvents = () => {
			document.body.style['pointer-events'] = 'none';
		};

		preventGlobalMouseEvents ();
		document.addEventListener ('mouseup',   this.mouseupListener,   {capture: true});
		document.addEventListener ('mousemove', this.mousemoveListener, {capture: true});
		e.preventDefault ();
		e.stopPropagation ();
	}


	render() {
		return (
			<div className="progress-bar-wrapper">
				<div className="video-progress-bar-back" ref="progressBar"
					onMouseDown={this.mousedownListener}
					onMouseMove={this.mousemoveListener}
				>
					<div className="video-progress-bar-buffered" ref="buffer" style={this.bufferedStyle()} />
					<div className="video-progress-bar-filled" ref="fill" style={this.filledStyle()} />
					<div className="video-progress-bar-slider" ref="slider" style={this.sliderStyle()} />
				</div>
			</div>
		);
	}
}


class VolumeButton extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			isVolumeButtonOpen: false,
			isCurrentlyChangingValue: false,
		};
	}


	setVolumeLevel = (e) => {
		if( this.state.isCurrentlyChangingValue ) {
			this._setVolumeLevel( e );
		}
	}

	_setVolumeLevel = (e) => {
		const bounds = this.refs.volumeBar.getBoundingClientRect();
		const normalized_val =  e.clientY - bounds.top;
		const proportion = 1.0 - ( normalized_val / bounds.height );

		this.props.onUpdate( proportion );
	}



	mousedownListener = (e) => {
		this.setState( { isCurrentlyChangingValue: true } );
		this._setVolumeLevel( e );
		this.captureMouseEvents(e);
		e.stopPropagation();
	}

	mousemoveListener = (e) => {
		this.setVolumeLevel(e);
		e.stopPropagation();
		// do whatever is needed while the user is moving the cursor around
	}

	mouseupListener = (e) => {
		var restoreGlobalMouseEvents = () => {
			document.body.style['pointer-events'] = 'auto';
		}

		restoreGlobalMouseEvents ();
		document.removeEventListener ('mouseup',   this.mouseupListener,   {capture: true});
		document.removeEventListener ('mousemove', this.mousemoveListener, {capture: true});
		e.stopPropagation ();

		this.setState( { isCurrentlyChangingValue: false } );
	}

	captureMouseEvents = (e) => {
		var preventGlobalMouseEvents = () => {
			document.body.style['pointer-events'] = 'none';
		};

		preventGlobalMouseEvents ();
		document.addEventListener ('mouseup',   this.mouseupListener,   {capture: true});
		document.addEventListener ('mousemove', this.mousemoveListener, {capture: true});
		e.preventDefault ();
		e.stopPropagation ();
	}




	openVolumeSlider = () => {
		this.setState( { isVolumeButtonOpen: !this.state.isVolumeButtonOpen } );
	}

	filledStyle = () => { return { height: ( 100 * this.props.volumeLevel ) + '%' }; }
	sliderStyle = () => { return { bottom: 'calc(' + ( 100 * this.props.volumeLevel ) + '% - 8px)' }; }


	render() {
		const sliderClasses = classNames( {
			'volume-bar-container': true,
			'active': this.state.isVolumeButtonOpen
		} );

		return (
			<div className="volume-button-wrapper">
				<div className="volume-button" title="Volume" onClick={this.openVolumeSlider}/>
				<div className={sliderClasses}>
					<div className="volume-bar-back" ref="volumeBar"
						onMouseDown={this.mousedownListener}
						onMouseMove={this.mousemoveListener}
					>
						<div className="volume-bar-filled" style={this.filledStyle()} />
						<div className="volume-bar-slider" style={this.sliderStyle()} />
					</div>
				</div>
			</div>
		);
	}
}

class CenteredPlayerIcon extends React.Component {
	constructor( props ) {
		super( props );

		this.triggerAction = this.triggerAction.bind(this);
	}

	triggerAction() {
		this.props.doAction();
	}

	render() {
		const classes = classNames( {
			'video-player-icon': true,
			'active': this.props.isPlaying
		} );

		return (
			<div onClick={this.triggerAction} className="video-player-icon-wrapper">
				<div className={classes} />
					{this.props.children}
			</div>
		);
	}
}




	//------------------------------ Primary Container ------------------------------//

class VideoPlayer extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPlaying: false,
			currentTime: 0.0,
			duration: 0.0,
			volumeLevel: 1.0,
			fullScreenMode: false
		};

	}
	shouldComponentUpdate( nextProps, nextState ) {

		if (
			nextState.fullScreenMode !== this.state.fullScreenMode ||
			nextState.isPlaying !== this.state.isPlaying ||
			nextState.currentTime !== this.state.currentTime ||
			nextState.duration !== this.state.currentTime ||
			nextState.volumeLevel !== this.state.volumeLevel ||
			nextProps.poster !== this.props.poster ||
			nextProps.url !== this.props.url
		) {
			return true;
		}

		return false;
	}
	componentDidMount() {
		this.canPlayThrough = false;
		this.canPlay = false;

		if ( !this.refs.videoTag ) {
			return false;
		}
		this.refs.videoTag.addEventListener( 'canplaythrough', function () {
			this.canPlayThrough = true;
		}, false );

		this.refs.videoTag.addEventListener( 'canplay', ( e ) => {
			this.canPlay = true;
		}, false );

		this.refs.videoTag.addEventListener( 'timeupdate', ( e ) => {
		  this.setState( {
			currentTime: e.target.currentTime,
			duration: e.target.duration
		  } );
		}, false );


		this.refs.videoTag.addEventListener( 'progress', () => {
			let max_val = 0;
			let i = 0;
			/*
				A little bit of crazy design here:  First (and the non-crazy part) the browser does not just give us a single "loaded amount" value for how much of a video is buffered.  Instead, it automatically handles the non-trivial case of the user skipping ahead to later parts of the video - it will actually stop loading the first part, and immediate start loading the later part of the video that they've switched to.  This means that rather than one contiguous range of video having been loaded, we've instead got multiple, separate chunks.

				The crazy bit is how we access this.  Instead of just giving us an array, it gives us a "number of chunks" (named `length`), and then for each numerical index into this, gives us a function we can call (with the index as a parameter) to get the `start()` and `end()` of each range.  I have to imagine this is an optimization to keep the same API working regardless of how it gets abused (probably for some incredibly 'perverse case" like a video which has hundreds or even thousands of chunks in it as it loaded - you wouldn't ever get such a thing from the user clicking on it, but some procedural playhead movement, like a jog controller, could easily cause this kind of breakage).
			*/

			try {

				if ( this.refs.videoTag && this.refs.videoTag.buffered ) {
					for ( i; i < this.refs.videoTag.buffered.length; i++ ) {
						if ( this.refs.videoTag.buffered.end && this.refs.videoTag.buffered.end( i ) ) {
							if ( this.refs.videoTag.buffered.end( i ) > max_val ) {
								max_val = this.refs.videoTag.buffered.end( i );
							}
						}
					}
					if ( this.refs.videoTag.duration ) {
						this.setState( {
							bufferedFraction: ( max_val / this.refs.videoTag.duration )
						} );
					}
				}
			
			} catch ( exception ) {

			}

		} );

		/*
			Stop video when it is completed playing
		*/
		this.refs.videoTag.addEventListener( 'ended', ( e ) => {
			this.setState( {
			  	isPlaying: false,
				currentTime: 0.0,
				duration: 0.0
			} );
		}, false );

	}
	componentDidUpdate() {

		if ( this.refs.videoTag ) {

			if ( this.state.isPlaying ) {
				try {
					if ( this.canPlay ) {
						this.refs.videoTag.play();
					}
				} catch ( e ) {
					
				}
			} else {
				this.refs.videoTag.pause();
			}
			
		}
			
	}
	toggleCenteredIcon = () => {
		this.setPlayback( !this.state.isPlaying );
	}
	togglePlayback = () => {
		webTrack( WT_IDS.VIDEO_PLAY_PAUSE );
		this.setPlayback( !this.state.isPlaying );
	}

	setPlayback = ( isActive ) => {
		this.setState( { isPlaying: isActive } );
	}

	resetPlayback = () => {
		this.setPlayback( false );
		this.setProgress( 0.0 );
	}

	setProgress = ( value ) => {
		const newProgress = this.state.duration * value;

		if( this.refs.videoTag && Number.isFinite( newProgress ) && newProgress !== null ) {
			if( this.refs.videoTag.canPlayThrough ) {
				this.refs.videoTag.currentTime = newProgress;
			}

			this.setState( {
				currentTime: newProgress
			} );
		}
	}

	setVolume = ( value ) => {
		this.refs.videoTag.volume = value;

		this.setState( {
			volumeLevel: value
		} );
	}
	
	goFullScreen = ( event ) => {

		const doFullScreen = ( element ) => {

		  if ( !element ) {
			return false;
		  }
		  if( element.requestFullscreen ) {
		    element.requestFullscreen();
		  } else if( element.mozRequestFullScreen ) {
		    element.mozRequestFullScreen();
		  } else if( element.webkitRequestFullscreen ) {
		    element.webkitRequestFullscreen();
		  } else if( element.msRequestFullscreen ) {
		    element.msRequestFullscreen();
		  }
		};
		this.setState( {
			fullScreenMode: true
		} );
		doFullScreen( this.refs.videoPlayer );
	}
	removeFullScreen = ( event ) => {

		const doFullScreen = ( element ) => {
		  if( document.exitFullscreen ) {
		    document.exitFullscreen();
		  } else if( document.mozCancelFullScreen ) {
		    document.mozCancelFullScreen();
		  } else if( document.webkitCancelFullScreen ) {
		    document.webkitCancelFullScreen();
		  } else if( document.msExitFullscreen ) {
		    document.msExitFullscreen();
		  }
		};
		this.setState( {
			fullScreenMode: false
		} );
		doFullScreen( this.refs.videoPlayer );
	}
	
	render() {
		return (
			<div className="video-primary-player-display" ref="videoPlayer">
				<div className="video-and-controls-wrapper">
					<CenteredPlayerIcon doAction={this.toggleCenteredIcon} {...this.state} >
						<video id="mainVideoPlayer" ref="videoTag" src={this.props.url} poster={this.props.poster} onClick={this.togglePlayback} />
					</CenteredPlayerIcon>
					<div id="mediaControls" >
						<PlayPauseButton {...this.state} doAction={this.togglePlayback} />
						<ProgressBar {...this.state} onUpdate={this.setProgress} />
						<TimeDisplay {...this.state} expectedDuration={this.props.expectedDuration} />
						<VolumeButton {...this.state} onUpdate={this.setVolume} />
						<FullScreenButton {...this.state} goFullScreen={this.goFullScreen} removeFullScreen={this.removeFullScreen} />
					</div>
				</div>
			</div>
		);
	}
}

class FullScreenButton extends React.Component {
	constructor( props ) {
		super( props );

		this.toggleFullScreen = this.toggleFullScreen.bind( this );
	}


	
	toggleFullScreen( event ) {
		if( this.props.fullScreenMode ) {
			this.props.removeFullScreen( event );
		} else {
			this.props.goFullScreen( event );
		}
	}

	render() {
		return (
			<div
				className={ this.props.fullScreenMode ? 'exit-fullscreen-button' : 'fullscreen-button' }
				title="Fullscreen"
				onClick={ ( event ) => { this.toggleFullScreen( event ); } }
			/>

		);
	}
}



export default VideoPlayer;
