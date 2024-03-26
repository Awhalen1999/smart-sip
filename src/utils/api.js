export function addItemToLocalStorage(item) {
  const items = JSON.parse(localStorage.getItem('checkedIngredients')) || [];
  items.push(item);
  localStorage.setItem('checkedIngredients', JSON.stringify(items));
}

export function removeItemFromLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem('checkedIngredients')) || [];
  items = items.filter((i) => i !== item);
  localStorage.setItem('checkedIngredients', JSON.stringify(items));
}

export function getCheckedItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('checkedIngredients')) || [];
}
