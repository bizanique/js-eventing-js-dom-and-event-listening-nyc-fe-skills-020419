const main = document.getElementById('main')

function onClick(event) {
  console.log('hey the click happened')
}
main.addEventListener('click', onClick)

function onKeyDown(event) {
  console.log(event)
}

main.addEventListener('click, onClick')
document.addEventListener('keydown', onKeyDown)