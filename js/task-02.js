const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')

ingredients.map(el => {
  const ingredientEl = document.createElement('li')
  ingredientEl.textContent = el
  ingredientEl.classList.add('item')
  ingredientsList.append(ingredientEl)
})

