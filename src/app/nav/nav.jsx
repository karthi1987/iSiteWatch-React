//libs
import React from 'react';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames';
//utils
import webTrack from 'utils/web-tracking/web-track';
//lang
import { NAVIGATION as CONSTs } from './../app-lang';
//scss
import './nav.scss';

/*******************************************************************************
 *  1. NavItem
 *  2. LinkContent
 *  3. Nav
 *  4. NavWaitTime
 */

/*
 * 1. NavItem
 *
 * NavItem is fairlly complex, as it handles routing and display notification
 * information
 */
export class NavItem extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			navClasses: {
				'item': true,
				'item-modified': this.props.waitTime,
				'active': this.props.currentPath.indexOf( this.props.to ) === 0 ? true : false
			},
			LinkType: this.props.to.substr( -1 ) === '/' ? IndexLink : Link
		};
	}

	componentWillReceiveProps( nextProps ) {
		const active = nextProps.currentPath.indexOf( nextProps.to ) === 0 ? true : false ;

		this.setState( {
			navClasses: {
				...this.state.navClasses,
				active: active
			}
		} );
	}

	onClick = () => {
		this.props.unExpand && this.props.unExpand();

		webTrack( this.props.webTrackId );
	}

	render() {
		const {
			state: { navClasses, LinkType },
			props: { to }
		} = this;

		if( !navClasses.active ) {
			return (
				<LinkType key={ to }
					to={ !navClasses.active && to }
					className={ classnames( navClasses ) }
					onClick={ !navClasses.active && this.onClick }>
					<LinkContent { ...this.props } />
				</LinkType>
			);
		} else {
			return (
				<div className={ classnames( navClasses ) }>
					<LinkContent { ...this.props } />
				</div>
			);
		}
	}
}

/*
 * 2. LinkContent
 *
 * a dumb component that returns the mark up per link
 */
const LinkContent = ( { icon, label, counter } ) => {
	return(
		<div className="container">
			<div className="icon">
				<i className={ icon }></i>
			</div>
			<div className="label">
				{ label }
			</div>
			{
				counter > 0
				&&
				<span className="counter">{ counter }</span>
			}
		</div>
	);
};

/*
 * 3. Nav
 *
 * TODO: discover if expand/unexpand functionality is needed.
 */
export class Nav extends React.Component {

	constructor( props ) {
		super( props );

		this.state = { expanded: false };

		this.expand = this.expand.bind( this );
		this.unExpand = this.unExpand.bind( this );
		this.toggleExpanded = this.toggleExpanded.bind( this );
	}

	expand() {
		this.setState( { expanded: true } );
	}

	unExpand() {
		this.setState( { expanded: false } );
	}

	toggleExpanded() {

		this.setState( { expanded: !this.state.expanded } );

	}

	createHeader() {
		let header;

		if ( this.props.logo ) {
			header = <img src={ this.props.logo } alt="Logo" className="logo" />;
		} else if ( this.props.title ) {
			header = <h1 className="title">{ this.props.titl }</h1>;
		}

		if ( header ) {
			header = (
				<Link to="home" onClick={ this.unExpand }>
					{ header }
				</Link>
			);
		}

		return header;
	}

	alterChildren() {
		return React.Children.map( this.props.children, ( child ) => {
			return React.cloneElement( child, { unExpand: this.unExpand, currentPath: this.props.currentPath } );
		} );
	}

	render() {

		const header = this.createHeader();
		const children = this.alterChildren();
		const childrenCount = React.Children.count( children );
		const waittime = this.props.waitTime || false;
		const transactiontime = this.props.transactionTime || false;

		const navTimeInfo = {
			waitTime: waittime,
			transactionTime: transactiontime
		};

		return (
			<div>
				<nav id="page-navigation" className={ `page-navigation ${this.state.expanded ? 'expanded' : '' }` }>
					<div className="mobile-header">
						<div className="menu" onClick={ this.toggleExpanded }>
							<div className="label">
								{ this.state.expanded ? 'Close' : 'Menu' }
							</div>
							<div className="menu-icon">
								<div className="bar"></div>
								<div className="bar"></div>
								<div className="bar"></div>
							</div>
						</div>
						{header}
					</div>
					<div className={ `full-nav total-items-${childrenCount}` }>
						<NavWaitTime data={ navTimeInfo }/>
						{ children }
					</div>
				</nav>
			</div>
		);

	}
}

/*
 * 3. NavWaitTime
 *
 * this is the red component in the upper right hand corner.
 */
