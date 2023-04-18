const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function appendItems () {
const ingredientsList = document.querySelector('#ingredients')
const ingredientsArr = ingredients.map(el => {
  const ingredientEl = document.createElement('li')
  ingredientEl.textContent = el
  ingredientEl.classList.add('item')
  return ingredientEl
})

  ingredientsList.append(...ingredientsArr)
}

appendItems()