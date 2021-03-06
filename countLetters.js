const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ " + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

//words => a string of one of more words
const countLetters = function(words) {
  const lettersObj = {};

  for (let letter of words) {
    if (letter !== " ") {
      if (lettersObj[letter]) {
        lettersObj[letter] += 1;
      } else {
        lettersObj[letter] = 1;
      }
    }
  }
  //console.log(lettersObj);
  return lettersObj;
};

module.exports = countLetters;

//Test Code
// countLetters("66");
// countLetters("Spencer Malott");
// countLetters("lighthouse in the house");

// //Test the assert equals
// const test1 = countLetters("lighthouse in the house");
// assertEqual(test1["l"], 1);
// assertEqual(test1["i"], 2);
// assertEqual(test1["g"], 1);
// assertEqual(test1["h"], 4);
// assertEqual(test1["o"], 2);
// assertEqual(test1["s"], 2);
// assertEqual(test1["e"], 3);
// assertEqual(test1["n"], 1);
// assertEqual(test1["t"], 2);