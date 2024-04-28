const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('#cookie')
const btnNewCookie = document.querySelector('#btnNewCookie')

cookie.addEventListener('click', toggleScreen)
btnNewCookie.addEventListener('click', toggleScreen)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}