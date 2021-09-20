const assertEqual = require('./assertEqual');

const head = function(array) {
  const firstVal = array.shift();
  return firstVal;
}

module.exports = head;