export class NavWaitTime extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			isRequestFromLeaderboard: this.checkWhereTheRequestIsFrom( props ),
			maxTimeClass: this.setMaximumTimeClass( props ),
			avgTime: this.getAverageTime( props ),
			maxTime: this.getMaximumTime( props ),
			transTime: this.getTransactionTime( props ),
		};
	}

	componentWillReceiveProps( nextProps ) {
		this.setState( {
			isRequestFromLeaderboard: this.checkWhereTheRequestIsFrom( nextProps ),
			maxTimeClass: this.setMaximumTimeClass( nextProps ),
			avgTime: this.getAverageTime( nextProps ),
			maxTime: this.getMaximumTime( nextProps ),
			transTime: this.getTransactionTime( nextProps ),
		} );
	}

	setMaximumTimeClass = ( props ) => {
		let maxClassValue = 0;
		const data = props.data && props.data.waitTime && props.data.waitTime.leadershipBoard ? props.data.waitTime.average : props.data.waitTime.maximum;
		if ( this.AreInputsValid( data ) ) {
			if ( this.isRightTimeFormat( data ) ) {
				maxClassValue = data.split( ':' )[ 1 ].replace( /^0+/, '' );
			}
		}
		return maxClassValue;
	}

	isRightTimeFormat = ( timeString ) => {
		if ( !/^([01]?[0-9]|2[0-3]):[0-5][0-9]/.test( timeString ) ) {
			return false;
		} else {
			return true;
		}
	}

	AreInputsValid = ( param ) => {
		let flagToProceed = false;
		if ( typeof param != 'undefined' && param != null && param != 'null' ) {
			if ( this.isRightTimeFormat( param ) ) {
				flagToProceed = true;
			}
		}
		return flagToProceed;
	}

	getAverageTime = ( props ) => {
		let average = '-';
		if ( this.AreInputsValid( props.data.waitTime.average ) ) {
			const avg = props.data.waitTime.average.split( ':' );
			average = avg[ 1 ] + ':' + avg[ 2 ];
		}
		return average;
	}

	getMaximumTime = ( props ) => {
		let maximum = '-';
		if ( this.AreInputsValid( props.data.waitTime.maximum ) ) {
			const max = props.data.waitTime.maximum.split( ':' );
			maximum = max[ 1 ] + ':' + max[ 2 ];
		}
		return maximum;
	}

	getTransactionTime = ( props ) => {
		let value = '-';
		//if ( this.AreInputsValid( this.props.data.transactionTime.transactionTime ) ) {
			value = props.data.transactionTime.transactionTime;
		//}
		return value;
	}

	checkWhereTheRequestIsFrom = ( props ) => {
		return props.data && props.data.waitTime.leadershipBoard;
	}

	setHeadlineClasses = () => {
		const {
			maxTimeClass,
			isRequestFromLeaderboard
		} = this.state;

		if ( isRequestFromLeaderboard ) {
			return classnames( {
			    'item': true,
			    'wait-time': true,
			    'black': ( Number( maxTimeClass ) < 0 ),
			    'green': ( Number( maxTimeClass ) > 0 && Number( maxTimeClass ) < 5 ),
				'gold': ( Number( maxTimeClass ) >= 5 && Number( maxTimeClass ) < 7 ),
				'red': ( Number( maxTimeClass ) >= 7 )
			} );
		} else {
			return classnames( {
			    'item': true,
			    'wait-time': true,
			    'black': ( Number( maxTimeClass ) < 10 ),
			    'green': false,
				'gold': false,
				'red': ( Number( maxTimeClass ) >= 10 )
			} );
		}
	}

	waitTimeOnClick = ( event ) => {
		event.preventDefault();
		//To do: If require do call webTrack
		return false;
	}

	render() {
		const { queue } = this.props.data;
		const { avgTime, maxTime, isRequestFromLeaderboard, transTime } = this.state;

		return (
			<div className="time-segment">
				{
					( this.props.data.waitTime && this.props.data.waitTime.show ) &&

					<a className={this.setHeadlineClasses()} href="/smartboard/home" onClick={this.waitTimeOnClick}>
						<div className="container">
							<div className="waittime-max">
								<div className="icon">
									<i className="vz vz-guest-experience"></i>
								</div>
								{
									(
										() => {
											if ( isRequestFromLeaderboard ) {
												return <div className="label"><span className="avgTimeValue">{ avgTime }</span><span className="waittime-break">{ CONSTs.AVERAGE }</span></div>;
											} else {
												return <div className="label"><span className="maxTimeValue">{ maxTime }</span><span className="waittime-break">{ CONSTs.MAXIMUM }</span></div>;
											}
										}
									)()
								}
							</div>
							<div className="waittime-avg">
							{
								(
									() => {
										if ( isRequestFromLeaderboard ) {
											return <div className="label">{ CONSTs.MAXIMUM }: <span className="maxTimeValue">{ maxTime }</span></div>;
										} else {
											return <div className="label">{ CONSTs.AVERAGE }: <span className="avgTimeValue">{ avgTime }</span></div>;
										}
									}
								)()
							}
								<div className="label">{ CONSTs.QUEUE }: <span className="queueTimeValue">{ queue ? queue : '-' }</span></div>
							</div>
						</div>
					</a>
				}
				{
					( this.props.data.transactionTime && this.props.data.transactionTime.show ) &&

					<div className="transaction-time item">
						<div className="label">
							{ CONSTs.TRANSACTION_TIME }
                            <span className="locationLevelValue"> { this.props.data.transactionTime.locationLevelString }</span>
						</div>
						<div className="label">
							<span className="transTimeValue">{ transTime }</span>
						</div>
					</div>
				}
			</div>
		);
	}

}
