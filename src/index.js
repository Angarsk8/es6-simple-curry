// @flow
const bind = require('fast-bind')

type Curried = (...args?: mixed[]) => mixed

function curry(func: () => mixed, arity: number = func.length): Curried {
  return function (...args) {
    const definedArgs = args.slice(0, arity).filter(p => p)
    if (definedArgs.length >= arity) {
      return func.call(null, ...definedArgs)
    } else {
      return curry(
        bind.call(func, null, ...definedArgs),
        arity - definedArgs.length
      )
    }
  }
}

module.exports = curry