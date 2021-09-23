const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  if (sentence === undefined) {
    return results;
  }

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

