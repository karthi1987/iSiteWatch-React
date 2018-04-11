//libs and utilities
import React from 'react';
import classnames from 'classnames';
//shared components
import Icon from '../icons/icons';
//scss
import './module.scss';

/*
 * component to handle the ModuleHeader
 * ModuleHeaders can sometimes open a sheet
 */
export class ModuleHeader extends React.Component {
    render() {
        const {
            title, link, className, description,
            sheetOpener, forceReload, subHeader
        } = this.props;
        return(
          <div className={ className ? className : ''  }>
           {
               link
               ?
               <a className={ classnames(
                    'home-module-link',
                    {
                      'sheet-opener': sheetOpener
                    }
                  )}
                   onClick={ this.props.onClick }
                   href={ link }
                   data-force-reload={ forceReload }>

                   <span className={ !subHeader ? 'module-header-title' : 'module-subheader-title' }>{ title }</span>

                   <Icon name="right-arrow" className={ !subHeader ? 'home-module-header-arrow' : 'home-module-subheader-arrow'} />
                   {
                      description
                      &&
                      <span className="module-header-description">{ description }</span>
                   }
               </a>
               :
               <span className={ 'home-module-header ' + ( !subHeader ? 'module-header-title' : 'module-subheader-title' ) }>{ title }</span>
           }
          </div>
        );
    }
}

module.exports = ModuleHeader;
