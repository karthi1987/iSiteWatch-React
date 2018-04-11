//libs
import React from 'react';
import { connectAndMap } from '../../utils/utils';
import { browserHistory } from 'react-router';
import Slider from 'react-slick';

import Moment from 'moment-timezone';

import isEqual from 'lodash/isEqual';

//actions reducers
import { getAttractLoopData, showAttractLoop, closeAttractLoop, resetAttractLoopTimeout } from './attract-loop-actions-reducers';
//AttractLoop componnents
import InitialPage from './slides/initial-page';
import Metrics from './slides/metrics';
import TransactionTime from './slides/transaction-time';
import Agenda from './slides/agenda';
import Nps from './slides/nps';

import { closeModal } from '../../shared/overlay/overlay-actions-reducers';
//scss
import './attract-loop.scss';

//constants
const AttractLoopConst = {
    staticType: 'static',
    dataType: 'data',
    metrics: 'metrics',
    transactionTime: 'transactionTime',
    agenda: 'agenda',
    nps: 'nps'
};

/*****************************************************************************************************************************

 Verizon keeps changing their AttractLoop content which makes FED to rework everytime when there is a new change,
 So FED deciced to Rewrite this component inorder to consume all the variations(Static, Data and StaticData) and slide order(1,2,3).
 This is how the new component works

 Case 1: Works for Static Image full layout.
    {
        "type": "static",
        "name": "initialPage",
        "display": true,
        "content": {
            "img": "/smartboard/assets/images/attract-loop/Deliver_screen.svg"
        }
    }

    display: true
    Display should be true if you want to participate in the attract-loop slides, if this turned to be false then FED doesnt display at the front view.

    type: static
    We need to mention what type of slide are we presenting here, could be either static or data, Since we are in the static layout, It should be static here.

    content: {
        "img": "blah blah.svg"
    }
    Since this is static image layout, FED will read the img from the content and display at the front view.

 Case 2: Works for Data View.
    {
        "type": "data",
        "name": "transactionTime",
        "display": true,
        "content": {
            "img": "/smartboard/assets/images/attract-loop/Asset 3.svg",
            "label": "Avg Experience Time (Territory)",
            "value": "3.40",
            "valueType":""
        }
    },

    name: "transactionTime"
    Name attribute defines which component has to load in the slide.

    content: {
        "img": "/smartboard/assets/images/attract-loop/Asset 3.svg",
        "label": "Avg Experience Time (Territory)",
        "value": "3.40",
        "valueType":""
    }
    Since this is data layout, FED will read the data(img, label, value) from the content and display at the front view.

 Case 3: Works for both Static and Data View.
    {
        "type": "static",
        "name": "initialPage",
        "display": true,
        "content": {
            "img": "/smartboard/assets/images/attract-loop/Deliver_screen.svg"
        }
    },
    {
        "order": 3,
        "type": "data",
        "name": "transactionTime",
        "display": true,
        "content": {
            "img": "/smartboard/assets/images/attract-loop/Asset 3.svg",
            "label": "Avg Experience Time (Territory)",
            "value": "3.40",
            "valueType":""
        }
    }

 ***************************************************************************************/

/*******************************************************************************
 *  1. AttractLoop
 */

/*
 * 1. AttractLoop
 *
 * AttractLoop uses InitialPage, Metrics, TransactionTime, Nps and Agenda components.
 * the below classes handles the AttactLoop behavior
 */
