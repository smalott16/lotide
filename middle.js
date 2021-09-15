//Function to check if two arrays are equal
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

//Function compares arrays and prints a message depending on their equality
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Arrays are not equal: ${array1} != ${array2}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  //Side case - return empty array if length is 2 or less (i.e. no middle)
  if (array.length <= 2) {
    return middleArray;
  }
  //Case for even number of elements
  if (array.length % 2 === 0) {
    middleArray = [array[(array.length) / 2 - 1], array[array.length / 2]];
  } else { //Case for odd number of elements
    middleArray = [array[Math.floor(array.length / 2)]];
  }
  return middleArray;
};

//Test Cases
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle(["Joe", "George", "Mike", "Amahd"]));
console.log(middle([1,2,3,99]));
console.log(middle([1,2,3,4,5,6,7,8,9]));
assertArraysEqual(["George", "Mike"], middle((["Joe", "George", "Mike", "Amahd"])));
assertArraysEqual(["George", "Mike"], middle((["Joe", "George", "Mike"])));

//Check if array changes after running the middle
const testArray = ["Joe", "George", "Mike", "Amahd"];
console.log(middle(testArray));
assertArraysEqual(testArray, ["Joe", "George", "Mike", "Amahd"]);