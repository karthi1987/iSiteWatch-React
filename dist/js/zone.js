webpackJsonp([0,5],{

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.Home {\n  height: 100%;\n  width: 100%;\n  padding: 0 2.1875rem 0 3.125rem; }\n  .Home .module-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n            flex-flow: row wrap;\n    height: 100%;\n    width: 100%; }\n    .Home .module-container .module-wrapper {\n      width: 100%;\n      height: 100%;\n      float: left;\n      margin-right: 1rem; }\n      .Home .module-container .module-wrapper:nth-child(2) {\n        width: 33%;\n        float: left;\n        margin-right: 0; }\n      .Home .module-container .module-wrapper:nth-child(3) {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 100%;\n                flex: 0 100%;\n        margin-bottom: 0; }\n      .Home .module-container .module-wrapper .module-grid {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-flex-wrap: wrap;\n                flex-wrap: wrap; }\n        .Home .module-container .module-wrapper .module-grid.double {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: column;\n                  flex-direction: column;\n          min-width: 100%;\n          height: 60.5%;\n          margin-bottom: 1rem; }\n          .Home .module-container .module-wrapper .module-grid.double:nth-of-type(2) {\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            height: 35%;\n            margin-bottom: 0; }\n          .Home .module-container .module-wrapper .module-grid.double .half {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-flex: 0;\n            -webkit-flex: 0 0 auto;\n                    flex: 0 0 auto;\n            height: 100%;\n            width: 50%;\n            padding-right: 1rem; }\n            .Home .module-container .module-wrapper .module-grid.double .half:last-of-type {\n              padding-right: 0; }\n        .Home .module-container .module-wrapper .module-grid.single {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: row;\n                  flex-direction: row;\n          width: 100%;\n          height: 100%;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%; }\n  .Home .Home_cell:after {\n  content: '';\n  display: block;\n  clear: both; }\n  .Home .Home_cell {\n    min-width: 100%;\n    position: relative; }\n    .Home .Home_cell .Home_cellInner {\n      width: 100%;\n      background-color: #FFF; }\n      .Home .Home_cell .Home_cellInner .Home_cellContent {\n        background-color: #FFF;\n        position: absolute;\n        width: 100%;\n        height: 100%; }\n  .Home .Home_cell .background-holder {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-color: #e4e5e3;\n    position: relative; }\n", ""]);

	// exports


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./home.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(5);var _react2 = _interopRequireDefault(_react);
	var _utils = __webpack_require__(33);
	var _redux = __webpack_require__(58);
	var _reactRedux = __webpack_require__(123);

	var _reactImageGallery = __webpack_require__(758);var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);
	var _reactDatepicker = __webpack_require__(756);var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);
	var _moment = __webpack_require__(2);var _moment2 = _interopRequireDefault(_moment);
	var _propTypes = __webpack_require__(86);var _propTypes2 = _interopRequireDefault(_propTypes);
	var _classnames = __webpack_require__(98);var _classnames2 = _interopRequireDefault(_classnames);

	var _icons = __webpack_require__(59);var _icons2 = _interopRequireDefault(_icons);
	var _reactAddonsCssTransitionGroup = __webpack_require__(122);var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);


	var _zoneActionsReducers = __webpack_require__(136);
	__webpack_require__(862);
	__webpack_require__(861);


	__webpack_require__(76);
	__webpack_require__(871);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // ES6
	//scss
	var HomeCell = function HomeCell(props) {return (
	        _react2.default.createElement('div', { className: 'Home_cell Home_cell--' + props.module },
	            _react2.default.createElement('div', { className: 'Home_cellInner' },
	                _react2.default.createElement('div', { className: 'Home_cellContent' },
	                    props.children))));};





	/*
	                                           *  1. Zone
	                                           */var

	ZoneModule = function (_React$Component) {_inherits(ZoneModule, _React$Component);

	    function ZoneModule(props) {_classCallCheck(this, ZoneModule);var _this = _possibleConstructorReturn(this, (ZoneModule.__proto__ || Object.getPrototypeOf(ZoneModule)).call(this,
	        props));

	        _this.state = {
	            startDate: (0, _moment2.default)().subtract(6, "days"),
	            endDate: (0, _moment2.default)(),
	            optedDate: (0, _moment2.default)().subtract(1, "days"),
	            selectedItem: null,
	            show: false,
	            locationName: 'Zone name' };


	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.getLocationInfo = _this.getLocationInfo.bind(_this);
	        _this.datePreviewChange = _this.datePreviewChange.bind(_this);
	        _this.setLocationsTemplate = _this.setLocationsTemplate.bind(_this);
	        _this.setZoneLocationEvents = _this.setZoneLocationEvents.bind(_this);
	        _this.showLocationsZoneEvents = _this.showLocationsZoneEvents.bind(_this);return _this;
	    }_createClass(ZoneModule, [{ key: 'componentWillMount', value: function componentWillMount()

	        {var _props =




	            this.props,_props$app = _props.app,session = _props$app.session,user = _props$app.user,id = _props.params.id,data = _props.dashboard.data;

	            var locationInfo = this.getLocationInfo();
	            if (locationInfo && locationInfo.location_name) {
	                this.setState({ LocationName: locationInfo.location_name });
	            }

	            this.props.actions.loadZoneData({
	                session: this.props.app.session,
	                user: this.props.app.user,
	                startDate: this.state.startDate,
	                endDate: this.state.endDate,
	                locationId: this.props.params.id,
	                dashboardInfo: data.locations || [] });

	        } }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

	        nextProps, nextState) {
	            var thisProps = this.props;
	            var futureProps = nextProps;
	            if (
	            futureProps.zone &&
	            futureProps.zone.data &&
	            futureProps.zone.data.oneWeekDay &&
	            futureProps.zone.data.oneWeekDay[0] &&
	            futureProps.zone.data.oneWeekDay[0].items &&
	            futureProps.zone.data.oneWeekDay[0].items.length > 0)
	            {
	                var thisZoneItems = futureProps.zone.data.oneWeekDay;
	                var returnValue = _.filter(thisZoneItems, function (item, index) {
	                    return item.show == false;
	                });

	                if (returnValue && returnValue.length > 0) {
	                    this.setState({ selectedItem: returnValue[0] });
	                }
	            }
	        } }, { key: 'handleChange', value: function handleChange(

	        selectedDate) {
	            this.props.actions.setSelectedDate((0, _moment2.default)(selectedDate));
	        } }, { key: 'datePreviewChange', value: function datePreviewChange(

	        item) {
	            this.props.actions.setSelectedDate((0, _moment2.default)(item.label));
	        } }, { key: 'getLocationInfo', value: function getLocationInfo()

	        {var

	            data =
	            this.props.dashboard.data;
	            var location = [];
	            if (data && data.locations && data.locations.length > 0) {
	                var filteredLocation = _.filter(data.locations, { 'location_id': this.props.params.id });
	                if (filteredLocation && filteredLocation.length > 0) {
	                    location = filteredLocation[0];
	                }
	            }
	            return location;
	        } }, { key: 'setLocationsTemplate', value: function setLocationsTemplate()

	        {
	            var locationInfos = this.getLocationInfo();
	            if (locationInfos) {
	                return _react2.default.createElement(LocationToggleContent, locationInfos);
	            }
	            return _react2.default.createElement('div', null);
	        } }, { key: 'showLocationsZoneEvents', value: function showLocationsZoneEvents()

	        {
	            this.setState({ show: !this.state.show });
	        } }, { key: 'setZoneLocationEvents', value: function setZoneLocationEvents()

	        {
	            var locationInfo = this.getLocationInfo();
	            if (locationInfo && locationInfo.events && locationInfo.events.length) {
	                return _react2.default.createElement(LocationsEventsComponent, locationInfo);
	            }
	            return _react2.default.createElement('div', null);
	        } }, { key: 'render', value: function render()

	        {var _this2 = this;var _props2 =







	            this.props,_props2$app = _props2.app,loading = _props2$app.loading,loaded = _props2$app.loaded,session = _props2$app.session,user = _props2$app.user,viewport = _props2$app.viewport,data = _props2.dashboard.data,zone = _props2.zone;

	            if (!this.state.selectedItem) {
	                return false;
	            }

	            return (
	                _react2.default.createElement('div', { className: 'Home' },
	                    _react2.default.createElement('div', { className: 'module-container' },
	                        _react2.default.createElement('div', { className: 'module-wrapper' },
	                            _react2.default.createElement('div', { className: 'module-grid single' },
	                                _react2.default.createElement(HomeCell, { module: 'scorecardmodule' },
	                                    _react2.default.createElement('div', { className: 'zone-page' },
	                                        _react2.default.createElement('div', null,
	                                            _react2.default.createElement('h2', null, this.state.LocationName, ' DETAIL & 1 WEEK HISTORY'),
	                                            _react2.default.createElement('div', { className: 'horizontal-line' }),
	                                            _react2.default.createElement('h3', null, 'Simply change the date for additional pictures'),

	                                            this.state.selectedItem &&
	                                            this.state.selectedItem.label &&
	                                            _react2.default.createElement(_reactDatepicker2.default, {
	                                                selected: (0, _moment2.default)(this.state.selectedItem.label),
	                                                onChange: function onChange(eventDate) {_this2.handleChange(eventDate);},
	                                                minDate: (0, _moment2.default)().subtract(6, "days"),
	                                                maxDate: (0, _moment2.default)() }),


	                                            _react2.default.createElement('div', { className: 'horizontal-line' })),

	                                        _react2.default.createElement('div', { className: 'zone-hero-image-date-thumbnails' },
	                                            _react2.default.createElement('div', { className: 'hero-container' },

	                                                this.state.selectedItem.items &&
	                                                this.state.selectedItem.items.length &&
	                                                this.state.selectedItem.items.length > 0 &&
	                                                _react2.default.createElement(_reactImageGallery2.default, {
	                                                    lazyload: 'true',
	                                                    items: this.state.selectedItem.items })),



	                                            _react2.default.createElement('div', { className: 'date-container' },

	                                                zone.data &&
	                                                zone.data.oneWeekDay &&
	                                                zone.data.oneWeekDay.length > 0 &&
	                                                _react2.default.createElement(ThumbnailsDates, _extends({},
	                                                zone.data,
	                                                this.state.selectedItem, {
	                                                    datePreviewChange: this.datePreviewChange })))),




	                                        _react2.default.createElement('div', { className: 'location-details' },

	                                            _react2.default.createElement('div', { className: 'box-footer' },
	                                                _react2.default.createElement('div', { className: 'box box-primary direct-chat direct-chat-primary collapsed-box' },
	                                                    _react2.default.createElement('div', { className: 'box-header with-border' },
	                                                        _react2.default.createElement('h3', { className: 'box-title' }, this.state.LocationName),
	                                                        _react2.default.createElement('div', { className: 'box-tools pull-right' },

	                                                            this.setZoneLocationEvents(),

	                                                            _react2.default.createElement('button', { className: 'btn btn-box-tool', 'data-widget': 'collapse', type: 'button', onClick:
	                                                                    function onClick(event) {
	                                                                        _this2.showLocationsZoneEvents();
	                                                                    } },

	                                                                _react2.default.createElement(_icons2.default, { name: 'plus' })))),



	                                                    _react2.default.createElement('div', { className: 'box-body' },

	                                                        this.state.show &&

	                                                        _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	                                                                transitionName: 'toggle-fade-in',
	                                                                transitionEnterTimeout: 500,
	                                                                transitionLeaveTimeout: 300 },
	                                                            this.setLocationsTemplate()))))))))))));














	        } }]);return ZoneModule;}(_react2.default.Component);


	/*
	                                                               *  2. Connect and BindActionsReducers
	                                                               */exports.default =
	(0, _reactRedux.connect)(
	function (state) {
	    return {
	        app: state.app,
	        session: state.app.session,
	        dashboard: state.views.home.modules.dashboard || [],
	        zone: state.views.zone };

	},
	function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            loadZoneData: _zoneActionsReducers.loadZoneData,
	            setSelectedDate: _zoneActionsReducers.setSelectedDate },
	        dispatch) };

	})(

	ZoneModule);


	var ThumbnailsDates = function ThumbnailsDates(_ref) {var oneWeekDay = _ref.oneWeekDay,datePreviewChange = _ref.datePreviewChange;
	    /* Render Images */
	    var imagePath = APP_PATH + "/assets/images/no-image-available.png";
	    var renderFullImages = [];
	    var renderImages = function renderImages() {
	        oneWeekDay &&
	        oneWeekDay.length > 0 &&
	        oneWeekDay.map(
	        function (metric, i) {
	            metric.show &&

	            renderFullImages.push(
	            _react2.default.createElement('div', { key: i, className: 'metric', onClick: function onClick(event) {
	                        datePreviewChange(metric);
	                    } },
	                _react2.default.createElement('div', { className: 'value' }, ' ', (0, _moment2.default)(metric.label).format('YYYY-MM-DD'), ' '),
	                _react2.default.createElement('div', { className: 'label' },

	                    metric.items &&
	                    metric.items.length > 0 &&
	                    metric.items[0] &&
	                    metric.items[0].thumbnail &&
	                    _react2.default.createElement('img', { src: metric.items[0].thumbnail, width: '200' }),


	                    metric.items &&
	                    !metric.items.length &&
	                    _react2.default.createElement('img', { src: imagePath, width: '200' }))));




	        });

	        return renderFullImages;
	    };

	    return (
	        _react2.default.createElement('div', { className: 'thumbnail-parent-wrapper' },
	            renderImages()));


	};

	/*
	    *  LocationsEventsComponent
	    */

	var LocationsEventsComponent = function LocationsEventsComponent(props) {

	    if (!props.events) {
	        return _react2.default.createElement('div', null);
	    }

	    return (
	        _react2.default.createElement('div', { className: 'box-tools-wrapper' },

	            props.events &&
	            props.events.map(
	            function (event, index) {return (
	                    _react2.default.createElement('span', { key: index, className: (0, _classnames2.default)(
	                            'badge',
	                            {
	                                'bg-red': event.event_message == 'alert',
	                                'bg-warning': event.event_message == 'warning',
	                                'bg-light-blue': event.event_message == 'message' }),


	                            'data-toggle': 'tooltip',
	                            title: event.event_value && event.event_value.length },
	                        _react2.default.createElement('strong', null, event.event_value && event.event_value.length)));})));





	};


	/* 
	    * Location Toggle content 
	    *
	    */

	var LocationToggleContent = function LocationToggleContent(props) {

	    if (!props) {
	        return _react2.default.createElement('div', null);
	    }

	    var combinedResults = [];
	    props.events &&
	    props.events.length &&
	    props.events.length > 0 &&
	    props.events.map(
	    function (prop, index) {
	        prop &&
	        prop.event_value &&
	        prop.event_value.length > 0 &&
	        prop.event_value.map(
	        function (item, idx) {
	            combinedResults.push(
	            _react2.default.createElement('li', { key: index + '-' + idx, className: 'list-group-item clearfix d-block' },
	                _react2.default.createElement('i', { className: 'fa fa-industry fa-fw' }), item.sensor_id,
	                _react2.default.createElement('span', { className: (0, _classnames2.default)(
	                        'float-right text-muted small',
	                        {
	                            'bg-red': item.event_level == 'alert',
	                            'bg-warning': item.event_level == 'warning',
	                            'bg-light-blue': item.event_level == 'message' }) },


	                    _react2.default.createElement('em', null, item.event_value)),

	                _react2.default.createElement('span', { className: 'event-message' }, item.event_message)));


	        });

	    });


	    combinedResults.push(
	    _react2.default.createElement('li', { key: 'unique-coordinates', className: 'list-group-item clearfix d-block' },
	        _react2.default.createElement('i', { className: 'fa fa-id-card-o fa-fw' }), ' GEO Coordinates',
	        _react2.default.createElement('span', { className: 'float-right text-muted small' },
	            _react2.default.createElement('em', null, props.location_location))));


	    combinedResults.push(_react2.default.createElement('li', { key: 'unique-updated', className: 'list-group-item clearfix d-block' },
	        _react2.default.createElement('i', { className: 'fa fa-object-group fa-fw' }), ' Last update',
	        _react2.default.createElement('span', { className: 'float-right text-muted small' },
	            _react2.default.createElement('em', null, (0, _moment2.default)(props.location_lastupdate).format('YYYY-MM-DD hh:mm')))));




	    return (
	        _react2.default.createElement('div', { className: 'list-group  no-padding' },
	            _react2.default.createElement('ul', null,
	                combinedResults)));



	};

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae; }\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px; }\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff; }\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae; }\n\n.react-datepicker-wrapper {\n  display: inline-block; }\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative; }\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px; }\n\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0; }\n\n.react-datepicker--time-only .react-datepicker__time {\n  border-radius: 0.3rem; }\n\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-radius: 0.3rem; }\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px; }\n\n.react-datepicker-popper {\n  z-index: 1; }\n\n.react-datepicker-popper[data-placement^=\"bottom\"] {\n  margin-top: 10px; }\n\n.react-datepicker-popper[data-placement^=\"top\"] {\n  margin-bottom: 10px; }\n\n.react-datepicker-popper[data-placement^=\"right\"] {\n  margin-left: 8px; }\n\n.react-datepicker-popper[data-placement^=\"right\"] .react-datepicker__triangle {\n  left: auto;\n  right: 42px; }\n\n.react-datepicker-popper[data-placement^=\"left\"] {\n  margin-right: 8px; }\n\n.react-datepicker-popper[data-placement^=\"left\"] .react-datepicker__triangle {\n  left: 42px;\n  right: auto; }\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-top: 8px;\n  position: relative; }\n\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px; }\n\n.react-datepicker__current-month,\n.react-datepicker-time__header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem; }\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.react-datepicker__navigation {\n  background: none;\n  line-height: 1.7rem;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  padding: 0;\n  border: 0.45rem solid transparent;\n  z-index: 1; }\n\n.react-datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc; }\n\n.react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3; }\n\n.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default; }\n\n.react-datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc; }\n\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 80px; }\n\n.react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3; }\n\n.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default; }\n\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc; }\n\n.react-datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3; }\n\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc; }\n\n.react-datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3; }\n\n.react-datepicker__month-container {\n  float: left; }\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center; }\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 70px; }\n\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0; }\n\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 70px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: -webkit-calc(195px + (1.7rem / 2));\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 30px;\n  width: 100%;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  padding: 5px 10px; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc; }\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent; }\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem; }\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer; }\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0; }\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap; }\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem; }\n\n.react-datepicker__day {\n  cursor: pointer; }\n\n.react-datepicker__day:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0; }\n\n.react-datepicker__day--today {\n  font-weight: bold; }\n\n.react-datepicker__day--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff; }\n\n.react-datepicker__day--highlighted:hover {\n  background-color: #32be3f; }\n\n.react-datepicker__day--highlighted-custom-1 {\n  color: magenta; }\n\n.react-datepicker__day--highlighted-custom-2 {\n  color: green; }\n\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff; }\n\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n  background-color: #1d5d90; }\n\n.react-datepicker__day--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2a87d0;\n  color: #fff; }\n\n.react-datepicker__day--keyboard-selected:hover {\n  background-color: #1d5d90; }\n\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n  background-color: rgba(33, 107, 165, 0.5); }\n\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n  background-color: #f0f0f0;\n  color: #000; }\n\n.react-datepicker__day--disabled {\n  cursor: default;\n  color: #ccc; }\n\n.react-datepicker__day--disabled:hover {\n  background-color: transparent; }\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block; }\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem; }\n\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer; }\n\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3; }\n\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  border-top-color: #ccc;\n  float: right;\n  margin-left: 20px;\n  top: 8px;\n  position: relative;\n  border-width: 0.45rem; }\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae; }\n\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer; }\n\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll; }\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc; }\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3; }\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3; }\n\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px; }\n\n.react-datepicker__close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle; }\n\n.react-datepicker__close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 7px;\n  text-align: center;\n  top: 50%; }\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left; }\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  z-index: 2147483647; }\n\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem; }\n\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n  .react-datepicker__portal .react-datepicker__day,\n  .react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem; } }\n\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem; }\n\n.react-datepicker__portal .react-datepicker__navigation {\n  border: 0.81rem solid transparent; }\n\n.react-datepicker__portal .react-datepicker__navigation--previous {\n  border-right-color: #ccc; }\n\n.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3; }\n\n.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default; }\n\n.react-datepicker__portal .react-datepicker__navigation--next {\n  border-left-color: #ccc; }\n\n.react-datepicker__portal .react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3; }\n\n.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default; }\n", ""]);

	// exports


/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*!\n  Ionicons, v2.0.0\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/\n@font-face {\n  font-family: \"Ionicons\";\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0\");\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0#iefix\") format(\"embedded-opentype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.0\") format(\"truetype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.0\") format(\"woff\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.0#Ionicons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.image-gallery-fullscreen-button::before,\n.image-gallery-play-button::before,\n.image-gallery-left-nav::before,\n.image-gallery-right-nav::before {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.image-gallery {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n  .image-gallery.fullscreen-modal {\n    background: #000;\n    bottom: 0;\n    height: 100%;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 5; }\n    .image-gallery.fullscreen-modal .image-gallery-content {\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n\n.image-gallery-content {\n  position: relative;\n  line-height: 0;\n  top: 0; }\n  .image-gallery-content.fullscreen {\n    background: #000; }\n    .image-gallery-content.fullscreen .image-gallery-slide {\n      background: #000; }\n\n.image-gallery-slide-wrapper {\n  position: relative; }\n  .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {\n    display: inline-block;\n    width: -webkit-calc(100% - 113px);\n    width: calc(100% - 113px); }\n    @media (max-width: 768px) {\n      .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {\n        width: -webkit-calc(100% - 84px);\n        width: calc(100% - 84px); } }\n\n.image-gallery-fullscreen-button,\n.image-gallery-play-button,\n.image-gallery-left-nav,\n.image-gallery-right-nav {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  z-index: 4; }\n  .image-gallery-fullscreen-button::before,\n  .image-gallery-play-button::before,\n  .image-gallery-left-nav::before,\n  .image-gallery-right-nav::before {\n    color: #fff;\n    line-height: .7;\n    text-shadow: 0 2px 2px #1a1a1a;\n    -webkit-transition: color .2s ease-out;\n    transition: color .2s ease-out; }\n  .image-gallery-fullscreen-button:hover::before,\n  .image-gallery-play-button:hover::before,\n  .image-gallery-left-nav:hover::before,\n  .image-gallery-right-nav:hover::before {\n    color: #337ab7; }\n    @media (max-width: 768px) {\n      .image-gallery-fullscreen-button:hover::before,\n      .image-gallery-play-button:hover::before,\n      .image-gallery-left-nav:hover::before,\n      .image-gallery-right-nav:hover::before {\n        color: #fff; } }\n\n.image-gallery-fullscreen-button,\n.image-gallery-play-button {\n  bottom: 0; }\n  .image-gallery-fullscreen-button::before,\n  .image-gallery-play-button::before {\n    font-size: 2.7em;\n    padding: 15px 20px;\n    text-shadow: 0 1px 1px #1a1a1a; }\n    @media (max-width: 768px) {\n      .image-gallery-fullscreen-button::before,\n      .image-gallery-play-button::before {\n        font-size: 2.4em; } }\n    @media (max-width: 480px) {\n      .image-gallery-fullscreen-button::before,\n      .image-gallery-play-button::before {\n        font-size: 2em; } }\n  .image-gallery-fullscreen-button:hover::before,\n  .image-gallery-play-button:hover::before {\n    color: #fff;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n    @media (max-width: 768px) {\n      .image-gallery-fullscreen-button:hover::before,\n      .image-gallery-play-button:hover::before {\n        -webkit-transform: none;\n                transform: none; } }\n\n.image-gallery-fullscreen-button {\n  right: 0; }\n  .image-gallery-fullscreen-button::before {\n    content: \"\\F386\"; }\n  .image-gallery-fullscreen-button.active::before {\n    content: \"\\F37D\"; }\n  .image-gallery-fullscreen-button.active:hover::before {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n\n.image-gallery-play-button {\n  left: 0; }\n  .image-gallery-play-button::before {\n    content: \"\\F488\"; }\n  .image-gallery-play-button.active::before {\n    content: \"\\F478\"; }\n\n.image-gallery-left-nav,\n.image-gallery-right-nav {\n  color: #fff;\n  font-size: 5em;\n  padding: 50px 15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .image-gallery-left-nav[disabled],\n  .image-gallery-right-nav[disabled] {\n    cursor: disabled;\n    opacity: .6;\n    pointer-events: none; }\n  @media (max-width: 768px) {\n    .image-gallery-left-nav,\n    .image-gallery-right-nav {\n      font-size: 3.4em;\n      padding: 20px 15px; } }\n  @media (max-width: 480px) {\n    .image-gallery-left-nav,\n    .image-gallery-right-nav {\n      font-size: 2.4em;\n      padding: 0 15px; } }\n\n.image-gallery-left-nav {\n  left: 0; }\n  .image-gallery-left-nav::before {\n    content: \"\\F3D2\"; }\n\n.image-gallery-right-nav {\n  right: 0; }\n  .image-gallery-right-nav::before {\n    content: \"\\F3D3\"; }\n\n.image-gallery-slides {\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n  white-space: nowrap; }\n\n.image-gallery-slide {\n  background: #fff;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n  .image-gallery-slide.center {\n    position: relative; }\n  .image-gallery-slide img {\n    width: 100%; }\n  .image-gallery-slide .image-gallery-description {\n    background: rgba(0, 0, 0, 0.4);\n    bottom: 70px;\n    color: #fff;\n    left: 0;\n    line-height: 1;\n    padding: 10px 20px;\n    position: absolute;\n    white-space: normal; }\n    @media (max-width: 768px) {\n      .image-gallery-slide .image-gallery-description {\n        bottom: 45px;\n        font-size: .8em;\n        padding: 8px 15px; } }\n\n.image-gallery-bullets {\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  position: absolute;\n  right: 0;\n  width: 80%;\n  z-index: 4; }\n  .image-gallery-bullets .image-gallery-bullets-container {\n    margin: 0;\n    padding: 0;\n    text-align: center; }\n  .image-gallery-bullets .image-gallery-bullet {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background-color: transparent;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 1px 0 #1a1a1a;\n            box-shadow: 0 1px 0 #1a1a1a;\n    cursor: pointer;\n    display: inline-block;\n    margin: 0 5px;\n    outline: none;\n    padding: 5px; }\n    @media (max-width: 768px) {\n      .image-gallery-bullets .image-gallery-bullet {\n        margin: 0 3px;\n        padding: 3px; } }\n    @media (max-width: 480px) {\n      .image-gallery-bullets .image-gallery-bullet {\n        padding: 2.7px; } }\n    .image-gallery-bullets .image-gallery-bullet.active {\n      background: #fff; }\n\n.image-gallery-thumbnails-wrapper {\n  position: relative; }\n  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n    display: inline-block;\n    vertical-align: top;\n    width: 108px; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n        width: 81px; } }\n    .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {\n      height: 100%;\n      width: 100%;\n      left: 0;\n      padding: 0;\n      position: absolute;\n      top: 0; }\n      .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {\n        display: block;\n        margin-right: 0;\n        padding: 0; }\n        .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail {\n          margin-left: 0; }\n  .image-gallery-thumbnails-wrapper.left {\n    margin-right: 5px; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnails-wrapper.left {\n        margin-right: 3px; } }\n  .image-gallery-thumbnails-wrapper.right {\n    margin-left: 5px; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnails-wrapper.right {\n        margin-left: 3px; } }\n\n.image-gallery-thumbnails {\n  overflow: hidden;\n  padding: 5px 0; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnails {\n      padding: 3px 0; } }\n  .image-gallery-thumbnails .image-gallery-thumbnails-container {\n    cursor: pointer;\n    text-align: center;\n    -webkit-transition: -webkit-transform .45s ease-out;\n    transition: -webkit-transform .45s ease-out;\n    transition: transform .45s ease-out;\n    transition: transform .45s ease-out, -webkit-transform .45s ease-out;\n    white-space: nowrap; }\n\n.image-gallery-thumbnail {\n  display: inline-block;\n  border: 4px solid transparent;\n  -webkit-transition: border .3s ease-out;\n  transition: border .3s ease-out;\n  width: 100px; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnail {\n      border: 3px solid transparent;\n      width: 75px; } }\n  .image-gallery-thumbnail + .image-gallery-thumbnail {\n    margin-left: 2px; }\n  .image-gallery-thumbnail img {\n    vertical-align: middle;\n    width: 100%; }\n  .image-gallery-thumbnail.active {\n    border: 4px solid #337ab7; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnail.active {\n        border: 3px solid #337ab7; } }\n\n.image-gallery-thumbnail-label {\n  color: #1a1a1a;\n  font-size: 1em; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnail-label {\n      font-size: .8em; } }\n\n.image-gallery-index {\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  line-height: 1;\n  padding: 10px 20px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 4; }\n  @media (max-width: 768px) {\n    .image-gallery-index {\n      font-size: .8em;\n      padding: 5px 10px; } }\n", ""]);

	// exports


/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".zone-page {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: column wrap;\n          flex-flow: column wrap;\n  width: 100%;\n  color: #868e96; }\n  .zone-page h2 {\n    color: #868e96;\n    padding: 1% 0 0 1%;\n    font-weight: 600;\n    text-transform: uppercase; }\n  .zone-page h3 {\n    color: #868e96;\n    padding: 0 0 0 1%;\n    font-weight: 500; }\n  .zone-page .react-datepicker-wrapper {\n    padding: 1% 0 0 1%; }\n  .zone-page .zone-hero-image-date-thumbnails {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    width: 100%;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n            align-items: flex-start; }\n  .zone-page .hero-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    width: 70%; }\n  .zone-page .date-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n            flex-flow: row wrap;\n    width: 30%; }\n    .zone-page .date-container .thumbnail-parent-wrapper {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-wrap: wrap;\n              flex-wrap: wrap; }\n      .zone-page .date-container .thumbnail-parent-wrapper img {\n        width: 150px;\n        height: auto; }\n  .zone-page .metric {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    cursor: pointer;\n    margin-top: 2%;\n    padding-right: 0.5%; }\n    .zone-page .metric .value {\n      font-size: 1em;\n      font-weight: 600;\n      color: #555; }\n    .zone-page .metric .label {\n      margin-top: 1%; }\n  .zone-page .location-details {\n    width: 50%; }\n\n.horizontal-line {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.react-datepicker__input-container input {\n  font-size: 1.1em;\n  font-weight: 700;\n  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  border-radius: 3%; }\n  .react-datepicker__input-container input:hover {\n    background: #f0f0f0;\n    color: #000; }\n\n.react-datepicker-popper {\n  z-index: 13; }\n\n.image-gallery {\n  width: 95%;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n  .image-gallery .image-gallery-content {\n    position: relative;\n    line-height: 0;\n    top: 0; }\n    .image-gallery .image-gallery-content .image-gallery-slide-wrapper {\n      position: relative; }\n  .image-gallery .image-gallery-slides {\n    line-height: 0;\n    overflow: hidden;\n    position: relative;\n    white-space: nowrap; }\n    .image-gallery .image-gallery-slides .image-gallery-slide {\n      background: #fff;\n      left: 0;\n      top: 0;\n      width: 100%; }\n      .image-gallery .image-gallery-slides .image-gallery-slide .image-gallery-description {\n        background: rgba(0, 0, 0, 0.4);\n        bottom: 70px;\n        color: #fff;\n        left: 0;\n        line-height: 1;\n        padding: 10px 20px;\n        position: absolute;\n        white-space: normal; }\n      .image-gallery .image-gallery-slides .image-gallery-slide img {\n        width: 100%; }\n      .image-gallery .image-gallery-slides .image-gallery-slide .image-gallery-image {\n        line-height: 0;\n        overflow: hidden;\n        position: relative;\n        white-space: nowrap; }\n\n.image-gallery-slide.center {\n  height: 425px; }\n\n.calendar-icon:before {\n  content: \"\\F073\"; }\n", ""]);

	// exports


/***/ },

/***/ 668:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	var detectPassiveEvents = {
	  update: function update() {
	    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
	      var passive = false;
	      var options = Object.defineProperty({}, 'passive', {
	        get: function get() {
	          passive = true;
	        }
	      });
	      // note: have to set and remove a no-op listener instead of null
	      // (which was used previously), becasue Edge v15 throws an error
	      // when providing a null callback.
	      // https://github.com/rafrex/detect-passive-events/pull/3
	      var noop = function noop() {};
	      window.addEventListener('testPassiveEventSupport', noop, options);
	      window.removeEventListener('testPassiveEventSupport', noop, options);
	      detectPassiveEvents.hasSupport = passive;
	    }
	  }
	};

	detectPassiveEvents.update();
	exports.default = detectPassiveEvents;

/***/ },

