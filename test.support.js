"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "petrifi",
              			"path": "petrifi/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/petrifi.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"petrifi": "petrifi"
              		}
              	@end-include
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var petrifi = require("./petrifi.support.js");
//: @end-client







//: @client:

describe("petrifi", function () {

	describe("`petrifi( 'hello', 'world', { } )`", function () {
		it("should contain hello property with value of 'world'", function () {

			var test = {};
			petrifi("hello", "world", test);

			assert.equal(test.hello, "world");

		});
	});

	describe("`property-value enumerable`", function () {
		it("should be equal to true", function () {

			var test = {};
			petrifi("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.enumerable, true);

		});
	});

	describe("`property-value configurable`", function () {
		it("should be equal to false", function () {

			var test = {};
			petrifi("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.configurable, false);

		});
	});

	describe("`property-value writable`", function () {
		it("should be equal to false", function () {

			var test = {};
			petrifi("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.writable, false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicGV0cmlmaSIsImRlc2NyaWJlIiwiaXQiLCJ0ZXN0IiwiZXF1YWwiLCJoZWxsbyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCQSxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUkscURBQUosRUFBMkQsWUFBTzs7QUFFakUsT0FBSUMsT0FBTyxFQUFYO0FBQ0FILFdBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQkcsSUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsS0FBbkIsRUFBMEIsT0FBMUI7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxPQUFPLEVBQVg7QUFDQUgsV0FBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCRyxJQUEzQjs7QUFFQSxPQUFJRyxhQUFhLHdDQUFpQ0gsSUFBakMsRUFBdUMsT0FBdkMsQ0FBakI7QUFDQUwsVUFBT00sS0FBUCxDQUFjRSxXQUFXQyxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQU4sVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLE9BQU8sRUFBWDtBQUNBSCxXQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFBMkJHLElBQTNCOztBQUVBLE9BQUlHLGFBQWEsd0NBQWlDSCxJQUFqQyxFQUF1QyxPQUF2QyxDQUFqQjtBQUNBTCxVQUFPTSxLQUFQLENBQWNFLFdBQVdFLFlBQXpCLEVBQXVDLEtBQXZDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBUCxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsT0FBTyxFQUFYO0FBQ0FILFdBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQkcsSUFBM0I7O0FBRUEsT0FBSUcsYUFBYSx3Q0FBaUNILElBQWpDLEVBQXVDLE9BQXZDLENBQWpCO0FBQ0FMLFVBQU9NLEtBQVAsQ0FBY0UsV0FBV0csUUFBekIsRUFBbUMsS0FBbkM7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7O0FBWUEsQ0FqREQ7O0FBbURBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicGV0cmlmaVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGV0cmlmaS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcGV0cmlmaS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicGV0cmlmaVwiOiBcInBldHJpZmlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHBldHJpZmkgPSByZXF1aXJlKCBcIi4vcGV0cmlmaS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwicGV0cmlmaVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBwZXRyaWZpKCAnaGVsbG8nLCAnd29ybGQnLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBoZWxsbyBwcm9wZXJ0eSB3aXRoIHZhbHVlIG9mICd3b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRwZXRyaWZpKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QuaGVsbG8sIFwid29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHByb3BlcnR5LXZhbHVlIGVudW1lcmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRwZXRyaWZpKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLmVudW1lcmFibGUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwcm9wZXJ0eS12YWx1ZSBjb25maWd1cmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0cGV0cmlmaSggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0ZXN0LCBcImhlbGxvXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHJvcGVydHktdmFsdWUgd3JpdGFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0cGV0cmlmaSggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0ZXN0LCBcImhlbGxvXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci53cml0YWJsZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
