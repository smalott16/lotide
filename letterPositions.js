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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    //console.log(sentence[i]);
    if (!results[sentence[i]]) {          //if the character doesn't exitst make an array and give it the index value
      results[sentence[i]] = [i];
      //console.log("first", results);
    } else {                              //if the charcter does exist, push the indext value to that array
      results[sentence[i]].push(i);
      //console.log("next", results);
    }
  }
  return results;
};

module.exports = letterPositions;

//Test Code

//console.log(letterPositions("lighthouse in the house"));

// const object1 = letterPositions("hello");
// assertArraysEqual(object1["h"], [0]);
// assertArraysEqual(object1["e"], [1]);
// assertArraysEqual(object1["l"], [2,3]);
// assertArraysEqual(object1["o"], [4]);