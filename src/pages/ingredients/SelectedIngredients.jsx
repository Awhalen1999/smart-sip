import React, { useState, useEffect } from 'react';
import ingredientsList from './IngredientList.js';
import {
  getCheckedItemsFromLocalStorage,
  removeItemFromLocalStorage,
  getCustomItemsFromLocalStorage,
} from '../../utils/api.js';

const SelectedIngredients = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [customItems, setCustomItems] = useState({});

  useEffect(() => {
    setCheckedItems(getCheckedItemsFromLocalStorage());
    setCustomItems(getCustomItemsFromLocalStorage());
  }, []);

  const handleCheckboxChange = (event) => {
    const item = event.target.value;
    if (!event.target.checked) {
      removeItemFromLocalStorage(item);
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  const renderCategoryItems = (category, items) => (
    <div key={category}>
      <h2 className='text-2xl py-4'>{category}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-2'>
        {[...items, ...(customItems[category] || [])]
          .filter((item) => checkedItems.includes(item))
          .map((item, index) => (
            <div
              key={index}
              className='border border-base-content pr-10 pl-2 py-2 rounded text-md'
            >
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary border-base-content checked:border-primary mr-2'
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
  );

  return (
    <div className='px-8  '>
      {Object.entries(ingredientsList).map(([category, items]) =>
        renderCategoryItems(category, items)
      )}
    </div>
  );
};

export default SelectedIngredients;
