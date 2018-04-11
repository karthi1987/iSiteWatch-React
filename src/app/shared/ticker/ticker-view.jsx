import React from 'react';
import { connectAndMap } from 'utils/utils';
import { _Ticker } from './ticker.jsx';
import tickerTemplate from './tickerTemplate';

const TickerView = connectAndMap( [ 'views.home.modules.messageCenter' ] ) (
    class extends React.Component {
        constructor( props ) {
            super( props );
        }
        isArray( array ) {
            if( !array.data.messageCenter )  {
                return [];
            }
            return array.data.messageCenter[ 2 ].messages;
        }
        render() {
            // TODO messageCenter.data.messageCenter, object name with child with the same object name?
            const messageCenter = this.props.messageCenter;

            if( messageCenter.data.messageCenter && !messageCenter.data.messageCenter[ 2 ] ) {
                return false;
            }

            return (
                <div>
                    <_Ticker
                    _msPerTick="7500"
                    _state={ this.isArray( messageCenter ) }
                    _template={ tickerTemplate } />
                </div>
            );
        }
    }
);

export default TickerView;
