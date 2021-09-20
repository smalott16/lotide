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

module.exports = middle;

