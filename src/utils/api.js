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

export function getSettingsFromLocalStorage() {
  try {
    const settings = localStorage.getItem('settings');
    if (settings) {
      return JSON.parse(settings);
    } else {
      return {
        useSavedIngredients: false,
        signatureStyle: false,
        nonAlcoholicMode: false,
        showBackground: false,
        showBartenderImage: false,
      };
    }
  } catch (error) {
    console.error('Error parsing settings from local storage:', error);
    return {};
  }
}

export function saveSettingsToLocalStorage(settings) {
  try {
    localStorage.setItem('settings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings to local storage:', error);
  }
}
