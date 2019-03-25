const main = document.getElementById('main')

function onClick(event) {
  console.log('hey the click happened')
}
main.addEventListener('click', onClick)

function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)
document.addEventListener('keydown', onKeyDown)


function onInputKeyDown(event) {
}

inputBox.addEventListener('keydown', onInputKeyDown)