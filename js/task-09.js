function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector('.change-color')

const onButtonColorCgange = () => {
  const body = document.querySelector('body')
  const spanEl = document.querySelector('.color')
  body.style.backgroundColor = spanEl.textContent = getRandomHexColor()
}

btn.addEventListener('click', onButtonColorCgange)



