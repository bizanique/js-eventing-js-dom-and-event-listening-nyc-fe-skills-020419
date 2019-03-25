const main = document.getElementById('main')

function onClick(event) {
  console.log('hey the click happened')
}
main.addEventListener('click', onClick)

function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)
// document.addEventListener('keydown', onKeyDown)

const inputBox = document.getElementById ('baby')
function onInputKeyDown(event) {
  console.log(event)
}



if (event.keyCode === 71) {
  event.preventDefault()
} else {
  
}
inputBox.addEventListener('keydown', onInputKeyDown)










const p =document.getElementById('yellow')

function onYellowClick() {
}
p.addEventListener('click', () => {
  console.log(event)
})