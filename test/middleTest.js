const middle = require('../middle');

const assert = require('chai').assert;

describe('#middle', () => {

  it('should return [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [\"George", "Mike"] for ["Joe", "George", "Mike", "Amahd"]', () => {
    assert.deepEqual(middle(["Joe", "George", "Mike", "Amahd"]), ["George", "Mike"]);
  });

  it('should not change the original array of [\"Joe", "George", "Mike", "Amahd"]', () => {
    const testArray = ["Joe", "George", "Mike", "Amahd"];
    middle(testArray);
    assert.deepEqual(testArray, ["Joe", "George", "Mike", "Amahd"]);
  })
});
