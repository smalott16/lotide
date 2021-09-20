const tail = function(array) {
  let modified = [];
  modified = array.slice(1, array.length);
  return modified;
};

module.exports = tail;
