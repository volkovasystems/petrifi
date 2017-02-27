"use strict";var _defineProperty = require("babel-runtime/core-js/object/define-property");var _defineProperty2 = _interopRequireDefault(_defineProperty);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                                                        	@module-license:
                                                                                                                                                                                                                                                        		The MIT License (MIT)
                                                                                                                                                                                                                                                        		@mit-license
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Copyright (@c) 2017 Richeve Siodina Bebedor
                                                                                                                                                                                                                                                        		@email: richeve.bebedor@gmail.com
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                        		of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                        		in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                        		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                        		copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                        		furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                        		copies or substantial portions of the Software.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                        		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                        		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                        		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                        		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                        		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                        		SOFTWARE.
                                                                                                                                                                                                                                                        	@end-module-license
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@module-configuration:
                                                                                                                                                                                                                                                        		{
                                                                                                                                                                                                                                                        			"package": "petrifi",
                                                                                                                                                                                                                                                        			"path": "petrifi/petrifi.js",
                                                                                                                                                                                                                                                        			"file": "petrifi.js",
                                                                                                                                                                                                                                                        			"module": "petrifi",
                                                                                                                                                                                                                                                        			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                                                        			"contributors": [
                                                                                                                                                                                                                                                        				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
                                                                                                                                                                                                                                                        			],
                                                                                                                                                                                                                                                        			"email": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                                                        			"repository": "https://github.com/volkovasystems/petrifi.git",
                                                                                                                                                                                                                                                        			"test": "petrifi-test.js",
                                                                                                                                                                                                                                                        			"global": true
                                                                                                                                                                                                                                                        		}
                                                                                                                                                                                                                                                        	@end-module-configuration
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@module-documentation:
                                                                                                                                                                                                                                                        		Makes your property-value non-configurable and non-writable.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		If entity is given, the property will be bound to the entity.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Else, if this module is used in the browser, the entity defaults to the @code:window;.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Else, if this module is used in a NodeJS environment, the entity defaults to @code:global;.
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        		Note that if the entity is petrified, you cannot use @code:delete; on it.
                                                                                                                                                                                                                                                        	@end-module-documentation
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        	@include:
                                                                                                                                                                                                                                                        		{
                                                                                                                                                                                                                                                        			"falzy": "falzy",
                                                                                                                                                                                                                                                        			"kein": "kein",
                                                                                                                                                                                                                                                        			"protype": "protype",
                                                                                                                                                                                                                                                        			"wichevr": "wichevr",
                                                                                                                                                                                                                                                        			"zelf": "zelf"
                                                                                                                                                                                                                                                        		}
                                                                                                                                                                                                                                                        	@end-include
                                                                                                                                                                                                                                                        */

var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var wichevr = require("wichevr");
var zelf = require("zelf");

var petrifi = function petrifi(property, value, entity) {
	/*;
                                                         	@meta-configuration:
                                                         		{
                                                         			"property:required": "string",
                                                         			"value:required": "*",
                                                         			"entity": "object"
                                                         		}
                                                         	@end-meta-configuration
                                                         */

	if (falzy(property) || !protype(property, NUMBER + STRING)) {
		throw new Error("invalid property");
	}

	var self = zelf(this);

	entity = wichevr(entity, self);

	if (kein(entity, property)) {
		return entity;
	}

	try {
		(0, _defineProperty2.default)(entity, property, {
			"enumerable": true,
			"configurable": false,
			"writable": false,
			"value": value });


	} catch (error) {
		throw new Error("cannot petrify " + property + ", " + error.stack);
	}

	return entity;
};

module.exports = petrifi;

//# sourceMappingURL=petrifi.support.js.map