import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import ingredientsList from './IngredientList.js';
import {
  addItemToLocalStorage,
  removeItemFromLocalStorage,
  getCheckedItemsFromLocalStorage,
} from '../../utils/api.js';
import { MdMenuOpen } from 'react-icons/md';

const AvailableIngredients = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const categories = [
    'Show All',
    'Alcohol',
    'Mixers',
    'Sweeteners',
    'Citrus',
    'Bitters',
    'Garnishes',
    'Other',
  ];

  useEffect(() => {
    setCheckedItems(getCheckedItemsFromLocalStorage());
  }, []);

  const handleCheckboxChange = (event) => {
    const item = event.target.value;
    if (event.target.checked) {
      addItemToLocalStorage(item);
      setCheckedItems([...checkedItems, item]);
    } else {
      removeItemFromLocalStorage(item);
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-start justify-start px-8 '>
        {/* Page content */}
        <div>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-ghost drawer-button lg:hidden mt-2'
          >
            <MdMenuOpen size={24} />
          </label>
          {Object.entries(ingredientsList)
            .filter(
              ([category]) =>
                selectedCategory === 'Show All' || category === selectedCategory
            )
            .map(([category, items]) => (
              <div key={category}>
                <h2 className='text-2xl py-4'>{category}</h2>
                <div className='grid grid-cols-6 gap-4'>
                  {items.map((item, index) => (
                    <div key={index} className='border p-2 rounded'>
                      <label className='flex items-center'>
                        <input
                          type='checkbox'
                          className='checkbox mr-2'
                          value={item}
                          onChange={handleCheckboxChange}
                          checked={checkedItems.includes(item)}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {/* Sidebar items */}
          {categories.map((category) => (
            <li
              key={category}
              className={
                selectedCategory === category
                  ? 'rounded-lg bg-primary mb-2 text-primary-content'
                  : 'mb-2'
              }
            >
              <a onClick={() => setSelectedCategory(category)}>{category}</a>
            </li>
          ))}
          <label className='input input-bordered flex items-center gap-2'>
            <input type='text' className='grow' placeholder='Search' />
            <FaSearch />
          </label>
        </ul>
      </div>
    </div>
  );
};

export default AvailableIngredients;
