"use strict";

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

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldHJpZmkuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ6ZWxmIiwicGV0cmlmaSIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJFcnJvciIsInNlbGYiLCJVTkRFRklORUQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1FLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsUUFBbEIsRUFBNEJDLEtBQTVCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUMxRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ0YsUUFBRCxJQUFhLENBQUNKLFFBQVNJLFFBQVQsRUFBbUJHLE1BQW5CLENBQWxCLEVBQStDO0FBQzlDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPUCxLQUFNLElBQU4sQ0FBWDs7QUFFQUksVUFBU0EsVUFBVUcsSUFBbkI7O0FBRUEsS0FBSSxDQUFDVCxRQUFTTSxPQUFRRixRQUFSLENBQVQsRUFBNkJNLFNBQTdCLENBQUwsRUFBK0M7QUFDOUMsU0FBT0osTUFBUDtBQUNBOztBQUVELCtCQUF1QkEsTUFBdkIsRUFBK0JGLFFBQS9CLEVBQXlDO0FBQ3hDLGdCQUFjLElBRDBCO0FBRXhDLGtCQUFnQixLQUZ3QjtBQUd4QyxjQUFZLEtBSDRCO0FBSXhDLFdBQVNDO0FBSitCLEVBQXpDOztBQU9BLFFBQU9DLE1BQVA7QUFDQSxDQS9CRDs7QUFpQ0FLLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6InBldHJpZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInBldHJpZmlcIixcblx0XHRcdFwicGF0aFwiOiBcInBldHJpZmkvcGV0cmlmaS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicGV0cmlmaS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwZXRyaWZpXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZW1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcGV0cmlmaS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInBldHJpZmktdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNYWtlcyB5b3VyIHByb3BlcnR5LXZhbHVlIG5vbi1jb25maWd1cmFibGUgYW5kIG5vbi13cml0YWJsZS5cblxuXHRcdElmIGVudGl0eSBpcyBnaXZlbiwgdGhlIHByb3BlcnR5IHdpbGwgYmUgYm91bmQgdG8gdGhlIGVudGl0eS5cblxuXHRcdEVsc2UsIGlmIHRoaXMgbW9kdWxlIGlzIHVzZWQgaW4gdGhlIGJyb3dzZXIsIHRoZSBlbnRpdHkgZGVmYXVsdHMgdG8gdGhlIEBjb2RlOndpbmRvdzsuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIGEgTm9kZUpTIGVudmlyb25tZW50LCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIEBjb2RlOmdsb2JhbDsuXG5cblx0XHROb3RlIHRoYXQgaWYgdGhlIGVudGl0eSBpcyBwZXRyaWZpZWQsIHlvdSBjYW5ub3QgdXNlIEBjb2RlOmRlbGV0ZTsgb24gaXQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgcGV0cmlmaSA9IGZ1bmN0aW9uIHBldHJpZmkoIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJlbnRpdHk6b3B0aW9uYWxcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm9wZXJ0eSB8fCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0ZW50aXR5ID0gZW50aXR5IHx8IHNlbGY7XG5cblx0aWYoICFwcm90eXBlKCBlbnRpdHlbIHByb3BlcnR5IF0sIFVOREVGSU5FRCApICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggZW50aXR5LCBwcm9wZXJ0eSwge1xuXHRcdFwiZW51bWVyYWJsZVwiOiB0cnVlLFxuXHRcdFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuXHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHR9ICk7XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGV0cmlmaTtcbiJdfQ==
