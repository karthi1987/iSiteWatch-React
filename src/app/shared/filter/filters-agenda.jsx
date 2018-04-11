//libs and utils
import React from 'react';
import { isEqual } from 'lodash';
import classnames from 'classnames';
//utils
import { connectAndMap } from 'utils/utils';
//actionCreators
import { getFilters, clearDrilldownFilters, resetHierarchyAndFilters } from 'app/app-store';
//shared
import { _dropdown } from 'app/shared/dropdown/dropdown';
import { Loader } from 'app/shared/loader/loader';
//scss
import './filter-bar.scss';

/*******************************************************************************
 *  1. H_CHILDREN
 *  2. Filters
 */

/*
 * 1. H_CHILDREN
 *
 * H_CHILDREN stands for 'hierarchy drilldown children'.
 * this object is used to help clear out obsolete drilldown filters.
 */
const H_CHILDREN = {
	channel: { region: false, district: false, area: false, office: false },
	region: { district: false, area: false, office: false },
	district: { area: false, office: false },
	area: { office: false },
	office: {}
};

/*
 * 2. Filters
 *
 * Filters are used in Leaderboard and Agenda views.
 */
const AgendaFilters = connectAndMap(
	[ 'app.loading', 'app.loaded' ],
	{ getFilters, clearDrilldownFilters, resetHierarchyAndFilters }
)(
	class extends React.Component {

		/*
         * when the Filters Components is constructed,
         * create the defaultSet in the component state,
         * where the the state has five objects,
         * and each object has a label and ddKey( dropdown key )
         */
	    constructor( props ) {
	        super( props );

	        /*
	         * loop through H_CHILDREN and create defaultSet object
			 */
			const defaultSet = {};
	        for ( const id in H_CHILDREN ) {
	    		if ( H_CHILDREN.hasOwnProperty( id ) ) {
		    		defaultSet[ id ] = {};
		        	defaultSet[ id ].label = '';
		        	defaultSet[ id ].ddKey = null;
			    }
			}

			/*
	         * store defaultSet in component state
			 */
			this.state = { defaultSet: defaultSet };
	    }

	    /*
	     * when Filters mount, we have access to the hierarchy ids passed in as props.
	     * we loop through the ids we receive, and make service calls to get our filter options
	     * data per [ id ]: true.
	     */
	    componentWillMount() {
	    	const hierarchyIds = this.props.hierarchy.ids;
	    	let hasHierarchy = false;
	    	for ( const id in hierarchyIds ) {
			    if ( hierarchyIds.hasOwnProperty( id ) ) {
			        if( typeof hierarchyIds[ id ] === 'boolean' && hierarchyIds[ id ] ) {

			        	this.props.getFilters( id.toUpperCase(), this.props.view );
			        	hasHierarchy = true;

			        }
			    }
			}
			this.setState( { hasHierarchy: hasHierarchy } );
	    }

	    /*
	     * when we receive new props data, we do a couple of things:
	     * we loop through hiearchy ids, update our defaultSet and clear the next
	     * drilldown if necessary.
	     */
	    componentWillReceiveProps( nextProps ) {
			const hierarchyIds = nextProps.hierarchy.ids;
	    	for ( const id in hierarchyIds ) {
			    if ( hierarchyIds.hasOwnProperty( id ) ) {

			    	/*
			    	 * if we receive new drilldown filters, and they're new filters,
				     * update the component state object defaultSet with the new label and ddKey.
				     * ddKey is the id/key of the next drilldown filter
				    */
			    	const drilldown = nextProps.drilldown[ id ];
			    	const lastDrilldown = this.props.drilldown[ id ];
			        if(
						( drilldown && drilldown.filters && drilldown.filters.length > 0 ) &&
			        	(
							( !lastDrilldown.filters && drilldown.filters ) ||
							( lastDrilldown && !isEqual( lastDrilldown.filters, drilldown.filters ) )
			        	)
			        ) {
			        	this.setState( {
			        		defaultSet: {
			        			...this.state.defaultSet,
			        			[ id ]: {
			        				label: drilldown.filters[ 0 ].label,
			        				ddKey: drilldown.ddKey
			        			}
			        		}
			        	} );

			        	/*
						 * * if we have a ddKey, clear the options for that drilldown filters
						 */
			        	if( drilldown.ddKey ) {
			        		this.props.clearDrilldownFilters( drilldown.ddKey, this.props.view );
			        	}
			        }

			    }
			}
	    }

	    /*
	     * returns a filter with options,
	     * and passes the correct callback
	     * type is which hierarchy id it is: ( channel, region, office, etc. )
	     */
	    componentWillUnmount() {
	    	this.props.resetHierarchyAndFilters( this.props.view );
	    }

	    renderFilter( key ) {

	    	/*
	    	 * this is the callback that gets passed into our _dropdown component as props.
	    	 * this callback gets called anytime a user clicks/touches a filter dropdown option.
	    	 * event, label and id are all returned from the _dropdown component
	    	 */
	    	const callback = ( event, label, id ) => {

	    		/*
	    		 * update the label in the defaultSet for the specific hierarchy filter clicked.
	    		 */
	    		this.setState( {
		    		defaultSet: {
				        ...this.state.defaultSet,
				        [ key ]: {
				        	...this.state.defaultSet[ key ],
				        	label: label
				        }
				    }
		    	} );

		    	/*
		    	 * create a new hierarchyIds object which overwrites the current
		    	 * hierarchy ids received as props with the H_CHILDREN - this is done because,
		    	 * we want to remove the 'drilldown children' of the clicked hierarchy filters.
		    	 * we then assign the new id value of the option returned by _dropdown to the correct key
		    	 */
		        const hierarchyIds = {
	        		...this.props.hierarchy.ids,
		    		...H_CHILDREN[ key ],
		    		[ key ]: id
		        };

		        /*
		         * grab the ddKey from the defaultSet
		         */
		        const ddKey = this.state.defaultSet[ key ].ddKey;

		        /*
		         * if we have a ddKey, getFilters for that ddKey, and pass in the view string ( to know which view to update ),
		         * the object sent as data in the ajax function ( so that we can request the new drilldown filters ), 
		         * and the hiearchyIds object ( to update global app view state )
		         *
		         * or if we don't have a ddKey, call filterData and make new calls for view data
		         */
		        if( ddKey ) {
		        	this.props.getFilters( ddKey.toUpperCase(), this.props.view, { [ key ]: id }, hierarchyIds );
		        }else{
		        	this.props.filterData( hierarchyIds );
		        }
	    	};
	    	
	    	/*
	    	 * construct our loadCode which is our action type.
	    	 * if the filters have loaded, show the dropdown, else show the loader.
	    	 */
	    	const loadCode = 'get' + this.props.view + key.charAt( 0 ).toUpperCase() + key.slice( 1 ) + 'Filters';
	        if( this.props.loaded[ loadCode ] ) {
	            return <_dropdown
	                        _label={ this.state.defaultSet[ key ].label }
	                        _state={ this.props.drilldown[ key ].filters }
	                        _callback={ callback } />;
	        }else if( this.props.loaded[ loadCode ] && this.props.drilldown[ key ].filters.length 	) {
	            return <Loader
	                        loading={ this.props.loading }
	                        type="filter"
	                        overlayHeight={ 50 }
	                        loadCodes={ [ loadCode ] } />;
	        }
	    }
	    render() {
	        const {
	            props: { drilldown: { channel, region, district, area, office } },
	            state: { hasHierarchy }
	        } = this;
	        return(
	            <div className={ classnames( 
						'header-filters',
						{
							'hide-header-filters': !hasHierarchy
						}
					) }>

					{
						channel
						&& channel.filters
						&& channel.filters.length > 0
						&& <div className="channel-filter header-filter">
					        { this.renderFilter( 'channel' ) }
					    </div>
					}

					{
						region
						&& region.filters
						&& region.filters.length > 0
						&& <div className="region-filter header-filter">
					        { this.renderFilter( 'region' ) }
					    </div>
					}

					{
						district
						&& district.filters
						&& district.filters.length > 0
						&& <div className="district-filter header-filter">
						    { this.renderFilter( 'district' ) }
						</div>
					}

					{
						area
						&& area.filters
						&& area.filters.length > 0
						&& !area.hideSelectBox
						&& <div className="area-filter header-filter">
						    { this.renderFilter( 'area' ) }
						</div>
					}

					{
						office
						&& office.filters
						&& office.filters.length > 0
						&& !office.hideSelectBox
						&& <div className="office-filter header-filter">
						    { this.renderFilter( 'office' ) }
						</div>
					}
	            </div>
	        );
	    }
	}
);

export default AgendaFilters;