const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

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