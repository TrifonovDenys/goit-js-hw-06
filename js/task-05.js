
const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output')
}


const anon = refs.span.textContent
  
refs.input.addEventListener('input', function (event) {

  if (refs.input.value.trim() == '') {  
    refs.span.textContent = anon
  } else{
    console.log(refs.input);
    refs.span.textContent = event.currentTarget.value
  }
   
})