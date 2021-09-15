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
  console.log(lettersObj);
};

//Test Code
countLetters("66");
countLetters("Spencer Malott");
countLetters("lighthouse in the house");
