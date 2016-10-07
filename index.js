'use-strict';

var getinit = require('./options');

/**
 * Expose `objValues`
 */
module.exports = objValues;

function objValues(obj, options) {
  options = getinit(options);
  var keys = Object.keys(obj);
  var val = [];

  if (options.reverse === true) {
    for (var i = 0; i < keys.length; i++) {
      val.push(obj[keys[i]]);
    }
    return val.reverse();
  }
  else {
    for (i = 0; i < keys.length; i++) {
      val.push(obj[keys[i]]);
    }
    return val;
  }
}
