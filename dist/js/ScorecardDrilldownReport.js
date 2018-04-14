webpackJsonp([6,13],{

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(49);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

	ErrorMessage = function (_React$Component) {_inherits(ErrorMessage, _React$Component);function ErrorMessage() {_classCallCheck(this, ErrorMessage);return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).apply(this, arguments));}_createClass(ErrorMessage, [{ key: 'render', value: function render()
			{var

				message =
				this.props.message;


				return _react2.default.createElement('div', { className: "error-message-box" },
					_react2.default.createElement('i', { className: 'vz vz-alert' }),
					_react2.default.createElement('div', { className: 'message' },
						message));


			} }]);return ErrorMessage;}(_react2.default.Component);


	ErrorMessage.propTypes = {
		message: _react2.default.PropTypes.string };exports.default =


	ErrorMessage;

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".error-message-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 1.5rem;\n  background-color: #ffcfd1;\n  margin-bottom: 1rem;\n  margin-left: 3.125rem; }\n  .error-message-box .message {\n    margin-left: remCalc(8px);\n    line-height: 1;\n    margin-bottom: 0;\n    font-weight: 700;\n    font-size: remCalc(14px); }\n  .error-message-box i {\n    padding-right: 1em;\n    font-size: 2em; }\n\n.Home_cell .error-message-box {\n  margin: 1rem; }\n\n.Home_cell--scorecardmodule .error-message-box,\n.Home_cell--leaderboardmodule .error-message-box {\n  margin: 0px; }\n\n.Home_cell--leaderboardmodule .error-message-box {\n  margin-top: -webkit-calc(1rem - 0.5625rem);\n  margin-top: calc(1rem - 0.5625rem); }\n", ""]);

	// exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./error-message.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./error-message.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

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

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tablePaginator = undefined;var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var _tablePaginator = exports._tablePaginator = function _tablePaginator(props) {var

	  _state = props._state;

	  if (_state.length === 0) {
	    return false;
	  }

	  var renderActiveState = function renderActiveState(item) {
	    if (item === true) {
	      return 'active';
	    }
	    return '';
	  };
	  return (
	    _react2.default.createElement('div', { className: 'slidable-table-paginator' },

	      props._state.map(function (item, index) {
	        return (
	          _react2.default.createElement('div', {
	            className: 'slidable-table-page ' + renderActiveState(item),
	            key: index,
	            onClick: function onClick(event) {props._callback(event, index);} }));


	      })));



	};

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports._tableRow = undefined;
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var _tableRow = exports._tableRow = function _tableRow(props) {var
		_state = props._state,_callback = props._callback,_index = props._index,_template = props._template,_fixedColumns = props._fixedColumns,_fromWhichColumn = props._fromWhichColumn;

		if (_state.length === 0) {
			return false;
		}

		var renderTemplate = function renderTemplate(column, index) {

			if (_template) {
				return _template(column, _callback, index, _index, _fixedColumns, _fromWhichColumn);
			} else {
				return column.label;
			}

		};

		return (
			_react2.default.createElement("div", { className: "flex-table-row" },

				_state.map(function (column, index) {
					return (
						_react2.default.createElement("div", { className: "flex-table-column", key: index },

							renderTemplate(column, index)));



				})));



	}; //libs and utilities

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.slidable-table {\n  background: #fff;\n  max-height: 22rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: relative; }\n\n.slidable-table-paginator {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin: 2px 0 0 20px; }\n\n.slidable-table-page {\n  background: #ccc;\n  border-radius: 10px;\n  height: .75rem;\n  width: .75rem;\n  margin: 0 .25rem; }\n  .slidable-table-page:hover {\n    cursor: pointer; }\n  .slidable-table-page:last-child {\n    display: none; }\n\n.slidable-header {\n  height: 4rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.slidable-footer {\n  font-size: .75rem;\n  height: 4rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.slide-table-container {\n  overflow: hidden;\n  position: relative; }\n\n.slidable-table-paginator .slidable-table-page {\n  -webkit-transition: background-color 2s ease;\n  transition: background-color 2s ease; }\n  .slidable-table-paginator .slidable-table-page.active {\n    background: #d0151b; }\n\n.slide-table-utility {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  font-size: .75rem;\n  height: 1rem;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  line-height: 1em;\n  margin: 0 0 1rem 0; }\n  .slide-table-utility span {\n    line-height: 1.5em; }\n\n.slidable-table-container {\n  background: white;\n  height: 34rem;\n  padding: 1rem; }\n\n.first-column {\n  background: #fff;\n  position: absolute;\n  top: 0; }\n\n.flex-table-column:first-child {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n\n.flex-table-column:last-child {\n  border-right: none; }\n\n.first-column .flex-table-column:last-child,\n.first-column-header .flex-table-column:last-child,\n.first-column-footer .flex-table-column:last-child,\n.second-column-header .flex-table-column:last-child,\n.second-column-footer .flex-table-column:last-child {\n  border-right: 1px solid #e4e5e3; }\n\n.flex-table-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row; }\n\n.flex-table-column {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-right: 1px solid #e4e5e3;\n  border-bottom: 1px solid #e4e5e3;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  height: 3rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  padding: 0 1.5rem;\n  text-align: left; }\n\n.flex-table-footer,\n.flex-table-header {\n  background-color: #abe0f9;\n  font-weight: bold;\n  position: absolute;\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  width: 100%;\n  z-index: 9; }\n  .flex-table-footer .flex-table-column,\n  .flex-table-header .flex-table-column {\n    border-bottom: 0;\n    border-top: 0;\n    height: 4rem; }\n\n.flex-table-body {\n  font-size: .75rem;\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out; }\n  .flex-table-body .icon {\n    fill: #d0151b;\n    height: 15px;\n    width: 15px; }\n  .flex-table-body .icon-right-arrow {\n    height: 0.55rem;\n    width: 0.55rem;\n    margin-top: 8px;\n    float: right;\n    fill: #d0151b; }\n  .flex-table-body .drilldown-carrot {\n    display: inline-block;\n    width: 18px;\n    height: 18px; }\n\n/* TODO put these in their template jsx */\n/* css template style */\n.table-header-template {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  position: relative;\n  text-align: center; }\n  .table-header-template .icon {\n    fill: #d0151b;\n    height: 15px;\n    width: 15px; }\n  .table-header-template .icon-down-arrow {\n    margin-top: -4px; }\n  .table-header-template .carrot {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    margin-right: 0rem;\n    margin-left: 1rem; }\n    .table-header-template .carrot:hover {\n      cursor: pointer; }\n  .table-header-template .table-header-template-title {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1; }\n  .table-header-template .active .icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n/* TODO css drilldown column template */\n.drilldown-report .flex-table-row .flex-table-column:first-child span {\n  cursor: pointer; }\n\n.drill-level-max .flex-table-row .flex-table-column:first-child span {\n  cursor: default; }\n\n.drill-level-max .flex-table-row .flex-table-column:first-child .drilldown-carrot {\n  display: none; }\n", ""]);

	// exports


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./table.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./table.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tableBody = undefined;var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _tableRow2 = __webpack_require__(104);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var _tableBody = exports._tableBody = function _tableBody(props) {var
		_state = props._state,_template = props._template,_callback = props._callback;
		if (_state.length === 0) {
			return (
				_react2.default.createElement('span', { className: 'no-results' }, 'No results available'));

		}

		return (
			_react2.default.createElement('div', { className: 'flex-table-body' },

				_state.map(function (row, index) {
					return (
						_react2.default.createElement(_tableRow2._tableRow, {
							key: index,
							_state: row,
							_template: _template,
							_callback: _callback,
							_index: index }));


				})));



	};

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tableColumnSortTemplate = undefined;
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //libs and utilities

	var _tableColumnSortTemplate = exports._tableColumnSortTemplate = function _tableColumnSortTemplate(content, callback, index, sort, fixedColumns, fromWhichColumn) {
	  var renderActiveState = function renderActiveState() {
	    if (index === sort.index && sort.sortOn === 'DESC') {
	      return 'carrot active';
	    } else {
	      return 'carrot';
	    }
	  };
	  var renderCarrot = function renderCarrot() {

	    return (
	      _react2.default.createElement('span', { onClick: function onClick(event) {callback(event, content, index);}, className: renderActiveState() },
	        _react2.default.createElement(_icons2.default, { name: 'down-arrow', viewBox: '0 0 2040.9 2040.9' })));


	  };
	  return (
	    _react2.default.createElement('div', { className: 'table-header-template' },
	      _react2.default.createElement('span', { className: 'table-header-template-title' }, content.label),

	      renderCarrot()));



	};

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.setUnit = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _numeral = __webpack_require__(111);var _numeral2 = _interopRequireDefault(_numeral);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var isNumeric = function isNumeric(number) {
	  return !isNaN(parseFloat(number)) && isFinite(number);
	};

	var listOfCharactersAllowedForHyphen = 3;
	var doNumberFormatting = function doNumberFormatting(number) {
	  var regExPattern = /^[\w&.%$\-]*$/;
	  if (regExPattern.test(String(number))) {
	    var stringAfterSpecialCharacterRemoved = String(number).replace(/[^\w\s]/gi, '');
	    if (stringAfterSpecialCharacterRemoved.length <= listOfCharactersAllowedForHyphen) {
	      return number;
	    } else {
	      var number2 = String(parseFloat(number)).replace(/(.)(?=(\d{3})+$)/g, '$1,');
	      if (number2 === 'NaN') {
	        return number;
	      }
	      return number2;
	    }
	  } else {
	    var number3 = String(parseFloat(number)).replace(/(.)(?=(\d{3})+$)/g, '$1,');
	    if (number3 === 'NaN') {
	      return number;
	    }
	    return number3;
	  }
	};

	/* Label Format */
	var doLabelFormatting = function doLabelFormatting(label, valueType) {
	  var formattedLabel = '';
	  if (label) {
	    formattedLabel = label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	  }
	  if (valueType) {
	    switch (valueType) {
	      case 'cur':
	        formattedLabel = Number((0, _numeral2.default)(formattedLabel)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	        break;
	      case 'pct':
	        formattedLabel = formattedLabel;
	        break;
	      default:
	      case 'unit':
	        formattedLabel = formattedLabel;
	        break;}

	  }
	  return formattedLabel;
	};

	var setUnit = exports.setUnit = function setUnit(valueType, item) {
	  var item2 = void 0;

	  if (item.label === null) {
	    return { label: '-' };
	  }

	  if (item.label === undefined) {
	    return false;
	  }

	  if (!isNumeric(item.label)) {
	    return item;
	  }

	  switch (valueType) {
	    case null:
	      item2 = item;
	      break;
	    case undefined:
	      item2 = item;
	      break;
	    case 'unit':
	      item2 = _extends(item, {
	        label: doLabelFormatting(item.label, valueType) });

	      break;
	    case 'cur':
	      item2 = _extends(item, {
	        label: '$' + doLabelFormatting(item.label, valueType) });

	      break;
	    case 'pct':
	      item2 = _extends(item, {
	        label: doLabelFormatting(item.label, valueType) + '%' });

	      break;}

	  return item2;
	};

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _lodash = __webpack_require__(24);

	__webpack_require__(116);

	var _tableRow2 = __webpack_require__(104);
	var _tableBody2 = __webpack_require__(157);
	var _tablePaginator2 = __webpack_require__(103);
	var _tableHelper = __webpack_require__(159);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs and utilities
	var
	Table = function (_React$Component) {_inherits(Table, _React$Component);
	    function Table(props) {_classCallCheck(this, Table);var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this,
	        props));

	        _this.state = {
	            paginatorArray: [] };


	        _this.paginatorIndex = 0;

	        _this.onSlideNavPaginator = _this.onSlideNavPaginator.bind(_this);
	        _this.getPaginatorVisibleIndexes = _this.getPaginatorVisibleIndexes.bind(_this);
	        _this.setTableWidth = _this.setTableWidth.bind(_this);
	        _this.setFirstColumnWidth = _this.setFirstColumnWidth.bind(_this);
	        _this.setSecondColumnWidth = _this.setSecondColumnWidth.bind(_this);

	        _this.onResizeListener = (0, _lodash.debounce)(_this.setTableWidth, 150);
	        _this.onResizeListener2 = (0, _lodash.debounce)(_this.setFirstColumnWidth, 150);
	        _this.onResizeListener3 = (0, _lodash.debounce)(_this.setSecondColumnWidth, 150);return _this;

	    }_createClass(Table, [{ key: 'componentDidMount', value: function componentDidMount()
	        {
	            this.setTableWidth();
	            this.setFirstColumnWidth();
	            this.setSecondColumnWidth();

	            this.setPaginatorArray(this.props.columns);

	            window.addEventListener('resize', this.onResizeListener, false);
	            window.addEventListener('resize', this.onResizeListener2, false);
	            window.addEventListener('resize', this.onResizeListener3, false);
	        } }, { key: 'componentDidUpdate', value: function componentDidUpdate(
	        prevProps, prevState) {

	            this.setTableWidth();
	            this.setFirstColumnWidth();
	            this.setSecondColumnWidth();

	            if ((0, _lodash.isEqual)(prevProps.columns, this.props.columns) === false) {
	                this.paginatorIndex = 0;
	                this.setPaginatorArray(this.props.columns);
	                this.resetTableSlide();
	            }

	            this.doTableSlide(prevState.paginatorVisibleIndexes, this.state.paginatorVisibleIndexes);

	            if (this.paginatorIndex === 0 && (0, _lodash.isEqual)(prevState.paginatorArray, this.state.paginatorArray) === false) {
	                this.getPaginatorVisibleIndexes(0);
	            }
	        } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
	        {
	            window.removeEventListener('resize', this.onResizeListener, false);
	            window.removeEventListener('resize', this.onResizeListener2, false);
	            window.removeEventListener('resize', this.onResizeListener3, false);
	        } }, { key: 'setPaginatorArray', value: function setPaginatorArray(
	        columns) {
	            var array = columns.map(function (item, index) {
	                return item;
	            });
	            this.setState({ paginatorArray: array });
	        } }, { key: 'getFirstColumn', value: function getFirstColumn(
	        rows) {

	            var array = [];

	            if (!rows || rows.length === 0) {
	                return array;
	            }

	            for (var i = 0; i < rows.length; i++) {
	                for (var j = 0; j < rows[i].length; j++) {
	                    array.push([rows[i][j]]);
	                    break;
	                }
	            }

	            return array;
	        } }, { key: 'getSecondColumn', value: function getSecondColumn(

	        rows) {

	            var array = [];

	            if (!rows || rows.length === 0) {
	                return array;
	            }

	            for (var i = 0; i < rows.length; i++) {
	                for (var j = 1; j < rows[i].length; j++) {
	                    array.push([rows[i][j]]);
	                    break;
	                }
	            }

	            return array;
	        } }, { key: 'setFirstColumnWidth', value: function setFirstColumnWidth()
	        {var _props =

	            this.props,columns = _props.columns,rows = _props.rows,fixedColumns = _props.fixedColumns;

	            if (!columns || !rows || rows.length === 0 || !fixedColumns) {
	                return false;
	            }

	            var divisor = Math.min(8, columns.length);

	            this.refs.firstColumnTableHeader.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.firstColumnTableBody.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.firstColumnTableFooter.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	        } }, { key: 'setSecondColumnWidth', value: function setSecondColumnWidth()
	        {var _props2 =

	            this.props,columns = _props2.columns,rows = _props2.rows,fixedColumns = _props2.fixedColumns;

	            if (!columns || !rows || rows.length === 0 || (!fixedColumns || fixedColumns == 1) && !this.refs.secondColumnTableHeader) {
	                return false;
	            }

	            var divisor = Math.min(8, columns.length);

	            this.refs.secondColumnTableHeader.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.secondColumnTableBody.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.secondColumnTableFooter.style.width = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';

	            //Position second column to the right of First one
	            this.refs.secondColumnTableBodyParent.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.secondColumnTableHeader.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';
	            this.refs.secondColumnTableFooter.style.left = Math.ceil(this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px';

	        } }, { key: 'setTableWidth', value: function setTableWidth()
	        {var

	            columns = this.props.columns;

	            if (!this.refs.slideTable || !columns) {
	                return false;
	            }

	            if (columns.length <= 8) {
	                this.refs.tableBody.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
	                this.refs.tableFooter.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
	                this.refs.tableHeader.style.width = this.refs.slideTable.getBoundingClientRect().width + 'px';
	            }
	            if (columns.length >= 9) {
	                this.refs.tableBody.style.width = this.refs.slideTable.getBoundingClientRect().width / 8 * columns.length + 'px';
	                this.refs.tableFooter.style.width = this.refs.slideTable.getBoundingClientRect().width / 8 * columns.length + 'px';
	                this.refs.tableHeader.style.width = this.refs.slideTable.getBoundingClientRect().width / 8 * columns.length + 'px';
	            }
	        } }, { key: 'resetTableSlide', value: function resetTableSlide()
	        {
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
	        } }, { key: 'doTableSlide', value: function doTableSlide(
	        prevState, state) {var _this2 = this;

	            var columnWidth = this.refs.slideTable.getBoundingClientRect().width / 8;var _refs =
	            this.refs,tableHeader = _refs.tableHeader,tableBody = _refs.tableBody,tableFooter = _refs.tableFooter;

	            this.getPaginatorIndex = function () {
	                if (0 >= _this2.paginatorIndex - 3) {
	                    return 0;
	                } else {
	                    return _this2.paginatorIndex - 3;
	                }
	            };

	            var offsetIndex = this.getPaginatorIndex();

	            tableHeader.style.transition = 'transform 1s';
	            tableHeader.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';
	            tableHeader.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';

	            tableBody.style.transition = 'transform 1s';
	            tableBody.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';
	            tableBody.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';

	            tableFooter.style.transition = 'transform 1s';
	            tableFooter.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';
	            tableFooter.style.transform = 'translateX(-' + columnWidth * offsetIndex + 'px)';

	        } }, { key: 'getPaginatorVisibleIndexes', value: function getPaginatorVisibleIndexes(
	        paginatorIndex) {

	            var array = this.state.paginatorArray.map(function (item, index) {
	                if (index <= 3 && paginatorIndex <= 3) {
	                    return true;
	                }
	                if (index >= paginatorIndex - 3 && index <= paginatorIndex && paginatorIndex >= 3) {
	                    return true;
	                } else {
	                    return false;
	                }
	            });

	            this.setState({ paginatorArray: array });

	            this.paginatorIndex = paginatorIndex;
	        } }, { key: 'setTableRows', value: function setTableRows(
	        rows, columns) {

	            if (!rows || rows.length === 0) {
	                return [];
	            }
	            var rows2 = rows.map(function (row, index) {
	                return row.map(function (item, index) {
	                    return (0, _tableHelper.setUnit)(columns[index].valueType, item);
	                });
	            });
	            return rows2;
	        } }, { key: 'setFooterRow', value: function setFooterRow(
	        row, columns) {
	            if (row.length === 0 || !row) {
	                return [];
	            }

	            return row.map(function (item, index) {
	                return (0, _tableHelper.setUnit)(columns[index].valueType, item);
	            });
	        } }, { key: 'onSlideNavPaginator', value: function onSlideNavPaginator(
	        event, index) {
	            this.getPaginatorVisibleIndexes(index);
	        } }, { key: 'renderFirstColumnHeader', value: function renderFirstColumnHeader()
	        {var _props3 =

	            this.props,columns = _props3.columns,_index = _props3._index,_callback = _props3._callback,_template = _props3._template,fixedColumns = _props3.fixedColumns;var
	            tableHeaderTemplate = _template.tableHeaderTemplate;var
	            tableHeaderCallback = _callback.tableHeaderCallback;

	            if (!fixedColumns || !columns) {
	                return false;
	            }

	            var divisor = Math.min(8, columns.length);
	            var firstColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'flex-table-header first-column-header', ref: 'firstColumnTableHeader', style: _extends(this.applyStyle('first-column-header'), { 'width': firstColumnBodyWidth }) },
	                    _react2.default.createElement(_tableRow2._tableRow, {
	                        _index: _index,
	                        _state: [columns[0]],
	                        _template: tableHeaderTemplate,
	                        _callback: tableHeaderCallback,
	                        _fixedColumns: fixedColumns,
	                        _fromWhichColumn: 1 })));



	        } }, { key: 'renderSecondColumnHeader', value: function renderSecondColumnHeader()

	        {var _props4 =

	            this.props,columns = _props4.columns,_index = _props4._index,_callback = _props4._callback,_template = _props4._template,fixedColumns = _props4.fixedColumns;var
	            tableHeaderTemplate = _template.tableHeaderTemplate;var
	            tableHeaderCallback = _callback.tableHeaderCallback;

	            if (!fixedColumns || fixedColumns == 1 || !columns) {
	                return false;
	            }

	            var divisor = Math.min(8, columns.length);
	            var secondHeaderWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'flex-table-header second-column-header', ref: 'secondColumnTableHeader', style: { 'width': secondHeaderWidth, left: secondHeaderWidth } },
	                    _react2.default.createElement(_tableRow2._tableRow, {
	                        _index: _index,
	                        _state: [columns[1]],
	                        _template: tableHeaderTemplate,
	                        _callback: tableHeaderCallback,
	                        _fixedColumns: fixedColumns,
	                        _fromWhichColumn: 2 })));



	        } }, { key: 'renderFirstColumnBody', value: function renderFirstColumnBody()

	        {var _props5 =
	            this.props,rows = _props5.rows,fixedColumns = _props5.fixedColumns,_template = _props5._template,_callback = _props5._callback;var
	            tableBodyTemplate = _template.tableBodyTemplate;var
	            tableBodyCallback = _callback.tableBodyCallback;

	            if (!rows || !rows[0] || rows.length === 0 || !fixedColumns) {
	                return false;
	            }

	            var rowlength = rows[0] ? rows[0].length : 8;
	            var divisor = Math.min(8, rowlength);
	            var firstColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'first-column', style: { 'width': firstColumnBodyWidth } },
	                    _react2.default.createElement('div', { className: 'flex-table-body', ref: 'firstColumnTableBody' },
	                        _react2.default.createElement(_tableBody2._tableBody, {
	                            _state: this.getFirstColumn(rows),
	                            _template: tableBodyTemplate,
	                            _callback: tableBodyCallback }))));




	        } }, { key: 'renderSecondColumnBody', value: function renderSecondColumnBody()

	        {var _props6 =

	            this.props,rows = _props6.rows,fixedColumns = _props6.fixedColumns;

	            if (!rows || !rows[0] || rows.length === 0 || !fixedColumns || fixedColumns == 1) {
	                return false;
	            }

	            var rowlength = rows[0] ? rows[0].length : 8;
	            var divisor = Math.min(8, rowlength);
	            var secondColumnBodyWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'first-column second-column', ref: 'secondColumnTableBodyParent', style: { 'width': secondColumnBodyWidth, left: secondColumnBodyWidth } },
	                    _react2.default.createElement('div', { className: 'flex-table-body', ref: 'secondColumnTableBody' },
	                        _react2.default.createElement(_tableBody2._tableBody, { _state: this.getSecondColumn(rows) }))));



	        } }, { key: 'renderFirstColumnFooter', value: function renderFirstColumnFooter()
	        {var _props7 =
	            this.props,footer = _props7.footer,fixedColumns = _props7.fixedColumns;

	            if (!fixedColumns || !footer) {
	                return false;
	            }

	            var divisor = Math.min(8, footer.length);
	            var firstColumnFooterWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'flex-table-footer first-column-footer', ref: 'firstColumnTableFooter', style: _extends(this.applyStyle('first-column-footer'), { 'width': firstColumnFooterWidth }) },
	                    _react2.default.createElement(_tableRow2._tableRow, { _state: [footer[0]] })));


	        } }, { key: 'renderSecondColumnFooter', value: function renderSecondColumnFooter()

	        {var _props8 =
	            this.props,footer = _props8.footer,fixedColumns = _props8.fixedColumns;

	            if (!fixedColumns || fixedColumns == 1 || !footer) {
	                return false;
	            }

	            var divisor = Math.min(8, footer.length);
	            var secondColumnFooterWidth = Math.ceil(this.refs.slideTable && this.refs.slideTable.getBoundingClientRect().width / divisor) + 'px' || 0;

	            return (
	                _react2.default.createElement('div', { className: 'flex-table-footer second-column-footer', ref: 'secondColumnTableFooter', style: { 'width': secondColumnFooterWidth, left: secondColumnFooterWidth } },
	                    _react2.default.createElement(_tableRow2._tableRow, { _state: [footer[1]] })));


	        } }, { key: 'renderSlideNavPaginator', value: function renderSlideNavPaginator()

	        {var
	            columns = this.props.columns;

	            if (columns.length <= 8 || !columns) {
	                return false;
	            }

	            return (
	                _react2.default.createElement(_tablePaginator2._tablePaginator, {
	                    _callback: this.onSlideNavPaginator,
	                    _state: this.state.paginatorArray }));


	        } }, { key: 'applyStyle', value: function applyStyle(

	        className) {
	            if (this.props.styleCallback) {
	                return this.props.styleCallback(className);
	            } else {
	                return {};
	            }
	        } }, { key: 'render', value: function render()

	        {var _props9 =
	            this.props,columns = _props9.columns,rows = _props9.rows,footer = _props9.footer,_callback = _props9._callback,_index = _props9._index,_lastUpdated = _props9._lastUpdated,_template = _props9._template,fixedColumns = _props9.fixedColumns;var
	            tableHeaderTemplate = _template.tableHeaderTemplate,tableBodyTemplate = _template.tableBodyTemplate;var
	            tableHeaderCallback = _callback.tableHeaderCallback,tableBodyCallback = _callback.tableBodyCallback;

	            return (
	                _react2.default.createElement('div', { className: 'slide-table-container' },
	                    _react2.default.createElement('div', { className: 'slide-table-utility' },
	                        _react2.default.createElement('span', null, 'Updated as of: ', _lastUpdated), this.renderSlideNavPaginator()),

	                    _react2.default.createElement('div', { className: 'slidable-table-container' },
	                        _react2.default.createElement('div', { className: 'slidable-header', style: this.applyStyle('slidable-header') },
	                            _react2.default.createElement('div', { className: 'flex-table-header', ref: 'tableHeader', style: this.applyStyle('flex-table-header') },
	                                _react2.default.createElement(_tableRow2._tableRow, {
	                                    _index: _index,
	                                    _state: columns,
	                                    _template: tableHeaderTemplate,
	                                    _callback: tableHeaderCallback,
	                                    _fixedColumns: fixedColumns })),


	                            this.renderFirstColumnHeader(columns),
	                            this.renderSecondColumnHeader(columns)),

	                        _react2.default.createElement('div', { className: 'slidable-table', ref: 'slideTable' },
	                            _react2.default.createElement('div', { className: 'flex-table-body', ref: 'tableBody' },
	                                _react2.default.createElement(_tableBody2._tableBody, {
	                                    _state: this.setTableRows(rows, columns),
	                                    _template: tableBodyTemplate,
	                                    _callback: tableBodyCallback })),


	                            this.renderFirstColumnBody(),
	                            this.renderSecondColumnBody()),

	                        _react2.default.createElement('div', { className: 'slidable-footer', style: this.applyStyle('slidable-footer') },
	                            _react2.default.createElement('div', { className: 'flex-table-footer', ref: 'tableFooter', style: this.applyStyle('flex-table-footer') },
	                                _react2.default.createElement(_tableRow2._tableRow, { _state: this.setFooterRow(footer, columns) })),

	                            this.renderFirstColumnFooter(),
	                            this.renderSecondColumnFooter()))));




	        } }]);return Table;}(_react2.default.Component);exports.default = Table;


	module.exports = Table;

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tableColumnDrilldownTemplate = undefined;
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //libs and utilities

	var _tableColumnDrilldownTemplate = exports._tableColumnDrilldownTemplate = function _tableColumnDrilldownTemplate(content, callback, index) {

		var renderCarrot = function renderCarrot(label, index) {

			if (index === 0 && label) {
				return (
					_react2.default.createElement('span', { className: 'drilldown-carrot' },
						_react2.default.createElement(_icons2.default, { name: 'right-arrow', viewBox: '0 0 25 25' })));


			}
			return false;
		};

		var renderCallback = function renderCallback(content, callback, index) {

			if (index === 0 && content.label) {
				return (
					_react2.default.createElement('div', { className: 'table-column-drilldown-template' },
						_react2.default.createElement('span', { onClick: function onClick(event) {callback(event, content);} },
							content.label),

						renderCarrot(content.label, index)));


			} else {
				return (
					_react2.default.createElement('div', { className: 'table-column-drilldown-template' },
						_react2.default.createElement('span', null,
							content.label),

						renderCarrot(content.label, index)));


			}

		};

		return (
			_react2.default.createElement('div', null,
				renderCallback(content, callback, index)));


	};

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _reactRouter = __webpack_require__(31);

	var _utils = __webpack_require__(13);

	var _scorecardActionCreators = __webpack_require__(73);

	var _tableColumnSortTemplate2 = __webpack_require__(158);
	var _tableColumnDrilldownTemplate2 = __webpack_require__(492);
	var _scorecardHelper = __webpack_require__(74);

	var _errorMessage = __webpack_require__(37);var _errorMessage2 = _interopRequireDefault(_errorMessage);
	var _table = __webpack_require__(160);var _table2 = _interopRequireDefault(_table);

	var _appLang = __webpack_require__(19);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //lings
	//utils
	//actionsCreators
	//templates and helpers
	//shared
	//lang
	/*******************************************************************************
	 *  1. ScorecardDrilldownReport
	 *  2. _drilldown
	 */var DRILLDOWN_DEFAULT_CRITERIA = { dateCode: null, date: null,
		sortBy: null,
		sortOn: 'ASC',
		report: null,
		drillLevel: 3,
		drillId: null,
		rank: null,
		rankType: null,
		showRank: null };


	/*
	                    * 1. ScorecardDrilldownReport
	                    */
	var ScorecardDrilldownReport = (0, _utils.connectAndMap)(['views.scorecardView'], { getDrilldownData: _scorecardActionCreators.getDrilldownData, getReportFilterData: _scorecardActionCreators.getReportFilterData, getRepFilterData: _scorecardActionCreators.getRepFilterData, getFilterData: _scorecardActionCreators.getFilterData })(function (_React$Component) {_inherits(_class, _React$Component);

		function _class(props) {_classCallCheck(this, _class);var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this,
			props));

			_this.state = {
				drilldownIndex: 2,
				drilldownReportLabel: undefined,
				drilldownReportId: undefined,
				drilldownSort: {
					index: 0,
					sortOn: 'ASC' },

				hierarchyLevel: undefined,
				maxHierarchyLevel: undefined,
				drilldownRankTypeId: undefined,
				drilldownRankTypeLabel: undefined,
				drilldownShowRankId: undefined,
				drilldownShowRankLabel: undefined,
				dateFilters: undefined,
				reportFilters: undefined };


			_this.onSort = _this.onSort.bind(_this);
			_this.onDrilldown = _this.onDrilldown.bind(_this);
			_this.onDrilldownReport = _this.onDrilldownReport.bind(_this);
			_this.renderTableHeaderFooterColor = _this.renderTableHeaderFooterColor.bind(_this);return _this;
		}_createClass(_class, [{ key: 'componentDidMount', value: function componentDidMount()
			{var _this2 = this;
				if (!this.props.scorecardView.criteria && !DISPLAY_DRILLDOWN_AS_SELECTED) {
					return _reactRouter.browserHistory.push(APP_PATH + '/scorecard/gauges/graph');
				}

				this.fetchDataInterval = setInterval(function () {_this2.checkIfPeriodAvailalbe();}, 100);
			} }, { key: 'checkIfPeriodAvailalbe', value: function checkIfPeriodAvailalbe()

			{
				if (this.props.scorecardPeriodLabel) {
					clearInterval(this.fetchDataInterval);
					this.fetchInitialData();
				}
			} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

			nextProps, nextState) {var _state =







				this.state,dateFilters = _state.dateFilters,reportFilters = _state.reportFilters,hierarchyLevel = _state.hierarchyLevel,maxHierarchyLevel = _state.maxHierarchyLevel,drilldownRankTypeId = _state.drilldownRankTypeId;


				if (!hierarchyLevel && !maxHierarchyLevel) {
					this.setState({ 'hierarchyLevel': Number(nextProps.scorecardView.hierarchyLevel), 'maxHierarchyLevel': Number(nextProps.scorecardView.maxHierarchyLevel) });
				}

				if (!reportFilters && this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0) {
					this.setState({ 'reportFilters': this.props.scorecardView.reportFilters });
				}

				if (nextProps.scorecardDrilldownRankTypeId) {
					this.setState({ 'drilldownRankTypeId': nextProps.scorecardDrilldownRankTypeId });
				}

				if (nextProps.scorecardDrilldownShowRankId) {
					this.setState({ 'drilldownShowRankId': nextProps.scorecardDrilldownShowRankId });
				}

			} }, { key: 'componentDidUpdate', value: function componentDidUpdate(
			prevProps, prevState) {

				if (!this.props.scorecardView.drilldownReport || !prevProps.scorecardView.drilldownReport) {
					return false;
				}

				this.renderTableHeaderFooterColor();

				/* Double Ajax call issue fixed */

				if (this.shouldFetchData(prevProps)) {

					var criteria = _extends(this.props.scorecardView.drilldownReport.criteria, {
						date: this.getSelectedDate(),
						dateCode: this.getSelectedDateCode(),
						report: this.getReportId('selected'),
						rankType: this.props.scorecardDrilldownRankTypeId,
						showRank: this.props.scorecardDrilldownShowRankId,
						drillId: this.getDrillId(prevProps),
						drilldownCarot: null });


					return this.fetchData(criteria);
				}
			} }, { key: 'shouldFetchData', value: function shouldFetchData(

			prevProps) {

				if (!location.pathname.includes('drilldown-report')) {
					return false;
				}

				if (
				prevProps.scorecardPeriodLabel && prevProps.scorecardPeriodLabel !== this.props.scorecardPeriodLabel ||
				prevProps.scorecardDrilldownDropdownLabel && prevProps.scorecardDrilldownDropdownLabel !== this.props.scorecardDrilldownDropdownLabel ||
				prevProps.scorecardDrilldownRankTypeId && prevProps.scorecardDrilldownRankTypeId !== this.props.scorecardDrilldownRankTypeId ||
				prevProps.scorecardDrilldownShowRankId && prevProps.scorecardDrilldownShowRankId !== this.props.scorecardDrilldownShowRankId)
				{
					return true;
				}

				return false;
			} }, { key: 'getSelectedDateCode', value: function getSelectedDateCode()

			{
				if (this.props.scorecardDateTabs && this.props.scorecardDateTabs.length > 0) {
					return (0, _scorecardHelper.getDateCode)(this.props.scorecardDateTabs, this.props.scorecardDateIndex);
				}
				return null;
			} }, { key: 'getSelectedDate', value: function getSelectedDate()

			{
				if (this.props.scorecardView.dateFilters && this.props.scorecardView.dateFilters.length > 0) {
					return (0, _scorecardHelper.getFilterId)(this.props.scorecardView.dateFilters, this.props.scorecardPeriodLabel);
				}
				return null;
			} }, { key: 'getReportByDefault', value: function getReportByDefault()


			{

				if (this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length > 0) {
					return this.props.scorecardView.reportFilters[0].id;
				} else {
					return null;
				}
			} }, { key: 'getReportId', value: function getReportId(

			argument) {

				if (argument === 'selected' && this.state.reportFilters.length > 0) {
					return (0, _scorecardHelper.getFilterId)(this.state.reportFilters, this.props.scorecardDrilldownDropdownLabel);
				}

				if (argument === 'default') {
					return this.getReportByDefault();
				}
			} }, { key: 'retrieveDrillId', value: function retrieveDrillId()


			{

				if (this.props.scorecardView.drilldownReport && this.props.scorecardView.drilldownReport.drilldown) {
					var drilldownStoredItem = this.props.scorecardView.drilldownReport.drilldown;
					if (drilldownStoredItem.length) {
						//To do: change this approach to take the value from an array
						return drilldownStoredItem[drilldownStoredItem.length - 1].code;
					}
				}

				return null;
			} }, { key: 'getDrillId', value: function getDrillId(

			prevProps) {

				if (!prevProps.scorecardPeriodLabel) {
					return null;
				}
				return this.retrieveDrillId();
			} }, { key: 'fetchInitialData', value: function fetchInitialData()
			{var _this3 = this;
				var self = this;
				var intialRequest = void 0;
				if (DISPLAY_DRILLDOWN_AS_SELECTED && !this.props.scorecardView.criteria) {
					intialRequest = DRILLDOWN_DEFAULT_CRITERIA;
				} else {
					intialRequest = this.props.scorecardView.criteria;
				}

				if (DISPLAY_DRILLDOWN_AS_SELECTED && this.props.scorecardView.reportFilters && this.props.scorecardView.reportFilters.length) {
					this.props.getFilterData({ dateCode: this.props.scorecardView.reportFilters[0].defaultValue }).done(function (response) {
						if (response && response.success) {
							if (response.data && response.data.dateNav && response.data.dateNav.length) {
								var criteria = _extends(intialRequest, {
									date: response.data.dateNav[0].id,
									dateCode: _this3.props.scorecardView.reportFilters[0].defaultValue,
									report: _this3.getReportId('default'),
									drillLevel: _this3.state.hierarchyLevel,
									drilldownCarot: null,
									drillId: null });

								self.props.getDrilldownData(criteria);
							}
						}
					});
				} else {
					this.props.getReportFilterData().done(function () {
						var criteria = _extends(intialRequest, {
							date: null,
							report: _this3.getReportId('default'),
							drillLevel: _this3.state.hierarchyLevel,
							drilldownCarot: null,
							drillId: null });

						self.props.getDrilldownData(criteria);
					});
				}
			} }, { key: 'fetchData', value: function fetchData(
			criteria) {
				this.props.getDrilldownData(criteria);
			} }, { key: 'onDrilldown', value: function onDrilldown(
			event, index, item) {

				var criteria = _extends(this.props.scorecardView.drilldownReport.criteria, {
					drillLevel: index + 1,
					drillId: item.code || null,
					drilldownCarot: null,
					drillBreadCrumb: true });


				this.fetchData(criteria);
			} }, { key: 'onDrilldownReport', value: function onDrilldownReport(
			event, data) {var


				maxHierarchyLevel =
				this.state.maxHierarchyLevel;

				if (this.props.scorecardView.criteria.drillLevel >= maxHierarchyLevel) {
					return false;
				}

				var criteria = _extends(this.props.scorecardView.drilldownReport.criteria, {
					drillLevel: this.props.scorecardView.drilldownReport.criteria.drillLevel + 1,
					drillId: data.id });


				this.fetchData(criteria);

			} }, { key: 'onSort', value: function onSort(
			event, item, index) {

				if (index !== this.state.drilldownSort.index) {

					this.setState({ drilldownSort: { index: index, sortOn: 'DESC' } });

					var criteria = _extends(this.props.scorecardView.drilldownReport.criteria, {
						sortBy: item.code,
						sortOn: 'DESC',
						drilldownCarot: null,
						drillId: this.retrieveDrillId() });

					return this.fetchData(criteria);
				}

				if (this.state.drilldownSort.sortOn === 'ASC') {

					this.setState({ drilldownSort: { index: index, sortOn: 'DESC' } });

					var _criteria = _extends(this.props.scorecardView.drilldownReport.criteria, {
						sortBy: item.code,
						sortOn: 'DESC',
						drilldownCarot: null,
						drillId: this.retrieveDrillId() });

					return this.fetchData(_criteria);

				} else {

					this.setState({ drilldownSort: { index: index, sortOn: 'ASC' } });

					var _criteria2 = _extends(this.props.scorecardView.drilldownReport.criteria, {
						sortBy: item.code,
						sortOn: 'ASC',
						drilldownCarot: null,
						drillId: this.retrieveDrillId() });

					return this.fetchData(_criteria2);
				}
			} }, { key: 'renderDrillLevel', value: function renderDrillLevel()

			{var

				maxHierarchyLevel =
				this.state.maxHierarchyLevel;

				if (this.props.scorecardView.drilldownReport.criteria.drillLevel < maxHierarchyLevel)
				{return 'drilldown-report drill-level-' + this.props.scorecardView.drilldownReport.criteria.drillLevel;} else

				{return 'drilldown-report drill-level-max';}
			} }, { key: 'getFixedColumns', value: function getFixedColumns()
			{var _state2 =



				this.state,drilldownRankTypeLabel = _state2.drilldownRankTypeLabel,drilldownRankTypeId = _state2.drilldownRankTypeId;

				var fColumn = 0;

				if (!drilldownRankTypeId) {
					fColumn = 0;
				}

				var drilldownRankType = drilldownRankTypeId && drilldownRankTypeId.toUpperCase() || null;

				switch (drilldownRankType) {
					case 'PAX':
						fColumn = 2;
						break;
					case 'OFFICE':
						fColumn = 1;
						break;
					default:
						fColumn = 1;
						break;}


				return fColumn;
			} }, { key: 'renderTableHeaderFooterColor', value: function renderTableHeaderFooterColor(
			className) {
				//TODO add modulus operator
				var localProps = this.props;

				var index = (0, _scorecardHelper.getFilterIndex)(localProps.scorecardView.reportFilters, localProps.scorecardDrilldownDropdownLabel);

				var getColor = function getColor(index) {
					switch (index) {
						case 0:
							return 'rgb(171, 224, 249)';
							break;
						case 1:
							return 'rgb(114, 180, 149)';
							break;
						case 2:
							return 'rgb(224, 188, 87)';
							break;
						case 3:
							return 'rgb(249, 178, 148)';
							break;
						case 4:
							return 'rgb(171, 224, 249)';
							break;
						case 5:
							return 'rgb(114, 180, 149)';
							break;
						case 6:
							return 'rgb(249, 178, 148)';
							break;}

				};

				var classes_we_recolor = ['slidable-header', 'slidable-footer', 'flex-table-header', 'flex-table-footer', 'first-column-header', 'first-column-footer'];

				if (classes_we_recolor.find(function (value) {return value === className;})) {
					return {
						//backgroundColor: getColor( index )
					};
				} else {
					return {};
				}
			} }, { key: 'showDrilldownReportError', value: function showDrilldownReportError()

			{var _props$scorecardView =




				this.props.scorecardView,message = _props$scorecardView.message,errorDrilldown = _props$scorecardView.errorDrilldown,reportFilters = _props$scorecardView.reportFilters;

				var errorMessage = message;
				var errorOn = errorDrilldown;
				var drillNoReportMessage = _appLang.SCORECARD_MODULE.NO_REPORT_MESSAGE;

				if (!errorDrilldown && reportFilters && !reportFilters.length) {
					errorOn = true;
					errorMessage = drillNoReportMessage;
				}

				return (
					errorOn && _react2.default.createElement(_errorMessage2.default, { message: errorMessage }));

			} }, { key: 'renderDrilldownReport', value: function renderDrilldownReport()

			{var _props$scorecardView2 =









				this.props.scorecardView,message = _props$scorecardView2.message,errorDrilldown = _props$scorecardView2.errorDrilldown,drilldownReport = _props$scorecardView2.drilldownReport,drilldownLoadCount = _props$scorecardView2.drilldownLoadCount,color = _props$scorecardView2.color,reportFilters = _props$scorecardView2.reportFilters,rankType = _props$scorecardView2.rankType,showRank = _props$scorecardView2.showRank;var


				drilldownRankTypeId =
				this.state.drilldownRankTypeId;

				if (!drilldownReport || !reportFilters || !drilldownReport.drilldown || !rankType || !showRank || !drilldownRankTypeId) {
					return false;
				} else {

					return (

						_react2.default.createElement('div', { className: 'scorecard-drilldown-report' },
							_react2.default.createElement('div', { className: this.renderDrillLevel() },
								_react2.default.createElement(_drilldown, {
									_state: drilldownReport.drilldown,
									_callback: this.onDrilldown,
									_index: this.state.drilldownIndex }),

								_react2.default.createElement(_table2.default, {
									_callback:
									{
										tableHeaderCallback: this.onSort,
										tableBodyCallback: this.onDrilldownReport },


									_index: this.state.drilldownSort,
									_lastUpdated: (0, _scorecardHelper.convertEstTimeToUserTimeZone)(drilldownReport.lastUpdated),
									_template:
									{
										tableHeaderTemplate: _tableColumnSortTemplate2._tableColumnSortTemplate,
										tableBodyTemplate: _tableColumnDrilldownTemplate2._tableColumnDrilldownTemplate },


									ref: 'table',
									hierarchyLevel: this.state.hierarchyLevel,
									drilldownLoadCount: drilldownLoadCount,
									drillLevel: this.state.maxHierarchyLevel,
									fixedColumns: this.getFixedColumns(),
									columns: drilldownReport.columns,
									rows: drilldownReport.rows,
									footer: drilldownReport.totals,
									color: color,
									styleCallback: this.renderTableHeaderFooterColor }))));




				}

			} }, { key: 'render', value: function render()

			{var

				scorecardView =
				this.props.scorecardView;

				if (scorecardView && scorecardView.errorDrilldown || scorecardView.reportFilters && !scorecardView.reportFilters.length) {
					return this.showDrilldownReportError();
				} else {
					return this.renderDrilldownReport();
				}

			} }]);return _class;}(_react2.default.Component));



	/*
	                                                      * 2. _drilldown
	                                                      */
	var _drilldown = function _drilldown(props) {

		if (!props._state) {
			return false;
		}

		return (
			_react2.default.createElement('ul', { className: 'drilldown' },

				props._state.map(function (item, index) {
					return (
						_react2.default.createElement('li', {
								key: index,
								onClick: function onClick(event) {props._callback(event, index, item);} },
							item.label, ' ', _react2.default.createElement('span', null, ' > ')));


				})));



	};exports.default =

	ScorecardDrilldownReport;

/***/ }

});
//# sourceMappingURL=ScorecardDrilldownReport.js.map