//lib
import React from 'react';
import $ from 'jquery';
import { isEqual } from 'lodash';
import Moment from 'moment-timezone';
import { range } from 'lodash';
var Slider = require( 'react-slick' );
//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
// shared components
import { LeftArrow, RightArrow } from '../../shared/slider-directional-nav/slider-directional-nav';
import ErrorMessage from 'app/shared/error-message/error-message';
// action creators
import { loadQuickhits, clearLaunchedQuickhit } from './quick-hits-actions-reducers';
import { openModal, closeModal } from '../../shared/overlay/overlay-actions-reducers';
//constants
import EndpointConstants from '../../../endpoints/endpoints';
//scss
import './quick-hits.scss';
import '../../shared/slider-directional-nav/slick.scss';
import '../../shared/slider-directional-nav/slick-theme.scss';

/*******************************************************************************
 *  1. GridCell
 *  2. BGCell
 *  3. QuickhitsOverlay
 *  4. QuickhitsOverlayDisplayCell
 *  5. HiddenButton
 *  6. QuickHits
 */

/*
 * 1. GridCell
 */
var GridCell = React.createClass( {
    render: function () {

        return (
            <div className={ 'proportional-size-anchor' }>
                <div className={ 'relative-size-anchor' }>
                    <div className={ 'box-inner' }> {this.props.children} </div>
                </div>
            </div>
        );
    }
} );

/*
 * 2. BGCell
 */
const BGCell = connectAndMap(
    [ 'views.quickhits', 'views.quickhits.quickhitId' ], { openModal }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            this.zoom = this.zoom.bind( this );
        }

        componentDidMount() {
            this.overlayElm = $( '.quickhits-overlay' ).get( 0 );

            if( this.props.quickhitId == this.props.quickhits_index ) {
                this.zoom();
            }
        }

        zoom() {
            const _rect = this.cellElm.getBoundingClientRect();

            this.overlayComponent = ( <QuickhitsOverlay srcRect={ _rect } cellData={this.props} template={this.props.template} { ...this.props } /> );

            if ( this.props.milestoneId ) {
                webTrack( this.props.milestoneId );
            }

            this.props.openModal( this.overlayComponent );
        }

        quickhitsImagePath() {
            return EndpointConstants.QUICKHITS_IMAGE_PATH;
        }

        cellStyle() {
            return { backgroundImage: 'url(' + this.quickhitsImagePath() + this.props.tnImage + '?' + Moment().format( 'M-D' ) + ')' } ;
        }

        render() {

            return (
                    <div className={'bg-cell'} style={this.cellStyle()} onClick={ this.zoom } ref={cellElm => this.cellElm = cellElm}  >
                        <div className={'stuff'}>
                            <div className={'description-bar'}>
                                <div className={'description-text'}>

                                    <span className="category">
                                        <span className="new">{this.props.newFlag ? 'New! ' : ' '}</span>
                                        <span className="category-text">{this.props.type}</span>
                                    </span>
                                    <span className="title">{this.props.title}</span>
                                </div>
                                <div className={'resize-indicator'}>
                                    <span className="indicator-icon vz vz-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
            );
        }
    }
);

/*
 * 3. QuickhitsOverlay
 */
