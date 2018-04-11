//libs and utilities
import React from 'react';
import { debounce, isEqual } from 'lodash';

import './table.scss';

import { _tableRow } from './_table-row';
import { _tableBody } from './_table-body';
import { _tablePaginator } from './_table-paginator';
import { setUnit } from './_table-helper';

export default class Table extends React.Component {
     constructor( props ) {
         super( props );

        this.state = {
            paginatorArray: []
        };

        this.paginatorIndex = 0;

        this.onSlideNavPaginator = this.onSlideNavPaginator.bind( this );
        this.getPaginatorVisibleIndexes = this.getPaginatorVisibleIndexes.bind( this );
        this.setTableWidth = this.setTableWidth.bind( this );
        this.setFirstColumnWidth = this.setFirstColumnWidth.bind( this );
        this.setSecondColumnWidth = this.setSecondColumnWidth.bind( this );

        this.onResizeListener = debounce( this.setTableWidth, 150 );
        this.onResizeListener2 = debounce( this.setFirstColumnWidth, 150 );
        this.onResizeListener3 = debounce( this.setSecondColumnWidth, 150 );

    }
    componentDidMount() {
        this.setTableWidth();
        this.setFirstColumnWidth();
        this.setSecondColumnWidth();

        this.setPaginatorArray( this.props.columns );

        window.addEventListener( 'resize', this.onResizeListener, false );
        window.addEventListener( 'resize', this.onResizeListener2, false );
        window.addEventListener( 'resize', this.onResizeListener3, false );
    }
	componentDidUpdate( prevProps, prevState ) {

       this.setTableWidth();
       this.setFirstColumnWidth();
       this.setSecondColumnWidth();

       if ( isEqual( prevProps.columns, this.props.columns ) === false ) {
         this.paginatorIndex = 0;
         this.setPaginatorArray( this.props.columns );
         this.resetTableSlide();
       }

       this.doTableSlide( prevState.paginatorVisibleIndexes, this.state.paginatorVisibleIndexes );

       if( this.paginatorIndex === 0 && isEqual( prevState.paginatorArray, this.state.paginatorArray ) === false ) {
         this.getPaginatorVisibleIndexes( 0 );
       }
		 }
    componentWillUnmount() {
        window.removeEventListener( 'resize', this.onResizeListener, false );
        window.removeEventListener( 'resize', this.onResizeListener2, false );
        window.removeEventListener( 'resize', this.onResizeListener3, false );
    }
    setPaginatorArray( columns ) {
        const array = columns.map( ( item, index ) => {
        return item;
        } );
        this.setState( { paginatorArray: array } );
    }
	getFirstColumn( rows ) {

       const array = [];

        if( !rows || rows.length === 0 ) {
            return array;
        }

        for( var i = 0; i < rows.length; i++ ) {
            for( var j = 0; j < rows[ i ].length; j++ ) {
                array.push( [ rows[ i ][ j ] ] );
                break;
            }
        }

        return array;
	}

