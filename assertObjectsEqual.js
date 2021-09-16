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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //assuming the above conditions passes and they are the same length, check the key values
  for (let key of Object.keys(object1)) {
    //if the key value pair is an array, check if the arrays are equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //conditional for arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //if it makes it here without ever exiting the loop then everything must be equal
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

//Test code
const testObj1 = {a: "1", b: "2"};
const testObj2 = {b: "2", a: "1"};
//console.log(eqObjects(testObj1, testObj2));
assertObjectsEqual(testObj1, testObj2);

const testObj3 = {a: "1", b: "2", c: "3"};
//console.log(eqObjects(testObj1, testObj3));
assertObjectsEqual(testObj1, testObj3);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false
assertObjectsEqual(cd, cd2);