const AttractLoop = connectAndMap(
    [ 'app', 'attractLoop', 'app.session' ],
    {
        getAttractLoopData,
        resetAttractLoopTimeout,
        showAttractLoop,
        closeAttractLoop,
        closeModal
    }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            this.state = {
                firstTimeoutSet: false,
                displayAttractLoop: false,
                currentSlideIndex: 0,
                allowReset: false
            };

            this.getSlidesView = this.getSlidesView.bind( this );
            this.closeAttractLoop = this.closeAttractLoop.bind( this );
        }
        componentWillMount() {
            /*
             * when the component first mounts, get attract loop data,
             * so that attract loop will have a waitTime
             */
            this.props.getAttractLoopData();
        }

        /*
         * if component unmounts for any reason, clear the attractLoopTimeout
         */
        componentWillUnmount() {
            if( this.attractLoopTimeout ) {
                clearTimeout( this.attractLoopTimeout );
            }
            if ( this.sliderAutoplay ) {
                this.stopAttractLoopAutoplay();
            }
        }

        componentWillReceiveProps( nextProps ) {
            // start the timeout
            if (
                nextProps.app.loaded.attractLoopData &&
                !this.state.firstTimeoutSet
            ) {
                this.stopAttractLoopAutoplay();
                this.resetAttractLoopTimeout( nextProps, nextProps.attractLoop.data.waitTime );
                this.setState( {
                    firstTimeoutSet: true
                } );
            }
            // after the timeout fires, we decide whether we show the attractLoop
            // or continue to call for data if we have no slide data.
            else if (
                nextProps.app.loaded.attractLoopData &&
                nextProps.attractLoop.data.slides.length &&
                this.state.displayAttractLoop
            ) {
                // this.stopAttractLoopAutoplay();
                this.props.showAttractLoop();

                // this.attractLoopAutoplay( nextProps.attractLoop.data.waitTime );

                // we reset the display to false to not allow data calls like static token to cause issues
                this.setState( {
                    displayAttractLoop: false
                } );

            } else if (
                nextProps.app.loaded.attractLoopData &&
                nextProps.attractLoop.data.slides.length === 0 &&
                this.state.displayAttractLoop
            ) {
                this.stopAttractLoopAutoplay();
                clearTimeout( this.attractLoopTimout );
                this.setAttractLoopTimeout( nextProps, 3600000 ); // we keep calling until we get slide data

                // we reset the display to false to not allow data calls like static token to cause issues
                this.setState( {
                    displayAttractLoop: false
                } );
            }

            /*
             * if we receive a new resetTime, then clear and set attractLoopTimout
             * We call this only if we have slide data, otherwise we end up creating
             * multiple timers.
             */
            if( this.props.attractLoop.resetTime !== nextProps.attractLoop.resetTime ) {
                // this.stopAttractLoopAutoplay();
                // we reset the display to false to not allow data calls like static token to cause issues
                // this.setState( {
                //     displayAttractLoop: true
                // } );
                this.resetAttractLoopTimeout( nextProps, nextProps.attractLoop.data.waitTime );

                // we reset the display to false to not allow data calls like static token to cause issues
                this.setState( {
                    displayAttractLoop: false
                } );
            }
        }

        attractLoopAutoplay = ( slideDelay ) => {
            this.sliderAutoplay = setInterval( () => {
                this.slider.slickNext();
            }, slideDelay );
        }

        stopAttractLoopAutoplay() {
            clearInterval( this.sliderAutoplay );
        }

        // This gets called when we get data
        setAttractLoopTimeout( nextProps, waitTime ) {
            this.attractLoopTimeout = setTimeout(
                () => {
                    const displayTime = nextProps.attractLoop.data.displayTime ? nextProps.attractLoop.data.displayTime : this.state.displayTime;
                    this.callAttractLoopData( displayTime );
                },
                waitTime
            );
        }

        resetAttractLoopTimeout( nextProps, waitTime ) {
            clearTimeout( this.attractLoopTimeout );
            this.setAttractLoopTimeout( nextProps, waitTime );
        }

        /*
         * when attractLoopTimeout executes, we call for fresh data, then
         * we set the attract loop to show.
         */
        callAttractLoopData( displayTime ) {
            clearTimeout( this.attractLoopTimeout );

            // get the most up to data data
            this.props.getAttractLoopData();

            this.setState( {
                autoplaySpeed: displayTime ? displayTime : this.state.autoplaySpeed,
                displayAttractLoop: true
            } );
            const autoplaySpeed = displayTime ? displayTime : this.state.autoplaySpeed;

            this.setState( {
                sliderSettings: {
                    ...this.state.sliderSettings,
                    autoplaySpeed: autoplaySpeed
                }
            } );

            this.attractLoopAutoplay( autoplaySpeed );
        }

        /*
         * when we close the attractLoop, route to home view,
         * close the overlay modal, set open to false,
         * and set the attractLoop timeout again.
         */
        closeAttractLoop() {
            // reset the number of times data is called so that the app will make
            // appropriate calls when the loop shows up again.
            this.setState( {
                timesDataCalled: 0,
                firstTimeoutSet: false
            } );

            this.stopAttractLoopAutoplay();
            this.props.closeModal();
            this.props.closeAttractLoop();

            browserHistory.push( APP_PATH + '/home' );

            // this.setAttractLoopTimeout( this.props );
        }

        getSlidesView() {

            const {
                 data: { slides, location, lastUpdate }
            } = this.props.attractLoop;

            const slidesToRender =  [];

            const sliderSettings = {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: this.props.attractLoop.data.waitTime,
                lazyLoading: true,
                pauseOnHover: false,
                afterChange: index => {
                    this.setState( {
                        currentSlideIndex: index
                    } );
                }
            };

            if ( slides && slides.length > 0 ) {
                // const items = slides.sort( ( a, b ) => a.order - b.order );
                // if ( items && items.length > 0 ) {
                    slides.map(
                        ( item, index ) => {
                            if ( item.display === true ) {
                                if ( item.type === AttractLoopConst.staticType ) {
                                    /*** display static content ***/
                                    slidesToRender.push(
                                        <div key={ index }>
                                            <RenderFullPageImageLayout { ...item.content } />
                                        </div> );
                                } else if( item.type === AttractLoopConst.dataType ) {
                                    /*** Display dynamic data content ***/
                                    switch( item.name ) {
                                        //redirect to the specific component and get content
                                        case AttractLoopConst.metrics:
                                            slidesToRender.push(
                                                <div key={ index }>
                                                    <Metrics
                                                        metrics={ item.content }
                                                        location={ location }
                                                        lastUpdate={ lastUpdate }
                                                    />
                                                </div> );
                                        break;
                                        case AttractLoopConst.transactionTime:
                                            slidesToRender.push(
                                                <div key={ index }>
                                                    <TransactionTime
                                                        transactionTime={ item.content }
                                                        location={ location }
                                                        lastUpdate={ lastUpdate }
                                                    />
                                                </div> );
                                        break;
                                        case AttractLoopConst.agenda:
                                            slidesToRender.push(
                                                <div key={ index }>
                                                    <Agenda
                                                        agenda={ item.content }
                                                        location={ location }
                                                        lastUpdate={ lastUpdate }
                                                    />
                                                </div> );
                                        break;
                                        case AttractLoopConst.nps:
                                            slidesToRender.push(
                                                <div key={ index }>
                                                    <Nps
                                                        nps={ item.content }
                                                        location={ location }
                                                        lastUpdate={ lastUpdate }
                                                    />
                                                </div> );
                                        break;
                                    }
                                }
                            }
                        }
                    );
                // }
                return (
                    <div className="attract-loop"
                         onTouchStart={ this.closeAttractLoop }
                         onMouseDown={ this.closeAttractLoop }
                    >
                        <Slider ref={ c => this.slider = c } { ...sliderSettings } >
                            { slidesToRender }
                        </Slider>
                    </div>
                );

            } else {
                return null;
            }
        }

        render() {

            const {
                open
            } = this.props.attractLoop;

            return (
                <div>
                    {
                        open
                        &&
                        this.getSlidesView()
                    }
                </div>
            );
        }
    }
);

/*
 *
 *  Fullpage Image View Layout
 */
const RenderFullPageImageLayout = ( props ) => {

    if ( !props ) {
        return null;
    }

    const style = {
        backgroundImage: 'url(\'' + props.img + '?' + Moment().format( 'M-D' ) + '\')'
    };

    return (
        <div>
            {
                props.img
                &&
                <div className="initial-page" style={ style }></div>
            }
        </div>
    );
};

export default AttractLoop;
