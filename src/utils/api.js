export function addItemToLocalStorage(item) {
  let items = getCheckedItemsFromLocalStorage();
  if (!items.includes(item)) {
    items.push(item);
    localStorage.setItem('checkedIngredients', JSON.stringify(items));
  }
}

export function removeItemFromLocalStorage(item) {
  let items = getCheckedItemsFromLocalStorage();
  items = items.filter((i) => i !== item);
  localStorage.setItem('checkedIngredients', JSON.stringify(items));
}

export function getCheckedItemsFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('checkedIngredients')) || [];
  } catch (error) {
    console.error(
      'Error parsing checkedIngredients from local storage:',
      error
    );
    return [];
  }
}

export function getCustomItemsFromLocalStorage() {
  try {
    const customItems = localStorage.getItem('customItems');
    return customItems ? JSON.parse(customItems) : {};
  } catch (error) {
    console.error('Error parsing customItems from local storage:', error);
    return {};
  }
}

export function addCustomItemToLocalStorage(category, item) {
  const customItems = getCustomItemsFromLocalStorage();
  if (!customItems[category] || !customItems[category].includes(item)) {
    customItems[category] = [...(customItems[category] || []), item];
    localStorage.setItem('customItems', JSON.stringify(customItems));
  }
}

export function removeCustomItemFromLocalStorage(category, item) {
  const customItems = getCustomItemsFromLocalStorage();
  if (customItems[category]) {
    customItems[category] = customItems[category].filter((i) => i !== item);
    localStorage.setItem('customItems', JSON.stringify(customItems));
  }
}

export function getSettingFromLocalStorage(key) {
  try {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    return settings[key];
  } catch (error) {
    console.error(`Error getting ${key} from settings:`, error);
    return null;
  }
}

export function saveSettingsToLocalStorage(key, value) {
  try {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    settings[key] = value;
    localStorage.setItem('settings', JSON.stringify(settings));
  } catch (error) {
    console.error(`Error saving ${key} to settings:`, error);
  }
}

export function getDrinksFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('drinks')) || [];
  } catch (error) {
    console.error('Error getting drinks from local storage:', error);
    return [];
  }
}

export function saveDrinkToLocalStorage(drink) {
  try {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];

    // Split the drink string into sections
    const sections = drink.split('Description:');
    const titleSection = sections[0].replace('Drink Name:', '').trim();
    const title = titleSection.split('\n').pop().trim();
    const description = sections[1].split('Recipe:')[0].trim();
    const recipe = sections[1].split('Recipe:')[1].trim();

    // Save the drink as an object with title, description, and recipe properties
    drinks.push({ title, description, recipe });
    localStorage.setItem('drinks', JSON.stringify(drinks));
  } catch (error) {
    console.error('Error saving drink to local storage:', error);
  }
}

export function deleteDrinkFromLocalStorage(drinkTitle) {
  try {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    const updatedDrinks = drinks.filter((drink) => drink.title !== drinkTitle);
    localStorage.setItem('drinks', JSON.stringify(updatedDrinks));
  } catch (error) {
    console.error('Error deleting drink from local storage:', error);
  }
}
