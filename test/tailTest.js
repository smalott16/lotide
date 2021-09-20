const assertEqual = require('../assertEqual');
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


// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const check = ["Yo Yo"];
// console.log(tail(check));