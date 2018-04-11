(function() {
	function onDependenciesLoaded(Class, _, JXONParser, Property) {
		
		var _instance, _hostInfo = null, _locationInfo = null, external = window.external;
		
		var isRunnable = !!external;
		if (isRunnable) {
			try {
				if (!external.version) {
					// Could be older than 1.4, try run method.
					external.run("RV_MinLoaderVersion", {"0": "0.0.0", "count": 1}, null, null, null);
				}
				window.onerror = function(message, url, linenumber) {
					alert('JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url);
				};
			}
			catch(e) {
				isRunnable = false;
			}
		}
		
		function _logValidationError(typeName, method, argumentKey, argument) {
			var argumentStringValue = "unknown";
			try {
				argumentStringValue = (argument === null) ? "null" : (argument === undefined) ? "undefined" : argument.toString();
			}
			catch(e) {}
			this.trace("Argument " + argumentKey + " for " + method + " expected " + typeName + " was " + argumentStringValue);
			return null;
		}
	
		function _validate(types, parameters, method) {
			if (!_.isArray(types))
				types = [types];
			var response = {};
			for (var i = 0; i < types.length; i++) {
				var argumentKey = ""+i, argument = parameters[argumentKey], typeName = types[i];
				switch (typeName) {
					case "String":
						if (_.isNumber(argument) && !isNaN(argument))
							argument = argument.toString();
						if (!_.isString(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = argument;
						break;
					case "Array": // Unused
						if (!_.isArray(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = argument;
						break;
					case "Array<String>":
						if (!_.isArray(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						for (var j=0; j<argument.length; j++) {
							if (!_.isString(argument[j]))
								return _logValidationError.call(this, typeName, method, argumentKey, j + ": " + argument[j]);
						}
						response[argumentKey] = argument;
						break;
					case "Object": // Unused
						if (!_.isObject(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = argument;
						break;
					case "Date":
						response[argumentKey] = _.isDate(argument) ? argument : null;
						break;
					case "int":
						var intVal = parseInt(argument);
						if (isNaN(intVal))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = intVal;
						break;
					case "Number": // Unused
						if (!_.isNumber(argument) || isNaN(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = argument;
						break;
					case "float": // Unused
						var floatVal = parseFloat(argument);
						if (isNaN(floatVal))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = floatVal;
						break;
					case "boolean":
						if (!_.isBoolean(argument))
							return _logValidationError.call(this, typeName, method, argumentKey, argument);
						
						response[argumentKey] = argument;
						break;
					case "anything":
						response[argumentKey] = argument;
						break;
					default:
						this.trace("Could not validate " + argumentKey + " for " + method + ".	Unknwon type " + typeName);
						return null;
				}
			}
			return response;
		}
		
		function _callRVHost(method, types, parameters, callback, thisArgument, context, defaults) {
			
			if (defaults)
				parameters = _.extend(defaults, parameters);
			
			if (types && ((parameters=_validate.call(this, types, parameters, method)) === null))
				return null;
			
			if (isRunnable) { //&& _.isFunction(external.run)
				return external.run(method, types ? _.extend(parameters, {count: _.keys(parameters).length}) : null, _.isFunction(callback) ? callback : null, thisArgument || null, context || null);
			}
			else {
				this.logMsg(parameters);	// For testing
				return null;
			}
		}
		
		var RVHost = Class.extend({
			init: function(parameters) {			
				// TODO: Any setup, if needed.
			},
			exit: function() {
				return _callRVHost.call(this, "RV_Exit");
			},
			genGuid: function(format) {
				return _callRVHost.call(this, "RV_GetGuid", "String", arguments, undefined, undefined, undefined, { "0": "" });
			},
			trace: function(text) {
				try	{
					if (_.isString(text))
						_callRVHost.call(this, "RV_Trace", "String", arguments);
				}
				catch(e) {
					this.logMsg(e);
				}
				this.logMsg(text); // Log in browser
			},
			logMsg: function(msg) {	
				if (window.console && window.console.log) {
					try {
						window.console.log(msg);
					}
					catch(e) { }
				}
				return msg;
			},
			getVersion: function () {
				try {
					return isRunnable ? external.version : null;
				}
				catch(e) {
					return null;
				}
			},
			version: new Property(function() {
				return this.getVersion();
			}),
			getHostInfo: function(refresh) {
				if (_hostInfo !== null && !refresh)
					return _hostInfo;
				
				return _callRVHost.call(this, "RV_GetHostInfo");
			},
			getLocationInfo: function(refresh) {
				if (_locationInfo !== null && !refresh)
					return _locationInfo;
				
				return _callRVHost.call(this, "RV_GetLocationInfo");
			},
			getAssignedPlaylist: function(channel, validationMode) {
				return _callRVHost.call(this, "RV_GetAssignedPlaylist", ["int", "int"], arguments);
			},
			getAssignedPlaylistPath: function (channel) {
				return _callRVHost.call(this, "RV_GetAssignedPlaylistPath", ["int"], arguments);
			},
			getPlaylist: function(playlistPath, validationMode) {
				return _callRVHost.call(this, "RV_GetPlaylist", ["String", "int"], arguments);
			},
			getReplicationFiles: function() {
				return _callRVHost.call(this, "RV_GetReplicationFiles");
			},
			getClassifications: function() {
				return _callRVHost.call(this, "RV_GetClassifications");
			},
			getChannelClassifications: function(channel, merge) { // channel is 1-based
				return _callRVHost.call(this, "RV_GetChannelClassifications", ["int", "boolean"], arguments, undefined, undefined, undefined, {"1":true});
			},
			fileOperation: function(source, destination, operation) {
				return _callRVHost.call(this, "RV_FileOperation", ["String", "String", "int"], arguments);
			},
			getFileContents: function (path, binary) {
				return _callRVHost.call(this, "RV_GetFileContents", ["String", "boolean"], arguments, undefined, undefined, undefined, {"1":false});
			},
			getFrameDocument: function (iframeWindow) {
				try {
					return isRunnable ? external.getFrameDocument(iframeWindow) : null;
				}
				catch (e) {
					return null;
				}
			},
			minLoaderVersion: function(version) {
				return _callRVHost.call(this, "RV_MinLoaderVersion", ["String"], arguments) || "0.0.0";
			},
			setChannelStatus: function(channel, message, status, statusCode) {
				return _callRVHost.call(this, "RV_SetChannelStatus", ["int", "String", "String", "String"], arguments);
			},
			validateSchema: function(xml, xsd) {
				return _callRVHost.call(this, "RV_ValidateSchema", ["String", "String"], arguments);
			},
			getRegistry: function(baseKey, subKey, regName) {
				return _callRVHost.call(this, "RV_GetRegistry", ["String", "String", "String"], arguments);
			},
			setRegistry: function(baseKey, subKey, regName, regValue) {
				return _callRVHost.call(this, "RV_SetRegistry", ["String", "String", "String", "String"], arguments);
			},
			runSQL: function(sqlServer, sqlDatabase, sqlUser, sqlPassword, sqlCommand) {
				return _callRVHost.call(this, "RV_RunSQL", ["String", "String", "String", "String", "String"], arguments);
			},
			dbQuery: function(sqlConnection, sqlCommand, queryMode, cacheMode, expiresAfter) {
				return _callRVHost.call(this, "RV_DBQuery", ["String", "String", "int", "int", "Date"], arguments, undefined, undefined, undefined, {"2":0,"3":0});
			},
			dbQueryAsync: function(sqlConnection, sqlCommand, queryMode, cacheMode, expiresAfter, callback, thisArgument, context) {
				return _callRVHost.call(this, "RV_DBQuery", ["String", "String", "int", "int", "Date"], arguments, callback, thisArgument, context, {"2":0,"3":0});
			},
			gaTracking: function(trackingID, clientID, hitType, parameters) {
				return _callRVHost.call(this, "RV_GATracking", ["String", "String", "String", "Array<String>"], arguments);
			},
			qrCodeGen: function(embedData, imagePath, width, height) {
				return _callRVHost.call(this, "RV_QRCodeGen", ["String", "String", "int", "int"], arguments);
			},
			httpDownload: function(url, username, password, filePath) {
				if (!username)
					delete arguments["1"];
				if (!password)
					delete arguments["2"];
				return _callRVHost.call(this, "RV_HTTPDownload", ["String", "String", "String", "String"], arguments, undefined, undefined, undefined, {"1":"","2":""});
			},
			httpDownloadAsync: function(url, username, password, filePath, callback, thisArgument, context) {
				if (!username)
					delete arguments["1"];
				if (!password)
					delete arguments["2"];
				return _callRVHost.call(this, "RV_HTTPDownload", ["String", "String", "String", "String"], arguments, callback, thisArgument, context, {"1":"","2":""});
			},
			httpRequest: function(url, method, headers, username, password, body, cacheMode, expiresAfter) {
				if (!headers)
					delete arguments["2"];
				if (!username)
					delete arguments["3"];
				if (!password)
					delete arguments["4"];
				if (!body)
					delete arguments["5"];
				return _callRVHost.call(this, "RV_HTTPRequest", ["String", "String", "Array<String>", "String", "String", "String", "int", "Date"], arguments, undefined, undefined, undefined, {"2":[],"3":"","4":"","5":"","6":0});
			},
			httpRequestAsync: function(url, method, headers, username, password, body, cacheMode, expiresAfter, callback, thisArgument, context) {
				if (!headers)
					delete arguments["2"];
				if (!username)
					delete arguments["3"];
				if (!password)
					delete arguments["4"];
				if (!body)
					delete arguments["5"];
				return _callRVHost.call(this, "RV_HTTPRequest", ["String", "String", "Array<String>", "String", "String", "String", "int", "Date"], arguments, callback, thisArgument, context, {"2":[],"3":"","4":"","5":"","6":0});
			},
			serialListenStart: function(comPort, baudRate, parity, dataBits, stopBits, callback, thisArgument, context) {
				return _callRVHost.call(this, "RV_SerialListenStart", ["String", "int", "int", "int", "int"], arguments, callback, thisArgument, context);
			},
			serialListenStop: function (connectionId) {
				_callRVHost.call(this, "RV_SerialListenStop", ["String"], arguments);
			},
			//Future use
			//tcpSend: function(connectionId, body) {
			//	return _callRVHost.call(this, "RV_TCPSend", ["String", "String"], arguments);
			//},
			//Future use
			//tcpSendAsync: function(connectionId, body, callback, thisArgument, context) {
			//	return _callRVHost.call(this, "RV_TCPSend", ["String", "String"], arguments, callback, thisArgument, context);
			//},
			tcpEnd: function(connectionId) {
				return _callRVHost.call(this, "RV_TCPEnd", ["String"], arguments);
			},
			tcpConnect: function (host, port, body, readTimeout) {
				return _callRVHost.call(this, "RV_TCPConnect", ["String", "int", "String", "int"], arguments, undefined, undefined, undefined, { "3": RVHost.TCPTIMEOUT_NONE });
			},
			tcpConnectAsync: function (host, port, body, readTimeout, callback, thisArgument, context) {
				return _callRVHost.call(this, "RV_TCPConnect", ["String", "int", "String", "int"], arguments, callback, thisArgument, context);
			},
			parseSOAP: function(retData, resultName, xmlns) {
				return _callRVHost.call(this, "RV_ParseSOAP", ["String", "String", "String"], arguments);
			},
			parseJXON: function(stringOrXml) {
				// Can take a JSON string, XML string, XML Document or XML Element
				return _getJXONParser.call(this).parse(stringOrXml);
			},
			jxonToXml: function(jxonObject, asDomDocument) {
				return _getJXONParser.call(this).jxonToXml(jxonObject, asDomDocument);
			}
		});
	
		function _getJXONParser() {
			if (JXONParser === undefined)
				throw "JXONParser class not found.";
			
			if (this._jxonParser) {
				return this._jxonParser;
			}
			return this._jxonParser = new JXONParser(this.trace, this);
		}
		
		/**
		enum: ValidationMode
		
		None - 0
		ScheduleOnly - 1 Only content launch/expiration and start/end time
		ScheduleAndSingleLocale - 2 Only 1 valid locale per smart item
		ScheduleAndMultipleLocale - 3 Multiple valid locale per smart item
		*/
		/**
		enum: FileOperation
		
		Search - 1
		Copy - 2
		Move - 3
		Delete - 4
		*/
		/*
		enum: Parity
		
		None - 0
		Odd - 1
		Even - 2
		Mark - 3
		Space - 4
		*/
		/*
		enum: StopBits
		
		None - 0
		One - 1
		Two - 2
		OnePointFive - 3
		*/
		
		RVHost.ON_RV_DURATION = "RV_Duration";
		RVHost.ON_RV_ISACTIVEFLASH = "RV_IsActiveFlash";
		RVHost.ON_RV_NAME = "RV_Name";
		
		RVHost.CACHE_NONE = 0;
		RVHost.CACHE_ONFAIL = 1;
		RVHost.CACHE_ALWAYS = 2;
		
		RVHost.DBQUERY_SQL = 0;
		RVHost.DBQUERY_OLEDB = 1;
		RVHost.DBQUERY_ODBC = 2;
	
		RVHost.FILEOP_SEARCH = 1;
		RVHost.FILEOP_COPY = 2;
		RVHost.FILEOP_MOVE = 3;
		RVHost.FILEOP_DELETE = 4;
	
		RVHost.TCPTIMEOUT_INFINITE = 0;
		RVHost.TCPTIMEOUT_NONE = -1;
		
		RVHost.isRunnable = isRunnable;
		
		RVHost.getRVHost = function() {
			if (_instance)
				return _instance;
			
			return _instance = new RVHost();
		};
		
		return window.RVHost = RVHost;
	}
	
	if (typeof define === "function") {
		define(["class", "underscore", "jxonparser", "property"], onDependenciesLoaded);
	}
	else {
		if (!window.rvLoad) {
			window.rvDependents = [];
			window.rvLoad = function() {
				var rvDependents = window.rvDependents, removals, count = 0, limit = 1000000, i, removalIndex;
				while (rvDependents.length) {
					if (++count > limit) throw "Error loading RVDependencies. Limit exceeded.";
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
			module: "RVHost",
			dependencies: ["Class", "_", "JXONParser", "Property"],
			load: function() {
				for (var i = 0; i<this.dependencies.length; i++) { this.dependencies[i] = window[this.dependencies[i]]; }
				window[this.module] = onDependenciesLoaded.apply(this, this.dependencies);
			},
			checkDependencies: function() { for (var i = 0; i<this.dependencies.length; i++) { if (!window[this.dependencies[i]]) return false; } return true; }
		});
	}
})();