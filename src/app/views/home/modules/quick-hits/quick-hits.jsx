//libs
import React from 'react';
var Slider = require( 'react-slick' );
import { isEqual } from 'lodash';
import Moment from 'moment-timezone';
//utils
import { connectAndMap } from 'app/utils/utils';
import webTrack from 'utils/web-tracking/web-track';
import WT_IDS from 'utils/web-tracking/web-track-ids';
import EndpointConstants from 'endpoints/endpoints';
//actions creators
import { loadHomeQuickhits, launchQuickhit } from './quick-hits-actions-reducers';
//shared
import ErrorMessage from 'app/shared/error-message/error-message';
import { LoaderDots } from 'shared/loader/loader';
//scss
import 'app/shared/slider-directional-nav/slick.scss';
import 'app/shared/slider-directional-nav/slick-theme.scss';
import './quick-hits.scss';

/*******************************************************************************
 *  1. QuickHitsModule
 *  2. ModuleContent
 */

/*
 * 1. QuickHitsModule
 */
const QuickHitsModule = connectAndMap(
    [ 'views.home.modules.quickHits', 'app.session', 'app.loadingErrors', 'app.loaded' ],
    { loadHomeQuickhits, launchQuickhit }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            this.state = {
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
            this.props.loadHomeQuickhits();
        }

        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.loadHomeQuickhits();
            }

            this.setCarouselSettings( nextProps );
        }

        setCarouselSettings ( nextProps ) {
            let newSettings = this.state.settings;

            if ( !this.state.settings.autoplaySpeed && nextProps.quickHits.data && nextProps.quickHits.data.interval ) {
                newSettings = {
                    ...newSettings,
                    autoplaySpeed: nextProps.quickHits.data.interval
                };
            }

            if(
                !isEqual( this.props.quickHits.data, nextProps.quickHits.data ) ||
                (
                    !this.state.settings.autoplaySpeed &&
                    nextProps.quickHits.data && nextProps.quickHits.data.quickhits.length
                )
            ) {
                const hasSlider = nextProps.quickHits.data.quickhits.length > 1;
                newSettings = {
                    ...newSettings,
                    infinite: hasSlider ? true : false,
                    autoplay: hasSlider ? true : false
                };
            }

            this.setState( { settings: newSettings } );
        }

        quickhitsImagePath() {
            return EndpointConstants.QUICKHITS_IMAGE_PATH;
        }

        cellStyle( value ) {
            return { backgroundImage: 'url(' + this.quickhitsImagePath() + value.image + '?' + Moment().format( 'M-D' ) + ')' } ;
        }

        renderModuleContent() {
            const quickhitsViewLoaded = this.props.loaded.quickHitsModuleData;
            const quickhitsViewError = this.props.loadingErrors.quickHitsModuleData;

			if ( quickhitsViewLoaded && quickhitsViewError ) {
				return <ErrorMessage message={quickhitsViewError} />;
			} else if ( quickhitsViewLoaded && !quickhitsViewError ) {
                const quickhits = this.props.quickHits.data.quickhits;
                return <ModuleContent
                            quickhits={ quickhits }
                            settings={ this.state.settings }
                            launchQuickhit={ this.props.launchQuickhit }
                            cellStyle={ this.cellStyle.bind( this ) } />;
            }else{
                return <LoaderDots
                            loading={ this.props.loading }
                            loadCodes={ [ 'quickHitsModuleData' ] } />;
            }
        }

        render () {

            return (
                <div>
                    { this.renderModuleContent() }
                </div>
            );
        }
    }
);

/*
 * 1. ModuleContent
 */
const ModuleContent = ( { quickhits, settings, cellStyle, launchQuickhit } ) => {
    if( !quickhits ) {
        return false;
    }
    return (
        <div className="module-content quickhits-collection">
            {
                quickhits.length ?
                <Slider { ...settings }>
                    {
                        quickhits.map( ( value, index ) =>
                            <div key={ index + 'module' }
                                className="quickhits-container"
                                onClick={ () => {
                                    launchQuickhit( value.id );
                                    webTrack( WT_IDS.QUICK_HITS_VIEW );
                                    webTrack( value.webTrackId );
                                } }
                                style={ cellStyle( value ) } />
                        )
                    }
                </Slider>
                :
                null
            }
        </div>
    );
};

export default QuickHitsModule;
