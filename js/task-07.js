const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

function initValue(){
  spanEl.style.fontSize = inputEl.valueAsNumber + 'px'
  return inputEl.addEventListener('input', dragFunction)
}

function dragFunction(){
  spanEl.style.fontSize = inputEl.valueAsNumber + 'px'
}

initValue()