    getSecondColumn( rows ) {

        const array = [];

        if( !rows || rows.length === 0 ) {
            return array;
        }

        for( var i = 0; i < rows.length; i++ ) {
            for ( var j = 1; j < rows[ i ].length; j++ ) {
                array.push( [ rows[ i ][ j ] ] );
                break;
            }
        }

        return array;
    }
		setFirstColumnWidth() {

            const { columns, rows, fixedColumns } = this.props;

            if( !columns || !rows || rows.length === 0 || !fixedColumns ) {
                return false;
            }

			const divisor = Math.min( 8, columns.length );

            this.refs.firstColumnTableHeader.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.firstColumnTableBody.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.firstColumnTableFooter.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
		 }
         setSecondColumnWidth() {

            const { columns, rows, fixedColumns } = this.props;

            if( ( !columns || !rows || rows.length === 0 ) || ( ( !fixedColumns || fixedColumns == 1 ) && !this.refs.secondColumnTableHeader ) ) {
                return false;
            }

			const divisor = Math.min( 8, columns.length );

            this.refs.secondColumnTableHeader.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.secondColumnTableBody.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.secondColumnTableFooter.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';

            //Position second column to the right of First one
            this.refs.secondColumnTableBodyParent.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.secondColumnTableHeader.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
            this.refs.secondColumnTableFooter.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';

         }
		setTableWidth() {

            const { columns } = this.props;

            if( !this.refs.slideTable || !columns ) {
                return false;
            }

            if ( columns.length <= 8 ) {
                this.refs.tableBody.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
                this.refs.tableFooter.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
                this.refs.tableHeader.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
            }
            if ( columns.length >= 9 ) {
                this.refs.tableBody.style.width = ( ( this.refs.slideTable.getBoundingClientRect().width / 8 ) * columns.length )  + 'px';
                this.refs.tableFooter.style.width = ( ( this.refs.slideTable.getBoundingClientRect().width / 8 ) * columns.length )  + 'px';
                this.refs.tableHeader.style.width = ( ( this.refs.slideTable.getBoundingClientRect().width / 8 ) * columns.length )  + 'px';
            }
		}
        resetTableSlide() {
            this.refs.tableHeader.style.transition = 'transform 0s';
            this.refs.tableHeader.style.transform = 'translateX(0px)';
            this.refs.tableHeader.style.transform = 'translateX(0px)';

            this.refs.tableBody.style.transition = 'transform 0s';
            this.refs.tableBody.style.transform = 'translateX(0px)';
            this.refs.tableBody.style.transform = 'translateX(0px)';

            this.refs.tableFooter.style.transition = 'transform 0s';
            this.refs.tableFooter.style.transform = 'translateX(0px)';
            this.refs.tableFooter.style.transform = 'translateX(0px)';
            this.setTableWidth();
        }
		doTableSlide( prevState, state ) {

			const columnWidth = this.refs.slideTable.getBoundingClientRect().width / 8;
			const { tableHeader, tableBody, tableFooter } = this.refs;

            this.getPaginatorIndex = () => {
                if( 0 >= this.paginatorIndex - 3 ) {
                    return 0;
                } else {
                    return this.paginatorIndex - 3;
                }
            };

            const offsetIndex = this.getPaginatorIndex();

            tableHeader.style.transition = 'transform 1s';
            tableHeader.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';
            tableHeader.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';

            tableBody.style.transition = 'transform 1s';
            tableBody.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';
            tableBody.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';

            tableFooter.style.transition = 'transform 1s';
            tableFooter.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';
            tableFooter.style.transform = 'translateX(-' + ( columnWidth * offsetIndex ) + 'px)';

		}
		getPaginatorVisibleIndexes( paginatorIndex ) {

            const array = this.state.paginatorArray.map( ( item, index ) => {
                if ( index <= 3 && paginatorIndex <= 3 ) {
                    return true;
                }
                if ( index >= paginatorIndex - 3 && index <= paginatorIndex && paginatorIndex >= 3 ) {
                    return true;
                } else {
                    return false;
                }
            } );

            this.setState( { paginatorArray: array } );

            this.paginatorIndex = paginatorIndex;
		}
        setTableRows( rows, columns ) {

            if( !rows || rows.length === 0 ) {
                return [];
            }
            const rows2 = rows.map( ( row, index ) => {
                return row.map( ( item, index ) => {
                    return setUnit( columns[ index ].valueType, item );
                } );
            } );
            return rows2;
        }
        setFooterRow( row, columns ) {
            if( row.length === 0 || !row ) {
                return [];
            }

            return row.map( ( item, index ) => {
                return setUnit( columns[ index ].valueType, item );
            } );
        }
		onSlideNavPaginator( event, index ) {
            this.getPaginatorVisibleIndexes( index );
		}
		renderFirstColumnHeader() {

            const { columns, _index, _callback, _template, fixedColumns } = this.props;
            const { tableHeaderTemplate } = _template;
            const { tableHeaderCallback } = _callback;

            if( !fixedColumns || !columns ) {
 				return false;
			}

			const divisor = Math.min( 8, columns.length );
            const firstColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

			return (
                <div className="flex-table-header first-column-header" ref="firstColumnTableHeader"  style={ Object.assign(this.applyStyle( 'first-column-header' ), { 'width': firstColumnBodyWidth }) }>
                    <_tableRow
                    _index={ _index }
                    _state={ [ columns[ 0 ] ] }
                    _template={ tableHeaderTemplate}
                    _callback={ tableHeaderCallback }
                    _fixedColumns={ fixedColumns }
                    _fromWhichColumn={ 1 }
                    />
                </div>
			);
		 }

         renderSecondColumnHeader() {

            const { columns, _index, _callback, _template, fixedColumns } = this.props;
            const { tableHeaderTemplate } = _template;
            const { tableHeaderCallback } = _callback;

            if( !fixedColumns || fixedColumns == 1 || !columns ) {
                return false;
            }

			const divisor = Math.min( 8, columns.length );
            const secondHeaderWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

            return (
                <div className="flex-table-header second-column-header" ref="secondColumnTableHeader"  style={{ 'width': secondHeaderWidth, left: secondHeaderWidth }}>
                    <_tableRow
                    _index={ _index }
                    _state={ [ columns[ 1 ] ] }
                    _template={ tableHeaderTemplate}
                    _callback={ tableHeaderCallback }
                    _fixedColumns={ fixedColumns }
                    _fromWhichColumn={ 2 }
                    />
                </div>
            );
         }

