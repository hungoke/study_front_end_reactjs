// exercise 1
function getMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) console.log(number + ' * ' + i + ' = ' + number*i)
}

// exercise 2
function printEvenNumber(number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'
  if (typeof number != 'number' || number < 1 || number > 30) return error
  if (number % 2 === 0) {
    if (number > 2) console.log(printEvenNumber(number - 2))
    console.log(number)
  } else {
    if (number > 2) console.log(printEvenNumber(number - 3))
    console.log(number - 1)
  }
}

// exercise 3
function getSumNumber(number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'
  if (typeof number != 'number' || number < 1 || number > 30) return error
  if (number === 1) return number
  return getSumNumber(number - 1) + number
}

// exercise 4
function getFactorial(number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'
  if (typeof number != 'number' || number < 1 || number > 30) return error
  if (number === 1) return number
  return getFactorial(number - 1) * number
}

// exercise 5
function countEvenNumberInArray() {
  const number = [1, 3, 4, 0, 8, 12, 20, 90, 9, 6, 2]
  let count = 0
  const checkEvenNumber = n => {
    if (n % 2 === 0) count++
  }
  number.forEach(checkEvenNumber)
  return count
}

// exercise 6
function deleteDuplicateCharacter () {
  const character = ['H', 'Ư', 'H', 'N', 'Ư', 'G', 'T', 'G', 'N', 'Â', 'T', 'M']
  console.log(character)
  for (let i = 0; i < character.length; i++) {
    for (let j = i + 1; j < character.length; j++) {
      if (character[j] === character[i]) character.splice(j, 1)
    }
  }
  return character
}

// exercise 7


