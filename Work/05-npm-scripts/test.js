var assert = require('assert');
var math = require('./math');

assert(math.add(3, 4) === 7);
assert(math.multiply(3, 4) === 12);
assert(math.subtract(3, 4) === -1);

console.log('All tests passed!')