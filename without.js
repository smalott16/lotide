const eqArrays = function(array1, array2) {
  // check if arrays are the same length
  let areEqual = true;
  if (array1.length !== array2.length) {
    areEqual = false;
  }
  //check each value of array and if any are not matching make it false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Arrays are not equal: ${array1} != ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  //initilize new array to return
  let modified = [];
  //console.log(source);
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      modified.push(source[i]);
    }
  }
  return modified;
};

module.exports = without;

// //Test Code
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);