/***/ 690:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = debounce;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 691:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = throttle;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.14.3
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Popper = factory());
	}(this, (function () { 'use strict';

	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}

	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}

	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}

	var supportsMicroTasks = isBrowser && window.Promise;

	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var css = getComputedStyle(element, null);
	  return property ? css[property] : css;
	}

	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}

	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }

	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }

	  // Firefox want us to check `-x` and `-y` variations as well

	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;

	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }

	  return getScrollParent(getParentNode(element));
	}

	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}

	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }

	  var noOffsetParent = isIE(10) ? document.body : null;

	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }

	  var nodeName = offsetParent && offsetParent.nodeName;

	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }

	  // .offsetParent will return the closest TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }

	  return offsetParent;
	}

	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}

	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }

	  return node;
	}

	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }

	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;

	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;

	  // Both nodes are inside #document

	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }

	    return getOffsetParent(commonAncestorContainer);
	  }

	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}

	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }

	  return element[upperSide];
	}

	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}

	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */

	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}

	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
	}

	function getWindowSizes() {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);

	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();





	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}

	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};

	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}

	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };

	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;

	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;

	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');

	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }

	  return getClientRect(result);
	}

	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);

	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && parent.nodeName === 'HTML') {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;

	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);

	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;

	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }

	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }

	  return offsets;
	}

	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);

	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };

	  return getClientRect(offset);
	}

	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  return isFixed(getParentNode(element));
	}

	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */

	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}

	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	  // NOTE: 1 DOM access here

	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }

	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;

	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }

	  // Add paddings
	  boundaries.left += padding;
	  boundaries.top += padding;
	  boundaries.right -= padding;
	  boundaries.bottom -= padding;

	  return boundaries;
	}

	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;

	  return width * height;
	}

	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }

	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };

	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });

	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });

	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

	  var variation = placement.split('-')[1];

	  return computedPlacement + (variation ? '-' + variation : '');
	}

	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}

	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var styles = getComputedStyle(element);
	  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}

	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];

	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);

	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };

	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }

	  return popperOffsets;
	}

	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }

	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}

	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }

	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}

	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);

	      data = fn(data, modifier);
	    }
	  });

	  return data;
	}

	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }

	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };

	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;

	  data.positionFixed = this.options.positionFixed;

	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

	  // run the modifiers
	  data = runModifiers(this.modifiers, data);

	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}

	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}

	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}

	/**
	 * Destroy the popper
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;

	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }

	  this.disableEventListeners();

	  // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}

	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}

	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });

	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}

	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;

	  return state;
	}

	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}

	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);

	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });

	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}

	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger onUpdate callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}

	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}

	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);

	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);

	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }

	  return data;
	}

	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

	  popper.setAttribute('x-placement', placement);

	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

	  return options;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;

	  // Remove this legacy support in Popper.js v2

	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);

	  // Styles
	  var styles = {
	    position: popper.position
	  };

	  // Avoid blurry text by using full pixel integers.
	  // For pixel-perfect positioning, top/bottom prefers rounded
	  // values, while left/right prefers floored values.
	  var offsets = {
	    left: Math.floor(popper.left),
	    top: Math.round(popper.top),
	    bottom: Math.round(popper.bottom),
	    right: Math.floor(popper.right)
	  };

	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';

	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');

	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    top = -offsetParentRect.height + offsets.bottom;
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    left = -offsetParentRect.width + offsets.right;
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }

	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };

	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

	  return data;
	}

	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });

	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });

	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;

	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }

	  var arrowElement = options.element;

	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);

	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }

	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];

	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjuction
	  //

	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);

	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

	  return data;
	}

	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}

	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-right` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);

	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}

	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }

	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';

	  var flipOrder = [];

	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }

	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }

	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);

	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;

	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;

	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }

	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }

	      data.placement = placement + (variation ? '-' + variation : '');

	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';

	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }

	  return data;
	}

	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];

	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }

	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }

	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}

	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];

	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });

	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));

	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }

	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });

	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var basePlacement = placement.split('-')[0];

	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }

	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }

	  data.popper = popper;
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }

	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];

	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;

	  options.boundaries = boundaries;

	  var order = options.priority;
	  var popper = data.offsets.popper;

	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty({}, mainSide, value);
	    }
	  };

	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });

	  data.offsets.popper = popper;

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];

	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;

	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';

	    var shiftOffsets = {
	      start: defineProperty({}, side, reference[side]),
	      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };

	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }

	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;

	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }

	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }

	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);

	  return data;
	}

	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */

	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },

	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unitless, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the height.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },

	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * An scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper this makes sure the popper has always a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier, can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },

	  /**
	   * Modifier used to make sure the reference and its popper stay near eachothers
	   * without leaving any gap between the two. Expecially useful when the arrow is
	   * enabled and you want to assure it to point to its reference element.
	   * It cares only about the first axis, you can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },

	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjuction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },

	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations).
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position,
	     * the popper will never be placed outside of the defined boundaries
	     * (except if keepTogether is enabled)
	     */
	    boundariesElement: 'viewport'
	  },

	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },

	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },

	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define you own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: undefined
	  }
	};

	/**
	 * The `dataObject` is an object containing all the informations used by Popper.js
	 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */

	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overriden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass as 3rd argument an object with the same
	 * structure of this object, example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',

	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,

	  /**
	   * Whether events (resize, scroll) are initially enabled
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,

	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,

	  /**
	   * Callback called when the popper is created.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},

	  /**
	   * Callback called when the popper is updated, this callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},

	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};

	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */

	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */

	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Create a new Popper.js instance
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);

	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };

	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));

	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);

	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };

	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;

	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });

	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });

	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });

	    // fire the first update to position the popper in the right place
	    this.update();

	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }

	    this.state.eventsEnabled = eventsEnabled;
	  }

	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs


	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }

	    /**
	     * Schedule an update, it will run on the next UI update available
	     * @method scheduleUpdate
	     * @memberof Popper
	     */


	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */

	  }]);
	  return Popper;
	}();

	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */


	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;

	return Popper;

	})));
	//# sourceMappingURL=popper.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var React = _interopDefault(__webpack_require__(5));
	var PropTypes = _interopDefault(__webpack_require__(86));
	var classnames = _interopDefault(__webpack_require__(757));
	var onClickOutside = _interopDefault(__webpack_require__(759));
	var moment = _interopDefault(__webpack_require__(2));
	var reactPopper = __webpack_require__(760);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};









	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();









	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};











	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	function generateYears(year, noOfYear, minDate, maxDate) {
	  var list = [];
	  for (var i = 0; i < 2 * noOfYear + 1; i++) {
	    var newYear = year + noOfYear - i;
	    var isInRange = true;

	    if (minDate) {
	      isInRange = minDate.year() <= newYear;
	    }

	    if (maxDate && isInRange) {
	      isInRange = maxDate.year() >= newYear;
	    }

	    if (isInRange) {
	      list.push(newYear);
	    }
	  }

	  return list;
	}

	var YearDropdownOptions = function (_React$Component) {
	  inherits(YearDropdownOptions, _React$Component);

	  function YearDropdownOptions(props) {
	    classCallCheck(this, YearDropdownOptions);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.renderOptions = function () {
	      var selectedYear = _this.props.year;
	      var options = _this.state.yearsList.map(function (year) {
	        return React.createElement(
	          "div",
	          {
	            className: selectedYear === year ? "react-datepicker__year-option --selected_year" : "react-datepicker__year-option",
	            key: year,
	            ref: year,
	            onClick: _this.onChange.bind(_this, year)
	          },
	          selectedYear === year ? React.createElement(
	            "span",
	            { className: "react-datepicker__year-option--selected" },
	            "\u2713"
	          ) : "",
	          year
	        );
	      });

	      var minYear = _this.props.minDate ? _this.props.minDate.year() : null;
	      var maxYear = _this.props.maxDate ? _this.props.maxDate.year() : null;

	      if (!maxYear || !_this.state.yearsList.find(function (year) {
	        return year === maxYear;
	      })) {
	        options.unshift(React.createElement(
	          "div",
	          {
	            className: "react-datepicker__year-option",
	            ref: "upcoming",
	            key: "upcoming",
	            onClick: _this.incrementYears
	          },
	          React.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
	        ));
	      }

	      if (!minYear || !_this.state.yearsList.find(function (year) {
	        return year === minYear;
	      })) {
	        options.push(React.createElement(
	          "div",
	          {
	            className: "react-datepicker__year-option",
	            ref: "previous",
	            key: "previous",
	            onClick: _this.decrementYears
	          },
	          React.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
	        ));
	      }

	      return options;
	    };

	    _this.onChange = function (year) {
	      _this.props.onChange(year);
	    };

	    _this.handleClickOutside = function () {
	      _this.props.onCancel();
	    };

	    _this.shiftYears = function (amount) {
	      var years = _this.state.yearsList.map(function (year) {
	        return year + amount;
	      });

	      _this.setState({
	        yearsList: years
	      });
	    };

	    _this.incrementYears = function () {
	      return _this.shiftYears(1);
	    };

	    _this.decrementYears = function () {
	      return _this.shiftYears(-1);
	    };

	    var yearDropdownItemNumber = props.yearDropdownItemNumber,
	        scrollableYearDropdown = props.scrollableYearDropdown;

	    var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);

	    _this.state = {
	      yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
	    };
	    return _this;
	  }

	  YearDropdownOptions.prototype.render = function render() {
	    var dropdownClass = classnames({
	      "react-datepicker__year-dropdown": true,
	      "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
	    });

	    return React.createElement(
	      "div",
	      { className: dropdownClass },
	      this.renderOptions()
	    );
	  };

	  return YearDropdownOptions;
	}(React.Component);

	YearDropdownOptions.propTypes = {
	  minDate: PropTypes.object,
	  maxDate: PropTypes.object,
	  onCancel: PropTypes.func.isRequired,
	  onChange: PropTypes.func.isRequired,
	  scrollableYearDropdown: PropTypes.bool,
	  year: PropTypes.number.isRequired,
	  yearDropdownItemNumber: PropTypes.number
	};

	var dayOfWeekCodes = {
	  1: "mon",
	  2: "tue",
	  3: "wed",
	  4: "thu",
	  5: "fri",
	  6: "sat",
	  7: "sun"
	};

	// These functions are not exported so
	// that we avoid magic strings like 'days'
	function set$1(date, unit, to) {
	  return date.set(unit, to);
	}

	function add(date, amount, unit) {
	  return date.add(amount, unit);
	}

	function subtract(date, amount, unit) {
	  return date.subtract(amount, unit);
	}

	function get$1(date, unit) {
	  return date.get(unit);
	}

	function getStartOf(date, unit) {
	  return date.startOf(unit);
	}

	// ** Date Constructors **

	function newDate(point) {
	  return moment(point);
	}

	function newDateWithOffset(utcOffset) {
	  return moment().utc().utcOffset(utcOffset);
	}

	function now(maybeFixedUtcOffset) {
	  if (maybeFixedUtcOffset == null) {
	    return newDate();
	  }
	  return newDateWithOffset(maybeFixedUtcOffset);
	}

	function cloneDate(date) {
	  return date.clone();
	}

	function parseDate(value, _ref) {
	  var dateFormat = _ref.dateFormat,
	      locale = _ref.locale;

	  var m = moment(value, dateFormat, locale || moment.locale(), true);
	  return m.isValid() ? m : null;
	}

	// ** Date "Reflection" **

	function isMoment(date) {
	  return moment.isMoment(date);
	}

	function isDate(date) {
	  return moment.isDate(date);
	}

	// ** Date Formatting **

	function formatDate(date, format) {
	  return date.format(format);
	}

	function safeDateFormat(date, _ref2) {
	  var dateFormat = _ref2.dateFormat,
	      locale = _ref2.locale;

	  return date && date.clone().locale(locale || moment.locale()).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) || "";
	}

	// ** Date Setters **

	function setTime(date, _ref3) {
	  var hour = _ref3.hour,
	      minute = _ref3.minute,
	      second = _ref3.second;

	  date.set({ hour: hour, minute: minute, second: second });
	  return date;
	}

	function setMonth(date, month) {
	  return set$1(date, "month", month);
	}

	function setYear(date, year) {
	  return set$1(date, "year", year);
	}



	// ** Date Getters **

	function getSecond(date) {
	  return get$1(date, "second");
	}

	function getMinute(date) {
	  return get$1(date, "minute");
	}

	function getHour(date) {
	  return get$1(date, "hour");
	}

	// Returns day of week
	function getDay(date) {
	  return get$1(date, "day");
	}

	function getWeek(date) {
	  return get$1(date, "week");
	}

	function getMonth(date) {
	  return get$1(date, "month");
	}

	function getYear(date) {
	  return get$1(date, "year");
	}

	// Returns day of month
	function getDate(date) {
	  return get$1(date, "date");
	}



	function getDayOfWeekCode(day) {
	  return dayOfWeekCodes[day.isoWeekday()];
	}

	// *** Start of ***

	function getStartOfDay(date) {
	  return getStartOf(date, "day");
	}

	function getStartOfWeek(date) {
	  return getStartOf(date, "week");
	}
	function getStartOfMonth(date) {
	  return getStartOf(date, "month");
	}

	function getStartOfDate(date) {
	  return getStartOf(date, "date");
	}

	// *** End of ***





	// ** Date Math **

	// *** Addition ***

	function addMinutes(date, amount) {
	  return add(date, amount, "minutes");
	}

	function addHours(date, amount) {
	  return add(date, amount, "hours");
	}

	function addDays(date, amount) {
	  return add(date, amount, "days");
	}

	function addWeeks(date, amount) {
	  return add(date, amount, "weeks");
	}

	function addMonths(date, amount) {
	  return add(date, amount, "months");
	}

	function addYears(date, amount) {
	  return add(date, amount, "years");
	}

	// *** Subtraction ***
	function subtractDays(date, amount) {
	  return subtract(date, amount, "days");
	}

	function subtractWeeks(date, amount) {
	  return subtract(date, amount, "weeks");
	}

	function subtractMonths(date, amount) {
	  return subtract(date, amount, "months");
	}

	function subtractYears(date, amount) {
	  return subtract(date, amount, "years");
	}

	// ** Date Comparison **

	function isBefore(date1, date2) {
	  return date1.isBefore(date2);
	}

	function isAfter(date1, date2) {
	  return date1.isAfter(date2);
	}



	function isSameYear(date1, date2) {
	  if (date1 && date2) {
	    return date1.isSame(date2, "year");
	  } else {
	    return !date1 && !date2;
	  }
	}

	function isSameMonth(date1, date2) {
	  if (date1 && date2) {
	    return date1.isSame(date2, "month");
	  } else {
	    return !date1 && !date2;
	  }
	}

	function isSameDay(moment1, moment2) {
	  if (moment1 && moment2) {
	    return moment1.isSame(moment2, "day");
	  } else {
	    return !moment1 && !moment2;
	  }
	}



	function isDayInRange(day, startDate, endDate) {
	  var before = startDate.clone().startOf("day").subtract(1, "seconds");
	  var after = endDate.clone().startOf("day").add(1, "seconds");
	  return day.clone().startOf("day").isBetween(before, after);
	}

	// *** Diffing ***



	// ** Date Localization **

	function localizeDate(date, locale) {
	  return date.clone().locale(locale || moment.locale());
	}







	function getLocaleData(date) {
	  return date.localeData();
	}

	function getLocaleDataForLocale(locale) {
	  return moment.localeData(locale);
	}

	function getWeekdayMinInLocale(locale, date) {
	  return locale.weekdaysMin(date);
	}

	function getWeekdayShortInLocale(locale, date) {
	  return locale.weekdaysShort(date);
	}

	// TODO what is this format exactly?
	function getMonthInLocale(locale, date, format) {
	  return locale.months(date, format);
	}

	function getMonthShortInLocale(locale, date) {
	  return locale.monthsShort(date);
	}

	// ** Utils for some components **

	function isDayDisabled(day) {
	  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      minDate = _ref4.minDate,
	      maxDate = _ref4.maxDate,
	      excludeDates = _ref4.excludeDates,
	      includeDates = _ref4.includeDates,
	      filterDate = _ref4.filterDate;

	  return minDate && day.isBefore(minDate, "day") || maxDate && day.isAfter(maxDate, "day") || excludeDates && excludeDates.some(function (excludeDate) {
	    return isSameDay(day, excludeDate);
	  }) || includeDates && !includeDates.some(function (includeDate) {
	    return isSameDay(day, includeDate);
	  }) || filterDate && !filterDate(day.clone()) || false;
	}

	function isTimeDisabled(time, disabledTimes) {
	  var l = disabledTimes.length;
	  for (var i = 0; i < l; i++) {
	    if (disabledTimes[i].get("hours") === time.get("hours") && disabledTimes[i].get("minutes") === time.get("minutes")) {
	      return true;
	    }
	  }

	  return false;
	}

	function isTimeInDisabledRange(time, _ref5) {
	  var minTime = _ref5.minTime,
	      maxTime = _ref5.maxTime;

	  if (!minTime || !maxTime) {
	    throw new Error("Both minTime and maxTime props required");
	  }

	  var base = moment().hours(0).minutes(0).seconds(0);
	  var baseTime = base.clone().hours(time.get("hours")).minutes(time.get("minutes"));
	  var min = base.clone().hours(minTime.get("hours")).minutes(minTime.get("minutes"));
	  var max = base.clone().hours(maxTime.get("hours")).minutes(maxTime.get("minutes"));

	  return !(baseTime.isSameOrAfter(min) && baseTime.isSameOrBefore(max));
	}

	function allDaysDisabledBefore(day, unit) {
	  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      minDate = _ref6.minDate,
	      includeDates = _ref6.includeDates;

	  var dateBefore = day.clone().subtract(1, unit);
	  return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateBefore.isBefore(includeDate, unit);
	  }) || false;
	}

	function allDaysDisabledAfter(day, unit) {
	  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      maxDate = _ref7.maxDate,
	      includeDates = _ref7.includeDates;

	  var dateAfter = day.clone().add(1, unit);
	  return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateAfter.isAfter(includeDate, unit);
	  }) || false;
	}

	function getEffectiveMinDate(_ref8) {
	  var minDate = _ref8.minDate,
	      includeDates = _ref8.includeDates;

	  if (includeDates && minDate) {
	    return moment.min(includeDates.filter(function (includeDate) {
	      return minDate.isSameOrBefore(includeDate, "day");
	    }));
	  } else if (includeDates) {
	    return moment.min(includeDates);
	  } else {
	    return minDate;
	  }
	}

	function getEffectiveMaxDate(_ref9) {
	  var maxDate = _ref9.maxDate,
	      includeDates = _ref9.includeDates;

	  if (includeDates && maxDate) {
	    return moment.max(includeDates.filter(function (includeDate) {
	      return maxDate.isSameOrAfter(includeDate, "day");
	    }));
	  } else if (includeDates) {
	    return moment.max(includeDates);
	  } else {
	    return maxDate;
	  }
	}

	function getHightLightDaysMap() {
	  var highlightDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-datepicker__day--highlighted";

	  var dateClasses = new Map();
	  for (var i = 0, len = highlightDates.length; i < len; i++) {
	    var obj = highlightDates[i];
	    if (isMoment(obj)) {
	      var key = obj.format("MM.DD.YYYY");
	      var classNamesArr = dateClasses.get(key) || [];
	      if (!classNamesArr.includes(defaultClassName)) {
	        classNamesArr.push(defaultClassName);
	        dateClasses.set(key, classNamesArr);
	      }
	    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	      var keys = Object.keys(obj);
	      var className = keys[0];
	      var arrOfMoments = obj[keys[0]];
	      if (typeof className === "string" && arrOfMoments.constructor === Array) {
	        for (var k = 0, _len = arrOfMoments.length; k < _len; k++) {
	          var _key = arrOfMoments[k].format("MM.DD.YYYY");
	          var _classNamesArr = dateClasses.get(_key) || [];
	          if (!_classNamesArr.includes(className)) {
	            _classNamesArr.push(className);
	            dateClasses.set(_key, _classNamesArr);
	          }
	        }
	      }
	    }
	  }

	  return dateClasses;
	}

	function timesToInjectAfter(startOfDay, currentTime, currentMultiplier, intervals, injectedTimes) {
	  var l = injectedTimes.length;
	  var times = [];
	  for (var i = 0; i < l; i++) {
	    var injectedTime = addMinutes(addHours(cloneDate(startOfDay), getHour(injectedTimes[i])), getMinute(injectedTimes[i]));
	    var nextTime = addMinutes(cloneDate(startOfDay), (currentMultiplier + 1) * intervals);

	    if (injectedTime.isBetween(currentTime, nextTime)) {
	      times.push(injectedTimes[i]);
	    }
	  }

	  return times;
	}

	var WrappedYearDropdownOptions = onClickOutside(YearDropdownOptions);

	var YearDropdown = function (_React$Component) {
	  inherits(YearDropdown, _React$Component);

	  function YearDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck(this, YearDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function () {
	      var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
	      var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;

	      var options = [];
	      for (var i = minYear; i <= maxYear; i++) {
	        options.push(React.createElement(
	          "option",
	          { key: i, value: i },
	          i
	        ));
	      }
	      return options;
	    }, _this.onSelectChange = function (e) {
	      _this.onChange(e.target.value);
	    }, _this.renderSelectMode = function () {
	      return React.createElement(
	        "select",
	        {
	          value: _this.props.year,
	          className: "react-datepicker__year-select",
	          onChange: _this.onSelectChange
	        },
	        _this.renderSelectOptions()
	      );
	    }, _this.renderReadView = function (visible) {
	      return React.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__year-read-view",
	          onClick: function onClick(event) {
	            return _this.toggleDropdown(event);
	          }
	        },
	        React.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
	        React.createElement(
	          "span",
	          { className: "react-datepicker__year-read-view--selected-year" },
	          _this.props.year
	        )
	      );
	    }, _this.renderDropdown = function () {
	      return React.createElement(WrappedYearDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        year: _this.props.year,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
	      });
	    }, _this.renderScrollMode = function () {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown());
	      }
	      return result;
	    }, _this.onChange = function (year) {
	      _this.toggleDropdown();
	      if (year === _this.props.year) return;
	      _this.props.onChange(year);
	    }, _this.toggleDropdown = function (event) {
	      _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      }, function () {
	        if (_this.props.adjustDateOnChange) {
	          _this.handleYearChange(_this.props.date, event);
	        }
	      });
	    }, _this.handleYearChange = function (date, event) {
	      _this.onSelect(date, event);
	      _this.setOpen();
	    }, _this.onSelect = function (date, event) {
	      if (_this.props.onSelect) {
	        _this.props.onSelect(date, event);
	      }
	    }, _this.setOpen = function () {
	      if (_this.props.setOpen) {
	        _this.props.setOpen(true);
	      }
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  YearDropdown.prototype.render = function render() {
	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode();
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode();
	        break;
	    }

	    return React.createElement(
	      "div",
	      {
	        className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return YearDropdown;
	}(React.Component);

	YearDropdown.propTypes = {
	  adjustDateOnChange: PropTypes.bool,
	  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
	  maxDate: PropTypes.object,
	  minDate: PropTypes.object,
	  onChange: PropTypes.func.isRequired,
	  scrollableYearDropdown: PropTypes.bool,
	  year: PropTypes.number.isRequired,
	  yearDropdownItemNumber: PropTypes.number,
	  date: PropTypes.object,
	  onSelect: PropTypes.func,
	  setOpen: PropTypes.func
	};

	var MonthDropdownOptions = function (_React$Component) {
	  inherits(MonthDropdownOptions, _React$Component);

	  function MonthDropdownOptions() {
	    var _temp, _this, _ret;

	    classCallCheck(this, MonthDropdownOptions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderOptions = function () {
	      return _this.props.monthNames.map(function (month, i) {
	        return React.createElement(
	          "div",
	          {
	            className: _this.props.month === i ? "react-datepicker__month-option --selected_month" : "react-datepicker__month-option",
	            key: month,
	            ref: month,
	            onClick: _this.onChange.bind(_this, i)
	          },
	          _this.props.month === i ? React.createElement(
	            "span",
	            { className: "react-datepicker__month-option--selected" },
	            "\u2713"
	          ) : "",
	          month
	        );
	      });
	    }, _this.onChange = function (month) {
	      return _this.props.onChange(month);
	    }, _this.handleClickOutside = function () {
	      return _this.props.onCancel();
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthDropdownOptions.prototype.render = function render() {
	    return React.createElement(
	      "div",
	      { className: "react-datepicker__month-dropdown" },
	      this.renderOptions()
	    );
	  };

	  return MonthDropdownOptions;
	}(React.Component);

	MonthDropdownOptions.propTypes = {
	  onCancel: PropTypes.func.isRequired,
	  onChange: PropTypes.func.isRequired,
	  month: PropTypes.number.isRequired,
	  monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
	};

	var WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions);

	var MonthDropdown = function (_React$Component) {
	  inherits(MonthDropdown, _React$Component);

	  function MonthDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck(this, MonthDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function (monthNames) {
	      return monthNames.map(function (M, i) {
	        return React.createElement(
	          "option",
	          { key: i, value: i },
	          M
	        );
	      });
	    }, _this.renderSelectMode = function (monthNames) {
	      return React.createElement(
	        "select",
	        {
	          value: _this.props.month,
	          className: "react-datepicker__month-select",
	          onChange: function onChange(e) {
	            return _this.onChange(e.target.value);
	          }
	        },
	        _this.renderSelectOptions(monthNames)
	      );
	    }, _this.renderReadView = function (visible, monthNames) {
	      return React.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__month-read-view",
	          onClick: _this.toggleDropdown
	        },
	        React.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
	        React.createElement(
	          "span",
	          { className: "react-datepicker__month-read-view--selected-month" },
	          monthNames[_this.props.month]
	        )
	      );
	    }, _this.renderDropdown = function (monthNames) {
	      return React.createElement(WrappedMonthDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        month: _this.props.month,
	        monthNames: monthNames,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown
	      });
	    }, _this.renderScrollMode = function (monthNames) {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible, monthNames)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown(monthNames));
	      }
	      return result;
	    }, _this.onChange = function (month) {
	      _this.toggleDropdown();
	      if (month !== _this.props.month) {
	        _this.props.onChange(month);
	      }
	    }, _this.toggleDropdown = function () {
	      return _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthDropdown.prototype.render = function render() {
	    var _this2 = this;

	    var localeData = getLocaleDataForLocale(this.props.locale);
	    var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function (M) {
	      return getMonthShortInLocale(localeData, newDate({ M: M }));
	    } : function (M) {
	      return getMonthInLocale(localeData, newDate({ M: M }), _this2.props.dateFormat);
	    });

	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode(monthNames);
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode(monthNames);
	        break;
	    }

	    return React.createElement(
	      "div",
	      {
	        className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return MonthDropdown;
	}(React.Component);

	MonthDropdown.propTypes = {
	  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
	  locale: PropTypes.string,
	  dateFormat: PropTypes.string.isRequired,
	  month: PropTypes.number.isRequired,
	  onChange: PropTypes.func.isRequired,
	  useShortMonthInDropdown: PropTypes.bool
	};

	function generateMonthYears(minDate, maxDate) {
	  var list = [];

	  var currDate = getStartOfMonth(cloneDate(minDate));
	  var lastDate = getStartOfMonth(cloneDate(maxDate));

	  while (!isAfter(currDate, lastDate)) {
	    list.push(cloneDate(currDate));

	    addMonths(currDate, 1);
	  }

	  return list;
	}

	var MonthYearDropdownOptions = function (_React$Component) {
	  inherits(MonthYearDropdownOptions, _React$Component);

	  function MonthYearDropdownOptions(props) {
	    classCallCheck(this, MonthYearDropdownOptions);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.renderOptions = function () {
	      return _this.state.monthYearsList.map(function (monthYear) {
	        var monthYearPoint = monthYear.valueOf();

	        var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);

	        return React.createElement(
	          "div",
	          {
	            className: isSameMonthYear ? "react-datepicker__month-year-option --selected_month-year" : "react-datepicker__month-year-option",
	            key: monthYearPoint,
	            ref: monthYearPoint,
	            onClick: _this.onChange.bind(_this, monthYearPoint)
	          },
	          isSameMonthYear ? React.createElement(
	            "span",
	            { className: "react-datepicker__month-year-option--selected" },
	            "\u2713"
	          ) : "",
	          formatDate(monthYear, _this.props.dateFormat)
	        );
	      });
	    };

	    _this.onChange = function (monthYear) {
	      return _this.props.onChange(monthYear);
	    };

	    _this.handleClickOutside = function () {
	      _this.props.onCancel();
	    };

	    _this.state = {
	      monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
	    };
	    return _this;
	  }

	  MonthYearDropdownOptions.prototype.render = function render() {
	    var dropdownClass = classnames({
	      "react-datepicker__month-year-dropdown": true,
	      "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
	    });

	    return React.createElement(
	      "div",
	      { className: dropdownClass },
	      this.renderOptions()
	    );
	  };

	  return MonthYearDropdownOptions;
	}(React.Component);

	MonthYearDropdownOptions.propTypes = {
	  minDate: PropTypes.object.isRequired,
	  maxDate: PropTypes.object.isRequired,
	  onCancel: PropTypes.func.isRequired,
	  onChange: PropTypes.func.isRequired,
	  scrollableMonthYearDropdown: PropTypes.bool,
	  date: PropTypes.object.isRequired,
	  dateFormat: PropTypes.string.isRequired
	};

	var WrappedMonthYearDropdownOptions = onClickOutside(MonthYearDropdownOptions);

	var MonthYearDropdown = function (_React$Component) {
	  inherits(MonthYearDropdown, _React$Component);

	  function MonthYearDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck(this, MonthYearDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function () {
	      var currDate = getStartOfMonth(localizeDate(_this.props.minDate, _this.props.locale));
	      var lastDate = getStartOfMonth(localizeDate(_this.props.maxDate, _this.props.locale));

	      var options = [];

	      while (!isAfter(currDate, lastDate)) {
	        var timepoint = currDate.valueOf();
	        options.push(React.createElement(
	          "option",
	          { key: timepoint, value: timepoint },
	          formatDate(currDate, _this.props.dateFormat)
	        ));

	        addMonths(currDate, 1);
	      }

	      return options;
	    }, _this.onSelectChange = function (e) {
	      _this.onChange(e.target.value);
	    }, _this.renderSelectMode = function () {
	      return React.createElement(
	        "select",
	        {
	          value: getStartOfMonth(_this.props.date).valueOf(),
	          className: "react-datepicker__month-year-select",
	          onChange: _this.onSelectChange
	        },
	        _this.renderSelectOptions()
	      );
	    }, _this.renderReadView = function (visible) {
	      var yearMonth = formatDate(localizeDate(newDate(_this.props.date), _this.props.locale), _this.props.dateFormat);

	      return React.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__month-year-read-view",
	          onClick: function onClick(event) {
	            return _this.toggleDropdown(event);
	          }
	        },
	        React.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
	        React.createElement(
	          "span",
	          { className: "react-datepicker__month-year-read-view--selected-month-year" },
	          yearMonth
	        )
	      );
	    }, _this.renderDropdown = function () {
	      return React.createElement(WrappedMonthYearDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        date: _this.props.date,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown,
	        minDate: localizeDate(_this.props.minDate, _this.props.locale),
	        maxDate: localizeDate(_this.props.maxDate, _this.props.locale),
	        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
	      });
	    }, _this.renderScrollMode = function () {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown());
	      }
	      return result;
	    }, _this.onChange = function (monthYearPoint) {
	      _this.toggleDropdown();

	      var changedDate = newDate(parseInt(monthYearPoint));

	      if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) {
	        return;
	      }

	      _this.props.onChange(changedDate);
	    }, _this.toggleDropdown = function () {
	      return _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthYearDropdown.prototype.render = function render() {
	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode();
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode();
	        break;
	    }

	    return React.createElement(
	      "div",
	      {
	        className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return MonthYearDropdown;
	}(React.Component);

	MonthYearDropdown.propTypes = {
	  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
	  dateFormat: PropTypes.string.isRequired,
	  locale: PropTypes.string,
	  maxDate: PropTypes.object.isRequired,
	  minDate: PropTypes.object.isRequired,
	  date: PropTypes.object.isRequired,
	  onChange: PropTypes.func.isRequired,
	  scrollableMonthYearDropdown: PropTypes.bool
	};

	var Day = function (_React$Component) {
	  inherits(Day, _React$Component);

	  function Day() {
	    var _temp, _this, _ret;

	    classCallCheck(this, Day);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (!_this.isDisabled() && _this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.isDisabled() && _this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.isSameDay = function (other) {
	      return isSameDay(_this.props.day, other);
	    }, _this.isKeyboardSelected = function () {
	      return !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
	    }, _this.isDisabled = function () {
	      return isDayDisabled(_this.props.day, _this.props);
	    }, _this.getHighLightedClass = function (defaultClassName) {
	      var _this$props = _this.props,
	          day = _this$props.day,
	          highlightDates = _this$props.highlightDates;


	      if (!highlightDates) {
	        return false;
	      }

	      // Looking for className in the Map of {'day string, 'className'}
	      var dayStr = day.format("MM.DD.YYYY");
	      return highlightDates.get(dayStr);
	    }, _this.isInRange = function () {
	      var _this$props2 = _this.props,
	          day = _this$props2.day,
	          startDate = _this$props2.startDate,
	          endDate = _this$props2.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isDayInRange(day, startDate, endDate);
	    }, _this.isInSelectingRange = function () {
	      var _this$props3 = _this.props,
	          day = _this$props3.day,
	          selectsStart = _this$props3.selectsStart,
	          selectsEnd = _this$props3.selectsEnd,
	          selectingDate = _this$props3.selectingDate,
	          startDate = _this$props3.startDate,
	          endDate = _this$props3.endDate;


	      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
	        return false;
	      }

	      if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
	        return isDayInRange(day, selectingDate, endDate);
	      }

	      if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
	        return isDayInRange(day, startDate, selectingDate);
	      }

	      return false;
	    }, _this.isSelectingRangeStart = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props4 = _this.props,
	          day = _this$props4.day,
	          selectingDate = _this$props4.selectingDate,
	          startDate = _this$props4.startDate,
	          selectsStart = _this$props4.selectsStart;


	      if (selectsStart) {
	        return isSameDay(day, selectingDate);
	      } else {
	        return isSameDay(day, startDate);
	      }
	    }, _this.isSelectingRangeEnd = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props5 = _this.props,
	          day = _this$props5.day,
	          selectingDate = _this$props5.selectingDate,
	          endDate = _this$props5.endDate,
	          selectsEnd = _this$props5.selectsEnd;


	      if (selectsEnd) {
	        return isSameDay(day, selectingDate);
	      } else {
	        return isSameDay(day, endDate);
	      }
	    }, _this.isRangeStart = function () {
	      var _this$props6 = _this.props,
	          day = _this$props6.day,
	          startDate = _this$props6.startDate,
	          endDate = _this$props6.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isSameDay(startDate, day);
	    }, _this.isRangeEnd = function () {
	      var _this$props7 = _this.props,
	          day = _this$props7.day,
	          startDate = _this$props7.startDate,
	          endDate = _this$props7.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isSameDay(endDate, day);
	    }, _this.isWeekend = function () {
	      var weekday = getDay(_this.props.day);
	      return weekday === 0 || weekday === 6;
	    }, _this.isOutsideMonth = function () {
	      return _this.props.month !== undefined && _this.props.month !== getMonth(_this.props.day);
	    }, _this.getClassNames = function (date) {
	      var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
	      return classnames("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
	        "react-datepicker__day--disabled": _this.isDisabled(),
	        "react-datepicker__day--selected": _this.isSameDay(_this.props.selected),
	        "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
	        "react-datepicker__day--range-start": _this.isRangeStart(),
	        "react-datepicker__day--range-end": _this.isRangeEnd(),
	        "react-datepicker__day--in-range": _this.isInRange(),
	        "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
	        "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
	        "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
	        "react-datepicker__day--today": _this.isSameDay(now(_this.props.utcOffset)),
	        "react-datepicker__day--weekend": _this.isWeekend(),
	        "react-datepicker__day--outside-month": _this.isOutsideMonth()
	      }, _this.getHighLightedClass("react-datepicker__day--highlighted"));
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Day.prototype.render = function render() {
	    return React.createElement(
	      "div",
	      {
	        className: this.getClassNames(this.props.day),
	        onClick: this.handleClick,
	        onMouseEnter: this.handleMouseEnter,
	        "aria-label": "day-" + getDate(this.props.day),
	        role: "option"
	      },
	      getDate(this.props.day)
	    );
	  };

	  return Day;
	}(React.Component);

	Day.propTypes = {
	  day: PropTypes.object.isRequired,
	  dayClassName: PropTypes.func,
	  endDate: PropTypes.object,
	  highlightDates: PropTypes.instanceOf(Map),
	  inline: PropTypes.bool,
	  month: PropTypes.number,
	  onClick: PropTypes.func,
	  onMouseEnter: PropTypes.func,
	  preSelection: PropTypes.object,
	  selected: PropTypes.object,
	  selectingDate: PropTypes.object,
	  selectsEnd: PropTypes.bool,
	  selectsStart: PropTypes.bool,
	  startDate: PropTypes.object,
	  utcOffset: PropTypes.number
	};

	var WeekNumber = function (_React$Component) {
	  inherits(WeekNumber, _React$Component);

	  function WeekNumber() {
	    var _temp, _this, _ret;

	    classCallCheck(this, WeekNumber);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  WeekNumber.prototype.render = function render() {
	    var weekNumberClasses = {
	      "react-datepicker__week-number": true,
	      "react-datepicker__week-number--clickable": !!this.props.onClick
	    };
	    return React.createElement(
	      "div",
	      {
	        className: classnames(weekNumberClasses),
	        "aria-label": "week-" + this.props.weekNumber,
	        onClick: this.handleClick
	      },
	      this.props.weekNumber
	    );
	  };

	  return WeekNumber;
	}(React.Component);

	WeekNumber.propTypes = {
	  weekNumber: PropTypes.number.isRequired,
	  onClick: PropTypes.func
	};

	var Week = function (_React$Component) {
	  inherits(Week, _React$Component);

	  function Week() {
	    var _temp, _this, _ret;

	    classCallCheck(this, Week);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleWeekClick = function (day, weekNumber, event) {
	      if (typeof _this.props.onWeekSelect === "function") {
	        _this.props.onWeekSelect(day, weekNumber, event);
	      }
	    }, _this.formatWeekNumber = function (startOfWeek) {
	      if (_this.props.formatWeekNumber) {
	        return _this.props.formatWeekNumber(startOfWeek);
	      }
	      return getWeek(startOfWeek);
	    }, _this.renderDays = function () {
	      var startOfWeek = getStartOfWeek(cloneDate(_this.props.day));
	      var days = [];
	      var weekNumber = _this.formatWeekNumber(startOfWeek);
	      if (_this.props.showWeekNumber) {
	        var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
	        days.push(React.createElement(WeekNumber, { key: "W", weekNumber: weekNumber, onClick: onClickAction }));
	      }
	      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = addDays(cloneDate(startOfWeek), offset);
	        return React.createElement(Day, {
	          key: offset,
	          day: day,
	          month: _this.props.month,
	          onClick: _this.handleDayClick.bind(_this, day),
	          onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset
	        });
	      }));
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Week.prototype.render = function render() {
	    return React.createElement(
	      "div",
	      { className: "react-datepicker__week" },
	      this.renderDays()
	    );
	  };

	  return Week;
	}(React.Component);

	Week.propTypes = {
	  day: PropTypes.object.isRequired,
	  dayClassName: PropTypes.func,
	  endDate: PropTypes.object,
	  excludeDates: PropTypes.array,
	  filterDate: PropTypes.func,
	  formatWeekNumber: PropTypes.func,
	  highlightDates: PropTypes.instanceOf(Map),
	  includeDates: PropTypes.array,
	  inline: PropTypes.bool,
	  maxDate: PropTypes.object,
	  minDate: PropTypes.object,
	  month: PropTypes.number,
	  onDayClick: PropTypes.func,
	  onDayMouseEnter: PropTypes.func,
	  onWeekSelect: PropTypes.func,
	  preSelection: PropTypes.object,
	  selected: PropTypes.object,
	  selectingDate: PropTypes.object,
	  selectsEnd: PropTypes.bool,
	  selectsStart: PropTypes.bool,
	  showWeekNumber: PropTypes.bool,
	  startDate: PropTypes.object,
	  utcOffset: PropTypes.number
	};

	var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

	var Month = function (_React$Component) {
	  inherits(Month, _React$Component);

	  function Month() {
	    var _temp, _this, _ret;

	    classCallCheck(this, Month);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleMouseLeave = function () {
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave();
	      }
	    }, _this.isWeekInMonth = function (startOfWeek) {
	      var day = _this.props.day;
	      var endOfWeek = addDays(cloneDate(startOfWeek), 6);
	      return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
	    }, _this.renderWeeks = function () {
	      var weeks = [];
	      var isFixedHeight = _this.props.fixedHeight;
	      var currentWeekStart = getStartOfWeek(getStartOfMonth(cloneDate(_this.props.day)));
	      var i = 0;
	      var breakAfterNextPush = false;

	      while (true) {
	        weeks.push(React.createElement(Week, {
	          key: i,
	          day: currentWeekStart,
	          month: getMonth(_this.props.day),
	          onDayClick: _this.handleDayClick,
	          onDayMouseEnter: _this.handleDayMouseEnter,
	          onWeekSelect: _this.props.onWeekSelect,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          showWeekNumber: _this.props.showWeekNumbers,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset
	        }));

	        if (breakAfterNextPush) break;

	        i++;
	        currentWeekStart = addWeeks(cloneDate(currentWeekStart), 1);

	        // If one of these conditions is true, we will either break on this week
	        // or break on the next week
	        var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
	        var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

	        if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
	          if (_this.props.peekNextMonth) {
	            breakAfterNextPush = true;
	          } else {
	            break;
	          }
	        }
	      }

	      return weeks;
	    }, _this.getClassNames = function () {
	      var _this$props = _this.props,
	          selectingDate = _this$props.selectingDate,
	          selectsStart = _this$props.selectsStart,
	          selectsEnd = _this$props.selectsEnd;

	      return classnames("react-datepicker__month", {
	        "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Month.prototype.render = function render() {
	    return React.createElement(
	      "div",
	      {
	        className: this.getClassNames(),
	        onMouseLeave: this.handleMouseLeave,
	        role: "listbox"
	      },
	      this.renderWeeks()
	    );
	  };

	  return Month;
	}(React.Component);

	Month.propTypes = {
	  day: PropTypes.object.isRequired,
	  dayClassName: PropTypes.func,
	  endDate: PropTypes.object,
	  excludeDates: PropTypes.array,
	  filterDate: PropTypes.func,
	  fixedHeight: PropTypes.bool,
	  formatWeekNumber: PropTypes.func,
	  highlightDates: PropTypes.instanceOf(Map),
	  includeDates: PropTypes.array,
	  inline: PropTypes.bool,
	  maxDate: PropTypes.object,
	  minDate: PropTypes.object,
	  onDayClick: PropTypes.func,
	  onDayMouseEnter: PropTypes.func,
	  onMouseLeave: PropTypes.func,
	  onWeekSelect: PropTypes.func,
	  peekNextMonth: PropTypes.bool,
	  preSelection: PropTypes.object,
	  selected: PropTypes.object,
	  selectingDate: PropTypes.object,
	  selectsEnd: PropTypes.bool,
	  selectsStart: PropTypes.bool,
	  showWeekNumbers: PropTypes.bool,
	  startDate: PropTypes.object,
	  utcOffset: PropTypes.number
	};

	var Time = function (_React$Component) {
	  inherits(Time, _React$Component);

	  function Time() {
	    var _temp, _this, _ret;

	    classCallCheck(this, Time);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (time) {
	      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
	        return;
	      }

	      _this.props.onChange(time);
	    }, _this.liClasses = function (time, currH, currM) {
	      var classes = ["react-datepicker__time-list-item"];

	      if (currH === getHour(time) && currM === getMinute(time)) {
	        classes.push("react-datepicker__time-list-item--selected");
	      }
	      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
	        classes.push("react-datepicker__time-list-item--disabled");
	      }
	      if (_this.props.injectTimes && (getHour(time) * 60 + getMinute(time)) % _this.props.intervals !== 0) {
	        classes.push("react-datepicker__time-list-item--injected");
	      }

	      return classes.join(" ");
	    }, _this.renderTimes = function () {
	      var times = [];
	      var format = _this.props.format ? _this.props.format : "hh:mm A";
	      var intervals = _this.props.intervals;
	      var activeTime = _this.props.selected ? _this.props.selected : newDate();
	      var currH = getHour(activeTime);
	      var currM = getMinute(activeTime);
	      var base = getStartOfDay(newDate());
	      var multiplier = 1440 / intervals;
	      var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function (a, b) {
	        return a - b;
	      });
	      for (var i = 0; i < multiplier; i++) {
	        var currentTime = addMinutes(cloneDate(base), i * intervals);
	        times.push(currentTime);

	        if (sortedInjectTimes) {
	          var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
	          times = times.concat(timesToInject);
	        }
	      }

	      return times.map(function (time, i) {
	        return React.createElement(
	          "li",
	          {
	            key: i,
	            onClick: _this.handleClick.bind(_this, time),
	            className: _this.liClasses(time, currH, currM)
	          },
	          formatDate(time, format)
	        );
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Time.prototype.componentDidMount = function componentDidMount() {
	    // code to ensure selected time will always be in focus within time window when it first appears
	    var multiplier = 60 / this.props.intervals;
	    var currH = this.props.selected ? getHour(this.props.selected) : getHour(newDate());
	    this.list.scrollTop = 30 * (multiplier * currH);
	  };

	  Time.prototype.render = function render() {
	    var _this2 = this;

	    var height = null;
	    if (this.props.monthRef) {
	      height = this.props.monthRef.clientHeight - 39;
	    }

	    return React.createElement(
	      "div",
	      {
	        className: "react-datepicker__time-container " + (this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "")
	      },
	      React.createElement(
	        "div",
	        { className: "react-datepicker__header react-datepicker__header--time" },
	        React.createElement(
	          "div",
	          { className: "react-datepicker-time__header" },
	          this.props.timeCaption
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "react-datepicker__time" },
	        React.createElement(
	          "div",
	          { className: "react-datepicker__time-box" },
	          React.createElement(
	            "ul",
	            {
	              className: "react-datepicker__time-list",
	              ref: function ref(list) {
	                _this2.list = list;
	              },
	              style: height ? { height: height } : {}
	            },
	            this.renderTimes.bind(this)()
	          )
	        )
	      )
	    );
	  };

	  createClass(Time, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        intervals: 30,
	        onTimeChange: function onTimeChange() {},
	        todayButton: null,
	        timeCaption: "Time"
	      };
	    }
	  }]);
	  return Time;
	}(React.Component);

	Time.propTypes = {
	  format: PropTypes.string,
	  includeTimes: PropTypes.array,
	  intervals: PropTypes.number,
	  selected: PropTypes.object,
	  onChange: PropTypes.func,
	  todayButton: PropTypes.string,
	  minTime: PropTypes.object,
	  maxTime: PropTypes.object,
	  excludeTimes: PropTypes.array,
	  monthRef: PropTypes.object,
	  timeCaption: PropTypes.string,
	  injectTimes: PropTypes.array
	};

	var DROPDOWN_FOCUS_CLASSNAMES = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];

	var isDropdownSelect = function isDropdownSelect() {
	  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var classNames = (element.className || "").split(/\s+/);
	  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
	    return classNames.indexOf(testClassname) >= 0;
	  });
	};

	var Calendar = function (_React$Component) {
	  inherits(Calendar, _React$Component);
	  createClass(Calendar, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        onDropdownFocus: function onDropdownFocus() {},
	        monthsShown: 1,
	        forceShowMonthNavigation: false,
	        timeCaption: "Time"
	      };
	    }
	  }]);

	  function Calendar(props) {
	    classCallCheck(this, Calendar);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.handleClickOutside = function (event) {
	      _this.props.onClickOutside(event);
	    };

	    _this.handleDropdownFocus = function (event) {
	      if (isDropdownSelect(event.target)) {
	        _this.props.onDropdownFocus();
	      }
	    };

	    _this.getDateInView = function () {
	      var _this$props = _this.props,
	          preSelection = _this$props.preSelection,
	          selected = _this$props.selected,
	          openToDate = _this$props.openToDate,
	          utcOffset = _this$props.utcOffset;

	      var minDate = getEffectiveMinDate(_this.props);
	      var maxDate = getEffectiveMaxDate(_this.props);
	      var current = now(utcOffset);
	      var initialDate = openToDate || selected || preSelection;
	      if (initialDate) {
	        return initialDate;
	      } else {
	        if (minDate && isBefore(current, minDate)) {
	          return minDate;
	        } else if (maxDate && isAfter(current, maxDate)) {
	          return maxDate;
	        }
	      }
	      return current;
	    };

	    _this.localizeDate = function (date) {
	      return localizeDate(date, _this.props.locale);
	    };

	    _this.increaseMonth = function () {
	      _this.setState({
	        date: addMonths(cloneDate(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.decreaseMonth = function () {
	      _this.setState({
	        date: subtractMonths(cloneDate(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.handleDayClick = function (day, event) {
	      return _this.props.onSelect(day, event);
	    };

	    _this.handleDayMouseEnter = function (day) {
	      return _this.setState({ selectingDate: day });
	    };

	    _this.handleMonthMouseLeave = function () {
	      return _this.setState({ selectingDate: null });
	    };

	    _this.handleYearChange = function (date) {
	      if (_this.props.onYearChange) {
	        _this.props.onYearChange(date);
	      }
	    };

	    _this.handleMonthChange = function (date) {
	      if (_this.props.onMonthChange) {
	        _this.props.onMonthChange(date);
	      }
	      if (_this.props.adjustDateOnChange) {
	        if (_this.props.onSelect) {
	          _this.props.onSelect(date);
	        }
	        if (_this.props.setOpen) {
	          _this.props.setOpen(true);
	        }
	      }
	    };

	    _this.handleMonthYearChange = function (date) {
	      _this.handleYearChange(date);
	      _this.handleMonthChange(date);
	    };

	    _this.changeYear = function (year) {
	      _this.setState({
	        date: setYear(cloneDate(_this.state.date), year)
	      }, function () {
	        return _this.handleYearChange(_this.state.date);
	      });
	    };

	    _this.changeMonth = function (month) {
	      _this.setState({
	        date: setMonth(cloneDate(_this.state.date), month)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.changeMonthYear = function (monthYear) {
	      _this.setState({
	        date: setYear(setMonth(cloneDate(_this.state.date), getMonth(monthYear)), getYear(monthYear))
	      }, function () {
	        return _this.handleMonthYearChange(_this.state.date);
	      });
	    };

	    _this.header = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var startOfWeek = getStartOfWeek(cloneDate(date));
	      var dayNames = [];
	      if (_this.props.showWeekNumbers) {
	        dayNames.push(React.createElement(
	          "div",
	          { key: "W", className: "react-datepicker__day-name" },
	          _this.props.weekLabel || "#"
	        ));
	      }
	      return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = addDays(cloneDate(startOfWeek), offset);
	        var localeData = getLocaleData(day);
	        var weekDayName = _this.props.useWeekdaysShort ? getWeekdayShortInLocale(localeData, day) : getWeekdayMinInLocale(localeData, day);
	        return React.createElement(
	          "div",
	          { key: offset, className: "react-datepicker__day-name" },
	          weekDayName
	        );
	      }));
	    };

	    _this.renderPreviousMonthButton = function () {
	      var allPrevDaysDisabled = allDaysDisabledBefore(_this.state.date, "month", _this.props);

	      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
	        return;
	      }

	      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--previous"];

	      var clickHandler = _this.decreaseMonth;

	      if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
	        classes.push("react-datepicker__navigation--previous--disabled");
	        clickHandler = null;
	      }

	      return React.createElement("button", {
	        type: "button",
	        className: classes.join(" "),
	        onClick: clickHandler
	      });
	    };

	    _this.renderNextMonthButton = function () {
	      var allNextDaysDisabled = allDaysDisabledAfter(_this.state.date, "month", _this.props);

	      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
	        return;
	      }

	      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
	      if (_this.props.showTimeSelect) {
	        classes.push("react-datepicker__navigation--next--with-time");
	      }
	      if (_this.props.todayButton) {
	        classes.push("react-datepicker__navigation--next--with-today-button");
	      }

	      var clickHandler = _this.increaseMonth;

	      if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
	        classes.push("react-datepicker__navigation--next--disabled");
	        clickHandler = null;
	      }

	      return React.createElement("button", {
	        type: "button",
	        className: classes.join(" "),
	        onClick: clickHandler
	      });
	    };

	    _this.renderCurrentMonth = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var classes = ["react-datepicker__current-month"];

	      if (_this.props.showYearDropdown) {
	        classes.push("react-datepicker__current-month--hasYearDropdown");
	      }
	      if (_this.props.showMonthDropdown) {
	        classes.push("react-datepicker__current-month--hasMonthDropdown");
	      }
	      if (_this.props.showMonthYearDropdown) {
	        classes.push("react-datepicker__current-month--hasMonthYearDropdown");
	      }
	      return React.createElement(
	        "div",
	        { className: classes.join(" ") },
	        formatDate(date, _this.props.dateFormat)
	      );
	    };

	    _this.renderYearDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showYearDropdown || overrideHide) {
	        return;
	      }
	      return React.createElement(YearDropdown, {
	        adjustDateOnChange: _this.props.adjustDateOnChange,
	        date: _this.state.date,
	        onSelect: _this.props.onSelect,
	        setOpen: _this.props.setOpen,
	        dropdownMode: _this.props.dropdownMode,
	        onChange: _this.changeYear,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        year: getYear(_this.state.date),
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
	      });
	    };

	    _this.renderMonthDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showMonthDropdown || overrideHide) {
	        return;
	      }
	      return React.createElement(MonthDropdown, {
	        dropdownMode: _this.props.dropdownMode,
	        locale: _this.props.locale,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.changeMonth,
	        month: getMonth(_this.state.date),
	        useShortMonthInDropdown: _this.props.useShortMonthInDropdown
	      });
	    };

	    _this.renderMonthYearDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showMonthYearDropdown || overrideHide) {
	        return;
	      }
	      return React.createElement(MonthYearDropdown, {
	        dropdownMode: _this.props.dropdownMode,
	        locale: _this.props.locale,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.changeMonthYear,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        date: _this.state.date,
	        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
	      });
	    };

	    _this.renderTodayButton = function () {
	      if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
	        return;
	      }
	      return React.createElement(
	        "div",
	        {
	          className: "react-datepicker__today-button",
	          onClick: function onClick(e) {
	            return _this.props.onSelect(getStartOfDate(now(_this.props.utcOffset)), e);
	          }
	        },
	        _this.props.todayButton
	      );
	    };

	    _this.renderMonths = function () {
	      if (_this.props.showTimeSelectOnly) {
	        return;
	      }

	      var monthList = [];
	      for (var i = 0; i < _this.props.monthsShown; ++i) {
	        var monthDate = addMonths(cloneDate(_this.state.date), i);
	        var monthKey = "month-" + i;
	        monthList.push(React.createElement(
	          "div",
	          {
	            key: monthKey,
	            ref: function ref(div) {
	              _this.monthContainer = div;
	            },
	            className: "react-datepicker__month-container"
	          },
	          React.createElement(
	            "div",
	            { className: "react-datepicker__header" },
	            _this.renderCurrentMonth(monthDate),
	            React.createElement(
	              "div",
	              {
	                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--" + _this.props.dropdownMode,
	                onFocus: _this.handleDropdownFocus
	              },
	              _this.renderMonthDropdown(i !== 0),
	              _this.renderMonthYearDropdown(i !== 0),
	              _this.renderYearDropdown(i !== 0)
	            ),
	            React.createElement(
	              "div",
	              { className: "react-datepicker__day-names" },
	              _this.header(monthDate)
	            )
	          ),
	          React.createElement(Month, {
	            day: monthDate,
	            dayClassName: _this.props.dayClassName,
	            onDayClick: _this.handleDayClick,
	            onDayMouseEnter: _this.handleDayMouseEnter,
	            onMouseLeave: _this.handleMonthMouseLeave,
	            onWeekSelect: _this.props.onWeekSelect,
	            formatWeekNumber: _this.props.formatWeekNumber,
	            minDate: _this.props.minDate,
	            maxDate: _this.props.maxDate,
	            excludeDates: _this.props.excludeDates,
	            highlightDates: _this.props.highlightDates,
	            selectingDate: _this.state.selectingDate,
	            includeDates: _this.props.includeDates,
	            inline: _this.props.inline,
	            fixedHeight: _this.props.fixedHeight,
	            filterDate: _this.props.filterDate,
	            preSelection: _this.props.preSelection,
	            selected: _this.props.selected,
	            selectsStart: _this.props.selectsStart,
	            selectsEnd: _this.props.selectsEnd,
	            showWeekNumbers: _this.props.showWeekNumbers,
	            startDate: _this.props.startDate,
	            endDate: _this.props.endDate,
	            peekNextMonth: _this.props.peekNextMonth,
	            utcOffset: _this.props.utcOffset
	          })
	        ));
	      }
	      return monthList;
	    };

	    _this.renderTimeSection = function () {
	      if (_this.props.showTimeSelect) {
	        return React.createElement(Time, {
	          selected: _this.props.selected,
	          onChange: _this.props.onTimeChange,
	          format: _this.props.timeFormat,
	          includeTimes: _this.props.includeTimes,
	          intervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          timeCaption: _this.props.timeCaption,
	          todayButton: _this.props.todayButton,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          showMonthYearDropdown: _this.props.showMonthYearDropdown,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          monthRef: _this.state.monthContainer,
	          injectTimes: _this.props.injectTimes
	        });
	      }
	    };

	    _this.state = {
	      date: _this.localizeDate(_this.getDateInView()),
	      selectingDate: null,
	      monthContainer: _this.monthContainer
	    };
	    return _this;
	  }

	  Calendar.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    // monthContainer height is needed in time component
	    // to determine the height for the ul in the time component
	    // setState here so height is given after final component
	    // layout is rendered
	    if (this.props.showTimeSelect) {
	      this.assignMonthContainer = function () {
	        _this2.setState({ monthContainer: _this2.monthContainer });
	      }();
	    }
	  };

	  Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.preSelection && !isSameDay(nextProps.preSelection, this.props.preSelection)) {
	      this.setState({
	        date: this.localizeDate(nextProps.preSelection)
	      });
	    } else if (nextProps.openToDate && !isSameDay(nextProps.openToDate, this.props.openToDate)) {
	      this.setState({
	        date: this.localizeDate(nextProps.openToDate)
	      });
	    }
	  };

	  Calendar.prototype.render = function render() {
	    return React.createElement(
	      "div",
	      {
	        className: classnames("react-datepicker", this.props.className, {
	          "react-datepicker--time-only": this.props.showTimeSelectOnly
	        })
	      },
	      React.createElement("div", { className: "react-datepicker__triangle" }),
	      this.renderPreviousMonthButton(),
	      this.renderNextMonthButton(),
	      this.renderMonths(),
	      this.renderTodayButton(),
	      this.renderTimeSection(),
	      this.props.children
	    );
	  };

	  return Calendar;
	}(React.Component);

	Calendar.propTypes = {
	  adjustDateOnChange: PropTypes.bool,
	  className: PropTypes.string,
	  children: PropTypes.node,
	  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
	  dayClassName: PropTypes.func,
	  dropdownMode: PropTypes.oneOf(["scroll", "select"]),
	  endDate: PropTypes.object,
	  excludeDates: PropTypes.array,
	  filterDate: PropTypes.func,
	  fixedHeight: PropTypes.bool,
	  formatWeekNumber: PropTypes.func,
	  highlightDates: PropTypes.instanceOf(Map),
	  includeDates: PropTypes.array,
	  includeTimes: PropTypes.array,
	  injectTimes: PropTypes.array,
	  inline: PropTypes.bool,
	  locale: PropTypes.string,
	  maxDate: PropTypes.object,
	  minDate: PropTypes.object,
	  monthsShown: PropTypes.number,
	  onClickOutside: PropTypes.func.isRequired,
	  onMonthChange: PropTypes.func,
	  onYearChange: PropTypes.func,
	  forceShowMonthNavigation: PropTypes.bool,
	  onDropdownFocus: PropTypes.func,
	  onSelect: PropTypes.func.isRequired,
	  onWeekSelect: PropTypes.func,
	  showTimeSelect: PropTypes.bool,
	  showTimeSelectOnly: PropTypes.bool,
	  timeFormat: PropTypes.string,
	  timeIntervals: PropTypes.number,
	  onTimeChange: PropTypes.func,
	  minTime: PropTypes.object,
	  maxTime: PropTypes.object,
	  excludeTimes: PropTypes.array,
	  timeCaption: PropTypes.string,
	  openToDate: PropTypes.object,
	  peekNextMonth: PropTypes.bool,
	  scrollableYearDropdown: PropTypes.bool,
	  scrollableMonthYearDropdown: PropTypes.bool,
	  preSelection: PropTypes.object,
	  selected: PropTypes.object,
	  selectsEnd: PropTypes.bool,
	  selectsStart: PropTypes.bool,
	  showMonthDropdown: PropTypes.bool,
	  showMonthYearDropdown: PropTypes.bool,
	  showWeekNumbers: PropTypes.bool,
	  showYearDropdown: PropTypes.bool,
	  startDate: PropTypes.object,
	  todayButton: PropTypes.string,
	  useWeekdaysShort: PropTypes.bool,
	  withPortal: PropTypes.bool,
	  utcOffset: PropTypes.number,
	  weekLabel: PropTypes.string,
	  yearDropdownItemNumber: PropTypes.number,
	  setOpen: PropTypes.func,
	  useShortMonthInDropdown: PropTypes.bool,
	  showDisabledMonthNavigation: PropTypes.bool
	};

	var popperPlacementPositions = ["auto", "auto-left", "auto-right", "bottom", "bottom-end", "bottom-start", "left", "left-end", "left-start", "right", "right-end", "right-start", "top", "top-end", "top-start"];

	var PopperComponent = function (_React$Component) {
	  inherits(PopperComponent, _React$Component);

	  function PopperComponent() {
	    classCallCheck(this, PopperComponent);
	    return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  PopperComponent.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        hidePopper = _props.hidePopper,
	        popperComponent = _props.popperComponent,
	        popperModifiers = _props.popperModifiers,
	        popperPlacement = _props.popperPlacement,
	        targetComponent = _props.targetComponent;


	    var popper = void 0;

	    if (!hidePopper) {
	      var classes = classnames("react-datepicker-popper", className);
	      popper = React.createElement(
	        reactPopper.Popper,
	        {
	          className: classes,
	          modifiers: popperModifiers,
	          placement: popperPlacement
	        },
	        popperComponent
	      );
	    }

	    if (this.props.popperContainer) {
	      popper = React.createElement(this.props.popperContainer, {}, popper);
	    }

	    return React.createElement(
	      reactPopper.Manager,
	      null,
	      React.createElement(
	        reactPopper.Target,
	        { className: "react-datepicker-wrapper" },
	        targetComponent
	      ),
	      popper
	    );
	  };

	  createClass(PopperComponent, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        hidePopper: true,
	        popperModifiers: {
	          preventOverflow: {
	            enabled: true,
	            escapeWithReference: true,
	            boundariesElement: "viewport"
	          }
	        },
	        popperPlacement: "bottom-start"
	      };
	    }
	  }]);
	  return PopperComponent;
	}(React.Component);

	PopperComponent.propTypes = {
	  className: PropTypes.string,
	  hidePopper: PropTypes.bool,
	  popperComponent: PropTypes.element,
	  popperModifiers: PropTypes.object, // <datepicker/> props
	  popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <datepicker/> props
	  popperContainer: PropTypes.func,
	  targetComponent: PropTypes.element
	};

	var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
	var WrappedCalendar = onClickOutside(Calendar);

	// Compares dates year+month combinations
	function hasPreSelectionChanged(date1, date2) {
	  if (date1 && date2) {
	    return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
	  }

	  return date1 !== date2;
	}

	/**
	 * General datepicker component.
	 */

	var DatePicker = function (_React$Component) {
	  inherits(DatePicker, _React$Component);
	  createClass(DatePicker, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        allowSameDay: false,
	        dateFormat: "L",
	        dateFormatCalendar: "MMMM YYYY",
	        onChange: function onChange() {},

	        disabled: false,
	        disabledKeyboardNavigation: false,
	        dropdownMode: "scroll",
	        onFocus: function onFocus() {},
	        onBlur: function onBlur() {},
	        onKeyDown: function onKeyDown() {},
	        onSelect: function onSelect() {},
	        onClickOutside: function onClickOutside$$1() {},
	        onMonthChange: function onMonthChange() {},

	        preventOpenOnFocus: false,
	        onYearChange: function onYearChange() {},

	        monthsShown: 1,
	        withPortal: false,
	        shouldCloseOnSelect: true,
	        showTimeSelect: false,
	        timeIntervals: 30,
	        timeCaption: "Time"
	      };
	    }
	  }]);

	  function DatePicker(props) {
	    classCallCheck(this, DatePicker);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.getPreSelection = function () {
	      return _this.props.openToDate ? newDate(_this.props.openToDate) : _this.props.selectsEnd && _this.props.startDate ? newDate(_this.props.startDate) : _this.props.selectsStart && _this.props.endDate ? newDate(_this.props.endDate) : now(_this.props.utcOffset);
	    };

	    _this.calcInitialState = function () {
	      var defaultPreSelection = _this.getPreSelection();
	      var minDate = getEffectiveMinDate(_this.props);
	      var maxDate = getEffectiveMaxDate(_this.props);
	      var boundedPreSelection = minDate && isBefore(defaultPreSelection, minDate) ? minDate : maxDate && isAfter(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;
	      return {
	        open: _this.props.startOpen || false,
	        preventFocus: false,
	        preSelection: _this.props.selected ? newDate(_this.props.selected) : boundedPreSelection,
	        // transforming highlighted days (perhaps nested array)
	        // to flat Map for faster access in day.jsx
	        highlightDates: getHightLightDaysMap(_this.props.highlightDates),
	        focused: false
	      };
	    };

	    _this.clearPreventFocusTimeout = function () {
	      if (_this.preventFocusTimeout) {
	        clearTimeout(_this.preventFocusTimeout);
	      }
	    };

	    _this.setFocus = function () {
	      if (_this.input && _this.input.focus) {
	        _this.input.focus();
	      }
	    };

	    _this.setOpen = function (open) {
	      _this.setState({
	        open: open,
	        preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection
	      });
	    };

	    _this.handleFocus = function (event) {
	      if (!_this.state.preventFocus) {
	        _this.props.onFocus(event);
	        if (!_this.props.preventOpenOnFocus) {
	          _this.setOpen(true);
	        }
	      }
	      _this.setState({ focused: true });
	    };

	    _this.cancelFocusInput = function () {
	      clearTimeout(_this.inputFocusTimeout);
	      _this.inputFocusTimeout = null;
	    };

	    _this.deferFocusInput = function () {
	      _this.cancelFocusInput();
	      _this.inputFocusTimeout = setTimeout(function () {
	        return _this.setFocus();
	      }, 1);
	    };

	    _this.handleDropdownFocus = function () {
	      _this.cancelFocusInput();
	    };

	    _this.handleBlur = function (event) {
	      if (_this.state.open) {
	        _this.deferFocusInput();
	      } else {
	        _this.props.onBlur(event);
	      }
	      _this.setState({ focused: false });
	    };

	    _this.handleCalendarClickOutside = function (event) {
	      if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	      _this.props.onClickOutside(event);
	      if (_this.props.withPortal) {
	        event.preventDefault();
	      }
	    };

	    _this.handleChange = function () {
	      for (var _len = arguments.length, allArgs = Array(_len), _key = 0; _key < _len; _key++) {
	        allArgs[_key] = arguments[_key];
	      }

	      var event = allArgs[0];
	      if (_this.props.onChangeRaw) {
	        _this.props.onChangeRaw.apply(_this, allArgs);
	        if (typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
	          return;
	        }
	      }
	      _this.setState({ inputValue: event.target.value });
	      var date = parseDate(event.target.value, _this.props);
	      if (date || !event.target.value) {
	        _this.setSelected(date, event, true);
	      }
	    };

	    _this.handleSelect = function (date, event) {
	      // Preventing onFocus event to fix issue
	      // https://github.com/Hacker0x01/react-datepicker/issues/628
	      _this.setState({ preventFocus: true }, function () {
	        _this.preventFocusTimeout = setTimeout(function () {
	          return _this.setState({ preventFocus: false });
	        }, 50);
	        return _this.preventFocusTimeout;
	      });
	      _this.setSelected(date, event);
	      if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
	        _this.setPreSelection(date);
	      } else if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	    };

	    _this.setSelected = function (date, event, keepInput) {
	      var changedDate = date;

	      if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
	        return;
	      }

	      if (!isSameDay(_this.props.selected, changedDate) || _this.props.allowSameDay) {
	        if (changedDate !== null) {
	          if (_this.props.selected) {
	            var selected = _this.props.selected;
	            if (keepInput) selected = newDate(changedDate);
	            changedDate = setTime(newDate(changedDate), {
	              hour: getHour(selected),
	              minute: getMinute(selected),
	              second: getSecond(selected)
	            });
	          }
	          _this.setState({
	            preSelection: changedDate
	          });
	        }
	        _this.props.onChange(changedDate, event);
	      }

	      _this.props.onSelect(changedDate, event);

	      if (!keepInput) {
	        _this.setState({ inputValue: null });
	      }
	    };

	    _this.setPreSelection = function (date) {
	      var isDateRangePresent = typeof _this.props.minDate !== "undefined" && typeof _this.props.maxDate !== "undefined";
	      var isValidDateSelection = isDateRangePresent && date ? isDayInRange(date, _this.props.minDate, _this.props.maxDate) : true;
	      if (isValidDateSelection) {
	        _this.setState({
	          preSelection: date
	        });
	      }
	    };

	    _this.handleTimeChange = function (time) {
	      var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
	      var changedDate = setTime(cloneDate(selected), {
	        hour: getHour(time),
	        minute: getMinute(time)
	      });

	      _this.setState({
	        preSelection: changedDate
	      });

	      _this.props.onChange(changedDate);
	      _this.setOpen(false);
	      _this.setState({ inputValue: null });
	    };

	    _this.onInputClick = function () {
	      if (!_this.props.disabled) {
	        _this.setOpen(true);
	      }
	    };

	    _this.onInputKeyDown = function (event) {
	      _this.props.onKeyDown(event);
	      var eventKey = event.key;
	      if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
	        if (eventKey !== "Enter" && eventKey !== "Escape" && eventKey !== "Tab") {
	          _this.onInputClick();
	        }
	        return;
	      }
	      var copy = newDate(_this.state.preSelection);
	      if (eventKey === "Enter") {
	        event.preventDefault();
	        if (isMoment(_this.state.preSelection) || isDate(_this.state.preSelection)) {
	          _this.handleSelect(copy, event);
	          !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
	        } else {
	          _this.setOpen(false);
	        }
	      } else if (eventKey === "Escape") {
	        event.preventDefault();
	        _this.setOpen(false);
	      } else if (eventKey === "Tab") {
	        _this.setOpen(false);
	      } else if (!_this.props.disabledKeyboardNavigation) {
	        var newSelection = void 0;
	        switch (eventKey) {
	          case "ArrowLeft":
	            event.preventDefault();
	            newSelection = subtractDays(copy, 1);
	            break;
	          case "ArrowRight":
	            event.preventDefault();
	            newSelection = addDays(copy, 1);
	            break;
	          case "ArrowUp":
	            event.preventDefault();
	            newSelection = subtractWeeks(copy, 1);
	            break;
	          case "ArrowDown":
	            event.preventDefault();
	            newSelection = addWeeks(copy, 1);
	            break;
	          case "PageUp":
	            event.preventDefault();
	            newSelection = subtractMonths(copy, 1);
	            break;
	          case "PageDown":
	            event.preventDefault();
	            newSelection = addMonths(copy, 1);
	            break;
	          case "Home":
	            event.preventDefault();
	            newSelection = subtractYears(copy, 1);
	            break;
	          case "End":
	            event.preventDefault();
	            newSelection = addYears(copy, 1);
	            break;
	        }
	        if (_this.props.adjustDateOnChange) {
	          _this.setSelected(newSelection);
	        }
	        _this.setPreSelection(newSelection);
	      }
	    };

	    _this.onClearClick = function (event) {
	      if (event) {
	        if (event.preventDefault) {
	          event.preventDefault();
	        }
	      }
	      _this.props.onChange(null, event);
	      _this.setState({ inputValue: null });
	    };

	    _this.clear = function () {
	      _this.onClearClick();
	    };

	    _this.renderCalendar = function () {
	      if (!_this.props.inline && (!_this.state.open || _this.props.disabled)) {
	        return null;
	      }
	      return React.createElement(
	        WrappedCalendar,
	        {
	          ref: function ref(elem) {
	            _this.calendar = elem;
	          },
	          locale: _this.props.locale,
	          adjustDateOnChange: _this.props.adjustDateOnChange,
	          setOpen: _this.setOpen,
	          dateFormat: _this.props.dateFormatCalendar,
	          useWeekdaysShort: _this.props.useWeekdaysShort,
	          dropdownMode: _this.props.dropdownMode,
	          selected: _this.props.selected,
	          preSelection: _this.state.preSelection,
	          onSelect: _this.handleSelect,
	          onWeekSelect: _this.props.onWeekSelect,
	          openToDate: _this.props.openToDate,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          excludeDates: _this.props.excludeDates,
	          filterDate: _this.props.filterDate,
	          onClickOutside: _this.handleCalendarClickOutside,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          highlightDates: _this.state.highlightDates,
	          includeDates: _this.props.includeDates,
	          includeTimes: _this.props.includeTimes,
	          injectTimes: _this.props.injectTimes,
	          inline: _this.props.inline,
	          peekNextMonth: _this.props.peekNextMonth,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          useShortMonthInDropdown: _this.props.useShortMonthInDropdown,
	          showMonthYearDropdown: _this.props.showMonthYearDropdown,
	          showWeekNumbers: _this.props.showWeekNumbers,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
	          showDisabledMonthNavigation: _this.props.showDisabledMonthNavigation,
	          scrollableYearDropdown: _this.props.scrollableYearDropdown,
	          scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown,
	          todayButton: _this.props.todayButton,
	          weekLabel: _this.props.weekLabel,
	          utcOffset: _this.props.utcOffset,
	          outsideClickIgnoreClass: outsideClickIgnoreClass,
	          fixedHeight: _this.props.fixedHeight,
	          monthsShown: _this.props.monthsShown,
	          onDropdownFocus: _this.handleDropdownFocus,
	          onMonthChange: _this.props.onMonthChange,
	          onYearChange: _this.props.onYearChange,
	          dayClassName: _this.props.dayClassName,
	          showTimeSelect: _this.props.showTimeSelect,
	          showTimeSelectOnly: _this.props.showTimeSelectOnly,
	          onTimeChange: _this.handleTimeChange,
	          timeFormat: _this.props.timeFormat,
	          timeIntervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          timeCaption: _this.props.timeCaption,
	          className: _this.props.calendarClassName,
	          yearDropdownItemNumber: _this.props.yearDropdownItemNumber
	        },
	        _this.props.children
	      );
	    };

	    _this.renderDateInput = function () {
	      var _classnames, _React$cloneElement;

	      var className = classnames(_this.props.className, (_classnames = {}, _classnames[outsideClickIgnoreClass] = _this.state.open, _classnames));

	      var customInput = _this.props.customInput || React.createElement("input", { type: "text" });
	      var customInputRef = _this.props.customInputRef || "ref";
	      var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : safeDateFormat(_this.props.selected, _this.props);

	      return React.cloneElement(customInput, (_React$cloneElement = {}, _React$cloneElement[customInputRef] = function (input) {
	        _this.input = input;
	      }, _React$cloneElement.value = inputValue, _React$cloneElement.onBlur = _this.handleBlur, _React$cloneElement.onChange = _this.handleChange, _React$cloneElement.onClick = _this.onInputClick, _React$cloneElement.onFocus = _this.handleFocus, _React$cloneElement.onKeyDown = _this.onInputKeyDown, _React$cloneElement.id = _this.props.id, _React$cloneElement.name = _this.props.name, _React$cloneElement.autoFocus = _this.props.autoFocus, _React$cloneElement.placeholder = _this.props.placeholderText, _React$cloneElement.disabled = _this.props.disabled, _React$cloneElement.autoComplete = _this.props.autoComplete, _React$cloneElement.className = className, _React$cloneElement.title = _this.props.title, _React$cloneElement.readOnly = _this.props.readOnly, _React$cloneElement.required = _this.props.required, _React$cloneElement.tabIndex = _this.props.tabIndex, _React$cloneElement));
	    };

	    _this.renderClearButton = function () {
	      if (_this.props.isClearable && _this.props.selected != null) {
	        return React.createElement("button", {
	          className: "react-datepicker__close-icon",
	          onClick: _this.onClearClick,
	          title: _this.props.clearButtonTitle,
	          tabIndex: -1
	        });
	      } else {
	        return null;
	      }
	    };

	    _this.state = _this.calcInitialState();
	    return _this;
	  }

	  DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.inline && hasPreSelectionChanged(this.props.selected, nextProps.selected)) {
	      this.setPreSelection(nextProps.selected);
	    }
	    if (this.props.highlightDates !== nextProps.highlightDates) {
	      this.setState({
	        highlightDates: getHightLightDaysMap(nextProps.highlightDates)
	      });
	    }
	    if (!this.state.focused) this.setState({ inputValue: null });
	  };

	  DatePicker.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearPreventFocusTimeout();
	  };

	  DatePicker.prototype.render = function render() {
	    var calendar = this.renderCalendar();

	    if (this.props.inline && !this.props.withPortal) {
	      return calendar;
	    }

	    if (this.props.withPortal) {
	      return React.createElement(
	        "div",
	        null,
	        !this.props.inline ? React.createElement(
	          "div",
	          { className: "react-datepicker__input-container" },
	          this.renderDateInput(),
	          this.renderClearButton()
	        ) : null,
	        this.state.open || this.props.inline ? React.createElement(
	          "div",
	          { className: "react-datepicker__portal" },
	          calendar
	        ) : null
	      );
	    }

	    return React.createElement(PopperComponent, {
	      className: this.props.popperClassName,
	      hidePopper: !this.state.open || this.props.disabled,
	      popperModifiers: this.props.popperModifiers,
	      targetComponent: React.createElement(
	        "div",
	        { className: "react-datepicker__input-container" },
	        this.renderDateInput(),
	        this.renderClearButton()
	      ),
	      popperContainer: this.props.popperContainer,
	      popperComponent: calendar,
	      popperPlacement: this.props.popperPlacement
	    });
	  };

	  return DatePicker;
	}(React.Component);

	DatePicker.propTypes = {
	  adjustDateOnChange: PropTypes.bool,
	  allowSameDay: PropTypes.bool,
	  autoComplete: PropTypes.string,
	  autoFocus: PropTypes.bool,
	  calendarClassName: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  customInput: PropTypes.element,
	  customInputRef: PropTypes.string,
	  // eslint-disable-next-line react/no-unused-prop-types
	  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	  dateFormatCalendar: PropTypes.string,
	  dayClassName: PropTypes.func,
	  disabled: PropTypes.bool,
	  disabledKeyboardNavigation: PropTypes.bool,
	  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
	  endDate: PropTypes.object,
	  excludeDates: PropTypes.array,
	  filterDate: PropTypes.func,
	  fixedHeight: PropTypes.bool,
	  formatWeekNumber: PropTypes.func,
	  highlightDates: PropTypes.array,
	  id: PropTypes.string,
	  includeDates: PropTypes.array,
	  includeTimes: PropTypes.array,
	  injectTimes: PropTypes.array,
	  inline: PropTypes.bool,
	  isClearable: PropTypes.bool,
	  locale: PropTypes.string,
	  maxDate: PropTypes.object,
	  minDate: PropTypes.object,
	  monthsShown: PropTypes.number,
	  name: PropTypes.string,
	  onBlur: PropTypes.func,
	  onChange: PropTypes.func.isRequired,
	  onSelect: PropTypes.func,
	  onWeekSelect: PropTypes.func,
	  onClickOutside: PropTypes.func,
	  onChangeRaw: PropTypes.func,
	  onFocus: PropTypes.func,
	  onKeyDown: PropTypes.func,
	  onMonthChange: PropTypes.func,
	  onYearChange: PropTypes.func,
	  openToDate: PropTypes.object,
	  peekNextMonth: PropTypes.bool,
	  placeholderText: PropTypes.string,
	  popperContainer: PropTypes.func,
	  popperClassName: PropTypes.string, // <PopperComponent/> props
	  popperModifiers: PropTypes.object, // <PopperComponent/> props
	  popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <PopperComponent/> props
	  preventOpenOnFocus: PropTypes.bool,
	  readOnly: PropTypes.bool,
	  required: PropTypes.bool,
	  scrollableYearDropdown: PropTypes.bool,
	  scrollableMonthYearDropdown: PropTypes.bool,
	  selected: PropTypes.object,
	  selectsEnd: PropTypes.bool,
	  selectsStart: PropTypes.bool,
	  showMonthDropdown: PropTypes.bool,
	  showMonthYearDropdown: PropTypes.bool,
	  showWeekNumbers: PropTypes.bool,
	  showYearDropdown: PropTypes.bool,
	  forceShowMonthNavigation: PropTypes.bool,
	  showDisabledMonthNavigation: PropTypes.bool,
	  startDate: PropTypes.object,
	  startOpen: PropTypes.bool,
	  tabIndex: PropTypes.number,
	  timeCaption: PropTypes.string,
	  title: PropTypes.string,
	  todayButton: PropTypes.string,
	  useWeekdaysShort: PropTypes.bool,
	  utcOffset: PropTypes.number,
	  value: PropTypes.string,
	  weekLabel: PropTypes.string,
	  withPortal: PropTypes.bool,
	  yearDropdownItemNumber: PropTypes.number,
	  shouldCloseOnSelect: PropTypes.bool,
	  showTimeSelect: PropTypes.bool,
	  showTimeSelectOnly: PropTypes.bool,
	  timeFormat: PropTypes.string,
	  timeIntervals: PropTypes.number,
	  minTime: PropTypes.object,
	  maxTime: PropTypes.object,
	  excludeTimes: PropTypes.array,
	  useShortMonthInDropdown: PropTypes.bool,
	  clearButtonTitle: PropTypes.string
	};

	module.exports = DatePicker;


