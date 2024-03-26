import React, { useState, useEffect } from 'react';
import ingredientsList from './IngredientList.js';
import {
  getCheckedItemsFromLocalStorage,
  removeItemFromLocalStorage,
} from '../../utils/api.js';

const SelectedIngredients = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setCheckedItems(getCheckedItemsFromLocalStorage());
  }, []);

  const handleCheckboxChange = (event) => {
    const item = event.target.value;
    if (!event.target.checked) {
      removeItemFromLocalStorage(item);
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  return (
    <div className='px-8 py-4 min-h-screen'>
      {Object.entries(ingredientsList).map(([category, items]) => (
        <div key={category}>
          <h2 className='text-2xl py-4'>{category}</h2>
          <div className='grid grid-cols-8 gap-4'>
            {items
              .filter((item) => checkedItems.includes(item))
              .map((item, index) => (
                <div key={index} className='border p-2 rounded'>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className='checkbox mr-2'
                      value={item}
                      onChange={handleCheckboxChange}
                      checked
                    />
                    {item}
                  </label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedIngredients;
