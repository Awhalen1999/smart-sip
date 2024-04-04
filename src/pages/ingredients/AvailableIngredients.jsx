import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import ingredientsList from './IngredientList.js';
import {
  addItemToLocalStorage,
  removeItemFromLocalStorage,
  getCheckedItemsFromLocalStorage,
  getCustomItemsFromLocalStorage,
  addCustomItemToLocalStorage,
  removeCustomItemFromLocalStorage,
} from '../../utils/api.js';
import { MdMenuOpen } from 'react-icons/md';
import { IoAddOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';

const AvailableIngredients = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const [searchTerm, setSearchTerm] = useState('');
  const [customItems, setCustomItems] = useState({});
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
    setCustomItems(getCustomItemsFromLocalStorage());
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

  const handleAddItem = (category) => {
    const item = prompt('Enter the name of the new item:');
    if (item) {
      addCustomItemToLocalStorage(category, item);
      setCustomItems((prevItems) => ({
        ...prevItems,
        [category]: [...(prevItems[category] || []), item],
      }));
      addItemToLocalStorage(item);
      setCheckedItems([...checkedItems, item]);
    }
  };

  const handleDeleteItem = (category, item) => {
    removeItemFromLocalStorage(item);
    removeCustomItemFromLocalStorage(category, item); // Use the function
    setCheckedItems(checkedItems.filter((i) => i !== item));
    setCustomItems((prevItems) => ({
      ...prevItems,
      [category]: prevItems[category].filter((i) => i !== item),
    }));
  };

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-start justify-start px-8  mx-auto'>
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
                <div className='flex items-center'>
                  <h2 className='text-2xl py-4'>{category}</h2>
                  <button
                    className='ml-4 btn btn-ghost btn-sm'
                    onClick={() => handleAddItem(category)}
                  >
                    <IoAddOutline size={24} />
                  </button>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                  {[...items, ...(customItems[category] || [])]
                    .filter((item) =>
                      item.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <div
                        key={index}
                        className='border border-base-content px-6 py-2 rounded text-md'
                      >
                        <label className='flex items-center'>
                          <input
                            type='checkbox'
                            className='checkbox checkbox-primary border-base-content checked:border-primary mr-2'
                            value={item}
                            onChange={handleCheckboxChange}
                            checked={checkedItems.includes(item)}
                          />
                          {item}
                          {customItems[category]?.includes(item) && (
                            <button
                              className='ml-4 text-error'
                              onClick={() => handleDeleteItem(category, item)}
                            >
                              <TiDelete size={24} />
                            </button>
                          )}
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
            <input
              type='text'
              className='grow'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch />
          </label>
        </ul>
      </div>
    </div>
  );
};

export default AvailableIngredients;
