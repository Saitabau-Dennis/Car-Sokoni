// Utility functions for localStorage operations

export const saveToLocalStorage = (key, data) => {
  try {
    // Check if localStorage is available (it might not be in some environments)
    if (typeof Storage === 'undefined') {
      return;
    }
    
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.warn('Could not save to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    // Check if localStorage is available (it might not be in some environments)
    if (typeof Storage === 'undefined') {
      return undefined;
    }
    
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.warn('Could not load from localStorage:', error);
    return undefined;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Could not remove from localStorage:', error);
  }
};

// Specific functions for different data types
export const saveCartToStorage = (cartState) => {
  const dataWithVersion = {
    ...cartState,
    version: '1.0'
  };
  saveToLocalStorage('cart', dataWithVersion);
};

export const loadCartFromStorage = () => {
  const data = loadFromLocalStorage('cart');
  // Handle version compatibility if needed
  if (data && !data.version) {
    // Old format, might need migration
    return data;
  }
  return data;
};

export const clearCartFromStorage = () => removeFromLocalStorage('cart');

export const saveCarsToStorage = (carsState) => {
  const dataWithVersion = {
    ...carsState,
    version: '1.0'
  };
  saveToLocalStorage('cars', dataWithVersion);
};

export const loadCarsFromStorage = () => {
  const data = loadFromLocalStorage('cars');
  // Handle version compatibility if needed
  if (data && !data.version) {
    // Old format, might need migration
    return data;
  }
  return data;
};

// Clear all app data from localStorage
export const clearAllAppData = () => {
  clearCartFromStorage();
  removeFromLocalStorage('cars');
  console.log('All app data cleared from localStorage');
};
