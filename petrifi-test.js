
const assert = require( "assert" );
const petrifi = require( "./petrifi.js" );

let test = { };
petrifi( "hello", "world", test );

let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );

assert.equal( test.hello, "world", "should be equal to 'hello'" );

assert.equal( descriptor.configurable, false, "should be equal to false" );

assert.equal( descriptor.enumerable, true, "should be equal to true" );

assert.equal( descriptor.writable, false, "should be equal to false" );

petrifi( "hello", "value", test );

assert.equal( test.hello, "world", "should be equal to 'hello'" );

console.log( "ok" );
