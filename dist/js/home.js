webpackJsonp([10,13],{

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

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.Home {\n  height: 100%;\n  width: 100%;\n  padding: 0 2.1875rem 0 3.125rem; }\n  .Home .module-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n            flex-flow: row wrap;\n    height: 100%;\n    width: 100%; }\n    .Home .module-container .module-wrapper {\n      width: 100%;\n      height: 100%;\n      float: left;\n      margin-right: 1rem; }\n      .Home .module-container .module-wrapper:nth-child(2) {\n        width: 33%;\n        float: left;\n        margin-right: 0; }\n      .Home .module-container .module-wrapper:nth-child(3) {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 100%;\n                flex: 0 100%;\n        margin-bottom: 0; }\n      .Home .module-container .module-wrapper .module-grid {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-flex-wrap: wrap;\n                flex-wrap: wrap; }\n        .Home .module-container .module-wrapper .module-grid.double {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: column;\n                  flex-direction: column;\n          min-width: 100%;\n          height: 60.5%;\n          margin-bottom: 1rem; }\n          .Home .module-container .module-wrapper .module-grid.double:nth-of-type(2) {\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            height: 35%;\n            margin-bottom: 0; }\n          .Home .module-container .module-wrapper .module-grid.double .half {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-flex: 0;\n            -webkit-flex: 0 0 auto;\n                    flex: 0 0 auto;\n            height: 100%;\n            width: 50%;\n            padding-right: 1rem; }\n            .Home .module-container .module-wrapper .module-grid.double .half:last-of-type {\n              padding-right: 0; }\n        .Home .module-container .module-wrapper .module-grid.single {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: row;\n                  flex-direction: row;\n          width: 100%;\n          height: 100%;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%; }\n  .Home .Home_cell:after {\n  content: '';\n  display: block;\n  clear: both; }\n  .Home .Home_cell {\n    min-width: 100%;\n    position: relative; }\n    .Home .Home_cell .Home_cellInner {\n      width: 100%;\n      background-color: #FFF; }\n      .Home .Home_cell .Home_cellInner .Home_cellContent {\n        background-color: #FFF;\n        position: absolute;\n        width: 100%;\n        height: 100%; }\n  .Home .Home_cell .background-holder {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-color: #e4e5e3;\n    position: relative; }\n", ""]);

	// exports


/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._selectBox = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(58);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

	_selectBox = exports._selectBox = function (_React$Component) {_inherits(_selectBox, _React$Component);

	  function _selectBox(props) {_classCallCheck(this, _selectBox);var _this = _possibleConstructorReturn(this, (_selectBox.__proto__ || Object.getPrototypeOf(_selectBox)).call(this,
	    props));_initialiseProps.call(_this);

	    _this.state = {
	      open: false };return _this;

	  }

	  // if( !props._state ) {
	  //   return false;
	  // }
	  _createClass(_selectBox, [{ key: 'render', value: function render()















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

	    } }]);return _selectBox;}(_react2.default.Component);var _initialiseProps = function _initialiseProps() {var _this3 = this;this.renderLabel = function (props) {if (!props._label) {return props._state[0] && props._state[0].site_name + ' ' + props._state[0].site_city;}return props._label;};this.openDropdown = function () {_this3.setState({ open: true });};this.closeDropdown = function (event) {_this3.setState({ open: false });};};var



	_dropdownList = function (_React$Component2) {_inherits(_dropdownList, _React$Component2);function _dropdownList() {var _ref;var _temp, _this2, _ret;_classCallCheck(this, _dropdownList);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _dropdownList.__proto__ || Object.getPrototypeOf(_dropdownList)).call.apply(_ref, [this].concat(args))), _this2), _this2.






	    renderList = function (props) {
	      return props._state.map(function (item, index) {
	        return (
	          _react2.default.createElement('li', { key: index },
	            _react2.default.createElement('span', { onClick: function onClick(event) {
	                  props._callback(event, item.site_id, item.site_name, item.site_city);
	                  _this2.props.closeDropdown(false);
	                } }, item.site_name + ' ' + item.site_city),
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
	            _react2.default.createElement('span', { onClick: function onClick(event) {_this2.props._callback(event, item.site_id, item.site_name, item.site_city);} }, item.site_name + ' ' + item.site_city),
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

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);

	var _dashboard = __webpack_require__(501);var _dashboard2 = _interopRequireDefault(_dashboard);


	var _utils = __webpack_require__(13);

	__webpack_require__(92);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // module imports
	//utils
	//scss
	/*******************************************************************************
	 *  1. Home
	 *  2. HomeCell
	 */
	/*
	     * 1. Home
	     */
	var Home = (0, _utils.connectAndMap)(
	['app'],
	null)(function (_React$Component) {_inherits(_class, _React$Component);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: 'render', value: function render()


	        {var _props$app =


	            this.props.app,loading = _props$app.loading,loaded = _props$app.loaded;
	            return (
	                _react2.default.createElement('div', { className: 'Home' },
	                    _react2.default.createElement('div', { className: 'module-container' },
	                        _react2.default.createElement('div', { className: 'module-wrapper' },
	                            _react2.default.createElement('div', { className: 'module-grid single' },
	                                _react2.default.createElement(HomeCell, { module: 'scorecardmodule' },
	                                    _react2.default.createElement(_dashboard2.default, null)))))));






	        } }]);return _class;}(_react2.default.Component));



	/*
	                                                            * 1. HomeCell
	                                                            */
	var HomeCell = function HomeCell(props) {return (
	        _react2.default.createElement('div', { className: 'Home_cell Home_cell--' + props.module },
	            _react2.default.createElement('div', { className: 'Home_cellInner' },
	                _react2.default.createElement('div', { className: 'Home_cellContent' },
	                    props.children))));};exports.default =





	Home;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _reactRouter = __webpack_require__(31);
	var _redux = __webpack_require__(72);
	var _reactRedux = __webpack_require__(141);
	var _dashboardActionsReducers = __webpack_require__(230);
	var _selectbox = __webpack_require__(483);
	var _dropdown2 = __webpack_require__(59);

	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);
	var _classnames = __webpack_require__(65);var _classnames2 = _interopRequireDefault(_classnames);
	var _moment = __webpack_require__(1);var _moment2 = _interopRequireDefault(_moment);
	var _reactAddonsCssTransitionGroup = __webpack_require__(140);var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);


	__webpack_require__(966);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //scss

	var ProjectDeleteModify = [
	{
	    'label': 'Delete',
	    'id': 'delete',
	    'value': 'Delete' },

	{
	    'label': 'Modify',
	    'id': 'modify',
	    'value': 'Modify' }];


	/*
	                           *  1. Dashboard
	                           */var

	DashboardModule = function (_React$Component) {_inherits(DashboardModule, _React$Component);

	    function DashboardModule(props) {_classCallCheck(this, DashboardModule);var _this = _possibleConstructorReturn(this, (DashboardModule.__proto__ || Object.getPrototypeOf(DashboardModule)).call(this,
	        props));

	        _this.eventsTimeOut;
	        _this.onProjectSelection = _this.onProjectSelection.bind(_this);
	        _this.onProjectActions = _this.onProjectActions.bind(_this);
	        _this.onDashboardTileClick = _this.onDashboardTileClick.bind(_this);
	        _this.onTileClickToggleItem = _this.onTileClickToggleItem.bind(_this);
	        _this.checkIfDashboardLocationsIsAvailable = _this.checkIfDashboardLocationsIsAvailable.bind(_this);return _this;
	    }_createClass(DashboardModule, [{ key: 'componentDidMount', value: function componentDidMount()

	        {var _this2 = this;

	            var self = this;
	            this.eventsTimeOut = setInterval(
	            function () {
	                _this2.checkIfDashboardLocationsIsAvailable();
	            }, 1000);

	        } }, { key: 'componentWillMount', value: function componentWillMount()

	        {
	            this.props.actions.getDashboardProjectsData({ session: this.props.app.session, user: this.props.app.user });
	            this.props.actions.getDashboardLocationsData({ session: this.props.app.session, user: this.props.app.user });
	        } }, { key: 'componentWillUnmount', value: function componentWillUnmount()

	        {
	            clearInterval(this.eventsTimeOut);
	        } }, { key: 'onProjectSelection', value: function onProjectSelection(

	        event, id, name, city) {
	            //debugger;
	        } }, { key: 'onProjectActions', value: function onProjectActions(

	        event, id, name) {

	        } }, { key: 'onDashboardTileClick', value: function onDashboardTileClick(

	        info) {
	            _reactRouter.browserHistory.push(APP_PATH + '/zone/' + info.location_id);
	        } }, { key: 'onTileClickToggleItem', value: function onTileClickToggleItem(

	        info) {
	            this.props.actions.showToggleItems(info);
	        } }, { key: 'checkIfDashboardLocationsIsAvailable', value: function checkIfDashboardLocationsIsAvailable()

	        {var

	            dashboard =
	            this.props.dashboard;

	            var self = this;
	            if (dashboard && dashboard.data) {
	                var dashboardResults = dashboard.data;
	                var dashboardLocations = dashboardResults.locations;
	                if (dashboardLocations && dashboardLocations.length > 0) {
	                    clearInterval(this.eventsTimeOut);
	                    for (var i = 0; i < dashboardLocations.length; i++) {
	                        //To do: Make Locations Events call
	                        self.props.actions.getDashboardLocationEventsData(
	                        {
	                            session: self.props.app.session,
	                            user: self.props.app.user,
	                            location_id: dashboardLocations[i].location_id,
	                            site_id: dashboardLocations[i].site_id });


	                    }
	                }
	            }
	        } }, { key: 'render', value: function render()
	        {var _props =








	            this.props,_props$app = _props.app,_props$app$loading = _props$app.loading,dashboardLocationsModuleData = _props$app$loading.dashboardLocationsModuleData,dashboardModuleData = _props$app$loading.dashboardModuleData,loaded = _props$app.loaded,session = _props$app.session,user = _props$app.user,viewport = _props$app.viewport,data = _props.dashboard.data;

	            if (!data) {
	                return false;
	            }

	            if (data.projects && data.projects.length > 0 && data.locations && data.locations.length > 0) {
	                return (
	                    _react2.default.createElement('div', { className: 'page-dashboard' },
	                        _react2.default.createElement('h2', null, 'Dashboard!'),
	                        _react2.default.createElement('div', { className: 'horizontal-line' }),
	                        _react2.default.createElement('div', { className: 'projects' },
	                            _react2.default.createElement(_selectbox._selectBox, {
	                                _label: data.projects[0].site_name + ' ' + data.projects[0].site_city,
	                                _state: data.projects,
	                                _callback: this.onProjectSelection }),

	                            _react2.default.createElement('div', { className: 'projects-user-actions' },
	                                _react2.default.createElement('button', { className: 'button-create button button-primary' }, 'Create \xA0'),


	                                _react2.default.createElement('div', { className: 'delete-modify-project' },
	                                    _react2.default.createElement(_dropdown2._dropdown, {
	                                        _label: ProjectDeleteModify[0].label,
	                                        _state: ProjectDeleteModify,
	                                        _callback: this.onProjectActions })))),




	                        _react2.default.createElement('div', { className: 'horizontal-line' }),
	                        _react2.default.createElement('div', { className: 'page-memo' },
	                            _react2.default.createElement('h3', null, 'Simply Click On The Picture For Additional Zone Level Details')),

	                        _react2.default.createElement('div', { className: 'horizontal-line' }),
	                        _react2.default.createElement('div', { className: 'locations' },
	                            LocationsTemplate(data, this.onDashboardTileClick, this.onTileClickToggleItem))));



	            } else {
	                return (
	                    _react2.default.createElement('div', null));

	            }
	        } }]);return DashboardModule;}(_react2.default.Component);


	/*
	                                                                    *  2. Connect and BindActionsReducers
	                                                                    */exports.default =
	(0, _reactRedux.connect)(
	function (state) {
	    return {
	        app: state.app,
	        session: state.app.session,
	        dashboard: state.views.home.modules.dashboard || [] };

	},
	function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            getDashboardProjectsData: _dashboardActionsReducers.getDashboardProjectsData,
	            getDashboardLocationsData: _dashboardActionsReducers.getDashboardLocationsData,
	            getDashboardLocationEventsData: _dashboardActionsReducers.getDashboardLocationEventsData,
	            showToggleItems: _dashboardActionsReducers.showToggleItems },
	        dispatch) };

	})(

	DashboardModule);


	// Locations template
	var LocationsTemplate = function LocationsTemplate(props, _callback, _actionCallback) {

	    if (!props.locations) {
	        return false;
	    }

	    var invokeCallback = function invokeCallback(item) {
	        return _callback(item);
	    };

	    var locationsOutput = [];
	    var combinedLocations = props.locations.map(function (item, index) {
	        locationsOutput.push(
	        _react2.default.createElement('div', {
	                className: 'col-md-5',
	                key: index },

	            _react2.default.createElement('div', { className: 'box box-widget widget-user' },
	                _react2.default.createElement('div', { className: 'widget-user-header bg-black img-fluid location-tile', onClick: function onClick(event) {
	                            invokeCallback(item);
	                        } },
	                    _react2.default.createElement('div', { style: { 'backgroundImage': 'url(' + item.image + ')', 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat', 'width': '100%', 'height': '200px' } })),

	                _react2.default.createElement('div', { className: 'box-footer' },
	                    _react2.default.createElement('div', { className: 'box box-primary direct-chat direct-chat-primary collapsed-box' },
	                        _react2.default.createElement('div', { className: 'box-header with-border' },
	                            _react2.default.createElement('h3', { className: 'box-title' }, item.location_name),
	                            _react2.default.createElement('div', { className: 'box-tools pull-right' },

	                                item &&
	                                item.events &&
	                                item.events.length > 0 &&
	                                _react2.default.createElement(LocationsEventsComponent, item),

	                                _react2.default.createElement('button', { className: 'btn btn-box-tool', 'data-widget': 'collapse', type: 'button', onClick:
	                                        function onClick(event) {
	                                            _actionCallback(item);
	                                        } },

	                                    _react2.default.createElement(_icons2.default, { name: 'plus' })))),



	                        _react2.default.createElement('div', { className: 'box-body' },

	                            item.show &&

	                            _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	                                    transitionName: 'toggle-fade-in',
	                                    transitionEnterTimeout: 500,
	                                    transitionLeaveTimeout: 300 },
	                                _react2.default.createElement(LocationToggleContent, item))))))));








	    });

	    return (
	        _react2.default.createElement('div', { className: 'outer-locations' },
	            locationsOutput));


	};

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


	                    _react2.default.createElement('em', null, item.event_value))));



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

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".card {\n  width: 100%;\n  height: 200px; }\n\n.horizontal-line {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.page-dashboard {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: column wrap;\n          flex-flow: column wrap;\n  padding: 2%; }\n  .page-dashboard h2 {\n    color: #868e96;\n    font-size: 2.2em;\n    font-weight: 700; }\n  .page-dashboard .projects {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    width: 100%; }\n    .page-dashboard .projects .projects-user-actions {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      margin-left: 2%; }\n      .page-dashboard .projects .projects-user-actions .button-create {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-flex: 1;\n        -webkit-flex-grow: 1;\n                flex-grow: 1;\n        margin-right: 1rem;\n        min-height: 50px;\n        font-size: 0.875rem;\n        font-weight: 700;\n        background: #CD040B;\n        color: #FFF;\n        cursor: pointer; }\n      .page-dashboard .projects .projects-user-actions .delete-modify-project {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        width: 150px;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n                justify-content: center;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n                align-items: center; }\n      .page-dashboard .projects .projects-user-actions .icon-right-arrow {\n        width: 20px;\n        height: 25px;\n        fill: #FFF; }\n  .page-dashboard .locations {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    padding-top: 2%; }\n    .page-dashboard .locations .outer-locations {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      width: 100%; }\n\n.box {\n  position: relative;\n  border-radius: 3px;\n  background: #ffffff;\n  border-top: 3px solid #d2d6de;\n  margin-bottom: 20px;\n  width: 100%;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }\n  .box .box-primary {\n    border-top-color: #3c8dbc; }\n\n.box-widget {\n  border: none; }\n\n.widget-user .widget-user-header {\n  height: 200px;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  cursor: pointer; }\n\n.box-header {\n  color: #444;\n  display: block;\n  padding: 10px;\n  position: relative; }\n\n.box-header > .box-tools {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  width: 20%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  height: 100%; }\n\n.box-footer {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top: 1px solid #f4f4f4;\n  padding: 10px;\n  background-color: #ffffff; }\n\n.box-title {\n  display: inline-block;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1; }\n\n.btn-box-tool {\n  padding: 5px;\n  font-size: 12px;\n  background: transparent;\n  color: #97a0b3;\n  border: none; }\n  .btn-box-tool .icon-plus {\n    width: 15px;\n    height: 15px;\n    fill: #333;\n    border-radius: 50%; }\n\n.dropdown-container {\n  width: 50%; }\n  .dropdown-container .dropdown-selected {\n    font-size: 1.2em; }\n  .dropdown-container .dropdown-list {\n    font-size: 1.2em; }\n\n.dropdown-selected-active .dropdown-selected-active-label {\n  font-size: 1.2em; }\n\n.list-group {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n  .list-group .list-group-item {\n    position: relative;\n    display: block;\n    padding: .75rem 1.25rem;\n    margin-bottom: -1px;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    text-transform: capitalize; }\n  .list-group .list-group-item:first-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem; }\n  .list-group .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: .25rem;\n    border-bottom-left-radius: .25rem; }\n  .list-group .float-right {\n    float: right; }\n  .list-group .text-muted {\n    color: #6c757d; }\n  .list-group ul {\n    margin: 0;\n    padding: 0; }\n\n.bg-warning {\n  background: #ffc107; }\n\n.bg-red {\n  background: #dc3545; }\n\n.bg-message {\n  background: #17a2b8; }\n\n.box-tools .box-tools-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n  -webkit-justify-content: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  text-align: center;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n          flex-grow: 1; }\n\n.box-tools .badge {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: 20px;\n  border-radius: 50%;\n  font-size: 0.8em;\n  text-align: center; }\n\n.box-tools strong {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  width: 100%; }\n\n.page-memo h3 {\n  font-weight: 500;\n  margin: 0; }\n\n/* Toggle Animation */\n.toggle-fade-in-enter {\n  opacity: 0.01; }\n\n.toggle-fade-in-enter.toggle-fade-in-enter-active {\n  opacity: 1;\n  -webkit-transition: opacity 500ms ease-in;\n  transition: opacity 500ms ease-in; }\n\n.toggle-fade-in-leave {\n  opacity: 1; }\n\n.toggle-fade-in-leave.toggle-fade-in-leave-active {\n  opacity: 0.01;\n  -webkit-transition: opacity 300ms ease-in;\n  transition: opacity 300ms ease-in; }\n", ""]);

	// exports


/***/ },

/***/ 966:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(734);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./dashboard.scss", function() {
				var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./dashboard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=home.js.map