		 renderFirstColumnBody() {
            const { rows, fixedColumns, _template, _callback } = this.props;
            const { tableBodyTemplate } = _template;
            const { tableBodyCallback } = _callback;

            if( !rows || !rows[ 0 ] || rows.length === 0 || !fixedColumns ) {
                 return false;
            }

			const rowlength = rows[ 0 ] ? rows[ 0 ].length : 8;
			const divisor = Math.min( 8, rowlength );
            const firstColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

            return (
                <div className="first-column" style={{ 'width': firstColumnBodyWidth }}>
                    <div className="flex-table-body" ref="firstColumnTableBody">
                        <_tableBody
                             _state={ this.getFirstColumn( rows ) }
                             _template={ tableBodyTemplate }
                             _callback={ tableBodyCallback }
                         />
                    </div>
                </div>
            );
		 }

         renderSecondColumnBody() {

            const { rows, fixedColumns } = this.props;

            if ( !rows || !rows[ 0 ] || rows.length === 0 || !fixedColumns || fixedColumns == 1  ) {
                 return false;
            }

			const rowlength = rows[ 0 ] ? rows[ 0 ].length : 8;
			const divisor = Math.min( 8, rowlength );
            const secondColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

            return (
                <div className="first-column second-column" ref="secondColumnTableBodyParent" style={{ 'width': secondColumnBodyWidth, left: secondColumnBodyWidth }}>
                    <div className="flex-table-body" ref="secondColumnTableBody">
                        <_tableBody _state={ this.getSecondColumn( rows ) } />
                    </div>
                </div>
            );
         }
		 renderFirstColumnFooter() {
            const { footer, fixedColumns } = this.props;

            if( !fixedColumns || !footer ) {
            	return false;
            }

			const divisor = Math.min( 8, footer.length );
            const firstColumnFooterWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

            return (
                <div className="flex-table-footer first-column-footer" ref="firstColumnTableFooter" style={ Object.assign(this.applyStyle( 'first-column-footer' ), {'width': firstColumnFooterWidth})}>
                    <_tableRow _state={[ footer[ 0 ] ]} />
                </div>
            );
		 }

         renderSecondColumnFooter() {
            const { footer, fixedColumns } = this.props;

            if( !fixedColumns || fixedColumns == 1 || !footer ) {
                return false;
            }

			const divisor = Math.min( 8, footer.length );
            const secondColumnFooterWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

            return (
                <div className="flex-table-footer second-column-footer" ref="secondColumnTableFooter" style={{ 'width': secondColumnFooterWidth, left: secondColumnFooterWidth }}>
                    <_tableRow _state={[ footer[ 1 ] ]} />
                </div>
            );
         }

		 renderSlideNavPaginator() {
            const { columns } = this.props;

            if( columns.length <= 8 || !columns ) {
                return false;
            }

            return(
                <_tablePaginator
                    _callback={ this.onSlideNavPaginator }
                    _state={ this.state.paginatorArray }
                />
            );
		 }

	 applyStyle( className ) {
	 	if( this.props.styleCallback ) {
	 		return this.props.styleCallback( className );
	 	} else {
	 		return {};
	 	}
	 }

     render() {
        const { columns, rows, footer, _callback, _index, _lastUpdated, _template, fixedColumns } = this.props;
        const { tableHeaderTemplate, tableBodyTemplate } = _template;
        const { tableHeaderCallback, tableBodyCallback } = _callback;

        return (
        <div className="slide-table-container">
            <div className="slide-table-utility">
                <span>Updated as of: { _lastUpdated }</span>{ this.renderSlideNavPaginator() }
            </div>
            <div className="slidable-table-container">
                <div className="slidable-header" style={this.applyStyle( 'slidable-header' )}>
                    <div className="flex-table-header" ref="tableHeader" style={this.applyStyle( 'flex-table-header' )}>
                        <_tableRow
                        _index= { _index }
                        _state={ columns }
                        _template={ tableHeaderTemplate }
                        _callback={ tableHeaderCallback }
                        _fixedColumns={ fixedColumns }
                        />
                    </div>
                    { this.renderFirstColumnHeader( columns ) }
                    { this.renderSecondColumnHeader( columns ) }
                </div>
                <div className="slidable-table" ref="slideTable">
                    <div className="flex-table-body" ref="tableBody">
                        <_tableBody
                        _state={ this.setTableRows( rows, columns ) }
                        _template={ tableBodyTemplate }
                        _callback={ tableBodyCallback }
                        />
                    </div>
                    { this.renderFirstColumnBody() }
                    { this.renderSecondColumnBody() }
                </div>
                <div className="slidable-footer" style={this.applyStyle( 'slidable-footer' )}>
                    <div className="flex-table-footer" ref="tableFooter" style={this.applyStyle( 'flex-table-footer' )}>
                        <_tableRow _state={ this.setFooterRow( footer, columns ) } />
                    </div>
                    { this.renderFirstColumnFooter() }
                    { this.renderSecondColumnFooter() }
                </div>
            </div>
        </div>
        );
    }
}

 module.exports = Table;
