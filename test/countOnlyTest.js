const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {

  it('should return an object with {Jason: 1} when passed the test array and the object {Jason: true}', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true}), {"Jason": 1});
  });

  it('should return an object with {Fang: 2} when passed test array and the object {Fang: true}', () => {
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), {"Fang": 2});
  });

  it('should return an object with {} when passed the test array below and the object {Spencer: true}', () => {
    assert.deepEqual(countOnly(firstNames, {"Spencer": true}), {});
  });

  it('should return an object with {} when passed the test array below and the object {Jason: false}', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": false}), {});
  });

}); 

