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

//Body of Take Until Function
const takeUntil = function(array, callback) {
  newArray =[];
  //loop through array
  // array.forEach(function(element) {
  //   //if a negative number is encountered enter this conditional which exits the loop
  //   if (callback(element)) {
  //     console.log("found a negative number:", element);
  //     return newArray;
  //   }
  //   console.log("print", element)
  //   newArray.push(element);
  // })
  // return newArray;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      //console.log("found a negative:", array[i]);
      return newArray;
    }
    //console.log("loops", i);
    newArray.push(array[i]);
  }
  return newArray;
};

//Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const results2 = takeUntil(data1, x => x % 2 === 0);
console.log(results2);
assertArraysEqual([1], takeUntil(data1, x => x % 2 === 0));
assertArraysEqual([1, 2], takeUntil(data1, x => x % 2 === 0));
assertArraysEqual([1], takeUntil(data1, x => x % 2 !== 0));
assertArraysEqual([], takeUntil(data1, x => x % 2 !== 0));