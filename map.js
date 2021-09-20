//HELPER FUNCTIONS
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
  };
  return areEqual;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Arrays are not equal: ${array1} != ${array2}`);
  }
};

//MAIN BODY OF CODE
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// //TEST CODE

// const test1 = ['kincardine', 'ontario', 'canada'];
// assertArraysEqual(['k', 'o', 'c'], map(test1, word => word[0]));
// assertArraysEqual(['k', 'o', 'c'], map(words, word => word[0]));
// assertArraysEqual([10, 7, 6], map(test1, word => word.length));
// //this test case fails since map operates on every element of the array. 
// assertArraysEqual(['kincardine', 'ontario'], map(test1, function(word) {
//   if (word.length >=7) {
//     return word;
//   }
// }));