/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactSwipeable = __webpack_require__(786);

	var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

	var _lodash = __webpack_require__(691);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(690);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _propTypes = __webpack_require__(86);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var screenChangeEvents = ['fullscreenchange', 'MSFullscreenChange', 'mozfullscreenchange', 'webkitfullscreenchange'];

	var ImageGallery = function (_React$Component) {
	  _inherits(ImageGallery, _React$Component);

	  function ImageGallery(props) {
	    _classCallCheck(this, ImageGallery);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageGallery).call(this, props));

	    _this.slideToIndex = function (index, event) {
	      var _this$state = _this.state;
	      var currentIndex = _this$state.currentIndex;
	      var isTransitioning = _this$state.isTransitioning;


	      if (!isTransitioning) {
	        if (event) {
	          if (_this._intervalId) {
	            // user triggered event while ImageGallery is playing, reset interval
	            _this.pause(false);
	            _this.play(false);
	          }
	        }

	        var slideCount = _this.props.items.length - 1;
	        var nextIndex = index;

	        if (index < 0) {
	          nextIndex = slideCount;
	        } else if (index > slideCount) {
	          nextIndex = 0;
	        }

	        _this.setState({
	          previousIndex: currentIndex,
	          currentIndex: nextIndex,
	          isTransitioning: nextIndex !== currentIndex,
	          offsetPercentage: 0,
	          style: {
	            transition: 'all ' + _this.props.slideDuration + 'ms ease-out'
	          }
	        }, _this._onSliding);
	      }
	    };

	    _this._onSliding = function () {
	      var isTransitioning = _this.state.isTransitioning;

	      window.setTimeout(function () {
	        if (isTransitioning) {
	          _this.setState({ isTransitioning: !isTransitioning });
	        }
	      }, _this.props.slideDuration + 50);
	    };

	    _this._handleScreenChange = function () {
	      /*
	        handles screen change events that the browser triggers e.g. esc key
	      */
	      var fullScreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

	      if (_this.props.onScreenChange) {
	        _this.props.onScreenChange(fullScreenElement);
	      }

	      _this.setState({ isFullscreen: !!fullScreenElement });
	    };

	    _this._toggleFullScreen = function () {
	      if (_this.state.isFullscreen) {
	        _this.exitFullScreen();
	      } else {
	        _this.fullScreen();
	      }
	    };

	    _this._togglePlay = function () {
	      if (_this._intervalId) {
	        _this.pause();
	      } else {
	        _this.play();
	      }
	    };

	    _this._handleResize = function () {
	      // delay initial resize to get the accurate this._imageGallery height/width
	      _this._resizeTimer = window.setTimeout(function () {
	        if (_this._imageGallery) {
	          _this.setState({
	            galleryWidth: _this._imageGallery.offsetWidth
	          });
	        }

	        // adjust thumbnail container when thumbnail width or height is adjusted
	        _this._setThumbsTranslate(-_this._getThumbsTranslate(_this.state.currentIndex > 0 ? 1 : 0) * _this.state.currentIndex);

	        if (_this._imageGallerySlideWrapper) {
	          _this.setState({
	            gallerySlideWrapperHeight: _this._imageGallerySlideWrapper.offsetHeight
	          });
	        }

	        if (_this._thumbnailsWrapper) {
	          if (_this._isThumbnailHorizontal()) {
	            _this.setState({ thumbnailsWrapperHeight: _this._thumbnailsWrapper.offsetHeight });
	          } else {
	            _this.setState({ thumbnailsWrapperWidth: _this._thumbnailsWrapper.offsetWidth });
	          }
	        }
	      }, 50);
	    };

	    _this._handleKeyDown = function (event) {
	      var LEFT_ARROW = 37;
	      var RIGHT_ARROW = 39;
	      var ESC_KEY = 27;
	      var key = parseInt(event.keyCode || event.which || 0);

	      switch (key) {
	        case LEFT_ARROW:
	          if (_this._canSlideLeft() && !_this._intervalId) {
	            _this._slideLeft();
	          }
	          break;
	        case RIGHT_ARROW:
	          if (_this._canSlideRight() && !_this._intervalId) {
	            _this._slideRight();
	          }
	          break;
	        case ESC_KEY:
	          if (_this.state.isFullscreen && !_this.props.useBrowserFullscreen) {
	            _this.exitFullScreen();
	          }
	      }
	    };

	    _this._handleMouseLeaveThumbnails = function () {
	      if (_this._thumbnailTimer) {
	        window.clearTimeout(_this._thumbnailTimer);
	        _this._thumbnailTimer = null;
	        if (_this.props.autoPlay === true) {
	          _this.play(false);
	        }
	      }
	      _this.setState({ hovering: false });
	    };

	    _this._handleImageError = function (event) {
	      if (_this.props.defaultImage && event.target.src.indexOf(_this.props.defaultImage) === -1) {
	        event.target.src = _this.props.defaultImage;
	      }
	    };

	    _this._handleOnSwiped = function (e, deltaX, deltaY, isFlick) {
	      var _this$state2 = _this.state;
	      var scrollingUpDown = _this$state2.scrollingUpDown;
	      var scrollingLeftRight = _this$state2.scrollingLeftRight;

	      if (scrollingUpDown) {
	        // user stopped scrollingUpDown
	        _this.setState({ scrollingUpDown: false });
	      }

	      if (scrollingLeftRight) {
	        // user stopped scrollingLeftRight
	        _this.setState({ scrollingLeftRight: false });
	      }

	      if (!scrollingUpDown) {
	        // don't swipe if user is scrolling
	        var side = deltaX > 0 ? 1 : -1;
	        _this._handleOnSwipedTo(side, isFlick);
	      }
	    };

	    _this._handleSwiping = function (e, deltaX, deltaY, delta) {
	      var _this$state3 = _this.state;
	      var galleryWidth = _this$state3.galleryWidth;
	      var isTransitioning = _this$state3.isTransitioning;
	      var scrollingUpDown = _this$state3.scrollingUpDown;
	      var swipingTransitionDuration = _this.props.swipingTransitionDuration;

	      _this._setScrollDirection(deltaX, deltaY);
	      if (!isTransitioning && !scrollingUpDown) {
	        var side = deltaX < 0 ? 1 : -1;

	        var offsetPercentage = delta / galleryWidth * 100;
	        if (Math.abs(offsetPercentage) >= 100) {
	          offsetPercentage = 100;
	        }

	        var swipingTransition = {
	          transition: 'transform ' + swipingTransitionDuration + 'ms ease-out'
	        };

	        _this.setState({
	          offsetPercentage: side * offsetPercentage,
	          style: swipingTransition
	        });
	      } else {
	        // don't move the slide
	        _this.setState({ offsetPercentage: 0 });
	      }
	    };

	    _this._slideLeft = function (event) {
	      _this.slideToIndex(_this.state.currentIndex - 1, event);
	    };

	    _this._slideRight = function (event) {
	      _this.slideToIndex(_this.state.currentIndex + 1, event);
	    };

	    _this._renderItem = function (item) {
	      var onImageError = _this.props.onImageError || _this._handleImageError;

	      return _react2.default.createElement(
	        'div',
	        { className: 'image-gallery-image' },
	        item.imageSet ? _react2.default.createElement(
	          'picture',
	          {
	            onLoad: _this.props.onImageLoad,
	            onError: onImageError
	          },
	          item.imageSet.map(function (source, index) {
	            return _react2.default.createElement('source', {
	              key: index,
	              media: source.media,
	              srcSet: source.srcSet
	            });
	          }),
	          _react2.default.createElement('img', {
	            alt: item.originalAlt,
	            src: item.original
	          })
	        ) : _react2.default.createElement('img', {
	          src: item.original,
	          alt: item.originalAlt,
	          srcSet: item.srcSet,
	          sizes: item.sizes,
	          title: item.originalTitle,
	          onLoad: _this.props.onImageLoad,
	          onError: onImageError
	        }),
	        item.description && _react2.default.createElement(
	          'span',
	          { className: 'image-gallery-description' },
	          item.description
	        )
	      );
	    };

	    _this._renderThumbInner = function (item) {
	      var onThumbnailError = _this.props.onThumbnailError || _this._handleImageError;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', {
	          src: item.thumbnail,
	          alt: item.thumbnailAlt,
	          title: item.thumbnailTitle,
	          onError: onThumbnailError
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: 'image-gallery-thumbnail-label' },
	          item.thumbnailLabel
	        )
	      );
	    };

	    _this.state = {
	      currentIndex: props.startIndex,
	      thumbsTranslate: 0,
	      offsetPercentage: 0,
	      galleryWidth: 0,
	      thumbnailsWrapperWidth: 0,
	      thumbnailsWrapperHeight: 0,
	      isFullscreen: false,
	      isPlaying: false
	    };

	    if (props.lazyLoad) {
	      _this._lazyLoaded = [];
	    }
	    return _this;
	  }

	  _createClass(ImageGallery, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.disableArrowKeys !== nextProps.disableArrowKeys) {
	        if (nextProps.disableArrowKeys) {
	          window.removeEventListener('keydown', this._handleKeyDown);
	        } else {
	          window.addEventListener('keydown', this._handleKeyDown);
	        }
	      }

	      if (nextProps.lazyLoad && (!this.props.lazyLoad || this.props.items !== nextProps.items)) {
	        this._lazyLoaded = [];
	      }

	      if (this.state.currentIndex >= nextProps.items.length) {
	        this.slideToIndex(0);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevProps.thumbnailPosition !== this.props.thumbnailPosition || prevProps.showThumbnails !== this.props.showThumbnails || prevState.thumbnailsWrapperHeight !== this.state.thumbnailsWrapperHeight || prevState.thumbnailsWrapperWidth !== this.state.thumbnailsWrapperWidth) {
	        this._handleResize();
	      }

	      if (prevState.currentIndex !== this.state.currentIndex) {
	        if (this.props.onSlide) {
	          this.props.onSlide(this.state.currentIndex);
	        }

	        this._updateThumbnailTranslate(prevState);
	      }

	      if (prevProps.slideDuration !== this.props.slideDuration) {
	        this.slideToIndex = (0, _lodash2.default)(this._unthrottledSlideToIndex, this.props.slideDuration, { trailing: false });
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // Used to update the throttle if slideDuration changes
	      this._unthrottledSlideToIndex = this.slideToIndex;
	      this.slideToIndex = (0, _lodash2.default)(this._unthrottledSlideToIndex, this.props.slideDuration, { trailing: false });

	      this._handleResize = this._handleResize;
	      this._debounceResize = (0, _lodash4.default)(this._handleResize, 500);
	      this._handleScreenChange = this._handleScreenChange;
	      this._thumbnailDelay = 300;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._handleResize();

	      if (this.props.autoPlay) {
	        this.play();
	      }
	      if (!this.props.disableArrowKeys) {
	        window.addEventListener('keydown', this._handleKeyDown);
	      }
	      window.addEventListener('resize', this._debounceResize);
	      this._onScreenChangeEvent();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.props.disableArrowKeys) {
	        window.removeEventListener('keydown', this._handleKeyDown);
	      }

	      if (this._debounceResize) {
	        window.removeEventListener('resize', this._debounceResize);
	        this._debounceResize.cancel();
	      }

	      this._offScreenChangeEvent();

	      if (this._intervalId) {
	        window.clearInterval(this._intervalId);
	        this._intervalId = null;
	      }

	      if (this._resizeTimer) {
	        window.clearTimeout(this._resizeTimer);
	      }
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this2 = this;

	      var callback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!this._intervalId) {
	        var _props = this.props;
	        var slideInterval = _props.slideInterval;
	        var slideDuration = _props.slideDuration;

	        this.setState({ isPlaying: true });
	        this._intervalId = window.setInterval(function () {
	          if (!_this2.state.hovering) {
	            if (!_this2.props.infinite && !_this2._canSlideRight()) {
	              _this2.pause();
	            } else {
	              _this2.slideToIndex(_this2.state.currentIndex + 1);
	            }
	          }
	        }, Math.max(slideInterval, slideDuration));

	        if (this.props.onPlay && callback) {
	          this.props.onPlay(this.state.currentIndex);
	        }
	      }
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      var callback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (this._intervalId) {
	        window.clearInterval(this._intervalId);
	        this._intervalId = null;
	        this.setState({ isPlaying: false });

	        if (this.props.onPause && callback) {
	          this.props.onPause(this.state.currentIndex);
	        }
	      }
	    }
	  }, {
	    key: 'setModalFullscreen',
	    value: function setModalFullscreen(state) {
	      this.setState({ modalFullscreen: state });
	      // manually call because browser does not support screenchange events
	      if (this.props.onScreenChange) {
	        this.props.onScreenChange(state);
	      }
	    }
	  }, {
	    key: 'fullScreen',
	    value: function fullScreen() {
	      var gallery = this._imageGallery;

	      if (this.props.useBrowserFullscreen) {
	        if (gallery.requestFullscreen) {
	          gallery.requestFullscreen();
	        } else if (gallery.msRequestFullscreen) {
	          gallery.msRequestFullscreen();
	        } else if (gallery.mozRequestFullScreen) {
	          gallery.mozRequestFullScreen();
	        } else if (gallery.webkitRequestFullscreen) {
	          gallery.webkitRequestFullscreen();
	        } else {
	          // fallback to fullscreen modal for unsupported browsers
	          this.setModalFullscreen(true);
	        }
	      } else {
	        this.setModalFullscreen(true);
	      }

	      this.setState({ isFullscreen: true });
	    }
	  }, {
	    key: 'exitFullScreen',
	    value: function exitFullScreen() {
	      if (this.state.isFullscreen) {
	        if (this.props.useBrowserFullscreen) {
	          if (document.exitFullscreen) {
	            document.exitFullscreen();
	          } else if (document.webkitExitFullscreen) {
	            document.webkitExitFullscreen();
	          } else if (document.mozCancelFullScreen) {
	            document.mozCancelFullScreen();
	          } else if (document.msExitFullscreen) {
	            document.msExitFullscreen();
	          } else {
	            // fallback to fullscreen modal for unsupported browsers
	            this.setModalFullscreen(false);
	          }
	        } else {
	          this.setModalFullscreen(false);
	        }

	        this.setState({ isFullscreen: false });
	      }
	    }
	  }, {
	    key: 'getCurrentIndex',
	    value: function getCurrentIndex() {
	      return this.state.currentIndex;
	    }
	  }, {
	    key: '_onScreenChangeEvent',
	    value: function _onScreenChangeEvent() {
	      var _this3 = this;

	      screenChangeEvents.map(function (eventName) {
	        document.addEventListener(eventName, _this3._handleScreenChange);
	      });
	    }
	  }, {
	    key: '_offScreenChangeEvent',
	    value: function _offScreenChangeEvent() {
	      var _this4 = this;

	      screenChangeEvents.map(function (eventName) {
	        document.removeEventListener(eventName, _this4._handleScreenChange);
	      });
	    }
	  }, {
	    key: '_isThumbnailHorizontal',
	    value: function _isThumbnailHorizontal() {
	      var thumbnailPosition = this.props.thumbnailPosition;

	      return thumbnailPosition === 'left' || thumbnailPosition === 'right';
	    }
	  }, {
	    key: '_handleMouseOverThumbnails',
	    value: function _handleMouseOverThumbnails(index) {
	      var _this5 = this;

	      if (this.props.slideOnThumbnailHover) {
	        this.setState({ hovering: true });
	        if (this._thumbnailTimer) {
	          window.clearTimeout(this._thumbnailTimer);
	          this._thumbnailTimer = null;
	        }
	        this._thumbnailTimer = window.setTimeout(function () {
	          _this5.slideToIndex(index);
	        }, this._thumbnailDelay);
	      }
	    }
	  }, {
	    key: '_setScrollDirection',
	    value: function _setScrollDirection(deltaX, deltaY) {
	      var _state = this.state;
	      var scrollingUpDown = _state.scrollingUpDown;
	      var scrollingLeftRight = _state.scrollingLeftRight;

	      var x = Math.abs(deltaX);
	      var y = Math.abs(deltaY);

	      // If y > x the user is scrolling up and down
	      if (y > x && !scrollingUpDown && !scrollingLeftRight) {
	        this.setState({ scrollingUpDown: true });
	      } else if (!scrollingLeftRight && !scrollingUpDown) {
	        this.setState({ scrollingLeftRight: true });
	      }
	    }
	  }, {
	    key: '_handleOnSwipedTo',
	    value: function _handleOnSwipedTo(side, isFlick) {
	      var _state2 = this.state;
	      var currentIndex = _state2.currentIndex;
	      var isTransitioning = _state2.isTransitioning;

	      var slideTo = currentIndex;

	      if ((this._sufficientSwipeOffset() || isFlick) && !isTransitioning) {
	        slideTo += side;
	      }

	      if (side < 0) {
	        if (!this._canSlideLeft()) {
	          slideTo = currentIndex;
	        }
	      } else {
	        if (!this._canSlideRight()) {
	          slideTo = currentIndex;
	        }
	      }

	      this._unthrottledSlideToIndex(slideTo);
	    }
	  }, {
	    key: '_sufficientSwipeOffset',
	    value: function _sufficientSwipeOffset() {
	      return Math.abs(this.state.offsetPercentage) > this.props.swipeThreshold;
	    }
	  }, {
	    key: '_onSwipingNoOp',
	    value: function _onSwipingNoOp() {
	      /*
	      Do nothing, only defined so preventDefaultTouchmoveEvent works
	      */
	    }
	  }, {
	    key: '_canNavigate',
	    value: function _canNavigate() {
	      return this.props.items.length >= 2;
	    }
	  }, {
	    key: '_canSlideLeft',
	    value: function _canSlideLeft() {
	      return this.props.infinite || this.state.currentIndex > 0;
	    }
	  }, {
	    key: '_canSlideRight',
	    value: function _canSlideRight() {
	      return this.props.infinite || this.state.currentIndex < this.props.items.length - 1;
	    }
	  }, {
	    key: '_updateThumbnailTranslate',
	    value: function _updateThumbnailTranslate(prevState) {
	      if (this.state.currentIndex === 0) {
	        this._setThumbsTranslate(0);
	      } else {
	        var indexDifference = Math.abs(prevState.currentIndex - this.state.currentIndex);
	        var scroll = this._getThumbsTranslate(indexDifference);
	        if (scroll > 0) {
	          if (prevState.currentIndex < this.state.currentIndex) {
	            this._setThumbsTranslate(this.state.thumbsTranslate - scroll);
	          } else if (prevState.currentIndex > this.state.currentIndex) {
	            this._setThumbsTranslate(this.state.thumbsTranslate + scroll);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_setThumbsTranslate',
	    value: function _setThumbsTranslate(thumbsTranslate) {
	      this.setState({ thumbsTranslate: thumbsTranslate });
	    }
	  }, {
	    key: '_getThumbsTranslate',
	    value: function _getThumbsTranslate(indexDifference) {
	      if (this.props.disableThumbnailScroll) {
	        return 0;
	      }

	      var _state3 = this.state;
	      var thumbnailsWrapperWidth = _state3.thumbnailsWrapperWidth;
	      var thumbnailsWrapperHeight = _state3.thumbnailsWrapperHeight;

	      var totalScroll = void 0;

	      if (this._thumbnails) {

	        // total scroll required to see the last thumbnail
	        if (this._isThumbnailHorizontal()) {
	          if (this._thumbnails.scrollHeight <= thumbnailsWrapperHeight) {
	            return 0;
	          }
	          totalScroll = this._thumbnails.scrollHeight - thumbnailsWrapperHeight;
	        } else {
	          if (this._thumbnails.scrollWidth <= thumbnailsWrapperWidth || thumbnailsWrapperWidth <= 0) {
	            return 0;
	          }
	          totalScroll = this._thumbnails.scrollWidth - thumbnailsWrapperWidth;
	        }

	        var totalThumbnails = this._thumbnails.children.length;
	        // scroll-x required per index change
	        var perIndexScroll = totalScroll / (totalThumbnails - 1);

	        return indexDifference * perIndexScroll;
	      }
	    }
	  }, {
	    key: '_getAlignmentClassName',
	    value: function _getAlignmentClassName(index) {
	      // LEFT, and RIGHT alignments are necessary for lazyLoad
	      var currentIndex = this.state.currentIndex;

	      var alignment = '';
	      var LEFT = 'left';
	      var CENTER = 'center';
	      var RIGHT = 'right';

	      switch (index) {
	        case currentIndex - 1:
	          alignment = ' ' + LEFT;
	          break;
	        case currentIndex:
	          alignment = ' ' + CENTER;
	          break;
	        case currentIndex + 1:
	          alignment = ' ' + RIGHT;
	          break;
	      }

	      if (this.props.items.length >= 3 && this.props.infinite) {
	        if (index === 0 && currentIndex === this.props.items.length - 1) {
	          // set first slide as right slide if were sliding right from last slide
	          alignment = ' ' + RIGHT;
	        } else if (index === this.props.items.length - 1 && currentIndex === 0) {
	          // set last slide as left slide if were sliding left from first slide
	          alignment = ' ' + LEFT;
	        }
	      }

	      return alignment;
	    }
	  }, {
	    key: '_isGoingFromFirstToLast',
	    value: function _isGoingFromFirstToLast() {
	      var _state4 = this.state;
	      var currentIndex = _state4.currentIndex;
	      var previousIndex = _state4.previousIndex;

	      var totalSlides = this.props.items.length - 1;
	      return previousIndex === 0 && currentIndex === totalSlides;
	    }
	  }, {
	    key: '_isGoingFromLastToFirst',
	    value: function _isGoingFromLastToFirst() {
	      var _state5 = this.state;
	      var currentIndex = _state5.currentIndex;
	      var previousIndex = _state5.previousIndex;

	      var totalSlides = this.props.items.length - 1;
	      return previousIndex === totalSlides && currentIndex === 0;
	    }
	  }, {
	    key: '_getTranslateXForTwoSlide',
	    value: function _getTranslateXForTwoSlide(index) {
	      // For taking care of infinite swipe when there are only two slides
	      var _state6 = this.state;
	      var currentIndex = _state6.currentIndex;
	      var offsetPercentage = _state6.offsetPercentage;
	      var previousIndex = _state6.previousIndex;

	      var baseTranslateX = -100 * currentIndex;
	      var translateX = baseTranslateX + index * 100 + offsetPercentage;

	      // keep track of user swiping direction
	      if (offsetPercentage > 0) {
	        this.direction = 'left';
	      } else if (offsetPercentage < 0) {
	        this.direction = 'right';
	      }

	      // when swiping make sure the slides are on the correct side
	      if (currentIndex === 0 && index === 1 && offsetPercentage > 0) {
	        translateX = -100 + offsetPercentage;
	      } else if (currentIndex === 1 && index === 0 && offsetPercentage < 0) {
	        translateX = 100 + offsetPercentage;
	      }

	      if (currentIndex !== previousIndex) {
	        // when swiped move the slide to the correct side
	        if (previousIndex === 0 && index === 0 && offsetPercentage === 0 && this.direction === 'left') {
	          translateX = 100;
	        } else if (previousIndex === 1 && index === 1 && offsetPercentage === 0 && this.direction === 'right') {
	          translateX = -100;
	        }
	      } else {
	        // keep the slide on the correct slide even when not a swipe
	        if (currentIndex === 0 && index === 1 && offsetPercentage === 0 && this.direction === 'left') {
	          translateX = -100;
	        } else if (currentIndex === 1 && index === 0 && offsetPercentage === 0 && this.direction === 'right') {
	          translateX = 100;
	        }
	      }

	      return translateX;
	    }
	  }, {
	    key: '_getThumbnailBarHeight',
	    value: function _getThumbnailBarHeight() {
	      if (this._isThumbnailHorizontal()) {
	        return {
	          height: this.state.gallerySlideWrapperHeight
	        };
	      }
	      return {};
	    }
	  }, {
	    key: '_shouldPushSlideOnInfiniteMode',
	    value: function _shouldPushSlideOnInfiniteMode(index) {
	      /*
	        Push(show) slide if slide is the current slide, and the next slide
	        OR
	        The slide is going more than 1 slide left, or right, but not going from
	        first to last and not going from last to first
	         There is an edge case where if you go to the first or last slide, when they're
	        not left, or right of each other they will try to catch up in the background
	        so unless were going from first to last or vice versa we don't want the first
	        or last slide to show up during our transition
	      */
	      return !this._slideIsTransitioning(index) || this._ignoreIsTransitioning() && !this._isFirstOrLastSlide(index);
	    }
	  }, {
	    key: '_slideIsTransitioning',
	    value: function _slideIsTransitioning(index) {
	      /*
	      returns true if the gallery is transitioning and the index is not the
	      previous or currentIndex
	      */
	      var _state7 = this.state;
	      var isTransitioning = _state7.isTransitioning;
	      var previousIndex = _state7.previousIndex;
	      var currentIndex = _state7.currentIndex;

	      var indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex);
	      return isTransitioning && indexIsNotPreviousOrNextSlide;
	    }
	  }, {
	    key: '_isFirstOrLastSlide',
	    value: function _isFirstOrLastSlide(index) {
	      var totalSlides = this.props.items.length - 1;
	      var isLastSlide = index === totalSlides;
	      var isFirstSlide = index === 0;
	      return isLastSlide || isFirstSlide;
	    }
	  }, {
	    key: '_ignoreIsTransitioning',
	    value: function _ignoreIsTransitioning() {
	      /*
	        Ignore isTransitioning because were not going to sibling slides
	        e.g. center to left or center to right
	      */
	      var _state8 = this.state;
	      var previousIndex = _state8.previousIndex;
	      var currentIndex = _state8.currentIndex;

	      var totalSlides = this.props.items.length - 1;
	      // we want to show the in between slides transition
	      var slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1;
	      var notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides);
	      var notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0);

	      return slidingMoreThanOneSlideLeftOrRight && notGoingFromFirstToLast && notGoingFromLastToFirst;
	    }
	  }, {
	    key: '_getSlideStyle',
	    value: function _getSlideStyle(index) {
	      var _state9 = this.state;
	      var currentIndex = _state9.currentIndex;
	      var offsetPercentage = _state9.offsetPercentage;
	      var _props2 = this.props;
	      var infinite = _props2.infinite;
	      var items = _props2.items;
	      var useTranslate3D = _props2.useTranslate3D;

	      var baseTranslateX = -100 * currentIndex;
	      var totalSlides = items.length - 1;

	      // calculates where the other slides belong based on currentIndex
	      var translateX = baseTranslateX + index * 100 + offsetPercentage;

	      if (infinite && items.length > 2) {
	        if (currentIndex === 0 && index === totalSlides) {
	          // make the last slide the slide before the first
	          translateX = -100 + offsetPercentage;
	        } else if (currentIndex === totalSlides && index === 0) {
	          // make the first slide the slide after the last
	          translateX = 100 + offsetPercentage;
	        }
	      }

	      // Special case when there are only 2 items with infinite on
	      if (infinite && items.length === 2) {
	        translateX = this._getTranslateXForTwoSlide(index);
	      }

	      var translate = 'translate(' + translateX + '%, 0)';

	      if (useTranslate3D) {
	        translate = 'translate3d(' + translateX + '%, 0, 0)';
	      }

	      return {
	        WebkitTransform: translate,
	        MozTransform: translate,
	        msTransform: translate,
	        OTransform: translate,
	        transform: translate
	      };
	    }
	  }, {
	    key: '_getThumbnailStyle',
	    value: function _getThumbnailStyle() {
	      var translate = void 0;
	      var useTranslate3D = this.props.useTranslate3D;


	      if (this._isThumbnailHorizontal()) {
	        translate = 'translate(0, ' + this.state.thumbsTranslate + 'px)';
	        if (useTranslate3D) {
	          translate = 'translate3d(0, ' + this.state.thumbsTranslate + 'px, 0)';
	        }
	      } else {
	        translate = 'translate(' + this.state.thumbsTranslate + 'px, 0)';
	        if (useTranslate3D) {
	          translate = 'translate3d(' + this.state.thumbsTranslate + 'px, 0, 0)';
	        }
	      }
	      return {
	        WebkitTransform: translate,
	        MozTransform: translate,
	        msTransform: translate,
	        OTransform: translate,
	        transform: translate
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;

	      var _state10 = this.state;
	      var currentIndex = _state10.currentIndex;
	      var isFullscreen = _state10.isFullscreen;
	      var modalFullscreen = _state10.modalFullscreen;
	      var isPlaying = _state10.isPlaying;
	      var scrollingLeftRight = _state10.scrollingLeftRight;
	      var _props3 = this.props;
	      var infinite = _props3.infinite;
	      var preventDefaultTouchmoveEvent = _props3.preventDefaultTouchmoveEvent;


	      var thumbnailStyle = this._getThumbnailStyle();
	      var thumbnailPosition = this.props.thumbnailPosition;

	      var slideLeft = this._slideLeft;
	      var slideRight = this._slideRight;

	      var slides = [];
	      var thumbnails = [];
	      var bullets = [];

	      this.props.items.forEach(function (item, index) {
	        var alignment = _this6._getAlignmentClassName(index);
	        var originalClass = item.originalClass ? ' ' + item.originalClass : '';
	        var thumbnailClass = item.thumbnailClass ? ' ' + item.thumbnailClass : '';

	        var renderItem = item.renderItem || _this6.props.renderItem || _this6._renderItem;

	        var renderThumbInner = item.renderThumbInner || _this6.props.renderThumbInner || _this6._renderThumbInner;

	        var showItem = !_this6.props.lazyLoad || alignment || _this6._lazyLoaded[index];
	        if (showItem && _this6.props.lazyLoad) {
	          _this6._lazyLoaded[index] = true;
	        }

	        var slideStyle = _this6._getSlideStyle(index);

	        var slide = _react2.default.createElement(
	          'div',
	          {
	            key: index,
	            className: 'image-gallery-slide' + alignment + originalClass,
	            style: _extends(slideStyle, _this6.state.style),
	            onClick: _this6.props.onClick,
	            onTouchMove: _this6.props.onTouchMove,
	            onTouchEnd: _this6.props.onTouchEnd,
	            onTouchStart: _this6.props.onTouchStart,
	            onMouseOver: _this6.props.onMouseOver,
	            onMouseLeave: _this6.props.onMouseLeave,
	            role: _this6.props.onClick && 'button'
	          },
	          showItem ? renderItem(item) : _react2.default.createElement('div', { style: { height: '100%' } })
	        );

	        if (infinite) {
	          // don't add some slides while transitioning to avoid background transitions
	          if (_this6._shouldPushSlideOnInfiniteMode(index)) {
	            slides.push(slide);
	          }
	        } else {
	          slides.push(slide);
	        }

	        if (_this6.props.showThumbnails) {
	          thumbnails.push(_react2.default.createElement(
	            'a',
	            {
	              onMouseOver: _this6._handleMouseOverThumbnails.bind(_this6, index),
	              onMouseLeave: _this6._handleMouseLeaveThumbnails,
	              key: index,
	              role: 'button',
	              'aria-pressed': currentIndex === index ? 'true' : 'false',
	              'aria-label': 'Go to Slide ' + (index + 1),
	              className: 'image-gallery-thumbnail' + (currentIndex === index ? ' active' : '') + thumbnailClass,
	              onClick: function onClick(event) {
	                _this6.slideToIndex.call(_this6, index, event);
	                if (_this6.props.onThumbnailClick) {
	                  _this6.props.onThumbnailClick(event, index);
	                }
	              }
	            },
	            renderThumbInner(item)
	          ));
	        }

	        if (_this6.props.showBullets) {
	          var bulletOnClick = function bulletOnClick(event) {
	            if (item.bulletOnClick) {
	              item.bulletOnClick({ item: item, itemIndex: index, currentIndex: currentIndex });
	            }
	            return _this6.slideToIndex.call(_this6, index, event);
	          };
	          bullets.push(_react2.default.createElement('button', {
	            key: index,
	            type: 'button',
	            className: ['image-gallery-bullet', currentIndex === index ? 'active' : '', item.bulletClass || ''].join(' '),
	            onClick: bulletOnClick,
	            'aria-pressed': currentIndex === index ? 'true' : 'false',
	            'aria-label': 'Go to Slide ' + (index + 1)
	          }));
	        }
	      });

	      var slideWrapper = _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(i) {
	            return _this6._imageGallerySlideWrapper = i;
	          },
	          className: 'image-gallery-slide-wrapper ' + thumbnailPosition
	        },
	        this.props.renderCustomControls && this.props.renderCustomControls(),
	        this.props.showFullscreenButton && this.props.renderFullscreenButton(this._toggleFullScreen, isFullscreen),
	        this.props.showPlayButton && this.props.renderPlayPauseButton(this._togglePlay, isPlaying),
	        this._canNavigate() ? [this.props.showNav && _react2.default.createElement(
	          'span',
	          { key: 'navigation' },
	          this.props.renderLeftNav(slideLeft, !this._canSlideLeft()),
	          this.props.renderRightNav(slideRight, !this._canSlideRight())
	        ), this.props.disableSwipe ? _react2.default.createElement(
	          'div',
	          { className: 'image-gallery-slides', key: 'slides' },
	          slides
	        ) : _react2.default.createElement(
	          _reactSwipeable2.default,
	          {
	            className: 'image-gallery-swipe',
	            key: 'swipeable',
	            delta: 0,
	            flickThreshold: this.props.flickThreshold,
	            onSwiping: this._handleSwiping,
	            onSwipingLeft: this._onSwipingNoOp,
	            onSwipingRight: this._onSwipingNoOp,
	            onSwipingUp: this._onSwipingNoOp,
	            onSwipingDown: this._onSwipingNoOp,
	            onSwiped: this._handleOnSwiped,
	            stopPropagation: this.props.stopPropagation,
	            preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent || scrollingLeftRight
	          },
	          _react2.default.createElement(
	            'div',
	            { className: 'image-gallery-slides' },
	            slides
	          )
	        )] : _react2.default.createElement(
	          'div',
	          { className: 'image-gallery-slides' },
	          slides
	        ),
	        this.props.showBullets && _react2.default.createElement(
	          'div',
	          { className: 'image-gallery-bullets' },
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'image-gallery-bullets-container',
	              role: 'navigation',
	              'aria-label': 'Bullet Navigation'
	            },
	            bullets
	          )
	        ),
	        this.props.showIndex && _react2.default.createElement(
	          'div',
	          { className: 'image-gallery-index' },
	          _react2.default.createElement(
	            'span',
	            { className: 'image-gallery-index-current' },
	            this.state.currentIndex + 1
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'image-gallery-index-separator' },
	            this.props.indexSeparator
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'image-gallery-index-total' },
	            this.props.items.length
	          )
	        )
	      );

	      var classNames = ['image-gallery', this.props.additionalClass, modalFullscreen ? 'fullscreen-modal' : ''].filter(function (name) {
	        return typeof name === 'string';
	      }).join(' ');

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(i) {
	            return _this6._imageGallery = i;
	          },
	          className: classNames,
	          'aria-live': 'polite'
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'image-gallery-content' + (isFullscreen ? ' fullscreen' : '')
	          },
	          (thumbnailPosition === 'bottom' || thumbnailPosition === 'right') && slideWrapper,
	          this.props.showThumbnails && _react2.default.createElement(
	            'div',
	            {
	              className: 'image-gallery-thumbnails-wrapper ' + thumbnailPosition,
	              style: this._getThumbnailBarHeight()
	            },
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'image-gallery-thumbnails',
	                ref: function ref(i) {
	                  return _this6._thumbnailsWrapper = i;
	                }
	              },
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: function ref(t) {
	                    return _this6._thumbnails = t;
	                  },
	                  className: 'image-gallery-thumbnails-container',
	                  style: thumbnailStyle,
	                  'aria-label': 'Thumbnail Navigation'
	                },
	                thumbnails
	              )
	            )
	          ),
	          (thumbnailPosition === 'top' || thumbnailPosition === 'left') && slideWrapper
	        )
	      );
	    }
	  }]);

	  return ImageGallery;
	}(_react2.default.Component);

	ImageGallery.propTypes = {
	  flickThreshold: _propTypes2.default.number,
	  items: _propTypes2.default.array.isRequired,
	  showNav: _propTypes2.default.bool,
	  autoPlay: _propTypes2.default.bool,
	  lazyLoad: _propTypes2.default.bool,
	  infinite: _propTypes2.default.bool,
	  showIndex: _propTypes2.default.bool,
	  showBullets: _propTypes2.default.bool,
	  showThumbnails: _propTypes2.default.bool,
	  showPlayButton: _propTypes2.default.bool,
	  showFullscreenButton: _propTypes2.default.bool,
	  slideOnThumbnailHover: _propTypes2.default.bool,
	  disableThumbnailScroll: _propTypes2.default.bool,
	  disableArrowKeys: _propTypes2.default.bool,
	  disableSwipe: _propTypes2.default.bool,
	  useBrowserFullscreen: _propTypes2.default.bool,
	  preventDefaultTouchmoveEvent: _propTypes2.default.bool,
	  defaultImage: _propTypes2.default.string,
	  indexSeparator: _propTypes2.default.string,
	  thumbnailPosition: _propTypes2.default.string,
	  startIndex: _propTypes2.default.number,
	  slideDuration: _propTypes2.default.number,
	  slideInterval: _propTypes2.default.number,
	  swipeThreshold: _propTypes2.default.number,
	  swipingTransitionDuration: _propTypes2.default.number,
	  onSlide: _propTypes2.default.func,
	  onScreenChange: _propTypes2.default.func,
	  onPause: _propTypes2.default.func,
	  onPlay: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onImageLoad: _propTypes2.default.func,
	  onImageError: _propTypes2.default.func,
	  onTouchMove: _propTypes2.default.func,
	  onTouchEnd: _propTypes2.default.func,
	  onTouchStart: _propTypes2.default.func,
	  onMouseOver: _propTypes2.default.func,
	  onMouseLeave: _propTypes2.default.func,
	  onThumbnailError: _propTypes2.default.func,
	  onThumbnailClick: _propTypes2.default.func,
	  renderCustomControls: _propTypes2.default.func,
	  renderLeftNav: _propTypes2.default.func,
	  renderRightNav: _propTypes2.default.func,
	  renderPlayPauseButton: _propTypes2.default.func,
	  renderFullscreenButton: _propTypes2.default.func,
	  renderItem: _propTypes2.default.func,
	  stopPropagation: _propTypes2.default.bool,
	  additionalClass: _propTypes2.default.string,
	  useTranslate3D: _propTypes2.default.bool
	};
	ImageGallery.defaultProps = {
	  items: [],
	  showNav: true,
	  autoPlay: false,
	  lazyLoad: false,
	  infinite: true,
	  showIndex: false,
	  showBullets: false,
	  showThumbnails: true,
	  showPlayButton: true,
	  showFullscreenButton: true,
	  slideOnThumbnailHover: false,
	  disableThumbnailScroll: false,
	  disableArrowKeys: false,
	  disableSwipe: false,
	  useTranslate3D: true,
	  useBrowserFullscreen: true,
	  preventDefaultTouchmoveEvent: false,
	  flickThreshold: 0.4,
	  stopPropagation: false,
	  indexSeparator: ' / ',
	  thumbnailPosition: 'bottom',
	  startIndex: 0,
	  slideDuration: 450,
	  swipingTransitionDuration: 0,
	  slideInterval: 3000,
	  swipeThreshold: 30,
	  renderLeftNav: function renderLeftNav(onClick, disabled) {
	    return _react2.default.createElement('button', {
	      type: 'button',
	      className: 'image-gallery-left-nav',
	      disabled: disabled,
	      onClick: onClick,
	      'aria-label': 'Previous Slide'
	    });
	  },
	  renderRightNav: function renderRightNav(onClick, disabled) {
	    return _react2.default.createElement('button', {
	      type: 'button',
	      className: 'image-gallery-right-nav',
	      disabled: disabled,
	      onClick: onClick,
	      'aria-label': 'Next Slide'
	    });
	  },
	  renderPlayPauseButton: function renderPlayPauseButton(onClick, isPlaying) {
	    return _react2.default.createElement('button', {
	      type: 'button',
	      className: 'image-gallery-play-button' + (isPlaying ? ' active' : ''),
	      onClick: onClick,
	      'aria-label': 'Play or Pause Slideshow'
	    });
	  },
	  renderFullscreenButton: function renderFullscreenButton(onClick, isFullscreen) {
	    return _react2.default.createElement('button', {
	      type: 'button',
	      className: 'image-gallery-fullscreen-button' + (isFullscreen ? ' active' : ''),
	      onClick: onClick,
	      'aria-label': 'Open Fullscreen'
	    });
	  }
	};
	exports.default = ImageGallery;

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var react = __webpack_require__(5);
	var reactDom = __webpack_require__(375);

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	/**
	 * Check whether some DOM node is our Component's node.
	 */
	function isNodeFound(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // SVG <use/> elements do not technically reside in the rendered DOM, so
	  // they do not have classList directly, but they offer a link to their
	  // corresponding element, which can have classList. This extra check is for
	  // that case.
	  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


	  if (current.correspondingElement) {
	    return current.correspondingElement.classList.contains(ignoreClass);
	  }

	  return current.classList.contains(ignoreClass);
	}
	/**
	 * Try to find our node in a hierarchy of nodes, returning the document
	 * node as highest node if our node is not found in the path up.
	 */

	function findHighest(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // If source=local then this event came from 'somewhere'
	  // inside and should be ignored. We could handle this with
	  // a layered approach, too, but that requires going back to
	  // thinking in terms of Dom node nesting, running counter
	  // to React's 'you shouldn't care about the DOM' philosophy.


	  while (current.parentNode) {
	    if (isNodeFound(current, componentNode, ignoreClass)) {
	      return true;
	    }

	    current = current.parentNode;
	  }

	  return current;
	}
	/**
	 * Check if the browser scrollbar was clicked
	 */

	function clickedScrollbar(evt) {
	  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
	}

	// ideally will get replaced with external dep
	// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
	var testPassiveEventSupport = function testPassiveEventSupport() {
	  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
	    return;
	  }

	  var passive = false;
	  var options = Object.defineProperty({}, 'passive', {
	    get: function get() {
	      passive = true;
	    }
	  });

	  var noop = function noop() {};

	  window.addEventListener('testPassiveEventSupport', noop, options);
	  window.removeEventListener('testPassiveEventSupport', noop, options);
	  return passive;
	};

	function autoInc(seed) {
	  if (seed === void 0) {
	    seed = 0;
	  }

	  return function () {
	    return ++seed;
	  };
	}

	var uid = autoInc();

	var passiveEventSupport;
	var handlersMap = {};
	var enabledInstances = {};
	var touchEvents = ['touchstart', 'touchmove'];
	var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
	/**
	 * Options for addEventHandler and removeEventHandler
	 */

	function getEventHandlerOptions(instance, eventName) {
	  var handlerOptions = null;
	  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

	  if (isTouchEvent && passiveEventSupport) {
	    handlerOptions = {
	      passive: !instance.props.preventDefault
	    };
	  }

	  return handlerOptions;
	}
	/**
	 * This function generates the HOC function that you'll use
	 * in order to impart onOutsideClick listening to an
	 * arbitrary component. It gets called at the end of the
	 * bootstrapping code to yield an instance of the
	 * onClickOutsideHOC function defined inside setupHOC().
	 */


	function onClickOutsideHOC(WrappedComponent, config) {
	  var _class, _temp;

	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inheritsLoose(onClickOutside, _Component);

	    function onClickOutside(props) {
	      var _this;

	      _this = _Component.call(this, props) || this;

	      _this.__outsideClickHandler = function (event) {
	        if (typeof _this.__clickOutsideHandlerProp === 'function') {
	          _this.__clickOutsideHandlerProp(event);

	          return;
	        }

	        var instance = _this.getInstance();

	        if (typeof instance.props.handleClickOutside === 'function') {
	          instance.props.handleClickOutside(event);
	          return;
	        }

	        if (typeof instance.handleClickOutside === 'function') {
	          instance.handleClickOutside(event);
	          return;
	        }

	        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
	      };

	      _this.enableOnClickOutside = function () {
	        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
	          return;
	        }

	        if (typeof passiveEventSupport === 'undefined') {
	          passiveEventSupport = testPassiveEventSupport();
	        }

	        enabledInstances[_this._uid] = true;
	        var events = _this.props.eventTypes;

	        if (!events.forEach) {
	          events = [events];
	        }

	        handlersMap[_this._uid] = function (event) {
	          if (_this.props.disableOnClickOutside) return;
	          if (_this.componentNode === null) return;

	          if (_this.props.preventDefault) {
	            event.preventDefault();
	          }

	          if (_this.props.stopPropagation) {
	            event.stopPropagation();
	          }

	          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
	          var current = event.target;

	          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
	            return;
	          }

	          _this.__outsideClickHandler(event);
	        };

	        events.forEach(function (eventName) {
	          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
	        });
	      };

	      _this.disableOnClickOutside = function () {
	        delete enabledInstances[_this._uid];
	        var fn = handlersMap[_this._uid];

	        if (fn && typeof document !== 'undefined') {
	          var events = _this.props.eventTypes;

	          if (!events.forEach) {
	            events = [events];
	          }

	          events.forEach(function (eventName) {
	            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
	          });
	          delete handlersMap[_this._uid];
	        }
	      };

	      _this.getRef = function (ref) {
	        return _this.instanceRef = ref;
	      };

	      _this._uid = uid();
	      return _this;
	    }
	    /**
	     * Access the WrappedComponent's instance.
	     */


	    var _proto = onClickOutside.prototype;

	    _proto.getInstance = function getInstance() {
	      if (!WrappedComponent.prototype.isReactComponent) {
	        return this;
	      }

	      var ref = this.instanceRef;
	      return ref.getInstance ? ref.getInstance() : ref;
	    };

	    /**
	     * Add click listeners to the current document,
	     * linked to this component's state.
	     */
	    _proto.componentDidMount = function componentDidMount() {
	      // If we are in an environment without a DOM such
	      // as shallow rendering or snapshots then we exit
	      // early to prevent any unhandled errors being thrown.
	      if (typeof document === 'undefined' || !document.createElement) {
	        return;
	      }

	      var instance = this.getInstance();

	      if (config && typeof config.handleClickOutside === 'function') {
	        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

	        if (typeof this.__clickOutsideHandlerProp !== 'function') {
	          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
	        }
	      }

	      this.componentNode = reactDom.findDOMNode(this.getInstance());
	      this.enableOnClickOutside();
	    };

	    _proto.componentDidUpdate = function componentDidUpdate() {
	      this.componentNode = reactDom.findDOMNode(this.getInstance());
	    };
	    /**
	     * Remove all document's event listeners for this component
	     */


	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.disableOnClickOutside();
	    };
	    /**
	     * Can be called to explicitly enable event listening
	     * for clicks and touches outside of this element.
	     */


	    /**
	     * Pass-through render
	     */
	    _proto.render = function render() {
	      // eslint-disable-next-line no-unused-vars
	      var _props = this.props,
	          excludeScrollbar = _props.excludeScrollbar,
	          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

	      if (WrappedComponent.prototype.isReactComponent) {
	        props.ref = this.getRef;
	      } else {
	        props.wrappedRef = this.getRef;
	      }

	      props.disableOnClickOutside = this.disableOnClickOutside;
	      props.enableOnClickOutside = this.enableOnClickOutside;
	      return react.createElement(WrappedComponent, props);
	    };

	    return onClickOutside;
	  }(react.Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
	    eventTypes: ['mousedown', 'touchstart'],
	    excludeScrollbar: config && config.excludeScrollbar || false,
	    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
	    preventDefault: false,
	    stopPropagation: false
	  }, _class.getClass = function () {
	    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
	  }, _temp;
	}

	exports.IGNORE_CLASS_NAME = IGNORE_CLASS_NAME;
	exports['default'] = onClickOutsideHOC;


