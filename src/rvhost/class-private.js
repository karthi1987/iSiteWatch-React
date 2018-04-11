/*	Class: Class
	This is John Resig's simple inheritance, updated for ES 5.1 and Require.js. Based on <http://ejohn.org/blog/simple-javascript-inheritance/> (inspired by base2 and Prototype). MIT Licensed.  There are also some added object oriented programming features.
	
	Features:
	- Simulated classical inheritance
	- Private static variables
	- Private instance varibales
	- A very simple <Property> API that provides all of the flexibility of Object.defineProperty, but it is simplified to allow you to only pass in a single function as a setter and a getter.  The property setter and getter methods have access to the same private variables and superclass methods as all other instance methods. In fact, private variables are most useful for property setters and getters, where you need something to happen whenever a property is set so you cannot allow it to be set directly.
	
	Example usage:
	(start code)
	var Person = Class.extend({
	  init: function(isDancing) {
	    this.dancing = isDancing;
	    this._private.isSneaky = false;
	    this._privateStatic.instances = (this._privateStatic.instances || 0) + 1;
	  },
	  dance: function() {
	    return this.dancing;
	  },
	  sneak: function() {
	    return this._private.isSneaky;
	  },
	  people: function() {
	    return this._privateStatic.instances;
	  },
	  things: new Property(function(numberOfThings) {
	    if (numberOfThings === undefined)
	      return this._private.numberOfThings;
	    this._private.numberOfThings = parseInt(numberOfThings);
	    this._private.numberOFCalls = (this._private.numberOFCalls || 0) + 1;
	  }),
	  numberOfCallsToThings: function() {
	    return this._private.numberOFCalls;
	  }
	});
	 
	var Ninja = Person.extend({
	  init: function() {
	    this._super( false );
	    this._private.isSneaky = true;
	    this._privateStatic.instances = (this._privateStatic.instances || 0) + 1;
	  },
	  dance: function() {
	    // Call the inherited version of dance()
	    return this._super();
	  },
	  sneak: function() {
	    return this._private.isSneaky;
	  },
	  ninjas: function() {
	    return this._privateStatic.instances;
	  },
	  swingSword: function() {
	    return true;
	  },
	  things: new Property(function(numberOfThings) {
	    if (numberOfThings === undefined)
	      return this._private.numberOfThings + this._super();
	    this._private.numberOfThings = parseInt(numberOfThings);
	    this._super(numberOfThings);
	  })
	});
	 
	var person = new Person(true);
	person.dance(); // => true
	person.sneak(); // => false
	 
	var ninja = new Ninja();
	ninja.dance(); // => false
	ninja.swingSword(); // => true
	ninja.sneak(); // => true
	
	var anotherNinja = new Ninja();
	person.people(); // => 1
	ninja.ninjas(); // => 2
	
	person._privateStatic; // => undefined
	ninja._private; // => undefined
	
	// Should all be true 
	person instanceof Person && person instanceof Class &&
	ninja instanceof Ninja && ninja instanceof Person && ninja instanceof Class
	
	// Property API
	ninja.things = "2";
	ninja.things === "2"; // => false
	ninja.things === 4; // => true
	ninja.numberOfCallsToThings(); // => 1
	
	// Clear the private variable storage for the objects.
	person = person.release(); // => null
	ninja = ninja.release(); // => null
	anotherNinja = anotherNinja.release(); // => null
	(end)
*/
(function() {
function onDependenciesLoaded(_, Property) {
	"use strict";
	
	// This polyfill is based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	Object.create || (function() {
		function F() {};
		return function (o) {
			if (arguments.length > 1) { 
				throw Error('Second argument not supported');
			}
			if (typeof o != 'object') { 
				throw TypeError('Argument must be an object');
			}
			F.prototype = o;
			return new F();
		};
	})();
	
	var hasFunctionSerialization = /xyz/.test(function(){xyz;});
	var referencesSuper = hasFunctionSerialization ? /\b_super\b/ : /.*/;
	var referencesPrivate = hasFunctionSerialization ? /\b_private\b/ : /.*/;
	var referencesPrivateStatic = hasFunctionSerialization ? /\b_privateStatic\b/ : /.*/;
	
	var Has = {
		None 	: 0,
		Super	: (1 << 0), 
		Static	: (1 << 1),
		Private	: (1 << 2)
	};
	
	// The base Class implementation (does nothing)
	function Class(){}
	
	// Create a new Class that inherits from this class
	Class.extend = function(properties) {
		var _private = {}, _privateStatic, _super = this.prototype, _superRelease = _super.release, propertyDefinitions = {}, hasPropertyDefinitions = false;
		
		var superPropertyDefinitions = this.propertyDefinitions;
		if (_.isObject(superPropertyDefinitions)) {
			_.extend(propertyDefinitions, superPropertyDefinitions);
			hasPropertyDefinitions = true;
		}
		else
			superPropertyDefinitions = {};
		
		// Allow normal this._super() call in subclass release() definition, while still allowing release method for private variables within this scope.
		// In other words there are potentially two levels of the release method just in a single class definition.
		_super.release = function() {
			if (typeof _superRelease === "function")
				_superRelease.call(this);
			if (this.__private_instance_key__)
				delete _private[this.__private_instance_key__];
			return null;
		};
		
		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		var prototype = Object.create(_super);
		
		function _getPrivateInstanceKey() {
			var key = null;
			do {
				var newId = generateUuid();
				if (_private[newId] === undefined)
					key = newId;
			}
			while (key === null);
			
			_private[key] = {};
			
			// There is no acceptable polyfill for defineProperty, however in this case this workaround is okay.
			if (_.isFunction(Object.defineProperty))
				Object.defineProperty(this, "__private_instance_key__", { writable: false, configurable:false, value: key });
			else
				this.__private_instance_key__ = key;
		}

		function prepareMethod(name, fn, method) {
			// Check if we need to bind _super, _privateStatic or _private.
			var has = ((typeof _super[name] == "function" || superPropertyDefinitions[name]) && referencesSuper.test(fn) ? Has.Super : 0)
						| (referencesPrivateStatic.test(fn) ? Has.Static : 0)
						| (referencesPrivate.test(fn) ? Has.Private : 0);
			if (has & Has.Static && !_privateStatic)
				_privateStatic = {};
			// For efficiency, we only temporarilly bind objects that are needed by the function.
			// These objects are bound to the instance temporarily while the function defined in properties executes.
			switch (has) {
				case 0: // Has.None 0000
					return fn;
					break;
				case 1: // Has.Super 001
					return function() {
						var tmp = this._super;
						this._super = _super[name] || superPropertyDefinitions[name][method];
						var returnValue = fn.apply(this, arguments);
						this._super = tmp;
						return returnValue;
					};
				case 2: // Has.Static 0010
					return function() {
						var privateStaticTmp = this._privateStatic;
						this._privateStatic = _privateStatic;
						var returnValue = fn.apply(this, arguments);
						this._privateStatic = privateStaticTmp;
						return returnValue;
					};
				case 4: // Has.Private = 0100
					return function() {
						var privateTmp = this._private;
						if (!this.__private_instance_key__)
							_getPrivateInstanceKey.call(this);
						this._private = _private[this.__private_instance_key__] || (_private[this.__private_instance_key__] = {});
						var returnValue = fn.apply(this, arguments);
						this._private = privateTmp;
						return returnValue;
					};
				case 3: // Has.Super | Has.Static = 0011
					return function() {
						var tmp = this._super, privateStaticTmp = this._privateStatic;
						this._super = _super[name] || superPropertyDefinitions[name][method];
						this._privateStatic = _privateStatic;
						var returnValue = fn.apply(this, arguments);
						this._super = tmp;
						this._privateStatic = privateStaticTmp;
						return returnValue;
					};
				case 5: // Has.Super | Has.Private = 0101
					return function() {
						var tmp = this._super;
						var privateTmp = this._private;
						if (!this.__private_instance_key__)
							_getPrivateInstanceKey.call(this);
						this._private = _private[this.__private_instance_key__] || (_private[this.__private_instance_key__] = {});
						this._super = _super[name] || superPropertyDefinitions[name][method];
						var returnValue = fn.apply(this, arguments);
						this._super = tmp;
						this._private = privateTmp;
						return returnValue;
					};
				case 6: // Has.Static | Has.Private = 0110
					return function() {
						var privateStaticTmp = this._privateStatic;
						var privateTmp = this._private;
						if (!this.__private_instance_key__)
							_getPrivateInstanceKey.call(this);
						this._private = _private[this.__private_instance_key__] || (_private[this.__private_instance_key__] = {});
						this._privateStatic = _privateStatic;
						var returnValue = fn.apply(this, arguments);
						this._privateStatic = privateStaticTmp;
						this._private = privateTmp;
						return returnValue;
					};
				case 7: // Has.Super | Has.Static | Has.Private = 0111
					return function() {
						var tmp = this._super, privateStaticTmp = this._privateStatic;
						var privateTmp = this._private;
						if (!this.__private_instance_key__)
							_getPrivateInstanceKey.call(this);
						this._private = _private[this.__private_instance_key__];
						this._super = _super[name] || superPropertyDefinitions[name][method];
						this._privateStatic = _privateStatic;
						var returnValue = fn.apply(this, arguments);
						this._super = tmp;
						this._privateStatic = privateStaticTmp;
						this._private = privateTmp;
						return returnValue;
					};
			}
		}
		
		// Copy the properties over onto the new prototype
		for (var name in properties) {
			var property = properties[name];
			
			// Check for property definition instance
			if (property instanceof Property) {
				hasPropertyDefinitions = true;
				if (property.type === "accessor") {
					property.get = prepareMethod(name, property.get, "get");
					property.set = prepareMethod(name, property.set, "set");
				}
				propertyDefinitions[name] = property;
			}
			else {
				// Check if we're overwriting an existing function
				prototype[name] = (_.isFunction(property)) ? prepareMethod(name, property) : property;
			}
		}
		
		// The new constructor
		// All construction is actually done in the init method
		var SubClass;
		if (hasPropertyDefinitions) {
			if (!_.isFunction(Object.defineProperty))
				throw new Error("This browser is too old and decrepit for Object.defineProperty.");
			
			SubClass = function() {
				for (var name in propertyDefinitions) {
					if (propertyDefinitions.hasOwnProperty(name)) {
						Object.defineProperty(this, name, propertyDefinitions[name]);
					}
				}
				if (_.isFunction(prototype.init)) {
					prototype.init.apply(this, arguments);
				}
			};
			SubClass.propertyDefinitions = propertyDefinitions;
		}
		else
			SubClass = _.isFunction(prototype.init) ? prototype.init : function(){};
		
		// Populate our constructed prototype object
		SubClass.prototype = prototype;
		
		// Enforce the constructor to be what we expect
		prototype.constructor = SubClass;
		
		// And make this class extendable
		SubClass.extend = Class.extend;
		
		SubClass.generateUuid = generateUuid;
		return SubClass;
	};
	
	// Helper methods for UUID creation.
	function generateUuid() { // UUID with random node
		var dg = new Date(1582, 10, 15, 0, 0, 0, 0),
			dc = new Date(),
			t = (dc.getTime() - dg.getTime()) * 10000,
			h = '-',
			hex = t.toString(16).toUpperCase();
			
		hex = '1' + paddedHex(t, '000000000000000');
		var tl = hex.substr(8,8),
			tm = hex.substr(4,4),
			thv = hex.substr(0,4),
			cs = rand(0xFFFF) | 0x008000 & 0x00BFFF,
			cshex = cs.toString(16).toUpperCase(),
			n = paddedHex(rand(0xFFFF), '0000') + paddedHex(rand(0xFFFF), '0000') + paddedHex(rand(0xFFFF), '0000');
		return tl + h + tm + h + thv + h + cshex + h + n;
	}
	function rand(max){ return Math.floor(Math.random() * (max + 1)); }
	function paddedHex(number, padding){
		var hex = number.toString(16).toUpperCase();
		return padding.substr(0, padding.length - hex.length) + hex;
	}
	
	Class.generateUuid = generateUuid;
	
	// _.deepCopy is used throughout this library.  The base class definition seems like a decent enough place for this initialization.
	
	_.mixin({
		deepCopy: function (obj) {
			if (_.isArray(obj)) {
				var clone = [];
				_.each(obj, function(value) {
					clone.push( _.deepCopy(value) );
				});
				return clone;
			}
			else if ( _.isObject(obj) && !_.isFunction(obj) ) {
				var clone = {};
				_.each(obj, function(value, key) {
					clone[key] = _.deepCopy(value);
				});
				return clone;
			}
			return obj;
		}
	});
	
	return Class;
}
if (typeof define === "function") {
	define(["underscore", "property"], onDependenciesLoaded);
}
else {
	if (!window.rvLoad) {
		window.rvDependents = [];
		window.rvLoad = function() {
			var rvDependents = window.rvDependents, removals, count = 0, limit = 1000000, i, removalIndex;
			while (rvDependents.length) {
				if (++count > limit) throw "Error loading RVDependencies. Limit exceeded. Did not find dependencies: " + (JSON.stringify(rvDependents));
				removals = [];
				for (i = 0; i < rvDependents.length; i++) {
					var dependent = rvDependents[i];
					if (dependent.checkDependencies()) {
						dependent.load();
						removals.push(i);
					}
				}
				while( (removalIndex = removals.pop()) !== undefined ) { rvDependents.splice(removalIndex, 1); }
			}
			delete window.rvDependents; delete window.rvDidLoad;
		};
	}
	window.rvDependents.push({
		module: "Class",
		dependencies: ["_","Property"],
		load: function() {
			for (var i = 0; i<this.dependencies.length; i++) { this.dependencies[i] = window[this.dependencies[i]]; }
			window[this.module] = onDependenciesLoaded.apply(this, this.dependencies);
		},
		checkDependencies: function() { for (var i = 0; i<this.dependencies.length; i++) { if (!window[this.dependencies[i]]) return false; } return true; },
		toJSON: function() { var obj = {}; obj[this.module] = this.dependencies; return obj; }
	});
}
})();