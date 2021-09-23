const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ " + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

//all items: an array of strings that we need to look through
//itemsToCount: and object speficying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;