/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var react = __webpack_require__(5);
	var PropTypes = _interopDefault(__webpack_require__(86));
	var PopperJS = _interopDefault(__webpack_require__(752));

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var Manager = function (_Component) {
	  inherits(Manager, _Component);

	  function Manager() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, Manager);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
	      _this._targetNode = node;
	    }, _this._getTargetNode = function () {
	      return _this._targetNode;
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(Manager, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this._setTargetNode,
	          getTargetNode: this._getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          children = _props.children,
	          restProps = objectWithoutProperties(_props, ['tag', 'children']);

	      if (tag !== false) {
	        return react.createElement(tag, restProps, children);
	      } else {
	        return children;
	      }
	    }
	  }]);
	  return Manager;
	}(react.Component);

	Manager.childContextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	Manager.defaultProps = {
	  tag: 'div'
	};
	Manager.propTypes = process.env.NODE_ENV !== "production" ? {
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	} : {};

	var Target = function Target(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'div' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popperManager = context.popperManager;

	  var targetRef = function targetRef(node) {
	    popperManager.setTargetNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };

	  if (typeof children === 'function') {
	    var targetProps = { ref: targetRef };
	    return children({ targetProps: targetProps, restProps: restProps });
	  }

	  var componentProps = _extends({}, restProps);

	  if (typeof component === 'string') {
	    componentProps.ref = targetRef;
	  } else {
	    componentProps.innerRef = targetRef;
	  }

	  return react.createElement(component, componentProps, children);
	};

	Target.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};

	Target.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};

	var placements = PopperJS.placements;

	var Popper = function (_Component) {
	  inherits(Popper, _Component);

	  function Popper() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, Popper);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
	      _this._arrowNode = node;
	    }, _this._getTargetNode = function () {
	      if (_this.props.target) {
	        return _this.props.target;
	      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
	        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
	      }
	      return _this.context.popperManager.getTargetNode();
	    }, _this._getOffsets = function (data) {
	      return Object.keys(data.offsets).map(function (key) {
	        return data.offsets[key];
	      });
	    }, _this._isDataDirty = function (data) {
	      if (_this.state.data) {
	        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
	      } else {
	        return true;
	      }
	    }, _this._updateStateModifier = {
	      enabled: true,
	      order: 900,
	      fn: function fn(data) {
	        if (_this._isDataDirty(data)) {
	          _this.setState({ data: data });
	        }
	        return data;
	      }
	    }, _this._getPopperStyle = function () {
	      var data = _this.state.data;


	      if (!_this._popper || !data) {
	        return {
	          position: 'absolute',
	          pointerEvents: 'none',
	          opacity: 0
	        };
	      }

	      return _extends({
	        position: data.offsets.popper.position
	      }, data.styles);
	    }, _this._getPopperPlacement = function () {
	      return _this.state.data ? _this.state.data.placement : undefined;
	    }, _this._getPopperHide = function () {
	      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
	    }, _this._getArrowStyle = function () {
	      if (!_this.state.data || !_this.state.data.offsets.arrow) {
	        return {};
	      } else {
	        var _this$state$data$offs = _this.state.data.offsets.arrow,
	            top = _this$state$data$offs.top,
	            left = _this$state$data$offs.left;

	        return { top: top, left: left };
	      }
	    }, _this._handlePopperRef = function (node) {
	      _this._popperNode = node;
	      if (node) {
	        _this._createPopper();
	      } else {
	        _this._destroyPopper();
	      }
	      if (_this.props.innerRef) {
	        _this.props.innerRef(node);
	      }
	    }, _this._scheduleUpdate = function () {
	      _this._popper && _this._popper.scheduleUpdate();
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(Popper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popper: {
	          setArrowNode: this._setArrowNode,
	          getArrowStyle: this._getArrowStyle
	        }
	      };
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(lastProps) {
	      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
	        this._destroyPopper();
	        this._createPopper();
	      }
	      if (lastProps.children !== this.props.children) {
	        this._scheduleUpdate();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroyPopper();
	    }
	  }, {
	    key: '_createPopper',
	    value: function _createPopper() {
	      var _this2 = this;

	      var _props = this.props,
	          placement = _props.placement,
	          eventsEnabled = _props.eventsEnabled;

	      var modifiers = _extends({}, this.props.modifiers, {
	        applyStyle: { enabled: false },
	        updateState: this._updateStateModifier
	      });
	      if (this._arrowNode) {
	        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
	          element: this._arrowNode
	        });
	      }
	      this._popper = new PopperJS(this._getTargetNode(), this._popperNode, {
	        placement: placement,
	        eventsEnabled: eventsEnabled,
	        modifiers: modifiers
	      });

	      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
	      setTimeout(function () {
	        return _this2._scheduleUpdate();
	      });
	    }
	  }, {
	    key: '_destroyPopper',
	    value: function _destroyPopper() {
	      if (this._popper) {
	        this._popper.destroy();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          component = _props2.component,
	          innerRef = _props2.innerRef,
	          placement = _props2.placement,
	          eventsEnabled = _props2.eventsEnabled,
	          modifiers = _props2.modifiers,
	          children = _props2.children,
	          restProps = objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

	      var popperStyle = this._getPopperStyle();
	      var popperPlacement = this._getPopperPlacement();
	      var popperHide = this._getPopperHide();

	      if (typeof children === 'function') {
	        var popperProps = {
	          ref: this._handlePopperRef,
	          style: popperStyle,
	          'data-placement': popperPlacement,
	          'data-x-out-of-boundaries': popperHide
	        };
	        return children({
	          popperProps: popperProps,
	          restProps: restProps,
	          scheduleUpdate: this._scheduleUpdate
	        });
	      }

	      var componentProps = _extends({}, restProps, {
	        style: _extends({}, restProps.style, popperStyle),
	        'data-placement': popperPlacement,
	        'data-x-out-of-boundaries': popperHide
	      });

	      if (typeof component === 'string') {
	        componentProps.ref = this._handlePopperRef;
	      } else {
	        componentProps.innerRef = this._handlePopperRef;
	      }

	      return react.createElement(component, componentProps, children);
	    }
	  }]);
	  return Popper;
	}(react.Component);

	Popper.contextTypes = {
	  popperManager: PropTypes.object
	};
	Popper.childContextTypes = {
	  popper: PropTypes.object.isRequired
	};
	Popper.defaultProps = {
	  component: 'div',
	  placement: 'bottom',
	  eventsEnabled: true,
	  modifiers: {}
	};
	Popper.propTypes = process.env.NODE_ENV !== "production" ? {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  placement: PropTypes.oneOf(placements),
	  eventsEnabled: PropTypes.bool,
	  modifiers: PropTypes.object,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  target: PropTypes.oneOfType([
	  // the following check is needed for SSR
	  PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), PropTypes.shape({
	    getBoundingClientRect: PropTypes.func.isRequired,
	    clientWidth: PropTypes.number.isRequired,
	    clientHeight: PropTypes.number.isRequired
	  })])
	} : {};

	var Arrow = function Arrow(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'span' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popper = context.popper;

	  var arrowRef = function arrowRef(node) {
	    popper.setArrowNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };
	  var arrowStyle = popper.getArrowStyle();

	  if (typeof children === 'function') {
	    var arrowProps = {
	      ref: arrowRef,
	      style: arrowStyle
	    };
	    return children({ arrowProps: arrowProps, restProps: restProps });
	  }

	  var componentProps = _extends({}, restProps, {
	    style: _extends({}, arrowStyle, restProps.style)
	  });

	  if (typeof component === 'string') {
	    componentProps.ref = arrowRef;
	  } else {
	    componentProps.innerRef = arrowRef;
	  }

	  return react.createElement(component, componentProps, children);
	};

	Arrow.contextTypes = {
	  popper: PropTypes.object.isRequired
	};

	Arrow.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};

	exports.Manager = Manager;
	exports.Target = Target;
	exports.Popper = Popper;
	exports.placements = placements;
	exports.Arrow = Arrow;
	//# sourceMappingURL=react-popper.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(5);
	var PropTypes = __webpack_require__(86);
	var DetectPassiveEvents = __webpack_require__(668).default;

	function getInitialState() {
	  return {
	    x: null,
	    y: null,
	    swiping: false,
	    start: 0
	  };
	}

	function getMovingPosition(e) {
	  return 'changedTouches' in e ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY } : { x: e.clientX, y: e.clientY };
	}
	function getPosition(e) {
	  return 'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
	}

	function calculatePos(e, state) {
	  var _getMovingPosition = getMovingPosition(e),
	      x = _getMovingPosition.x,
	      y = _getMovingPosition.y;

	  var deltaX = state.x - x;
	  var deltaY = state.y - y;

	  var absX = Math.abs(deltaX);
	  var absY = Math.abs(deltaY);

	  var time = Date.now() - state.start;
	  var velocity = Math.sqrt(absX * absX + absY * absY) / time;

	  return { deltaX: deltaX, deltaY: deltaY, absX: absX, absY: absY, velocity: velocity };
	}

	var Swipeable = function (_React$Component) {
	  _inherits(Swipeable, _React$Component);

	  function Swipeable(props, context) {
	    _classCallCheck(this, Swipeable);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.eventStart = _this.eventStart.bind(_this);
	    _this.eventMove = _this.eventMove.bind(_this);
	    _this.eventEnd = _this.eventEnd.bind(_this);
	    _this.mouseDown = _this.mouseDown.bind(_this);
	    _this.mouseMove = _this.mouseMove.bind(_this);
	    _this.mouseUp = _this.mouseUp.bind(_this);
	    _this.cleanupMouseListeners = _this.cleanupMouseListeners.bind(_this);
	    _this.setupMouseListeners = _this.setupMouseListeners.bind(_this);
	    _this.elementRef = _this.elementRef.bind(_this);
	    _this.setupTouchmoveEvent = _this.setupTouchmoveEvent.bind(_this);
	    _this.cleanupTouchmoveEvent = _this.cleanupTouchmoveEvent.bind(_this);
	    _this.hasPassiveSupport = DetectPassiveEvents.hasSupport;
	    return _this;
	  }

	  Swipeable.prototype.componentWillMount = function componentWillMount() {
	    this.swipeable = getInitialState();
	  };

	  Swipeable.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.preventDefaultTouchmoveEvent) {
	      this.setupTouchmoveEvent();
	    }
	  };

	  Swipeable.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.disabled !== this.props.disabled) {
	      this.cleanupMouseListeners();

	      this.swipeable = getInitialState();
	    }

	    if (prevProps.preventDefaultTouchmoveEvent && !this.props.preventDefaultTouchmoveEvent) {
	      this.cleanupTouchmoveEvent();
	    } else if (!prevProps.preventDefaultTouchmoveEvent && this.props.preventDefaultTouchmoveEvent) {
	      this.setupTouchmoveEvent();
	    }
	  };

	  Swipeable.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cleanupMouseListeners();
	  };

	  Swipeable.prototype.setupTouchmoveEvent = function setupTouchmoveEvent() {
	    if (this.element && this.hasPassiveSupport) {
	      this.element.addEventListener('touchmove', this.eventMove, { passive: false });
	    }
	  };

	  Swipeable.prototype.setupMouseListeners = function setupMouseListeners() {
	    document.addEventListener('mousemove', this.mouseMove);
	    document.addEventListener('mouseup', this.mouseUp);
	  };

	  Swipeable.prototype.cleanupTouchmoveEvent = function cleanupTouchmoveEvent() {
	    if (this.element && this.hasPassiveSupport) {
	      this.element.removeEventListener('touchmove', this.eventMove, { passive: false });
	    }
	  };

	  Swipeable.prototype.cleanupMouseListeners = function cleanupMouseListeners() {
	    document.removeEventListener('mousemove', this.mouseMove);
	    document.removeEventListener('mouseup', this.mouseUp);
	  };

	  Swipeable.prototype.mouseDown = function mouseDown(e) {
	    if (!this.props.trackMouse || e.type !== 'mousedown') {
	      return;
	    }

	    if (typeof this.props.onMouseDown === 'function') this.props.onMouseDown(e);

	    this.setupMouseListeners();

	    this.eventStart(e);
	  };

	  Swipeable.prototype.mouseMove = function mouseMove(e) {
	    this.eventMove(e);
	  };

	  Swipeable.prototype.mouseUp = function mouseUp(e) {
	    this.cleanupMouseListeners();
	    this.eventEnd(e);
	  };

	  Swipeable.prototype.eventStart = function eventStart(e) {
	    if (e.touches && e.touches.length > 1) return;

	    var _getPosition = getPosition(e),
	        x = _getPosition.x,
	        y = _getPosition.y;

	    if (this.props.stopPropagation) e.stopPropagation();

	    this.swipeable = { start: Date.now(), x: x, y: y, swiping: false };
	  };

	  Swipeable.prototype.eventMove = function eventMove(e) {
	    var _props = this.props,
	        stopPropagation = _props.stopPropagation,
	        delta = _props.delta,
	        onSwiping = _props.onSwiping,
	        onSwipingLeft = _props.onSwipingLeft,
	        onSwipedLeft = _props.onSwipedLeft,
	        onSwipingRight = _props.onSwipingRight,
	        onSwipedRight = _props.onSwipedRight,
	        onSwipingUp = _props.onSwipingUp,
	        onSwipedUp = _props.onSwipedUp,
	        onSwipingDown = _props.onSwipingDown,
	        onSwipedDown = _props.onSwipedDown,
	        preventDefaultTouchmoveEvent = _props.preventDefaultTouchmoveEvent;


	    if (!this.swipeable.x || !this.swipeable.y || e.touches && e.touches.length > 1) {
	      return;
	    }

	    var pos = calculatePos(e, this.swipeable);

	    if (pos.absX < delta && pos.absY < delta && !this.swipeable.swiping) return;

	    if (stopPropagation) e.stopPropagation();

	    if (onSwiping) {
	      onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
	    }

	    var cancelablePageSwipe = false;
	    if (pos.absX > pos.absY) {
	      if (pos.deltaX > 0) {
	        if (onSwipingLeft || onSwipedLeft) {
	          onSwipingLeft && onSwipingLeft(e, pos.absX);
	          cancelablePageSwipe = true;
	        }
	      } else if (onSwipingRight || onSwipedRight) {
	        onSwipingRight && onSwipingRight(e, pos.absX);
	        cancelablePageSwipe = true;
	      }
	    } else if (pos.deltaY > 0) {
	      if (onSwipingUp || onSwipedUp) {
	        onSwipingUp && onSwipingUp(e, pos.absY);
	        cancelablePageSwipe = true;
	      }
	    } else if (onSwipingDown || onSwipedDown) {
	      onSwipingDown && onSwipingDown(e, pos.absY);
	      cancelablePageSwipe = true;
	    }

	    this.swipeable.swiping = true;

	    if (cancelablePageSwipe && preventDefaultTouchmoveEvent) e.preventDefault();
	  };

	  Swipeable.prototype.eventEnd = function eventEnd(e) {
	    var _props2 = this.props,
	        stopPropagation = _props2.stopPropagation,
	        flickThreshold = _props2.flickThreshold,
	        onSwiped = _props2.onSwiped,
	        onSwipedLeft = _props2.onSwipedLeft,
	        onSwipedRight = _props2.onSwipedRight,
	        onSwipedUp = _props2.onSwipedUp,
	        onSwipedDown = _props2.onSwipedDown,
	        onTap = _props2.onTap;


	    if (this.swipeable.swiping) {
	      var pos = calculatePos(e, this.swipeable);

	      if (stopPropagation) e.stopPropagation();

	      var isFlick = pos.velocity > flickThreshold;

	      onSwiped && onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

	      if (pos.absX > pos.absY) {
	        if (pos.deltaX > 0) {
	          onSwipedLeft && onSwipedLeft(e, pos.deltaX, isFlick);
	        } else {
	          onSwipedRight && onSwipedRight(e, pos.deltaX, isFlick);
	        }
	      } else if (pos.deltaY > 0) {
	        onSwipedUp && onSwipedUp(e, pos.deltaY, isFlick);
	      } else {
	        onSwipedDown && onSwipedDown(e, pos.deltaY, isFlick);
	      }
	    } else {
	      onTap && onTap(e);
	    }

	    this.swipeable = getInitialState();
	  };

	  Swipeable.prototype.elementRef = function elementRef(element) {
	    this.element = element;
	    this.props.innerRef && this.props.innerRef(element);
	  };

	  Swipeable.prototype.render = function render() {
	    var newProps = _extends({}, this.props);
	    if (!this.props.disabled) {
	      newProps.onTouchStart = this.eventStart;

	      if (!this.props.preventDefaultTouchmoveEvent || !this.hasPassiveSupport) {
	        newProps.onTouchMove = this.eventMove;
	      }

	      newProps.onTouchEnd = this.eventEnd;
	      newProps.onMouseDown = this.mouseDown;
	    }

	    newProps.ref = this.elementRef;

	    delete newProps.onSwiped;
	    delete newProps.onSwiping;
	    delete newProps.onSwipingUp;
	    delete newProps.onSwipingRight;
	    delete newProps.onSwipingDown;
	    delete newProps.onSwipingLeft;
	    delete newProps.onSwipedUp;
	    delete newProps.onSwipedRight;
	    delete newProps.onSwipedDown;
	    delete newProps.onSwipedLeft;
	    delete newProps.onTap;
	    delete newProps.flickThreshold;
	    delete newProps.delta;
	    delete newProps.preventDefaultTouchmoveEvent;
	    delete newProps.stopPropagation;
	    delete newProps.nodeName;
	    delete newProps.children;
	    delete newProps.trackMouse;
	    delete newProps.disabled;
	    delete newProps.innerRef;

	    return React.createElement(this.props.nodeName, newProps, this.props.children);
	  };

	  return Swipeable;
	}(React.Component);

	Swipeable.propTypes = {
	  onSwiped: PropTypes.func,
	  onSwiping: PropTypes.func,
	  onSwipingUp: PropTypes.func,
	  onSwipingRight: PropTypes.func,
	  onSwipingDown: PropTypes.func,
	  onSwipingLeft: PropTypes.func,
	  onSwipedUp: PropTypes.func,
	  onSwipedRight: PropTypes.func,
	  onSwipedDown: PropTypes.func,
	  onSwipedLeft: PropTypes.func,
	  onTap: PropTypes.func,
	  flickThreshold: PropTypes.number,
	  delta: PropTypes.number,
	  preventDefaultTouchmoveEvent: PropTypes.bool,
	  stopPropagation: PropTypes.bool,
	  nodeName: PropTypes.string,
	  trackMouse: PropTypes.bool,
	  disabled: PropTypes.bool,
	  innerRef: PropTypes.func,
	  children: PropTypes.node
	};

	Swipeable.defaultProps = {
	  flickThreshold: 0.6,
	  delta: 10,
	  preventDefaultTouchmoveEvent: false,
	  stopPropagation: false,
	  nodeName: 'div',
	  disabled: false
	};

	module.exports = Swipeable;

/***/ },

/***/ 861:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(650);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../postcss-loader/index.js!../../sass-loader/index.js!./react-datepicker.css", function() {
				var newContent = require("!!../../css-loader/index.js!../../postcss-loader/index.js!../../sass-loader/index.js!./react-datepicker.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 862:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(651);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!../../../postcss-loader/index.js!../../../sass-loader/index.js!./image-gallery.scss", function() {
				var newContent = require("!!../../../css-loader/index.js!../../../postcss-loader/index.js!../../../sass-loader/index.js!./image-gallery.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 871:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(661);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./zone.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./zone.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=zone.js.map