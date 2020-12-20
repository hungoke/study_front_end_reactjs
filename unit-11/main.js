// exercise 1 way 1 using push() method
const printArrayUsingPush = (strings, number) => {
  const arrayStrings = []
  for (let i = 0; i < number; i++) {
    arrayStrings.push(strings)
  }
  return arrayStrings
}

// exercise 1 way 2 using splice() method
const printArrayUsingSplice = (strings, number) => {
  const arrayStrings = []
  for (let i = 0; i < number; i++) {
    arrayStrings.splice(0, 0, strings)
  }

  return arrayStrings
}

// exercise 2
const reverseArray = (array) => {
  console.log(array)
  const lengthOfArray = array.length
  let reverseArray = []
  for (let i = 0; i < lengthOfArray; i++) {
    reverseArray.push(array.pop())
  }

  return reverseArray
}

// exercise 3
const deleteFalseValue = array => {
  const result = array.filter(function(value) {
    return value
  })

  return result
}

//exercise 4
function pairToObject (array) {
  let result = {}
  array.forEach(i => {
    result[i[0]] = i[1]
  const result = {}
  array.forEach(item => {
    const [key, value] = item
    result[key] = value
  })

  return result
}

// exercise 5
function sortArray (array) {
  array.sort((a, b) => {
    return a-b
  })

  return array
}

// exercise 6
const checkObject = input => {
  return (typeof input == 'object' && input !== null) ? true : false
}

// exercise 7
const pickData = (array, obj) => {
  obj = {...obj}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (array.indexOf(key) !== -1) {
        delete obj[key]
      }
    }
  }
}