const QuickhitsOverlay = connectAndMap(
    [ 'views.quickhits' ], { closeModal }
)(
class extends React.Component {
    constructor( props ) {
        super( props );

        this.onVisit = this.onVisit.bind( this );
    }

    onVisit( visited ) {
        // _Actions.markAsSeen(visited);
    }

    componentDidMount() {
        this.startedClosing = false;
        this.startedOpening = 0;

        const initial_css = {
            'top': this.props.srcRect.top,
            'left': this.props.srcRect.left,
            'width': this.props.srcRect.width,
            'height': this.props.srcRect.height,
            'transform': 'translateX(0) rotateY( 180deg ) rotateZ( 0deg )', // translateZ(100px)',
            'opacity': '0.65',
        };

        const expanded_css = {
            'opacity': '1.0',
            'top': '0%',
            'left': '0%',
            'width': '100%',
            'height': '100%',
            'transform': 'translateX(0) rotateY( 0deg ) rotateZ( 0deg )', // translateZ(100px)',
            'transition': 'all 0.50s ease-in-out',
        };


        $( this.overlayElm ).css( initial_css );


        const open_promo = () => {
            if( this.startedOpening == 0 ) {
                this.startedOpening = 1;
                window.requestAnimationFrame( open_promo );
            } else if ( this.startedOpening == 1 ) {
                this.startedOpening = 2;
                $( this.overlayElm ).css( expanded_css );
                $( this.overlayElm ).addClass( 'huge' );
                $( this.backfillElm ).addClass( 'show' );
            }
        };

        window.requestAnimationFrame( open_promo );

        $( this.overlayElm ).on( 'transitionend', ( e ) => {
            if( e.originalEvent && e.originalEvent.propertyName == 'height' ) {
                $( this.overlayElm ).find( '.description-bar' ).trigger( 'transitionend' );
            }
        } );
    }

    close( event ) {
        if( this.startedClosing != true ) {
            this.startedClosing = true;
            this.onVisit( this.props.cellData );
            const closed_css = {
				'opacity': '0.0',
                'top': this.props.srcRect.top,
                'left': this.props.srcRect.left,
                'width': this.props.srcRect.width,
                'height': this.props.srcRect.height,
				'transition': 'all 0.50s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                'transform': 'translateX(0) rotateY( 180deg ) rotateZ( 0deg )', // translateZ(100px)',
			};
			$( this.overlayElm ).css( closed_css );
			$( this.overlayElm ).removeClass( 'huge' );
			$( this.backfillElm ).removeClass( 'show' );
			$( this.overlayElm ).on( 'transitionend', () => {
                this.props.closeModal();
			} );
        }
    }


    render() {
        return (
            <div className={'quickhits-overlay-backfill'} ref={backfillElm => this.backfillElm = backfillElm} onClick={ this.close.bind( this ) } >
                <div className={'quickhits-overlay template-' + this.props.template} ref={overlayElm => this.overlayElm = overlayElm} >
                    <QuickhitsOverlayDisplayCell {...this.props} close={ this.close.bind( this ) } />
                </div>
            </div>
        );
    }
}
);

/*
 * 4. QuickhitsOverlayDisplayCell
 */
class QuickhitsOverlayDisplayCell extends React.Component {
    componentDidMount() {
        this.setUpRescalingText();
    }


    setUpRescalingText() {
        var set_width = function( $el ) {
            const elw = $el.width();
            const elh = $el.height();
            const eld = Math.min( elw, elh );

            const fontSize = eld / 9.5;
            $el.css( 'font-size', fontSize + 'px' );
        };

        const desc_css = {
            'opacity': '1.0',
            'transition': 'opacity 0.2s cubic-bezier(0.950, 0.050, 0.795, 0.035)'
        };

        window.requestAnimationFrame( () => {
            $( window ).resize( () => { set_width( $( this.textBar ) ); } );

            $( this.textBar ).on( 'transitionend', () => {
                set_width( $( this.textBar ) );
                $( this.textBar ).css( desc_css );
            } );

        } );
    }


    quickhitsImagePath() {
        return EndpointConstants.QUICKHITS_IMAGE_PATH;
    }

    cellStyle() {
        return { backgroundImage: 'url(' + this.quickhitsImagePath() + this.props.dtlImage + '?' + Moment().format( 'M-D' ) + ')' } ;
    }

