//libs and utils
import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';
//actionCreators
import { getMessageCenterModuleData } from './message-center-actions-reducers.js';
import { openModal, closeModal } from '../../../../shared/overlay/overlay-actions-reducers';
//utils
import { connectAndMap } from 'utils/utils';
import webTrack from 'utils/web-tracking/web-track';
//import WT_IDS from 'utils/web-tracking/web-track-ids';
//shared
import ErrorMessage from 'app/shared/error-message/error-message';
import { LoaderDots } from 'shared/loader/loader';
//scss
import './message-center.scss';
//lang
import { MESSAGE_CENTER_MODULE, ERRORs } from 'app/app-lang';

/*******************************************************************************
 *  1. MessageCenterModal
 *  2. MessageCenterModalMessage
 *  3. MessageCenterTabs
 *  4. Message
 *  5. MessageCenterNewsList
 *  6. MessageCenterModule
 *  7. ModuleContent
 */

/*
 * 1. MessageCenterModal
 */
const MessageCenterModal = connectAndMap(
   null,
   { closeModal }
)(
    class extends React.Component {

        componentDidMount() {
            this.startedClosing = false;
            this.startedOpening = 0;

            const initial_css = {
                'top': this.props.srcRect.top,
                'left': this.props.srcRect.left,
                'width': this.props.srcRect.width,
                'height': this.props.srcRect.height,
                'transform': 'translateX(0) rotateY( 180deg ) rotateZ( 0deg )', // translateZ(100px)',
                'opacity': '0.65'
            };

            const expanded_css = {
                'opacity': '1.0',
                'top': '0%',
                'left': '0%',
                'width': '100%',
                'height': '100%',
                'transform': 'translateX(0) rotateY( 0deg ) rotateZ( 0deg )', // translateZ(100px)',
                'transition': 'all 0.50s ease-in-out'
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

        close() {
            if( this.startedClosing != true ) {
                this.startedClosing = true;
                // this.onVisit(this.props.cellData);
                this.props.closeModal();
            }
        }

        render () {
            return(
                    <div className={'message-center-overlay-backfill'} ref={backfillElm => this.backfillElm = backfillElm}  onClick={ this.close.bind( this ) } >
                        <div className={'message-center-overlay template-' + this.props.template} ref={overlayElm => this.overlayElm = overlayElm} >
                            {this.props.children}
                        </div>
                    </div>
            );
        }
    }
);

/*
 * 2. MessageCenterModalMessage
 */
const MessageCenterModalMessage = connectAndMap(
    [ 'views.home.modules.messageCenter' ],
    null
)(
    class extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {
                headline: this.props.headline,
                subheadline: this.props.subheadline,
                linkUrl: this.props.linkUrl,
                linkText: this.props.messageText || null
            };

            this.setHeadlineClasses = this.setHeadlineClasses.bind( this );
        }
        stripHtml( html ) {
            const messageSpan = document.createElement( 'span' );
            messageSpan.innerHTML = html;
            const messageText = messageSpan.textContent || messageSpan.innerText || '';
            return messageText;
        }

        componentDidMount() {
            //console.log( 'message center modal height: {}', this.refs.modalContentContainer.clientHeight );
        }

        setHeadlineClasses() {
            return classNames( {
                'headline': true,
                'urgentMsg': this.props.urgentMsg,
                'tickerMsg': this.props.urgentMsg == false // this exists strictly for the difficult to deal with red styling in the header text.
            } );
        }

        messageLink( event ) {
          event.preventDefault();
          webTrack( this.props.milestoneId );
          window.open( this.state.linkUrl, '_blank' );
        }

        render() {
            const {
              headline, subheadline, linkUrl
            } = this.state;

            return (
                <div className="centering-anchor">
                    <div className={'proportional-size-anchor'} ref="modalContentContainer">
                        <div className={'relative-size-anchor'}>
                            <div className={'box-inner'}>

                                <div className="message-center-display-big">
                                    <div className="close-button"><i className="vz vz-clear"></i></div>
                                    <div className="text-content">
                                        {
                                            ( () => {
                                                if ( this.props.messageText && this.props.messageText.length > 0 ) {
                                                    return (
                                                        <div ref="messageText">
                                                            <h2 className="headline" dangerouslySetInnerHTML={ { __html: headline } } />
                                                            <p className="subheadline" dangerouslySetInnerHTML={ { __html: subheadline } } />
                                                            <div className="message-text" dangerouslySetInnerHTML={ { __html: this.props.messageText } } />
                                                            {
                                                                linkUrl
                                                                &&
                                                                <a href={linkUrl} onClick={this.messageLink.bind( this )} dangerouslySetInnerHTML={ { __html: MESSAGE_CENTER_MODULE.LEARN_MORE } } target="_blank" />
                                                            }
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div>
                                                            <h2 className={this.setHeadlineClasses()} dangerouslySetInnerHTML={ { __html: headline } } />
                                                        </div>
                                                    );
                                                }
                                            } )()
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

/*
 * 3. MessageCenterTabs
 */
const MessageCenterTabs = connectAndMap(
    [ 'views.home.modules.messageCenter' ],
    null
)(
    class extends React.Component {
        setActivePane( event ) {
            const tab = Number( event.target.dataset.tab );
            this.props.switchPane( tab );
        }
        render () {
            const messageCenter = this.props.messageCenter;
            return (
                <div>
                    <div className="tab-wrapper">
                        {
                            ( messageCenter && messageCenter.data.messageCenter )
                            &&
                             messageCenter.data.messageCenter.map(
                                ( navItem, i ) =>
                                    <div key={i}
                                        className={ 'tab ' + ( this.props.activePane === i ? 'active' : '' ) }
                                        data-tab={ i }
                                        onClick={ ( event ) => {
                                            this.setActivePane( event );
                                            webTrack( navItem.milestoneId );
                                        } }>
                                        <div className="notification-wrapper" data-tab={ i }>{ navItem.tabText }
                                                {
                                                    ( () => {
                                                        if ( navItem.notificationAlert > 0 ) {
                                                            return (
                                                                <div className="notification" data-tab={ i }>
                                                                    <div data-tab={ i }>
                                                                    {navItem.notificationAlert}
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    } )()
                                                }
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            );
        }
    }
);

/*
 * 4. Message
 */
const Message = connectAndMap(
    null,
    { openModal }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            this.state = {
                headline: this.props.headline,
                subheadline: this.props.messageText
            };
        }

        componentWillMount() {
            this.truncateText();
        }

        componentWillReceiveProps() {
            this.truncateText();
        }

        truncateText() {
            let {
                headline,
                subheadline
            } = this.state;

            if( this.state.headline.length > 93 ) {
                headline = this.stripHtml( this.state.headline ).substr( 0, 90 ) + '...';
            }
            if( this.state.subheadline && this.state.subheadline.length > 113 ) {
                subheadline = this.stripHtml( this.state.subheadline ).substr( 0, 110 ) + '...';
            }
            this.setState( {
                headline: headline,
                subheadline: subheadline
            } );
        }

        openMessageModal( message ) {
            if ( message.target && !message.sheet ) {
                window.open( message.linkUrl, '_blank' );
                return false;
            }
            const _rect = this.cellElm.getBoundingClientRect();

            this.overlayComponent = ( <MessageCenterModal srcRect={ _rect } cellData={this.props} template={this.props.template} >
                <MessageCenterModalMessage {...message}/>
            </MessageCenterModal> );

            this.props.openModal( this.overlayComponent );
        }

        stripHtml( html ) {
            const messageSpan = document.createElement( 'span' );
            messageSpan.innerHTML = html;
            const messageText = messageSpan.textContent || messageSpan.innerText || '';
            return messageText;
        }
    	bgStyle() {
    		return { backgroundImage: 'url(' + this.props.thumbnail + ')' };
    	}

        render() {
            const message = this.props;
            const {
              headline, subheadline
            } = this.state;

            return (
                    <div className="message-row"
                        onClick={ () => {
                            this.openMessageModal( message );
                            webTrack( message.webTrackId );
                        } } ref={cellElm => this.cellElm = cellElm}>
                        <div className="message-thumbnail">
                            <div className="image" style={ this.bgStyle() } />
                        </div>
                        <div className={ 'message-text' + ( message.urgentMsg ? ' urgent' : '' ) } >
                            <div className="timestamp">{ message.timestamp }</div>
                            <h3>
                                <span className={'new-flag' + ( message.newMsg ? ' active' : '' )}>
                                    {( message.newMsg ? 'New! ' : '' )}
                                </span>
                                <span className="headline" dangerouslySetInnerHTML={ { __html: headline } } />
                            </h3>
                            <p className="message-description" dangerouslySetInnerHTML={ { __html: subheadline } } />
                        </div>
                        <div className="message-arrow">
                            <i className="vz vz-chevron-right"></i>
                        </div>
                    </div>
            );
        }
    }
);

/*
 * 5. MessageCenterNewsList
 */
class MessageCenterNewsList extends React.Component {
    render () {
        const messageCenter = this.props.messageCenter;
        return (
            <div className="message-list-wrapper">
                {
                    messageCenter
                    &&
                    messageCenter.map(
                        ( section, j ) =>

                            <div key={ j }
                                className={ 'message-list-container ' + ( this.props.activePane === j ? 'active' : '' ) }
                                style={ this.props.activePane === j ? { display: 'block' } : { display: 'none' }}>
                                    <div className="message-list-inner-wrapper">
                                        <div className="message-list">
                                            {
                                                section.messages && section.messages.length
                                                    ?
                                                    section.messages.map(
                                                        ( message, k ) =>
                                                        <Message { ...message } key={ k } />
                                                    )
                                                    :
                                                    <ErrorMessage message={ ERRORs().MESSAGE_CENTER_MODULE_NO_RESULTS } />
                                            }
                                        </div>
                                    </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

/*
 * 6. MessageCenterModule
 */
const MessageCenterModule = connectAndMap(
    [ 'views.home.modules.messageCenter', 'app.session', 'app.loadingErrors', 'app.loaded' ],
    { getMessageCenterModuleData }
)(
    class extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {
                activePane: 0
            };
        }
        componentWillMount() {
            this.props.getMessageCenterModuleData();
        }
        componentWillReceiveProps( nextProps ) {
            if( this.props.session.refresh !== nextProps.session.refresh ) {
                this.props.getMessageCenterModuleData();
            }
        }
        switchPane( activePane ) {
            this.setState( { activePane: activePane } );
        }
        renderModuleContent() {
            const messageCenterModuleLoaded = this.props.loaded.messageCenterModuleData;
            const messageCenterModuleError = this.props.loadingErrors.messageCenterModuleData;


            if( messageCenterModuleLoaded && messageCenterModuleError ) {
				return <ErrorMessage message={messageCenterModuleError} />;
            } else if( messageCenterModuleLoaded && !messageCenterModuleError ) {
                return <ModuleContent
                            messageCenter={ this.props.messageCenter }
                            activePane={ this.state.activePane }
                            switchPane={ this.switchPane.bind( this ) } />;
            }else{
                return <LoaderDots
                            loading={ this.props.loading }
                            loadCodes={ [ 'messageCenterModuleData' ] } />;
            }
        }
        render() {
            return (
                <div>
                    { this.renderModuleContent() }
                </div>
            );
        }
    }
);

/*
 * 7. ModuleContent
 */
const ModuleContent = ( { messageCenter, activePane, switchPane } ) => (
    <div className="module-content message-center-wrapper">
        <div className="message-center-header">
            <h2 className="module-header-title">{ MESSAGE_CENTER_MODULE.TITLE }</h2>
            <MessageCenterTabs { ...messageCenter.data } activePane={ activePane } switchPane={ switchPane }/>
        </div>
        <MessageCenterNewsList { ...messageCenter.data } activePane={ activePane }/>
    </div>
);

export default MessageCenterModule;
