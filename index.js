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
  const val = [];
  let key;

  if (Array.isArray(obj)) {
    throw new Error('Expects object as paramater');
  }

  if (options.reverse === true) {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        val.push(obj[key]);
      }
    }
    return val.reverse();
  } else {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        val.push(obj[key]);
      }
    }
    return val;
  }
}