    render() {
        return (
            <div className={'centering-anchor'}>
                <div className={'proportional-size-anchor'}>
                    <div className={'relative-size-anchor'}>
                        <div className={'box-inner'}>
                            <div className="quickhits-display-big" onClick={ ( event ) => { event.stopPropagation(); } }>
                                {
                                    ( ( ) => {
                                        if ( this.props.linkUrl && this.props.template === '2' ) {
                                            return (
                                                <a
                                                    style={ { width: '100%', height: '100%', display: 'block' } }
                                                    onClick={
                                                        ( event ) => {

                                                            // event.preventDefault();
                                                            if ( this.props.linkMilestoneId ) {
                                                                webTrack( this.props.linkMilestoneId );
                                                                window.open( this.props.linkUrl, '_blank' );
                                                            }
                                                            event.stopPropagation();
                                                        }
                                                     }>
                                                    <div className={'background-holder'} style={this.cellStyle()} />
                                                </a>
                                            );
                                        } else {
                                            return (
                                                <div className={'background-holder'} style={this.cellStyle()} />
                                            );
                                        }
                                    } )( )
                                }

                                <div className={'description-bar'}  ref={textBar => this.textBar = textBar} >
                                    {
                                        ( ( ) => {
                                            // if we have a full size image template, don't render the text elements & close icon
                                            if ( this.props.template !== '2' ) {
                                                return (
                                                        <div className={'description-text'}>
                                                            <span className="date">{ this.props.startDate + '—' + this.props.endDate }</span>
                                                            <span className="title">{this.props.title}</span>
                                                            <span className="description">{this.props.description}</span>
                                                            <span className="category">{ this.props.category }</span>
                                                            {
                                                                this.props.linkUrl
                                                                &&
                                                                <a href={this.props.linkUrl}
                                                                    onClick={
                                                                        ( event ) => {
                                                                            event.stopPropagation();
                                                                            event.preventDefault();
                                                                            if ( this.props.linkMilestoneId ) {
                                                                                webTrack( this.props.linkMilestoneId );
                                                                                window.open( this.props.linkUrl, '_blank' );
                                                                            }
                                                                        }
                                                                     }
                                                                    target="_blank">
                                                                    <span className="link">{ this.props.linkText }</span>
                                                                </a>
                                                            }
                                                        </div>
                                                    );
                                                }
                                            } )( )
                                        }
                                    <div className={'resize-indicator'} onClick={ this.props.close }>
                                        <span className="indicator-icon vz vz-minus" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*
 * 5. HiddenButton
 */
const HiddenButton = () => ( <button style={ { display: 'none' } } /> );

/*
 * 6. QuickHits
 */
const QuickHits = connectAndMap(
    [ 'views.quickhits', 'app.session', 'app.loadingErrors', 'app.loaded' ],
    { loadQuickhits, clearLaunchedQuickhit }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );
            const numPerPage = 10;
            const quickhits = this.props.quickhits.data.quickhits;
            const hasSlider = ( quickhits && quickhits.length > numPerPage );

            //define our slider settings in state
            this.state = {
                numPerPage: numPerPage,
                sliderSettings: {
                    dots: true,
                    infinite: hasSlider ? true : false,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    autoplay: false,
                    prevArrow: hasSlider ? <LeftArrow /> : <HiddenButton />,
                    nextArrow: hasSlider ? <RightArrow /> : <HiddenButton />
                }
            };
        }

        componentWillMount() {
            this.props.loadQuickhits();
        }

        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.loadQuickhits();
            }

            //if we receive different quick hits data, reset the slider settings
            if( !isEqual( this.props.quickhits.data.quickhits, nextProps.quickhits.data.quickhits ) ) {
                this.resetSliderSettings( nextProps );
            }
        }

        resetSliderSettings( props ) {
            const quickhits = props.quickhits.data.quickhits;
            const hasSlider = ( quickhits && quickhits.length > this.state.numPerPage );
            this.setState( {
                sliderSettings: {
                    ...this.state.sliderSettings,
                    infinite: hasSlider ? true : false,
                    prevArrow: hasSlider ? <LeftArrow /> : <HiddenButton />,
                    nextArrow: hasSlider ? <RightArrow /> : <HiddenButton />
                }
            } );
        }

        getOpenQuickhitsId = () => {
            if( this.props.params ) {
                return this.props.params.id;
            } else {
                return undefined;
            }
        }

		showQuickhitsError( message ) {
			return (
				<ErrorMessage message={message} />
			);
		}

        componentWillUnmount() {
            this.props.clearLaunchedQuickhit();
        }

        renderQuickhits() {
            const quickhits = this.props.quickhits.data.quickhits;
            const numPerPage = this.state.numPerPage;

            return(
                <div className={'quickhits-page'}>
                    {
                        quickhits
                        &&
                        <div className="quickhits-collection">
                            <Slider { ...this.state.sliderSettings }>
									{
										range( Math.ceil( quickhits.length / numPerPage ) ).map( ( value, index ) =>
                                                <div key={ index + 'view' }>
                                                    <div className="row">
                                                        <div className="quickhits-slide-container">
                                                            {
        														quickhits.slice( numPerPage * value, Math.min( numPerPage * value + numPerPage, quickhits.length ) ).map( ( value, index ) =>
        															<div className="quickhits-container" key={ index + value.id }>
        																	<GridCell>
        																		<BGCell { ...value }
        																			quickhits_index={ value.id }
        																			openQuickhitsIndex={ this.props.openQuickhitsIndex }
        																			canBeClicked={ this.props.canBeClicked } />
        																	</GridCell>
        															</div>
        														)
        													}
                                                        </div>
                                                    </div>
                                                </div>
										)
									}
                            </Slider>
                        </div>
                    }
                </div>
            );
        }

		render() {
            const quickhitsViewLoaded = this.props.loaded.quickhitsViewData;
            const quickhitsViewError = this.props.loadingErrors.quickhitsViewData;

			if ( quickhitsViewLoaded && quickhitsViewError ) {
				return this.showQuickhitsError( quickhitsViewError );
			} else {
				return this.renderQuickhits();
			}
		}
    }
);

export default QuickHits;
