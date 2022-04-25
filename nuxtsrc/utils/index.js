// utils/index.js
import reduce from 'lodash/reduce'
import map from 'lodash/map'
import omit from 'lodash/omit'

export function normalizeArrays (o) {
  return reduce(o, (prev, cur, key) => {
    if (typeof cur === 'object') {
      prev[key] = map(map(cur, toRecord), normalizeArrays)
    } else {
      prev[key] = cur
    }
    return prev
  }, {})
}

// to be called wih every object that should be in an array
// uses the key (-KtZ5JBrYwsLg0P0MUQc) to add it to the object
function toRecord (o, key) {
  return {
    '.key': key,
    ...o,
  }
}