# obj-values
Retrieve the values of an enumerable object.

##Overview

Use this node module when you need to retrieve values from an enumerable object - `obj-values` outputs an array,
has an optional reverse param.

##Installing 
Install with [npm](https://www.npmjs.com/package/obj-values)

```javascript
npm i obj-values --save-dev
```

##Usage

Simply require the `obj-values` module. The export function can be used in any module you desire:

```javascript
const objValues = require('obj-values');

var myObj = {
  a: 10,
  b: 200,
  c: 3000,
  d: "fourty thousand"
};

objValues(myObj);
//==> [10, 200, 3000, 'fourty thousand']
objValues(myObj, {reverse: true});
//==> ['fourty thousand', 3000, 200, 10]
objValues({foo: "bar", baz: "quux", fooBar: "norf"});
//==> ['bar', 'quux', 'norf']
```

##TODO

* commit tests

##Tests

This module uses gulp for eslint, mocha, and code coverage tools.

Run `gulp init`

```javascript
//
```

```javascript
//
```

##Related Modules

* [node-range](https://github.com/ahadb/node-range)
* [first-of-array](https://github.com/ahadb/first-of-array)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)
* [kebab-caseify](https://github.com/ahadb/kebab-caseify)
* [is-even-integer](https://github.com/ahadb/is-even-integer)

##Contributing

Feel free to file an issue or bugs
