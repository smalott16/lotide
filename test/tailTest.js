const tail = require('../tail');

const assert = require('chai').assert;

describe('#tail', () => {

  it('should return [Lighthouse, Labs] for [\"Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"] );
  });

  it('should return [] for [\"Lighthouse"]', () => {
    assert.deepEqual(tail(["Lighthouse"]), [])
  });

  it('should not modify the original array [\"lighthouse", "Labs"]', () => {
    const originalArray = ["lighthouse", "labs"];
    tail(originalArray);
    assert.deepEqual(originalArray, ["lighthouse", "labs"]);
  });

})
