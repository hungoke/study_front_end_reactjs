// exercise 1
function compareArray (array1, array2) {
  if (Array.isArray(array1) !== true || Array.isArray(array2) !== true) return false
  if (array1.length !== array2.length) return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }

  return true
}

// exercise 2 (code in stackOverflow and i don't understand)
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), [])
}

// exercise 3
function chunkArray(array, chunk) {
  let arr = []
  for (let i = 0; i < array.length; i += chunk) {
    arr.push(array.slice(i, i + chunk))
  }
  return arr
}
