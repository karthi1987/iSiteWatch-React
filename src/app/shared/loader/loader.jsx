import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Spinner from 'spin';
import $ from 'jquery';
//utils
import { checkLoading } from 'app/utils/utils';
//scss
import './loader.scss';

/*
 * Loader also holds LoadingDots, since they both provide similar UI feature
 * TODO: Move LoadingDots to its own file
 *

	<Loader
        loading={ {} } // the global loading object found in app.loading
        type="string" // can be app ( modal uses app ), sheet, button, or initial
        overlayHeight={ integer } // height of modal backdrop overlay
        loadCodes={ [ 'string' ] } // array of strings to search for within the loading object
    />

	<LoaderDots
        loading={ {} } // the global loading object found in app.loading
        loadCodes={ [ 'string' ] } // array of strings to search for within the loading object
    />
 *
 */

/*   Components
 *
 *   1. Loader
 *   2. AppSpinner
 *   3. FilterSpinner
 *   4. LoadingDots
 *	 5. Dots
 */

/*
 *   1. Loader
 *
 *   spinner wrapper. uses spin.js.
 *   determines which spinner to create based on type.
 *   determines whether spinner is rendered or not based on
 *   whether loadCodes match any values in the loading object
 */
class Loader extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			defaultSpinner: {
				color: '#cd040b',
			    lines: 13,
			    length: 40,
			    width: 20,
			    radius: 60,
			    corners: 1,
			    rotate: 0,
			    direction: 1,
			    speed: 1,
			    trail: 60,
			    zIndex: 15
			},
	        spin: false,
	        Spin: false
		};

	}

	/*
	 * determine which Spinner to use.
	 */
	componentWillMount() {
		const {
			props: { type, overlayHeight },
			state: { defaultSpinner }
		} = this;

		let Spin = this.state.Spin;

		switch( type ) {
			case 'app':
			case 'view':
			case 'initial':
				Spin = React.cloneElement( <AppSpinner />, {
                   spinner: new Spinner( {
					    ...defaultSpinner,
					    position: ( type === 'sheet' ? 'fixed' : 'absolute' )
					} ),
                   	overlayHeight: overlayHeight,
                   	type: type
                } );
				break;
			case 'filter':
				Spin = React.cloneElement( <FilterSpinner />, {
                   spinner: new Spinner( {
			        	...defaultSpinner,
			            zIndex: 99999,
			            length: 4,
			            lines: 10,
			            width: 2,
			            radius: 2,
			            position: 'relative',
			            top: '0%',
			            left: '0%'
			        } )
                } );
				break;
		}
		this.setState( { Spin: Spin } );
	}

	componentDidMount() {
		this.setSpin( this.props );
	}
	componentWillReceiveProps( nextProps ) {
		this.setSpin( nextProps );
	}

	/*
	 * determines whether spinner is rendered or not based on
     * whether loadCodes match any values in the loading object
	 */
	setSpin( props ) {
		const {
			loading, loadCodes
		} = props;

		const spin = checkLoading( loading, loadCodes );
		if( spin && props.page ) {
            props.page.style.opacity = 0.25;
        }else if( props.page ) {
        	props.page.style.opacity = 1;
        }
		this.setState( { spin: spin } );
	}
	render() {
		const {
			props: { overlayHeight, type },
			state: { spin, Spin }
		} = this;

		const fixedHeight = ( spin && type === 'app' ) ? { height: overlayHeight } : {};

		return(
			<div className={ 'spinner-wrapper ' + type + '-spinner-wrapper'} style={ fixedHeight }>

				<ReactCSSTransitionGroup
	                transitionName="spinner-blocker-opacity"
	                transitionEnterTimeout={350}
	                transitionLeaveTimeout={350}
	                transitionAppear={false}>

	                { spin && React.cloneElement( Spin, { overlayHeight: overlayHeight } ) }

	            </ReactCSSTransitionGroup>
			</div>
		);

	}
}

/*
 *   2. AppSpinner
 *
 *   AppSpinner is the default spinner. Used for initial app load,
 *   also used in modal loads and sheet loads. backdrop overlay covers entire
 *   containing element. AppSpinner creates the spinner object.
 */
class AppSpinner extends React.Component {
	componentWillMount() {
		const { type, overlayHeight } = this.props;
		if( type === 'app' ) {
			$( '#app-root' ).css( { 'overflow-y': 'hidden', 'height': overlayHeight } );
		}
	}

	/*
	 * create the spinner after component mounts
	 */
	componentDidMount() {
		const spinner = this.props.spinner;
		spinner.spin( this.spinWrapper );
	}

	/*
	 * timeout for specific 'app' type for grace
	 */
	componentWillUnmount() {
		const type = this.props.type;
		if( type === 'app' ) {
			setTimeout( () =>  $( '#app-root' ).css( { 'overflow-y': '', 'height': '' } ), 350 );
		}
	}
	render() {
		const fixedHeight = { height: this.props.overlayHeight };
		return(
			<div className="app-blocker drop-opacity" style={ fixedHeight }>
				<div style={ fixedHeight } className="spinner" ref={ ( ref ) => this.spinWrapper = ref }></div>
			</div>
		);
	}
}

/*
 *   3. FilterSpinner
 *
 *   FilterSpinner used for submit buttons.
 *   provides a tiny white spinner within button.
 *	 included in shared/form/submit-button component
 */
class FilterSpinner extends React.Component {
	componentDidMount() {
		const spinner = this.props.spinner;
		spinner.spin( this.spinWrapper );
	}
	render() {
		return(
			<div ref={ ( ref ) => this.spinWrapper = ref }></div>
		);
	}
}

/*
 *   4. LoaderDots
 *
 *   LoadingDots are used for Modules, but can be used anywhere,
 *   uses same setSpin logic as LoadSpinner
 *
 */
class LoaderDots extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
	        spin: false
		};

	}
	componentDidMount() {
		this.setSpin( this.props );
	}
	componentWillReceiveProps( nextProps ) {
		this.setSpin( nextProps );
	}

	/*
	 * determines whether spinner is rendered or not based on
     * whether loadCodes match any values in the loading object
	 */
	setSpin( props ) {
		const {
			loading, loadCodes
		} = props;
		let spin = false;

		if( loading && loadCodes ) {
			for( const i in loading ) {
				for( const k in loadCodes ) {
					if( i.indexOf( loadCodes[ k ] ) > -1 && loading[ i ] === true ) { spin = true; }
				}
			}
		}else{
			spin = true;
		}


		this.setState( { spin: spin } );
	}
	render() {
		const spin = this.state.spin;
		return(
			<div className="loading-dots-wrapper">
				<ReactCSSTransitionGroup
	                transitionName="spinner-blocker-opacity"
	                transitionEnterTimeout={350}
	                transitionLeaveTimeout={350}
	                transitionAppear={false}>
	                {
	                	spin && <Dots/>
	                }
	            </ReactCSSTransitionGroup>
			</div>
		);
	}
}

/*
 *   5. Dots
 *
 *   'dumb' Dots component
 *
 */
const Dots = () => (
	<div className="loading-dots">
	  <span></span>
	  <span></span>
	  <span></span>
	</div>
);

Loader.propTypes = {
	loading: React.PropTypes.object.isRequired,
	type: React.PropTypes.string.isRequired,
	overlayHeight: React.PropTypes.number.isRequired,
	loadCodes: React.PropTypes.array.isRequired
};

LoaderDots.propTypes = {
	loading: React.PropTypes.object.isRequired,
	loadCodes: React.PropTypes.array.isRequired
};

export {
	Loader as Loader,
	LoaderDots as LoaderDots
};
