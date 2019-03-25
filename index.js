const main = document.getElementById('main')

function onClick() {
  console.log('hey the click happened')
}
main.addEventlistener('click', onClick)

