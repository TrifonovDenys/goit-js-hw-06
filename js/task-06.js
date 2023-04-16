const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('focus', onImputFocus)
inputEl.addEventListener('blur', onImputBlur)

function onImputFocus() {
  inputEl.classList.remove('valid', 'invalid')
}

function onImputBlur() {
  const inputNoSpaceLength = inputEl.value.trim().length
  if (inputNoSpaceLength >= (+inputEl.dataset.length)) {
    inputEl.classList.add('valid')
  } else {
    inputEl.classList.add('invalid')
  }
}
