import React from 'react';
import { connectAndMap } from '../../utils/utils';

import './overlay.scss';

const Overlay = connectAndMap(
    [ 'overlay' ], null
)(
    class extends React.Component {
        constructor( props ) {
            super( props );

            this.state = { overlay: null };
        }

        render() {

            return (
                <div>
                    {
                        this.props.overlay.open
                        &&
                        <div className="overlay">
                            {this.props.overlay.overlay}
                        </div>
                    }
                </div>
            );
        }
    }
);

export default Overlay;
