//task 1
// First way
let firstLi = document.querySelector('ul').firstElementChild.textContent
let lastLi = document.querySelector('ul').lastElementChild.textContent
let secondLi = document.querySelector('ul').children[1].textContent
let thridLi = document.querySelector('ul').children[2].textContent
let fourthLi = document.querySelector('ul').children[3].textContent


console.log(firstLi + ', ' + lastLi + ', ' + secondLi + ', ' + fourthLi + ', ' + thridLi)

//Second way

let oneLi = document.body.children[0].firstElementChild.textContent
let fiveLi = document.body.children[0].lastElementChild.textContent
let twoLi = document.body.children[0].children[1].textContent
let threeLi = document.body.children[0].children[2].textContent
let fourLi = document.body.children[0].children[3].textContent


console.log(oneLi + ', ' + fiveLi + ', ' + twoLi + ', ' + fourLi + ', ' + threeLi)


//task 2

let paragraf = document.querySelector('h1')
paragraf.style.background = 'green'

let firstParagraf = document.querySelector('div').firstElementChild
firstParagraf.style.fontWeight = 'bold'
let secondParagraf = document.querySelector('div').children[1]
secondParagraf.style.color = 'red'
let thridParagraf = document.querySelector('div').children[2]
thridParagraf.style.textDecoration = 'underline'
let fourthParagraf = document.querySelector('div').children[3]
fourthParagraf.style.fontStyle = 'italic'

let boxList = document.getElementById('myList')
boxList.style.listStyle = 'none'
boxList.style.display = 'flex'

let line = document.querySelector('span')
line.style.display = 'none'

// task 3

function clickMy() {
  let item = document.getElementById('item')
  item.innerHTML += '<div>' + 'I was pressed!' + '</div>'
}
function mouseEnter() {
  let item = document.getElementById('item')
  item.innerHTML += '<div>' + 'Mouse on me!' + '</div>'
}

function mouseLeave() {
  let item = document.getElementById('item')
  item.innerHTML += '<div>' + 'Mouse is not me!' + '</div>'
}