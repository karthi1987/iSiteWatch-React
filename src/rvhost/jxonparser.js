(function() {
	function onDependenciesLoaded(Class, _) {
		var JXONParser = Class.extend({
			init: function(logMethod, logMethodContext) {
				if (_.isFunction(logMethod))
					this.logMethod = logMethodContext ? _.bind(logMethod, logMethodContext) : logMethod;
				else
					this.logMethod = function(){};
			},
			parse: function(stringOrXml) {
				// Can take a JSON string, XML string, XML Document or XML Element
				var doc, isString = false;
				if (stringOrXml instanceof Document || stringOrXml instanceof Element) {
					doc = stringOrXml;
				}
				else if ( (isString = _.isString(stringOrXml)) ) {
					try {
						doc = loadXMLString(stringOrXml);
					}
					catch (e) {
						this.logMethod(e.toString());
					}
				}
				if (doc instanceof Document || doc instanceof Element) {
					try {
						doc = new JXONTree(doc instanceof Element ? doc : doc.firstChild);
						if (_.isObject(doc) && !(doc.body && doc.body.parsererror))
							return doc;
					}
					catch (e) {
						this.logMethod(e.toString());
					}
				}
				if (isString) {
					try {
						doc = JSON.parse(stringOrXml);
						return _.isObject(doc) ? doc : null;
					}
					catch (e) {
						this.logMethod(e.toString());
					}
				}
				return null;
			},
			jxonToXml: function(jxonObject, asDomDocument) {
				var xml;
				try {
					xml = createXML(jxonObject);
					if (asDomDocument)
						return xml;
					return xmlToString(xml);
				}
				catch (e) {
					this.logMethod(e.toString());
				}
				return null;
			}
		});
		
		function loadXMLString(text) {
			if (window.DOMParser) {
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(text, "text/xml");
			}
			else { // Internet Explorer
				xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async = false;
				xmlDoc.loadXML(text);
			}
			return xmlDoc;
		}
	
		function xmlToString(xml) {
			if (!window.DOMParser) {
				return xml.xml;
			}
			else {
				return (new XMLSerializer()).serializeToString(xml);
			}
		}
		
		/*\
		|*|
		|*|  JXON Snippet #2 - Mozilla Developer Network
		|*|
		|*|  https://developer.mozilla.org/en-US/docs/JXON
		|*|
		\*/
		function parseText(sValue) {
			if (/^\s*$/.test(sValue)) { return null; }
			if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
			if (isFinite(sValue)) { return parseFloat(sValue); }
			if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
			return sValue;
		}
		
		function JXONTree(oXMLParent) {
			if (oXMLParent.hasChildNodes()) {
				var sCollectedTxt = "";
				for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
					oNode = oXMLParent.childNodes.item(nItem);
					if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
					else if (oNode.nodeType === 1 && !oNode.prefix) {
						sProp = oNode.nodeName/* .toLowerCase() */;
						vContent = new JXONTree(oNode);
						if (this.hasOwnProperty(sProp)) {
							if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
							this[sProp].push(vContent);
						} else { this[sProp] = vContent; }
					}
				}
				if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
			}
			if (oXMLParent.hasAttributes()) {
				var oAttrib;
				for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
					oAttrib = oXMLParent.attributes.item(nAttrib);
					this["@" + oAttrib.name/* .toLowerCase() */] = parseText(oAttrib.value.trim());
				}
			}
		}
		
		/*\
		|*|
		|*|  JXON Snippet #5 - Mozilla Developer Network
		|*|
		|*|  https://developer.mozilla.org/en-US/docs/JXON
		|*|
		\*/
		function createXML(oObjTree) {
			function loadObjTree(oParentEl, oParentObj) {
				var vValue, oChild;
				if (oParentObj instanceof String || oParentObj instanceof Number || oParentObj instanceof Boolean) {
					oParentEl.appendChild(oNewDoc.createTextNode(oParentObj.toString())); /* verbosity level is 0 */
				}
				else if (oParentObj.constructor === Date) {
					oParentEl.appendChild(oNewDoc.createTextNode(oParentObj.toGMTString()));		
				}
				for (var sName in oParentObj) {
					if (isFinite(sName)) { continue; } /* verbosity level is 0 */
					vValue = oParentObj[sName];
					if (sName === "keyValue") {
						if (vValue !== null && vValue !== true) { oParentEl.appendChild(oNewDoc.createTextNode(vValue.constructor === Date ? vValue.toGMTString() : String(vValue))); }
					}
					else if (sName === "keyAttributes") { /* verbosity level is 3 */
						for (var sAttrib in vValue) { oParentEl.setAttribute(sAttrib, vValue[sAttrib]); }
					}
					else if (sName.charAt(0) === "@") {
						oParentEl.setAttribute(sName.slice(1), vValue);
					}
					else if (vValue.constructor === Array) {
						for (var nItem = 0; nItem < vValue.length; nItem++) {
							oChild = oNewDoc.createElement(sName);
							loadObjTree(oChild, vValue[nItem]);
							oParentEl.appendChild(oChild);
						}
					}
					else {
						oChild = oNewDoc.createElement(sName);
						if (vValue instanceof Object) {
							loadObjTree(oChild, vValue);
						} else if (vValue !== null && vValue !== true) {
							oChild.appendChild(oNewDoc.createTextNode(vValue.toString()));
						}
						oParentEl.appendChild(oChild);
					}
				}
			}
			var oNewDoc = document.implementation.createDocument("", "", null);
			loadObjTree(oNewDoc, oObjTree);
			return oNewDoc;
		}
		
		return JXONParser;
	}
	
	if (typeof define === "function") {
		define(["class", "underscore"], onDependenciesLoaded);
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
			module: "JXONParser",
			dependencies: ["Class", "_"],
			load: function() {
				for (var i = 0; i<this.dependencies.length; i++) { this.dependencies[i] = window[this.dependencies[i]]; }
				window[this.module] = onDependenciesLoaded.apply(this, this.dependencies);
			},
			checkDependencies: function() { for (var i = 0; i<this.dependencies.length; i++) { if (!window[this.dependencies[i]]) return false; } return true; }
		});
	}
})();