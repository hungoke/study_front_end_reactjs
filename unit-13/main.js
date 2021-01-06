// exercise 1
function getCurrentTime () {
  let currentTime = new Date()
  let time = currentTime.getDate() + '-'
  + (currentTime.getMonth() + 1) + '-' + currentTime.getFullYear() + ' '
  + currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds()
  return time
}

// exercise 2
function checkAccount (event) {
  const requirement = /^[a-z0-9_]+$/
  if (!requirement.test(event.target.value) && event.keyCode !== 8) {
    alert('Sai yêu cầu: "a-z 0-9 . _" ! Nhập lại')
  }
}

// exercise 3
const checkAmount = event => {
  const requirement = /^[0-9]+$/

  if (event.keyCode !== 8) {
    if (event.keyCode === 189) {
      alert('số tiền phải là không âm')
    }

    if (!requirement.test(event.target.value)) {
      alert('số tiền chỉ bao gồm các chữ số 0-9')
    }

    if (parseInt(event.target.value) > 1000) {
      alert('số tiền không được lớn hơn 1000')
    }
  }
}

// exercise 5
const getSelectedText = () => {
  console.log(window.getSelection().toString())
}

// exercise 6
const getFruitName = () => {
  const e = document.getElementById('fruit')
  const text = e.options[e.selectedIndex].text
  console.log(text)
}
