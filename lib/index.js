"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function curry(func) {
  var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var definedArgs = args.slice(0, arity).filter(function (p) {
      return p;
    });
    if (definedArgs.length >= arity) {
      return func.call.apply(func, [null].concat(_toConsumableArray(definedArgs)));
    } else {
      return curry(func.bind.apply(func, [null].concat(_toConsumableArray(definedArgs))), arity - definedArgs.length);
    }
  };
}


module.exports = curry;