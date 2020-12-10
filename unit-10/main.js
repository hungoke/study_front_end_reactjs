// exercise 1
function getMultiplicationTable (number) {
	console.log('In bảng nhân: ')
  for (let i = 1; i <= 10; i++) {
		console.log(number + ' x ' + i + ' = ' + number*i)
	}
}

//exercise 2
function printEvenNumber (number) {
	if (typeof number != 'number' || number < 1 || number > 30) {
		return 'Yêu cầu nhập số nguyên dương trong khoảng từ 1 đến 30'
	} else {
		if (number % 2 === 0) {
			if (number >= 2) {
				console.log(printEvenNumber(number - 2))
				console.log(number)
			}
		} else {
			console.log(printEvenNumber(number - 3))
			console.log(number - 1)
		}
	}
}

//exercise 3
function getSumNumber (number) {
	if (typeof number != 'number' || number < 1 || number > 30) {
		return 'Yêu cầu nhập số nguyên dương trong khoảng từ 1 đến 30'
	} else {
		if (number === 0) return 0
		return getSumNumber(number - 1) + number
	}
}

//exercise 4
function getFactorial (number) {
	if (typeof number != 'number' || number < 1 || number > 30) {
		return 'Yêu cầu nhập số nguyên dương trong khoảng từ 1 đến 30'
	} else {
		if (number === 1) return 1
		return getFactorial(number - 1) * number
	}
}

//exercise 5
function countEvenNumberInArray () {
	const number = [1, 3, 4, 6, 7, 8, 0]
	let count = 0
	for (let i = 0; i < number.length; i++) {
		if (number[i] % 2 === 0) {
			count++
		}
	}
	return count
}

//exercise 6
function deleteCharacterOverlap () {
	let character = ['H', 'Ư', 'H', 'N', 'G', 'N', 'G', 'T', 'Ư', 'Â', 'G', 'H', 'Ư', 'M', 'N', 'G' , 'T', 'Â']
	console.log(character)
	for (let i = 0; i < character.length; i++) {
		for (let j = i + 1; j < character.length; j ++) {
			if (character[j] === character[i]) {
				character.splice(j, 1)
			}
		}
	}
	console.log(character)
}

//exercise 7
function mergeArray () {
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

	studentScores.forEach()
}