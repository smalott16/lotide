const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual([1,2,3,4], [1,2,3,4]);
assertArraysEqual([1,2,3,4], [1,2,3,"4"]);
assertArraysEqual(["1", "2"], ["1", "2"]);