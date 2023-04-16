const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')


inputEl.addEventListener('input', dragFunction)

function dragFunction(){
  spanEl.style.fontSize = inputEl.valueAsNumber + 'px'
}