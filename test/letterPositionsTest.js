const assertArraysEqual = require('../assertArraysEqual')
const letterPositions = require('../letterPositions');
const assert = require('chai').assert

const result1 = {
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
};

describe('#letterPositions', () => {

  it('should return {} when given a empyt string', () => {
    assert.deepEqual(letterPositions(""), {});
  })

  it('should return {} when given a string with no characters', () => {
    assert.deepEqual(letterPositions(" "), {});
  })

  it('should return {} when given undefined', () => {
    assert.deepEqual(letterPositions(undefined), {});
  })

  it('should return the the object above (see source code) when passed the string \"lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), result1);
  });
});
