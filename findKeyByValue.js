const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ " + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

// => obj is an object
// => val is a value that we need to search for in the object
const findKeyByValue = function(obj, val) {
  let keyMatch;
  for (let key in obj) {
    //console.log(obj[key]);
    if (obj[key] === val) {
      keyMatch = key;
      break;
    }
  }
  return keyMatch;
};

// //Test Code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama");