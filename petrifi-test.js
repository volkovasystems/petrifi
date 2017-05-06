
const assert = require( "assert" );
const petrifi = require( "./petrifi.js" );

let test = { };
petrifi( "hello", "world", test );
let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

assert.equal( test.hello, "world", "should have value 'hello'" );

assert.equal( descriptor.configurable, false, "should be false" );

assert.equal( descriptor.enumerable, true, "should be true" );

assert.equal( descriptor.writable, false, "should be false" );

petrifi( "hello", "value", test );

assert.equal( test.hello, "world", "should have value 'hello'" );

console.log( "ok" );
