import React from 'react';
import SnapGauge from './snap-gauge.js';
import classnames from 'classnames';
import './gauge.scss';
import Icon from '../icons/icons';
import { isEqual } from 'lodash';
import Numeral from 'numeral';
import $ from 'jquery';


const VALUE_TYPE_CHAR = {
    PCT: '%',
    CUR: '$'
};

/*
 *

    <Gauge
        id="string"
        nameSpace="string" // namespace gets prepended for most classNames
        name="string" // name appears above gauge
        percentage={ integer } // value dictates gauge fill
        graphic={ boolean } // whether to show the gauge or not
        objective={ number } // for objective value display
        result={ number } // for attainment value display
        tails={ boolean } // determines wether gauge can flip
        flipped={ boolean } // determines which side of gauge is shown
        strokeWidth={ number } // determines gauge stroke
        valueType="string" // "unit" || "pct" || "cur" - used for formatting number values
        valueRaw={ number } // determines center gauge number and gauge fill-to
        hasShadow={ boolean } // show shadow or not
        width={ number } // set a static width for the gauge
        minWidth={ number } // set a minWidth for resizeable gauge
        scheme="string" // legacy value - TODO: see if this fits
    />

 *
 */

/*   Components
 *
 *   1. Gauge
 *   2. GaugeGraphic
 *   3. GaugeFlipValues
 *
 */

/*
 *
 *   1. Gauge
 *
 *   Wrapper for the gauge. controls sizing the gauge and flipping the gauge
 *
 */

export default class Gauge extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            flipped: false,
            height: null,
            width: null,
            $gauge: false,
            renderTails: false
        };
        this.sizeGauge = this.sizeGauge.bind( this );
    }

    componentDidMount() {

        /*
         * if the gauge doesn't receive a set width as a prop,
         * then we let the gauge size itself and then resize it
         * based on the DOM clientWidth property inherited from the css
         */
        this.sizeGauge();
        //this.sizeTimeout = setTimeout( () => { this.sizeGauge(); }, 300 );

        /*
         * create resize event to resize gauge on window width change
         */
        window.addEventListener( 'resize', this.sizeGauge );

        /*
         * we stagger the application of the opacity depending on whether
         * we have a tails of true
         */
        this.opacityTimeout = setTimeout( () => {
            $( this.gaugeOpacity ).removeClass( 'no-opacity' );
            $( this.flip ).removeClass( 'flip-opacity' );
            this.setState( { renderFlipped: true } );
        }, 100 );

        if( this.props.tails ) {
            this.tailsTimeout = setTimeout( () => {
                this.setState( { renderTails: true } );
            }, 1000 );
        }

    }

    componentWillUnmount() {
        clearTimeout( this.tailsTimeout );
        clearTimeout( this.sizeTimeout );
        window.removeEventListener( 'resize', this.sizeGauge );
    }

    /*
     * sizeGauge is used in our resize event,
     * there is a timeout in case the user triggers a full-screen or restore event
     */
    sizeGauge() {
        this.setState( {
            height: this.props.width || this.refs.gaugeBody.clientWidth,
            width: this.props.width || this.refs.gaugeBody.clientWidth
        } );
    }

    /*
     * flips the gauge when user clicks on +
     */
    flipGauge() {
        this.setState( { flipped: !this.state.flipped } );
    }

    render() {
        const {
            props: {
                tails, graphic, name, id, nameSpace, scheme
            },
            state: {
                flipped, renderTails
            }
        } = this;

        return (
            <div className="gauge-opacity no-opacity" ref={ ( ref ) => this.gaugeOpacity = ref }>
                <h5 className={ classnames(
                        'gauge-header',
                        nameSpace + '-gauge-header'
                    ) }>
                    { name }
                </h5>
                <div id={ id  }
                    className={ classnames(
                        id,
                        scheme,
                        'gauge',
                        nameSpace + '-gauge ',
                        {
                            'gauge-flipper': tails,
                            'animate': flipped
                        }
                    )}
                    ref="gaugeBody"
                    >

                    <div
                        className={ classnames(
                            'gauge-front',
                            nameSpace + '-gauge-heads',
                            {
                                'gauge-heads': tails
                            }
                        )}
                        >

                        {
                            graphic
                            &&
                            <GaugeGraphic { ...this.props } />
                        }

                        {
                            tails
                            &&
                            <button type="button"
                                className={ classnames(
                                    'gauge-flip',
                                    'flip-opacity',
                                    nameSpace + '-gauge-flip'
                                )}
                                ref={ ( ref ) => this.flip = ref }
                                onClick={
                                    () => {
                                        //vzrewards.webTrack( milestoneId, 'Gauge - ' + name );
                                        this.flipGauge();
                                    }
                                }>
                                <span className="icon">+</span>
                            </button>
                        }
                    </div>

                    {
                        ( tails && renderTails )
                        &&
                        <div className={ classnames(
                                'gauge-tails',
                                nameSpace + '-gauge-tails'
                            )}>
                            <GaugeFlipValues { ...this.props } flipGauge={ this.flipGauge.bind( this ) }/>
                        </div>
                    }

                </div>
            </div>
        );
    }
}

