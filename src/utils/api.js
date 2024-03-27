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

export function getCustomItemsFromLocalStorage() {
  const customItems = localStorage.getItem('customItems');
  return customItems ? JSON.parse(customItems) : {};
}

export function addCustomItemToLocalStorage(category, item) {
  const customItems = getCustomItemsFromLocalStorage();
  customItems[category] = [...(customItems[category] || []), item];
  localStorage.setItem('customItems', JSON.stringify(customItems));
}

export function removeCustomItemFromLocalStorage(category, item) {
  const customItems = getCustomItemsFromLocalStorage();
  customItems[category] = customItems[category].filter((i) => i !== item);
  localStorage.setItem('customItems', JSON.stringify(customItems));
}
