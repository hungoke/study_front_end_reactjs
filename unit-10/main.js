// exercise 1
function getMultiplicationTable (number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + ' * ' + i + ' = ' + number*i)
  }
}

// exercise 2
function printEvenNumber (number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'

  if (typeof number !== 'number' || number < 1 || number > 30) return error
  if (number % 2 === 0) {
    if (number > 2) {
      console.log(printEvenNumber (number - 2))
    }
    console.log(number)
  } else {
    if (number > 2) {
      console.log(printEvenNumber(number - 3))
    }
    console.log(number - 1)
  }
}

// exercise 3
function getSumNumber (number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'

  if (typeof number !== 'number' || number < 1 || number > 30) return error
  if (number === 1) return number
  return getSumNumber(number - 1) + number
}

// exercise 4
function getFactorial (number) {
  const error = 'yêu cầu nhập vào số nguyên dương trong khoảng từ 1 đến 30'

  if (typeof number !== 'number' || number < 1 || number > 30) return error
  if (number === 1) return number
  return getFactorial(number - 1) * number
}

// exercise 5
function countEvenNumberInArray () {
  const number = [1, 3, 4, 0, 8, 12, 20, 90, 9, 6, 2]
  let count = 0
  number.forEach ( n => {
    if (n % 2 === 0) count++
  })
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
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]

const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 8, score: 6.1 }
]

const mergeStudents = (names, scores) => {
  const result = []
  const findItemInScores = item => {
    for (let i = 0; i < scores.length; i++) {
      const currentStudent = scores[i]
      if (currentStudent.id === item.id) {
        return currentStudent
      }
    }
    return null
  }

  names.forEach(item => {
    const student = findItemInScores(item)
    result.push({
      id: item.id,
      name: item.name,
      score: (student && student.score) || null
    })
  })
  return result
}

// exercise 8
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]

const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]

const mergeStudents = (names, scores) => {
  const result = []
  const findItemInScores = item => {
    for (let i = 0; i < scores.length; i++) {
      const currentStudent = scores[i]
      if (currentStudent.id === item.id) {
        return currentStudent
      }
    }
    return null
  }

  names.forEach(item => {
    const student = findItemInScores(item)
    result.push({
      id: item.id,
      name: item.name,
      score: (student && student.score) || 0
    })
  })
  return result
}

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.2 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function findMinMaxList (students) {
  let min = students[0] ? students[0].score : 11
  let max = -1
  const minList = []
  const maxList = []
  // Get min & max scores
  students.forEach(student => {
    if (student.score < min) {
      min = student.score
    }
    if (student.score > max) {
      max = student.score
    }
  })
  // Get students
  students.forEach(student => {
    if (student.score === min) {
      minList.push(student)
    }
    if (student.score === max) {
      maxList.push(student)
    }
  })
  return {
    min,
    max,
    minList,
    maxList
  }
}
