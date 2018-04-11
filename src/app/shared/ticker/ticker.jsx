import React from 'react';
import { TICKER } from 'app/app-lang';
import { flatten, debounce, isEqual } from 'lodash';
import './ticker.scss';

/* WebTrack */
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';

export class _Ticker extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			pause: false,
            ticks: [],
            timeStamp: new Date().getTime()
		};
		this.onResizeListener = debounce( this.doTickerScroll.bind( this ), 333 );
	}
	componentDidMount() {
        window.addEventListener( 'resize', this.onResizeListener, false );
	}
    componentWillReceiveProps( nextProps ) {
    	if( !isEqual( nextProps._state, this.props._state ) ) {
    		this.getTickerArray( nextProps._state, 1 );
    	}
    }
	componentDidUpdate( prevProps, prevState ) {
    	if( !isEqual( prevProps._state, this.props._state ) ) {
    		this.getTickerArray( this.props._state, this.getTickerDimensionFractions() );
    	}
    	if( prevState.timeStamp !== this.state.timeStamp ) {
    		this.doTickerScroll();
    	}
	}
    componentWillUnmount() {
      window.removeEventListener( 'resize', this.doTickerScroll(), false );
    }
	toggleScroll() {
		webTrack( WT_IDS.TICKER_VIEW );
		switch( this.tickerContentsContainerAnimation2.playState ) {
			case 'running':
				this.tickerContentsContainerAnimation.pause();
				this.tickerContentsContainerAnimation2.pause();
				this.setState( { pause: true } );
			break;
			case 'paused':
				this.tickerContentsContainerAnimation.play();
				this.tickerContentsContainerAnimation2.play();
				this.setState( { pause: false } );
			break;
		}
	}
	getTickerDimensionFractions() {

		const tickerContentWidth = this.refs.tickerContents.offsetWidth;
		const tickerContainerWidth = this.refs.tickerContainer.offsetWidth;
		const tickerContentFraction = Math.ceil( tickerContainerWidth / tickerContentWidth );

		if( tickerContentFraction === Infinity ) {
			return false;
		}

		return tickerContentFraction;

	}
	doTickerScroll() {

		if( !this.refs.tickerContentsContainer ) {
			return false;
		}

		const tickerContentsWidth = this.refs.tickerContents.offsetWidth;
		const pixelsPerMs = tickerContentsWidth / .05;

		this.tickerContentsContainerAnimation = this.refs.tickerContentsContainer.animate( [
			{ transform: 'translateX(0px)' },
			{ transform: 'translateX(-' + tickerContentsWidth * 2 + 'px' + ')' }
		], {
			duration: pixelsPerMs,
			endDelay: pixelsPerMs,
			iterations: Infinity,
			fill: 'both'
		} );

		this.tickerContentsContainerAnimation2 = this.refs.tickerContentsContainer2.animate( [
			{ transform: 'translateX(0px)' },
			{ transform: 'translateX(-' + tickerContentsWidth * 2 + 'px' + ')' }
		], {
			duration: pixelsPerMs,
			delay: pixelsPerMs / 2,
			iterations: Infinity,
			fill: 'both'
		} );

	}
	getHeadlines( array ) {
		const filterUrgentHeadlines = ( array ) => {

			const array2 = [];

			for ( var i = 0; i < array.length; i++ ) {
				if( array[ i ].urgentMsg === true ) {
					array2.push( array[ i ] );
				}
			}

			if( array2.length > 0 ) {
				return array2;
			} else {
				return array;
			}
		};

		return filterUrgentHeadlines( array );
	}
	newtickerArray( fraction, tickerArray ) {
		const array = [];
		for ( var i = 0; i < fraction; i++ ) {
				array.push( tickerArray );
		}
		return array;
	}
	getTickerArray( ticks, fraction ) {

		let fraction2 = fraction;

		if( !fraction2 ) {
			fraction2 = 1;
		}

        this.setState( {
            ticks: flatten( this.newtickerArray( fraction2, this.getHeadlines( ticks ) ) ),
            timeStamp: new Date().getTime()
        } );
	}
	renderPause() {
		const { pause } = this.state;
		if( pause ) {
			return (
				<div className="play">
					<div className="triangle"></div>
				</div>
			);
		} else {
			return (
				<div className="pause">
					<div className="rectangle"></div>
					<div className="rectangle"></div>
				</div>
			);
		}
	}
	render() {

		const { ticks } = this.state;

        if( ticks.length === 0 ) {
            return false;
        }

		return (
			<div className="ticker-container" ref="tickerContainer">
				<div className="ticker">
					<div className="sticker">
		              <span>{TICKER.STICKER}</span>
		            </div>
					<div className="ticker-contents-container" ref="tickerContentsContainer">
						<div className="ticker-contents" ref="tickerContents">
							{ new this.props._template( { _state: ticks } ).render() }
						</div>
					</div>
					<div className="ticker-contents-container2" ref="tickerContentsContainer2">
						<div className="ticker-contents">
							{ new this.props._template( { _state: ticks } ).render() }
						</div>
					</div>
					<div className="ticker-btn-pause" onClick={ () => { this.toggleScroll(); } }>
						{ this.renderPause() }
					</div>
				</div>
			</div>
		);
	}
}

_Ticker.propTypes = {
//  _state: React.PropTypes.object.isRequired,
	_template: React.PropTypes.func.isRequired
};
