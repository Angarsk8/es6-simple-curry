// Tests taken from the curry library
'use strict';

const curry = require('../lib')
const a = require('assert')

describe('curry', () => {

  it('should curry in the haskell sense, taking the arity from the ', () => {
    const sum5 = (a, b, c, d, e, f) => a + b + c + d + e + f
    const sum5C = curry(sum5)

    a.equal(sum5(1, 2, 3, 4, 5, 6), sum5C(1)(2)(3)(4)(5)(6))
  })

  it('should be pure - each new argument should not affect the overall list', () => {
      const add = curry((a, b) => a + b )
      const add1 = add(1)
      const add2 = add(2)
      a.equal(add1(1), 2)
      a.equal(add1(2), 3)
      a.equal(add1(3), 4)
      a.equal(add1(4), 5)

      a.equal(add2(1), 3)
      a.equal(add2(2), 4)
      a.equal(add2(3), 5)
      a.equal(add2(4), 6)
  })

  it('should drop "extra" arguments', () => {
      var reportArgs = curry(function(a, b){ return [].slice.call(arguments) })
      a.deepEqual(reportArgs('a', 'b', 'c', 'd', 'e'), ['a', 'b'])
  })

  it('should allow multiple arguments to be passed at a time', () => {
      var sum3 = curry((a, b, c) => a + b + c)

      a.equal(sum3(1, 2, 3), sum3(1, 2)(3))
      a.equal(sum3(1, 2, 3), sum3(1)(2, 3))
      a.equal(sum3(1, 2, 3), sum3(1)(2)(3))
  })

  it('should allow 0 arg curried fns', () => {
      const noop = curry(() => {})

      a.equal(noop(), undefined)
  })
})