const assert = require( "assert" );
const petrifi = require( "./petrifi.js" );

assert.deepEqual( petrifi( "hello", "world", { } ), { "hello": "world" } );
assert.deepEqual( petrifi( 1, "world", { } ), { "1": "world" } );

console.log( "ok" );
