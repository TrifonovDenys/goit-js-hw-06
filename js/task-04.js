const countValue = document.querySelector('#value')
const decr = document.querySelector('[data-action="decrement"')
const incr = document.querySelector('[data-action="increment"')


let count = countValue.textContent
console.log(count);

  incr.addEventListener('click', function increase() {
    countValue.textContent = Number(countValue.textContent) + 1

  })


  decr.addEventListener('click', function decrease() {
    countValue.textContent = eval('countValue.textContent - 1')
  })