/*
 *
 *   2. GaugeGraphic
 *
 *   Creates the gauge svg object using snapGauge and renders it within the DOM
 *
 */
class GaugeGraphic extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            gauge: null
        };
    }

    componentWillMount() {
        this.setState( { gauge: this.props } );
    }

    componentDidMount() {
        this.drawGauge( this.state.gauge );
    }

    /*
     * if new data loads in, redraw gauge
     */
    componentWillReceiveProps( nextProps, nextState ) {
        if( !isEqual( this.props, nextProps ) ) {

            this.setState( { gauge: false } );

            setTimeout( () => {
                this.setState( { gauge: nextProps } );
                this.drawGauge( nextProps );
            }, 50 );

        }
    }

    /*
     * initialize a new snapGauge and
     * have snapGauge draw our gauge svg and shadow
     */
    drawGauge( props ) {
        const { graphic } = props;

        const snapGauge = new SnapGauge();

        snapGauge.init( props );

        if( graphic ) {
            snapGauge.drawGauge( this.gauge );
        }


        /*
         * after our gauge is drawn,
         * setTimeout to remove a class to initiate CSS3 transition
         */
        setTimeout( () => {
            $( this.figure ).removeClass( 'scale-small' );
        }, 400 );
    }



    render() {
        return(
            <figure className="figure-scale scale-small" ref={ ( ref ) => this.figure = ref }>
                {
                    this.state.gauge
                    &&
                    <svg className={ 'gauge-graphic ' + this.props.nameSpace + '-gauge-graphic' } width="100%" height="100%" ref={gauge => this.gauge = gauge}></svg>
                }
            </figure>
        );
    }
}

/*
 *
 *   2. GaugeFlipValues
 *
 *   Creates the flip side of the gauge
 *
 */
class GaugeFlipValues extends React.Component {
    constructor( props ) {
        super( props );
        const {
             valueType, valueRaw, objective
         } = this.props;

        const text = this.formatText( valueType, valueRaw, objective );
        this.state = {
            resultText: text.result,
            objectiveText: text.objective
        };
    }

    /*
     * format our text according to valueType
     */
    formatText( valueType, valueRaw, objective ) {
        let resultText, objectiveText;
        switch( valueType ) {
            case 'pct':
                resultText = Numeral( valueRaw ).format( '0[.]0[0]a' ) + VALUE_TYPE_CHAR.PCT;
                objectiveText = Numeral( objective ).format( '0[.]0[0]a' ) + VALUE_TYPE_CHAR.PCT;
                break;
            /*
             * for case 'cur' we need to check whether our valueRaw is less than or greater than 1000
             * to determine wether to use Number() and setFixed()
             */
            case 'cur':
                resultText = VALUE_TYPE_CHAR.CUR + Numeral( valueRaw ).format( '0[.]0[0]a' );
                objectiveText = VALUE_TYPE_CHAR.CUR + Numeral( objective ).format( '0[.]0[0]a' );
                break;
            case 'unit':
            default:
                resultText = Numeral( valueRaw ).format( '0[.]0[0]a' );
                objectiveText = Numeral( objective ).format( '0[.]0[0]a' );
                break;
        }
        return {
            result: resultText,
            objective: objectiveText
        };
    }
    render() {
        const {
            nameSpace, achievement
        } = this.props;
        const {
            resultText, objectiveText
        } = this.state;

        return(
            <div className={ 'gauge-circle ' + nameSpace + '-gauge-circle' }>
                <div className="gauge-circle-value">
                    <span>
                        <span>{ achievement }</span>
                        <span className="pct-format">%</span>
                    </span>
                </div>
                <div className="gauge-circle-objective-and-result-wrapper">
                    <div className="gauge-circle-result">
                        <span className="top-text">{ resultText }</span>
                        <span className="bottom-text">Result</span>
                    </div>
                    <div className="gauge-circle-bar"></div>
                    <div className="gauge-circle-objective">
                        <span className="top-text">{ objectiveText }</span>
                        <span className="bottom-text">Objective</span>
                    </div>
                </div>
                <button type="button"
                    className={ 'gauge-flip ' + nameSpace + '-gauge-flip' }
                    onClick={ this.props.flipGauge }>
                   <Icon name="flip-arrow" viewBox="0 0 2040.9 2040.9" />
                </button>
            </div>
        );
    }
}

 Gauge.propTypes = {
    id: React.PropTypes.string,
    nameSpace: React.PropTypes.string,
    name: React.PropTypes.string,
    percentage: React.PropTypes.number,
    graphic: React.PropTypes.bool,
    objective: React.PropTypes.oneOfType( [ React.PropTypes.number, React.PropTypes.string ] ),
    result: React.PropTypes.oneOfType( [ React.PropTypes.number, React.PropTypes.string ] ),
    tails: React.PropTypes.bool,
    flipped: React.PropTypes.bool,
    strokeWidth: React.PropTypes.number,
    valueType: React.PropTypes.string,
    valueRaw: React.PropTypes.number,
    hasShadow: React.PropTypes.bool,
    width: React.PropTypes.number,
    minWidth: React.PropTypes.number,
    scheme: React.PropTypes.string
 };
