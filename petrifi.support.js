"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*;
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
			"zelf": "zelf"
		}
	@end-include
*/

var protype = require("protype");
var zelf = require("zelf");

var petrifi = function petrifi(property, value, entity) {
	/*;
 	@meta-configuration:
 		{
 			"property:required": "string",
 			"value:required": "*",
 			"entity:optional": "object"
 		}
 	@end-meta-configuration
 */

	if (!property || !protype(property, STRING)) {
		throw new Error("invalid property");
	}

	var self = zelf(this);

	entity = entity || self;

	if (!protype(entity[property], UNDEFINED)) {
		return entity;
	}

	(0, _defineProperty2.default)(entity, property, {
		"enumerable": true,
		"configurable": false,
		"writable": false,
		"value": value
	});

	return entity;
};

module.exports = petrifi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldHJpZmkuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ6ZWxmIiwicGV0cmlmaSIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJFcnJvciIsInNlbGYiLCJVTkRFRklORUQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUUsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDO0FBQzFEOzs7Ozs7Ozs7O0FBVUEsS0FBSSxDQUFDRixRQUFELElBQWEsQ0FBQ0osUUFBU0ksUUFBVCxFQUFtQkcsTUFBbkIsQ0FBbEIsRUFBK0M7QUFDOUMsUUFBTSxJQUFJQyxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9QLEtBQU0sSUFBTixDQUFYOztBQUVBSSxVQUFTQSxVQUFVRyxJQUFuQjs7QUFFQSxLQUFJLENBQUNULFFBQVNNLE9BQVFGLFFBQVIsQ0FBVCxFQUE2Qk0sU0FBN0IsQ0FBTCxFQUErQztBQUM5QyxTQUFPSixNQUFQO0FBQ0E7O0FBRUQsK0JBQXVCQSxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUM7QUFDeEMsZ0JBQWMsSUFEMEI7QUFFeEMsa0JBQWdCLEtBRndCO0FBR3hDLGNBQVksS0FINEI7QUFJeEMsV0FBU0M7QUFKK0IsRUFBekM7O0FBT0EsUUFBT0MsTUFBUDtBQUNBLENBL0JEOztBQWlDQUssT0FBT0MsT0FBUCxHQUFpQlQsT0FBakIiLCJmaWxlIjoicGV0cmlmaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwZXRyaWZpXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwZXRyaWZpL3BldHJpZmkuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInBldHJpZmkuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicGV0cmlmaVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVtYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BldHJpZmkuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwZXRyaWZpLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TWFrZXMgeW91ciBwcm9wZXJ0eS12YWx1ZSBub24tY29uZmlndXJhYmxlIGFuZCBub24td3JpdGFibGUuXG5cblx0XHRJZiBlbnRpdHkgaXMgZ2l2ZW4sIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIGJvdW5kIHRvIHRoZSBlbnRpdHkuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIHRoZSBicm93c2VyLCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIHRoZSBAY29kZTp3aW5kb3c7LlxuXG5cdFx0RWxzZSwgaWYgdGhpcyBtb2R1bGUgaXMgdXNlZCBpbiBhIE5vZGVKUyBlbnZpcm9ubWVudCwgdGhlIGVudGl0eSBkZWZhdWx0cyB0byBAY29kZTpnbG9iYWw7LlxuXG5cdFx0Tm90ZSB0aGF0IGlmIHRoZSBlbnRpdHkgaXMgcGV0cmlmaWVkLCB5b3UgY2Fubm90IHVzZSBAY29kZTpkZWxldGU7IG9uIGl0LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IHBldHJpZmkgPSBmdW5jdGlvbiBwZXRyaWZpKCBwcm9wZXJ0eSwgdmFsdWUsIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwiZW50aXR5Om9wdGlvbmFsXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvcGVydHkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGVudGl0eSA9IGVudGl0eSB8fCBzZWxmO1xuXG5cdGlmKCAhcHJvdHlwZSggZW50aXR5WyBwcm9wZXJ0eSBdLCBVTkRFRklORUQgKSApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgcHJvcGVydHksIHtcblx0XHRcImVudW1lcmFibGVcIjogdHJ1ZSxcblx0XHRcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSxcblx0XHRcIndyaXRhYmxlXCI6IGZhbHNlLFxuXHRcdFwidmFsdWVcIjogdmFsdWVcblx0fSApO1xuXG5cdHJldHVybiBlbnRpdHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBldHJpZmk7XG4iXX0=
