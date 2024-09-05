const apiUrl =
  import.meta.env.MODE === 'production'
    ? 'https://smart-sip-backend-production.up.railway.app'
    : 'http://localhost:3000';

export async function registerUser(username, email, password) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const message = await response.json();
      console.error('Error response from server:', message);
      throw new Error(message.message);
    }

    const data = await response.json();
    console.log('User registered successfully:', data);
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const message = await response.json();
      console.error('Error response from server:', message);
      throw new Error(message.message);
    }

    const data = await response.json();
    console.log('User logged in successfully:', data);
    console.log('Logged in user data:', data);
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(`${apiUrl}/users/logout`, {
      method: 'POST',
      credentials: 'include', // Include credentials to ensure session cookie is sent
    });

    if (!response.ok) {
      const message = await response.json();
      console.error('API: logoutUser error', message);
      throw new Error(message.message);
    }

    console.log('API: logoutUser response', await response.clone().json());
    return response.json();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
}

// Adds an item to local storage if it doesn't already exist
export function addItemToLocalStorage(item) {
  try {
    let items = getCheckedItemsFromLocalStorage();
    if (!items.includes(item)) {
      items.push(item);
      localStorage.setItem('checkedIngredients', JSON.stringify(items));
    }
  } catch (error) {
    console.error('Error adding item to local storage:', error);
  }
}

// Removes an item from local storage
export function removeItemFromLocalStorage(item) {
  try {
    let items = getCheckedItemsFromLocalStorage();
    items = items.filter((i) => i !== item);
    localStorage.setItem('checkedIngredients', JSON.stringify(items));
  } catch (error) {
    console.error('Error removing item from local storage:', error);
  }
}

// Retrieves checked items from local storage
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

// Retrieves custom items from local storage
export function getCustomItemsFromLocalStorage() {
  try {
    const customItems = localStorage.getItem('customItems');
    return customItems ? JSON.parse(customItems) : {};
  } catch (error) {
    console.error('Error parsing customItems from local storage:', error);
    return {};
  }
}

// Adds a custom item to a category in local storage
export function addCustomItemToLocalStorage(category, item) {
  try {
    const customItems = getCustomItemsFromLocalStorage();
    if (!customItems[category] || !customItems[category].includes(item)) {
      customItems[category] = [...(customItems[category] || []), item];
      localStorage.setItem('customItems', JSON.stringify(customItems));
    }
  } catch (error) {
    console.error('Error adding custom item to local storage:', error);
  }
}

// Removes a custom item from a category in local storage
export function removeCustomItemFromLocalStorage(category, item) {
  try {
    const customItems = getCustomItemsFromLocalStorage();
    if (customItems[category]) {
      customItems[category] = customItems[category].filter((i) => i !== item);
      localStorage.setItem('customItems', JSON.stringify(customItems));
    }
  } catch (error) {
    console.error('Error removing custom item from local storage:', error);
  }
}

// Retrieves a setting from local storage
export function getSettingFromLocalStorage(key) {
  try {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    return settings[key];
  } catch (error) {
    console.error(`Error getting ${key} from settings:`, error);
    return null;
  }
}

// Saves a setting to local storage
export function saveSettingsToLocalStorage(key, value) {
  try {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};
    settings[key] = value;
    localStorage.setItem('settings', JSON.stringify(settings));
  } catch (error) {
    console.error(`Error saving ${key} to settings:`, error);
  }
}

// Retrieves drinks from local storage
export function getDrinksFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('drinks')) || [];
  } catch (error) {
    console.error('Error getting drinks from local storage:', error);
    return [];
  }
}

// Saves a drink to local storage
export function saveDrinkToLocalStorage(drink) {
  try {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];

    // Split the drink string into sections
    const sections = drink.split('Description:');
    const titleSection = sections[0].replace('Drink Name:', '').trim();
    const title = titleSection.split('\n').pop().trim();
    const description = sections[1].split('Recipe:')[0].trim();
    const recipe = sections[1].split('Recipe:')[1].trim();

    // Save the drink as an object with title, description, recipe, and favorite properties
    drinks.push({ title, description, recipe, favorite: false });
    localStorage.setItem('drinks', JSON.stringify(drinks));
  } catch (error) {
    console.error('Error saving drink to local storage:', error);
  }
}

// Deletes a drink from local storage
export function deleteDrinkFromLocalStorage(drinkTitle) {
  try {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    const updatedDrinks = drinks.filter((drink) => drink.title !== drinkTitle);
    localStorage.setItem('drinks', JSON.stringify(updatedDrinks));
  } catch (error) {
    console.error('Error deleting drink from local storage:', error);
  }
}

// Toggles the favorite status of a drink in local storage
export function toggleFavoriteDrink(drinkTitle) {
  try {
    const drinks = JSON.parse(localStorage.getItem('drinks')) || [];
    const updatedDrinks = drinks.map((drink) => {
      if (drink.title === drinkTitle) {
        return { ...drink, favorite: !drink.favorite };
      }
      return drink;
    });
    localStorage.setItem('drinks', JSON.stringify(updatedDrinks));
  } catch (error) {
    console.error('Error toggling favorite drink:', error);
  }
}
