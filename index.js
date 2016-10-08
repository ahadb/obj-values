'use-strict';

/** dependency: param-options
 *
 * @type {*|exports|module.exports}
 */

var getinit = require('param-options');

/**
 * Expose `objValues`
 */
module.exports = objValues;

function objValues(obj, options) {
  options = getinit(options);
  var keys = Object.keys(obj);
  var val = [];

  if (Array.isArray(obj)) {
    throw new Error('Expects object as paramater');
  }

  if (options.reverse === true) {
    for (var i = 0; i < keys.length; i++) {
      val.push(obj[keys[i]]);
    }
    return val.reverse();
  } else {
    for (i = 0; i < keys.length; i++) {
      val.push(obj[keys[i]]);
    }
    return val;
  }
}
