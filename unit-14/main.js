function show1 () {
  document.getElementsByTagName("ul")[3].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[5].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[7].setAttribute("class", "submenu")
  var currentClass = document.getElementsByTagName("ul")[1]
  if (currentClass.className === "submenu") {
    currentClass.setAttribute("class", "showsubmenu")
  } else {
    currentClass.setAttribute("class", "submenu")
  }
}

function show2 () {
  document.getElementsByTagName("ul")[1].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[5].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[7].setAttribute("class", "submenu")
  var currentClass = document.getElementsByTagName("ul")[3]
  if (currentClass.className === "submenu") {
    currentClass.setAttribute("class", "showsubmenu")
  } else {
    currentClass.setAttribute("class", "submenu")
  }
}

function show3 () {
  document.getElementsByTagName("ul")[3].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[1].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[7].setAttribute("class", "submenu")
  var currentClass = document.getElementsByTagName("ul")[5]
  if (currentClass.className === "submenu") {
    currentClass.setAttribute("class", "showsubmenu")
  } else {
    currentClass.setAttribute("class", "submenu")
  }
}

function show4 () {
  document.getElementsByTagName("ul")[3].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[5].setAttribute("class", "submenu")
  document.getElementsByTagName("ul")[1].setAttribute("class", "submenu")
  var currentClass = document.getElementsByTagName("ul")[7]
  if (currentClass.className === "submenu") {
    currentClass.setAttribute("class", "showsubmenu")
  } else {
    currentClass.setAttribute("class", "submenu")
  }
}