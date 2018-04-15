webpackJsonp([3,5],{

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.Home {\n  height: 100%;\n  width: 100%;\n  padding: 0 2.1875rem 0 3.125rem; }\n  .Home .module-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n            flex-flow: row wrap;\n    height: 100%;\n    width: 100%; }\n    .Home .module-container .module-wrapper {\n      width: 100%;\n      height: 100%;\n      float: left;\n      margin-right: 1rem; }\n      .Home .module-container .module-wrapper:nth-child(2) {\n        width: 33%;\n        float: left;\n        margin-right: 0; }\n      .Home .module-container .module-wrapper:nth-child(3) {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 100%;\n                flex: 0 100%;\n        margin-bottom: 0; }\n      .Home .module-container .module-wrapper .module-grid {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-flex-wrap: wrap;\n                flex-wrap: wrap; }\n        .Home .module-container .module-wrapper .module-grid.double {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: column;\n                  flex-direction: column;\n          min-width: 100%;\n          height: 60.5%;\n          margin-bottom: 1rem; }\n          .Home .module-container .module-wrapper .module-grid.double:nth-of-type(2) {\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            height: 35%;\n            margin-bottom: 0; }\n          .Home .module-container .module-wrapper .module-grid.double .half {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-flex: 0;\n            -webkit-flex: 0 0 auto;\n                    flex: 0 0 auto;\n            height: 100%;\n            width: 50%;\n            padding-right: 1rem; }\n            .Home .module-container .module-wrapper .module-grid.double .half:last-of-type {\n              padding-right: 0; }\n        .Home .module-container .module-wrapper .module-grid.single {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: row;\n                  flex-direction: row;\n          width: 100%;\n          height: 100%;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%; }\n  .Home .Home_cell:after {\n  content: '';\n  display: block;\n  clear: both; }\n  .Home .Home_cell {\n    min-width: 100%;\n    position: relative; }\n    .Home .Home_cell .Home_cellInner {\n      width: 100%;\n      background-color: #FFF; }\n      .Home .Home_cell .Home_cellInner .Home_cellContent {\n        background-color: #FFF;\n        position: absolute;\n        width: 100%;\n        height: 100%; }\n  .Home .Home_cell .background-holder {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-color: #e4e5e3;\n    position: relative; }\n", ""]);

	// exports


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
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

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(5);var _react2 = _interopRequireDefault(_react);
	var _reactRouter = __webpack_require__(48);

	var _icons = __webpack_require__(89);var _icons2 = _interopRequireDefault(_icons);

	__webpack_require__(75);
	__webpack_require__(865);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

	var HomeCell = function HomeCell(props) {return (
	        _react2.default.createElement('div', { className: 'Home_cell Home_cell--' + props.module },
	            _react2.default.createElement('div', { className: 'Home_cellInner' },
	                _react2.default.createElement('div', { className: 'Home_cellContent' },
	                    props.children))));};





	/*
	                                           *  1. Dashboard
	                                           */var

	CustomerSupport = function (_React$Component) {_inherits(CustomerSupport, _React$Component);

	    function CustomerSupport(props) {_classCallCheck(this, CustomerSupport);return _possibleConstructorReturn(this, (CustomerSupport.__proto__ || Object.getPrototypeOf(CustomerSupport)).call(this,
	        props));

	    }_createClass(CustomerSupport, [{ key: 'componentWillMount', value: function componentWillMount()

	        {
	            //To do:
	        } }, { key: 'render', value: function render()
	        {
	            return (
	                _react2.default.createElement('div', { className: 'Home' },
	                    _react2.default.createElement('div', { className: 'module-container' },
	                        _react2.default.createElement('div', { className: 'module-wrapper' },
	                            _react2.default.createElement('div', { className: 'module-grid single' },
	                                _react2.default.createElement(HomeCell, { module: 'Customer-support-module' },
	                                    _react2.default.createElement('div', { className: 'customer-support' },
	                                        _react2.default.createElement('h2', null, 'Customer Support'),
	                                        _react2.default.createElement('div', { className: 'horizontal-line' }),
	                                        _react2.default.createElement('div', { className: 'col-xs-4 col-sm-4 col-md-4 email-us' },
	                                            _react2.default.createElement('div', null,
	                                                _react2.default.createElement(_icons2.default, { name: 'mail', viewBox: '-269 191 100 100' })),

	                                            _react2.default.createElement('a', { href: 'mailto:support@iSiteWatch.com' }, 'Email us')),

	                                        _react2.default.createElement('div', { className: 'col-xs-4 col-sm-4 col-md-4 give-us-call' },
	                                            _react2.default.createElement('div', null,
	                                                _react2.default.createElement(_icons2.default, { name: 'calling', viewBox: '-269 191 100 100' })),

	                                            _react2.default.createElement('a', { href: 'tel:+16124522224' }, 'Give us a call')),

	                                        _react2.default.createElement('div', { className: 'col-xs-4 col-sm-4 col-md-4 lets-chat' },
	                                            _react2.default.createElement('div', null,
	                                                _react2.default.createElement(_icons2.default, { name: 'customer-support', viewBox: '0 0 58 59' })),

	                                            _react2.default.createElement('a', { href: 'javascript:void(0)' }, 'Let\'s chat')))))))));








	        } }]);return CustomerSupport;}(_react2.default.Component);


	/*
	                                                                    *  2. Connect and BindActionsReducers
	                                                                    */exports.default =

	CustomerSupport;

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, ".email-us, .give-us-call, .lets-chat {\n  text-align: center; }\n\n.horizontal-line {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.customer-support h2 {\n  padding: 2%;\n  padding-bottom: 1%; }\n\n.customer-support .icon-mail {\n  width: 100px;\n  height: 100px;\n  fill: #c04; }\n\n.customer-support .icon-customer-support {\n  width: 100px;\n  height: 100px;\n  fill: #c04; }\n\n.customer-support .icon-calling {\n  width: 100px;\n  height: 100px;\n  fill: #c04; }\n", ""]);

	// exports


/***/ },

/***/ 865:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(656);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./customer-support.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./customer-support.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=CustomerSupport.js.map