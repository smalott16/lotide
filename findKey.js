const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKey = function(obj, callBack) {
  let keyMatch;
  for (let key in obj) {
    //console.log(obj[key]);
    if (callBack(obj[key])) {
      keyMatch = key;
      return keyMatch;
    }
  }
  return keyMatch;
};

//TEST CODE
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"
// console.log(result1);
// assertEqual("noma", result1);

// console.log("---");

// const result2 = findKey({
//   "one": 1,
//   "two": 2
// }, x => x === 2)
// console.log(result2);
// assertEqual(2, result2);
// assertEqual("two", result2);

// const result3 = findKey({
//   "Blue Hill": { stars: {"one": 1} },
//   "Akaleri":   { stars: {"one": 3} },
//   "noma":      { stars: {"one": 5} },
//   "elBulli":   { stars: {"one": 7} },
//   "Ora":       { stars: {"one": 1} },
//   "Akelarre":  { stars: {"one": 1} }
// }, x => x.stars.one === 7);
// console.log(result3);
