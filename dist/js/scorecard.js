webpackJsonp([7,13],{

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./dropdown.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./dropdown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._dropdown = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(58);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

	_dropdown = exports._dropdown = function (_React$Component) {_inherits(_dropdown, _React$Component);

	  function _dropdown(props) {_classCallCheck(this, _dropdown);var _this = _possibleConstructorReturn(this, (_dropdown.__proto__ || Object.getPrototypeOf(_dropdown)).call(this,
	    props));_initialiseProps.call(_this);

	    _this.state = {
	      open: false };return _this;

	  }

	  // if( !props._state ) {
	  //   return false;
	  // }
	  _createClass(_dropdown, [{ key: 'render', value: function render()















	    {
	      var props = this.props;
	      if (this.props._state) {
	        return (
	          _react2.default.createElement('div', { className: 'dropdown-container', onClick: this.openDropdown },

	            _react2.default.createElement('div', { className: 'dropdown-selected-active' },
	              _react2.default.createElement('span', { className: 'dropdown-selected-active-label' }, this.renderLabel(props)),
	              _react2.default.createElement(_icons2.default, { name: 'down-arrow', viewBox: '0 0 2040.9 2040.9' })),



	            this.state.open &&

	            _react2.default.createElement(_dropdownList, _extends({}, this.props, { renderLabel: this.renderLabel, closeDropdown: this.closeDropdown }))));




	      } else {
	        return _react2.default.createElement('div', null);
	      }

	    } }]);return _dropdown;}(_react2.default.Component);var _initialiseProps = function _initialiseProps() {var _this3 = this;this.renderLabel = function (props) {if (!props._label) {return props._state[0] && props._state[0].label;}return props._label;};this.openDropdown = function () {_this3.setState({ open: true });};this.closeDropdown = function (event) {_this3.setState({ open: false });};};var



	_dropdownList = function (_React$Component2) {_inherits(_dropdownList, _React$Component2);function _dropdownList() {var _ref;var _temp, _this2, _ret;_classCallCheck(this, _dropdownList);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _dropdownList.__proto__ || Object.getPrototypeOf(_dropdownList)).call.apply(_ref, [this].concat(args))), _this2), _this2.






	    renderList = function (props) {
	      return props._state.map(function (item, index) {
	        return (
	          _react2.default.createElement('li', { key: index },
	            _react2.default.createElement('span', { onClick: function onClick(event) {
	                  if (item.milestoneId) {
	                    (0, _webTrack2.default)(item.milestoneId);
	                  }
	                  props._callback(event, item.label, item.id || item.value, item.defaultValue || 0);
	                  _this2.props.closeDropdown(false);
	                } }, item.label),
	            _this2.renderSubList(item)));


	      });
	    }, _this2.

	    renderSubList = function (items) {
	      if (!items.children) {
	        return false;
	      }
	      return (
	        _react2.default.createElement('ul', null,
	          _this2.renderSubListItems(items)));


	    }, _this2.

	    renderSubListItems = function (items) {
	      if (!items.children) {
	        return false;
	      }
	      return items.children.map(function (item, index) {
	        return (
	          _react2.default.createElement('li', { key: index },
	            _react2.default.createElement('span', { onClick: function onClick(event) {_this2.props._callback(event, item.label, item.id || item.value);} }, item.label),
	            _this2.renderSubList(item)));


	      });
	    }, _temp), _possibleConstructorReturn(_this2, _ret);}_createClass(_dropdownList, [{ key: 'componentDidMount', value: function componentDidMount() {document.addEventListener('click', this.props.closeDropdown);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('click', this.props.closeDropdown);} }, { key: 'render', value: function render()

	    {
	      var props = this.props;
	      return (
	        _react2.default.createElement('div', { className: 'dropdown-list' },
	          _react2.default.createElement('div', { className: 'dropdown-selected' },
	            _react2.default.createElement(_icons2.default, { name: 'check' }),
	            _react2.default.createElement('span', { className: 'dropdown-selected-label' },
	              this.props.renderLabel(props))),


	          _react2.default.createElement('ul', null,
	            this.renderList(props))));



	    } }]);return _dropdownList;}(_react2.default.Component);

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropdown-container {\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n  font-size: .75rem;\n  height: 1.75rem;\n  position: relative;\n  z-index: 100; }\n  .dropdown-container .icon-check {\n    fill: #cd040b;\n    height: 18px;\n    margin-left: 15px;\n    margin-right: 10px;\n    width: 18px; }\n  .dropdown-container span {\n    font-weight: bold; }\n\n.dropdown-list {\n  background: white;\n  -webkit-box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n  display: block;\n  position: absolute;\n  top: 0;\n  min-width: 100%; }\n  .dropdown-list ul {\n    margin: 0;\n    max-height: 41rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0; }\n    .dropdown-list ul li span {\n      color: #666;\n      display: block;\n      padding: 10px 15px 10px 43px;\n      white-space: nowrap; }\n    .dropdown-list ul li li span {\n      padding-left: 79px; }\n    .dropdown-list ul li li li span {\n      padding-left: 99px; }\n    .dropdown-list ul span:hover {\n      background-color: #f5f5f5; }\n\n.dropdown-selected-active-label {\n  white-space: nowrap; }\n\n.dropdown-selected-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .dropdown-selected-active .dropdown-selected-active-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dropdown-selected-active .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n\n.dropdown-selected {\n  border-bottom: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 10px 0; }\n  .dropdown-selected:hover {\n    background-color: #ffffff; }\n  .dropdown-selected .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n  .dropdown-selected .dropdown-selected-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    padding-right: 15px;\n    white-space: nowrap; }\n\n.icon-down-arrow {\n  height: 0.55rem;\n  width: 0.55rem;\n  position: relative;\n  margin-top: 6px;\n  float: right;\n  fill: #d0151b; }\n", ""]);

	// exports


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.





























	getFilterData = getFilterData;exports.


































	getReportFilterData = getReportFilterData;exports.

































	getRepFilterData = getRepFilterData;exports.

































	getGaugesData = getGaugesData;exports.








































	getListViewData = getListViewData;exports.






























	getDrilldownData = getDrilldownData;exports.








































	clearGaugesData = clearGaugesData;var _ajax = __webpack_require__(27);var ajax = _interopRequireWildcard(_ajax);var _scorecardActionTypes = __webpack_require__(105);var TYPEs = _interopRequireWildcard(_scorecardActionTypes);var _endpoints = __webpack_require__(21);var _endpoints2 = _interopRequireDefault(_endpoints);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}var TABLE = { DESC_LIST_SORT_VALUE: 'ASC', ASC_LIST_SORT_VALUE: 'DESC', RIGHT_ARROW: '>', COLORS: ['#abe0f9', '#72b495', '#e0bc57', '#f9b294'] };var ERROR_MESSAGE = 'Please reach out to your local Market Ops. or End User Support contact.';function assignColor(filterOptions) {var count = 0;for (var i in filterOptions) {filterOptions[i].color = TABLE.COLORS[count];count = count + 1;if (count === 4) {count = 0;}}return filterOptions;}function getFilterData(criteria) {return function (dispatch) {var type = TYPEs.FILTER_DATA;dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_SCORECARD_FILTERS, data: { dateCode: criteria.dateCode }, success: function success(results) {if (!results.success) {dispatch(ajax.loadingError(type, results.message));} else {dispatch({ type: TYPEs.LOAD_FILTER_DATA, dateFilters: results.data.dateNav, rankFilters: results.data.rankNav, admin: results.data.admin, hierarchyLevel: results.data.hierarchyLevel, maxHierarchyLevel: results.data.maxHierarchyLevel });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function getReportFilterData(criteria) {return function (dispatch) {var type = TYPEs.REPORT_FILTER_DATA;dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_SCORECARD_REPORT_FILTER, success: function success(results) {if (!results.success) {dispatch(ajax.loadingError(type, results.message));} else {var filterOptions = results.data.selectNavOptions;filterOptions = assignColor(filterOptions);dispatch({ type: TYPEs.LOAD_REPORT_FILTER_DATA, reportFilters: filterOptions });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};} /* Drilldown Rep filter */function getRepFilterData() {return function (dispatch) {var type = TYPEs.REP_FILTER_DATA;dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_DRILLDOWN_REP_FILTER, success: function success(results) {if (!results.success) {dispatch(ajax.loadingError(type, results.message));} else {var filterOptions = results.data; //filterOptions = assignColor( filterOptions );
	                    dispatch({ type: TYPEs.LOAD_REP_FILTER_DATA, repFilters: filterOptions });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function getGaugesData(criteria) {return function (dispatch) {var type = TYPEs.GAUGES_DATA;dispatch({ type: TYPEs.CLEAR_GAUGES_DATA });dispatch(ajax.resetLoaded(type));dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_SCORECARD_GAUGES, data: criteria, success: function success(results) {if (!results.success) {dispatch({ type: TYPEs.GAUGES_ERROR_REPORT, error: true, message: results.errorMessage || ERROR_MESSAGE });dispatch(ajax.loadingError(type, results.message));} else {dispatch({ type: TYPEs.LOAD_GAUGES_DATA, gauges: results.data, criteria: results.data.criteria });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function getListViewData(criteria) {return function (dispatch) {var type = TYPEs.LIST_VIEW_DATA;dispatch(ajax.resetLoaded(type));dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_SCORECARD_LIST_VIEW, data: criteria, success: function success(results) {if (!results.success) {dispatch(ajax.loadingError(type, results.message));} else {dispatch({ type: TYPEs.LOAD_LIST_VIEW_DATA, listView: results.data, criteria: results.data.criteria });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function getDrilldownData(criteria) {return function (dispatch) {var type = TYPEs.DRILLDOWN_DATA; //dispatch( { type: TYPEs.CLEAR_DRILLDOWN_REPORT_DATA } );
	        dispatch(ajax.resetLoaded(type));dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.SHEET_SCORECARD_DRILLDOWN, data: criteria, success: function success(results) {if (!results.success) {dispatch({ type: TYPEs.DRILLDOWN_ERROR_REPORT, error: true, message: results.errorMessage || ERROR_MESSAGE });dispatch(ajax.loadingError(type, results.message));} else {dispatch({ type: TYPEs.LOAD_DRILLDOWN_DATA, drilldownReport: results.data, criteria: results.data.criteria, rankType: results.data.rankType, showRank: results.data.showRank });dispatch(ajax.loaded(type));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function clearGaugesData() {return { type: TYPEs.CLEAR_GAUGES_DATA };}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.serverCustomFormat = exports.userDefinedFormat = exports.convertEstTimeToUserTimeZone = exports.getDateIndex = exports.getDateByIndex = exports.getDateCode = exports.getFilterObject = exports.getFilterLabel = exports.getFilterIndex = exports.getFilterId = undefined;
	var _lodash = __webpack_require__(24);
	var _moment = __webpack_require__(1);var _moment2 = _interopRequireDefault(_moment);
	var _momentTimezone = __webpack_require__(30);var _momentTimezone2 = _interopRequireDefault(_momentTimezone);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


	/*******************************************************************************
	                                                                                                                                                                                                               *  1. getFilterId
	                                                                                                                                                                                                               *  2. getFilterIndex
	                                                                                                                                                                                                               *  3. getFilterLabel
	                                                                                                                                                                                                               *  4. getDateCode
	                                                                                                                                                                                                               *
	                                                                                                                                                                                                               *  TODO: some of these helpers belong in dropdown
	                                                                                                                                                                                                               */

	var getFilterId = exports.getFilterId = function getFilterId(filters, label) {

	  if (!label) {
	    return filters[0].id;
	  }

	  var filteredItem = (0, _lodash.filter)(filters, { 'label': label });

	  if (!filteredItem[0]) {
	    return filters[0].id;
	  }
	  return filteredItem[0].id;
	}; //libs

	var getFilterIndex = exports.getFilterIndex = function getFilterIndex(filters, label) {

	  if (!label) {
	    return 0;
	  }

	  var filterIndex = (0, _lodash.findIndex)(filters, { 'label': label });

	  if (!filterIndex) {
	    return 0;
	  }
	  return filterIndex;
	};

	var getFilterLabel = exports.getFilterLabel = function getFilterLabel(filters, id) {

	  if (!id) {
	    return filters[0].label;
	  }

	  var filteredItem = (0, _lodash.filter)(filters, { 'id': id });

	  if (!filteredItem[0]) {
	    return filters[0].label;
	  }
	  return filteredItem[0].label;
	};

	// TODO some of these helpers belong in dropdown
	var getFilterObject = exports.getFilterObject = function getFilterObject(filters, label) {

	  if (!label) {
	    return filters[0];
	  }

	  var filteredItem = (0, _lodash.filter)(filters, { 'label': label });

	  if (!filteredItem[0]) {
	    return filters[0];
	  }
	  return filteredItem[0];
	};


	var getDateCode = exports.getDateCode = function getDateCode(tabs, index) {
	  switch (tabs[index].name) {
	    case 'Day':
	      return 'D';
	      break;
	    case 'MTD':
	      return 'M';
	      break;
	    case 'QTD':
	      return 'Q';
	      break;}

	};

	var getDateByIndex = exports.getDateByIndex = function getDateByIndex(index) {
	  switch (index) {
	    case 0:
	      return 'D';
	      break;
	    case 1:
	      return 'M';
	      break;
	    case 2:
	      return 'Q';
	      break;
	    default:
	      return 'D';}

	};



	var getDateIndex = exports.getDateIndex = function getDateIndex(tab) {
	  switch (tab) {
	    case 'D':
	      return 0;
	      break;
	    case 'M':
	      return 1;
	      break;
	    case 'Q':
	      return 2;
	      break;
	    default:
	      return 0;}

	};

	var convertEstTimeToUserTimeZone = exports.convertEstTimeToUserTimeZone = function convertEstTimeToUserTimeZone(dateTime, zone) {var abbr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  if (!zone) {
	    zone = _moment2.default.tz.guess();
	  }

	  if (!dateTime) {
	    dateTime = (0, _moment2.default)();
	  }

	  var userCustomizedTime = void 0;
	  var utcFormat = 'YYYY-MM-DD hh:mm A';
	  var easternTimeZone = 'America/New_York';
	  var splitDateTime = dateTime.split('/');
	  var splittedTime = userDefinedFormat(splitDateTime);
	  var easternTime = _moment2.default.tz(splittedTime, utcFormat, easternTimeZone);
	  if (easternTime.isValid()) {
	    var userTime = easternTime.clone().tz(zone);
	    var userZoneAbbr = userTime.zoneAbbr();
	    userCustomizedTime = abbr ? userTime.format(utcFormat) + ' ' + userZoneAbbr : userTime.format(utcFormat);
	    var userModifiedTime = userCustomizedTime.split('-');
	    userCustomizedTime = serverCustomFormat(userModifiedTime);
	  } else {
	    userCustomizedTime = (0, _moment2.default)()._d;
	  }
	  return userCustomizedTime;
	};

	var userDefinedFormat = exports.userDefinedFormat = function userDefinedFormat(props) {
	  if (props && props.length > 0) {
	    var month = props[0];
	    var date = props[1];
	    var year = null;
	    var timeFormat = null;
	    var mHs = null;
	    var yearAndAmPm = props[2];
	    var splitYearAnd12HourDifference = yearAndAmPm.split(' ') || null;
	    if (splitYearAnd12HourDifference && splitYearAnd12HourDifference.length > 0) {
	      year = splitYearAnd12HourDifference[0];
	      mHs = splitYearAnd12HourDifference[1];
	      timeFormat = splitYearAnd12HourDifference[2];
	    }
	    return year + '-' + month + '-' + date + ' ' + mHs + ' ' + timeFormat;
	  }
	  return null;
	};

	var serverCustomFormat = exports.serverCustomFormat = function serverCustomFormat(props) {
	  if (props && props.length > 0) {
	    var year = props[0];
	    var month = props[1];
	    var dateAndAmPm = props[2];
	    var date = null;
	    var timeFormat = null;
	    var mHs = null;
	    var dayLightSavings = null;
	    var splitDateAnd12HourDifference = dateAndAmPm.split(' ') || null;
	    if (splitDateAnd12HourDifference && splitDateAnd12HourDifference.length > 0) {
	      date = splitDateAnd12HourDifference[0];
	      mHs = splitDateAnd12HourDifference[1];
	      timeFormat = splitDateAnd12HourDifference[2];
	      dayLightSavings = splitDateAnd12HourDifference[3];
	    }
	    return month + '/' + date + '/' + year + ' ' + mHs + ' ' + timeFormat + ' ' + dayLightSavings;
	  }
	  return null;
	};

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tabs = undefined;var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(226);
	var _reactRouter = __webpack_require__(31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var _tabs = exports._tabs = function _tabs(props) {

		var renderTabState = function renderTabState(index) {
			if (index === props._index) {
				return 'active';
			}
			return '';
		};

		var renderRoute = function renderRoute(item, index) {
			var renderLink = function renderLink(route) {
				if (!route) {
					return item.name;
				}
				return (
					_react2.default.createElement(_reactRouter.Link, { to: item.route },
						item.name));


			};
			return (
				_react2.default.createElement('li', {
						key: index,
						className: 'tab ' + renderTabState(index),
						onClick: function onClick(event) {props._callback(event, index);} },
					renderLink(item.route)));


		};

		return (
			_react2.default.createElement('ul', { className: 'tab-container' },

				props._state.map(function (item, index) {
					return renderRoute(item, index);
				})));



	};

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.tab-container {\n  border-bottom: 1px solid #d2d3d4;\n  display: inline-block;\n  font-size: .75rem;\n  height: 1.75rem;\n  margin: 0;\n  padding: 0; }\n  .tab-container a {\n    color: #222; }\n  .tab-container li {\n    display: inline-block;\n    float: left;\n    height: 1.75rem; }\n\n.tab {\n  font-size: .75rem;\n  font-weight: 700;\n  margin-right: 1rem;\n  border-bottom: 3px solid transparent; }\n  .tab:last-child {\n    margin: 0; }\n  .tab:hover {\n    cursor: pointer; }\n  .tab.active {\n    border-bottom: 3px solid #CD040B; }\n", ""]);

	// exports


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./tabs.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./tabs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.TYPEs = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.





































	getScorecardModuleData = getScorecardModuleData;var _ajax = __webpack_require__(27);var ajax = _interopRequireWildcard(_ajax);var _endpoints = __webpack_require__(21);var _endpoints2 = _interopRequireDefault(_endpoints);var _appStore = __webpack_require__(43);var _appLang = __webpack_require__(19);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}} /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   1. Default State
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   2. Action Types
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   3. ACtion Creators
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   4. Reducers
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    *  1. Default State
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */var scorecardModuleState = { data: {} }; /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  2. Action Types
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var TYPEs = exports.TYPEs = { SCORECARD_MODULE_DATA: 'scorecardModuleData', LOAD_SCORECARD_MODULE_DATA: 'loadScorecardModuleData' };var LOG_RESPONSE = LOGSERVERRESPONSE; /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *  3. Action Creators
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */ /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * getScorecardModuleData is the main actionCreator for this module
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */function getScorecardModuleData() {return function (dispatch) {var type = TYPEs.SCORECARD_MODULE_DATA;dispatch(ajax.loading(type));return (0, ajax.default)({ url: _endpoints2.default.HOME_SCORECARD_MODULE, success: function success(results, textStatus, jqXHR) {if (!results.success) {dispatch(ajax.loadingError(type, results.errorMessage));} else {LOG_RESPONSE && (0, _appStore.LogServerResponse)(results, textStatus, jqXHR, _endpoints2.default.HOME_SCORECARD_MODULE);

	                    dispatch({
	                        type: TYPEs.LOAD_SCORECARD_MODULE_DATA,
	                        results: results.data });


	                    dispatch(ajax.loaded(type));

	                    var hasResults = results.data.scorecard.length > 0;

	                    dispatch(ajax.handleResultsMessage(type, hasResults, (0, _appLang.ERRORs)().SCORECARD_MODULE_NO_RESULTS));
	                }
	            },
	            fail: function fail(error) {
	                dispatch(ajax.loadingError(type, error.textStatus));
	            } });


	    };
	}

	/*******************************************************************************
	   *  4. Reducers
	   */exports.default =

	function () {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : scorecardModuleState;var action = arguments[1];

	    switch (action.type) {
	        case TYPEs.LOAD_SCORECARD_MODULE_DATA:
	            return _extends({},
	            state, {
	                data: action.results });

	        default:
	            return state;}


	};

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _reactRouter = __webpack_require__(31);

	var _utils = __webpack_require__(13);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);
	var _webTrackIds = __webpack_require__(117);var _webTrackIds2 = _interopRequireDefault(_webTrackIds);

	var _scorecardActionCreators = __webpack_require__(73);
	var _scorecardActionsReducers = __webpack_require__(503);

	var _scorecardHelper = __webpack_require__(74);

	var _tabs2 = __webpack_require__(161);
	var _dropdown2 = __webpack_require__(59);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);

	var _appLang = __webpack_require__(19);

	__webpack_require__(970);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs
	//utils
	//actionCreators
	//helpers
	// shared components
	//lang
	//scss
	/*******************************************************************************
	 *  1. DEFAULT_CRITERIA
	 *  2. Scorecard
	 */ /*
	     * 1. DEFAULT_CRITERIA
	     */var DEFAULT_CRITERIA = { dateCode: null, date: null,
		sortBy: null,
		sortOn: 'ASC',
		report: null,
		drillLevel: 3,
		drillId: null,
		rank: null,
		rankType: null,
		showRank: null };


	/*
	                    * 2. Scorecard
	                    */
	var Scorecard = (0, _utils.connectAndMap)(['views.home.modules.scorecard', 'views.scorecardView', 'app.route'], { getFilterData: _scorecardActionCreators.getFilterData, getGaugesData: _scorecardActionCreators.getGaugesData, getScorecardModuleData: _scorecardActionsReducers.getScorecardModuleData, getReportFilterData: _scorecardActionCreators.getReportFilterData })(function (_React$Component) {_inherits(_class, _React$Component);

		function _class(props) {_classCallCheck(this, _class);var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this,
			props));

			_this.state = {
				scorecardViewIndex: DISPLAY_DRILLDOWN_AS_SELECTED ? 1 : 0,
				scorecardViewTabs: [
				{
					name: 'Scorecard',
					route: APP_PATH + '/scorecard/gauges/graph' },

				{
					name: 'Drilldown Report',
					route: APP_PATH + '/scorecard/drilldown-report' }],


				scorecardDateIndex: 0,
				scorecardDateTabs: [
				{
					name: 'Day' },

				{
					name: 'MTD' },

				{
					name: 'QTD' }],


				scorecardPeriodLabel: undefined,
				scorecardPeriod: undefined,
				scorecardGaugesIndex: 0,
				scorecardGaugesTabs: [
				{
					name: _react2.default.createElement(_icons2.default, { name: 'pie-chart', viewBox: '0 0 2040.9 2040.9' }),
					route: APP_PATH + '/scorecard/gauges/graph' },

				{
					name: _react2.default.createElement(_icons2.default, { name: 'list' }),
					route: APP_PATH + '/scorecard/gauges/list' }],


				scorecardDrilldownDropdownLabel: undefined,
				scorecardRankDropdownLabel: undefined,
				scorecardDrilldownRankTypeId: undefined,
				scorecardDrilldownRankTypeLabel: undefined,
				scorecardDrilldownShowRankId: undefined,
				scorecardDrilldownShowRankLabel: undefined };



			_this.onScorecardViewTab = _this.onScorecardViewTab.bind(_this);
			_this.onScorecardDateTab = _this.onScorecardDateTab.bind(_this);
			_this.onScorecardGaugesTab = _this.onScorecardGaugesTab.bind(_this);
			_this.onScorecardPeriodDropdown = _this.onScorecardPeriodDropdown.bind(_this);
			_this.onScorecardDrilldownDropdown = _this.onScorecardDrilldownDropdown.bind(_this);
			_this.onScorecardDrilldownRankTypeDropdown = _this.onScorecardDrilldownRankTypeDropdown.bind(_this);
			_this.onScorecardDrilldownShowRankDropdown = _this.onScorecardDrilldownShowRankDropdown.bind(_this);
			_this.onScorecardRankDropdown = _this.onScorecardRankDropdown.bind(_this);
			_this.doRoute = _this.doRoute.bind(_this);return _this;
		}_createClass(_class, [{ key: 'componentDidMount', value: function componentDidMount()
			{
				this.fetchInitialData();
			} }, { key: 'componentDidUpdate', value: function componentDidUpdate(
			prevProps, prevState) {
				if (
				//todo shoudl not need to use scorecardViewIndex conditional
				prevState.scorecardViewIndex !== this.state.scorecardViewIndex)
				{
					this.fetchGaugesData();
				}
			} }, { key: 'doRoute', value: function doRoute()
			{
				var self = this;
				var route = function route() {
					if (self.state.scorecardViewIndex === 0) {
						return self.state.scorecardGaugesTabs[self.state.scorecardGaugesIndex].route;
					}
					return self.state.scorecardViewTabs[self.state.scorecardViewIndex].route;
				};
				_reactRouter.browserHistory.push(route());
			} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

			nextProps, nextState) {

				if (nextProps.scorecard.data && nextProps.scorecard.data.channelId) {
					this.doCheckIfChannelIsRetail();
				}

				if (nextProps.scorecardView.showRank && nextProps.scorecardView.rankType) {var _nextProps$scorecardV =




					nextProps.scorecardView,criteria = _nextProps$scorecardV.criteria,showRank = _nextProps$scorecardV.showRank,rankType = _nextProps$scorecardV.rankType;

					this.setState({
						scorecardDrilldownRankTypeId: criteria.rankType,
						scorecardDrilldownRankTypeLabel: (0, _scorecardHelper.getFilterLabel)(rankType, criteria.rankType),
						scorecardDrilldownShowRankId: criteria.showRank,
						scorecardDrilldownShowRankLabel: (0, _scorecardHelper.getFilterLabel)(showRank, criteria.showRank) });

				}
			} }, { key: 'doCheckIfChannelIsRetail', value: function doCheckIfChannelIsRetail(

			params) {var

				scorecard =
				this.props.scorecard;
				var title = _appLang.SCORECARD_MODULE.TITLE;
				var stateObj = {};
				var tempObj = !params ? {} : params;
				if (scorecard.data && scorecard.data.channelId) {
					if (scorecard.data.channelId === '2016') {
						title = _appLang.SCORECARD_MODULE.LEADERBOARD_TITLE;

						stateObj = _extends({},
						tempObj, {
							scorecardViewTabs: [
							{
								name: title,
								route: APP_PATH + '/scorecard/gauges/graph' },

							{
								name: _appLang.SCORECARD_MODULE.DRILLDOWN_REPORT,
								route: APP_PATH + '/scorecard/drilldown-report' }] });




						this.setState(stateObj);
					}
				}
				return stateObj;
			} }, { key: 'getPromiseData', value: function getPromiseData()

			{var _this2 = this;

				var self = this;
				var getDataPromise = function getDataPromise() {
					return new Promise(function (resolve, reject) {

						if (!location.pathname.includes('drilldown-report')) {

							_this2.props.getFilterData({ dateCode: (0, _scorecardHelper.getDateByIndex)(self.state.scorecardDateIndex) }).done(function (response2) {
								if (response2 && response2.success && response2.data) {
									_this2.setState(
									{
										scorecardPeriodLabel: response2.data.dateNav[0].label,
										scorecardPeriod: response2.data.dateNav });



									var criteria = DEFAULT_CRITERIA;
									criteria.date = response2.data.dateNav[0].id;
									criteria.rank = response2.data.rankNav[0].id;
									criteria.dateCode = (0, _scorecardHelper.getDateByIndex)(self.state.scorecardDateIndex);
									criteria.drillLevel = response2.data.hierarchyLevel || DEFAULT_CRITERIA.drillLevel;
									_this2.props.getGaugesData(criteria).done(resolve);

								}
							});

						}

						if (location.pathname.includes('drilldown-report')) {
							if (_this2.props.scorecardView && _this2.props.scorecardView.reportFilters && _this2.props.scorecardView.reportFilters.length) {
								var filterItem = void 0;
								if (!_this2.state.scorecardDrilldownDropdownLabel) {
									filterItem = (0, _scorecardHelper.getFilterObject)(_this2.props.scorecardView.reportFilters, _this2.props.scorecardView.reportFilters[0].label);
								} else {
									filterItem = (0, _scorecardHelper.getFilterObject)(_this2.props.scorecardView.reportFilters, _this2.state.scorecardDrilldownDropdownLabel);
								}
								self.setState({ 'scorecardDateIndex': (0, _scorecardHelper.getDateIndex)(filterItem.defaultValue) });
								_this2.fetchData(filterItem.defaultValue);
							}
						}
					});
				};
				getDataPromise().then(function () {
					if (location.pathname.includes('graph')) {
						return false;
					}
					self.fetchData();
				});

			} }, { key: 'fetchGaugesData', value: function fetchGaugesData()

			{
				this.getPromiseData();
			} }, { key: 'fetchInitialData', value: function fetchInitialData()

			{var _this3 = this;
				var self = this;
				var getInitialDataPromise = function getInitialDataPromise() {
					return new Promise(function (resolve, reject) {
						if (!_this3.props.scorecardView.gauges) {
							var _getGaugesData = function _getGaugesData(response2) {
								var criteria = DEFAULT_CRITERIA;
								criteria.date = response2.data.dateNav[0].id;
								criteria.rank = response2.data.rankNav[0].id;
								criteria.drillLevel = response2.data.hierarchyLevel || DEFAULT_CRITERIA.drillLevel;
								_this3.props.getGaugesData(criteria).done(resolve);
							};

							if (!location.pathname.includes('drilldown-report')) {
								_this3.props.getFilterData({ dateCode: (0, _scorecardHelper.getDateByIndex)(self.state.scorecardDateIndex) }).
								done(function (response2) {_getGaugesData(response2);});
							}

						}

						/*if ( location.pathname.includes( 'drilldown-report' ) ) {
	       	if ( DISPLAY_DRILLDOWN_AS_SELECTED && this.props.scorecardView.gauges ) {
	       		self.props.getFilterData( { dateCode: self.props.scorecard.data.dateCodes[ 0 ] } )
	       			.done( resolve );
	       	}
	       }*/

					});
				};

				if (this.props.scorecard.data.dateCodes && !this.props.scorecard.data.dateCodes.length) {
					this.props.getScorecardModuleData().
					done(function () {
						getInitialDataPromise().then(function () {
							if (location.pathname.includes('graph')) {
								return false;
							}
							self.fetchData();
						});
					});

				} else {
					getInitialDataPromise().then(function () {
						if (location.pathname.includes('graph')) {
							return false;
						}
						self.fetchData();
					});
				}

				if (DISPLAY_DRILLDOWN_AS_SELECTED) {
					if (!this.state.scorecardDrilldownDropdownLabel) {
						this.props.getReportFilterData().done(function () {
							if (self.props.scorecardView.reportFilters && self.props.scorecardView.reportFilters.length) {
								var filterItem = self.props.scorecardView.reportFilters[0];
								self.setState({ 'scorecardDateIndex': (0, _scorecardHelper.getDateIndex)(filterItem.defaultValue), 'scorecardDrilldownDropdownLabel': filterItem.label });
								self.fetchData(filterItem.defaultValue);
							}
						});
					}
				}

			} }, { key: 'fetchData', value: function fetchData(
			scorecardDateIndex) {var _props =



				this.props,scorecard = _props.scorecard,scorecardView = _props.scorecardView;
				var self = this;
				var dateCode = void 0;

				if (scorecardDateIndex) {
					dateCode = scorecardDateIndex;
				} else {
					dateCode = (0, _scorecardHelper.getDateCode)(this.state.scorecardDateTabs, this.state.scorecardDateIndex);
				}
				this.props.getFilterData({ dateCode: dateCode }).done(function () {
					if (self.props.scorecardView.dateFilters && self.props.scorecardView.dateFilters.length) {
						self.setState({ scorecardPeriodLabel: self.props.scorecardView.dateFilters[0].label, scorecardPeriod: self.props.scorecardView.dateFilters });
					}
				});
			} }, { key: 'onScorecardViewTab', value: function onScorecardViewTab(
			event, index) {
				this.setState({ scorecardViewIndex: index });
				if (index === 0) {
					this.setState({ scorecardGaugesIndex: 0 });
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_GAUGE_VIEW);
				} else {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORCARD_DRILLDOWN_VIEW);
				}
			} }, { key: 'onScorecardDateTab', value: function onScorecardDateTab(
			event, index) {var _this4 = this;
				this.props.getFilterData({ dateCode: (0, _scorecardHelper.getDateCode)(this.state.scorecardDateTabs, index) }).done(function () {
					if (_this4.props.scorecardView.dateFilters && _this4.props.scorecardView.dateFilters.length) {
						_this4.setState(
						{
							scorecardPeriodLabel: _this4.props.scorecardView.dateFilters[0].label,
							scorecardPeriod: _this4.props.scorecardView.dateFilters,
							scorecardDateIndex: index });



					}
				});

				if (index === 0) {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_DAY_TAB);
				} else if (index === 1) {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_MTD_TAB);
				} else if (index === 2) {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_QTD_TAB);
				}
			} }, { key: 'onScorecardGaugesTab', value: function onScorecardGaugesTab(
			event, index) {
				this.setState({ scorecardGaugesIndex: index });
				if (index === 0) {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_GAUGE_VIEW);
				} else {
					(0, _webTrack2.default)(_webTrackIds2.default.SCORECARD_LIST_VIEW);
				}
			} }, { key: 'onScorecardPeriodDropdown', value: function onScorecardPeriodDropdown(
			event, label) {
				this.setState({ scorecardPeriodLabel: label });
			} }, { key: 'onScorecardDrilldownDropdown', value: function onScorecardDrilldownDropdown(
			event, label, id, value) {var _this5 = this;var _props$scorecardView =





				this.props.scorecardView,criteria = _props$scorecardView.criteria,showRank = _props$scorecardView.showRank,rankType = _props$scorecardView.rankType,dateFilters = _props$scorecardView.dateFilters;

				if (value) {
					this.props.getFilterData({ dateCode: value }).done(function () {
						if (dateFilters && dateFilters.length) {
							_this5.setState(
							{
								scorecardDateIndex: (0, _scorecardHelper.getDateIndex)(value),
								scorecardDrilldownDropdownLabel: label,
								scorecardDrilldownRankTypeId: criteria.rankType,
								scorecardDrilldownRankTypeLabel: (0, _scorecardHelper.getFilterLabel)(rankType, criteria.rankType),
								scorecardDrilldownShowRankLabel: (0, _scorecardHelper.getFilterLabel)(showRank, criteria.showRank),
								scorecardDrilldownShowRankId: criteria.showRank,
								scorecardPeriod: _this5.props.scorecardView.dateFilters,
								scorecardPeriodLabel: _this5.props.scorecardView.dateFilters[0].label });


						}
					});
				} else {

					this.setState(
					{
						scorecardDrilldownDropdownLabel: label,
						scorecardDrilldownRankTypeId: criteria.rankType,
						scorecardDrilldownRankTypeLabel: (0, _scorecardHelper.getFilterLabel)(rankType, criteria.rankType),
						scorecardDrilldownShowRankLabel: (0, _scorecardHelper.getFilterLabel)(showRank, criteria.showRank),
						scorecardDrilldownShowRankId: criteria.showRank });


				}

			} }, { key: 'onScorecardDrilldownRankTypeDropdown', value: function onScorecardDrilldownRankTypeDropdown(
			event, label, id) {
				this.setState({ scorecardDrilldownRankTypeLabel: label, scorecardDrilldownRankTypeId: id });
			} }, { key: 'onScorecardDrilldownShowRankDropdown', value: function onScorecardDrilldownShowRankDropdown(
			event, label, id) {
				this.setState({ scorecardDrilldownShowRankLabel: label, scorecardDrilldownShowRankId: id });
			} }, { key: 'onScorecardRankDropdown', value: function onScorecardRankDropdown(
			event, label) {
				this.setState({ scorecardRankDropdownLabel: label });
			} }, { key: 'renderGaugesTabs', value: function renderGaugesTabs()
			{var _this6 = this;

				if (!this.props.location.pathname.includes('gauges')) {
					return false;
				}

				var renderTabsToggle = function renderTabsToggle() {
					var cssClass = 'scorecard-tabs-toggle';
					if (!_this6.props.scorecard.data.officeId) {
						return cssClass + ' invisible';
					}
					return cssClass;
				};

				return (
					_react2.default.createElement('div', { className: renderTabsToggle() },
						_react2.default.createElement(_tabs2._tabs, {
							_index: this.state.scorecardGaugesIndex,
							_state: this.state.scorecardGaugesTabs,
							_callback: this.onScorecardGaugesTab })));



			} }, { key: 'renderRankDropdown', value: function renderRankDropdown()
			{var _this7 = this;

				var renderRank = function renderRank() {
					var cssClass = 'scorecard-dropdown-rank';
					if (_this7.props.location.pathname.includes('list')) {
						return cssClass + ' invisible';
					}
					return cssClass;
				};

				if (!this.props.scorecardView.rankFilters) {
					return false;
				}

				if (this.props.location.pathname.includes('graph') || this.props.location.pathname.includes('list')) {
					return (
						_react2.default.createElement('div', { className: renderRank() },
							_react2.default.createElement(_dropdown2._dropdown, {
								_label: this.state.scorecardRankDropdownLabel,
								_state: this.props.scorecardView.rankFilters,
								_callback: this.onScorecardRankDropdown })));



				}
			} }, { key: 'renderDrilldownDropdown', value: function renderDrilldownDropdown()
			{
				if (!this.props.location.pathname.includes('drilldown-report')) {
					return false;
				}

				if (this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0) {
					return (
						_react2.default.createElement('div', { className: 'scorecard-dropdown-drilldown' },
							_react2.default.createElement(_dropdown2._dropdown, {
								_label: this.state.scorecardDrilldownDropdownLabel,
								_state: this.props.scorecardView.reportFilters,
								_callback: this.onScorecardDrilldownDropdown })));



				}
			} }, { key: 'renderDrilldownRankTypeDropdown', value: function renderDrilldownRankTypeDropdown()

			{
				if (!this.props.location.pathname.includes('drilldown-report')) {
					return false;
				}
				if (!this.props.scorecardView.rankType || !this.props.scorecardView.criteria || !this.props.scorecardView.criteria.rankType) {
					return false;
				}

				return (
					_react2.default.createElement('div', { className: 'scorecard-dropdown-drilldown rank-type', style: { 'marginLeft': '5%' } },
						_react2.default.createElement(_dropdown2._dropdown, {
							_label: (0, _scorecardHelper.getFilterLabel)(this.props.scorecardView.rankType, this.props.scorecardView.criteria.rankType),
							_state: this.props.scorecardView.rankType,
							_callback: this.onScorecardDrilldownRankTypeDropdown })));



			} }, { key: 'renderDrilldownShowRankDropdown', value: function renderDrilldownShowRankDropdown()

			{
				if (!this.props.location.pathname.includes('drilldown-report')) {
					return false;
				}
				if (!this.props.scorecardView.showRank || !this.props.scorecardView.criteria || !this.props.scorecardView.criteria.showRank) {
					return false;
				}
				return (
					_react2.default.createElement('div', { className: 'scorecard-dropdown-drilldown show-rank' },
						_react2.default.createElement(_dropdown2._dropdown, {
							_label: (0, _scorecardHelper.getFilterLabel)(this.props.scorecardView.showRank, this.props.scorecardView.criteria.showRank),
							_state: this.props.scorecardView.showRank,
							_callback: this.onScorecardDrilldownShowRankDropdown })));



			} }, { key: 'renderDateCodes', value: function renderDateCodes()

			{
				var dateIndex = this.props.scorecardView.criteria && this.props.scorecardView.criteria.dateCode || 0;
				switch (dateIndex) {
					case 'D':
						dateIndex = 0;
						break;
					case 'M':
						dateIndex = 1;
						break;
					case 'Q':
						dateIndex = 2;
						break;
					default:
						dateIndex = 0;}

				return dateIndex;
			} }, { key: 'render', value: function render()
			{

				var dateSelectedIndex = this.state.scorecardDateIndex === 0 ? this.renderDateCodes() : this.state.scorecardDateIndex;
				var dateFilters = this.props.scorecardView.dateFilters ? this.props.scorecardView.dateFilters : this.state.scorecardPeriod;

				return (
					_react2.default.createElement('div', { className: 'scorecard-container' },
						_react2.default.createElement('div', { className: 'scorecard-content' },
							_react2.default.createElement('nav', { className: 'scorecard-nav' },
								_react2.default.createElement('div', { className: 'scorecard-tabs-view' },
									_react2.default.createElement(_tabs2._tabs, {
										_index: this.state.scorecardViewIndex,
										_state: this.state.scorecardViewTabs,
										_callback: this.onScorecardViewTab })),



								this.renderGaugesTabs(),
								this.renderRankDropdown(),
								this.renderDrilldownDropdown(),
								this.renderDrilldownRankTypeDropdown(),
								this.renderDrilldownShowRankDropdown(),

								_react2.default.createElement('div', { className: 'scorecard-tabs-date' },

									_react2.default.createElement(_tabs2._tabs, {
										_index: this.state.scorecardDateIndex,
										_state: this.state.scorecardDateTabs,
										_callback: this.onScorecardDateTab })),



								_react2.default.createElement('div', { className: 'scorecard-dropdown-period' },
									_react2.default.createElement(_dropdown2._dropdown, {
										_label: this.state.scorecardPeriodLabel,
										_state: dateFilters,
										_callback: this.onScorecardPeriodDropdown }))),



							_react2.default.cloneElement(this.props.children, _extends({}, this.state)))));



			} }]);return _class;}(_react2.default.Component));exports.default =


	Scorecard;

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.invisible {\n  visibility: hidden; }\n\n.scorecard-container {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  padding: 0 3.125rem;\n  -webkit-transform: translate(0px);\n          transform: translate(0px); }\n  .scorecard-container ul {\n    list-style: none; }\n\n.scorecard-content {\n  -webkit-transform: translate(0px);\n          transform: translate(0px); }\n\n.scorecard-view-container {\n  background: #fff;\n  height: 34rem;\n  -webkit-transition: opacity .5s ease-in-out;\n  transition: opacity .5s ease-in-out;\n  -webkit-transform: translate(0px);\n          transform: translate(0px); }\n\n.scorecard-nav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  height: 2rem;\n  margin-bottom: 1rem; }\n\n.scorecard-tabs-view {\n  width: 20%; }\n\n.scorecard-tabs-toggle {\n  text-align: center;\n  width: 10%; }\n  .scorecard-tabs-toggle .icon {\n    overflow: visible; }\n  .scorecard-tabs-toggle .tab {\n    height: 1.5rem;\n    width: 1.5rem; }\n    .scorecard-tabs-toggle .tab.active {\n      border-bottom: 0; }\n      .scorecard-tabs-toggle .tab.active .icon {\n        fill: #d0151b; }\n  .scorecard-tabs-toggle .tab-container {\n    border-bottom: 0; }\n\n.scorecard-dropdown-rank {\n  margin-right: 10%;\n  width: 20%;\n  margin-left: 5%; }\n\n.scorecard-tabs-date {\n  width: 15%; }\n\n.scorecard-dropdown-drilldown {\n  width: 12%;\n  margin-right: 5%;\n  /*margin-left: 5%;*/ }\n\n.scorecard-dropdown-period {\n  width: 20%; }\n\n.first-column {\n  position: absolute; }\n\n.no-results {\n  font-weight: bold;\n  color: #CD040B;\n  padding: 2rem 0;\n  width: 100%;\n  font-size: 1rem;\n  display: block; }\n\n.scorecard-drilldown-report {\n  margin-top: 1.15rem; }\n  .scorecard-drilldown-report .slidable-table-page:last-child {\n    display: none; }\n  .scorecard-drilldown-report .slidable-table-container {\n    padding-top: 3rem;\n    font-weight: 700; }\n\n.drilldown {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  font-weight: bold;\n  padding: 0;\n  position: absolute;\n  top: 6rem;\n  left: 4.2rem;\n  z-index: 9; }\n  .drilldown li {\n    color: #0066cc; }\n    .drilldown li:last-child span {\n      display: none; }\n    .drilldown li:hover {\n      cursor: pointer; }\n    .drilldown li.active {\n      color: #222; }\n  .drilldown span {\n    color: #858585;\n    margin: 0 1rem; }\n\n.scorecard-gauges .gauge-opacity {\n  margin: 0 .5rem;\n  height: 18rem;\n  width: 16rem; }\n\n.scorecard-gauges .gauge-heads {\n  clear: both; }\n\n.scorecard-gauges .gauge-tails {\n  clear: both; }\n\n.scorecard-utility {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  height: 1rem;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  margin: .5rem 0; }\n  .scorecard-utility span {\n    font-size: 1rem;\n    line-height: 1em; }\n\n.slide-gauges-container {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n\n.slide-gauges {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  margin-left: -.5rem;\n  overflow: hidden; }\n  .slide-gauges .no-results {\n    margin-left: 1.5rem; }\n\n.slidable-gauges {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  padding: 5.5rem 0 0 0;\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out; }\n  .slidable-gauges svg {\n    width: 100%;\n    height: 100%; }\n\n.btn-paginator {\n  cursor: pointer;\n  height: 3rem;\n  width: 4rem;\n  position: absolute;\n  z-index: 9; }\n\n.btn-previous,\n.btn-next {\n  height: 3rem;\n  margin-top: 5rem;\n  width: 4rem; }\n\n.btn-previous {\n  padding-left: 1rem; }\n  .btn-previous .icon-big-arrow {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.icon-big-arrow {\n  fill: #ecedee;\n  width: 3rem; }\n\n.btn-next {\n  padding-right: 1rem;\n  text-align: right; }\n\n.vz-back-caret:before,\n.vz-forward-caret:before {\n  font-size: 3rem; }\n\n.scorecard-gauges-container .slidable-table-page:last-child {\n  display: block; }\n\n.gauge-header {\n  font-size: 1rem;\n  margin: 0;\n  text-align: center;\n  min-height: 3rem; }\n\n.gauge-rank-footer-rank {\n  line-height: 1em; }\n\n.gauge-rank-footer-rank-title {\n  color: #595a5d;\n  font-size: 1rem;\n  margin: 0; }\n\n.gauge-rank-footer-out-of-rank-value {\n  font-weight: lighter; }\n\n.gauge-rank-footer {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.5rem;\n  margin-top: 1.5rem; }\n\n.scorecard-module-gauge {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  top: -.8rem; }\n\n.scorecard-module-gauge-flip {\n  cursor: pointer;\n  position: absolute;\n  top: 73%;\n  left: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n  border: 3px solid #d4d5d6;\n  background-color: #ffffff;\n  color: #d4d5d6;\n  font-size: 28px;\n  line-height: 0px;\n  text-align: center;\n  padding: 0; }\n  .scorecard-module-gauge-flip:active, .scorecard-module-gauge-flip:focus {\n    outline: none; }\n\n.scorecard-module-gauge-flip .icon {\n  display: block;\n  width: 100%;\n  top: 0;\n  position: relative; }\n\n.scorecard-sheet-gauge-tails .gauge-circle-result,\n.scorecard-sheet-gauge-tails .gauge-circle-objective {\n  opacity: .75;\n  width: 50%;\n  float: left; }\n  .scorecard-sheet-gauge-tails .gauge-circle-result > span,\n  .scorecard-sheet-gauge-tails .gauge-circle-objective > span {\n    display: block;\n    width: 100%;\n    text-align: center;\n    font-weight: 700; }\n\n.gauge-circle-value {\n  font-size: 2rem;\n  font-weight: 700; }\n\n.gauge .gauge-circle-value .pct-format,\n.gauge .gauge-circle-value .cur-format {\n  position: relative;\n  display: inline-block;\n  top: -.75rem;\n  font-weight: 500;\n  font-size: 20px; }\n\n.scorecard-module-gauge-tails .scorecard-module-gauge-flip {\n  background-color: transparent;\n  top: 73%;\n  border: 0px; }\n\n.scorecard-module-gauge-tails .scorecard-module-gauge-flip .icon {\n  height: 30px;\n  width: 30px;\n  fill-opacity: .75;\n  fill: #ffffff; }\n\n.scorecard-module-gauge-tails .top-text {\n  font-size: .75rem; }\n\n.scorecard-sheet-gauge-tails .bottom-text {\n  font-size: .75rem; }\n\n.scorecard-module-gauge-tails {\n  padding: 11% 4.8% 11%;\n  color: #ffffff;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n\n.scorecard-module-gauge-circle {\n  border-radius: 100%;\n  padding: 4rem 3rem; }\n\n.gauge-circle-objective-and-result-wrapper {\n  overflow: hidden;\n  position: relative; }\n\n.gauge-circle-bar {\n  width: 2px;\n  height: 60px;\n  background-color: #fff;\n  opacity: .75;\n  position: absolute;\n  right: 50%;\n  margin-right: -1px; }\n\n.gauge-circle-result,\n.gauge-circle-objective {\n  opacity: .75;\n  width: 50%;\n  float: left; }\n  .gauge-circle-result > span,\n  .gauge-circle-objective > span {\n    display: block;\n    width: 100%;\n    text-align: center;\n    font-weight: 700;\n    font-size: .75rem; }\n\n.list-view .slidable-table {\n  max-height: 24rem; }\n\n.slidable-footer,\n.slidable-header {\n  /*background: rgb(171, 224, 249);*/ }\n\n.table-header-template {\n  font-size: .75rem;\n  line-height: 1.25em; }\n\n.drilldown-report .flex-table-header {\n  background: #F6F6F6; }\n\n.drilldown-report .flex-table-footer {\n  background: #F6F6F6; }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .gauge-heads {\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n    zoom: 1; }\n  .gauge-tails {\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n    zoom: 1; } }\n", ""]);

	// exports


/***/ },

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(738);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./scorecard.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./scorecard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=scorecard.js.map