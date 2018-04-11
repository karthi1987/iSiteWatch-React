(function() {
function onDependenciesLoaded(_) {
	/*	Class: Property
		This class is used by the base <Class> implementation to allow properties to be defined.  This class serves as a property descriptor object, for Object.defineProperty().
		
		Properties:
			type - A read-only property that indicates either a data or accessor type property definition.
			get - Accessor type property descriptors have a getter method.
			set - Accessor type property descriptors have a setter method.
			value - Data type property descriptors may have an optional value property.
			writable - Data type property descriptors may have an optional boolean writable property. This indicates whether the property is writable or read-only.
			configurable - Both property descriptor types may have an optional boolean configurable property. This indicates whether the property may be redefined.
			enumerable - Both property descriptor types may have an optional boolean enumerable propery. This indicates whether the property will be included when an object is enumerated.
	*/
	/*	Function: Property(get [, set, configurable, enumerable])
		Constructor for an accessor property descriptor.
		
		Parameters:
			get - A required function that will be the property's getter method.
			set - An optional function that will be the property's setter method. If omitted, use the getter method as the setter as well. Pass in null for no setter method.
			configurable - An optional boolean argument that indicates whether the property may be redefined.
			enumerable - An optional boolean argument that indicates whether the property will be included when an object is enumerated.
	*/
	/*	Function: Property(value [, writable, configurable, enumerable])
		Constructor for a data property descriptor.
		
		Parameters:
			value - An optional value property.
			writable - An optional boolean argument that indicates whether the property is writable or read-only.
			configurable - An optional boolean argument that indicates whether the property may be redefined.
			enumerable - An optional boolean argument that indicates whether the property will be included when an object is enumerated.
	*/
	var Property = function() {
		var args = _.values(arguments);
		var functionOrValue = args.shift(), configurable, enumerable;
		if (_.isFunction(functionOrValue)) {
			// accessor descriptor arguments are (get [, set, configurable, enumerable])
			Object.defineProperty(this, "type", {value:"accessor", enumerable: true});
			this.get = functionOrValue;
			if (arguments[1] === null)
				args.shift();
			else
				this.set = _.isFunction(arguments[1]) ? args.shift() : functionOrValue; // Allow getter and setter to be the same function.
		}
		else {
			// data descriptor arguments are (value [, writable, configurable, enumerable])
			Object.defineProperty(this, "type", {value:"data", enumerable: true});
			this.value = functionOrValue;
			var writable = args.shift();
			if (writable !== undefined) {
				this.writable = !!writable;
			}
		}
		if ((configurable=args.shift()) !== undefined)
			this.configurable = !!configurable;
		if ((enumerable=args.shift()) !== undefined)
			this.enumerable = !!enumerable;
	};
	return Property;
}
if (typeof define === "function") {
	define(["underscore"], onDependenciesLoaded);
}
else {
	if (!window.rvLoad) {
		window.rvDependents = [];
		window.rvLoad = function() {
			var rvDependents = window.rvDependents, removals, count = 0, limit = 1000000, i, removalIndex;
			if( rvDependents ){
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
			}
			
		};
	}
	window.rvDependents.push({
		module: "Property",
		dependencies: ["_"],
		load: function() {
			for (var i = 0; i<this.dependencies.length; i++) { this.dependencies[i] = window[this.dependencies[i]]; }
			window[this.module] = onDependenciesLoaded.apply(this, this.dependencies);
		},
		checkDependencies: function() { for (var i = 0; i<this.dependencies.length; i++) { if (!window[this.dependencies[i]]) return false; } return true; },
		toJSON: function() { var obj = {}; obj[this.module] = this.dependencies; return obj; }
	});
}
})();