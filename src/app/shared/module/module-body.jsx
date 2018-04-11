//libs and utilities
import React from 'react';
import classnames from 'classnames';
//scss
import './module.scss';

/*
 * simple component to handle the ModuleBody
 */
export class ModuleBody extends React.Component {
    render() {
        const {
            Content, data, className
        } = this.props;
        return(
            <div className={ classnames(
                'home-module-body',
                className
            )}>
                <Content data={ data } />
            </div>
        );
    }
}

module.exports = ModuleBody;
