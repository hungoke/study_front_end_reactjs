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

// exercise 4
const intersection = (...arrays) => {
  if (!arrays.length) {
    return []
  }
  if (arrays.length === 1) {
    return arrays[0]
  }
  const [arr1, arr2] = arrays
  let result = []
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if (item2 === item1) {
        result.push(item1)
        arrays.splice(0, 2)
        const items = intersection(result, ...arrays)
        result = [...result, ...items]
      }
    })
  })
  return result
}

// exercise 5
const date1 = new Date(2020, 12, 12, 6)
const date2 = new Date(2020, 12, 12, 5)
const compareDate = (date1, date2) => {
  const time1 = date1.getTime()
  const time2 = date2.getTime()

  if (time1 > time2) {
    return 'after'
  }

  if (time1 === time2) {
    return 'equal'
  }

  return 'before'
}
