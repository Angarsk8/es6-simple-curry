SIMPLE CURRY
=====

A simple curry function.

# API

```javascript
const curry = require('simpleCurry')

// Create a curry function as follow:
const add = curry((a, b) => a + b)

// It can be called like:
add(1, 2) // => 3

// you can partially apply it too:
const add1 = add(1)
add1(2) // => 3

// Example taken from the Lodash curry implementation:

const abc = (a, b, c) => [a, b, c]
const curried = curry(abc)

curried(1)(2)(3)
// => [1, 2, 3]

curried(1, 2)(3)
// => [1, 2, 3]

curried(1, 2, 3)
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(null, 3)(2)
// => [1, 2, 3]
```

# Installation

```bash
npm install curry
```
