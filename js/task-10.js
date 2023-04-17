function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls > input')
const buttonCreate = document.querySelector('#controls > [data-create]')
const buttonDestroy = document.querySelector('#controls > [data-destroy]')
const divBoxes = document.querySelector('#boxes')
let str = ''

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    str += `<div style='background-color: ${getRandomHexColor()}; margin-top: 5px; width:${30 + i * 10}px; height:${30 + i * 10}px'></div>`
  }
  divBoxes.insertAdjacentHTML("beforeend", `${str}`)
}

buttonCreate.addEventListener('click', () => {
  divBoxes.innerHTML = ''
  str = ''
  createBoxes(inputEl.valueAsNumber)
})

buttonDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = ''
  inputEl.value = ''
})


